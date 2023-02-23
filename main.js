const form = document.getElementById("form-enviar");

function validacao(a, b){
    return a < b;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const variavelFormA = document.getElementById("Variavel-A");
    const variavelFormB = document.getElementById("Variavel-B");
    const mensagemSucesso = `Os valores (A = ${variavelFormA.value} / B = ${variavelFormB.value}) foram enviados com sucesso`;
    
    let FormValido = validacao(variavelFormA.valueAsNumber, variavelFormB.valueAsNumber)
    if (FormValido == true){
        const containermensagemSucesso = document.querySelector(".msg-sucesso");
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = "block";
        document.querySelector(".erro-m").style.display = "none";
        variavelFormA.classList.remove("erro")
        variavelFormB.classList.remove("erro")
        //variavelFormA.style.border = "";
        //variavelFormB.style.border = "";
        variavelFormA.value = "";
        variavelFormB.value = ""; 
    } else {
        document.querySelector(".erro-m").style.display = "block";
        variavelFormA.classList.add("erro")
        variavelFormB.classList.add("erro")
        //variavelFormA.style.border = "5px solid rgb(175, 96, 5)";
        //variavelFormB.style.border = "5px solid rgb(175, 96, 5)";
        const containermensagemSucesso = document.querySelector(".msg-sucesso");
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = "none";
    }
})