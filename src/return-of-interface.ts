export{};

class Mahotsukai {

}
class Souryo {

}

// TSでは多重継承はできない
// しかし、複数のインターフェイスは継承のような機能が'実装'できる
class Taro extends Mahotsukai {

}

interface Kenja {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

// インターフェイスの実装は'implements'を使用する
class Jiro implements Kenja, Senshi {
    ionazun(): void{
        console.log('ionazun');
    }
    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro;