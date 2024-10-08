function imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if(valorIMC < 18.5){
            classificacao  = 'abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal.';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if(valorIMC < 35){
            classificacao = 'você está com obesidade grau I.'
        }else if(valorIMC < 40){
            classificacao = 'você está com obesidade grau II.'
        }else{
            classificacao = 'com obesidade grau III. Cuidado!'
        }

        resultado.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}


