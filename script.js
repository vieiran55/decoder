function cript(){
  var textoInput = document.getElementById("input").value.toLowerCase();
  var novaString = textoInput.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  var cripto = document.getElementById("criptografado");
  cripto.innerHTML = novaString;

}

function descript(){
  var textoInput = document.getElementById("input2").value.toLowerCase();
  var novaString = textoInput.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

  var cripto = document.getElementById("decriptografado");
  cripto.innerHTML = novaString;

}