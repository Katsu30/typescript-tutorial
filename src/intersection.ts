export{};

type Pitcher1 = {
    throwingSpeed: number;
};
 type Batter1 = {
    battingAverage: number;
}

const Sasaki: Pitcher1 = {
    throwingSpeed: 154
};

const Ochiai: Batter1 = {
    battingAverage: 0.367
};

// 既存の型から新しいエイリアスを設定できる
// intersection型
type TwoWayPlayer = Pitcher1 & Batter1;

const Ohtani: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
};