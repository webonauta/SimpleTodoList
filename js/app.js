const listaTareas = document.getElementById('lista-tareas')

addEventListener()

function addEventListener(){
    document.querySelector('#formulario').addEventListener('submit', agregarTarea)
    listaTareas.addEventListener('click', borrarTarea)
}

function agregarTarea(e){
    e.preventDefault()

    const tarea = document.getElementById('tarea').value
    const botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar-tarea'
    botonBorrar.innerText = 'X'

    const li = document.createElement('li')
    li.innerText = tarea
    li.appendChild(botonBorrar)
    listaTareas.appendChild(li)
}

function borrarTarea(e){
    e.preventDefault()
    if(e.target.className === 'borrar-tarea'){
        e.target.parentElement.remove()
    }
}