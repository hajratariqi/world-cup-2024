// Direct Method per Object (without prototype)
function Cake(name) {
    this.name = name;
    this.showRecipe = function() {
        console.log(this.name + " ki recipe hai: Flour, Sugar, Eggs, Butter.");
    };
}

// 10000 cakes banate hain direct method ke saath
let cakes = [];
for (let i = 0; i < 10000; i++) {
    cakes.push(new Cake("Cake " + i));
}

// Prototype Method
function CakePrototype(name) {
    this.name = name;
}
CakePrototype.prototype.showRecipe = function() {
    console.log(this.name + " ki recipe hai: Flour, Sugar, Eggs, Butter.");
};

// 10000 cakes banate hain prototype method ke saath
let prototypeCakes = [];
for (let i = 0; i < 10000; i++) {
    prototypeCakes.push(new CakePrototype("Cake " + i));
}
