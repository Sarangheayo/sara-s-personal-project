/**
 * @file Omok Game Logic
 * @description Pure JavaScript module for determining the win condition in an Omok game.
 */

/**
 * Checks if a player has won the Omok game.
 * Assumes a standard Omok board (19x19 usually, but can be dynamic)
 * and a 5-in-a-row win condition.
 *
 * @param {Array<Array<number>>} board The current state of the Omok board.
 *                                     0 for empty, 1 for player 1, 2 for player 2.
 * @param {number} row The row of the last move.
 * @param {number} col The column of the last move.
 * @param {number} player The player who made the last move (1 or 2).
 * @returns {boolean} True if the player has won, false otherwise.
 */
export function checkWin(board, row, col, player) {
  const numRows = board.length;
  const numCols = board[0].length;

  // Directions to check: horizontal, vertical, diagonal (top-left to bottom-right), diagonal (top-right to bottom-left)
  const directions = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, 1], // Diagonal \
    [1, -1] // Diagonal /
  ];

  for (const [dr, dc] of directions) {
    let count = 1; // Count of consecutive stones, starting with the last placed stone

    // Check in the positive direction
    for (let i = 1; i < 5; i++) {
      const r = row + i * dr;
      const c = col + i * dc;
      if (r >= 0 && r < numRows && c >= 0 && c < numCols && board[r][c] === player) {
        count++;
      } else {
        break;
      }
    }

    // Check in the negative direction
    for (let i = 1; i < 5; i++) {
      const r = row - i * dr;
      const c = col - i * dc;
      if (r >= 0 && r < numRows && c >= 0 && c < numCols && board[r][c] === player) {
        count++;
      } else {
        break;
      }
    }

    if (count >= 5) {
      return true;
    }
  }

  return false;
}

// Example Usage:
// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
// ];
// console.log("Player 1 wins vertically:", checkWin(board, 1, 2, 1)); // true
