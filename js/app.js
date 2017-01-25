//Create array of enemy positions at y coordinate

var positions = [100, 200, 300];

// This is a superclass Character
// Our enemy and player delegate to this class when their lookups fail

var Character = function(img, x, y) {
    this.x = x;
    this.y = y;
    this.sprite = img;
};

// This is our enemies subclass
// This class delegates to our superclass
var Enemy = function() {

// Set our enemies starting position
// Create a random 'y' variable here
    Character.call(this, 'images/enemy-bug.png', -100, 200);
    this.speed = 200;
};

Enemy.prototype.update = function(dt) {
//this will update the position of our enemy, based on
//where our enemy went!
    this.x += this.speed * dt;
    //Instantiate a new enemy when another enmy goes offscreen
    if (this.x >= 510) {
        allEnemies.push(new Enemy());
        //remove enemies from array when they're gone
        var enemiesIndex = allEnemies.indexOf(this);
        allEnemies.splice(enemiesIndex, 1);
    }    
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Draw the enemy on the screen, required method for game

//HERE!

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Here is our player class
var Player = function() {
//here we need an x, y position of where my player is at
    Character.call(this, 'images/char-boy.png', 200, 400);
};

Player.prototype.update = function(dt) {

    //Our player wins if he reaches the other side. How do I do this?
};

//Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/*Add in an additional function to the player class
*called checkCollisions which resets the game when a player and a bug collide
*/


    //If the upkey is pressed, we need to decrease x. The update function updates this property
/*render function says, redraw everything and by the process of the 
*x property being different, your player will show up in a different place
*/

    /*Anytime you press a key, you need to call a handle input method
    *that is going to increment our x and y values for your player!

    *Left is going to move the player along the x axis
    *Up and down move the player along the Y axis. Handle input needs to list keyboard strokes
    *Handle input needs to list your keyboard strokes
    */

Player.prototype.update = function() {
   if (this.ctlKey === 'left' && this.x != 0) {
     this.x = this.x - 100;
   } else if (this.ctlKey === 'right' && this.x != 400) {
     this.x = this.x + 100;
   } else if (this.ctlKey === 'up') {
     this.y = this.y - 80;
   } else if (this.ctlKey === 'down' && this.y != 400) {
     this.y = this.y + 80;
   }
   this.ctlKey = null;
//Stop player from going off the top of the screen
    if (this.y < 50) {
        this.reset();
    }
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for (var i = 0; i < 4; i++) {
    allEnemies.push(new Enemy());
}

// Place the player object in a variable called player

//Create 1 instance of the player:
var player = new Player();

//Instantiate my objects, create one instance of my Player. 
//Create an array with allEnemies, they should show up over and over again!

Player.prototype.handleInput = function(key) {
   this.ctlKey = key;
 }
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

