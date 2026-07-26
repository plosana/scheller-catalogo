/*
  ==========================================================================
  DATOS DEL CATÁLOGO — CALLEIN SCHELLER
  ==========================================================================

  Este es el único archivo que necesitas tocar para añadir, editar o quitar
  cuadros. No hace falta saber programar: es una lista de "fichas", una por
  obra. Copia una ficha entera (desde { hasta }), pégala antes del cierre
  del array ( ]; ), cambia una coma por otra si hace falta, y rellena los
  datos.

  CAMPOS DE CADA FICHA:
  ------------------------------------------------------------------------
  id           -> Código único, no lo repitas. Sirve de referencia interna.
  categoria    -> Una de: "oleo", "serigrafia", "secante", "teatro", "pantocrator"
  titulo       -> Título de la obra. Si no tiene, pon "Sin título".
  tecnica      -> Ej: "Óleo sobre lienzo", "Serigrafía", "Secante sobre papel"
  medidas      -> Ej: "64 x 53 cm". Si no la sabes, deja "" (vacío).
  anio         -> Año o década aproximada, como texto. Ej: "h. 1945" o "".
  imagen       -> Ruta al archivo de la foto, dentro de la carpeta /images
                  Ej: "images/oleo-014.jpg"
  disponible   -> true si está en venta, false si no (se mostrará "Vendido")
  precio       -> Texto libre: "450 €", "Consultar", "" (si prefieres no mostrarlo)
  destacada    -> true para que aparezca marcada como pieza destacada
  notas        -> Cualquier detalle extra que quieras mostrar (opcional)

  CÓMO AÑADIR FOTOS:
  ------------------------------------------------------------------------
  1. Guarda la foto del cuadro dentro de la carpeta /images
     (nombres sin espacios ni acentos van mejor: secante-032.jpg)
  2. En el campo "imagen" de la ficha, escribe esa ruta: "images/secante-032.jpg"

  Todo lo demás (orden, filtros, buscador, ficha ampliada) se genera solo.
  ==========================================================================
*/

const CONTACTO = {
  email: "familia@ejemplo.com",       // <-- cambia esto por el email real
  whatsapp: "34600000000",             // <-- número con prefijo de país, sin + ni espacios
  nombreRemitente: "la familia Scheller"
};

const OBRAS = [
  {
    id: "OL-001",
    categoria: "oleo",
    titulo: "Arena, barcas y agua",
    tecnica: "Óleo sobre lienzo",
    medidas: "64 x 53 cm",
    anio: "h. 1945",
    imagen: "images/oleo-001.jpg",
    disponible: true,
    precio: "Consultar",
    destacada: true,
    notas: "Paisaje costero, pincelada ancha característica de su primera etapa."
  },
  {
    id: "OL-002",
    categoria: "oleo",
    titulo: "Bajo el puente",
    tecnica: "Óleo sobre lienzo",
    medidas: "73 x 91 cm",
    anio: "",
    imagen: "images/oleo-002.jpg",
    disponible: true,
    precio: "Consultar",
    destacada: false,
    notas: ""
  },
  {
    id: "SG-001",
    categoria: "serigrafia",
    titulo: "Ejemplo — sustituye por tu serigrafía",
    tecnica: "Serigrafía",
    medidas: "50 x 35 cm",
    anio: "",
    imagen: "images/serigrafia-ejemplo.jpg",
    disponible: true,
    precio: "Consultar",
    destacada: false,
    notas: "Ficha de ejemplo: duplica este bloque para cada serigrafía real que fotografíes."
  },
  {
    id: "SC-001",
    categoria: "secante",
    titulo: "Ejemplo — sustituye por tu secante",
    tecnica: "Secante sobre papel",
    medidas: "21 x 15 cm",
    anio: "",
    imagen: "images/secante-ejemplo.jpg",
    disponible: true,
    precio: "Consultar",
    destacada: false,
    notas: "Los secantes suelen ser piezas pequeñas y numerosas: son ideales para vender en lote o por unidad."
  },
  {
    id: "TM-001",
    categoria: "teatro",
    titulo: "Figura de teatro de muñecos",
    tecnica: "Técnica mixta",
    medidas: "",
    anio: "",
    imagen: "images/teatro-ejemplo.jpg",
    disponible: false,
    precio: "",
    destacada: false,
    notas: ""
  },
  {
    id: "PN-001",
    categoria: "pantocrator",
    titulo: "Pantocrátor",
    tecnica: "Óleo sobre tabla",
    medidas: "",
    anio: "",
    imagen: "images/pantocrator-ejemplo.jpg",
    disponible: false,
    precio: "",
    destacada: false,
    notas: ""
  }
];
