class Cell {
  constructor(r, c) {
    this.sz = cellSize;
    this.row = r;
    this.col = c;
    this.loc = createVector(c * cellSize, r * cellSize);

    this.strokeColor = color(0)

    this.num = 0;
    this.highlighted = false;
    this.highlightedFill = color(55, 255, 100);
    this.highlightedStroke = color(20, 100, 50);
    this.selected = false;
    this.selectedFill = color(50, 255, 50);
    this.selectedStroke = color(100, 255, 255);
    this.clrFill = color(250, 250, 220);
    this.clrStroke = color(0);
    this.highlightError = false;
    this.errorFill = color(255, 50, 50);
    this.errorStroke = color(0);

    let num = random(100);



    this.displayNumber = true;
    if (num < 55) {
      this.displayNumber = false;
    }
  }

  run() {
    this.render();
  }
  //rendering different for each image
  render() {
    if (this.highlighted) {

      fill(this.highlightedFill);
      stroke(this.highlightedStroke);
      strokeWeight(0);
    } else if (this.selected) {
      fill(this.selectedFill);
      stroke(this.selectedStroke);
      strokeWeight(0);
    } else if (this.highlightError) {
      fill(this.errorFill);
      stroke(this.errorStroke);
      strokeWeight(5);
    } else {
      fill(this.clrFill);
      stroke(this.clrStroke);
      strokeWeight(5);
    }

    rect(this.loc.x, this.loc.y, cellSize, cellSize);
    if (this.displayNumber) {
      if (this.num === 5) {

        image(dog, this.loc.x + 10, this.loc.y +10,80,80);
      }
        if (this.num === 1) {
        image(fish, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 2) {
        image(owl, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 3) {
        image(octopus, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 4) {
        image(owlscared, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 6) {
        image(dogmeme, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 7) {
        image(spider, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 8) {
        image(fishbowl, this.loc.x + 10, this.loc.y + 10,80,80);
      } if (this.num === 9) {
        image(unicorn, this.loc.x + 10, this.loc.y + 10,80,80);

      }
    }
  }
}
