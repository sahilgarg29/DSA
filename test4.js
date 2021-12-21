var solveNQueens = function (n) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    var a = [];
    for (var j = 0; j < n; j++) {
      a.push(".");
    }

    arr.push(a);
  }

  ansArr = [];

  nQueen(n, arr, 0, ansArr);

  return ansArr;
};

function validPlacement(arr, row, col) {
  // console.log(row, col);
  if (arr[row][col] == ".") {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][col] == "Q") {
        return false;
      }
      if (arr[row][i] == "Q") {
        return false;
      }
    }

    var i = row;
    var j = col;

    while (i < arr.length && j < arr.length) {
      if (arr[i][j] == "Q") {
        return false;
      }
      i++;
      j++;
    }

    i = row;
    j = col;

    while (i >= 0 && j >= 0) {
      if (arr[i][j] == "Q") {
        return false;
      }
      i--;
      j--;
    }

    i = row;
    j = col;

    while (i < arr.length && j >= 0) {
      if (arr[i][j] == "Q") {
        return false;
      }
      i++;
      j--;
    }

    i = row;
    j = col;

    while (i >= 0 && j < arr.length) {
      if (arr[i][j] == "Q") {
        return false;
      }
      i--;
      j++;
    }

    return true;
  }

  return false;
}

function nQueen(n, arr, row, ansArr) {
  if (row == n) {
    return true;
  }

  for (var i = 0; i < n; i++) {
    if (validPlacement(arr, row, i)) {
      arr[row][i] = "Q";
      if (nQueen(n, arr, row + 1, ansArr)) {
        var ans = [];
        arr.forEach((e) => {
          ans.push(e.join(""));
        });
        ansArr.push(ans);
      }

      arr[row][i] = ".";
    }
  }

  return false;
}

// console.log(solveNQueens(4));

function knightsTour(n) {
  var board = [];

  for (var i = 0; i < n; i++) {
    var a = [];
    for (var j = 0; j < n; j++) {
      a.push(-1);
    }

    board.push(a);
  }

  let xMove = [2, 1, -1, -2, -2, -1, 1, 2];
  let yMove = [1, 2, 2, 1, -1, -2, -2, -1];

  board[0][0] = 0;

  knight(n, board, 0, 0, 1, xMove, yMove);
  console.log(board);
}

function allValidMoves(n, board, row, col) {
  var arr = [
    [row + 2, col + 1],
    [row + 2, col - 1],
    [row - 2, col + 1],
    [row - 2, col - 1],
    [row + 1, col + 2],
    [row - 1, col + 2],
    [row + 1, col - 2],
    [row - 1, col - 2],
  ];

  arr = arr.filter((e) => {
    if (
      e[0] < n &&
      e[1] < n &&
      e[0] >= 0 &&
      e[1] >= 0 &&
      board[e[0]][e[1]] === -1
    ) {
      return true;
    }

    return false;
  });

  return arr;
}

function isValid(x, y, board, n) {
  if (x < n && y < n && x >= 0 && y >= 0 && board[x][y] === -1) {
    return true;
  }

  return false;
}

function knight(n, board, row, col, count, xMove, yMove) {
  if (count == n * n) {
    return true;
  }

  if (count > n * n) {
    return false;
  }

  for (var i = 0; i < 8; i++) {
    var next_x = row + xMove[i];
    var next_y = col + yMove[i];

    if (isValid(next_x, next_y, board, n)) {
      board[next_x][next_y] = count;
      // console.log(board);
      if (knight(n, board, next_x, next_y, count + 1, xMove, yMove)) {
        return true;
      } else {
        board[next_x][next_y] = -1;
      }
    }
  }

  return false;
}

knightsTour(8);
