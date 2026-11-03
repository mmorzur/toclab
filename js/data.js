/* TOC LAB · Catálogos editables.
   Añade fichas a apps, proyectos o webs. La portada se actualiza automáticamente.
   fechaAlta: fecha REAL de incorporación (AAAA-MM-DD), no de realización del trabajo.
   Las fechas vacías se ordenan al final, respetando el orden de este archivo.
   Proyectos: anio = curso académico; nivel = 3.º ESO; grupo = A (sin repetir el nivel).
   ejemplo: true identifica una muestra; no lo quites hasta incorporar un trabajo real.
   URL: HTTPS o ruta relativa; deja "" si no hay destino. Nunca añadas contraseñas. */
window.SITE_DATA = {
  "limiteInicio": 3,
  "apps": [
    {
      "id": "lectura-viva",
      "titulo": "Lectura Viva",
      "resumen": "Lecturas didácticas personalizadas y seguimiento lector por grupos y niveles.",
      "categoria": "Lectura",
      "icono": "book",
      "url": "https://lecturaviva.mmorzur733.workers.dev/",
      "fechaAlta": "2026-11-01",
      "acceso": "cuenta-docente",
      "estado": "publicada",
      "plataforma": "Cloudflare"
    },
    {
      "id": "enigma",
      "titulo": "Máquina Enigma",
      "resumen": "Prototipo de seudonimización de documentos, hoja clave y restauración.",
      "categoria": "Privacidad",
      "icono": "key",
      "url": "https://maquina-enigma.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    },
    {
      "id": "acompana",
      "titulo": "Acompaña",
      "resumen": "Asistente docente para preparar y revisar programas de refuerzo y profundización.",
      "categoria": "Apoyo docente",
      "icono": "compass",
      "url": "https://acompana-los-colegiales.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    },
    {
      "id": "programador",
      "titulo": "Programador Séneca",
      "resumen": "Apoyo a la elaboración y revisión de programaciones didácticas por apartados.",
      "categoria": "Planificación",
      "icono": "grid",
      "url": "https://programador-seneca-colegiales.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    }
  ],
  "proyectos": [
    {
      "id": "web-divulgacion",
      "titulo": "Web de divulgación científica",
      "resumen": "Dos páginas conectadas para explicar un fenómeno científico de forma visual y clara.",
      "descripcion": "Ejemplo de proyecto HTML y CSS con navegación, imágenes, estilos compartidos y una reflexión sobre las fuentes utilizadas. La ficha muestra cómo documentar un trabajo sin publicar datos del alumnado.",
      "materia": "Computación y Robótica",
      "anio": "2026/27",
      "etiquetas": [
        "HTML",
        "CSS",
        "Web"
      ],
      "icono": "web",
      "url": "",
      "codigo": "",
      "nivel": "3.º ESO",
      "grupo": "",
      "fechaAlta": "",
      "ejemplo": true
    },
    {
      "id": "robot-obstaculos",
      "titulo": "Robot que detecta obstáculos",
      "resumen": "Programación por bloques, lectura del sensor y pruebas de respuesta automática.",
      "descripcion": "Ficha ilustrativa de un sistema robótico con una entrada, una decisión y una salida. Puede enlazar a una página de documentación, un vídeo autorizado o una simulación.",
      "materia": "Computación y Robótica",
      "anio": "2025/26",
      "etiquetas": [
        "Robótica",
        "Sensores",
        "MakeCode"
      ],
      "icono": "robot",
      "url": "",
      "codigo": "",
      "nivel": "2.º ESO",
      "grupo": "",
      "fechaAlta": "",
      "ejemplo": true
    },
    {
      "id": "economia-local",
      "titulo": "Mapa de iniciativas locales",
      "resumen": "Investigación y representación de propuestas de economía y emprendimiento.",
      "descripcion": "Ejemplo de producto de investigación orientado a comparar iniciativas con indicadores definidos, citar fuentes y comunicar conclusiones.",
      "materia": "Economía y Emprendimiento",
      "anio": "2026/27",
      "etiquetas": [
        "Investigación",
        "Datos",
        "Entorno"
      ],
      "icono": "chart",
      "url": "",
      "codigo": "",
      "nivel": "4.º ESO",
      "grupo": "",
      "fechaAlta": "",
      "ejemplo": true
    }
  ],
  "webs": [
    {
      "categoria": "DESARROLLO WEB",
      "titulo": "MDN Web Docs",
   "icono": "assets/icons/mdn.jpg",
      "descripcion": "Referencia sobre HTML, CSS y JavaScript.",
      "url": "https://developer.mozilla.org/es/docs/Web",
      "id": "mdn",
      "autor": "Mozilla y comunidad MDN",
      "fechaAlta": ""
    },
    {
      "categoria": "COMPUTACIÓN FÍSICA",
      "titulo": "MakeCode micro:bit",
   "icono": "assets/icons/microbit.png",
      "descripcion": "Programación visual y simulador para micro:bit.",
      "url": "https://makecode.microbit.org/",
      "id": "makecode",
      "autor": "Microsoft MakeCode",
      "fechaAlta": ""
    },
    {
      "categoria": "APPS",
      "titulo": "MIT App Inventor",
   "icono": "assets/icons/mitai.png",
      "descripcion": "Entorno visual para construir aplicaciones.",
      "url": "https://appinventor.mit.edu/",
      "id": "appinventor",
      "autor": "MIT App Inventor",
      "fechaAlta": ""
    },
     /*
     */

{
  "categoria": "APPS",
  "titulo": "HTML Color Codes",
   "icono": "assets/icons/htmlcolorcodes.jpg",
  "descripcion": "Selector de colores y paletas con códigos HEX, RGB y HSL para diseño web.",
  "url": "https://htmlcolorcodes.com/",
  "id": "htmlcolorcodes",
  "autor": "Dixon & Moe",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "APPS",
  "titulo": "Layerling",
   "icono": "assets/icons/layerling.svg",
  "descripcion": "Herramienta CAD en el navegador para diseñar modelos destinados a impresión 3D.",
  "url": "https://layerling.com/",
  "id": "layerling",
  "autor": "Colaboradores de layerling",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "APPS",
  "titulo": "Aprende Arduino",
   "icono": "assets/icons/arduino.png",
  "descripcion": "Lecciones interactivas en 3D para iniciarse en Arduino, circuitos y componentes electrónicos.",
  "url": "https://learn-arduino-red.vercel.app/es/",
  "id": "learnarduino",
  "autor": "DilumSanjaya",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "APPS",
  "titulo": "ESP32 Labs",
   "icono": "assets/icons/esp32.png",
  "descripcion": "Guía interactiva de ESP32-S3 con prácticas, simuladores y explicaciones del código.",
  "url": "https://esp-labs-web.vercel.app/#/?lang=es",
  "id": "esplabs",
  "autor": "agharsallah",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "APPS",
  "titulo": "Nuclear Reactor Simulator",
   "icono": "assets/icons/dalton.png",
  "descripcion": "Simulador educativo para explorar el funcionamiento y control de un reactor nuclear.",
  "url": "https://dalton-nrs.manchester.ac.uk/",
  "id": "daltonnrs",
  "autor": "Dalton Nuclear Institute · Universidad de Manchester / PlayGen",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "APPS",
   "icono": "assets/icons/picuino.png",
  "titulo": "Picuino · Simulador de neumática",
  "descripcion": "Editor y simulador de circuitos neumáticos con válvulas, cilindros y ejemplos.",
  "url": "https://www.picuino.com/neumatic/index.html",
  "id": "picuinoneumatic",
  "autor": "Carlos Félix Pardo Martín",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "APPS",
   "icono": "assets/icons/circuits.png",
  "titulo": "Falstad CircuitJS",
  "descripcion": "Editor y simulador de circuitos electrónicos con visualización animada de tensiones y corrientes.",
  "url": "https://www.falstad.com/circuit/circuitjs.html",
  "id": "falstadcircuitjs",
  "autor": "Paul Falstad e Iain Sharp",
  "fechaAlta": "2026-11-03"
}
     
  ]
};
