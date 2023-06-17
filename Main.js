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
    let errorNumber
    console.log(tipe,number1)
    if(tipe === "a"){
        if(isNaN(number1)==true){
            alert("No es un numero. Inserte un numero")
            errorNumber = false
            return errorNumber
        } else {
            console.log(number1)
            if(number1<1 || number1>12){
                console.log("llegue")
                alert("Numero de mes incorrecto. Inserte un numero correcto")
                errorNumber = false
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
        errorNumber = false
        return errorNumber
    } else {
            return number1
        }
    }
    if(tipe === "ac"){
        while(errorNumber==false){
            if(isNaN(number1)==true){
            console.log(tipe,number1)
            alert("No es un numero")
            errorNumber = false
        } else {
            if(number1<0){
                alert("El valor es menor a 0")
            }
            else {
                return number1
            }
            }
        }
        number1=prompt("Vuelva a insertar un numero:")
    }
}

function optionControl(tipe,control){
    let errorValue
    control = control.toLowerCase();
    if(tipe === "ac"){
        while(errorValue==false){
            if(isNaN(control)==false){
            alert("Ingresaste un numero. Inserte una opcion: I ó G")
            errorValue = false
        } else {
                if(control=="i"){
                    return control
                }
                if(control=="g"){
                    return control
                }
                else{
                    alert("Ingresaste una opcion invalida. Inserte una opcion: I ó G")
                errorValue = false
                }
            }
        }
    }
}

function moves () {
    let tipe = "ac"
    let newMoves = []
    alert("Vamos a empezar a ingresar los moviemientos del mes")
    for (let index = 0; index < newMoves.length; index++) {
        const nuevoMovimiento = new movimiento(prompt("Ingrese la descripcion del movimiento:"),optionControl(tipe,prompt("Ingrese el tipo de ingreso. I para ingresos y G para gastos")))
        //.....
    }
}

function movimiento (detalle,tipo,monto){
    this.detalle = detalle
    this.tipe = tipe
    this.monto = monto
}


inicio()
