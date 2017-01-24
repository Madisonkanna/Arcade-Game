Enemy.prototype.move = function(dt) {
  if (this.direction === "left") {
    this.x = this.x - (dt * this.speed);
  } else if (this.direction === "right") {
      this.x = this.x + (dt * this.speed);
  }
};