Enemy.prototype.move = function(dt) {
  if (this.direction === "left") {
    this.x = this.x - (dt * this.speed);
  } else if (this.direction === "right") {
      this.x = this.x + (dt * this.speed);
  }
};



var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
};



enemy protoype 
    this.x = this.y + this.speed * dt;