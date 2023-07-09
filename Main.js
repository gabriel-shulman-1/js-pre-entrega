function escucharMes () {
    let mesMonto
    let mesSelected
    let mes = document.getElementsByClassName("month")
    let montoInicial = document.getElementById("ingresoPlata")
    let iniciarRegistro = document.getElementById("inicioRegistro")
    let tituloPrincipal = document.getElementById("titulo")
    for (let i = 0; i<mes.length;i++) {
        mes[i].addEventListener("click", 
        function(){console.log(mes[i].innerText)
            mesSelected = (mes[i].innerText)},
        false)
        }
    iniciarRegistro.addEventListener("click", tituloP)
    function tituloP() {
        tituloPrincipal.innerHTML = "<h2>Mes a controlar: " + mesSelected + ". Monto inicial: " + montoInicial.value 
        mesMonto = [mesSelected,montoInicial.value]
        console.log("mes: " + mesMonto[0] + ".monto : " + mesMonto[1])
    }
    return mesMonto
}

function moves() {
    let newMoves = []
    let tipoMov
    let detalle = document.getElementById("detalleMovimiento")
    let ingreso = document.getElementById("ingreso")
    let egreso = document.getElementById("egreso")
    let montoMovimiento = document.getElementById("montoMovimiento")
    let guardarRegistro = document.getElementById("saveRegistro")
    let noGuardarRegistro = document.getElementById("noSaveRegistro")
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
        guardarRegistro.value=true
        noGuardarRegistro.value=false
        registroNuevo = new herramientas(detalle.value,tipoMov,Number(montoMovimiento.value))
        newMoves.push(registroNuevo)
        console.log("detalle: " + registroNuevo.detalle + " tipo:" + registroNuevo.tipo + " monto: "+registroNuevo.monto)
      }
    function bot4(){
        guardarRegistro.value=false
        noGuardarRegistro.value=true
        registroNuevo = new herramientas(detalle.value,tipoMov,Number(montoMovimiento.value))
        newMoves.push(registroNuevo)
        console.log("detalle: " + registroNuevo.detalle + " tipo:" + registroNuevo.tipo + " monto: "+registroNuevo.monto)
        return(newMoves)
    }
}

class herramientas {
    constructor(detalle, tipo, monto) {
        this.detalle = detalle
        this.tipo = tipo
        this.monto = monto
    }
}

function reportar (inicioMes,registrosMes) {
    let i = 1
    let resumen = document.getElementById("Resumen")
    let inicioDeMes = document.createElement("div")
    inicioDeMes.className = "resumenCuenta"
    inicioDeMes.innerHTML = `
        <h3>Resumen del mes de ${inicioDeMes[0]}</h3>
        <h3>Saldo inicial: ${inicioDeMes[1]}</h3>`
        resumen.appendChild(inicioDeMes)
    let descripcionMov = document.createElement("div")
    descripcionMov.className = "resumenCuenta"
    descripcionMov.innerHTML = `
        <p>n°</p>
        <p>Detalle</p>
        <p>  Tipo  </p>
        <p>Monto</p>`
        resumen.appendChild(descripcionMov)
    registrosMes.forEach(elemento => { 
        let divMovimiento = document.createElement("div")
        divMovimiento.className = "resumenCuenta"
        divMovimiento.innerHTML = `
        <p>${i}</p>
        <p>${elemento.detalle}</p>
        <p>${elemento.tipo}</p>
        <p>${elemento.monto}</p>`
        resumen.appendChild(divMovimiento)
        i++
    });
}


function main() {
        let inicial = escucharMes()
        let movimientos = moves()
        reportar()
}
main()
/*
function inicio() {
    let mes, plata, tipeNum, principio
    let contenedorMes = document.getElementById("mesSeleccionado")
    let contenedorMonto = document.getElementById("montoInicial")
    let ingresoMes = document.getElementById("escojerMes")
    let ingresoPlata = document.getElementById("ingresoPlata")
    tipeNum = "a"
    mes = ingresoMes.addEventListener("keydown",)
    while (numberControl(tipeNum, mes) == false) {
        mes = prompt("Por favor, volve a ingresa el mes a registrar:")
    }
    tipeNum = "b"
    plata = ingresoPlata.addEventListener("input")
    while (numberControl(tipeNum, plata) == false) {
        plata = prompt("Por favor, volve a ingresa un numero")
    }
    contenedorMes.innerHTML="<h2>" + "Mes a controlar: " + mes + "</h2>"
    contenedorMonto.innerHTML="<h2>" + "Monto inicial: " + plata + " $" + "</h2>"
    //alert("El mes que vas a controlar es el de " + month(mes) + " y empezas el mes con un monto de " + plata + " pesos")
    principio = [mes, plata]
    return principio
}

function month(ind) {
    let ChosedMonth
    const mes = [" ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    for (let index = 1; index <= ind; index++) {
        if (index == ind) {
            ChosedMonth = mes[ind]
            return ChosedMonth
        }
    }
}

function numberControl(tipe, number1) {
    let errorNumber = false
    if (tipe === "a") {
        if (isNaN(number1) == true) {
            alert("No es un numero. Inserte un numero")
            return errorNumber
        } else {
            if (number1 < 1 || number1 > 12) {
                alert("Numero de mes incorrecto. Inserte un numero correcto")
                return errorNumber
            } else {
                return number1
            }
        }
    }
    if (tipe === "b") {
        if (isNaN(number1) == true) {
            alert("No es un numero. Inserte un numero")
            return errorNumber
        } else {
            return number1
        }
    }
    if (tipe === "ac1") {
        if (isNaN(number1) == true) {
            alert("No es un numero")
            return errorNumber
        } else {
            if (number1 < 0) {
                alert("El valor es menor a 0")
                return errorNumber
            }
            else {
                return number1
            }
        }
    }
}

function optionControl(tipe, control) {
    control = control.toLowerCase()
    let errorValue = false
    if (tipe === "ac1") {
        if (isNaN(control) == false) {
            alert("Ingresaste un numero")
            return errorValue
        } else {
            if (control === "i") {
                return control
            }
            if (control === "g") {
                return control
            }
            else {
                alert("Ingresaste una opcion invalida.")
                return errorValue
            }
        }
    }
    if (tipe === "ac2") {
        if (isNaN(control) == false) {
            alert("Ingresaste un numero")
            return errorValue
        } else {
            if (control === "y") {
                return control
            }
            if (control === "n") {
                return control
            }
            else {
                alert("Ingresaste una opcion invalida.")
                return errorValue
            }
        }
    }
}

function moves() {
    let a = false
    let b = false
    let c = false
    let stop = "y"
    let tipe
    let newMoves = []
    alert("Vamos a empezar a ingresar los moviemientos del mes")
    while (stop === "y") {
        tipe = "ac1"
        a = prompt("Ingrese la descripcion")
        while (b == false) { b = optionControl(tipe, prompt("Definir si es ingreso(i) ó gasto(g)")) }
        while (c == false) { c = numberControl(tipe, parseInt(prompt("Ingrese el monto"))) }
        const nuevoMovimiento = new herramientas(a, b, c)
        newMoves.push(nuevoMovimiento)
        b = false
        c = false
        stop = false
        tipe = "ac2"
        while (stop == false) { stop = optionControl(tipe, prompt("Desea ingresar otro movimiento? Y ó N")) }
    }
    return newMoves
}

function results(moves) {
    let income = 0
    let spent = 0
    let total
    parseInt(income)
    parseInt(spent)
    for (const elemento of moves) {
        if (elemento.tipo == "i") {
            income = elemento.monto + income
        } else {
            spent = elemento.monto + spent
        }
    }
    total = [income, spent]
    return total
}

function analisis(inicio, gastoEingreso) {
    let final = parseInt(inicio[1]) + (parseInt(gastoEingreso[0]) - parseInt(gastoEingreso[1]))
    alert("Tus ingresos en el mes de " + month(inicio[0]) + " fueron de " + gastoEingreso[0] + " pesos")
    alert("Tus gastos en el mes de " + month(inicio[0]) + " fueron de " + gastoEingreso[1] + " pesos")
    alert("Tu saldo a fin de mes fue de " + final)
}

class herramientas {
    constructor(detalle, tipo, monto) {
        this.detalle = detalle
        this.tipo = tipo
        this.monto = monto
    }
}

function report(moves) {
    let a, b, c
    let d = 1
    alert("A continuacion, vamos a mostrarte el reporte de movimientos realizados.")
    alert("Total de movimientos: " + moves.length + " movimientos")
    for (const elemento of moves) {
        a = elemento.detalle
        b = elemento.tipo
        c = elemento.monto
        alert("Movimiento n°" + d + ": " + a + ". Tipo de movimiento: " + b + ". Monto: " + c + " Pesos")
        d++
    }
}

function USS(moves) {
    let dolar=490
    let cotizar = moves.map((moves)=>{
        return{
            detalle: moves.detalle,
            tipo: moves.tipo,
            monto: moves.monto / dolar
        }
    })
    let a, b, c
    let d = 1
    alert("A continuacion, vamos a mostrarte tus movimientos en dolares.")
    for (const elemento of cotizar) {
        a = elemento.detalle
        b = elemento.tipo
        c = elemento.monto
        alert("Movimiento n°" + d + ". Monto: " + c.toFixed(2) + " Dolares")
        d++
    }
}

function main() {
    let comienzo
    let movimientos
    let tipe = "ac2"
    let continuar = true
    alert("Hola!, este es un reporte de movimientos monetarios.")
    while (continuar == true) {
        comienzo = inicio()
        movimientos = moves()
        analisis(comienzo, results(movimientos))
        report(movimientos)
        USS(movimientos)
        while (continuar == true) { continuar = optionControl(tipe, prompt("Desea hacer otro reporte? Y ó N")) }
        if (continuar == "y") {
            continuar = true
        } else {
            continuar = false
        }
    }
    alert("nos vemos!")
}

main()*/