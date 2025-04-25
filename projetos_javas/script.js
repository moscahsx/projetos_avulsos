// tudo que eu digitar aqui nas duas barras vai ficar assim.
//primeira função HA HA HA
function fazerAcao(nome, idade){
  var area=document.getElementById("area3");
  var text = prompt("Qual o seu sobrenome ?");

  area3.innerHTML = nome+" "+text+ " tem "+idade+" anos";
}

function adicionarIngrediente() {

  var ingrediente = document.getElementById("ingrediente").value;

  var listahtml = document.getElementById("lista").innerHTML;

  listahtml = listahtml + "<li>"+ingrediente+"</li>";

  document.getElementById("lista").innerHTML = listahtml
}

function somar(){
  var campo1 = parseInt(document.getElementById("campo1").value);
  var campo2 = parseInt(document.getElementById("campo2").value);
  
  var multiplicar = campo1 * campo2;

  alert(multiplicar);
}