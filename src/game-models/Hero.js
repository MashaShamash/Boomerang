// Наш герой.

class Hero {
  constructor() {
    // this.skin = [];
    this.skin = this.skin()
    this.position =20;
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
  skin() {
   const emj= [
      "🍧",
      "🍹",
      "🍭",
      "🍰",
      "🍓",
      "🍼",
      "🥃",
      "🚬",
      "💊",
      "🌶️",
      "🍌",
      "🧃",
    ];
    this.player = this.skin[Math.floor(Math.random() * emj.length)];
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
