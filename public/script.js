let taustakuva;
let ankkakuva;
let leveys;
let korkeus;
let ankka1;
let ankka2;
let lautanleveys;
let lautankorkeus;
let lauty;
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
    lauty = korkeus * 0.9;
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
  }

  function windowResized(){
  leveys = windowWidth;
  korkeus = windowWidth/2;
  resizeCanvas(leveys, korkeus);
  }
  

  function luoJaliikutaLauttaa(){
    fill("Chocolate")
    rect(mouseX, lauty, lautanleveys, lautankorkeus);
  }

  class Ankka {
    constructor() {
      this.X = 0;
      this.X_speed = random(1,10);
    }
    
    liikuta(){
      this.X = this.X + this.X_speed;
      image(ankkakuva, this.X, korkeus/2, 150, 150)
    }

  }