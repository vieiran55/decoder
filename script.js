function cript(){
  if (document.getElementById("input").value.toLowerCase() !== ""){
    var textoInput = document.getElementById("input").value.toLowerCase();
    var novaString = textoInput.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  
    document.getElementById("criptografado").style.display = "none";
    document.getElementById("criptografado_sucess").style.display = "flex";
  
    var cripto = document.getElementById("resultado");
    cripto.innerHTML = novaString;
  }
}

function descript(){
  if (document.getElementById("input").value.toLowerCase() !== ""){
    var textoInput = document.getElementById("input").value.toLowerCase();
    var novaString = textoInput.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById("criptografado").style.display = "none";
  
  
    document.getElementById("criptografado_sucess").style.display = "flex";
  
    var cripto = document.getElementById("resultado");
    cripto.innerHTML = novaString;
  }
}

async function copiar(){
  let text = document.getElementById('resultado').innerHTML;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}