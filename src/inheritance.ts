export{};

class Animal {
    constructor(public name: string) {
    }
    run(): string {
        return 'I can run';
    }
}

// クラスの継承をするときは'extends <class名>'という形で宣言する
class Lion extends Animal {

    public speed: number;

    constructor(name: string, speed: number){
        super(name);

        this.speed = speed;
    }
    // TSではsuperの呼び出しが独特のところがあるので、確認が必要
    run(): string {
        return `${super.run()} ${this.speed}km.`;
    }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());