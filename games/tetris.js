// ====================
// TETRIS
// ====================

const W = 10
const H = 8

setMap(`
..........
..........
..........
..........
..........
..........
..........
..........
`)

// ====================
// BLOCK SPRITES
// ====================

const red = "r"
const blue = "b"
const green = "g"
const yellow = "y"
const purple = "p"
const cyan = "c"
const orange = "o"
const ghost = "h"
const black = "x"

const redBitmap = bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`

const blueBitmap = bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`

const greenBitmap = bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555`

const yellowBitmap = bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`

const purpleBitmap = bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`

const cyanBitmap = bitmap`
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888`

const orangeBitmap = bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`

const ghostBitmap = bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`

const blackBitmap = bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`

// ====================
// GAME OVER LETTERS
// ====================

const G = bitmap`
0000000000000000
0000033333330000
0000033333330000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300333333000
0003300333333000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000033333330000
0000033333330000
0000000000000000`

const A = bitmap`
0000000000000000
0000033333330000
0000033333330000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003333333333000
0003333333333000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000000000000000`

const M = bitmap`
0000000000000000
0003300000033000
0003300000033000
0003333003333000
0003333003333000
0003303330333000
0003303330333000
0003303330333000
0003303330333000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000000000000000`

const E = bitmap`
0000000000000000
0003333333333000
0003333333333000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003333333330000
0003333333330000
0003300000000000
0003300000000000
0003300000000000
0003300000000000
0003333333333000
0003333333333000
0000000000000000`

const O = bitmap`
0000000000000000
0000033333330000
0000033333330000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000033333330000
0000033333330000
0000000000000000`

const V = bitmap`
0000000000000000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0003300000033000
0000033000330000
0000033000330000
0000033000330000
0000003333000000
0000003333000000
0000000000000000
0000000000000000`

const R = bitmap`
0000000000000000
0003333333300000
0003333333300000
0003300000333000
0003300000333000
0003300000333000
0003300000333000
0003333333300000
0003333333300000
0003300330000000
0003300330000000
0003300033000000
0003300033000000
0003300003300000
0003300000330000
0000000000000000`

// ====================
// LEGEND
// ====================

setLegend(
  [red, redBitmap],
  [blue, blueBitmap],
  [green, greenBitmap],
  [yellow, yellowBitmap],
  [purple, purpleBitmap],
  [cyan, cyanBitmap],
  [orange, orangeBitmap],
  [ghost, ghostBitmap],
  [black, blackBitmap],

  ["q", G],
  ["t", A],
  ["u", M],
  ["f", E],
  ["n", O],
  ["v", V],
  ["z", R]
)

// ====================
// SOUNDS
// ====================

const moveSound = tune`
100: C5~100,
100: E5~100`

const rotateSound = tune`
100: G5~100,
100: B5~100`

const dropSound = tune`
100: C4~100,
100: C3~100`

const lineClearSound = tune`
100: C5~100,
100: E5~100,
100: G5~100,
100: C6~100`

const gameOverSound = tune`
150: C4~150,
150: B3~150,
150: A3~150,
300: G3~300`

const restartSound = tune`
100: C5~100,
100: G5~100,
100: C6~100`

// ====================
// TETROMINOES
// ====================

const pieces = [

  {
    color: red,
    blocks: [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1]
    ]
  },

  {
    color: blue,
    blocks: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0]
    ]
  },

  {
    color: green,
    blocks: [
      [1, 0],
      [0, 1],
      [1, 1],
      [2, 1]
    ]
  },

  {
    color: yellow,
    blocks: [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1]
    ]
  },

  {
    color: purple,
    blocks: [
      [1, 0],
      [2, 0],
      [0, 1],
      [1, 1]
    ]
  },

  {
    color: cyan,
    blocks: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2]
    ]
  },

  {
    color: orange,
    blocks: [
      [2, 0],
      [0, 1],
      [1, 1],
      [2, 1]
    ]
  }

]

// ====================
// GAME STATE
// ====================

let board = []

let currentPiece = null
let currentX = 0
let currentY = 0
let currentRotation = 0

let gameOver = false

let gravityTimer = null
let gameOverAnimation = null

// ====================
// SCORING
// ====================

let score = 0
let rowsWithCurrentPiece = 0

// ====================
// SCORE DISPLAY
// ====================

function showScore() {

  clearText()

  addText("SCORE " + score, {
    x: 0,
    y: 0,
    color: "3"
  })

}

// ====================
// BOARD
// ====================

function createBoard() {

  board = []

  for (let y = 0; y < H; y++) {

    board[y] = []

    for (let x = 0; x < W; x++) {
      board[y][x] = null
    }

  }

}

// ====================
// ROTATION
// ====================

function getRotatedBlocks(piece, rotation) {

  let result = []

  for (let i = 0; i < piece.blocks.length; i++) {

    let x = piece.blocks[i][0]
    let y = piece.blocks[i][1]

    let rx = x
    let ry = y

    if (rotation === 1) {
      rx = -y
      ry = x
    }

    if (rotation === 2) {
      rx = -x
      ry = -y
    }

    if (rotation === 3) {
      rx = y
      ry = -x
    }

    result.push([rx, ry])

  }

  let minX = 999
  let minY = 999

  for (let i = 0; i < result.length; i++) {

    if (result[i][0] < minX) {
      minX = result[i][0]
    }

    if (result[i][1] < minY) {
      minY = result[i][1]
    }

  }

  for (let i = 0; i < result.length; i++) {

    result[i][0] -= minX
    result[i][1] -= minY

  }

  return result

}

// ====================
// COLLISION
// ====================

function canMove(piece, px, py, rotation) {

  let blocks = getRotatedBlocks(piece, rotation)

  for (let i = 0; i < blocks.length; i++) {

    let x = px + blocks[i][0]
    let y = py + blocks[i][1]

    if (x < 0 || x >= W) {
      return false
    }

    if (y >= H) {
      return false
    }

    if (y >= 0 && board[y][x] !== null) {
      return false
    }

  }

  return true

}

// ====================
// DRAW BOARD
// ====================

function drawBoard() {

  for (let y = 0; y < H; y++) {

    for (let x = 0; x < W; x++) {

      clearTile(x, y)

      if (board[y][x] !== null) {
        addSprite(x, y, board[y][x])
      }

    }

  }

}

// ====================
// DRAW CURRENT PIECE
// ====================

function drawCurrentPiece() {

  let blocks = getRotatedBlocks(
    currentPiece,
    currentRotation
  )

  for (let i = 0; i < blocks.length; i++) {

    let x = currentX + blocks[i][0]
    let y = currentY + blocks[i][1]

    if (
      x >= 0 &&
      x < W &&
      y >= 0 &&
      y < H
    ) {

      clearTile(x, y)
      addSprite(x, y, currentPiece.color)

    }

  }

}

// ====================
// GHOST PIECE
// ====================

function getGhostY() {

  let ghostY = currentY

  while (
    canMove(
      currentPiece,
      currentX,
      ghostY + 1,
      currentRotation
    )
  ) {

    ghostY++

  }

  return ghostY

}

function drawGhost() {

  let ghostY = getGhostY()

  let blocks = getRotatedBlocks(
    currentPiece,
    currentRotation
  )

  for (let i = 0; i < blocks.length; i++) {

    let x = currentX + blocks[i][0]
    let y = ghostY + blocks[i][1]

    if (
      y >= 0 &&
      y < H &&
      board[y][x] === null
    ) {

      if (
        y !== currentY + blocks[i][1]
      ) {

        clearTile(x, y)
        addSprite(x, y, ghost)

      }

    }

  }

}

// ====================
// DRAW GAME
// ====================

function drawGame() {

  drawBoard()
  drawGhost()
  drawCurrentPiece()
  showScore()

}

// ====================
// LOCK PIECE
// ====================

function lockPiece() {

  let blocks = getRotatedBlocks(
    currentPiece,
    currentRotation
  )

  for (let i = 0; i < blocks.length; i++) {

    let x = currentX + blocks[i][0]
    let y = currentY + blocks[i][1]

    if (
      x >= 0 &&
      x < W &&
      y >= 0 &&
      y < H
    ) {

      board[y][x] = currentPiece.color

    }

  }

  playTune(dropSound)

  clearLines()

  spawnPiece()

}

// ====================
// CLEAR LINES
// ====================

function clearLines() {

  let linesCleared = 0

  for (let y = H - 1; y >= 0; y--) {

    let full = true

    for (let x = 0; x < W; x++) {

      if (board[y][x] === null) {
        full = false
        break
      }

    }

    if (full) {

      linesCleared++

      board.splice(y, 1)

      let newRow = []

      for (let x = 0; x < W; x++) {
        newRow.push(null)
      }

      board.unshift(newRow)

      y++

    }

  }

  // ====================
  // SCORING
  // ====================

  if (linesCleared > 0) {

    playTune(lineClearSound)

    for (let i = 0; i < linesCleared; i++) {

      rowsWithCurrentPiece++

      score += rowsWithCurrentPiece * 10

    }

  }

}

// ====================
// SPAWN PIECE
// ====================

function spawnPiece() {

  // New piece = reset row bonus
  rowsWithCurrentPiece = 0

  let index =
    Math.floor(
      Math.random() * pieces.length
    )

  currentPiece = pieces[index]

  currentRotation = 0

  let blocks = getRotatedBlocks(
    currentPiece,
    currentRotation
  )

  let maxX = 0

  for (let i = 0; i < blocks.length; i++) {

    if (blocks[i][0] > maxX) {
      maxX = blocks[i][0]
    }

  }

  currentX =
    Math.floor(
      (W - (maxX + 1)) / 2
    )

  currentY = 0

  if (
    !canMove(
      currentPiece,
      currentX,
      currentY,
      currentRotation
    )
  ) {

    startGameOver()
    return

  }

  drawGame()

}

// ====================
// MOVE LEFT
// ====================

function moveLeft() {

  if (gameOver) {
    return
  }

  if (
    canMove(
      currentPiece,
      currentX - 1,
      currentY,
      currentRotation
    )
  ) {

    currentX--

    playTune(moveSound)

    drawGame()

  }

}

// ====================
// MOVE RIGHT
// ====================

function moveRight() {

  if (gameOver) {
    return
  }

  if (
    canMove(
      currentPiece,
      currentX + 1,
      currentY,
      currentRotation
    )
  ) {

    currentX++

    playTune(moveSound)

    drawGame()

  }

}

// ====================
// MOVE DOWN
// ====================

function moveDown() {

  if (gameOver) {
    return
  }

  if (
    canMove(
      currentPiece,
      currentX,
      currentY + 1,
      currentRotation
    )
  ) {

    currentY++

    drawGame()

  } else {

    lockPiece()

  }

}

// ====================
// ROTATE CLOCKWISE
// ====================

function rotateClockwise() {

  if (gameOver) {
    return
  }

  let newRotation =
    (currentRotation + 1) % 4

  if (
    canMove(
      currentPiece,
      currentX,
      currentY,
      newRotation
    )
  ) {

    currentRotation = newRotation

    playTune(rotateSound)

    drawGame()

  }

}

// ====================
// ROTATE COUNTER-CLOCKWISE
// ====================

function rotateCounterClockwise() {

  if (gameOver) {
    return
  }

  let newRotation =
    (currentRotation + 3) % 4

  if (
    canMove(
      currentPiece,
      currentX,
      currentY,
      newRotation
    )
  ) {

    currentRotation = newRotation

    playTune(rotateSound)

    drawGame()

  }

}

// ====================
// HARD DROP
// ====================

function hardDrop() {

  if (gameOver) {
    return
  }

  while (
    canMove(
      currentPiece,
      currentX,
      currentY + 1,
      currentRotation
    )
  ) {

    currentY++

  }

  lockPiece()

}

// ====================
// GAME OVER DISPLAY
// ====================

function showBigGameOver() {

  clearText()

  // Make entire screen black

  for (let y = 0; y < H; y++) {

    for (let x = 0; x < W; x++) {

      clearTile(x, y)

      addSprite(
        x,
        y,
        black
      )

    }

  }

  // GAME

  clearTile(1, 1)
  clearTile(3, 1)
  clearTile(5, 1)
  clearTile(7, 1)

  addSprite(1, 1, "q")
  addSprite(3, 1, "t")
  addSprite(5, 1, "u")
  addSprite(7, 1, "f")

  // OVER

  clearTile(1, 4)
  clearTile(3, 4)
  clearTile(5, 4)
  clearTile(7, 4)

  addSprite(1, 4, "n")
  addSprite(3, 4, "v")
  addSprite(5, 4, "f")
  addSprite(7, 4, "z")

}

// ====================
// GAME OVER DRIP
// ====================

function startGameOver() {

  if (gameOver) {
    return
  }

  gameOver = true

  playTune(gameOverSound)

  clearText()

  let dripHeight = [
    0,
    1,
    0,
    2,
    1,
    0,
    2,
    1,
    0,
    1
  ]

  let finished = false

  gameOverAnimation = setInterval(() => {

    for (let x = 0; x < W; x++) {

      let growth =
        Math.floor(
          Math.random() * 2
        ) + 1

      dripHeight[x] += growth

      if (dripHeight[x] > H) {
        dripHeight[x] = H
      }

      for (
        let y = 0;
        y < dripHeight[x];
        y++
      ) {

        clearTile(x, y)
        addSprite(x, y, black)

      }

    }

    for (let x = 0; x < W; x++) {

      if (
        dripHeight[x] < H &&
        Math.random() < 0.35
      ) {

        let dripLength =
          Math.floor(
            Math.random() * 2
          ) + 1

        for (
          let d = 0;
          d < dripLength &&
          dripHeight[x] + d < H;
          d++
        ) {

          clearTile(
            x,
            dripHeight[x] + d
          )

          addSprite(
            x,
            dripHeight[x] + d,
            black
          )

        }

      }

    }

    finished = true

    for (let x = 0; x < W; x++) {

      if (dripHeight[x] < H) {
        finished = false
      }

    }

    if (finished) {

      clearInterval(gameOverAnimation)

      gameOverAnimation = null

      for (let y = 0; y < H; y++) {

        for (let x = 0; x < W; x++) {

          clearTile(x, y)

          addSprite(
            x,
            y,
            black
          )

        }

      }

      showBigGameOver()

    }

  }, 130)

}

// ====================
// RESTART
// ====================

function restartGame() {

  if (gravityTimer !== null) {
    clearInterval(gravityTimer)
  }

  if (gameOverAnimation !== null) {
    clearInterval(gameOverAnimation)
    gameOverAnimation = null
  }

  gameOver = false

  score = 0
  rowsWithCurrentPiece = 0

  clearText()

  createBoard()

  playTune(restartSound)

  spawnPiece()

  gravityTimer = setInterval(() => {

    moveDown()

  }, 800)

}

// ====================
// CONTROLS
// ====================

onInput("a", () => {
  moveLeft()
})

onInput("d", () => {
  moveRight()
})

onInput("s", () => {
  moveDown()
})

onInput("w", () => {
  rotateClockwise()
})

onInput("i", () => {
  rotateClockwise()
})

onInput("j", () => {
  hardDrop()
})

onInput("k", () => {
  rotateCounterClockwise()
})

onInput("l", () => {
  restartGame()
})

// ====================
// START GAME
// ====================

restartGame()