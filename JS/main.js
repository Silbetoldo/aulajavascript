
/*
//Criando array
var lista = ["maça", "pera", "laranja"];
//imprimindo o array na posição escolhida no console do navegador
console.log(lista[1]);
//adicionando um item a lista
lista.push("Uva")
console.log(lista);
//tirando um item da lista
lista.pop()
alert(lista);
*/

/*
//verificando tamanho do array
console.log(lista.length);
//reverte a ordem do array
console.log(lista.reverse());
//imprime em formato de string
console.log(lista.toString());
//imprime somente uma letra
console.log(lista.toString()[0]);
*/


/*
//Tranforma em string e você pode adicionar ementos
console.log(lista.join("-"))
*/


/*
//criando um dicionario
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome, fruta.cor)
*/ 


/*
//lista de dicionarios
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
console.log(frutas[0].nome, frutas[1].cor);
var nome = "Silvana Betoldo";
var idade= 35;
var idade2 = 10;
var frase = "Brasil é o melhor pais do mundo"
*/


/*
//alerta com pop-up
alert(nome + " tem " + (idade + idade2)+ " anos ");
*/


/*
//toUpperCase deixa as letras maiúsculas
console.log(frase.toUpperCase())
//toLowerCase deixa as letras minúsculas
console.log(frase.toLowerCase())
console.log(frase.replace("Brasil", "Israel"));
//replace troca a string
alert (frase.replace("Brasil", "Israel"));

*/

/*
//Exibe uma caixa de texto para o usuario digitar
var idade = prompt("Qual sua idade")
if (idade > 18){
    alert("Maior de idade");
 } else{
        alert("Menor de idade");
    }
 */

/*
//estrutura de repetição
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count)
    count++;
}
*/
/*
//estrutura de repetição
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/
/*
//Trabalhando com data
var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
//Trabalhando com funções
function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));

/*
function setReplace(frase, nome, novo_nome){
 return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai japão", "japão","Brasil"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;

}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*
//função para o botão
function clicou(){
    alert("Obrigado por clicar")
}
*/ 


//função para o botão chamar o h3
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
 //   console.log( document.getElementById("agradecimento"));
}


//função para abrir uma nova janela
function redirecionar(){
    window.open("https://pt-br.facebook.com/login.php");
   // window.location.href = ("https://pt-br.facebook.com/login.php");
}

//troca texto ao passar o mouse 
function trocar(elemento){
  //  document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  //  alert("Trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse";

}
//função para voltar o texto do botão
function voltar(elemento){
  //  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

//função carrega junto com a pagina
function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}