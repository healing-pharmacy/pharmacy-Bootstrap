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
  