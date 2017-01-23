

// Enemies our player must avoid
var Enemy = function() {
    this.x = x;
    this.y = y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Here is our player class
var Player = function() {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
//here we need an x, y position of where my player is at
};

//Draw the player on the screen
Player.prototype.render = function() {
    //If the upkey is pressed, we need to decrease x. The update function updates this property
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//render function says, redraw everything and by the process of the x property being different, your player will show up in a different place
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//Instantiate my objects, create one instance of my Player. 
//Create an array with allEnemies, they should show up over and over again!


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
