<a id="que-es-html5"></a>

# ¿Qué es HTML5?

Nos encontramos en un artículo más sobre este grandioso lenguaje de la web, así que ahí vamos. Entendiendo que HTML es un lenguaje de marcado de información que permite definir y estructurar los datos en nuestros sitios web. Surge la interrogante 😞 **¿Qué es HTML5?**, aquí vamos con la respuesta.

**HTML5, es una nueva versión con un conjunto de mejoras que comprenden nuevas características y funcionalidades al lenguaje HTML**. Pero, ¿Qué tipo de mejoras? Aquí los vamos a responder.

A continuación te detallaré cada una de las mejore con mayor auge y peso en el desarrollo web y que usaremos en nuestro día a día como programadores.

- Etiquetas Semánticas (header, section, main, article, aside, nav, footer).
- API integradas en el navegador (Canvas, IndexedDB, LocalStorage, Audio, Video, Drag & Drop y mucho más)
- Soporte a Formularios, SVG, MathML

Como puedes apreciar en la lista, HTML no es un simple lenguaje, y va más allá de tan solo escribir etiquetas y colocar el contenido, tiene muchas funcionalidades que hacen más fácil el trabajo de los desarrolladores web. Vamos a verlo a detalle.

<a id="tag-semanticos"></a>

## Etiquetas semánticas

Antes de HTML5, si querías dividir tu sitio web en diferentes secciones tenías que hacer uso de los **famosos div y tables**, era muy engorroso, difícil de entender y mantener y para ello basta con una prueba, mira el código de abajo. 👇

🔗 <a href="https://codepen.io/estivenMayhuay/pen/rNpgbbx" target="_blank"><strong>Link a Codepen.io estructura con tablas</strong></a>

Estamos usando **Codepen.io**, selecciona en la parte donde dice **HTML** verás el código en donde encontraras un conjunto de elementos **(table, tr, td, th)**

Está todo muy enredada verdad 😄, gracias al **Dios de la programación** llegaron las etiquetas semánticas, es decir, son aquellos tags creados con un significado, con un propósito específico.

Tenemos a **header** que nos permite definir la cabecera de nuestro sitio web, **nav** para definir los elementos que conformaran nuestro menú de navegación, **section** en el cual se define la información relevante de nuestro sitio y **footer** representa el pie de página, el final del sitio web. Pero vayamos al código para que lo entiendas mejor ahora **ya no usaremos tablas, sino semantic tags**

Como puedes apreciar en el código HTML, toda está sencillo, entendible y con un significado cierto. Por ejemplo:

- **La etiqueta p** para los párrafos
- **La etiqueta h1,h2** para los encabezados
- **La etiqueta ul** para listas no ordenadas
- **La etiqueta li** son los list items
- **La etiqueta a** son los enlaces (links)

🔗 <a href="https://codepen.io/estivenMayhuay/pen/dyJEEwQ" target="_blank"><strong>Link a Codepen.io Estructura con etiquetas semánticas</strong></a>

Probablemente, si estás usando **EMCODY** en un móvil se vea todo desordenado y esto es debido a que no estamos haciendo uso del **CSS para lograr el Responsive Web Design** tema del cual hablaremos luego.

Ahora bien, si visualizas el código HTML y lo comparas con el anterior código hecho con tablas. ¿Cuál crees tú que es mejor? ¿Cuál es más entendible y fácil de leer? ¿Con cuál código te quedas?

<a id="api-integradas"></a>

## API's Integradas

Primero vamos a definir que es una API. Bueno, una **API (Application Programming Interface)** en términos sencillos, **son un conjunto de métodos y funcionalidades para manejar los datos que son otorgados por una aplicación para conectarse a otras aplicaciones**. Por ejemplo, Tenemos la **API de Spotify**, la cual nos permite consumir las canciones que tienen y podemos usar dichos datos en nuestra propia aplicación. **Es decir, es la forma en que nuestras aplicaciones pueden consumir datos de terceros.**

Ahora bien, Spotify es una **API externa**, en el caso de las **API's integradas** en el navegador el concepto es el mismo con la diferencia que está a nuestra disposición y no tenemos que pagar por una membresía para tener acceso a sus dichos datos.

Un gran ejemplo es la **API LocalStorage** que permite la persistencia de los datos almacenándolo con ciertas limitaciones. Por ejemplo: podemos guardar el valor de un modo oscuro, para mantener la persistencia de los datos, y así al recargar la página se mantendrá el modo oscuro.

```javascript
// guardando el modo oscuro así al recargar la página se mantendrá
localStorage.setItem("theme", "dark-mode");

// trayendo el valor del theme
localStorage.getItem("theme");
```

**API Canvas** esta es una API del navegador que nos permite hacer dibujos, letras, formas en un formato 2D y 3D. 👷‍♂️ Vamos a dibujar un círculo.

Este será nuestro código HTML

```html
<!-- canvas será nuestro lienzo donde dibujaremos -->
<canvas id="mycanvas" width="300px" height="300px"></canvas>
```

Este será nuestro código CSS

```css
#mycanvas {
  border: 2px solid blue;
}
```

Este será nuestro código javascript

```javascript
const lienzo = document.getElementById("mycanvas");
const ctx = lienzo.getContext("2d");

ctx.beginPath();
ctx.arc(150, 150, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#8040ea";
ctx.fill();
```

Como ya habrás notado para usar la API Canvas estamos haciendo uso de 3 lenguajes **(HTML, CSS y JavaScript)**, esto quiere decir que a mediada que quieras usar las API's integradas del navegador será necesario que conozcas más de los otros lenguajes de la web.

<a id="soporte-formularios"></a>

## Soporte Formularios

Gracias al poder del Dios de la programación y a los miles de programadores que trabajan en las nuevas mejoras del lenguaje, tenemos por fin las **validaciones por defecto de los formularios sin necesidad de JavaScript** todo con un solo atributo. Claro está que para validaciones básicas, ya que para validaciones más complejas se necesitara a nuestro buen amigo 👉 JavaScript. Veamos un ejemplo

🔗 <a href="https://codepen.io/estivenMayhuay/pen/LYeowXW" target="_blank"><strong>Link a Codepen.io Soporte formularios HTML</strong></a>

Trata de ingresar datos incorrectos como en el campo celular ingresa letras y en el campo email ingresa un nombre y luego presiona enviar, podrás ver que gracias a HTML5 y sus mejoras te avisara en el caso de email que debe tener un **@** y en el campo celular no te dejara escribir letras.

<a id="svg-html5"></a>

## SVG

Scalable Vector Graphics son vectores gráficos que nos permiten mantener la calidad de nuestra imagen sin importar el tamaño. Habrás notado que cuando usamos imágenes en formato **.jpg, .png, .jpeg** las cuales al ser agrandados se ven borrosos o pixelados. Hagamos un SVG muy sencillo.

El código de 👇 generará un círculo que será escalable a pesar de tener 50x50 px y no perderá su calidad.

```html
<svg width="50" height="50">
  <circle
    cx="25"
    cy="25"
    r="10"
    stroke="#8040ea"
    stroke-width="4"
    fill="#8040ea"
  />
</svg>
```

<a id="mathml-html5"></a>

## MathML

Es una de las funcionalidades de HTML5 que permite escribir notaciones matemáticas.

En conclusión, podemos decir que **HTML5 es una de las mejores versiones que tenemos hasta el momento**, como habrás podido apreciar, ahora pasemos al siguiente nivel.
