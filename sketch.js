//define images

let dog;
let dogmeme;
let eagle;
let fish;
let fishbowl;
let octopus;
let owl;
let owlscared;
let penguin;
let pig;
let spider;
let unicorn;

//load images

function preload() {
  dog = loadImage('Images/dog.png');
  dogmeme = loadImage('Images/dogmeme.png');
  eagle = loadImage('Images/eagle.png');
  fish = loadImage('Images/fish.png');
  fishbowl = loadImage('Images/fishbowl.png');
  octopus = loadImage('Images/octopus.png');
  owl = loadImage('Images/owl.png');
  owlscared = loadImage('Images/owlscared.png');
  penguin = loadImage('Images/penguin.png');
  pig = loadImage('Images/pig.png');
  spider = loadImage('Images/spider.png');
  unicorn = loadImage('Images/unicorn.png');
}

var cnv;
let angle = 0;
let loc, vel;
let tiles;
let imgButton1, imgButton2;
let cellSize = 100;
let boardSize = 9;
let gameBoard;
let numberSelected = 0;

function setup() {
  var cnv = createCanvas(900, 900);
  let wd = document.getElementById("cnvDiv");

  cnv.parent(wd); // who is my parent??  child??

  gameBoard = new Board(cellSize, boardSize);
  createListeners();
}

function draw() {
  background(0);
  stroke(53, 245, 245);
  //gameBoard.updateGameBoardFromSolution();
  gameBoard.run();
}

function createListeners() {
  tiles = document.getElementsByClassName("btnDiv");
  
  for (let i = 0; i < tiles.length; i++) {
    let allChildren = tiles[i].children;
    tiles[i].addEventListener("click", function () {

          numberSelected = i + 1;
              this.style.cssText = "border:solid green 8px";

      });

    tiles[i].addEventListener("mouseover", function () {
      this.style.cssText =
        "color: blue; border: 1px solid black; background: linear-gradient(180deg, rgb(166, 139, 240) 0%, rgb(99, 64, 243) 100%)";
        tiles[i].setAttribute("style", "background-color:rgba(255, 111, 1)");
      this.style.cssText = "border:solid blue 8px";
      true;
    });

    tiles[i].addEventListener("mouseout", function () {
      tiles[i].setAttribute("style", "background-color:rgba(255, 1, 1)");
      
    });

    allChildren[allChildren.length - 1].setAttribute("style", "color:white;");
  }
}

//  Canvas Listeners

function mouseMoved() {
  let col = floor(mouseY / cellSize);
  let row = floor(mouseX / cellSize);

  // if( row >=0 && row < 9 && col >=0 && col < 9){
  //   for(let r = 0; r < 9; r){
  //     for(let c = 0; c < 9; c++){
  //       if(col === c && row === r){
  //         gameBoard.cells[r][c],highlighted = true;
  //       }else{
  //         gameBoard.cells[r][c],highlighted = false;
  //       }
  //     }
  //   }
  // }
}

function mousePressed() {
  let col = floor(mouseX / cellSize);
  let row = floor(mouseY / cellSize);
  if (col >= 0 && col < 9 && row >= 0 && row < 9) {
    if(gameBoard.cells[row][col].displayNumber){
      numberSelected = gameBoard.cells[row][col].num;
      gameBoard.cells[row][col].selected = true;;
    }else if(numberSelected === gameBoard.cells[row][col].num){
      gameBoard.cells[row][col].displayNumber = true;
    }else{
      gameBoard.cells[row][col].highlightError = true;
      gameBoard.cells[row][col].highlighted = false;
    }
  }
}
