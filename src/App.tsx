import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Info, Search, Layers } from 'lucide-react';
import { Suit, SuitNames, RankNames, MNEMONICA_STACK } from './data';

export default function App() {
  const [selectedSuit, setSelectedSuit] = useState<Suit>(Suit.Club);
  const [selectedRank, setSelectedRank] = useState<number>(4);
  const [selectedPos, setSelectedPos] = useState<number>(2);
  const [result, setResult] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateProbability = () => {
    if (isCalculating) return;
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      // Find the chosen card's position in the original stack (0-indexed index)
      const targetCardIndex = MNEMONICA_STACK.findIndex(
        (c) => c.suit === selectedSuit && c.rank === selectedRank
      );
      
      const k = targetCardIndex + 1; // 1-indexed position in stack
      const P = selectedPos; // desired final position (1-indexed)

      // n = (k - P + 52) % 52
      const n = (k - P + 52) % 52;

      // The new top card after cutting n cards starts at index n
      const cutCardIndex = n % 52;
      const cutCard = MNEMONICA_STACK[cutCardIndex];

      // Form the result: 0.XY0SR%
      const r1 = Math.floor(Math.random() * 9) + 1;
      const r2 = Math.floor(Math.random() * 10);
      
      // Special rule: if the card is already at the selected position (n = 0), use '99' suffix
      const suffix = n === 0 ? '99' : `${cutCard.suit}${cutCard.rank}`;
      const formattedResult = `0.${r1}${r2}0${suffix}%`;
      
      setResult(formattedResult);
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <div className="h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Top Disclaimer */}
      <div className="bg-red-50 text-red-600 text-[10px] py-1 px-4 text-center font-bold border-b border-red-100 shrink-0 z-30">
        数据仅供参考，请勿用于赌博。
      </div>

      {/* Header with Academic Branding */}
      <header className="bg-[#003E7E] text-white px-5 py-3 md:py-6 flex flex-col md:flex-row justify-between items-center shadow-md relative z-20 shrink-0">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h1 className="text-lg md:text-xl font-bold tracking-tight uppercase">浙江大学计算机科学与技术学院</h1>
          <p className="text-[9px] md:text-xs text-blue-100/80 font-medium tracking-widest uppercase">
            College of Computer Science and Technology, ZJU
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-[10px] md:text-sm font-semibold tracking-wide bg-blue-700/30 px-3 py-1 rounded-full border border-blue-400/20">
            概率计算实验室
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative p-3 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 transform -rotate-12 scale-150">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="text-4xl md:text-6xl font-black">
                {result || '0.07847%'}
              </div>
            ))}
          </div>
        </div>

        {/* Main Calculator Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white w-full max-w-lg rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200/60 flex flex-col overflow-hidden relative z-10"
        >
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 shrink-0">
            <h2 className="text-base md:text-xl font-bold text-slate-800 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#003E7E]" />
                扑克概率计算器
              </span>
              <span className="text-[9px] font-bold text-slate-400 bg-slate-200/50 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-tighter italic">
                PRB ENGINE
              </span>
            </h2>
          </div>

          <div className="p-5 md:p-8 space-y-5 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Target Card Selection */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Search className="w-3 h-3" />
                  目标牌面 (Target Card)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedSuit}
                    onChange={(e) => setSelectedSuit(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none appearance-none cursor-pointer transition-all"
                  >
                    {Object.entries(SuitNames).map(([id, name]) => (
                      <option key={id} value={id}>{name}</option>
                    ))}
                  </select>
                  <select
                    value={selectedRank}
                    onChange={(e) => setSelectedRank(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none appearance-none cursor-pointer transition-all"
                  >
                    {RankNames.map((name, index) => (
                      <option key={index + 1} value={index + 1}>{name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Target Position Selection */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Info className="w-3 h-3" />
                  目标位置 (Position 1-52)
                </label>
                <select
                  value={selectedPos}
                  onChange={(e) => setSelectedPos(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none appearance-none cursor-pointer transition-all"
                >
                  {Array.from({ length: 52 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      第 {num} 位
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              onClick={calculateProbability}
              disabled={isCalculating}
              className="w-full bg-[#003E7E] hover:bg-[#002e5e] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {isCalculating ? (
                  <motion.div
                    key="loader"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Calculator className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Calculator className="w-4 h-4" />
                )}
              </AnimatePresence>
              {isCalculating ? "同步中..." : "开始计算概率"}
            </button>

            <AnimatePresence mode="wait">
              {result && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center relative overflow-hidden"
                >
                  <p className="text-blue-900/60 font-semibold text-[8px] uppercase tracking-widest mb-1">
                    RESULTING PROBABILITY
                  </p>
                  <div className="text-3xl md:text-5xl font-black text-[#003E7E] font-mono tracking-tight">
                    {result}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Disclaimer Footer */}
        <div className="mt-4 text-slate-400 text-[9px] text-center leading-relaxed shrink-0">
          <p>© 2026 ZJU College of Computer Science and Technology.</p>
        </div>
      </main>
    </div>
  );
}
