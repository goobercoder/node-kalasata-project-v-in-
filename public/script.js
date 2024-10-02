let taustakuva;
let ankkakuva;
let leveys;
let korkeus;
let ankka1;
let ankka2;


// Load the image and create a p5.Image object.
function preload() {
  taustakuva = loadImage('/images/lampi.png');
  ankkakuva = loadImage('/images/ankka.png');
}



function setup() {
  leveys = windowWidth;
  korkeus = windowWidth/3;
    createCanvas(leveys, korkeus);
    
    ankka1 = new Ankka();
    ankka2 = new Ankka();
  }
  
  function draw() {
  leveys = windowWidth;
  korkeus = windowWidth/3;
  image(taustakuva, 0, 0, leveys, korkeus);
  ankka1.liikuta();
  ankka2.liikuta();
  luoJaliikutaLauttaa();
  }

  function windowResized(){
  leveys = windowWidth;
  korkeus = windowWidth/3;
  resizeCanvas(leveys, korkeus);
  }
  

  function luoJaliikutaLauttaa(){
    rect(30, 70, 250, 50);
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