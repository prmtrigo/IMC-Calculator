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
    })

    table()
}

function table(weight, height){

}

imc()