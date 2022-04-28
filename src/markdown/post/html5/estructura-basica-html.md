<a id="estructura-html-basica"></a>

# Estructura Básica de HTML

Ahora que ya definimos ¿Qué es HTML y HTML5? Vamos a definir Cuál es la estructura básica de un documento HTML.

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

Antes de todo es importante que sepas que HTML trabaja con **etiquetas llamadas también tags**, todo en HTML se trabajan con etiquetas. La mayoría de las etiquetas tienen una **etiqueta de apertura y cierre**, y otros tienen una singularidad.

A continuación, veamos una etiqueta de párrafo, la etiqueta de apertura se distingue por el siguiente símbolo **<>** y la etiqueta de cierre por el siguiente símbolo **</>**, estos símbolos lo tienen la mayoría de los tags.

```html
<p>Soy un parrafo</p>
```

Ahora bien, hay otras etiquetas como la siguiente que tienen una etiqueta de apertura y en la misma se encuentra la etiqueta de cierre **</>**.

Esta es una etiqueta de imagen **src** es la ruta donde se encuentra la imagen y **alt** hace referencia a lo que trata la imagen. También, tenemos la etiqueta **input** la cual sirve para ingresar datos.

```html
<img src="estiven.png" alt="hola soy estiven" /> <input type="text" id="name" />
```

Habiendo definido los tags en HTML, procederemos a hablar de las etiquetas fundamentales en la estructura Básica de HTML.

<a id="tag-doctype"></a>

## DOCTYPE html

Esta etiqueta permite decirle al navegador que trabajaremos con la última versión de HTML5 y además al momento de ser interpretado por el navegador sabrá que se trata del lenguaje HTML y no de otro tipo de lenguaje.

<a id="tag-html"></a>

## html

La etiqueta **html** es la raíz de nuestro documento HTML en sí, dentro de la etiqueta html se engloba las otras dos etiquetas **head y body**, además de ello notaras que las etiquetas tienen propiedades. En el caso de html tiene **el atributo language con el valor de español => lang="es"**.

<a id="tag-head"></a>

## head

La etiqueta head hace referencia a todos aquellos datos que son necesarios para el navegador, como los metacomandos que permitan usar **caracteres especiales, responsive web design, definir un título, enlazar documentos, CSS y JavaScript, entre otros**. En pocas palabras en la etiqueta head se engloba todo lo que el **usuario no podra ver, pero el navegador necesita**.

<a id="tag-body"></a>

## body

En el caso de la etiqueta body, es todo **aquello que el usuario final podrá visualizar como títulos, imágenes, videos, entre otros**.

Ahora, veamos la estructura básica de HTML desde un punto de vista jerárquico, es decir, con una **estructura de árbol**.

<p class="image">
<img src="../../../images/estructura-arbol-html.jpg" alt="estructura jerárquica HTML" />
</p>
