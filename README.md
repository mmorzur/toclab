# TOC LAB

Web personal con tres catálogos independientes y una portada que muestra las tres últimas incorporaciones de cada área. HTML, CSS y JavaScript sin dependencias, compatible con GitHub Pages y con rutas relativas.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Portada y últimas incorporaciones de las tres áreas |
| `laboratorio.html` | Aplicaciones web propias, descripción y enlace |
| `proyectos.html` | Proyectos del alumnado con búsqueda y filtros combinados |
| `webs.html` | Webs de otros autores con atribución, descripción, categoría y enlace |

El logotipo y la paleta de TOC LAB se mantienen. El diseño utiliza fondo claro, azul y ámbar, con un bloque oscuro para el laboratorio en la portada.

## Blog docente y autoría

La portada incluye un acceso destacado al blog docente facilitado por el autor:
https://blogsaverroes.juntadeandalucia.es/tecnologocompulsivo/

El blog reúne contenidos propios y queda separado del catálogo de webs de otros autores. La firma «By Miguel Ángel Morales» aparece en el pie de las cuatro páginas y enlaza al mismo blog. El antiguo botón «Entrar al laboratorio» se ha eliminado de la presentación inicial.

## Gestionar los contenidos

Para editar las fichas, modifica `js/data.js`. La navegación, los filtros y las últimas incorporaciones de la portada se actualizan desde ese archivo; no hay que repetir las fichas en el HTML. Los textos de presentación se editan en la página correspondiente.

- `apps`: aplicaciones propias.
- `proyectos`: trabajos del alumnado.
- `webs`: sitios externos de otros autores.
- `limiteInicio`: número máximo de fichas por sección en portada; por defecto, 3.

Cada ficha lleva un `id` único, un título y los textos y enlaces adecuados a su catálogo. Las URL admiten HTTPS o rutas relativas. Una URL vacía muestra la ficha sin inventar un enlace.

### Editar textos a mano en GitHub

| Texto que se quiere cambiar | Archivo o campo |
| --- | --- |
| Titular, presentación y descripción del blog | `index.html` |
| Introducciones de cada catálogo | `laboratorio.html`, `proyectos.html` o `webs.html` |
| Descripción de una aplicación | `resumen` de su ficha en `js/data.js` |
| Descripción de una web externa | `descripcion` de su ficha en `js/data.js` |
| Pie de página y firma | Las cuatro páginas HTML |

1. Abre el archivo en GitHub y pulsa el lápiz **Edit this file**.
2. Busca la frase y modifica su contenido conservando etiquetas, identificadores y enlaces. En `js/data.js`, conserva las comillas y las comas; si necesitas comillas dentro de un texto, usa «comillas españolas».
3. Pulsa **Commit changes**, guarda en `main` y espera a que finalice la publicación de GitHub Pages.
4. Comprueba la página publicada. Si permanece la versión anterior, recarga la página; las versiones de los recursos se generan automáticamente.

### Incorporaciones recientes

`fechaAlta` indica la **fecha real de incorporación al catálogo**, con formato `AAAA-MM-DD`. Se ordena de la más reciente a la más antigua. Las fichas sin fecha aparecen después, en el orden de `data.js`; los empates conservan también ese orden. No confundir con el curso académico del trabajo.

Las apps de este rediseño se incorporaron el 01/11/2026. No se han atribuido fechas históricas a las fichas heredadas que no las tenían.

### Añadir una aplicación

```js
{
  id: "mi-app",
  titulo: "Nombre de la app",
  resumen: "Qué permite hacer y para quién está pensada.",
  categoria: "Apoyo docente",
  icono: "grid", // key, compass, book o grid
  fechaAlta: "", // Completar con la fecha real de incorporación.
  url: "",       // Dirección publicada de la app.
  estado: "piloto", // Usar "publicada" para una instalación externa verificada.
  plataforma: "ChatGPT",
  acceso: "restringido" // "publico" o "cuenta-docente" según su acceso real.
}
```

Los enlaces a otras apps **no modifican sus permisos**. Lectura Viva enlaza a su instalación publicada desde el repositorio `mmorzur/lecturaviva`, en `https://lecturaviva.mmorzur733.workers.dev/`, y usa cuentas docentes propias. Máquina Enigma, Acompaña y Programador Séneca conservan sus direcciones de ChatGPT y se identifican como «Piloto · ChatGPT».

En cada app, `estado` admite `publicada` o `piloto`; `plataforma` identifica el alojamiento para la búsqueda. El botón de los pilotos dice «Abrir piloto». Las direcciones `*.chatgpt.site` se identifican automáticamente como pilotos, aunque falte el campo. `acceso: "cuenta-docente"` muestra «Cuenta docente» y `acceso: "restringido"` muestra «Acceso restringido». El estado de publicación y el tipo de acceso se muestran por separado. «Versión publicada» identifica la instalación externa; no certifica su madurez o ausencia de errores.

### Añadir un proyecto

```js
{
  id: "proyecto-unico",
  titulo: "Nombre del proyecto",
  resumen: "Descripción breve del producto o trabajo.",
  descripcion: "Contexto, desarrollo y resultado.",
  anio: "2026/27",  // Curso académico.
  nivel: "3.º ESO", // Nivel educativo.
  grupo: "A",       // Grupo dentro del nivel; vacío si se desconoce.
  materia: "Tecnología y Digitalización",
  etiquetas: ["Prototipo", "Diseño"],
  icono: "web", // web, robot o chart
  fechaAlta: "",
  url: "",
  codigo: "",
  ejemplo: false // Solo para trabajos reales revisados.
}
```

Los filtros son **curso académico + nivel + grupo**, combinables con la búsqueda por título, materia, tema o etiquetas. Los niveles disponibles dependen del curso académico; los grupos, del curso académico y del nivel. Si una selección deja de existir, se restablece automáticamente. Los proyectos sin grupo tienen la opción «Sin especificar».

Los filtros quedan en la URL y se conservan al recargar o compartir el enlace. La búsqueda ignora mayúsculas y tildes. «Limpiar filtros» y el botón del estado sin resultados recuperan el listado completo.

Las **tres fichas de demostración se han retirado del catálogo público**. Mientras no existan proyectos reales, la portada y la página de proyectos muestran un aviso de sección en preparación; los filtros no se presentan vacíos. Incorpora únicamente trabajos documentados y autorizados para su publicación. El campo `ejemplo: false` se mantiene en el modelo de ficha para distinguir los proyectos auténticos de futuras muestras de prueba.

Para publicar un proyecto HTML local, guarda sus archivos en una carpeta y usa una ruta como `proyectos/2026-27/3ESO-A/proyecto-01/index.html`. También puedes enlazar una web, documento, vídeo o repositorio que ya esté publicado.

### Añadir una web de otro autor

```js
{
  id: "referencia-unica",
  titulo: "Nombre de la web",
  descripcion: "Qué permite hacer y cuáles son sus funciones principales.",
  icono: "assets/icons/nombre-del-icono.png", // Opcional; ruta exacta del archivo subido.
  autor: "Autor, entidad o comunidad responsable",
  categoria: "DESARROLLO WEB",
  fechaAlta: "",
  url: ""
}
```

El catálogo permite buscar por título, autor, descripción o categoría, y filtrar por categoría. Sus diez recursos están clasificados como Desarrollo web, Programación, Diseño 3D, Electrónica o Simulación. Las siete incorporaciones más recientes se añadieron el 03/11/2026.

### Publicar una nueva web o un icono

1. Si la ficha lleva icono, sube primero la imagen a `assets/icons/`. Usa nombres sencillos y conserva la extensión real: `png`, `jpg`, `webp` o `svg`.
2. Edita `js/data.js`, dentro de `webs`: añade una ficha con un `id` único y su `fechaAlta` real (`AAAA-MM-DD`). Separa las fichas con comas.
3. En `icono`, escribe la ruta exacta, respetando mayúsculas y extensión. Ejemplo actual: `assets/icons/layerling.svg`. Puedes dejar el campo vacío u omitirlo para usar el icono neutro.
4. Guarda los cambios en `main` y espera a que el último proceso **pages build and deployment** termine correctamente en **Actions**.
5. Comprueba el total y las imágenes en `webs.html`. La portada muestra solo las tres incorporaciones más recientes; una ficha sin fecha queda detrás de las que sí la tienen.

**No hay que editar las cuatro páginas HTML ni cambiar números de versión al añadir fichas, corregir textos o reemplazar imágenes.** Si solo corriges una ficha, conserva su fecha de incorporación.

### Actualización automática de archivos

Las cuatro páginas tienen una pequeña cabecera de Jekyll y usan `site.github.build_revision` para sus referencias a `data.js`, `app.js` y `styles.css`. GitHub Pages ya ejecuta Jekyll en la publicación de este repositorio; no se añade otro servicio, dependencia o proceso manual.

Cada nueva publicación produce automáticamente una URL de recurso distinta. La misma revisión se aplica a los iconos locales desde `app.js`, incluso cuando se reemplaza una imagen manteniendo su nombre. Las URLs externas conservan sus propios parámetros. Las fichas sin imagen o con un archivo que no carga muestran un icono neutro.

La revisión sirve para actualizar la caché; `fechaAlta` sirve únicamente para ordenar las fichas. Una nueva publicación requiere que el visitante cargue o recargue la página: una pestaña ya abierta no se modifica sola. La actualización sigue dependiendo de que GitHub Pages haya terminado de publicar.

Conserva las cabeceras iniciales de Jekyll y las expresiones Liquid de las páginas. Para una previsualización local idéntica a producción hay que procesarlas con Jekyll; `js/data.js` sigue siendo JavaScript editable normal.

## Publicación y límites

El repositorio existente publica desde `main` con GitHub Pages. La generación automática de versiones aprovecha el paso de Jekyll que ya ejecuta GitHub; el editor no necesita instalar ni compilar nada. Mantén `index.html`, las tres páginas de catálogo y las carpetas `assets`, `css` y `js` en la misma raíz.

No hay base de datos, panel de administración, cuentas ni subidas públicas. El contenido se edita en `js/data.js`. Los archivos de `ejemplos/` y `css/styles_v1.css` se conservan; el nuevo diseño no los utiliza. No se publican claves ni datos identificativos del alumnado en las fichas.
