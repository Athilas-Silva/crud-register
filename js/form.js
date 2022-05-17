//Validação dos campos
function registrar(event){
    event.preventDefault();

    const nome_completo = document.getElementById("nome_completo");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email");
    const telefone_cel = document.getElementById("telefone_cel");

    if(nome_completo.value == ""){
        alert("Por favor, informe seu nome.");

        nome_completo.focus();
        return;
    }

    if(cpf.value == ""){
        alert("Por favor, informe seu CPF");

        cpf.focus();
        return;
    }

    if(email.value == ""){
        alert("Por favor, informe seu E-mail");

        email.focus();
        return;
    }

    if(telefone_cel.value == ""){
        alert("Por favor, informe seu telefone");

        telefone_cel.focus();
        return;
    }

    $.ajax({
        url: "http://localhost:3001/users",
        data: {
            nome_completo: nome_completo.value,
            cpf: cpf.value,
            email: email.value,
            telefone_cel: telefone_cel.value
        },
        error: function(request) {
            alert("Não foi possível cadastrar o usuário!");
        },
        success: function(response) {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "list.html";
        },
        async: false,
        type: "post",
        dataType: "json"
    });
}

//Máscara do CPF
function maskCpf(){
    const cpf = document.getElementById("cpf");

    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value = cpf.value + ".";
    }
    else if(cpf.value.length == 11){
        cpf.value += "-";
    }
}