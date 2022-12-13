const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Itipo = document.querySelector(".tipo");
const Isenha = document.querySelector(".senha");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        nome: Inome.value,
        email: Iemail.value,
        senha: Isenha.value,
        tipo: Itipo.value,
    };
});