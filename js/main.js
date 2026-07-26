/* ==========================================================================
   LÓGICA DEL CATÁLOGO
   No hace falta tocar este archivo para añadir cuadros: eso se hace en
   data.js. Este archivo solo pinta lo que hay en data.js en la pantalla.
   ========================================================================== */

const NOMBRES_CATEGORIA = {
  oleo: "Óleo",
  serigrafia: "Serigrafía",
  secante: "Secante",
  pantocrator: "Pantocrátor"
};

const estado = {
  categoria: "todas",
  busqueda: "",
  orden: "destacadas"
};

const rejilla = document.getElementById("rejilla");
const contador = document.getElementById("contador");

/* ---------- utilidades ---------- */

function areaDeMedidas(medidas) {
  if (!medidas) return 0;
  const numeros = medidas.match(/\d+([.,]\d+)?/g);
  if (!numeros || numeros.length < 2) return 0;
  const a = parseFloat(numeros[0].replace(",", "."));
  const b = parseFloat(numeros[1].replace(",", "."));
  return a * b;
}

function normaliza(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/* ---------- filtrar + ordenar ---------- */

function obrasVisibles() {
  let lista = OBRAS.filter((o) => {
    const coincideCategoria = estado.categoria === "todas" || o.categoria === estado.categoria;
    const coincideBusqueda = normaliza(o.titulo).includes(normaliza(estado.busqueda));
    return coincideCategoria && coincideBusqueda;
  });

  switch (estado.orden) {
    case "inventario":
      lista.sort((a, b) => a.id.localeCompare(b.id, "es", { numeric: true }));
      break;
    case "titulo-az":
      lista.sort((a, b) => a.titulo.localeCompare(b.titulo, "es"));
      break;
    case "titulo-za":
      lista.sort((a, b) => b.titulo.localeCompare(a.titulo, "es"));
      break;
    case "tamano-mayor":
      lista.sort((a, b) => areaDeMedidas(b.medidas) - areaDeMedidas(a.medidas));
      break;
    case "tamano-menor":
      lista.sort((a, b) => areaDeMedidas(a.medidas) - areaDeMedidas(b.medidas));
      break;
    case "disponibilidad":
      lista.sort((a, b) => (b.disponible === true) - (a.disponible === true));
      break;
    case "destacadas":
    default:
      lista.sort((a, b) => (b.destacada === true) - (a.destacada === true));
      break;
  }
  return lista;
}

function manejarImagenFaltante(img) {
  const contenedor = img.parentElement;
  if (!contenedor) return;
  contenedor.classList.add("sin-imagen");
  img.remove();
  contenedor.insertAdjacentHTML("beforeend", "<span>Foto pendiente<br>de subir</span>");
}

/* ---------- pintar la rejilla ---------- */

function pintarRejilla() {
  const lista = obrasVisibles();
  rejilla.innerHTML = "";

  contador.textContent = `${lista.length} pieza${lista.length === 1 ? "" : "s"}`;

  if (lista.length === 0) {
    const vacio = document.createElement("div");
    vacio.className = "rejilla-vacia";
    vacio.textContent = "No hay ninguna obra que coincida con esta búsqueda.";
    rejilla.appendChild(vacio);
    return;
  }

  lista.forEach((obra) => {
    const tarjeta = document.createElement("button");
    tarjeta.className = "obra";
    tarjeta.type = "button";
    tarjeta.setAttribute("aria-label", `Ver ficha de ${obra.titulo}`);

    const meta = [NOMBRES_CATEGORIA[obra.categoria] || obra.categoria, obra.medidas]
      .filter(Boolean)
      .join(" · ");

    tarjeta.innerHTML = `
      <div class="obra-marco">
        <span class="etiqueta-inventario">Nº ${obra.id}</span>
        ${obra.disponible === false ? '<span class="etiqueta-vendido">Vendido</span>' : ""}
        <img src="${obra.imagen}" alt="${obra.titulo}" loading="lazy"
             onerror="manejarImagenFaltante(this)">
      </div>
      <div class="obra-info">
        <p class="obra-titulo">${obra.titulo}</p>
        <p class="obra-meta">${meta}</p>
        ${obra.disponible !== false && obra.precio ? `<p class="obra-precio">${obra.precio}</p>` : ""}
      </div>
    `;

    tarjeta.addEventListener("click", () => abrirFicha(obra));
    rejilla.appendChild(tarjeta);
  });
}

/* ---------- ficha ampliada ---------- */

const fichaFondo = document.getElementById("fichaFondo");

function enlaceEmail(obra) {
  const asunto = encodeURIComponent(`Consulta sobre "${obra.titulo}" (${obra.id})`);
  const cuerpo = encodeURIComponent(
    `Hola,\n\nMe interesa la obra "${obra.titulo}" (referencia ${obra.id}). ¿Podríais darme más información?\n\nGracias.`
  );
  return `mailto:${CONTACTO.email}?subject=${asunto}&body=${cuerpo}`;
}

function enlaceWhatsapp(obra) {
  const texto = encodeURIComponent(
    `Hola, me interesa la obra "${obra.titulo}" (referencia ${obra.id}) del catálogo de Callein Scheller.`
  );
  return `https://wa.me/${CONTACTO.whatsapp}?text=${texto}`;
}

function abrirFicha(obra) {
  document.getElementById("fichaId").textContent = `Nº de inventario ${obra.id}`;
  document.getElementById("fichaTitulo").textContent = obra.titulo;

  const imagenCont = document.getElementById("fichaImagen");
  imagenCont.innerHTML = `<img src="${obra.imagen}" alt="${obra.titulo}">`;

  const filas = [
    ["Técnica", obra.tecnica],
    ["Medidas", obra.medidas],
    ["Año", obra.anio],
    ["Categoría", NOMBRES_CATEGORIA[obra.categoria] || obra.categoria]
  ].filter(([, valor]) => valor);

  if (obra.disponible === false) {
    filas.push(["Disponibilidad", "Vendido"]);
  }

  document.getElementById("fichaTabla").innerHTML = filas
    .map(([etiqueta, valor]) => `<div><span>${etiqueta}</span><span>${valor}</span></div>`)
    .join("");

  document.getElementById("fichaNotas").textContent = obra.notas || "";

  const historiaCont = document.getElementById("fichaHistoria");
  if (historiaCont) {
    if (obra.historia) {
      historiaCont.innerHTML = `<h4>Historia de la pieza</h4><p>${obra.historia}</p>`;
      historiaCont.hidden = false;
    } else {
      historiaCont.hidden = true;
    }
  }

  document.getElementById("fichaPrecio").textContent =
    obra.disponible !== false && obra.precio ? obra.precio : "";

  const acciones = document.getElementById("fichaAcciones");
  if (obra.disponible === false) {
    acciones.innerHTML = "";
  } else {
    acciones.innerHTML = `
      <a class="boton boton-relleno" href="${enlaceEmail(obra)}">Consultar por email</a>
      <a class="boton boton-contorno" href="${enlaceWhatsapp(obra)}" target="_blank" rel="noopener">Escribir por WhatsApp</a>
    `;
  }

  fichaFondo.classList.add("abierta");
  document.body.style.overflow = "hidden";
}

function cerrarFicha() {
  fichaFondo.classList.remove("abierta");
  document.body.style.overflow = "";
}

document.getElementById("fichaCerrar").addEventListener("click", cerrarFicha);
fichaFondo.addEventListener("click", (e) => {
  if (e.target === fichaFondo) cerrarFicha();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarFicha();
});

/* ---------- vistas: catálogo / acerca ---------- */

const vistas = {
  catalogo: document.getElementById("catalogo"),
  acerca: document.getElementById("acerca")
};

function mostrarVista(nombre) {
  Object.entries(vistas).forEach(([clave, el]) => {
    if (el) el.hidden = clave !== nombre;
  });
}

document.querySelectorAll("[data-vista-nav]").forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarVista(enlace.dataset.vistaNav);
    vistas[enlace.dataset.vistaNav].scrollIntoView({ behavior: "smooth" });
  });
});

/* ---------- controles: buscador, chips, orden, nav ---------- */

document.getElementById("buscar").addEventListener("input", (e) => {
  mostrarVista("catalogo");
  estado.busqueda = e.target.value;
  pintarRejilla();
});

document.getElementById("orden").addEventListener("change", (e) => {
  mostrarVista("catalogo");
  estado.orden = e.target.value;
  pintarRejilla();
});

function seleccionarCategoria(categoria) {
  mostrarVista("catalogo");
  estado.categoria = categoria;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.cat === categoria));
  });

  const intro = document.getElementById("categoriaIntro");
  if (intro) {
    const texto = CATEGORIA_INTRO[categoria];
    if (texto) {
      intro.textContent = texto;
      intro.hidden = false;
    } else {
      intro.hidden = true;
    }
  }

  pintarRejilla();
}

document.getElementById("categorias").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  seleccionarCategoria(chip.dataset.cat);
});

document.querySelectorAll("[data-cat-nav]").forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    seleccionarCategoria(enlace.dataset.catNav);
    vistas.catalogo.scrollIntoView({ behavior: "smooth" });
  });
});

/* ---------- contacto general (pie de página) ---------- */

document.getElementById("pieEmail").href =
  `mailto:${CONTACTO.email}?subject=${encodeURIComponent("Consulta sobre el archivo de Callein Scheller")}`;
document.getElementById("pieWhatsapp").href =
  `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent("Hola, escribo por el catálogo de Callein Scheller.")}`;

/* ---------- sección "Acerca del artista" ---------- */

function pintarAcerca() {
  const bio = document.getElementById("acercaBio");
  const galeria = document.getElementById("acercaGaleria");
  if (!bio || !galeria || typeof ACERCA === "undefined") return;

  bio.textContent = ACERCA.bio || "";

  const reflexion = document.getElementById("acercaReflexion");
  if (reflexion) reflexion.textContent = ACERCA.reflexion || "";

  galeria.innerHTML = "";

  ACERCA.galeria.forEach((item) => {
    const figura = document.createElement("figure");
    figura.style.margin = "0";

    const meta = [item.anio].filter(Boolean).join(" · ");

    figura.innerHTML = `
      <div class="acerca-marco">
        <img src="${item.imagen}" alt="${item.titulo}" loading="lazy"
             onerror="manejarImagenFaltante(this)">
      </div>
      <figcaption>
        <p class="acerca-item-titulo">${item.titulo}</p>
        ${meta ? `<p class="acerca-item-meta">${meta}</p>` : ""}
        ${item.nota ? `<p class="acerca-item-nota">${item.nota}</p>` : ""}
      </figcaption>
    `;
    galeria.appendChild(figura);
  });
}

/* ---------- primera pintura ---------- */

pintarRejilla();
pintarAcerca();
