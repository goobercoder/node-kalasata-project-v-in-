let taustakuva;
let ankkakuva;
let leveys;
let korkeus;
let ankka1;
let ankka2;
let lautanleveys;
let lautankorkeus;
let lauty;
let omgGravitaatio = 0.05;
let laavaY;

// Load the image and create a p5.Image object.
function preload() {
  taustakuva = loadImage('/images/lampi.jpg');
  ankkakuva = loadImage('/images/ankka.png');
}



function setup() {
  leveys = windowWidth;
  korkeus = windowWidth/2;
    createCanvas(leveys, korkeus);
    lautanleveys = leveys/5;
    lautankorkeus = korkeus/17;
    lauty = korkeus * 0.93;
    laavaY = korkeus * 0.9;
    ankka1 = new Ankka();
    ankka2 = new Ankka();
  }
  
  function draw() {
  leveys = windowWidth;
  korkeus = windowWidth/2;
  image(taustakuva, 0, 0, leveys, korkeus);
  ankka1.liikuta();
  ankka2.liikuta();
  luoJaliikutaLauttaa();
  LuoLaava();
  }

  function windowResized(){
  leveys = windowWidth;
  korkeus = windowWidth/2;
  resizeCanvas(leveys, korkeus);
  }
  
  function LuoLaava(){
    fill("#cf1020 ")
    rect(0, laavaY + 50, leveys, lautankorkeus - 10);
  }

  function luoJaliikutaLauttaa(){
    fill("Chocolate")
    rect(mouseX, lauty, lautanleveys, lautankorkeus, 360);
  }

  class Ankka {
    constructor() {
      this.X = 0;
      this.Y = korkeus/2;
      this.xSpeed = random(1,5);
      this.ySpeed = -4;
      this.size = lautanleveys / 1,9;
    }
    
    liikuta(){
      this.X = this.X + this.xSpeed;
      this.ySpeed = this.ySpeed + omgGravitaatio;
      this.Y = this.Y + this.ySpeed;
      image(ankkakuva, this.X, this.Y, this.size, this.size)
    }

  }