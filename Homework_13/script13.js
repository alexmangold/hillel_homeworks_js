"use strict"

//1

const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const span4 = document.createElement("span");
document.body.appendChild(span1);
document.body.appendChild(span2);
document.body.appendChild(span3);
document.body.appendChild(span4);

//

function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return distance <= +this.maxDistance;
};

Unit.prototype.isReadyToFight = function () {
    return +this.health / +this.maxHealth >= 0.5;
};

Unit.prototype.restore = function () {
    if (+this.health < +this.maxHealth) {
        this.health = this.maxHealth;
    }
};

Unit.prototype.clone = function () {
    const unitCopy = {};
    for (const key in this) {
        unitCopy[key] = this[key];
    }
    const newUnit = new Unit(unitCopy.type, unitCopy.health, unitCopy.maxHealth, unitCopy.maxDistance);
    return newUnit;
};

function Army(defaultUnits) {
    this.units = [];

    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function (distance) {
    for (const element of this.units) {
        if (+distance > +element.maxDistance) {
            return false;
        }
    }

    return true;
};

Army.prototype.isReadyToFight = function () {
    for (const element of this.units) {
        if (!(+element.health / +element.maxHealth >= 0.5)) {
            return false;
        }
    }

    return true;
};

Army.prototype.restore = function () {
    for (const element of this.units) {
        if ((+element.health < +element.maxHealth)) {
            element.health = element.maxHealth;
        }
    }
};

Army.prototype.getReadyToMoveUnits = function (distance) {
    const readyUnits = [];

    for (const element of this.units) {
        if (+distance <= +element.maxDistance) {
            readyUnits.push(element);
        }
    }

    return readyUnits;
};

Army.prototype.combineUnits = function (defaultUnits) {
    for (const element of defaultUnits) {
        this.units.push(element);
    }
};

Army.prototype.cloneUnit = function (index) {
    for (const element of this.units) {
        if (this.units.indexOf(element) === +index) {
            return element.clone();
        }
    }
};

//ПРОВЕРКИ
const unit1 = new Unit("knight", 100, 100, 100);
const unit2 = new Unit("archer", 30, 80, 30);
const unit3 = unit1.clone();
const unit4 = new Unit("warlock", 60, 60, 10);
const unit5 = unit4.clone();

const army = new Army([unit1, unit2, unit3]);
span1.innerText = JSON.stringify(army);
army.combineUnits([unit4, unit5]);
span2.innerText = JSON.stringify(army);
/*
У меня появилась идея создавать новую армию из массива готовых юнитов, но я не уверен, что это правильное решение, потом оставлю оба варианта
*/
const readyArmy = army.getReadyToMoveUnits(30);
// const readyArmy = new Army(army.getReadyToMoveUnits(30));
span3.innerText = JSON.stringify(readyArmy);

//2

const sex = {
    male: "male",
    female: "female"
}

function Animal(sex, x, y) { // не очень понятно как нужно реализовать прыжок, поэтому я сделал возможность прыгать вверх и прыгать вниз для изменения у
    this.sex = sex;
    this.x = x;
    this.y = y;

    this.stepRun = 10;
    this.stepJump = 5;
}

Animal.prototype.runLeft = function () {
    const x = this.x - this.stepRun;
    if (x >= 0) {
        this.x = x;
    }
}

Animal.prototype.runRight = function () {
    const x = this.x + this.stepRun;
    if (x >= 0) {
        this.x = x;
    }
}

Animal.prototype.jumpUp = function () {
    const y = this.y - this.stepJump;
    if (y >= 0) {
        this.y = y;
    }
}

Animal.prototype.jumpDown = function () {
    const y = this.y + this.stepJump;
    if (y >= 0) {
        this.y = y;
    }
}

Animal.prototype.render = function (renderTarget) {
    renderTarget.innerText = JSON.stringify({ name: this.name, x: this.x, y: this.y });
}

function Mammal() {
    this.producesMilk = function () {
        return this.sex === "female";
    }
}

function Raccoon(name) {
    this.name = name;
    this.steals = function (animal, object) { // принимает объект у которого нужно воровать и строку с названием предмета, который нужно своровать
        const keys = Object.keys(animal);

        const index = keys.indexOf(object);
        const key = keys[index];

        if (index != -1) {
            if (animal[key] > 0) {
                animal[key] -= 1;
                this[object] = !this[object] ? 1 : this[object] + 1;
            } else {
                console.log(`No more ${object} to steal`);
            }
        } else {
            console.log(`No ${object} here`);
        }
    }
}

function Platypus(name) {
    this.name = name;
    this.food = 20;
    this.eggs = 2;
}

// ПРОВЕРКИ
const animal1 = new Animal(sex.female, 0, 0);
const animal2 = new Animal(sex.male, 10, 10);

const mammal1 = new Mammal();
const mammal2 = new Mammal();

const raccoon = new Raccoon("Raccoon");
const platypus = new Platypus("Platypus");

Object.setPrototypeOf(mammal1, animal1);
Object.setPrototypeOf(mammal2, animal2);
Object.setPrototypeOf(raccoon, mammal1);
Object.setPrototypeOf(platypus, mammal2);

function test(name, renderTarget) {
    document.addEventListener("keydown", event => { // не идеально, но просто для удобства
        const key = event.key;

        switch (key) {
            case "ArrowRight": {
                name.runRight();
                name.render(renderTarget);
                break;
            }
            case "ArrowLeft": {
                name.runLeft();
                name.render(renderTarget);
                break;
            }
            case "ArrowDown": {
                name.jumpDown();
                name.render(renderTarget);
                break;
            }
            case "ArrowUp": {
                name.jumpUp();
                name.render(renderTarget);
                break;
            }
            default: break;
        }
    })
}

document.addEventListener("keydown", event => {
    if (event.key.toLowerCase() === "r") {
        test(raccoon, span4);
    }
});

//
console.log(`Raccoon produces milk: ${raccoon.producesMilk()}`);
console.log(`Platypus produces milk: ${platypus.producesMilk()}`);

//

console.log(platypus);
raccoon.steals(platypus, "eggs");
console.log(raccoon);
raccoon.steals(platypus, "eggs");
console.log(raccoon);
console.log(platypus);
raccoon.steals(platypus, "eggs");
raccoon.steals(platypus, "dog food");