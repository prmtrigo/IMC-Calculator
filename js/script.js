let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let button = document.querySelector('#button');
let fst_paragraph = document.querySelector('#fst_paragraph');
let snd_paragraph = document.querySelector('#snd_paragraph');

function imc(weight, height){

    let result = "";

    button.addEventListener('click', ()=>{

        let peso_final = peso.value;
        let altura_final = altura.value;

        weight = peso_final  //multiply by 10**4
        height = altura_final * altura_final //the equation is weight/ height**2

        result = weight/height; //completing the equation

        fst_paragraph.innerHTML = `Seu IMC é ${result.toFixed(2)}`
    
        let imc = result;

        if(imc < 18.5){
            snd_paragraph.innerHTML = `Seu Resultado está abaixo da média`
        }
        else if(imc >= 18.5 && imc < 25){
            snd_paragraph.innerHTML = `Seu Resultado está dentro da média`
        }
        else if(imc >= 25 && imc < 30){
            snd_paragraph.innerHTML = `Seu Resultado está acima da média (Sobrepeso)`
        }
        else if(imc >= 30 && imc < 35){
            snd_paragraph.innerHTML = `Seu Resultado está acima da média (Obesidade Grau I)`
        }
        else if(imc >= 35 && imc < 40){
            snd_paragraph.innerHTML = `Seu Resultado está acima da média (Obesidade Grau II)`
        }
        else{
            snd_paragraph.innerHTML = `Seu Resultado está acima da média (Obesidade Grau III)`
        }

    })
}

imc()