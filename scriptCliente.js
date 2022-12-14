const formulario = document.querySelector("form");
const Icpf = document.querySelector(".cpf");
const Inome = document.querySelector(".nome");
const IdataNascimento = document.querySelector(".dataNascimento");
const Iemail = document.querySelector(".email");
const Iendereco = document.querySelector(".endereco");
const Itelefone = document.querySelector(".telefone");

$(function() {
    /* DataSources */
    var CPF = [
      { title: '062.062.019-61' },
      { title: '878.867.242-59' }
    ];
  
    var Nome = [
      { title: 'Lucas Rogerio Rocci' },
      { title: 'João Carlos Fernandes' }
    ];
  
    var telefone = [
      { title: '(62) 3093-1878' },
      { title: '(62) 3261-9341' }
    ];
    /* FIM DataSources */
  
    /* Modais */
    $(".btnExcluir")
      .click(function(){
      $("#modalConfirmacaoExclusao")
        .modal('show');
    });
  
    $(".btnCadastro")
      .click(function(){
      $("#modalCadastro")
        .modal('show');
    });

    $(".btnAdcionar")
      .click(function adcionar (){
  
        fetch ("http://localhost:8081/api/clientes",
          {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({ 
                  nome: Inome.value,
                  cpf: Icpf.value,
                  data_nascimento: IdataNascimento.value,
                  email: Iemail.value,
                  endereco: Iendereco.value,
                  telefone: Itelefone.value,
              })
          })
          .then(function (res) { console.log(res) })
          .catch(function (res) { console.log(res) })
    });
    /* FIM Modais */
  
    /* Filtros */
    $('#filtroCPF')
      .search({
      source: CPF
    })
  
    $('#filtroNome')
      .search({
      source: Nome
    })
  
    $('#filtrotelefone')
      .search({
      source: telefone
    })
    /* FIM Filtros */
  
    /* DropDowns */
    $('#dropdowntelefone')
      .dropdown({
      allowAdditions: true
    });
  
    $('#dropdownIdade')
      .dropdown({
      allowAdditions: true
    });
  
    $('#dropdownEmail')
      .dropdown();
    /* FIM DropDowns */
  });
  