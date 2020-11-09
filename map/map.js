var item = new Array();
function Compra(id,produto,quantidade,valorunitario) {
    this.id = id;
    this.produto = produto;
    this.quantidade = quantidade;
    this.valorunitario = valorunitario;
}


this.calcular = function() {
    return parseFloat(this.quantidade) * parseFloat(this.valorunitario);
}
function adicionar() {
    var id = document.getElementById('id');
    var produto = document.getElementById('produto');
    var quantidade = document.getElementById('quantidade');
    var valorunitario = document.getElementById('valorunitario');
    var mostrarProdutosTabela = new Compra(id.value, produto.value, quantidade.value, valorunitario.value);
    item.push(mostrarProdutosTabela);
    console.log(item);
    mostrar();
    limparText();
    var arraylista = [];
var arraymultiplicar = [];
for (var i = 0; i < arraylista .length; i++){
    arraymultiplicar.push(arraylista[i]*5);
}
console.log(arraylista);
console.log(arraymultiplicar);
var arraymultiplicar = arraylista.map(function (numero) {
	return numero * 5;
});
}
function mostrar() {
    var lista = document.getElementById('lista');
    var text = '';
    var total = 0;
    text = '<ul>';
    for (var i = 0; i<item.length; i++)
    {
        text += "<li>";
        text += "Id: " + item[i].id + " - ";
        text += "Produto: " + item[i].produto + " - ";
        text += "Quantidade: " + item[i].quantidade + " - ";
        text += "ValorUnitario: " + item[i].valorunitario + " - ";
        text += "Valor Total: R$ " + item[i].calcular();
        text += "</li>";
        total += item[i].calcular();
    }
    text+="</ul>";
    text+="Total: R$" + total;
    lista.innerHTML = text;
}


    function mostrarTabela()
    {
        var lista = document.getElementById("lista");
        var total = 0;
        var text = "" ;
        var celula="";
        text = <table style="border: 1px solid black"><tr>
        <th style = "border: 1px solid black; padding: 15px;">Id</th>
        <th style = "border: 1px solid black; padding: 15px;">Produto</th>
        <th style = "border: 1px solid black; padding: 15px;">Quantidade</th>
        <th style = "border: 1px solid black; padding: 15px;">ValorUnitario</th>
        <th style = "border: 1px solid black; padding: 15px;">Valor Total</th>
       </tr>;

       for (var i = 0; i<item.length; i++)
{
    celula = "<td style =\"border: 1px solid black; padding: 15px\">" + item[i].id + "</td>";
    celula = "<td style =\"border: 1px solid black; padding: 15px\">" + item[i].produto + "</td>";
    celula = "<td style =\"border: 1px solid black; padding: 15px\">" + item[i].quantidade + "</td>";
    celula = "<td style =\"border: 1px solid black; padding: 15px\">" + item[i].valorunitario + "</td>";
    var totInd= parseFloat(item[i].calcular());
    celula += "<td style = \"border: 1px solid black; padding: 15px;/"> R$ + totInd + "</td>";
    total += totInd;
    text += "<tr>" + celula + "</tr>";
    celula = "";
    text += "<tr><td colspan=\"5\" style=\"text-align:right\">Total: R$ " + total + "&nbsp;&nbsp;</td>";
    text += "</table>";
    lista.innerHTML = text;

}

function apagar() {
    item.pop();
    mostrar();
    limparTexto();
}
function limpar() {
    item = [];
    mostrar();
    limparTexto();
}
function limparTexto() {
    var id = document.getElementById('id');
    var produto = document.getElementById('produto');
    var quantidade = document.getElementById('quantidade');
    var valorunitario = document.getElementById('valorunitario');
    id.value = '';
    produto.value = '';
    quantidade.value = '';
    valorunitario.value = '';
}