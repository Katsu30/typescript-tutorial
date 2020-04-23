export{};

// Typeの後にエイリアスとして使用したい変数名を指定する
// エイリアスの先頭の文字は必ず大文字にするルール
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

// ここまでの知識でエイリアスを書くと以下のようになる
// 複雑になり、可読性が下がってしまう
const example1: {
    name: string;
    age: number;
} = {
    name: 'Ham',
    age: 43
};

// エイリアスとしてオブジェクトの値も設定することができる
type Profile = {
    name: string;
    age: number;
}

// エイリアスを使用した場合、可読性が上がる
const example2: Profile = {
    name: 'Ham',
    age: 43
};

// example1の型推論で取得できる型をそのままエイリアスに設定できる
// -> 何度も使用したい場合や、ソフトコーディングにできるため、実際の開発では多用するかも
// -> 仕様の変更などあった場合、運用がしやすくなる
type Profile2 = typeof example1;