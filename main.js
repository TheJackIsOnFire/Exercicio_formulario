const form = document.getElementById("form-enviar")
let formValido = false;

function validacao(a, b){
    if (a < b){
        formValido = true;
    } else if (b == a){
        formValido = false;
    } else {
        formValido = false;
    }
    return console.log(formValido)
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const variavelA = document.getElementById("A");
    const variavelB = document.getElementById("B");
    const mensagemSucesso = `Os valores (A = ${variavelA.value} / B = ${variavelB.value}) foram enviados com sucesso`;

    validacao(variavelA.valueAsNumber, variavelB.valueAsNumber);
    if (formValido == true){
        const containermensagemSucesso = document.querySelector(".msg-sucesso");
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = "block";
        document.querySelector(".erro-m").style.display = "none";
        variavelA.classList.remove("erro")
        variavelB.classList.remove("erro")
        //variavelA.style.border = "";
        //variavelB.style.border = "";
        variavelA.value = "";
        variavelB.value = ""; 
    } else {
        document.querySelector(".erro-m").style.display = "block";
        variavelA.classList.add("erro")
        variavelB.classList.add("erro")
        //variavelA.style.border = "5px solid rgb(175, 96, 5)";
        //variavelB.style.border = "5px solid rgb(175, 96, 5)";
        const containermensagemSucesso = document.querySelector(".msg-sucesso");
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = "none";
    }
})