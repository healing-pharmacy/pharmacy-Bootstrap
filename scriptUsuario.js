const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Itipo = document.querySelector(".tipo");
const Isenha = document.querySelector(".senha");

function cadastrar (){
        
    fetch ("http://localhost:8081/api/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ 
                username: Inome.value,
                email: Iemail.value,
                password: Isenha.value,
                /*tipo: Itipo.value,*/
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

function limpar () {
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itipo.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    //limpar()
});