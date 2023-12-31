/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

const formaPrice = (price) => {
    /*formatos de internacionalizacion:
    intl nos muestra formatos que son estandares internacionales como precio, fecha, hora, etc.  */
    const newPrice = window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price) //con la funcion de newPrice le damos formato a price con .format() y ya podemos retornar newPrice

    return newPrice
}

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
    const response = await fetch(`${url}/api/avo`)
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
        //caja de titulo y precio
        const cajaText = document.createElement('div')
        //creamos un contenedor
        const container = document.createElement('div')

        //Agregamos clases
        aguacateImg.className = "aguacateImg";
        container.className = "container";
        cajaText.classList.add("caja");
        //Editamos clases
        container.style = "display: flex; ";
        
        //comenzamos a usar la API
        aguacateImg.src = `${url}${element.image}`
        aguacateTitle.textContent = element.name;
        aguacatePrice.textContent = formaPrice(element.price);

        //agregamos titulo y precio a la caja
        cajaText.append(aguacateTitle,aguacatePrice)
        //agregamos todo al contendor
        container.append(aguacateImg, cajaText)
        //en el forEach se va a realizar por cada elemento. si antes de esto hacemos un console.log vemos que nos imprime cada elemento //console.log(element)


        //por cada elemento creado, metemos el contenedor con todos lo puesto en nuestro array creado anteriormente.
        allElements.push(container)
    })
    //Despues de hacer todos los elementos, los incrustamos en el body de una sola vez, esto se hace despues de que todos los elementos se crean, si se coloca dentro del forEach, se incrustaria cada elemento en el body uno por uno.
    appNode.append(...allElements)
}

fetchData()
