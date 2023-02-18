function myIMC() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');

    function eventDeForm(event) {
        event.preventDefault();
        const weight = form.querySelector('#peso');
        const height = form.querySelector('#altura');
    
        let peso = weight.value;
        let altura = height.value;
        let imc = peso / Math.pow(altura, 2);

        verification(peso, altura, imc, result);  
    }

    form.addEventListener('submit', eventDeForm);
}

function verification(peso, altura, imc, result) {
    if(isNaN(peso)) {
        result.innerHTML = `<p>Peso Inválido</p>`;
    } else if(isNaN(altura)) {
        result.innerHTML = `<p>Altura Inválida</p>`;
    } else {
        result.innerHTML = `<p>Resultado: ${imc.toFixed(2)}</p>`;
        result.innerHTML += `<p>Status: ${resultado(imc.toFixed(2))}</p>`;
    }
}

function resultado(imc) {
    let status = "";
    if(imc < 18.5) {
        status = "Abaixo do peso";
    } else if(imc <= 24.9) {
        status = "Peso normal";
    } else if(imc <= 29.9) {
        status = "Sobrepeso";
    } else if(imc <= 34.9) {
        status = "Obesidade grau 1";
    } else if(imc <= 39.9) {
        status = "Obesidade grau 2";
    } else {
        status = "Obesidade grau 3";
    }

    return status;
}

myIMC();