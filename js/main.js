document.addEventListener("DOMContentLoaded", function () {
   
    // INFO CUERDAS
    const cuerdas = [
        {
            id: 21,
            nombre_producto: "Opera (70mts)",
            categoria_producto: "cuerda",
            precio: 580000,
            img_producto: "../img/cuerda-opera.png",
            marca: "Beal",
        },
        {
            id: 22,
            nombre_producto: "Karma (60mts)",
            categoria_producto: "cuerda",
            precio: 400000,
            img_producto: "../img/cuerda-karma.webp",
            marca: "Beal",
        },
        {
            id: 23,
            nombre_producto: "Zenith (60mts)",
            categoria_producto: "cuerda",
            precio: 400000,
            img_producto: "../img/cuerda-zenith.webp",
            marca: "Beal",
        },
        {
            id: 24,
            nombre_producto: "Stinger (60mts)",
            categoria_producto: "cuerda",
            precio: 465000,
            img_producto: "../img/cuerda-stinger.webp",
            marca: "Beal",
        },
        {
            id: 25,
            nombre_producto: "Pitchlight (50mts)",
            categoria_producto: "cuerda",
            precio: 465000,
            img_producto: "../img/cuerda-pitchlight.jpg",
            marca: "Edelweiss",
        },
        {
            id: 26,
            nombre_producto: "Volta (70mts)",
            categoria_producto: "cuerda",
            precio: 300000,
            img_producto: "../img/cuerda-volta.jpeg",
            marca: "Petzl",
        },
        {
            id: 27,
            nombre_producto: "Foixarda (60mts)",
            categoria_producto: "cuerda",
            precio: 300000,
            img_producto: "../img/cuerda-foixarda.jpg",
            marca: "Fixe",
        },
    ]

    const productos_cuerda = document.getElementById("productos_cuerda");

    //CARDS CUERDAS
    cuerdas.forEach(cuerdas => {
        const card = document.createElement("article");
        card.classList.add("card");

        const img_producto = document.createElement("img")
        img_producto.src = cuerdas.img_producto
        img_producto.classList.add("img_card")
        card.appendChild(img_producto);

        const nombre_producto = document.createElement("h3");
        nombre_producto.textContent = cuerdas.nombre_producto;
        nombre_producto.style.color = "#030030";
        card.appendChild(nombre_producto);

        const precio = document.createElement("h2");
        precio.textContent = "$" + cuerdas.precio;
        precio.style.color = "#0046BE";
        card.appendChild(precio);

        const btn_comprar = document.createElement("button");
        btn_comprar.textContent = "Agregar al carrito ";
        btn_comprar.classList.add("btn_card");
        btn_comprar.classList.add("btn");
        card.appendChild(btn_comprar);
        btn_comprar.addEventListener("click", agregar_carrito);
        btn_comprar.dataset.id = cuerdas.id;

        if (productos_cuerda) {
            productos_cuerda.appendChild(card);
        }
    })

    // INFO ARNESES
    const arneses = [
        {
            id: 1,
            nombre_producto: "Ghost",
            categoria_producto: "arnes",
            precio: 250000,
            img_producto: "../img/arnes-ghost.webp",
            marca: "Beal",
        },
        {
            id: 2,
            nombre_producto: "Phantom",
            categoria_producto: "arnes",
            precio: 180000,
            img_producto: "../img/arnes-phantom.webp",
            marca: "Beal",
        },
        {
            id: 3,
            nombre_producto: "Moe",
            categoria_producto: "arnes",
            precio: 130000,
            img_producto: "../img/arnes-moe.webp",
            marca: "Edelrid",
        },
        {
            id: 4,
            nombre_producto: "Sirana",
            categoria_producto: "arnes",
            precio: 165000,
            img_producto: "../img/arnes-sirana.webp",
            marca: "Edelrid",
        },
        {
            id: 5,
            nombre_producto: "Aero Classic",
            categoria_producto: "arnes",
            precio: 130000,
            img_producto: "../img/arnes-aeroclassic.webp",
            marca: "Beal",
        },
        {
            id: 6,
            nombre_producto: "Autana",
            categoria_producto: "arnes",
            precio: 160000,
            img_producto: "../img/arnes-autana.webp",
            marca: "Edelrid",
        },
        {
            id: 7,
            nombre_producto: "Sendero",
            categoria_producto: "arnes",
            precio: 170000,
            img_producto: "../img/arnes-sendero.webp",
            marca: "Edelrid",
        },
        {
            id: 8,
            nombre_producto: "Shadow",
            categoria_producto: "arnes",
            precio: 125000,
            img_producto: "../img/arnes-shadow.webp",
            marca: "Beal",
        },
    ]

    const productos_arnes = document.getElementById("productos_arnes")

    //cards arneses
    arneses.forEach(arneses => {
        const card = document.createElement("article");
        card.classList.add("card");

        const img_producto = document.createElement("img")
        img_producto.src = arneses.img_producto
        img_producto.classList.add("img_card")
        card.appendChild(img_producto);

        const nombre_producto = document.createElement("h3");
        nombre_producto.textContent = arneses.nombre_producto;
        nombre_producto.style.color = "#030030";
        card.appendChild(nombre_producto);

        const precio = document.createElement("h2");
        precio.textContent = "$" + arneses.precio;
        precio.style.color = "#0046BE";
        card.appendChild(precio);

        const btn_comprar = document.createElement("button");
        btn_comprar.textContent = "Agregar al carrito ";
        btn_comprar.classList.add("btn_card");
        btn_comprar.classList.add("btn");
        card.appendChild(btn_comprar);
        btn_comprar.addEventListener("click", agregar_carrito);
        btn_comprar.dataset.id = arneses.id;

        if (productos_arnes) { productos_arnes.appendChild(card); }

    })

     // INFO CASCOS
     const casco = [
        {
            id: 41,
            nombre_producto: "Indy",
            categoria_producto: "casco",
            precio: 200000,
            img_producto: "../img/casco-indy.webp",
            marca: "Beal",
        },
        {
            id: 42,
            nombre_producto: "Elios",
            categoria_producto: "casco",
            precio: 250000,
            img_producto: "../img/casco-elios.jpeg",
            marca: "Petzl",
        },
        {
            id: 43,
            nombre_producto: "Half Dome",
            categoria_producto: "casco",
            precio: 300000,
            img_producto: "../img/casco-halfdome.jpg",
            marca: "Black Diamond",
        },
        {
            id: 44,
            nombre_producto: "Zodiac",
            categoria_producto: "casco",
            precio: 175000,
            img_producto: "../img/casco-zodiac.jpg",
            marca: "Edelrid",
        },
    ]

    const productos_casco = document.getElementById("productos_casco");

 //CARDS CASCOS
 casco.forEach(casco => {
    const card = document.createElement("article");
    card.classList.add("card");

    const img_producto = document.createElement("img")
    img_producto.src = casco.img_producto
    img_producto.classList.add("img_card")
    card.appendChild(img_producto);

    const nombre_producto = document.createElement("h3");
    nombre_producto.textContent = casco.nombre_producto;
    nombre_producto.style.color = "#030030";
    card.appendChild(nombre_producto);

    const precio = document.createElement("h2");
    precio.textContent = "$" + casco.precio;
    precio.style.color = "#0046BE";
    card.appendChild(precio);

    const btn_comprar = document.createElement("button");
    btn_comprar.textContent = "Agregar al carrito ";
    btn_comprar.classList.add("btn_card");
    btn_comprar.classList.add("btn");
    card.appendChild(btn_comprar);
    btn_comprar.addEventListener("click", agregar_carrito);
    btn_comprar.dataset.id = casco.id;

    if (productos_casco) {
        productos_casco.appendChild(card);
    }
})

    //FUNCTION AGREGAR AL CARRITO
    function agregar_carrito(event) {
        const btn_comprar = event.target;
        const id_item_agregado = parseInt(btn_comprar.dataset.id);

        const item_agregado = arneses.find(arneses => arneses.id === id_item_agregado) ||
            cuerdas.find(cuerdas => cuerdas.id === id_item_agregado) ||
            casco.find(casco => casco.id === id_item_agregado);

        const item_carrito = document.createElement("li");
        item_carrito.innerText = item_agregado.nombre_producto;

        const ul_carrito = document.getElementById("ul_carrito");
        ul_carrito.appendChild(item_carrito);

        alert("SU producto se añadió correctamente");
    }

})

//MOSTRAR CARRITO
const abrir_carrito = document.getElementById("abrir_carrito");
abrir_carrito.addEventListener("click", function () {
    carrito_aside.style.display = "block";
})

//CERRAR CARRITO
const cerrar_carrito = document.getElementById("cerrar_carrito");
const carrito_aside = document.getElementById("carrito_aside");
cerrar_carrito.addEventListener("click", function () {
    carrito_aside.style.display = "none";
})

//VACIAR CARRITO
const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", function() {
    ul_carrito.innerText = "";
})
