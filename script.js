   
function orcamento(){
    let servicoNome = "";
    let valor = 0;

    let nome = document.getElementById("nome").value;
    let serv = document.getElementById("servico").value;
    
    
    document.getElementById("saudar").innerHTML = "Olá "+ nome;

    
    if (serv == "formatar"){
        servicoNome = "Formatação de Computadores"; 
        valor = 120;
        
    }else if (serv == "limpar"){
        servicoNome = "Limpeza e Manutenção"; 
        valor = 80;
        
    }else if (serv == "instalar"){
        servicoNome = "Instalação de Programas"; 
        valor = 50;
        
    }else if (serv == "salvar"){
        servicoNome = "Backup de Dados"; 
        valor = 100;
        
    }else{
        valor = 0;
    }
    
    document.getElementById("serviconome").innerHTML = "Serviço escolhido: "+servicoNome;
    document.getElementById("valorServico").innerHTML = "Valor: "+valor;
}