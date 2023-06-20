function inicio(){
    let mes
    let plata
    let tipeNum
    let principio
    alert("Hola!, este es un reporte de movimientos monetarios.")
    tipeNum = "a"
    mes = prompt("Por favor, ingresa el mes a registrar. Los meses se ingresan con numeros del 1 al 12:")
    while(numberControl(tipeNum,mes)==false){
        mes = prompt("Por favor, volve a ingresa el mes a registrar:")
    }
    tipeNum = "b"
    plata = prompt("Ahora ingresa el dinero que dispones al principio de mes")
    while(numberControl(tipeNum,plata)==false){
        plata = prompt("Por favor, volve a ingresa un numero")
        console.log(tipeNum,plata)
    }
    alert("El mes que vas a controlar es el de " + month(mes) + " y empezas el mes con un monto de " + plata + " pesos")
    principio=[mes,plata]
    return principio
}

function month(ind) {
    let ChosedMonth
    const mes = [" ","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    for (let index = 1; index <= ind; index++) {
        if(index == ind){
            ChosedMonth = mes[ind]
            return ChosedMonth
        }
    }
}

function numberControl(tipe,number1){
    let errorNumber = false
    if(tipe === "a"){
        if(isNaN(number1)==true){
            alert("No es un numero. Inserte un numero")
            return errorNumber
        } else {
            if(number1<1 || number1>12){
                alert("Numero de mes incorrecto. Inserte un numero correcto")
                return errorNumber
            } else {
                return number1
            }
        }
    }
    if(tipe === "b"){
        if(isNaN(number1)==true){
        console.log(tipe,number1)
        alert("No es un numero. Inserte un numero")
        return errorNumber
    } else {
            return number1
        }
    }
    if(tipe === "ac1"){
            if(isNaN(number1)==true){
            alert("No es un numero")
            return errorNumber
        } else {
            if(number1<0){
                alert("El valor es menor a 0")
                return errorNumber
            }
            else {
                return number1
            }
        }
    }
}

function optionControl(tipe,control){
    let errorValue = false
    if(tipe === "ac1"){
            if(isNaN(control)==false){
                alert("Ingresaste un numero")
                return errorValue
            } else {
                if(control==="i"){
                    return control
                }
                if(control==="g"){
                    return control
                }
                else{
                    alert("Ingresaste una opcion invalida.")
                    return errorValue
            }
        }
    }
    if(tipe === "ac2"){
        if(isNaN(control)==false){
            alert("Ingresaste un numero")
            return errorValue
        } else {
            if(control==="y"){
                return control
            }
            if(control==="n"){
                return control
            }
            else{
                alert("Ingresaste una opcion invalida.")
                return errorValue
        }
    }
}
}

function moves () {
    let a =false
    let b = false
    let c = false
    let stop = "y"
    let tipe
    let newMoves = []
    alert("Vamos a empezar a ingresar los moviemientos del mes")
    while(stop === "y"){
        tipe="ac1"
        a=prompt("Ingrese la descripcion")
        while(b==false){b=optionControl(tipe,prompt("Definir si es ingreso(i) ó gasto(g)"))}
        while(c==false){c=numberControl(tipe,parseInt(prompt("Ingrese el monto")))}
        const nuevoMovimiento = new movimiento(a,b,c)
        newMoves.push(nuevoMovimiento)
        b=false
        c=false
        stop = false
        tipe="ac2"
        while(stop==false){stop=optionControl(tipe,prompt("Desea ingresar otro movimiento? Y ó N"))}
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
        if(elemento.tipo=="i"){
            income=elemento.monto + income
        } else {
            spent=elemento.monto + spent
        }
    }
    total = [income,spent]
    return total
}

function analisis (inicio,gastoEingreso){
    let final = parseInt(inicio[1]) + (parseInt(gastoEingreso[0])-parseInt(gastoEingreso[1]))
    alert("Tus ingresos en el mes de " + month(inicio[0]) + " fueron de " + gastoEingreso[0] + " pesos")
    alert("Tus gastos en el mes de " + month(inicio[0]) + " fueron de " + gastoEingreso[1] + " pesos")
    alert("Tu saldo a fin de mes fue de " + final)
}

function movimiento (detalle,tipo,monto){
    this.detalle = detalle
    this.tipo = tipo
    this.monto = monto
}

function report (moves) {
    let a,b,c
    for (const elemento of moves) {
        a=toString(elemento.detalle)
        b=toString(elemento.tipo)
        c=toString(elemento.monto)
        alert(a+" "+b+" "+c)
    }
}

function main () {
    let tipe = "ac2"
    let continuar = true
    while(continuar==true){
        analisis(inicio(),results(moves()))
        while(continuar==true){continuar=optionControl(tipe,prompt("Desea hacer otro reporte? Y ó N"))}
        if(continuar=="y"){
            continuar=true
        } else {
            continuar=false
        }
    }
    alert("nos vemos!")
}
main()