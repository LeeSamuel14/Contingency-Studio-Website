this.dropTimer = this.game.time.create(false);
this.dropTimer.start();
Grabbable.prototype.dropItem = function() {
      // Do something  
      this.dropTimer.add(Phaser.Timer.SECOND * this.game.rnd.realInRange(this.coolMin, this.coolMax, this.dropItem, this));
    
    };