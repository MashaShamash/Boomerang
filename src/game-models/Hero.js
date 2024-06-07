// Наш герой.

class Hero {
  constructor({ position }) {

    const players = ['🧖','👸🏽','🧟‍♀️','🧞‍♀️','🦸🏽‍♀️','🐱'];
    this.player = players[Math.floor(Math.random() * players.length)];
   
    this.position = position;
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
