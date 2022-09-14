function inserir(){
    nome = $("#nome").val();
    bilhete = $("#bilhete").val();
    telefone = $("#telefone").val();
    bairro = $("#bairro").val();

    if(nome =="" || bilhete ==""){
        alert("Por favor preencha correctamente os campos!")
    }else{

    dadoPraTabela = "";
    dadoPraTabela += "<tr><td>"+nome+"</td><td>"+bairro+"</td><td>"+bilhete+"</td><td>"+telefone+"</td></tr>";
    document.getElementById("cadastro").innerHTML += dadoPraTabela;
    $(".campos").val("")
}
}