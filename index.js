var randomno1=Math.random();
randomno1=Math.floor(randomno1*6)+1;
var ran="images/dice"+randomno1+".png";
var randomno2=Math.random();
randomno2=Math.floor(randomno2*6)+1;
var ran2="images/dice"+randomno2+".png";
function imag1(){
  if(randomno1===1){
  document.querySelector(".img1").setAttribute("src",ran);
}
  else if (randomno1===2) {
    document.querySelector(".img1").setAttribute("src",ran);
}
  else if (randomno1===3) {
    document.querySelector(".img1").setAttribute("src",ran);
}
  else if (randomno1===4) {
    document.querySelector(".img1").setAttribute("src",ran);
}
  else if (randomno1===5) {
    document.querySelector(".img1").setAttribute("src",ran);
}
  else{
  document.querySelector(".img1").setAttribute("src",ran);
}
}
function imag2(){
  if(randomno2===1){
  document.querySelector(".img2").setAttribute("src",ran2);
}
  else if (randomno2===2) {
    document.querySelector(".img2").setAttribute("src",ran2);
}
  else if (randomno2===3) {
    document.querySelector(".img2").setAttribute("src",ran2);
}
  else if (randomno2===4) {
    document.querySelector(".img2").setAttribute("src",ran2);
}
  else if (randomno2===5) {
    document.querySelector(".img2").setAttribute("src",ran2);
}
  else{
  document.querySelector(".img2").setAttribute("src",ran2);
}
}

imag1();
imag2();
if(randomno1>randomno2){
  document.querySelector("h1").innerHTML="<strong>Player 1 Wins</strong>";
}
else if (randomno1<randomno2) {
    document.querySelector("h1").innerHTML="<strong>Player 2 Wins</strong>";
  }
  else{
      document.querySelector("h1").innerHTML="<strong>Draw</strong>";
  }
