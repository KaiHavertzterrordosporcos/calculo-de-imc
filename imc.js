const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        if (valorIMC < 18.5){
            classificacao = 'peso abaixo da média.';
        } else if (valorIMC < 25) {
            classificacao = 'peso ideal.';

        } else if (valorIMC < 30) {
            classificacao = 'peso um pouco acima da média.';
        } else if (valorIMC <35) {
            classificacao = 'obesidade grau I. (faça exercicios)'
        } else if (valorIMC < 40) {
            classificacao = 'obesidade grau II. (faça exercicios e coma vegetais e frutas)'
        } else {
            classificacao = 'obesidade grau III. (se alimente melhor e faça exercicios)'
        }

        resultado.textContent = `${nome} seu IMC é: ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'não deixe de por todas as informações!';
    }

}

calcular.addEventListener('click', imc);