import { code } from "./codemoji.js";

// A helpful flag to not duplicate the actions
let wasUsed = false;

// This event cleans and reinitialize the script. 
document.querySelectorAll('#btnClean').forEach(item => {
    item.addEventListener('click',clean)
})

// --------- Start Action Encrypt --------- //

// The variables & events
const txtToEncrypt = document.querySelector('#txtToEncrypt');
const btnEncrypt = document.getElementById('btnEncrypt');
const copyCodeBtn = document.getElementById('copyCode');
const encryptTxt = document.getElementById('encryptTxt');

btnEncrypt.addEventListener('click', encrypte);
copyCodeBtn.addEventListener('click', copyCode);

// The array that will contain the final encrypted text is initialized.
let encrypMsg = [];

// Encrypte function receives the text entered by the user, calls the function that encrypts the text, and then displays the encrypted message in the HTML
function encrypte(e){
    if ( !wasUsed ){
        let msg = txtToEncrypt.value;
        const msgArray = msg.split('');
        
        for ( let w of msgArray){
            if ( codeSearch ( w ) != undefined ){
                encrypMsg.push ( codeSearch (w) );
            } else {
                encrypMsg.push( "■" );
            }
        }

        encryptTxt.innerHTML = encrypMsg.join(' ');
        wasUsed = true;
    }
}
// Function that looks the letters in the Code and returns the emoji representing each letter.
function codeSearch(wMsg){
    let isInCode = undefined;
    code.forEach((wCode, i) => {
        if (wCode[0] === wMsg) {
            isInCode = wCode[1]
        } 
    })
    return isInCode;
}

// --------- Start Action Decode --------- //

// The variables & events
const decodeTxt = document.getElementById('decodeTxt');
const txtToDecode = document.querySelector('#txtToDecode');
const btnDecode = document.getElementById('btnDecode');
const copyDecodeBtn = document.getElementById('copyDecode');

btnDecode.addEventListener('click', decody);
copyDecodeBtn.addEventListener('click', copyDecode);

// The array that will contain the final decode text is initialized.
let decodeMsg = [];

// Start decode function
function decody(e){
    
    // Check flag and start magic
    if (!wasUsed){
        // It is code that send user
        let codeTxt = txtToDecode.value;

        const spaceView = ' '
        // The code is now an array
        const codeArray = [...(codeTxt.split(' '))];

        // We iterate through the array...
        for ( let i = 0; i < codeArray.length; i++ ) {
            // and now iterate each element to compare with Code Master
            for ( let c = 0; c < code.length; c++ ) {
                // If there is a match...
                if (codeArray[i] == code[c][1]){
                    // Check if the element is not a space
                    if (codeArray[i] !== code[64][1]){
                        // If not a space, add element to final array
                        decodeMsg = [...decodeMsg, code[c][0]]
                        console.log(decodeMsg)
                    } else {
                        // if is a space add to final array
                        decodeMsg = [...decodeMsg, spaceView]
                        console.log(decodeMsg)
                    }
                }
                
            }
            
        }
        // Join final array and insert in HTML
        decodeTxt.innerHTML = decodeMsg.join('');
        wasUsed = true;
    }
}

// Clean fields
export function clean () {
    decodeMsg = [];
    encrypMsg = [];
    txtToEncrypt.value = '';
    encryptTxt.innerHTML = 'Your text here';    
    txtToDecode.value = '';
    decodeTxt.innerHTML = 'Your text here';
    wasUsed = false;    
}

// Copy encrypt code
function copyCode() {
    // Get the text field
    let copyText = document.getElementById("encryptTxt");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

  }
  // Copy decode code
  function copyDecode() {
    // Get the text field
    let copyText = document.getElementById("decodeTxt");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

  }
