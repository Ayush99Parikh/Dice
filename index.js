var randomno1=Math.random();
randomno1=Math.floor(randomno1*6)+1;
var ran="images/dice"+randomno1+".png";
var randomno2=Math.random();
randomno2=Math.floor(randomno2*6)+1;
var ran2="images/dice"+randomno2+".png";
document.querySelector(".img1").setAttribute("src",ran);
document.querySelector(".img2").setAttribute("src",ran2);

if(randomno1>randomno2){
  document.querySelector("h1").innerHTML="<strong>Player 1 Wins</strong>";
}
else if (randomno1<randomno2) {
    document.querySelector("h1").innerHTML="<strong>Player 2 Wins</strong>";
  }
  else{
      document.querySelector("h1").innerHTML="<strong>Draw</strong>";
  }
