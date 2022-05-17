$.ajax({
    url: "http://localhost:3001/users",
    error: function(request) {
        alert("Não foi possível listar os usuários");
    },
    success: function(response) {
        const tbody = document.getElementById("content");
        let tr = "";

        response.map(user => {
            tr += `
                <tr>
                   <td>${user.nome_completo}</td> 
                   <td>${user.cpf}</td> 
                   <td>${user.email}</td> 
                   <td>${user.telefone_cel}</td> 
                   <td>${user.created_at}</td> 
                   <td>${user.updated_at}</td>
                   <td><button onclick="edit(
                       ${user.id}, '${user.nome_completo}', '${user.cpf}', '${user.email}', '${user.telefone_cel}' 
                   )">Editar</button></td> 
                   <td><button onclick="remove(${user.id})">Excluir</button></td> 
                </tr>
            `;
        });

        tbody.innerHTML = tr;
    },
    async: false,
    type: "get",
    dataType: "json"
});

function closeModal(){
    document.querySelector(".modal-overlay").classList.remove("active");
}

function edit(id, nome_completo, cpf, email, telefone_cel){
    const idUser = document.getElementById("idUser");
    const nomeUser = document.getElementById("nome_completo");
    const cpfUser = document.getElementById("cpf");
    const emailUser = document.getElementById("email");
    const telefoneUser = document.getElementById("telefone_cel");

    idUser.value = id;
    nomeUser.value = nome_completo;
    cpfUser.value = cpf;
    emailUser.value = email;
    telefoneUser.value = telefone_cel;

    document.querySelector(".modal-overlay").classList.add("active");
}

function saved(event){
    event.preventDefault();

    const idUser = document.getElementById("idUser");
    const nomeUser = document.getElementById("nome_completo");
    const cpfUser = document.getElementById("cpf");
    const emailUser = document.getElementById("email");
    const telefoneUser = document.getElementById("telefone_cel");

    $.ajax({
        url: "http://localhost:3001/users",
        data: {
            idUser: idUser.value,
            nomeUser: nomeUser.value,
            cpfUser: cpfUser.value,
            emailUser: emailUser.value,
            telefoneUser: telefoneUser.value
        },
        error: function(request) {
            alert("Não foi possível salvar as informações!");
        },
        success: function(response) {
            alert("Usuário atualizado com sucesso!");
            closeModal();
            window.location.reload();
        },
        async: false,
        type: "put",
        dataType: "json"
    });
}

function remove(id){
    if(!confirm("Tem certeza que deseja remover esse usuário?")){
        return false;
    }

    $.ajax({
        url: "http://localhost:3001/users",
        data: {
            id: id
        },
        error: function(request) {
            alert("Não foi possível remover o usuário!");
        },
        success: function(response) {
            alert("Usuário removido com sucesso!");
            window.location.reload();
        },
        async: false,
        type: "delete",
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