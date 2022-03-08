const todos = document.getElementById('todos')

// Funcion de obtener datos
async function getImagenes (){
    try {
        const resp = await fetch('https://ev2022.herokuapp.com/');
        const data = await resp.json()
        return data
    }catch (error){
        return console.log(error);
    }
}

// Funcion mostrar imagenes
async function pintarImagenes(data) {
    if(data == undefined){
        data = await getImagenes()
    }

    todos.innerHTML = '';

    data.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        todos.innerHTML +=`
                <div class="todos">
                    <img src="${Producto_Imagen}" alt="img${id}" />
                    <p class="hijoNombreProducto">${Producto_Nombre}</p>
                    <p class="hijoPrecioProducto">$${Precio}</p>
                </div>
        `
    })
}

pintarImagenes()

//-----------------------------------------------------------------------------------------//
const favoritos = document.getElementById('favoritos');

async function mostrarFavoritos() {
    const data = await getImagenes();
    const result = data.filter((fav)=> fav.Categoria === "favorito")

    favoritos.innerHTML = '';

    result.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        favoritos.innerHTML +=`
        <div class="favoritos">
        <img src="${Producto_Imagen}" alt="img${id}" />
        <p class="hijoNombreProducto">${Producto_Nombre}</p>
        <p class="hijoPrecioProducto">$${Precio}</p>
    </div>
        `
    })
}

mostrarFavoritos()

//--------------------------------------------------------------------------------------------------//
const supermercado = document.getElementById('supermercado');

async function mostrarSupermercado() {
    const data = await getImagenes();
    const result = data.filter((item)=> item.categoria === "Belleza y Cuidado Personal")

    supermercado.innerHTML = '';

    result.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        supermercado.innerHTML +=`
        <div class="supermercado">
        <img src="${Producto_Imagen}" alt="img${id}" />
        <p class="hijoNombreProducto">${Producto_Nombre}</p>
        <p class="hijoPrecioProducto">$${Precio}</p>
    </div>
        `
    })
}

mostrarSupermercado()
//--------------------------------------------------------------------------------------------------------------//
const oferta = document.getElementById('ofertas');

async function mostrarOferta() {
    const data = await getImagenes();
    const result = data.filter((item)=> item.oferta ==="si")

    oferta.innerHTML = '';

    result.forEach((imagen)=> {
        const { id, Producto_Nombre, Producto_Imagen, Precio } = imagen;

        oferta.innerHTML +=`
        <div class="ofertas">
        <img src="${Producto_Imagen}" alt="img${id}" />
        <p class="hijoNombreProducto">${Producto_Nombre}</p>
        <p class="hijoPrecioProducto">$${Precio}</p>
    </div>
        `
    })
}

mostrarOferta()
//--------------------------------------------------------------------------------------------------------------//

async function verImagen(id){
    const data = await getImagenes();
    const result = data.filter((Producto_Imagen)=> Producto_Imagen.id === id)
    
    localStorage.setItem('imagen', JSON.stringify(result))

    window.location.href = '../detalle.html'
}