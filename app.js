const textInput = document.querySelector("main textarea.input");
const textOutput = document.querySelector("main textarea.output");
const btnCript = document.querySelector(".btn button#Criptografar");
const btnDecript = document.querySelector(".btn button#Descriptografar");
const btnCopy = document.querySelector(".apresentacao__direita button#copia");

const handleCriptText = e => {
    let textToCript = criptText(textInput.value);
    textOutput.value = textToCript;
}

const handleDecriptText = e => {
    let textToDecript = criptText(textInput.value, false);
    textOutput.value = textToDecript;
}

function copyText() {
    let textToCopy = textOutput.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            textOutput.value = ""
        })
        .catch(() => {
            alert ("Não foi possivel copiar o texto");
        })
}

const criptText= (text, cript = true) => {
    let result = text;
    if(cript){
        result = result.replace("e","enter")
            .replace("i","imes")
            .replace("a","ai")
            .replace("o","ober")
            .replace("u","ufat")
    }else{
        result = result.replace("enter","e")
        .replace("imes","i")
        .replace("ai","a")
        .replace("ober","o")
        .replace("ufat","u")
    }
    return result;
}

btnCript.addEventListener("click", handleCriptText);
btnDecript.addEventListener("click", handleDecriptText);
btnCopy.addEventListener("click", copyText)