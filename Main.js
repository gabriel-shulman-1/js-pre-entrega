function escucharMes () {
    let see = false
    let total = []
    let mesMonto
    let mesSelected
    let mes = document.getElementsByClassName("month")
    let montoInicial = document.getElementById("ingresoPlata")
    let iniciarRegistro = document.getElementById("inicioRegistro")
    let tituloPrincipal = document.getElementById("titulo")
    for (let i = 0; i<mes.length;i++) {
        mes[i].addEventListener("click", 
        function(){console.log(mes[i].innerText)
            mesSelected = (mes[i].innerText)},false)
        }
    iniciarRegistro.addEventListener("click", tituloP)
    function tituloP() {
        tituloPrincipal.innerHTML = "<h2>Mes a controlar: " + mesSelected + ". Monto inicial: " + montoInicial.value + " $ </h2>"
        total = [mesSelected,Number(montoInicial.value)]
        moves(total)
    }
}

function moves(inicial) {
    let cant = 1
    let newMoves = []
    let tipoMov = "ingreso"
    let resumen = document.getElementById("Resumen")
    let cantidad = document.getElementById("cantidadMov")
    let detalle = document.getElementById("detalleMovimiento")
    let ingreso = document.getElementById("ingreso")
    let egreso = document.getElementById("egreso")
    let montoMovimiento = document.getElementById("montoMovimiento")
    let guardarRegistro = document.getElementById("saveRegistro")
    let noGuardarRegistro = document.getElementById("noSaveRegistro")
    cantidad.innerText = "Movimiento n° " + cant
    ingreso.addEventListener("click",bot1)
    egreso.addEventListener("click",bot2)
    guardarRegistro.addEventListener("click",bot3)
    noGuardarRegistro.addEventListener("click",bot4)
    function bot1(){
        tipoMov = "ingreso"
      }
    function bot2(){
        tipoMov = "egreso"
      }
      function bot3(){
        cant ++
        cantidad.innerText = "Movimiento n° " + cant
        guardarRegistro.value=true
        noGuardarRegistro.value=false
        registroNuevo = new herramientas(detalle.value,tipoMov,Number(montoMovimiento.value))
        newMoves.push(registroNuevo)}
    function bot4(){
        cantidad.innerText = "Movimiento n° " + cant
        guardarRegistro.value=false
        noGuardarRegistro.value=true
        registroNuevo = new herramientas(detalle.value,tipoMov,Number(montoMovimiento.value))
        newMoves.push(registroNuevo)
        nuevoMensual = new mensual(inicial,newMoves)
        reportar(nuevoMensual)
        cant = 0
    }
}

class mensual {
    constructor(arrayInicial, movimientosMes) {
        this.arrayInicial = arrayInicial
        this.movimientosMes = movimientosMes
    }
}

class herramientas {
    constructor(detalle, tipo, monto) {
        this.detalle = detalle
        this.tipo = tipo
        this.monto = monto
    }
}

function reportar (mensual) {
    let parajson = JSON.stringify([mensual.arrayInicial[0],mensual])
    localStorage.setItem("registro", parajson)
    let i = 1
    let total = mensual.arrayInicial[1]
    let resumen = document.getElementById("Resumen")
    let inicioDeMes = document.createElement("div")
    inicioDeMes.className = "resumenCuenta"
    inicioDeMes.innerHTML = `
        <h3>Resumen del mes de ${mensual.arrayInicial[0]}</h3>
        <h3>Saldo inicial: ${mensual.arrayInicial[1]} $ </h3>`
        resumen.appendChild(inicioDeMes)
    let descripcionMov = document.createElement("div")
    descripcionMov.className = "resumenCuenta"
    descripcionMov.innerHTML = `
        <p>n°</p>
        <p>Detalle</p>
        <p>  Tipo  </p>
        <p>Monto</p>`
        resumen.appendChild(descripcionMov)
    mensual.movimientosMes.forEach(elemento => {
        if(elemento.tipo=="ingreso"){
            total = total + Number(elemento.monto)
        } else {
            total = total - Number(elemento.monto)
        }
        let divMovimiento = document.createElement("div")
        divMovimiento.className = "resumenCuenta"
        divMovimiento.innerHTML = `
        <p>${i}</p>
        <p>${elemento.detalle}</p>
        <p>${elemento.tipo}</p>
        <p>${elemento.monto} $ </p>`
        resumen.appendChild(divMovimiento)
        i++
    });
    let finalCuenta = document.createElement("div")
    finalCuenta.className = "resumenCuenta"
    finalCuenta.innerHTML = `
        <h3>Saldo final : ${total} $ </h3>`
        resumen.appendChild(finalCuenta) 
}

escucharMes()
