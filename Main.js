//crear clase "movimiento"
//  primero pida salfo final de fin de mes
//entrada= descripcion(string), monto(int), gasto o ingreso(boolean), gasto a futuro(boolean)
//metodo que valide g ó i/ s ó n
//clase resultados que muestre:
/*  saldo final de mes anterior
    balance del mes
    saldo del mes corriente
    gastos a debitar al otro mes
    dia en que se gasto mas
*/
//clase mes para indicar el mes anterior
/*
    listar todos los meses
    agregar metodo para el año
*/

function inicio(){
    let mes
    let plata
    let tipeNum
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
}

function month(ind) {
    let ChosedMonth
    const mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    for (let index = 0; index <= ind; index++) {
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
            console.log(number1)
            if(number1<1 || number1>12){
                console.log("llegue")
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
    if(tipe === "ac"){
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
    console.log(tipe,control)
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
        console.log(tipe,control)
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
    let c = false
    let b = false
    let stop = "y"
    let tipe
    let newMoves = []
    alert("Vamos a empezar a ingresar los moviemientos del mes")
    while(stop === "y"){
        tipe="ac1"
        a=prompt("Ingrese la descripcion")
        console.log(tipe,a)
        while(b==false){b=optionControl(tipe,prompt("Definir si es ingreso(i) ó gasto(g)"))}
        console.log(b)
        while(c==false){c=numberControl(tipe,prompt("Ingrese el monto"))}
        console.log(c)
        //const nuevoMovimiento = new movimiento(a,b,c)
        //newMoves.push(nuevoMovimiento)
        b=false
        c=false
        stop = false
        tipe="ac2"
        while(stop==false){
            stop=optionControl(tipe,prompt("Desea ingresar otro movimiento? Y ó N"))
            console.log(tipe,stop)
        }
    }
    /*
    for (let index = 0; index <= newMoves.length; index++) {
        const nuevoMovimiento = new movimiento(a,b,c)
        console.log(nuevoMovimiento.detalle)
        console.log(nuevoMovimiento.tipo)
        console.log(nuevoMovimiento.monto)
        b=false
        c=false
        newMoves[dim++]
    }
    */
}

function movimiento (detalle,tipo,monto){
    this.detalle = detalle
    this.tipo = tipo
    this.monto = monto
}


//inicio()
moves()
