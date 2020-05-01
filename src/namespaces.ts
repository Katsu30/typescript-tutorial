export{};

// 名前空間は'namespace'を書いて表現する
namespace Japanese {
    // namespaceの外からアクセスできるようにするためにexportを宣言する
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {
            }
        }
    }
    // ネストされたnamespaceも同じように表現できる
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {
            }
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {
        }
    }
}

// namespaceも追加してクラス宣言をする
const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const micheal = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(micheal);