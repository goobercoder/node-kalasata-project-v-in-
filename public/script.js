let taustakuva;
let ankkakuva;
let leveys;
let korkeus;
let lautanLeveys;
let lautanKorkeus;
let lautanY;
let omgGravitaatio = 0.05;
let laavaY;
let lautanX;
let Elävienlista = [];
let schoiipoiteet = 0;
let ankkaDoge;
let Lives = 8;
let time = 3000;

// Load the image and create a p5.Image object.
function preload() {
  taustakuva = loadImage('/images/lampi.jpg');
  ankkakuva = loadImage('/images/ankka.png');
}



function setup() {
  leveys = windowWidth;
  korkeus = windowWidth/2;
  lautanleveys = leveys/5;
  lautankorkeus = korkeus/17;
  lautanY = korkeus * 0.90;
  laavaY = korkeus * 0.9;
  createCanvas(leveys, korkeus); 
  
 
  }
  
  function draw() {
  leveys = windowWidth;
  korkeus = windowWidth/2;
  image(taustakuva, 0, 0, leveys, korkeus);
  fill("#00FBFF");
  textSize(30);
  text('✔: ' + schoiipoiteet, leveys/1.09, korkeus/1.5);
  fill("#FF3333");
  textSize(30);
  text('❤: ' + Lives, leveys/1.095, korkeus/1.6);
  if (Lives == 0){
    gameover();
  }
  luoJaliikutaLauttaa();
  LuoLaava();
  Elävienlista.forEach(function(ankkaDoge, monesko){
    ankkaDoge.liikuta();
    if(ankkaDoge.X > leveys){
      Elävienlista.splice(monesko, 1);
      schoiipoiteet += 1;
      console.log("pisteet: " + schoiipoiteet);
      console.log(time);
      if (time >= 1900){
        time -= 100;
      }
        
    }
    if(ankkaDoge.Y > korkeus){
      Elävienlista.splice(monesko, 1)
      Lives -= 1;
      console.log("elämiä jäljellä: " + Lives);
    }

  });

  }
  function play(){
    LuoAnkkoja();
  }

  function gameover(){
    fill("red");
    textSize(150);
    text("Game Over", leveys/4.8, korkeus/1.6);
    noLoop();
  }
  
  function windowResized(){
  leveys = windowWidth;
  korkeus = windowWidth/2;
  resizeCanvas(leveys, korkeus);
  }
  
  function LuoLaava(){
    fill("#cf1020 ")
    rect(-10, laavaY + 50, leveys, lautankorkeus - 10);
  }

  function luoJaliikutaLauttaa(){
    fill("Chocolate")
    rect(mouseX, lautanY, lautanleveys, lautankorkeus, 360);
  }

function LuoAnkkoja(){
  ankkaDoge = new Doge();
  Elävienlista.unshift(ankkaDoge);
  setTimeout(LuoAnkkoja, time)
  

}

  class Doge {
    constructor() {
      this.X = 0;
      this.Y = korkeus/2;
      this.xSpeed = random(1,5);
      this.ySpeed = -5;
      this.size = lautanleveys / 1.5;
    }
    
    liikuta(){
      lautanKorkeus = korkeus/10;
      lautanLeveys = leveys/10;
      lautanY = korkeus * 0.9;
      lautanX = mouseX;
      this.X = this.X + this.xSpeed;
      this.ySpeed = this.ySpeed + omgGravitaatio;



      if( this.X > lautanX && this.X < lautanX + lautanLeveys )
      {
        //otettu pois this.Y jälkeen this.korkeus niin alkoi toimimaan
        if(this.Y  + lautanKorkeus*2 > lautanY && this.Y < lautanY + lautanKorkeus*2)
          {
            this.ySpeed = -abs(this.ySpeed);
          }
      }
      this.Y = this.Y + this.ySpeed;
      image(ankkakuva, this.X, this.Y, this.size, this.size)
    }

  }