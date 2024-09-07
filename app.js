function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);
    // Se o campo pesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Barra de pesquisa vazia<p/>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase ()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase() 
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes (campoPesquisa)) {

        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Comprar no site oficial da marca</a> </div>
      `;
      }
    }
    if (!resultados) {
      resultados ="<p>Nada foi encontrado</p>"

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  
  }
