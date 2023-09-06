@charset "UTF-8";
/* Aquí definimos las Custom properties */
:root {
  --negro: #393939;
  --blanco: #ececec;
  --sombra-ppal: #c9c9c9;
  --sombra-sec: #ffffff;
  --borde-negro: #00000050;
  --marcado: rgb(127, 195, 255);
  /* Tipografía */
  --tipo-principal: Helvetica, Arial, sans-serif;
}

/* Las adaptamos al modo oscuro */
@media (prefers-color-scheme: dark) {
  :root {
    --negro: #ececec;
    --blanco: #303030;
    --sombra-ppal: #242424;
    --sombra-sec: #3c3c3c;
    --borde-negro: #FFFFFF50;
  }
}
/* Configuramos si un usuario ha activado el modo alto contraste. (BETA) */
/*
    Estilos generales para que las etiquetas no contengan propiedades
    que nos estorben y en todos los navegadores se vean correctamente
*/
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}

img {
  max-width: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}

video {
  max-width: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
}

p a {
  display: inline;
}

li {
  list-style-type: none;
}

table, tr, td {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6, strong {
  -webkit-hyphens: auto;
          hyphens: auto;
  font-weight: inherit;
  font-size: inherit;
}

::selection {
  background-color: var(--negro);
  color: var(--blanco);
}

form, input, textarea, select, button {
  font-family: inherit;
  font-size: inherit;
  -webkit-hyphens: auto;
          hyphens: auto;
  background-color: transparent;
  display: block;
}

body {
  font-family: var(--tipo-principal);
  font-size: 100%;
  line-height: 1.4em;
  min-height: 100vh;
  background-color: var(--blanco);
  color: var(--negro);
  -webkit-hyphens: auto;
          hyphens: auto;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.carrousel {
  width: 90%;
  max-width: 120em;
  padding: 2em;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
  overflow: hidden;
}

.carrousel .grande {
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
  padding: 2em;
  transition: all 0.5s ease;
  transform: translateX(0%);
}

.carrousel .img {
  width: calc( 100% / 2 - 2em);
  min-height: 10vh;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
}

.carrousel .puntos {
  width: 100%;
  margin: 1em 0 0;
  padding: 0.4em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.carrousel .punto {
  width: 2em;
  height: 2em;
  margin: 1em 1em 0;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 0.6em 0.6em 1.2em var(--sombra-ppal), -0.6em -0.6em 1.2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
}

.carrousel .punto.activo {
  background-color: lightblue;
}

/*



'use strict'

const contenedor_img    = document.querySelector('.contenedor_img')
const section     = document.querySelectorAll('.section')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
section.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    section[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        contenedor_img.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        section.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            section[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        section[i].classList.add('activo')

    })
})
/*