const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    imc('foi');
});


function imc(msg){

    const resultado = document.querySelector('#resultado');
    let peso = Number(document.getElementById("input-peso").value);
    let altura = Number(document.getElementById("input-altura").value);
    let imc= peso/(altura*altura);


    if (imc < 18.5) {
        resultado.innerHTML = msg;
    } else if (imc > 18.5 && imc < 24.9){
        document.getElementById("imprimir").innerHTML=`Seu imc é ${imc.toFixed(2)} (Peso normal)`;


    } else if (imc > 25 && imc < 29.9){
        document.getElementById("imprimir").innerHTML=`Seu imc é ${imc.toFixed(2)} (Sobrepeso)`;

        
    } else if (imc > 30 && imc < 34.9){
        document.getElementById("imprimir").innerHTML=`Seu imc é ${imc.toFixed(2)} (Obesidade grau 1)`;


    } else if (imc > 35 && imc < 39.9){
        document.getElementById("imprimir").innerHTML=`Seu imc é ${imc.toFixed(2)} (Obesidade grau 2)`;


    } else if (imc > 40){
        document.getElementById("imprimir").innerHTML=`Seu imc é ${imc.toFixed(2)} (Obesidade grau 3)`;

    } else{
        document.getElementById("imprimir").innerHTML=`Valor inválido!`;

    }
    
    
    


}