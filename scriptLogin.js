const formulario = document.querySelector("form");
const Iuser = document.querySelector(".user");
const Isenhaa = document.querySelector(".senhaa");

function limpar () {
    Iuser.value = "";
    Isenhaa.value = "";
};

function logar (){
        
    fetch ("http://localhost:8081/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET",
            body: JSON.stringify({ 
                username: Iuser.value,
                password: Isenhaa.value,
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    //limpar()
});