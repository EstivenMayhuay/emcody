# Etiquetas HTML

Hola de nuevo te saluda Estiven 😀, si estás leyendo este artículo** quiero agradecerte por el interés que muestras.** En artículos anteriores respondimos a las siguientes interrogantes **¿Qué es HTML?** Y **¿Qué es HTML5?** Y en esta oportunidad hablaremos sobre **las etiquetas en HTML.**
Si deseas saber sobre los artículos anteriores aquí van los enlaces. Así que continuemos.

<ul>
  <li><a href="https://estivenmayhuay.github.io/emcody/post/html5/que-es-html/index.html" target="_blank">¿Qué es HTML?</a></li>
  <li><a href="https://estivenmayhuay.github.io/emcody/post/html5/que-es-html5/index.html" target="_blank">¿Qué es HTML5?</a></li>
</ul>

<a id="tags-html"></a>

## ¿Qué son las Etiquetas?

Los tags o también denominados etiquetas, son aquellas características de HTML que **nos permiten representar los elementos que vemos en los sitios web**. Por ejemplo: los títulos, párrafos, enlaces, pie de página, entre otros.

En pocas palabras podemos decir: **una etiqueta representa elementos del lenguaje (párrafos, títulos, etc.) mediante una estructura predefinida.** Ahora bien, ¿Cuáles son las partes de una etiqueta HTML?

- Elemento
- Contenido
- Etiqueta cierre
- Etiqueta apertura

Como puedes visualizar en la imagen de abajo ⮯ se muestran 4 partes principales de una etiqueta. El Elemento es la etiqueta en sí. El contenido es aquella información que será mostrada al usuario y claro esta tenemos los siguientes símbolos **<> </>** los cuales son la **forma en que HTML entiende que hacemos uso de las etiquetas y que no solo estamos escribiendo texto plano.**

<p class="image">
<img src="../../../images/tag-structure-html.jpeg" alt="estructura de una etiqueta HTML" />
</p>

Bueno, ya sabemos que es una etiqueta, pero **¿Cómo se representa en código?** Como puedes apreciar en la siguiente imagen tenemos una etiqueta para títulos h1, etiqueta para contenido informativo (párrafos) y etiqueta de imagen, Como puedes notar están presentes los siguientes símbolos <></> excepto en la **etiqueta img**, pero eso lo explicaremos en breve.

```html
<h1>Soy un título</h1>
<p>Soy un párrafo</p>
<img src="./images/logo.png" alt="logo" />
```

Las etiquetas tienen diferentes propósitos, no podemos usar una etiqueta definida para párrafos en un título cierto, **debido a que los títulos tienen un mayor impacto y muestran el concepto general de un tema.** Por lo tanto, **los tags tienen un sentido semántico, es decir, un significado.**

Como ya habíamos comentado en la sección de
<a href="https://estivenmayhuay.github.io/emcody/post/html5/estructura-basica-html/index.html" target="_blank">Estructura básica de HTML</a> las etiquetas tienen un inicio y fin.

- Etiqueta de apertura **<>**
- Etiqueta de cierre **</>**

Casi todas las etiquetas tienen estos **símbolos <> </>.** Sin embargo, hay etiquetas con excepciones como la **etiqueta img**, en la cual, en la misma etiqueta, está el cierre mediante el símbolo del **slash /.**

<p class="image">
<img src="../../../images/tag_open_close_different.jpg" alt="etiquetas HTML con diferente cierre" />
</p>

Aquí algunos ejemplos de este tipo de etiquetas

```html
<img src="estiven.png" alt="Estiven Mayhuay" />
<meta charset="utf-8" />
<meta name="autor" content="EMCODY" />
<input type="text" />
```

Tal vez te estés preguntado que son esos datos adicionales aparte del nombre de la etiqueta, bueno son conocidos como **atributos (características de la etiqueta).** En el caso de la **etiqueta meta**, el **atributo name** hace referencia a un valor que pueda tomar como **el nombre del autor, el código de lenguaje, las palabras claves de la página, la descripción de la página y más.** Pero no te preocupes esto, lo veremos a continuación.

<a id="atributos-html"></a>

## ¿Qué son los Atributos?

Son aquellas características y funcionalidades adicionales que se le otorgan a las etiquetas. Por ejemplo: en la e**tiqueta img** tenemos el **atributo src**, el cual **permite definir la ruta de donde obtendremos la imagen.**

```html
<input type="button" value="Enviar" id="btnSend" />
<input type="text" id="nameuser" />
<input type="email" id="emailUer" />
<img src="icon.png" alt="logo" />
```

El atributo **type** en las etiquetas **input** hacer referencia al tipo y formato de información que será recibida en un campo. Y lo nuevo tal vez es la **palabra id**, bueno es un **identificador** **el cual no debe repetirse, debe ser único**, esto nos servirá cuando queramos dar **estilos personalizados a un elemento HTML en particular.**

Este es el código HTML de un formulario con las particularidades de las etiquetas que tiene el siguiente símbolo **< />**

```html
<form>
  <input type="button" value="Enviar" id="btnSend" />
  <input type="text" id="nameuser" />
  <input type="email" id="emailUer" />
</form>
```

Y en el siguiente código tenemos el **famoso CSS** que hará uso de los **Identificadores (id)** de HTML para **dar estilos personalizados.**

```css
#btnSend {
  background-color: red;
}

#nameUser,
#emailUser {
  color: blue;
}
```

Pero, no nos adelantemos paso a paso. En conclusión, recuerda que las **etiquetas tienen un significado semántico**. En su estructura se conforman por una **etiqueta de apertura y de cierre**, también tienen **atributos que otorgan información y funcionalidad adicional.**
