export{};

class Me {
    // staticをつけることで、静的なプロパティになる
    static isProgrammer: boolean = true;
    static firstName: string = 'Atsushi';
    static lastName: string = 'Ishida';

    // メソッドも静的なものにすることができる
    static work() {
        // "Hey, guys! Are you interested in TypeScript?"
        // 静的なプロパティを文字列内で使用したいときは下記のように記述する
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript?`
    }
}

// 静的なプロパティには下記のようにはアクセスできない
// let me = new Me();
// console.log(me.isProgrammer);

// 静的なメンバーにはクラスに直接アクセスすることで取得できる
console.log(Me.isProgrammer);

// 静的なメソッドにも同じように取得できる
console.log(Me.work());
