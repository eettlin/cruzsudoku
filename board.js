class Board {
  constructor(cellSize, boardSize) {
    this.cellSize = cellSize;
    this.boardSize = boardSize;
    this.cells = [];
    //  make cells
    for (let r = 0; r < boardSize; r++) {
      this.cells[r] = [];
      for (let c = 0; c < boardSize; c++) {
        this.cells[r][c] = new Cell(r, c, 0);
      }
    }

    let zerosRemain = true;
    let count = 0;
    while (zerosRemain && count < 50000) {
      this.solution = this.getBoardSolution();
      zerosRemain = this.checkZerosRemain();
      count++;
    }
    console.log("count = " + count);
    this.updateCellsFromSolution();
  }

  checkZerosRemain() {
    for (let r = 0; r < boardSize; r++) {
      for (let c = 0; c < boardSize; c++) {
        if (this.solution[r][c] === 0) {
          return true;
        }
      }
    }
    return false;
  }

  updateCellsFromSolution() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        this.cells[r][c].num = this.solution[r][c];
      }
    }
  }

  getBoardSolution() {
    let ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let solution = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    solveBoard();
    function solveBoard() {
      for (let r = 0; r < solution.length; r++) {
        for (let c = 0; c < solution[r].length; c++) {
          if (solution[r][c] === 0) {
            for (let i = 1; i <= solution[r].length; i++) {
              let randomIndex = floor(random(ints.length));
              let checkNumber = ints[randomIndex];
              if (placementValid(checkNumber, r, c)) {
                solution[r][c] = checkNumber;
                if (solveBoard()) {
                  return true;
                } else {
                  solution[r][c] = 0;
                }
              }
            }
          }
        }
      }
      return true;
    }
    //  helper funtions
    //  return true if number already in row otherwise false
    function numberInRow(n, r) {
      let row = solution[r];
      for (let i = 0; i < row.length; i++) {
        if (n === row[i]) {
          return true;
        }
      }
      return false;
    }
    //  return true if number already in col otherwise false
    function numberInCol(n, c) {
      for (let i = 0; i < solution.length; i++) {
        if (n === solution[i][c]) {
          return true;
        }
      }
      return false;
    }
    //  return true if number already in block otherwise false
    function numberInBlock(n, r, c) {
      let sc = c - (c % 3);
      let sr = r - (r % 3);
      for (let i = sr; i < sr + 3; i++) {
        for (let j = sc; j < sc + 3; j++) {
          if (n === solution[i][j]) {
            return true;
          }
        }
      }
      return false;
    }
    //  return true the placement is valid
    function placementValid(n, r, c) {
      if (!numberInRow(n, r) && !numberInCol(n, c) && !numberInBlock(n, r, c)) {
        return true;
      }
      return false;
    }
    return solution;
  } //  getBaord Solution

  run() {
    this.update();
    this.render();
  }

  update() {
    //  clear all highlights
    for (let r = 0; r < boardSize; r++) {
      for (let c = 0; c < boardSize; c++) {
        gameBoard.cells[c][r].highlighted = false;
        gameBoard.cells[c][r].selected = false;
        //  set selected visible to highlighteed
        if (
          gameBoard.cells[c][r].displayNumber &&
          gameBoard.cells[c][r].num === numberSelected
        ) {
          gameBoard.cells[c][r].highlighted = true;
        }
      }
    }
  }

  render() {
    for (let r = 0; r < this.boardSize; r++) {
      for (let c = 0; c < this.boardSize; c++) {
        this.cells[r][c].run();
      }
    }
    /// draw block bondaries
    strokeWeight(12);
    stroke(200, 100, 50);
    let cs = this.cellSize;
    line(3 * cs, 0, 3 * cs, 9 * cs);
    line(6 * cs, 0, 6 * cs, 9 * cs);
    line(0, 3 * cs, 9 * cs, 3 * cs);
    line(0, 6 * cs, 9 * cs, 6 * cs);
  }
}
