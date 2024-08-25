function encriptar(){
    var texto= document.getElementById("inputTexto").value.toLowerCase();

    var textoEncript = texto.replace(/e/igm, "enter");
    var textoEncript = textoEncript.replace(/o/igm, "ober");
    var textoEncript = textoEncript.replace(/i/igm, "imes");
    var textoEncript = textoEncript.replace(/e/igm, "enter");
    var textoEncript = textoEncript.replace(/a/igm, "ai");
    var textoEncript = textoEncript.replace(/u/igm, "ufat");

    document.getElementById("imgMuñeco").style.display = "none";
    document.getElementById("texto__error").style.display = "none";
    document.getElementById("texto__error2").style.display = "none";
    document.getElementById("texto__cifrado").style.display = "show";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
+

function desencriptar(){
    let texto= document.getElementById("inputTexto").value.toLowerCase();

    var textoEncript = texto.replace(/enter/igm, "e");
    var textoEncript = textoEncript.replace(/ober/igm, "o");
    var textoEncript = textoEncript.replace(/imes/igm, "i");
    var textoEncript = textoEncript.replace(/ai/igm, "a");
    var textoEncript = textoEncript.replace(/ufat/igm, "u");

    document.getElementById("imgMuñeco").style.display = "none";
    document.getElementById("texto__error").style.display = "none";
    document.getElementById("texto__cifrado").style.display = textoEncript;
  
   document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

/*function copiar(){
    var contenido = document.querySelector("#texto__cifrado");
    contenido.select();
    document.execCommand("copy");
    a1lert("se copio!"),  
}*/47