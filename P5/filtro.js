function main(){
  var foto = document.getElementById('foto')
  var canvas = document.getElementById('display');
  redlizador = document.getElementById('redlizador')
  redvalue = document.getElementById('redvalue')
  bluelizador = document.getElementById('bluelizador')
  bluevalue = document.getElementById('bluevalue')
  greenlizador = document.getElementById('greenlizador')
  greenvalue = document.getElementById('greenvalue')
  gris = document.getElementById('gris')

  canvas.width = foto.width;
  canvas.height = foto.height;
  var ctx = canvas.getContext("2d");

  ctx.drawImage(foto, 0,0);

  function RGB() {
    ctx.drawImage(foto, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    umbral_R = redlizador.value
    umbral_B = bluelizador.value
    umbral_G = greenlizador.value

    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbral_R)
        data[i] = umbral_R;
      if (data[i+1] > umbral_G)
        data[i+1] = umbral_G;
      if (data[i+2] > umbral_B)
        data[i+2] = umbral_B;
    }
    ctx.putImageData(imgData, 0, 0);
  }


  gris.onclick=()=>{
      var imgDataGris = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //-- Obtener el array con todos los píxeles
      var data = imgDataGris.data;
      //-- Filtrar la imagen según el nuevo umbral
      for (var i = 0; i < data.length; i+=4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        var v = 0.2126*r + 0.7152*g + 0.0722*b;
        data[i] = data[i+1] = data[i+2] = v
        }
        ctx.putImageData(imgDataGris, 0, 0);
}

  redlizador.oninput = () => {
    redvalue.innerHTML = redlizador.value
    RGB();
  }
  bluelizador.oninput = () => {
    bluevalue.innerHTML = bluelizador.value
    RGB();
  }
  greenlizador.oninput = () => {
    greenvalue.innerHTML = greenlizador.value
    RGB();
  }
}
