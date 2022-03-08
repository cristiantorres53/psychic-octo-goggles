let formulario = document.getElementById('formulario')
let btnBuscar = document.getElementById('btnCorreo')
let btnEliminar = document.getElementById('btnEditar')
let btnEditar = document.getElementById('btnEliminar')

let url = 'https://ev2022.herokuapp.com/usuarios/'

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('id').style.display = 'none'
    // document.getElementById('label-edit').style.display = 'none'
})

formulario.addEventListener('submit', async e => {
    e.preventDefault()

    let foto = document.getElementById('photo').value
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let fechaNacimiento = document.getElementById('fecha').value
    let cedula = document.getElementById('cedula').value
    let correo = document.getElementById('correo').value
    //let pass = document.getElementsByClassName('input-contraseña').value

    let resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            perfil: foto,
            nacimiento: fechaNacimiento,
            Cedula: cedula,
            correo: correo,
            //contrasea:pass
            // console.log("estoy aca")
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    console.log(resp)
    document.getElementById("formulario").reset()
})

btnCorreo.addEventListener('click', async () => {


    document.getElementById('id').style.display = 'block'
    // document.getElementById('label-edit').style.display = 'block'

    let email = document.getElementById('correo').value
    

    let resp = await fetch(url)
    let data = await resp.json()

    let modificar = data.find(user => user.correo === email)

    const { nombre, apellido, fecha, cedula, correo,  id} = modificar

    document.getElementById('nombre').value= nombre
    document.getElementById('apellido').value=apellido
    document.getElementById('fecha').value=fecha
    document.getElementById('cedula').value=cedula
    document.getElementById('correo').value=correo
    document.getElementById('id').value = id

    console.log(modificar)
})

btnEditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('nombre').value
    let lastNameModificar = document.getElementById('apellido').value
    let dateModificar = document.getElementById('fecha').value
    let documentIdModificar = document.getElementById('cedula').value
    // let emailModificar = document.getElementById('email').value

    await fetch(url + idModificar, {
        method: 'PUT',
        body: JSON.stringify({
            id:idModificar,
            nombre: nameModificar,
            apellido: lastNameModificar,
            fecha: dateModificar,
            cedula: documentIdModificar,
            // correo: emailModificar
        }),
        headers: {
            'Content-Type': 'application/json; chartset=UTF-8'
        }
    })
})

btnEliminar.addEventListener('click', async () => {
    let idEliminar = document.getElementById('id').value
    await fetch(url + idEliminar, {
        method: 'DELETE'
    })
})