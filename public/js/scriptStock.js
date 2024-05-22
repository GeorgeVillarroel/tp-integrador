let filters = document.getElementsByClassName("filter-link");
let products = document.getElementsByClassName("product");
const smallLinks = document.getElementsByClassName("small-links")[0];
const carniceria = ["Carniceria", {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #1", codigo: 10000001} ,{url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #2", codigo: 10000002}, {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #3", codigo: 10000003},  {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #4", codigo: 10000004}, {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #5", codigo: 10000005}, {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #6", codigo: 10000006}, {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #7", codigo: 10000007}, {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #8", codigo: 10000008}, {url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #9", codigo: 10000009},];
const verduleria = ["Verduleria", {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #1", codigo: 10000011} ,{url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #2", codigo: 10000012}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #3", codigo: 10000013},  {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #4", codigo: 10000014}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #5", codigo: 10000015}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #6", codigo: 10000016}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #7", codigo: 10000017}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #8", codigo: 10000018}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #9", codigo: 10000019},];
const congelados = ["Congelados", {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #1", codigo: 10000101} ,{url:"../../../assets/imgs/congelados.png", nombre:"Congelado #2", codigo: 10000102}, {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #3", codigo: 10000103},  {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #4", codigo: 10000104}, {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #5", codigo: 10000105}, {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #6", codigo: 10000106}, {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #7", codigo: 10000107}, {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #8", codigo: 10000108}, {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #9", codigo: 10000109},];
const cocina = ["Cocina", {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #1", codigo: 10000111} ,{url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #2", codigo: 10000112}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #3", codigo: 10000113},  {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #4", codigo: 10000114}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #5", codigo: 10000115}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #6", codigo: 10000116}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #7", codigo: 10000117}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #8", codigo: 10000118}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #9", codigo: 10000119},];
const sala = ["Sala", {url:"../../../assets/imgs/sala.webp", nombre:"Sala #1", codigo: 10001001} ,{url:"../../../assets/imgs/sala.webp", nombre:"Sala #2", codigo: 10001002}, {url:"../../../assets/imgs/sala.webp", nombre:"Sala #3", codigo: 10001003},  {url:"../../../assets/imgs/sala.webp", nombre:"Sala #4", codigo: 10001004}, {url:"../../../assets/imgs/sala.webp", nombre:"Sala #5", codigo: 10001005}, {url:"../../../assets/imgs/sala.webp", nombre:"Sala #6", codigo: 10001006}, {url:"../../../assets/imgs/sala.webp", nombre:"Sala #7", codigo: 10001007}, {url:"../../../assets/imgs/sala.webp", nombre:"Sala #8", codigo: 10001008}, {url:"../../../assets/imgs/sala.webp", nombre:"Sala #9", codigo: 10001009},];
const habitacion = ["Habitacion", {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #1", codigo: 10001101} ,{url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #2", codigo: 10001102}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #3", codigo: 10001103},  {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #4", codigo: 10001104}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #5", codigo: 10001105}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #6", codigo: 10001106}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #7", codigo: 10001107}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #8", codigo: 10001108}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #9", codigo: 10001109},];
const baños = ["Baños", {url:"../../../assets/imgs/baños.webp", nombre:"Baños #1", codigo: 10001111} ,{url:"../../../assets/imgs/baños.webp", nombre:"Baños #2", codigo: 10001112}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #3", codigo: 10001113},  {url:"../../../assets/imgs/baños.webp", nombre:"Baños #4", codigo: 10001114}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #5", codigo: 10001115}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #6", codigo: 10001116}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #7", codigo: 10001117}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #8", codigo: 10001118}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #9", codigo: 10001119},];
const computadoras = ["Computadoras", {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #1", codigo: 10010001} ,{url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #2", codigo: 10010002}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #3", codigo: 10010003},  {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #4", codigo: 10010004}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #5", codigo: 10010005}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #6", codigo: 10010006}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #7", codigo: 10010007}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #8", codigo: 10010008}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #9", codigo: 10010009},];
const portatiles = ["Portatiles", {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #1", codigo: 10010011} ,{url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #2", codigo: 10010012}, {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #3", codigo: 10010013},  {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #4", codigo: 10010014}, {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #5", codigo: 10010015}, {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #6", codigo: 10010016}, {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #7", codigo: 10010017}, {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #8", codigo: 10010018}, {url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #9", codigo: 10010019},];
const celulares = ["Celulares", {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #1", codigo: 10010101} ,{url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #2", codigo: 10010102}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #3", codigo: 10010103},  {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #4", codigo: 10010104}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #5", codigo: 10010105}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #6", codigo: 10010106}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #7", codigo: 10010107}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #8", codigo: 10010108}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #9", codigo: 10010109},];
const accesorios = ["Accesorios", {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #1", codigo: 10010111} ,{url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #2", codigo: 10010112}, {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #3", codigo: 10010113},  {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #4", codigo: 10010114}, {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #5", codigo: 10010115}, {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #6", codigo: 10010116}, {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #7", codigo: 10010117}, {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #8", codigo: 10010118}, {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #9", codigo: 10010119},];
const productPageArray = [{url:"../../../assets/imgs/carniceria.webp", nombre:"Carne #1", codigo: 10000001}, {url:"../../../assets/imgs/verduleria.webp", nombre:"Verdura #1", codigo: 10000011},  {url:"../../../assets/imgs/congelados.png", nombre:"Congelado #1", codigo: 10000101}, {url:"../../../assets/imgs/cocina.webp", nombre:"Cocina #1", codigo: 10000111}, {url:"../../../assets/imgs/habitacion.webp", nombre:"Habitacion #1", codigo: 10001101}, {url:"../../../assets/imgs/baños.webp", nombre:"Baños #1", codigo: 10001111}, {url:"../../../assets/imgs/computadores.webp", nombre:"Computadores #1", codigo: 10010001},{url:"../../../assets/imgs/portatiles.webp", nombre:"Portatiles #1", codigo: 10010011}, {url:"../../../assets/imgs/celulares.webp", nombre:"Celulares #1", codigo: 10010101},  {url:"../../../assets/imgs/accesorios.webp", nombre:"Accesorios #1", codigo: 10010111}, ];
const cartIDs = [];

function productoFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Mas buscados</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${productPageArray[index].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = productPageArray[index].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(productPageArray[index].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", productoFuncion);
}

function carniceriaFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Carniceria</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${carniceria[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = carniceria[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(carniceria[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", carniceriaFuncion);
}

function verduleriaFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Verduleria</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${verduleria[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = verduleria[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(verduleria[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", verduleriaFuncion);
}

function congeladosFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Congelados</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${congelados[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = congelados[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(congelados[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", congeladosFuncion);
}

function cocinaFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Cocina</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${cocina[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = cocina[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(cocina[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", cocinaFuncion);
}

function salaFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Sala</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${sala[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = sala[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(sala[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", salaFuncion);
}

function habitacionFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Habitacion</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${habitacion[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = habitacion[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(habitacion[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", habitacionFuncion);
}

function bañosFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Baños</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${baños[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = baños[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(baños[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", bañosFuncion);
}

function computadorasFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Computadoras</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${computadoras[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = computadoras[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(computadoras[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", computadorasFuncion);
}

function computadorasFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Computadoras</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${computadoras[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = computadoras[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(computadoras[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", computadorasFuncion);
}

function portatilesFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Portatiles</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${portatiles[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = portatiles[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(portatiles[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", portatilesFuncion);
}

function celularesFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Celulares</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${celulares[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = celulares[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(celulares[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", celularesFuncion);
}

function accesoriosFuncion() {
    smallLinks.innerHTML = `<a href="#" class="home">Home</a> > <a href="#" class="home">Productos</a> > <a href="#" class="home">Accesorios</a> `;

    productsArray.forEach((element, index) => {
        element.style.backgroundImage = `url("${accesorios[index+1].url}")`;
        element.firstElementChild.firstElementChild.innerHTML = accesorios[index+1].nombre;
        element.firstElementChild.lastElementChild.replaceWith(element.firstElementChild.lastElementChild.cloneNode(true))
        element.firstElementChild.lastElementChild.addEventListener('click',() => {
            cartIDs.push(accesorios[index+1].codigo);
        });
    })

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "/../../../index.html";
    });
    document.getElementsByClassName("home")[1].addEventListener("click", productoFuncion);
    document.getElementsByClassName("home")[2].addEventListener("click", accesoriosFuncion);
}

const categoryArray = [carniceria, verduleria, congelados, cocina, sala, habitacion, baños, computadoras, portatiles, celulares, accesorios];
const functionArray = [carniceriaFuncion, verduleriaFuncion, congeladosFuncion, cocinaFuncion, salaFuncion, habitacionFuncion, bañosFuncion, computadorasFuncion, portatilesFuncion, celularesFuncion, accesoriosFuncion];

let productsArray = Array.from(products);
let filtersArray = Array.from(filters);

filtersArray.forEach((element, index) => {
    element.innerHTML = categoryArray[index][0];
    element.addEventListener("click", function() {
        functionArray[index]();
    })
});

productoFuncion();