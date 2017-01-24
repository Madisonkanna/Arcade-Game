// This is a superclass, Character
// Our enemy and player delegate to this class when their lookups fail

var Character = function(img, x, y) {
    this.x = x;
    this.y = y;
    this.sprite = img;
};

// This is our enemies class
var Enemy = function() {
    Character.call(this, 'images/enemy-bug.png', -100, 100);
    this.sprite = 'images/enemy-bug.png';
    this.speed = 100;
};

 
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    //this will update the position of our enemy, based on
    //where our enemy went!
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
    this.sprite = 'images/char-boy.png';
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    this.x += this.speed * dt;

};

/*Draw the player on the screen
*Add in an additional function to the player class
*called checkCollisions which resets the game when a player and a bug collide
*/
Player.prototype.update = function(dt) {
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

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            this.x -= 90;
            if (this.x > 0) {
                this.x -= 90;
            } 
            break;
        case 'up':
            this.y -= 80; 
            if (this.y > -25) {
                this.y -= 80;
            }
        case 'right':
            this.x -= 100;
            if (this.x < 400) {
                this.x += 100;
            }
            break 
        case 'down':
            this.y += 85;
            if (this.y < 390) {
                this.y += 85;
            }
            break;
        default:
            console.log('Please press arrow keys to move');
    }
};


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

