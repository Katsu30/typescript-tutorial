export{};

class VisaCard {
    // アクセス変数と同じようにreadonlyも変数宣言の前に記述する
    // 読み取り専用なので、値は更新できなくなっている

    // コンストラクタの初期引数もpublicかprivateの後にreadonlyで追加できる
    // (publicは省略することができるが、自明ではないため書くほうがベター)
    constructor(public readonly owner: string) {
    }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';