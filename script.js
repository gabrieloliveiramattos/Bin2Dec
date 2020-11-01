const section = document.querySelector("section");
const binario = document.getElementById("binario");
const decimalEl = document.getElementById("decimal");
const sapmCalculo = document.querySelector(".calculo");


function SomenteZeroOne(e){
    const tecla = ( window.event ) ? e.keyCode : e.which;
    if( tecla > 47 && tecla < 50 ){
        return true;
    }else{
        alert( "Este campo aceita somente 0 ou 1." );
        return false;
    }
}

function calculoBinario(){

    var bin = binario.value;
    var dec = 0;

    for(let i = 0; i < bin.length; i++){
        dec += Math.pow(2, i) * bin [bin.length - i - 1];
    }

    document.getElementById('decimal').value = formatDecimal(dec);
}

function formatDecimal(dec){
    return dec === 0 ? '' : dec;
}

setInterval(calculoBinario, 1000);