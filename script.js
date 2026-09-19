function orcamento() {
  let servicoNome = "";
  let valor = 0;
  // Obtém o valor do campo de entrada de nome
  let nome = document.getElementById("nome").value;
  let serv = document.getElementById("servico").value;

  document.getElementById("saudar").innerHTML = "Olá " + nome + " !";
  
  // Verifica o serviço selecionado e define o nome do serviço e o valor correspondente
  if (serv == "formatar") {
    servicoNome = "Formatação de Computadores";
    valor = 120;
  } else if (serv == "limpar") {
    servicoNome = "Limpeza e Manutenção";
    valor = 80;
  } else if (serv == "instalar") {
    servicoNome = "Instalação de Programas";
    valor = 50;
  } else if (serv == "salvar") {
    servicoNome = "Backup de Dados";
    valor = 100;
  } else {
    valor = 0;
  }
  // Atualiza o conteúdo dos elementos HTML com o nome do serviço escolhido e o valor correspondente
  document.getElementById("serviconome").innerHTML ="Serviço escolhido: " + servicoNome;
  document.getElementById("valorServico").innerHTML = "Valor : R$" + valor;
}