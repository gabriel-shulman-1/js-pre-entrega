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
    mes = prompt("Por favor, ingresa el mes a registrar:")
    while(numberControl(tipeNum,mes)==false){
        mes = prompt("Por favor, volve a ingresa el mes a registrar:")
    }
    tipeNum = "b"
    plata = prompt("Ahora ingresa el dinero que dispones al principio de mes")
    while(numberControl(tipeNum,plata)==false){
        mes = prompt("Por favor, volve a ingresa un numero")
    }
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
    if(tipe === "a"){
        if(isNaN(number1)==true){
            alert("No es un numero. Inserte un numero")
            errorNumber = false
            return errorNumber
        } else {
            if(number<1 && number>12){
                alert("Numero de mes incorrecto. Inserte un numero correcto")
                return errorNumber
            } else {
                return number1
            }
        }
    }
    if(tipe === "b"){
        if(isNaN(number1)==true){
        alert("No es un numero. Inserte un numero")
        errorNumber = false
        return errorNumber
    } else {
            return number1
        }
    }
}
