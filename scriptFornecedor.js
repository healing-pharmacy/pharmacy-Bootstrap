const formulario = document.querySelector("form");
const Icnpj = document.querySelector(".cnpj");
const InomeFantasia = document.querySelector(".nomeFantasia");
const IrazaoSocial = document.querySelector(".razaoSocial");
const Iemail = document.querySelector(".email");
const Iendereco = document.querySelector(".endereco");
const Itelefone = document.querySelector(".telefone");
const Iresponsavel  = document.querySelector(".responsavel");
const Iobservacao = document.querySelector(".observacao");

$(function() {
    /* DataSources */
    var CNPJ = [
      { title: '84427367000186' },
      { title: '35497534000150' }
    ];
  
    var Nome = [
      { title: 'Cauã Saldanha Portela Facre' },
      { title: 'Mauro Leandro Carmanin Castro' }
    ];
  
    var Produto = [
      { title: 'Paracetamol' },
      { title: 'Dipirona' }
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
  
        fetch ("http://localhost:8081/api/fornecedor",
          {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({ 
                  cnpj: Icnpj.value,
                  razao_social: IrazaoSocial.value,
                  nome_fantasia: InomeFantasia.value,
                  telefone: Itelefone.value,
                  endereco: Iendereco.value,
                  email: Iemail.value,
                  responsavel: Iresponsavel.value,
                  observacao: Iobservacao.value,
              })
          })
          .then(function (res) { console.log(res) })
          .catch(function (res) { console.log(res) })
    });
    /* FIM Modais */
  
    /* Filtros */
    $('#filtroCNPJ')
      .search({
      source: CNPJ
    })
  
    $('#filtroNome')
      .search({
      source: Nome
    })
  
    $('#filtroProduto')
      .search({
      source: Produto
    })
    /* FIM Filtros */
  
    /* DropDowns */
    $('#dropdownProduto')
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
  