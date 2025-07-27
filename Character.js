class Character {
    constructor(name, hp, mana) {
        this.name = name
        this.hp = hp
        this.isAlive = true
        this.mana = mana
        this.hpBar = document.createElement("progress")
        this.hpBar.value = hp
        this.hpBar.max = hp
    }

    attack(target) {
        if (!this.isAlive) return;
        target.takeDamage(10)
    }

    heal(target, amount) {
        target.hp += amount
        target.hpBar.value = target.hp
    }

    takeDamage(damage) {
        this.hp -= damage;
        if (this.hp < 0) this.hp = 0;

        console.log(`${this.name} takes ${damage} damage. HP left: ${this.hp}`);

        if (this.hpBar) {
            this.hpBar.value = this.hp;
        }

        if (this.hp <= 0) {
            this.isAlive = false;
            console.log(`${this.name} has been defeated!`);
        }
    }
}