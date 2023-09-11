//Sumar
function sumar(){
    //Obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    //Verifica que los campos no esten vacíos
    if(isNaN(num1)|| isNaN(num2)){
        alert("Por favor, ingresa números validos en ambos campos.")
        return
    }

    //Realiza la suma
    let suma = num1 + num2 
    // Muestra el resultado en la página con animación 
    let resultadoElement = document.getElementById("Resultado")
    resultadoElement.innerHTML = "La suma es: " + suma
    resultadoElement.classList.add("mostrar")

    //cambia el color de la alerta segun el resultado
    if(suma > 10){
        resultadoElement.className = "alert alert-success mostrar"
    } else{
        resultadoElement.className = "alert alert-danger mostrar"
    }
}

//agrega un evento click al boton de calcular
document.getElementById("calcularBtn").addEventListener("click", sumar)








//Restar
function restar(){
    //Obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    //Verifica que los campos no esten vacíos
    if(isNaN(num1)|| isNaN(num2)){
        alert("Por favor, ingresa números validos en ambos campos.")
        return
    }

    //Realiza la suma
    let resta = num1 - num2 
    // Muestra el resultado en la página con animación 
    let resultadoElement = document.getElementById("Resultado")
    resultadoElement.innerHTML = "La resta es: " + resta
    resultadoElement.classList.add("mostrar")

    //cambia el color de la alerta segun el resultado
    if(resta > 10){
        resultadoElement.className = "alert alert-success mostrar"
    } else{
        resultadoElement.className = "alert alert-danger mostrar"
    }
}

//agrega un evento click al boton de calcular
document.getElementById("restarBtn").addEventListener("click", restar)






//Multiplicar
function multiplicar(){
    //Obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    //Verifica que los campos no esten vacíos
    if(isNaN(num1)|| isNaN(num2)){
        alert("Por favor, ingresa números validos en ambos campos.")
        return
    }

    //Realiza la suma
    let mult = num1 * num2 
    // Muestra el resultado en la página con animación 
    let resultadoElement = document.getElementById("Resultado")
    resultadoElement.innerHTML = "La multiplicación es: " + mult
    resultadoElement.classList.add("mostrar")

    //cambia el color de la alerta segun el resultado
    if(mult > 10){
        resultadoElement.className = "alert alert-success mostrar"
    } else{
        resultadoElement.className = "alert alert-danger mostrar"
    }
}

//agrega un evento click al boton de calcular
document.getElementById("multiplicarBtn").addEventListener("click", multiplicar)






//Dividir
function dividir(){
    //Obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    //Verifica que los campos no esten vacíos
    if(isNaN(num1)|| isNaN(num2)){
        alert("Por favor, ingresa números validos en ambos campos.")
        return
    }

    //Realiza la suma
    let divi = num1 / num2 
    // Muestra el resultado en la página con animación 
    let resultadoElement = document.getElementById("Resultado")
    resultadoElement.innerHTML = "La división es: " + divi
    resultadoElement.classList.add("mostrar")

    //cambia el color de la alerta segun el resultado
    if(divi > 10){
        resultadoElement.className = "alert alert-success mostrar"
    } else{
        resultadoElement.className = "alert alert-danger mostrar"
    }
}

//agrega un evento click al boton de calcular
document.getElementById("dividirBtn").addEventListener("click", dividir)