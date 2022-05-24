# Seccionamiento de Contenidos

Bienvenidos y Bienvenidas a esta nueva sección del curso de HTML5 en EMCODY. En esta oportunidad hablaremos sobre las etiquetas de seccionamiento de contenido. Son todas aquellas etiquetas que tienen como propósito definir la estructura general de tu sitio web.

<a id="tag-header"></a>

## header

Esta etiqueta **representa el contenido principal de nuestro sitio web**. Como por ejemplo en EMCODY donde está el nombre y el logo de la marca, así como también el menú de navegación. En el siguiente código podrás visualizar que dentro del **tag header** puedes agregar un título y una imagen para otorgar una primera impresión al usuario, **no es obligatorio, ya que puedes personalizarlo**, lo importante aquí es la estructura que le damos a nuestro sitio web.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Plataforma EMCODY</title>
  </head>
  <body>
    <header>
      <img src="./icon-emcody.png" alt="emcody logo" />
      <h1>EMCODY</h1>
    </header>
  </body>
</html>
```

Ahora bien, podemos **usar esta etiqueta en más de una ocasión** nos adelantaremos un poco con otra etiqueta pero solo enfócate en header. El tag article hace referencia a un artículo dentro de una sección de información y dentro de la misma tenemos el **tag header** que recuerden que representa el contenido principal del sitio web. Así que podamos usar header como un banner siempre y cuando no se encuentre como hijo de otra etiqueta, lo que sucede con el segundo header dentro del article.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Plataform EMCODY</title>
  </head>
  <body>
    <header>
      <img src="./icon-emcody.png" alt="emcody logo" />
      <h1>EMCODY</h1>
    </header>

    <section>
      <article>
        <header>
          <h1>¿Qué es HTML?</h1>
          <img src="./que-es-html.png" alt="banner html" />
        </header>

        <p>
          HTML es un lenguaje de marcado de información que permite definir la
          estructura de nuestros sitios web
        </p>
      </article>
    </section>
  </body>
</html>
```

<a id="tag-nav"></a>

## nav

Esta etiqueta nos permite agrupar un conjunto de enlaces que nos direccionan hacia otros recursos de la web (imágenes, videos, archivos, PDF, etc.) u otros documentos HTML, **en pocas palabras es un menú de navegación. 😀**

Ahora te mostraré la estructura básica de un menú de navegación que encontrarás en ejemplos prácticos. Sin embargo, recuerda que lo puedes personalizar.

Como puedes apreciar dentro del tag nav se encuentra un **tag ul, tag li y tag a**, los cuales no hemos visto hasta ahora. Pero te comentaré brevemente:

<ul>
  <li><strong>Tag ul:</strong> Usado para representar listas desordenadas (Compras del supermercado, Links a tus redes sociales)</li>
  <li><strong>Tag li:</strong> Son el complemento y parte importante de las listas desordenadas y ordenadas (ul, ol), significan <strong>list item</strong> y son el texto de tu lista.</li>
  <li><strong>Tag a:</strong> Son los famosos links o enlaces hacia otros contenidos de la web. En ocasiones se usa el signo de <strong># michi</strong> para que al dar clic se quede en la página y no vaya hacia otros recursos.</li>
</ul>

Muy bien, habiendo dado un contexto, sigamos con el código, el nav que definimos será nuestro menú de navegación con los enlaces hacia YouTube, Discord y un blog. Podemos tener tantos list items (li) y enlaces (a) como necesitemos.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Plataform EMCODY</title>
  </head>
  <body>
    <header>
      <img src="./icon-emcody.png" alt="emcody logo" />
      <h1>EMCODY</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Youtube</a></li>
        <li><a href="#">Discord</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
  </body>
</html>
```

Y si tuvieras un menú de navegación con muchos enlaces seccionados, puedes hacer algo así:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Plataform EMCODY</title>
  </head>
  <body>
    <header>
      <img src="./icon-emcody.png" alt="emcody logo" />
      <h1>EMCODY</h1>
    </header>

    <nav>
      <h2>Cursos Frontend</h2>
      <ul>
        <li><a href="#">HTML5</a></li>
        <li><a href="#">CSS3</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>

      <h2>Cursos Backend</h2>
      <
      <ul>
        <li><a href="#">SQL</a></li>
        <li><a href="#">Node.js</a></li>
        <li><a href="#">PHP</a></li>
      </ul>
    </nav>
  </body>
</html>
```

<a id="tag-main"></a>

## main

Esta etiqueta tiene como propósito **contener y representar todo el contenido importante y relevante del documento HTML**. Por ejemplo, si tenemos un **sitio web de una veterinaria** es en el main donde debemos colocar toda aquella información sobre los animales que tratan y los servicios que ofrecen, así como un formulario para contactos o la dirección de la veterinaria. En pocas palabras, es uno de los tags más importante para **atraer la atención del usuario y dar a conocer nuestra idea y el propósito del sitio.**

Vayamos al código 👨. Como puedes apreciar tenemos nuestro **header** y también nuestro menú de navegación con los enlaces hacia otros documento HTML y luego sigue el tag main el cual tendrá toda la información sobre el contenido de tu sitio web, en este caso todo sobre la veterinaria.

Ahora bien, tal vez cuando uses tu editor de códigos favorito, te enfrentes a la dura realidad de que **sin CSS HTML no se ve tan bonito que digamos.** Si conoces algo de CSS **te animo a poder darle estilos a tu contenido HTML** y aún no conoces CSS **tranquilo, vayamos paso a paso.** 👏

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Veterinaria Doggie</title>
  </head>
  <body>
    <header>
      <img src="./icon-doggie.png" alt="doggie logo" />
      <h1>Doggie</h1>
    </header>

    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
      </ul>
    </nav>

    <main>
      <section>
        <h2>Bienvenidos a la Veterinaria Doggie</h2>
        <p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p>
        <p>more info...</p>
        <img src="./mascotas-banner.png" alt="mascotas" />
      </section>
    </main>
  </body>
</html>
```

<a id="tag-section"></a>

## section

Esta etiqueta es usada para represntar una seccion dentro de main en la cual podemos hacer uso de las cabeceras (titulos) para marcar la divison de un contenido, es usada para contenidos que nos seran reutilizables. Por ejemplo siguiendo con la veterinaria en su sitio web, puede dividir el Home en 3 secciones:

<ul>
  <li>Las Mascotas</li>
  <li>Nuestro Equipo</li>
  <li>Empresas Asociadas</li>
</ul>

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>Veterinaria Doggie</title>
	</head>
	<body>
		<header>
			<img src="./icon-doggie.png" alt="doggie logo" />
			<h1>Doggie</h1>
		</header>

		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="services.html">Services</a></li>
			</ul>
		</nav>

		<main>
			<section>
				<h2>Las Mascotas</h2>
				<p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p
				<img src="./mascotas-banner.png" alt="mascotas" />
			</section>
			<section>
				<h2>Nuestro Equipo</h2>
				<p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p
				<img src="./mascotas-banner.png" alt="mascotas" />
			</section>
			<section>
				<h2>Empresas Asociadas</h2>
				<p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p
				<img src="./mascotas-banner.png" alt="mascotas" />
			</section>
		</main>
	</body>
</html>
```

<a id="tag-article"></a>

## article

A diferencia del tag section **article** se usa para representar componentes que serán reutilizables:

<ul>
  <li>Tarjeta de Productos</li>
  <li>Artículo de un Periódico</li>
  <li>Widget interactivo</li>
  <li>Un Card del Clima</li>
</ul>

A continuacion algunos ejemplos desde MDN (Mozila Developer Network)

```html
<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Review</h3>
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <h3>User reviews</h3>
    <article class="user_review">
      <h4>Too scary!</h4>
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>Love the dinos!</h4>
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-17 19:00">May 17</time>
          by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on
      <time datetime="2015-05-15 19:00">May 15</time>
      by Staff.
    </p>
  </footer>
</article>
```

```html
<article class="forecast">
  <h1>Weather forecast for Seattle</h1>
  <article class="day-forecast">
    <h2>03 March 2018</h2>
    <p>Rain.</p>
  </article>
  <article class="day-forecast">
    <h2>04 March 2018</h2>
    <p>Periods of rain.</p>
  </article>
  <article class="day-forecast">
    <h2>05 March 2018</h2>
    <p>Heavy rain.</p>
  </article>
</article>
```

Y si deseas ejemplos más sencillos, podemos hacer **uso del article para representar un card de un servicios de la veterinaria. 👓**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Veterinaria Doggie</title>
  </head>
  <body>
    <header>
      <img src="./icon-doggie.png" alt="doggie logo" />
      <h1>Doggie</h1>
    </header>

    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
      </ul>
    </nav>

    <main>
      <article>
        <img src="./banner-corte-cabello.png" alt="corte de cabello" />
        <h3>Corte de Cabello</h3>
        <p>Utilizamos las mejores maquinas para tus mascotas</p>
        <a href="servicios.html">Ir al servicio</a>
      </article>
    </main>
  </body>
</html>
```

<a id="tag-aside"></a>

## aside

Esta etiqueta tiene como propósito representar una porción de un contenido que no necesariamente tiene que estar relacionado con el contenido principal puesto en el **tag main**. Según la MDN es usado como barras laterales. Como un ejemplo, podemos utilizar el **aside** como un separador o barra lateral para colocar nuestro menú de navegación.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Veterinaria Doggie</title>
  </head>
  <body>
    <header>
      <img src="./icon-doggie.png" alt="doggie logo" />
      <h1>Doggie</h1>
    </header>

    <aside></aside>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
      </ul>
    </nav>

    <main>
      <article>
        <img src="./banner-corte-cabello.png" alt="corte de cabello" />
        <h3>Corte de Cabello</h3>
        <p>Utilizamos las mejores maquinas para tus mascotas</p>
        <a href="servicios.html">Ir al servicio</a>
      </article>
    </main>
  </body>
</html>
```

<a id="tag-footer"></a>

## footer

Es el pie de página del documento HTML. En esta etiqueta podemos colocar:

<ul>
  <li>Links relacionados al documento</li>
  <li>Nombre del autor</li>
  <li>Copyright</li>
</ul>

Este es el código más sencillo usando footer. Si deseas puedes visitar el siguiente link a una landing page maquetada por <strong><a href="https://mystifying-williams-b8f04c.netlify.app/" target="_blank">EMCODY Fylo Landing Page</a></strong>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Veterinaria Doggie</title>
  </head>
  <body>
    <header>
      <img src="./icon-doggie.png" alt="doggie logo" />
      <h1>Doggie</h1>
    </header>

    <aside></aside>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
      </ul>
    </nav>

    <main>
      <article>
        <img src="./banner-corte-cabello.png" alt="corte de cabello" />
        <h3>Corte de Cabello</h3>
        <p>Utilizamos las mejores maquinas para tus mascotas</p>
        <a href="servicios.html">Ir al servicio</a>
      </article>
    </main>

    <footer>
      <span>@copyright Doggie 2022</span>
    </footer>
  </body>
</html>
```

<a id="tag-address"></a>

## address

Este tag tiene como propósito representar datos importa respecto a una persona, negocio u organización. Ejemplo de MDN:

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

<a id="tag-headlines"></a>

## headlines

Los headlines van **desde el h1 hasta el h6** que permiten representar los títulos son muy usados en el mundo web. A continuación verás los tags

```html
<h1>Headline 1</h1>
<h2>Headline 2</h2>
<h3>Headline 3</h3>
<h4>Headline 4</h4>
<h5>Headline 5</h5>
<h6>Headline 6</h6>
```

Aquí te doy un ejemplo usando todos los headlines

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<title>Veterinaria Doggie</title>
	</head>
	<body>
		<header>
			<img src="./icon-doggie.png" alt="doggie logo" />
			<h1>Doggie</h1>
		</header>

		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="services.html">Services</a></li>
			</ul>
		</nav>

		<main>
			<section>
				<h2>Las Mascotas</h2>
				<p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p
				<img src="./mascotas-banner.png" alt="mascotas" />
			</section>
			<section>
				<h2>Nuestro Equipo</h2>
				<p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p
				<img src="./mascotas-banner.png" alt="mascotas" />
			</section>
			<section>
				<h2>Empresas Asociadas</h2>
				<p>Nos enfocamos en ofrecer un servicio de calidad para tus mascotas</p
				<img src="./mascotas-banner.png" alt="mascotas" />

				<article>
					<h3>Spa Dog</h3>
					<p>Es uno de nuestros mayores proveedores de productos de belleza canina</p>
					<h4>Localización</h4>
					<span>Nos encontramos en...</span>
				</article>
			</section>
		</main>

		<footer>
			<section>
				<h5>Redes sociales</h5>
				<ul>
					<li>Facebook</li>
					<li>Instagram</li>
				</ul>
			</section>
			<section>
				<h5>La Organización</h5>
				<ul>
					<li>Nosotros</li>
					<li>Trabajo con Nosotros</li>
				</ul>
			</section>
			<h6>@Copyright Doggie 2022</h6>
		</footer>
	</body>
</html>
```

Es importa que sepas que los headlines son importantes para el SEO, lo cual te permite posicionarte en los buscadores.

En conclusión, has aprendido acerca de los tags importante para estructurar tu sitio web de forma general. En el siguiente artículo analizaremos los tags que nos servirá para representar el contenido en sí.
