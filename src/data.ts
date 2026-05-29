
export enum Suit {
  Spade = 1,
  Heart = 2,
  Club = 3,
  Diamond = 4
}

export const SuitNames: Record<Suit, string> = {
  [Suit.Spade]: '黑桃',
  [Suit.Heart]: '红桃',
  [Suit.Club]: '梅花',
  [Suit.Diamond]: '方片'
};

export const RankNames: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export interface Card {
  suit: Suit;
  rank: number; // 1-13
}

// User-provided stack (Mnemonica variant)
export const MNEMONICA_STACK: Card[] = [
  { suit: Suit.Club, rank: 4 },    // 梅花4
  { suit: Suit.Heart, rank: 2 },   // 红桃2
  { suit: Suit.Diamond, rank: 7 }, // 方片7
  { suit: Suit.Club, rank: 3 },    // 梅花3
  { suit: Suit.Heart, rank: 4 },   // 红桃4
  { suit: Suit.Diamond, rank: 6 }, // 方片6
  { suit: Suit.Spade, rank: 1 },   // 黑桃A
  { suit: Suit.Heart, rank: 5 },   // 红桃5
  { suit: Suit.Spade, rank: 9 },   // 黑桃9
  { suit: Suit.Spade, rank: 2 },   // 黑桃2
  { suit: Suit.Heart, rank: 12 },  // 红桃Q (红心Q)
  { suit: Suit.Diamond, rank: 3 }, // 方片3
  { suit: Suit.Club, rank: 12 },   // 梅花Q
  { suit: Suit.Heart, rank: 8 },   // 红桃8
  { suit: Suit.Spade, rank: 6 },   // 黑桃6
  { suit: Suit.Spade, rank: 5 },   // 黑桃5
  { suit: Suit.Heart, rank: 9 },   // 红桃9
  { suit: Suit.Club, rank: 13 },   // 梅花K
  { suit: Suit.Diamond, rank: 2 }, // 方片2
  { suit: Suit.Heart, rank: 11 },  // 红桃J
  { suit: Suit.Spade, rank: 3 },   // 黑桃3
  { suit: Suit.Spade, rank: 8 },   // 黑桃8
  { suit: Suit.Heart, rank: 6 },   // 红桃6
  { suit: Suit.Club, rank: 10 },   // 梅花10
  { suit: Suit.Diamond, rank: 5 }, // 方片5
  { suit: Suit.Diamond, rank: 13 },// 方片K
  { suit: Suit.Club, rank: 2 },    // 梅花2
  { suit: Suit.Heart, rank: 3 },   // 红桃3
  { suit: Suit.Diamond, rank: 8 }, // 方片8
  { suit: Suit.Club, rank: 5 },    // 梅花5
  { suit: Suit.Spade, rank: 13 },  // 黑桃K
  { suit: Suit.Diamond, rank: 11 },// 方片J
  { suit: Suit.Club, rank: 8 },    // 梅花8
  { suit: Suit.Spade, rank: 10 },  // 黑桃10
  { suit: Suit.Heart, rank: 13 },  // 红桃K
  { suit: Suit.Club, rank: 11 },   // 梅花J
  { suit: Suit.Spade, rank: 7 },   // 黑桃7
  { suit: Suit.Heart, rank: 10 },  // 红桃10
  { suit: Suit.Diamond, rank: 1 }, // 方片A
  { suit: Suit.Spade, rank: 4 },   // 黑桃4
  { suit: Suit.Heart, rank: 7 },   // 红桃7
  { suit: Suit.Diamond, rank: 4 }, // 方片4
  { suit: Suit.Club, rank: 1 },    // 梅花A
  { suit: Suit.Club, rank: 9 },    // 梅花9
  { suit: Suit.Spade, rank: 11 },  // 黑桃J
  { suit: Suit.Diamond, rank: 12 },// 方片Q
  { suit: Suit.Club, rank: 7 },    // 梅花7
  { suit: Suit.Spade, rank: 12 },  // 黑桃Q
  { suit: Suit.Diamond, rank: 10 },// 方片10
  { suit: Suit.Club, rank: 6 },    // 梅花6
  { suit: Suit.Heart, rank: 1 },   // 红桃A
  { suit: Suit.Diamond, rank: 9 }, // 方片9
];
