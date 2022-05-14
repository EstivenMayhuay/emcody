<a id="estructura-html-basica"></a>

# Estructura Básica de HTML

Ahora que ya definimos ¿Qué es HTML y HTML5? Vamos a responder a la pregunta **¿Cuál es la estructura básica de un documento HTML?** Para ello, a continuación te presentaré el formato básico y principal que verás de aquí en adelante en todos los proyectos web que se trabajen con HTML.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>EMCODY</title>
  </head>
  <body>
    <h1>Welcome to EMCODY</h1>
    <p>Este es el primer párrafo de emcody</p>
  </body>
</html>
```

Lo sé tal vez estés pensando **¿Esto es todo?**, pues si 😎 es todo para empezar con lo básico. Ahora vamos, a desglosarlo.

Pero antes es importante que sepas que HTML trabaja con **etiquetas también llamadas tags**, todo en HTML se trabajan con etiquetas. La mayoría de las etiquetas tienen una **etiqueta de apertura y cierre**, y otros tienen una singularidad.

A continuación, veamos una etiqueta de párrafo, la etiqueta de apertura se distingue por el siguiente símbolo **<>** y la etiqueta de cierre por el siguiente símbolo **</>**, estos símbolos lo tienen la mayoría de los tags.

```html
<p>Soy un parrafo</p>
```

Ahora bien, hay otras etiquetas como la siguiente que tienen una etiqueta de apertura y en la misma se encuentra la etiqueta de cierre **</>**. Esta es una etiqueta de imagen **src** es la ruta donde se encuentra la imagen y **alt** hace referencia a lo que trata la imagen. También, tenemos la etiqueta **input** la cual sirve para ingresar datos.

```html
<img src="estiven.png" alt="hola soy estiven" />
<br />
<input type="text" id="name" />
```

Habiendo definido los tags en HTML, procederemos a hablar de las etiquetas fundamentales en la Estructura Básica de HTML.

<a id="tag-doctype"></a>

## DOCTYPE html

Esta etiqueta permite decirle al navegador que trabajaremos con la última versión de HTML5 y además al momento de ser interpretado por el navegador sabrá que se trata del lenguaje HTML y no de otro tipo de lenguaje.

<a id="tag-html"></a>

## html

La etiqueta **html** es la raíz de nuestro documento HTML en sí, dentro de la etiqueta html se engloba las otras dos etiquetas **head y body**, además de ello notaras que las etiquetas tienen propiedades. En el caso de html tiene **el atributo language con el valor de español => lang="es"**.

<a id="tag-head"></a>

## head

La etiqueta head hace referencia a todos aquellos datos que son necesarios para el navegador, como los metacomandos que te permiten usar **caracteres especiales, hacer uso del responsive web design, definir un título, enlazar documentos, CSS y JavaScript, entre otros**. En pocas palabras, en la etiqueta head se engloba todo lo que el **usuario no podrá ver, pero el navegador necesita**.

<a id="tag-body"></a>

## body

En el caso de la etiqueta body, es todo **aquello que el usuario final podrá visualizar como títulos, imágenes, videos, entre otros**.

<a id="tag-title"></a>

## title

No parece tan importante cierto, pero es gracias a esta etiqueta que podemos **personalizar el nombre de la ventana del navegador**.

<a id="structure-tree"></a>

## Estructura de Árbol

Ahora, veamos la estructura básica de HTML desde un punto de vista jerárquico, es decir, con una **estructura de árbol**. En la imagen de abajo podrás visualizar que el primer **nodo html** es la raíz el **nodo principal** y a partir del mismo se ramifican dos nodos adicionales **body y head** y cada nodo a su vez tiene diferentes ramificaciones. Esto nos da a entender que **body y head** pertenecen o se encuentran a un nivel más bajo que el nodo html.

<p class="image">
<img src="https://estivenmayhuay.github.io/emcody/images/estructura-arbol-html.jpg" alt="estructura jerárquica HTML" />
</p>

En conclusión, ya sabemos que al iniciar con HTML la parte de la codificación no es tan complicada. Así que manos a la obra empieza a crear tu primera estructura en tu editor de códigos favorito. Como una ayuda adicional puede usar **codepen.io**, en el caso de que no sepas como abrir tu archivo html en tu navegador, lo cual no es tan complicado, ya que puedes copiar la ruta del archivo html que se encuentra en tu computadora en tu navegador.
