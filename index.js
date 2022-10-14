
// Variables que voy a usar durante el uso de la calculadora
var num1
var num2
var operacion

// funciones que se gatillan tras eventos desde html (onclick)

function casoNumeros(numero){

    condicionCero = false
    let valorCaja = document.getElementById('cajaNumeros').value

    if (numero == '0' && document.getElementById('cajaNumeros').value == ""){
        condicionCero = true
    }

    if(!condicionCero){
    document.getElementById("cajaNumeros").value += numero
    }
}

function casoC(){
    document.getElementById("cajaNumeros").value = ""
}

function casoOperaciones(tipoDeOperacion){
    num1 = parseInt(document.getElementById('cajaNumeros').value)
    casoC()

    switch (tipoDeOperacion){

        case "+":
            operacion = "suma"
            break
        
        case "-":
            operacion = "resta"
            break

        case "x":
            operacion = "multi"
            break
        
        case "/":
            operacion = "division"
    }
}


function casoIgual(){

    num2 = parseInt(document.getElementById('cajaNumeros').value)
    
    switch (operacion){

        case "suma":
            document.getElementById('cajaNumeros').value = num1 + num2
            break
        
        case "resta":
            document.getElementById('cajaNumeros').value = num1 - num2
            break
        
        case "division":
            document.getElementById('cajaNumeros').value = num1 / num2
            break
        
        case "multi":
            document.getElementById('cajaNumeros').value = num1 * num2
            break

    }

}