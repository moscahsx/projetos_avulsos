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
var x = 0 ;

  document.write("Iniciando o Loop...</br>");
 
while(x < 10){

  document.write("Numero: "+x+"</br>");

  x++;

}
document.write("Finalizando o Loop...</br>");

for( x = 0; x<10 ; x++ ){
  document.write("Número "+x+"</br>");
}
y = prompt("Qual é o Número ?");

switch(y){
  case "0" :
    alert("Y é zero ");
      break;
    case "1" :
      alert("Y é Um");
        break;
        case "2":
          alert("Y é dois");
          break;
          default:
            alert("Ninguém foi satisfeiro!");
            break;
}

function verificar(){
  var n1 = document.getElementById("n1").innerHTML;
  var n2 = document.getElementById("n2").value;

  if(n1 == n2){
    alert("você acertou o número")
  } else {
    alert("você errou o número")
  }

  reset();
}
function reset() {
  document.getElementById ("n2").value = "";

  var r = Math.floor(Math.random()*100);
  document.getElementById("n1").innerHTML = r;
  
}