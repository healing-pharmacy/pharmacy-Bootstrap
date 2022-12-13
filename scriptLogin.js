const formulario = document.querySelector("form");
const Iuser = document.querySelector(".user");
const Isenhaa = document.querySelector(".senhaa");

function limpar () {
    Iuser.value = "";
    Isenhaa.value = "";
};

function logar (){
        
    fetch ("http://localhost:8080/logar",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ 
                nome: Iuser.value,
                email: Isenhaa.value,
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

