const elementosMenu = [
    {id: 0,url: "https://www.facebook.com/",texto: "Facebook"},
    {id: 1, url:"https://www.instagram.com/",texto: "Instagram"},
    {id: 2, url:"https://www.whatsapp.com/",texto: "Whatsapp"},
    {id: 1, url:"inicio.html",texto: "Web"}
]

let menuContainer = document.querySelector("#menu")

 function crearElementos(e){
    e.forEach(element => {
        menuContainer.innerHTML += `<div class="elemento${element.id} btn">
        <a href="${element.url}">${element.texto}</a></div>`
    });
 }

 crearElementos(elementosMenu)