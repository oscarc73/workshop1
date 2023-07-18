/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"

//CON PROMESAS:
//conectarnos al server
/* window.fetch(url)
//procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
// JSON -> data -> renderizar info en el browser
.then(responseJSON => {
    responseJSON.data.forEach(element => {
        console.log(element.name)
    });
}) */

//CON ASYNC Y AWAIT
async function fetchData() {
    //Conectarnos con el server
    const response = await fetch(url)
    //procesar la respuesta y convertirla en JSON
    const responseJSON = await response.json()
    const allElements = []; //Se crea un contenedor para guardar todos los elementos mas adelante.
    //respuesta JSON tenemos la informacion en data -> info dentro del JSON, y la renderizamos con un forEach() para entrar en cada elemento
    responseJSON.data.forEach(element => {
        //Estando en cada uno de los items, cada que se haga el forEach se va a crear cada elemento que hagamos.
        //creamos una imagen
        const aguacateImg = document.createElement('img')
        //creamos un titulo
        const aguacateTitle = document.createElement('h2')
        //creamos precio
        const aguacatePrice = document.createElement('div')
        //creamos un contenedor
        const container = document.createElement('div')

        //agregamos todo al contendor
        container.append(aguacateImg, aguacateTitle, aguacatePrice)
        //en el forEach se va a realizar por cada elemento. si antes de esto hacemos un console.log vemos que nos imprime cada elemento //console.log(element)

        //por cada elemento creado, metemos el contenedor con todos lo puesto en nuestro array creado anteriormente.
        allElements.push(container)
    })
    //Despues de hacer todos los elementos, los incrustamos en el body de una sola vez, esto se hace despues de que todos los elementos se crean, si se coloca dentro del forEach, se incrustaria cada elemento en el body uno por uno.
    document.body.append(...allElements)
}

fetchData()