let formulario = document.getElementsByClassName('form-registro')
let btnBuscar = document.getElementById('')
let btnEliminar = document.getElementById('')
let btnEditar = document.getElementById('')

let url = 'https://ev2022.herokuapp.com/usuarios/'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('id').style.display = 'none'
    document.getElementById('label-edit').style.display = 'none'
})

formulario.addEventListener('submit', async e => {
    e.preventDefault()

    let foto = document.getElementById('photo').value
    let nombre = document.getElementsByClassName('input-nombre').value
    let apellido = document.getElementsByClassName('input-apellido').value
    let fechaNacimiento = document.getElementsByClassName('input-fechaNacimiento').value
    let cedula = document.getElementsByClassName('input-cedula').value
    let correo = document.getElementsByClassName('input-correo').value
    let pass = document.getElementsByClassName('input-contraseña').value

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            foto: foto,
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento : fechaNacimiento,
            cedula: cedula,
            correo: correo,
            pass:pass
            console.log("estoy aca")
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    document.getElementById("formulario").reset()

    
})



