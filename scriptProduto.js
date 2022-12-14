const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Imarca = document.querySelector(".marca");
const Icategoria = document.querySelector(".categoria");
const Iquantidade = document.querySelector(".quantidade");
const Iobservacao = document.querySelector(".observacao");

$(function() {
    /* DataSources */
    var quantidade = [
      { title: '2' },
      { title: '7' }
    ];
  
    var produtos = [
      { title: 'Nitrofurantoína 100mg' },
      { title: 'Paracetamol 200 mg/mL' }
    ];
  
    var categorias = [
      { title: 'Gotas' },
      { title: 'Comprimidos' }
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

    $("link")
      .click(function adcionar (){
  
        fetch ("http://localhost:8081/api/produtos",
          {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({ 
                  nome: Inome.value,
                  marca: Imarca.value,
                  categoria: Icategoria.value,
                  quantidade: Iquantidade.value,
                  descricao: Iobservacao.value,
              })
          })
          .then(function (res) { console.log(res) })
          .catch(function (res) { console.log(res) })
    });
    /* FIM Modais */
  
    /* Filtros */
    $('#filtroquantidade')
      .search({
      source: quantidade
    })
  
    $('#filtroProduto')
      .search({
      source: produtos
    })
  
    $('#filtroCategorias')
      .search({
      source: categorias
    })
    /* FIM Filtros */
  
    /* DropDowns */
    $('#dropdownCategorias')
      .dropdown({
      allowAdditions: true
    });
  
    $('#dropdownMarcas')
      .dropdown({
      allowAdditions: true
    });
  
    $('#dropdownMedida')
      .dropdown();
    /* FIM DropDowns */
  });
  