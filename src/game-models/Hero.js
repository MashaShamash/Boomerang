// Наш герой.

class Hero {
  constructor() {
    this.skin = this.skin()
    this.position = 0;

    

    
   
   
  }
  skin() {
   const players = ['🧖','👸🏽','🧟‍♀️','🧞‍♀️','🦸🏽‍♀️','🐱'];
   this.player = players[Math.floor(Math.random() * players.length)];

  }

 

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
