
var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
};

// Enemies our player must avoid
var Enemy = function(x, y) {
// Variables applied to each of our instances go here
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    this.x = this.x + (dt * this.speed);
    //this will update the position of our enemy, based on
    //where our enemy went!

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //this will put the enemy onscreen in its new place
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Here is our player class
var Player = function(x, y) {
//here we need an x, y position of where my player is at
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.sprite = 'images/char-boy.png';

};

/*Draw the player on the screen
*Add in an additional function to the player class
*called checkCollisions which resets the game when a player and a bug collide
*/
Player.prototype.update = function() {
    this.x = this.y + (dt * this.speed);

}

    //If the upkey is pressed, we need to decrease x. The update function updates this property
/*render function says, redraw everything and by the process of the 
*x property being different, your player will show up in a different place
*/

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
    /*Anytime you press a key, you need to call a handle input method
    *that is going to increment our x and y values for your player!

    *Left is going to move the player along the x axis
    *Up and down move the player along the Y axis. Handle input needs to list keyboard strokes
    *Handle input needs to list your keyboard strokes
    */

Player.prototype.handleInput = function(allowedKeys) {
    //what key you press will increment your values! So how do we do this?

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
    var allEnemies = [];
    var e1 = new Enemy(50, 50);
    var e2 = new Enemy(50, 50);
    for (var i; i < 4; i++) {
        allEnemies.push(new Enemy());

};

// Place the player object in a variable called player

//Create 1 instance of the player:
var player = new Player(0, 430);

//Instantiate my objects, create one instance of my Player. 
//Create an array with allEnemies, they should show up over and over again!
var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

