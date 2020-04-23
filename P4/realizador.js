function main(){
  video1= document.getElementById("video1");
  video1.src = "silencio.mov";
  video1.height = 90;
  video1.width=50;
  reproducir1 = document.getElementById('reproducir1');
  reproducir1.onclick = () => {
    principal.src = video1.src;
    principal.currentTime = video1.currentTime;
    video1.style.border = '2px solid white';
    video2.style.border = '0px';
    video3.style.border = '0px';
  }

  video2= document.getElementById("video2");
  video2.src = "reversito.mp4";
  video2.height = 90;
  video2.width=50;
  reproducir2 = document.getElementById('reproducir2');
  reproducir2.onclick = () => {
    principal.src = video2.src;
    principal.currentTime = video2.currentTime;
    video1.style.border = '0px';
    video2.style.border = '2px solid white';
    video3.style.border = '0px';
  }

  video3= document.getElementById("video3");
  video3.src = "humillada-maxima.mov";
  video3.height = 90;
  video3.width=50;
  reproducir3 = document.getElementById('reproducir3');
  reproducir3.onclick = () => {
    principal.src = video2.src;
    principal.currentTime = video3.currentTime;
    video1.style.border = '0px';
    video2.style.border = '0px';
    video3.style.border = '2px solid white';
  }

  principal= document.getElementById("principal");
  principal.src = "test.mp4";
  principal.height = 250;
  principal.width=400;

  bucle = document.getElementById('bucle');

  contador = document.getElementById('contador');

  var finish = 0;

  video1.onmouseover = () => {
   video1.muted= false;
 }
 video1.onmouseout = () => {
   video1.muted= true;
 }

 video2.onmouseover = () => {
   video2.muted= false;
 }
 video2.onmouseout = () => {
   video2.muted= true;
 }

 video3.onmouseover = () => {
   video3.muted= false;
 }
 video3.onmouseout = () => {
   video3.muted= true;
 }

 bucle.onclick = () => {
    if (bucle.style.border == '2px solid white') {
         bucle.style.border = '0px';
         init = 0;
         finish = 0;
         // Si se quita el bucle el video vuelve a sincro con los pequeños
         if (video1.style.border == '2px solid white'){
           principal.currentTime = video1.currentTime;
         }
         if (video2.style.border == '2px solid white'){
           principal.currentTime = video2.currentTime;
         }
         if (video3.style.border == '2px solid white'){
           principal.currentTime = video3.currentTime;
         }
     } else {
         init = new Number(document.getElementById("empezar").value);
         finish = document.getElementById("end").value;
         bucle.style.border = '2px solid white';
         principal.currentTime = init;
     }
  }



  principal.addEventListener("timeupdate",function(ev){
    var time  = (principal.currentTime);
    var horas = Math.floor( time / 3600 );
    var minutos = Math.floor( (time % 3600) / 60 );
    var segundos = Math.floor(time % 60);

    //Anteponiendo un 0 a los minutos si son menos de 10
    horas = (horas < 10) ? '0' + horas : horas ;
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var resultado = horas + ":" + minutos + ":" + segundos;
    contador.innerHTML = resultado;

    //Hago lo del bucle
    if (finish != 0){
        if (principal.currentTime > finish){
            principal.currentTime = init;
        }
    }
},true);
}
