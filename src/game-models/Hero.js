// Наш герой.

class Hero {
  constructor(args = {}) {
    // this.skin = [];
    this.skin = "🧨";
    this.position = args.position || 0;
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
  generateHero() {
    this.skin = [
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
    this.skin = this.skin[Math.floor(Math.random() * hero.length)];
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
