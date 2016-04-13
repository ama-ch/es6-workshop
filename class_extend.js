class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  damage() {
    this.health_ -= 10;
  }
  getHealth() {
    return this.health_;
  }
  toString() {
    return `x: ${this.x} y: ${this.y} health: ${this.health_}`;
  }
}

class Player extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  toString() {
    return `name: ${this.name} ${super.toString()}`;
  }
}

const x = process.argv[2];
const y = process.argv[3];
const name = process.argv[4];
const character = new Character(+x, +y);
character.damage();
console.log(character.toString());
const player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());
