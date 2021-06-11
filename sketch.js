var player;
var girl_running;
var bg, bgImage;
var foodGroup, junkFoodGroup;
var strawberryImg, appleImg, bananaImg, burgerImg, food1Img;
var donutImg, chocobarImg;
var score = 0;
function preload() {
    girl_running = loadAnimation("Run (1).png", "Run (2).png", "Run (3).png",
        "Run (4).png", "Run (5).png", "Run (6).png", "Run (7).png", "Run (8).png",
        "Run (9).png", "Run (10).png", "Run (11).png", "Run (12).png", "Run (14).png",
        "Run (15).png", "Run (16).png", "Run (17).png",
        "Run (18).png", "Run (19).png", "Run (20).png");
    bgImage = loadImage("bg.png");
    strawberryImg = loadImage("strawberry.png");
    donutImg = loadImage("donut.png");
    chocobarImg = loadImage("chocobar.png");
    bananaImg = loadImage("banana.png");
    burgerImg = loadImage("burger.png")
    appleImg = loadImage("apple.png");
    food1Img = loadImage("food.png");
}

function setup() {
    createCanvas(1300, 750);
    player = createSprite(500, 588, 10, 10);
    player.addAnimation("girl_running", girl_running);
    player.scale = 0.5;
    foodGroup = createGroup();
    junkFoodGroup = createGroup();
}

function draw() {
    background(bgImage);
    stroke("red");
    textSize(25);
    text("Immunity: " + score, 200, 50);
    if (keyDown(LEFT_ARROW)) {
        player.x -= 10;
    }
    if (keyDown(RIGHT_ARROW)) {
        player.x += 10;
    }
    if (foodGroup.isTouching(player)) {
        score += 50;
        foodGroup.destroyEach();
    }
    if (junkFoodGroup.isTouching(player)) {
        score -= 30;
        junkFoodGroup.destroyEach();
    }
    spawnFood();
    drawSprites();
}

function spawnFood() {
    if (frameCount % 150 === 0) {
        food = createSprite(random(100, 1000), 0, 5, 5);
        food.velocityY = 6;
        food.lifetime = 100;
        foodGroup.add(food);
        var rand = Math.round(random(1, 4));
        switch (rand) {
            case 1: food.addImage(appleImg);
                food.scale = 0.15;
                break;
            case 2: food.addImage(strawberryImg);
                food.scale = 0.15;
                break;
            case 3: food.addImage(food1Img);
                food.scale = 0.15;
                break;
            case 4: food.addImage(bananaImg);
                food.scale = 0.15;
                break;
        }
    }

} function spawnJunk() {
    if (frameCount % 150 === 0) {
        junkFood = createSprite(random(20, 800), 0, 100, 100);
        junkFood.velocityY = 6;
        junkFood.lifetime = 100;
        junkFoodGroup.add(junkFood);
        var rand = Math.round(random(1, 3));
        switch (rand) {
            case 1: junkFood.addImage(donutImg);
                junkFood.scale = 0.15;
                break;
            case 2: junkFood.addImage(burgerImg);
                junkFood.scale = 0.15;
                break;
            case 3: junkFood.addImage(chocobarImg);
                junkFood.scale = 0.15;
                break;
        }

    }
}
