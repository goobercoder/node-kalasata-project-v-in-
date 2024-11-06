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
let Lives = 5;

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
  lautanY = korkeus * 0.93;
  laavaY = korkeus * 0.9;
  createCanvas(leveys, korkeus); 
  LuoAnkkoja();
 
  }
  
  function draw() {
  leveys = windowWidth;
  korkeus = windowWidth/2;
  image(taustakuva, 0, 0, leveys, korkeus);
  luoJaliikutaLauttaa();
  LuoLaava();
  Elävienlista.forEach(function(ankkaDoge, monesko){
    ankkaDoge.liikuta();
    if(ankkaDoge.X > leveys){
      Elävienlista.splice(monesko, 1);
      schoiipoiteet += 1
      console.log("pisteet: " + schoiipoiteet)
    }
    if(ankkaDoge.Y > korkeus){
      Elävienlista.splice(monesko, 1)
      Lives -= 1;
      console.log("elämiä jäljellä: " + Lives);
    }

  });
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
  setTimeout(LuoAnkkoja, 1000)
  console.log(Elävienlista)

}

  class Doge {
    constructor() {
      this.X = 0;
      this.Y = korkeus/2;
      this.xSpeed = random(1,5);
      this.ySpeed = -5;
      this.size = lautanleveys / random(1, 5);
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