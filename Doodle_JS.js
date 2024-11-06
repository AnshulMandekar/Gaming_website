//board
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = boardHeight * 7 / 8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
    img: null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}

//physics
let velocityX = 0;
let velocityY = 0; //doodler jump speed
let initialVelocityY = -7; // reduced jump speed
let gravity = 0.15; // reduced gravity

//platforms
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;

let score = 0;
let maxScore = 0;
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    //load images
    doodlerRightImg = new Image();
    doodlerRightImg.src = "./doodler-right.png";
    doodler.img = doodlerRightImg;
    doodlerRightImg.onload = function () {
        context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "./doodler-left.png";

    platformImg = new Image();
    platformImg.src = "./platform.png";

    velocityY = initialVelocityY;
    placePlatforms();
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler);
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //doodler movement
    doodler.x += velocityX;
    if (doodler.x > boardWidth) {
        doodler.x = 0;
    }
    else if (doodler.x + doodler.width < 0) {
        doodler.x = boardWidth;
    }

    // Apply gravity and update doodler position
    velocityY += gravity;
    doodler.y += velocityY;

    // Limit the height of the doodler
    if (doodler.y < boardHeight * 0.3) { // If doodler reaches the top third of the screen
        // Move platforms down to give the effect of moving up
        for (let i = 0; i < platformArray.length; i++) {
            platformArray[i].y -= velocityY;
        }
        doodler.y = boardHeight * 0.3; // Keep doodler within view
    }

    if (doodler.y > board.height) {
        gameOver = true;
    }

    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);

    // platforms
    for (let i = 0; i < platformArray.length; i++) {
        let platform = platformArray[i];

        if (detectCollision(doodler, platform) && velocityY >= 0) {
            velocityY = initialVelocityY; // Jump
        }
        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height);
    }

    // Clear platforms and add new platforms
    while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
        platformArray.shift(); // Remove the first platform
        newPlatform(); // Replace with a new platform on top
    }

    // Score
    updateScore();
    context.fillStyle = "black";
    context.font = "16px sans-serif";
    context.fillText(score, 5, 20);

    if (gameOver) {
        context.fillText("Game Over: Press 'Space' to Restart", boardWidth / 7, boardHeight * 7 / 8);
    }
}

function moveDoodler(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") { // move right
        velocityX = 2; // reduced speed
        doodler.img = doodlerRightImg;
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyA") { // move left
        velocityX = -2; // reduced speed
        doodler.img = doodlerLeftImg;
    }
    else if (e.code == "Space" && gameOver) {
        // reset
        doodler = {
            img: doodlerRightImg,
            x: doodlerX,
            y: doodlerY,
            width: doodlerWidth,
            height: doodlerHeight
        }

        velocityX = 0;
        velocityY = initialVelocityY;
        score = 0;
        maxScore = 0;
        gameOver = false;
        placePlatforms();
    }
}

function placePlatforms() {
    platformArray = [];

    // Starting platform
    let platform = {
        img: platformImg,
        x: boardWidth / 2,
        y: boardHeight - 50,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);

    // Randomly placed platforms
    for (let i = 0; i < 6; i++) {
        let randomX = Math.floor(Math.random() * (boardWidth - platformWidth));
        let platform = {
            img: platformImg,
            x: randomX,
            y: boardHeight - 75 * i - 150,
            width: platformWidth,
            height: platformHeight
        }
        platformArray.push(platform);
    }
}

function newPlatform() {
    let randomX = Math.floor(Math.random() * (boardWidth - platformWidth));
    let platform = {
        img: platformImg,
        x: randomX,
        y: -platformHeight,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform);
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}

function updateScore() {
    if (velocityY < 0) { // going up
        score++;
    }
}