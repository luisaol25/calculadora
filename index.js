var num1
var num2
var operacion

function suma(num1, num2){
    return num1 + num2
     
}

function resta(num1, num2){
    return num1 - num2
}

function division(num1, num2){
    return num1 / num2
}

function multiplicacion(num1, num2){
    return num1 * num2
}

function casoC(){
    document.getElementById("cajaNumeros").value = ""
}

function caso1(){
    document.getElementById("cajaNumeros").value += "1"  
}

function caso2(){
    document.getElementById("cajaNumeros").value += "2"  
}
function caso3(){
    document.getElementById("cajaNumeros").value += "3"  
}
function caso4(){
    document.getElementById("cajaNumeros").value += "4"  
}
function caso5(){
    document.getElementById("cajaNumeros").value += "5"  
}
function caso6(){
    document.getElementById("cajaNumeros").value += "6"  
}
function caso7(){
    document.getElementById("cajaNumeros").value += "7"  
}
function caso8(){
    document.getElementById("cajaNumeros").value += "8"  
}
function caso9(){
    document.getElementById("cajaNumeros").value += "9"  
}

function caso0(){
    let valor = parseInt(document.getElementById("cajaNumeros").value)  
    if (valor > 0){
        document.getElementById("cajaNumeros").value += "0" 
        
    }          
}

function casoSuma(){

    num1 = parseInt(document.getElementById('cajaNumeros').value)
    operacion = 'suma'
    casoC()
    
}

function casoResta(){
    num1 = parseInt(document.getElementById('cajaNumeros').value)
    operacion = 'resta'
    casoC()
}

function casoDivision(){
    num1 = parseInt(document.getElementById('cajaNumeros').value)
    operacion = 'division'
    casoC()
}
function casoMulti(){
    num1 = parseInt(document.getElementById('cajaNumeros').value)
    operacion = 'multi'
    casoC()
}
function casoIgual(){

    num2 = parseInt(document.getElementById('cajaNumeros').value)
    
    /*
    if (operacion == 'suma'){
        document.getElementById('cajaNumeros').value = suma(num1, num2)
    }

    else if(operacion == 'resta' ){
        document.getElementById('cajaNumeros').value = resta(num1, num2)

    }
 
    else if(operacion== 'division'){
        document.getElementById('cajaNumeros').value = division(num1, num2)
    }

    else if(operacion== 'multi'){
        document.getElementById('cajaNumeros').value = multiplicacion(num1, num2)
    } */
    
    switch (operacion){

        case "suma":
            document.getElementById('cajaNumeros').value = suma(num1, num2)
            break
        
        case "resta":
            document.getElementById('cajaNumeros').value = resta(num1, num2)
            break
        
        case "division":
            document.getElementById('cajaNumeros').value = division(num1, num2)
            break
        
        case "multi":
            document.getElementById('cajaNumeros').value = multiplicacion(num1, num2)
            break

    }

}

 


