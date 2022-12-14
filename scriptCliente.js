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
  