//Utility Functions

//Create Merged Slices
// This function generates an array containing the adjacent cells to an
// specifc cell address; the result is used to evaluate the given cell

export function createMergedSlices(currentBoard, rowIndex, colIndex) {
  const start = colIndex === 0 ? colIndex : colIndex - 1;
  const end = colIndex + 2;

  let merged = currentBoard[rowIndex].slice(start, end);
  if (currentBoard[rowIndex - 1]) {
    merged.push(currentBoard[rowIndex - 1][colIndex]);
  }

  if (currentBoard[rowIndex + 1]) {
    merged.push(currentBoard[rowIndex + 1][colIndex]);
  }

  return merged;
}

//Check Board Equality
// This function is used to evaluate whether two boards are equal
export function checkBoardEquality(prev, next) {
  let equal = true;
  for (let i = 0; i < prev.length; i++) {
    for (let j = 0; j < prev[i].length; j++) {
      if (prev[i][j] !== next[i][j]) {
        equal = false;
        break;
      }
    }
  }

  return equal;
}

//Flatten Board
// This function transform the board - 2D array - into a simple array
export function flattenBoard(board) {
  let flattened = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      flattened.push(board[i][j]);
    }
  }

  return flattened;
}

//Shuffle
// This function shuffles the items of an array
export function shuffle(array) {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
