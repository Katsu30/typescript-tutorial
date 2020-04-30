export{};

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない


class MyNumberCard {
    // 慣習的にコンストラクタの値はアンダースコアを先頭につける
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number){
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    // getを先頭につけるとゲッター（読み取り専用の関数）になる
    get owner() {
        return this._owner;
    }

    // setを先頭につけるとセッター（書き込み可能な関数）になる
    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    // デバッグ用の関数
    debugPrint() {
        return `secretNumber: ${this._secretNumber}`
    }
}

let card = new MyNumberCard('はむさん', 1234567890);
console.log(card.owner);
console.log(card.debugPrint());

card.secretNumber = 12345;
console.log(card.debugPrint());

// getterやsetterは細かい参照や、更新を行う処理