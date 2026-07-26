# Catálogo de Callein Scheller

Web-catálogo para consultar, filtrar y consultar la disponibilidad de la obra
de Callein Scheller. No necesita servidor ni base de datos: son archivos
sencillos que puedes editar tú misma y publicar gratis.

## Estructura del proyecto

```
scheller-catalogo/
├── index.html          <- la página (no hace falta tocarla)
├── css/style.css        <- estilos (no hace falta tocarla)
├── js/
│   ├── data.js          <- AQUÍ AÑADES/EDITAS LOS CUADROS
│   └── main.js          <- lógica de filtros/orden (no hace falta tocarla)
├── images/               <- AQUÍ SUBES LAS FOTOS
└── README.md
```

## 1. Añadir un cuadro nuevo

Abre `js/data.js` con cualquier editor de texto (incluso el Bloc de notas
sirve, aunque va mejor algo como VS Code o Sublime Text — son gratis).

Copia un bloque entero, desde `{` hasta `},`, y pégalo justo antes del
corchete final `];`. Cambia los valores. Por ejemplo:

```js
{
  id: "SC-014",
  categoria: "secante",
  titulo: "Barca en la playa",
  tecnica: "Secante sobre papel",
  medidas: "21 x 15 cm",
  anio: "",
  imagen: "images/secante-014.jpg",
  disponible: true,
  precio: "80 €",
  destacada: false,
  notas: ""
},
```

Categorías válidas: `oleo`, `serigrafia`, `secante`, `teatro`, `pantocrator`.

Guarda el archivo. Ya está: no hay que "subir a una base de datos" ni nada
parecido, con guardar el archivo y publicar la web (paso 3) es suficiente.

## 2. Subir las fotos

Copia los archivos de imagen dentro de la carpeta `images/`, y usa esa misma
ruta en el campo `imagen` de cada ficha (`images/nombre-del-archivo.jpg`).

Consejo: si una obra en `data.js` todavía no tiene foto, dejará ver un
recuadro con el texto "Foto pendiente de subir" en vez de romper la página,
así que puedes ir catalogando primero e ir añadiendo fotos después con
calma.

## 3. Qué hace cada control de la web

- **Buscador**: filtra por título mientras escribes.
- **Chips de categoría**: muestran solo Óleos / Serigrafías / Secantes /
  Teatro de muñecos / Pantocrátor, o todas.
- **Ordenar**: por destacadas, alfabético, tamaño (útil para ver primero
  las piezas grandes o las pequeñas), o disponibilidad.
- **Cada ficha** (al hacer clic en un cuadro): muestra la imagen grande,
  técnica, medidas, año, categoría, disponibilidad, notas y dos botones de
  contacto ya redactados con el nombre y la referencia de esa obra
  concreta, para que la persona interesada no tenga que escribir nada
  desde cero.
- Las obras marcadas `disponible: false` aparecen con una etiqueta
  "Vendido" y sin botones de contacto.
- Las marcadas `destacada: true` aparecen primero si eliges el orden
  "Destacadas primero" (el que viene seleccionado por defecto).


