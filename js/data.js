/* TOC LAB · Catálogos editables.
   Añade fichas a apps, proyectos o webs. La portada se actualiza automáticamente.
   fechaAlta: fecha REAL de incorporación (AAAA-MM-DD), no de realización del trabajo.
   Las fechas vacías se ordenan al final, respetando el orden de este archivo.
   Proyectos: anio = curso académico; nivel = 3.º ESO; grupo = A (sin repetir el nivel).
   Publica únicamente trabajos reales y autorizados del alumnado.
   URL: HTTPS o ruta relativa; deja "" si no hay destino. Nunca añadas contraseñas. */
window.SITE_DATA = {
  "limiteInicio": 3,
  "apps": [
    {
      "id": "lectura-viva",
      "titulo": "Lectura Viva",
      "resumen": "Aplicación para crear lecturas didácticas adaptadas a distintos niveles y necesidades educativas. Permite organizar las actividades lectoras por grupos, trabajar con contenidos personalizados y realizar un seguimiento del progreso registrado.",
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
      "resumen": "Prototipo orientado a la seudonimización de documentos mediante la sustitución de información identificativa por referencias alternativas. Utiliza una hoja de correspondencias que permite recuperar posteriormente los datos originales. Se encuentra en fase de desarrollo y validación.",
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
      "resumen": "Herramienta de apoyo para preparar y revisar programas educativos de refuerzo y profundización. Facilita la organización de la información y la elaboración estructurada de la documentación necesaria para estas actuaciones docentes.",
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
      "resumen": "Aplicación de apoyo a la elaboración y revisión de programaciones didácticas. Organiza sus contenidos por apartados y facilita la preparación de la documentación curricular, tomando como referencia la estructura de trabajo utilizada en el ámbito educativo andaluz.",
      "categoria": "Planificación",
      "icono": "grid",
      "url": "https://programador-seneca-colegiales.mimozin.chatgpt.site",
      "fechaAlta": "2026-11-01",
      "acceso": "restringido",
      "estado": "piloto",
      "plataforma": "ChatGPT"
    }
  ],
  "proyectos": [],
  "webs": [
    {
      "categoria": "Desarrollo web",
      "titulo": "MDN Web Docs",
   "icono": "assets/icons/mdn.jpg",
      "descripcion": "Documentación de referencia sobre HTML, CSS y JavaScript. Incluye explicaciones técnicas, ejemplos de código y guías para desarrollar páginas y aplicaciones web.",
      "url": "https://developer.mozilla.org/es/docs/Web",
      "id": "mdn",
      "autor": "Mozilla y comunidad MDN",
      "fechaAlta": ""
    },
    {
      "categoria": "Programación",
      "titulo": "MakeCode micro:bit",
   "icono": "assets/icons/microbit.png",
      "descripcion": "Entorno de programación visual por bloques para micro:bit. Incorpora un simulador que permite crear y comprobar programas antes de transferirlos a la placa física.",
      "url": "https://makecode.microbit.org/",
      "id": "makecode",
      "autor": "Microsoft MakeCode",
      "fechaAlta": ""
    },
    {
      "categoria": "Programación",
      "titulo": "MIT App Inventor",
   "icono": "assets/icons/mitai.png",
      "descripcion": "Plataforma de desarrollo visual para crear aplicaciones móviles mediante bloques de programación. Permite diseñar interfaces, incorporar componentes y programar su comportamiento.",
      "url": "https://appinventor.mit.edu/",
      "id": "appinventor",
      "autor": "MIT App Inventor",
      "fechaAlta": ""
    },
     /*
     */

{
  "categoria": "Desarrollo web",
  "titulo": "HTML Color Codes",
   "icono": "assets/icons/htmlcolorcodes.jpg",
  "descripcion": "Herramienta para seleccionar colores y trabajar con códigos HEX, RGB y HSL. Incluye recursos para crear y consultar paletas de colores utilizadas en diseño web.",
  "url": "https://htmlcolorcodes.com/",
  "id": "htmlcolorcodes",
  "autor": "Dixon & Moe",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Diseño 3D",
  "titulo": "Layerling",
   "icono": "assets/icons/layerling.svg",
  "descripcion": "Herramienta de diseño CAD accesible desde el navegador para crear modelos tridimensionales. Orientada al diseño de piezas y objetos destinados a impresión 3D.",
  "url": "https://layerling.com/",
  "id": "layerling",
  "autor": "Colaboradores de layerling",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Electrónica",
  "titulo": "Aprende Arduino",
   "icono": "assets/icons/arduino.png",
  "descripcion": "Recurso interactivo para iniciarse en la electrónica y la programación con Arduino. Incluye representaciones tridimensionales y explicaciones sobre componentes, conexiones y circuitos.",
  "url": "https://learn-arduino-red.vercel.app/es/",
  "id": "learnarduino",
  "autor": "DilumSanjaya",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Electrónica",
  "titulo": "ESP32 Labs",
   "icono": "assets/icons/esp32.png",
  "descripcion": "Guía interactiva centrada en el microcontrolador ESP32-S3. Combina explicaciones de programación, ejemplos de código, prácticas y recursos de simulación.",
  "url": "https://esp-labs-web.vercel.app/#/?lang=es",
  "id": "esplabs",
  "autor": "agharsallah",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Simulación",
  "titulo": "Nuclear Reactor Simulator",
   "icono": "assets/icons/dalton.png",
  "descripcion": "Simulador educativo que permite explorar el funcionamiento general de un reactor nuclear y los principios básicos relacionados con su operación y control.",
  "url": "https://dalton-nrs.manchester.ac.uk/",
  "id": "daltonnrs",
  "autor": "Dalton Nuclear Institute · Universidad de Manchester / PlayGen",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Simulación",
   "icono": "assets/icons/picuino.png",
  "titulo": "Picuino · Simulador de neumática",
  "descripcion": "Editor y simulador para diseñar circuitos neumáticos utilizando elementos como válvulas y cilindros. Permite representar conexiones y comprobar el funcionamiento de los circuitos.",
  "url": "https://www.picuino.com/neumatic/index.html",
  "id": "picuinoneumatic",
  "autor": "Carlos Félix Pardo Martín",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Electrónica",
   "icono": "assets/icons/circuits.png",
  "titulo": "Falstad CircuitJS",
  "descripcion": "Simulador interactivo de circuitos electrónicos que permite montar esquemas y observar su comportamiento. Incorpora una visualización animada de tensiones y corrientes.",
  "url": "https://www.falstad.com/circuit/circuitjs.html",
  "id": "falstadcircuitjs",
  "autor": "Paul Falstad e Iain Sharp",
  "fechaAlta": "2026-11-03"
},
{
  "categoria": "Estructuras",
   "icono": "assets/icons/structtutor.jpeg",
  "titulo": "StructTutor",
  "descripcion": "Herramientas de resolución con fines educativos para estudiantes de Ingeniería Civil.",
  "url": "https://www.structtutor.com/",
  "id": "tsructtutor",
  "autor": "-",
  "fechaAlta": "2026-11-07"
},
{
  "categoria": "Diseño 3D",
   "icono": "assets/icons/solidcraft.svg",
  "titulo": "SolidCraft",
  "descripcion": "Crea bocetos, define dimensiones y construye piezas 3D con un historial de funciones editable. Trabaja en el editor o conecta un agente de IA a través de MCP.",
  "url": "https://solidcraft.io/",
  "id": "solidcraft",
  "autor": "Tangency Labs",
  "fechaAlta": "2026-11-07"
},
{
  "categoria": "Prompts presentaciones",
   "icono": "assets/icons/github.png",
  "titulo": "NotebookLM Slide Styles Collection",
  "descripcion": "Una colección seleccionada de estilos de diseño visual (YAML) para personalizar la generación de diapositivas de NotebookLM.",
  "url": "https://github.com/YamilAyma/notebooklm-prompt-styles",
  "id": "notebooklmstylecollection",
  "autor": "Yamil Ayma",
  "fechaAlta": "2026-11-07"
},
{
  "categoria": "Prompts presentaciones",
   "icono": "assets/icons/github.png",
  "titulo": "Awesome NotebookLM Templates",
  "descripcion": "Una selección de las mejores ideas para diapositivas de NotebookLM y Kael.im, provenientes del auténtico underground creativo.",
  "url": "https://github.com/serenakeyitan/awesome-notebookLM-prompts",
  "id": "awesomenotebooklmprompts",
  "autor": "Serena",
  "fechaAlta": "2026-11-07"
},
{
  "categoria": "Electrónica",
   "icono": "assets/icons/constructa.jpeg",
  "titulo": "Constructa",
  "descripcion": "Construir, cablear y programar un robot en 3D.",
  "url": "https://constructa-page.atumx.in/",
  "id": "constructa",
  "autor": "AtumX",
  "fechaAlta": "2026-11-09"
}
     
  ]
};
