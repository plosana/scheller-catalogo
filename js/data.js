/*
  ==========================================================================
  DATOS DEL CATÁLOGO — CALLEIN SCHELLER
  ==========================================================================

  Este es el único archivo que necesitas tocar para añadir, editar o quitar
  cuadros. No hace falta saber programar: es una lista de "fichas", una por
  obra. Copia una ficha entera (desde { hasta }), pégala antes del cierre
  del array ( ]; ), cambia una coma por otra si hace falta, y rellena los
  datos.

  Este archivo ya viene con el contenido volcado del blog antiguo
  (schellerart.wordpress.com): títulos, medidas y contexto histórico de
  Óleos, Serigrafías, Secantes, Teatro de muñecos y el Pantocrátor.
  Lo único que falta son TUS FOTOS REALES: cada ficha apunta a una ruta
  dentro de /images (ej. "images/serigrafia-cadaques-14x21.jpg") que
  todavía no existe — la web mostrará "Foto pendiente de subir" hasta que
  guardes ahí la fotografía correspondiente con ese mismo nombre de
  archivo (o cambies la ruta del campo "imagen" por la que tú prefieras).

  CAMPOS DE CADA FICHA:
  ------------------------------------------------------------------------
  id           -> Código único, no lo repitas. Sirve de referencia interna.
  categoria    -> Una de: "oleo", "serigrafia", "secante", "teatro", "pantocrator"
  titulo       -> Título de la obra. Si no tiene, pon "Sin título".
  tecnica      -> Ej: "Óleo sobre lienzo", "Serigrafía", "Secante sobre papel"
  medidas      -> Ej: "64 x 53 cm". Si no la sabes, deja "" (vacío).
  anio         -> Año o década aproximada, como texto. Ej: "h. 1945" o "".
  imagen       -> Ruta al archivo de la foto, dentro de la carpeta /images
  disponible   -> true si está en venta, false si no (se mostrará "Vendido")
  precio       -> Texto libre: "450 €", "Consultar", "" (si prefieres no mostrarlo)
  destacada    -> true para que aparezca marcada como pieza destacada
  notas        -> Detalle corto adicional (opcional)
  historia     -> Texto largo de contexto/historia de la pieza (opcional).
                  Solo se muestra en la ficha ampliada, no en la tarjeta.
                  Úsalo para piezas con una historia especial, como el
                  Pantocrátor. Dejar "" si no aplica.

  CÓMO AÑADIR FOTOS:
  ------------------------------------------------------------------------
  1. Guarda la foto del cuadro dentro de la carpeta /images
  2. En el campo "imagen" de la ficha, escribe esa ruta: "images/nombre.jpg"
     (puedes usar el nombre de archivo que ya viene puesto, o cambiarlo por
     el que prefieras — solo asegúrate de que coincida con el del archivo)

  Todo lo demás (orden, filtros, buscador, ficha ampliada) se genera solo.
  ==========================================================================
*/

const CONTACTO = {
  email: "familia@ejemplo.com",       // <-- cambia esto por el email real
  whatsapp: "34600000000",             // <-- número con prefijo de país, sin + ni espacios
  nombreRemitente: "la familia Scheller"
};

/*
  Texto breve de contexto que aparece encima de la rejilla cuando se filtra
  por una categoría concreta (volcado también del blog antiguo). Si lo
  dejas vacío no se muestra nada.
*/
const CATEGORIA_INTRO = {
  serigrafia:
    "La serigrafía es una técnica de impresión milenaria, originaria de la antigua China, que llega a Occidente a través de la seda tensada en un marco (de ahí su nombre: sericum, seda, y graphe, escribir). Scheller alcanzó gran maestría en esta técnica laboriosa, aplicada aquí a paisajes rurales y urbanos con un lenguaje expresionista de color y trazo.",
  secante:
    "El papel secante fue un objeto cotidiano en oficinas y escuelas de los años 50 y 60, usado para absorber el exceso de tinta de las plumillas. Empresas como Pelikan los regalaban ilustrados por una cara, dirigidos al público infantil. Scheller fue uno de los ilustradores de estos secantes, con escenas de cuentos clásicos y enanitos del bosque en formato de 9 x 13 cm. Hoy son piezas muy buscadas por coleccionistas.",
  teatro:
    "El 23 de noviembre de 1947 se estrenó en la Cúpula del Coliseum de Barcelona \"La casita encantada\", un espectáculo infantil de muñecos y decorados creados por Scheller, con cuentos de los hermanos Grimm adaptados por Mª A. Sardá. Estos muñecos son los que quedaron de aquella función.",
  pantocrator:
    "Copia serigráfica de una de las pinturas murales románicas más conocidas: el Pantocrátor del ábside de Sant Climent de Taüll (alta Edad Media, s. XII). Fue la primera vez que se lograba un resultado semejante en serigrafía."
};

const OBRAS = [
  /* ======================= ÓLEOS ======================= */
  {
    id: "OL-001", categoria: "oleo", titulo: "Arena, barcas y agua",
    tecnica: "Óleo sobre lienzo", medidas: "64 x 53 cm", anio: "",
    imagen: "images/oleo-arena-barcas-agua.jpg",
    disponible: true, precio: "Consultar", destacada: true,
    notas: "Paisaje costero.", historia: ""
  },
  {
    id: "OL-002", categoria: "oleo", titulo: "Bajo el puente",
    tecnica: "Óleo sobre lienzo", medidas: "73 x 91 cm", anio: "",
    imagen: "images/oleo-bajo-el-puente.jpg",
    disponible: true, precio: "Consultar", destacada: true, notas: "", historia: ""
  },
  {
    id: "OL-003", categoria: "oleo", titulo: "Siguiendo el río",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-siguiendo-el-rio.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-004", categoria: "oleo", titulo: "Prado, pueblo y montaña",
    tecnica: "Óleo sobre lienzo", medidas: "72 x 53 cm", anio: "",
    imagen: "images/oleo-prado-pueblo-montana.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-005", categoria: "oleo", titulo: "Pueblo en las montañas",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-pueblo-en-las-montanas.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-006", categoria: "oleo", titulo: "Calle del barrio",
    tecnica: "Óleo sobre lienzo", medidas: "49 x 44 cm", anio: "",
    imagen: "images/oleo-calle-del-barrio.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-007", categoria: "oleo", titulo: "Pueblo en la pendiente",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-pueblo-en-la-pendiente.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-008", categoria: "oleo", titulo: "Prado de montaña",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-prado-de-montana.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-009", categoria: "oleo", titulo: "Tosa",
    tecnica: "Óleo sobre lienzo", medidas: "91 x 65 cm", anio: "",
    imagen: "images/oleo-tosa.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-010", categoria: "oleo", titulo: "Pueblo",
    tecnica: "Óleo sobre lienzo", medidas: "45 x 54 cm", anio: "",
    imagen: "images/oleo-pueblo.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-011", categoria: "oleo", titulo: "Playa en la costa",
    tecnica: "Óleo sobre lienzo", medidas: "64 x 53 cm", anio: "",
    imagen: "images/oleo-playa-en-la-costa.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-012", categoria: "oleo", titulo: "Pueblo de montaña",
    tecnica: "Óleo sobre lienzo", medidas: "48 x 60 cm", anio: "",
    imagen: "images/oleo-pueblo-de-montana.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-013", categoria: "oleo", titulo: "Pescadores en la playa",
    tecnica: "Óleo sobre lienzo", medidas: "54 x 45 cm", anio: "",
    imagen: "images/oleo-pescadores-en-la-playa.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-014", categoria: "oleo", titulo: "El barquero",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-el-barquero.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-015", categoria: "oleo", titulo: "Pescador entre casas",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-pescador-entre-casas.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-016", categoria: "oleo", titulo: "Patatas",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-patatas.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Bodegón.", historia: ""
  },
  {
    id: "OL-017", categoria: "oleo", titulo: "Girasoles",
    tecnica: "Óleo sobre lienzo", medidas: "59 x 72 cm", anio: "",
    imagen: "images/oleo-girasoles.jpg",
    disponible: true, precio: "Consultar", destacada: true, notas: "Bodegón.", historia: ""
  },
  {
    id: "OL-018", categoria: "oleo", titulo: "Rincones de ciudad",
    tecnica: "Óleo sobre lienzo", medidas: "22 x 55 cm", anio: "",
    imagen: "images/oleo-rincones-de-ciudad-cubismo.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Etapa cubista.", historia: ""
  },
  {
    id: "OL-019", categoria: "oleo", titulo: "La montaña rosa",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-la-montana-rosa.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-020", categoria: "oleo", titulo: "Paisaje de montaña",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-paisaje-de-montana-1.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-021", categoria: "oleo", titulo: "Ibiza",
    tecnica: "Óleo sobre lienzo", medidas: "76 x 33 cm", anio: "",
    imagen: "images/oleo-ibiza.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-022", categoria: "oleo", titulo: "La casa del ciprés",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-la-casa-del-cipres.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-023", categoria: "oleo", titulo: "Pajares y masía",
    tecnica: "Óleo sobre tabla", medidas: "108 x 42 cm", anio: "",
    imagen: "images/oleo-pajares-y-masia.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-024", categoria: "oleo", titulo: "Masía entre campos",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-masia-entre-campos.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-025", categoria: "oleo", titulo: "La casa de la laguna",
    tecnica: "Óleo sobre lienzo", medidas: "43 x 55 cm", anio: "",
    imagen: "images/oleo-la-casa-de-la-laguna.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-026", categoria: "oleo", titulo: "Diana Cazadora",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-diana-cazadora.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Retrato mitológico.", historia: ""
  },
  {
    id: "OL-027", categoria: "oleo", titulo: "Casa en la costa",
    tecnica: "Óleo sobre lienzo", medidas: "64 x 53 cm", anio: "",
    imagen: "images/oleo-casa-en-la-costa.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-028", categoria: "oleo", titulo: "Charcos en el camino",
    tecnica: "Óleo sobre lienzo", medidas: "91 x 64 cm", anio: "",
    imagen: "images/oleo-charcos-en-el-camino.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-029", categoria: "oleo", titulo: "El color del mar",
    tecnica: "Óleo sobre lienzo", medidas: "39 x 46 cm", anio: "",
    imagen: "images/oleo-el-color-del-mar.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-030", categoria: "oleo", titulo: "Cala",
    tecnica: "Óleo sobre lienzo", medidas: "33 x 41 cm", anio: "",
    imagen: "images/oleo-cala.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-031", categoria: "oleo", titulo: "Reposo",
    tecnica: "Óleo sobre lienzo", medidas: "60 x 49 cm", anio: "",
    imagen: "images/oleo-reposo.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Figura.", historia: ""
  },
  {
    id: "OL-032", categoria: "oleo", titulo: "Rincón de ciudad",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-rincon-de-ciudad.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-033", categoria: "oleo", titulo: "Tiempo de espera",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-tiempo-de-espera.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-034", categoria: "oleo", titulo: "El rugido del mar",
    tecnica: "Óleo sobre lienzo", medidas: "54 x 45 cm", anio: "",
    imagen: "images/oleo-el-rugido-del-mar.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-035", categoria: "oleo", titulo: "Venecia entre brumas",
    tecnica: "Óleo sobre lienzo", medidas: "32 x 41 cm", anio: "",
    imagen: "images/oleo-venecia-entre-brumas.jpg",
    disponible: true, precio: "Consultar", destacada: true, notas: "", historia: ""
  },
  {
    id: "OL-036", categoria: "oleo", titulo: "Barcas en la costa",
    tecnica: "Óleo sobre lienzo", medidas: "71 x 58 cm", anio: "",
    imagen: "images/oleo-barcas-en-la-costa-71x58.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-037", categoria: "oleo", titulo: "Dunas",
    tecnica: "Óleo sobre lienzo", medidas: "54 x 53 cm", anio: "",
    imagen: "images/oleo-dunas.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-038", categoria: "oleo", titulo: "Paisaje de montaña",
    tecnica: "Óleo sobre lienzo", medidas: "64 x 53 cm", anio: "",
    imagen: "images/oleo-paisaje-de-montana-2.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-039", categoria: "oleo", titulo: "Calle con palmeras",
    tecnica: "Óleo sobre lienzo", medidas: "54 x 60 cm", anio: "",
    imagen: "images/oleo-calle-con-palmeras.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-040", categoria: "oleo", titulo: "Barcas en la playa",
    tecnica: "Óleo sobre lienzo", medidas: "45 x 32 cm", anio: "",
    imagen: "images/oleo-barcas-en-la-playa-45x32.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-041", categoria: "oleo", titulo: "El espejo",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-el-espejo.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Figura.", historia: ""
  },
  {
    id: "OL-042", categoria: "oleo", titulo: "El camino",
    tecnica: "Óleo sobre lienzo", medidas: "90 x 64 cm", anio: "",
    imagen: "images/oleo-el-camino.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-043", categoria: "oleo", titulo: "Diana",
    tecnica: "Óleo sobre lienzo", medidas: "91 x 72 cm", anio: "",
    imagen: "images/oleo-diana.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Figura mitológica.", historia: ""
  },
  {
    id: "OL-044", categoria: "oleo", titulo: "Despechada",
    tecnica: "Óleo sobre lienzo", medidas: "", anio: "",
    imagen: "images/oleo-despechada.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "Figura.", historia: ""
  },
  {
    id: "OL-045", categoria: "oleo", titulo: "La calle",
    tecnica: "Óleo sobre lienzo", medidas: "49 x 63 cm", anio: "",
    imagen: "images/oleo-la-calle.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-046", categoria: "oleo", titulo: "Acantilados",
    tecnica: "Óleo sobre lienzo", medidas: "46 x 38 cm", anio: "",
    imagen: "images/oleo-acantilados.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-047", categoria: "oleo", titulo: "Barcas en la costa",
    tecnica: "Óleo sobre lienzo", medidas: "73 x 42 cm", anio: "",
    imagen: "images/oleo-barcas-en-la-costa-73x42.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-048", categoria: "oleo", titulo: "Barcas en la playa",
    tecnica: "Óleo sobre lienzo", medidas: "72 x 59 cm", anio: "",
    imagen: "images/oleo-barcas-en-la-playa-72x59.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-049", categoria: "oleo", titulo: "Barcas amarradas",
    tecnica: "Óleo sobre lienzo", medidas: "45 x 37 cm", anio: "",
    imagen: "images/oleo-barcas-amarradas.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "OL-050", categoria: "oleo", titulo: "Barceloneta",
    tecnica: "Óleo sobre lienzo", medidas: "50 x 62 cm", anio: "",
    imagen: "images/oleo-barceloneta.jpg",
    disponible: true, precio: "Consultar", destacada: true, notas: "", historia: ""
  },
  {
    id: "OL-051", categoria: "oleo", titulo: "Árboles en el camino",
    tecnica: "Óleo sobre lienzo", medidas: "27 x 41 cm", anio: "",
    imagen: "images/oleo-arboles-en-el-camino.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },

  /* ======================= SERIGRAFÍAS ======================= */
  {
    id: "SG-001", categoria: "serigrafia", titulo: "Costa Brava",
    tecnica: "Serigrafía", medidas: "20 x 25 cm", anio: "",
    imagen: "images/serigrafia-costa-brava.jpg",
    disponible: true, precio: "Consultar", destacada: true, notas: "", historia: ""
  },
  {
    id: "SG-002", categoria: "serigrafia", titulo: "Cadaqués",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-cadaques-14x21.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-003", categoria: "serigrafia", titulo: "Setcases",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-setcases.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-004", categoria: "serigrafia", titulo: "Bellver",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-bellver.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-005", categoria: "serigrafia", titulo: "Rupit",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-rupit.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-006", categoria: "serigrafia", titulo: "Salardú",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-salardu.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-007", categoria: "serigrafia", titulo: "Port de la Selva",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-port-de-la-selva.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-008", categoria: "serigrafia", titulo: "Ordino",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-ordino.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-009", categoria: "serigrafia", titulo: "Aranser",
    tecnica: "Serigrafía", medidas: "14 x 21 cm", anio: "",
    imagen: "images/serigrafia-aranser-14x21.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-010", categoria: "serigrafia", titulo: "Cadaqués desde tierra",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-cadaques-desde-tierra.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-011", categoria: "serigrafia", titulo: "Torla",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-torla.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-012", categoria: "serigrafia", titulo: "Anyós, Andorra",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-anyos-andorra.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-013", categoria: "serigrafia", titulo: "Cadaqués desde el mar",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-cadaques-desde-el-mar.jpg",
    disponible: true, precio: "Consultar", destacada: true, notas: "", historia: ""
  },
  {
    id: "SG-014", categoria: "serigrafia", titulo: "Aranser",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-aranser-32x24.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-015", categoria: "serigrafia", titulo: "Rural",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-rural.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-016", categoria: "serigrafia", titulo: "Fornells",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-fornells.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-017", categoria: "serigrafia", titulo: "Barcelona · Las Ramblas",
    tecnica: "Serigrafía", medidas: "21 x 30 cm", anio: "",
    imagen: "images/serigrafia-barcelona-las-ramblas.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-018", categoria: "serigrafia", titulo: "Barcelona · Plaza Real",
    tecnica: "Serigrafía", medidas: "21 x 30 cm", anio: "",
    imagen: "images/serigrafia-barcelona-plaza-real.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-019", categoria: "serigrafia", titulo: "Barcelona · Plaza España",
    tecnica: "Serigrafía", medidas: "21 x 30 cm", anio: "",
    imagen: "images/serigrafia-barcelona-plaza-espana.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-020", categoria: "serigrafia", titulo: "Barcelona · Puerto",
    tecnica: "Serigrafía", medidas: "21 x 30 cm", anio: "",
    imagen: "images/serigrafia-barcelona-puerto.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-021", categoria: "serigrafia", titulo: "Andorra",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-andorra.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SG-022", categoria: "serigrafia", titulo: "Pez",
    tecnica: "Serigrafía", medidas: "32 x 24 cm", anio: "",
    imagen: "images/serigrafia-pez.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },

  /* ======================= SECANTES ======================= */
  {
    id: "SC-001", categoria: "secante", titulo: "Blancanieves",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-blancanieves.jpg",
    disponible: true, precio: "Consultar", destacada: true,
    notas: "Ilustración infantil.", historia: ""
  },
  {
    id: "SC-002", categoria: "secante", titulo: "Los enanitos y los lápices",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-enanos-lapices.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SC-003", categoria: "secante", titulo: "El enano y la seta",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-enano-seta.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SC-004", categoria: "secante", titulo: "Caperucita Roja",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-caperucita.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SC-005", categoria: "secante", titulo: "Blancanieves y los enanitos",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-blancanieves-enanitos.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SC-006", categoria: "secante", titulo: "Los enanitos y el carro",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-enanos-carro.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "SC-007", categoria: "secante", titulo: "Los enanitos bajo el árbol",
    tecnica: "Secante ilustrado (edición Pelikan)", medidas: "9 x 13 cm", anio: "h. 1950-60",
    imagen: "images/secante-enanos-arbol.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },

  /* ======================= TEATRO DE MUÑECOS ======================= */
  {
    id: "TM-001", categoria: "teatro", titulo: "Muñecos de \"La casita encantada\" (grupo)",
    tecnica: "Muñeco y decorado de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-munecos-grupo-1.jpg",
    disponible: true, precio: "Consultar", destacada: true,
    notas: "Figuras del elenco de la función estrenada en el Coliseum de Barcelona.", historia: ""
  },
  {
    id: "TM-002", categoria: "teatro", titulo: "Muñecos de \"La casita encantada\" (grupo)",
    tecnica: "Muñeco y decorado de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-munecos-grupo-2.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-003", categoria: "teatro", titulo: "Caperucita Roja",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-caperucita.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-004", categoria: "teatro", titulo: "Gato con botas y Genio",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-gato-con-botas-genio.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-005", categoria: "teatro", titulo: "Enano, rey y bruja",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-enano-rey-bruja.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-006", categoria: "teatro", titulo: "Princesas y ogro",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-princesas-ogro.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-007", categoria: "teatro", titulo: "Chino y cazador",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-chino-cazador.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-008", categoria: "teatro", titulo: "Niños y enanos",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-ninos-enanos.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },
  {
    id: "TM-009", categoria: "teatro", titulo: "Niñas, brujos y enanos",
    tecnica: "Muñeco de teatro, técnica mixta", medidas: "", anio: "1947",
    imagen: "images/teatro-ninas-brujos-enanos.jpg",
    disponible: true, precio: "Consultar", destacada: false, notas: "", historia: ""
  },

  /* ======================= PANTOCRÁTOR ======================= */
  {
    id: "PN-001",
    categoria: "pantocrator",
    titulo: "Copia serigráfica del Pantocrátor de Sant Climent de Taüll",
    tecnica: "Serigrafía (superposición de 78 capas de color)",
    medidas: "57 x 43 cm",
    anio: "1961",
    imagen: "images/pantocrator-principal.jpg",
    disponible: true,
    precio: "Consultar",
    destacada: true,
    notas: "Existen también fotografías de detalle (texturas, color, presentación de 1961) que pueden acompañar la ficha o mostrarse como material adicional.",
    historia:
      "Esta serigrafía reproduce el busto del Pantocrátor del ábside de Sant Climent de Taüll, una de las pinturas murales románicas más célebres conservadas (alta Edad Media, siglo XII). Scheller la realizó en 1961 con motivo de la Exposición Internacional de Arte Románico, superponiendo 78 capas de color hasta lograr una luz y unos matices que, según la crítica de la época, no se habían conseguido antes en esta técnica. La pieza fue reseñada en la prensa de 1961 (hemeroteca de La Vanguardia) y su presentación quedó documentada en folletos de la exposición."
  }
];
