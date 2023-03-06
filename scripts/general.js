import {clean} from './codigi.js'

// Variables
const front = document.querySelector('#frontSection');
const runCodiGi = document.getElementById('runCodiGi');
const actionsBtn = document.querySelector('#buttonsJS');
// const close = document.querySelector('.btn-close')
const closeBtn = document.querySelectorAll('.btn-close');
// EXPORTAR?
const encrypt = document.querySelector('#encryptMsg');
const decode = document.querySelector('#decodeMsg');

const welcome = document.querySelector('#welcome');

const backToWelcome = document.querySelectorAll('#backToWelcome');

const startEncrypt = document.querySelector('#startEncrypt');
const startDecode = document.querySelector('#startDecode');

const goDecode = document.querySelector('.goDecode');
const goEncrypt = document.querySelector('.goEncrypt');



// Events
runCodiGi.addEventListener('click', showCodiGi);
closeBtn[0].addEventListener('click', closeModal);
closeBtn[1].addEventListener('click', closeModal);
closeBtn[2].addEventListener('click', closeModal);

backToWelcome[0].addEventListener('click', back);
backToWelcome[1].addEventListener('click', back);


startEncrypt.addEventListener('click', runEncrypt);
startDecode.addEventListener('click', runDecode);
goEncrypt.addEventListener('click', runEncrypt);
goDecode.addEventListener('click', runDecode);


// Functions
function showCodiGi(e){
    welcome.classList.remove('noVisible')
    front.classList.add('backgroundDark')

    document.getElementById("options").style.zIndex = "-1";

};
function closeModal(e){
    welcome.classList.add('noVisible');
    encrypt.classList.add('noVisible');
    decode.classList.add('noVisible');
    front.classList.remove('backgroundDark');

    document.getElementById("options").style.zIndex = "1";
}
function back(){
    encrypt.classList.add('noVisible');
    decode.classList.add('noVisible');
    welcome.classList.remove('noVisible');
}


function runEncrypt(){
    encrypt.classList.remove('noVisible')
    welcome.classList.add('noVisible')
    decode.classList.add('noVisible')
    clean();
}

function runDecode(){
    decode.classList.remove('noVisible')
    welcome.classList.add('noVisible')
    encrypt.classList.add('noVisible')
    clean();
}