// Definição da classe Herói
class Hero {
    constructor(name, health, type) {
        this.name = name;
        this.health = health;
        this.type = type;
    }
// Método para mostrar informações do herói e suas ações
    mostraInfo() {
        return `Nome: ${this.name}, Vida: ${this.health}, Tipo: ${this.type}`;
    }
    
    heroAction() {
        let action;
        if (this.type === "Guerreiro") {
            action = "ataca com uma espada!";
        } else if (this.type === "Mago") {
            action = "lança uma magia!";
        } else if (this.type === "Ninja") {
            action = "Lança uma Shuriken!";
        }
        
        return `O herói ${this.name} ${action}`;
    }
    
    ExibirCompleto() {
        return `${this.mostraInfo()}\n${this.heroAction()}`; 
    }
    
} 

// Parte de Criação dos heróis e exibição das informações
let hero1 = new Hero("BaiacudeCueca", 150, "Guerreiro");
let hero2 = new Hero("Biriba", 90, "Mago");
let hero3 = new Hero("Gatuno", 100, "Ninja");

console.log(hero1.ExibirCompleto());
console.log(hero2.ExibirCompleto());
console.log(hero3.ExibirCompleto());

