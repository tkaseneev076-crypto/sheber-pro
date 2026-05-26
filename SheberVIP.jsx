import { useState } from "react";

const MASTERS = [
  {
    id: 1, name: "АЛМАС", surname: "БЕКЕНОВ", title: "МАСТЕР ПЛИТКИ",
    level: 47, rank: "ЛЕГЕНДА", color: "#FF6B00", glow: "rgba(255,107,0,0.5)",
    skills: [
      { name: "Плитка", val: 95 }, { name: "Керамогранит", val: 88 },
      { name: "Затирка", val: 92 }, { name: "Гидроизоляция", val: 78 },
    ],
    stats: { jobs: 312, rating: "4.9★", exp: "8 лет" },
    badges: ["🏆 ЛЕГЕНДА", "⚡ СКОРОСТЬ", "💎 КАЧЕСТВО"],
    helmetColor: "#FF6B00", suitColor: "#555", accentColor: "#FF6B00",
  },
  {
    id: 2, name: "СЕРИК", surname: "ЖАКСЫБЕКОВ", title: "ЭЛЕКТРИК ЭКСПЕРТ",
    level: 38, rank: "МАСТЕР", color: "#00D4FF", glow: "rgba(0,212,255,0.5)",
    skills: [
      { name: "Монтаж", val: 97 }, { name: "Щиты", val: 91 },
      { name: "Тёплый пол", val: 85 }, { name: "Диагностика", val: 89 },
    ],
    stats: { jobs: 198, rating: "4.8★", exp: "6 лет" },
    badges: ["⚡ ЭКСПЕРТ", "🔧 ТОЧНОСТЬ", "🛡️ НАДЁЖНОСТЬ"],
    helmetColor: "#00D4FF", suitColor: "#2a3a4a", accentColor: "#00D4FF",
  },
  {
    id: 3, name: "ДАМИР", surname: "СЕЙТКАЛИ", title: "МАЛЯР ПРОФИ",
    level: 29, rank: "ПРОФИ", color: "#00FF88", glow: "rgba(0,255,136,0.5)",
    skills: [
      { name: "Покраска", val: 93 }, { name: "Штукатурка", val: 87 },
      { name: "Шпаклёвка", val: 90 }, { name: "Обои", val: 82 },
    ],
    stats: { jobs: 145, rating: "4.7★", exp: "4 года" },
    badges: ["🖌️ АРТИСТ", "✨ ЧИСТОТА", "🎯 ТОЧНОСТЬ"],
    helmetColor: "#00FF88", suitColor: "#1a3a2a", accentColor: "#00FF88",
  },
];

function Builder({ color, helmetColor, suitColor, accentColor }) {
  return (
    <svg viewBox="0 0 200 420" width="200" height="420" style={{filter:`drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color}88)`}}>
      {/* HELMET */}
      <ellipse cx="100" cy="52" rx="34" ry="12" fill={helmetColor} opacity="0.9"/>
      <rect x="68" y="44" width="64" height="8" rx="4" fill={helmetColor}/>
      {/* HEAD */}
      <rect x="76" y="52" width="48" height="42" rx="10" fill="#C8A882"/>
      {/* VISOR/GLASSES */}
      <rect x="80" y="62" width="40" height="12" rx="4" fill={accentColor} opacity="0.7"/>
      <rect x="82" y="63" width="16" height="10" rx="3" fill={accentColor} opacity="0.4"/>
      <rect x="102" y="63" width="16" height="10" rx="3" fill={accentColor} opacity="0.4"/>
      {/* EAR PROTECTION */}
      <circle cx="76" cy="68" r="8" fill="#333"/>
      <circle cx="76" cy="68" r="5" fill={accentColor} opacity="0.8"/>
      <circle cx="124" cy="68" r="8" fill="#333"/>
      <circle cx="124" cy="68" r="5" fill={accentColor} opacity="0.8"/>
      {/* NECK */}
      <rect x="92" y="92" width="16" height="10" fill="#C8A882"/>
      {/* BODY / SUIT */}
      <rect x="62" y="100" width="76" height="110" rx="8" fill={suitColor}/>
      {/* CHEST PLATE */}
      <rect x="72" y="108" width="56" height="50" rx="6" fill="#333" opacity="0.8"/>
      <rect x="76" y="112" width="48" height="12" rx="3" fill={accentColor} opacity="0.6"/>
      {/* BUILDER BADGE */}
      <rect x="76" y="128" width="48" height="16" rx="3" fill="#111"/>
      <text x="100" y="139" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" fontWeight="bold">SHEBER PRO</text>
      {/* CHEST TECH */}
      <circle cx="88" cy="162" r="6" fill="#111"/>
      <circle cx="88" cy="162" r="4" fill={accentColor} opacity="0.7"/>
      <rect x="96" y="158" width="24" height="8" rx="2" fill="#111"/>
      <rect x="98" y="160" width="8" height="4" rx="1" fill={accentColor} opacity="0.5"/>
      <rect x="108" y="160" width="10" height="4" rx="1" fill={accentColor} opacity="0.3"/>
      {/* BACKPACK STRAPS */}
      <rect x="62" y="104" width="8" height="80" rx="4" fill={accentColor} opacity="0.6"/>
      <rect x="130" y="104" width="8" height="80" rx="4" fill={accentColor} opacity="0.6"/>
      {/* LEFT ARM */}
      <rect x="38" y="102" width="24" height="75" rx="10" fill={suitColor}/>
      <rect x="38" y="104" width="6" height="70" rx="3" fill={accentColor} opacity="0.5"/>
      {/* LEFT HAND - holding tool */}
      <rect x="36" y="175" width="28" height="18" rx="8" fill="#C8A882"/>
      <rect x="34" y="188" width="32" height="6" rx="3" fill="#444"/>
      <rect x="32" y="194" width="36" height="40" rx="4" fill="#666"/>
      <rect x="34" y="196" width="8" height="36" rx="2" fill={accentColor} opacity="0.5"/>
      {/* RIGHT ARM */}
      <rect x="138" y="102" width="24" height="75" rx="10" fill={suitColor}/>
      <rect x="156" y="104" width="6" height="70" rx="3" fill={accentColor} opacity="0.5"/>
      {/* RIGHT HAND - pointing up */}
      <rect x="136" y="172" width="28" height="18" rx="8" fill="#C8A882"/>
      <rect x="144" y="160" width="12" height="16" rx="6" fill="#C8A882"/>
      {/* BELT */}
      <rect x="62" y="208" width="76" height="10" rx="4" fill="#222"/>
      <rect x="94" y="206" width="14" height="14" rx="3" fill={accentColor} opacity="0.8"/>
      {/* BELT POUCHES */}
      <rect x="64" y="220" width="18" height="22" rx="4" fill="#333"/>
      <rect x="66" y="222" width="14" height="18" rx="3" fill="#444"/>
      <rect x="120" y="220" width="18" height="22" rx="4" fill="#333"/>
      <rect x="122" y="222" width="14" height="18" rx="3" fill="#444"/>
      {/* LEGS */}
      <rect x="66" y="218" width="30" height="100" rx="8" fill={suitColor}/>
      <rect x="104" y="218" width="30" height="100" rx="8" fill={suitColor}/>
      {/* LEG TECH STRIPES */}
      <rect x="66" y="220" width="6" height="96" rx="3" fill={accentColor} opacity="0.5"/>
      <rect x="128" y="220" width="6" height="96" rx="3" fill={accentColor} opacity="0.5"/>
      {/* KNEE PADS */}
      <rect x="68" y="278" width="26" height="20" rx="6" fill="#222"/>
      <rect x="70" y="280" width="22" height="16" rx="4" fill={accentColor} opacity="0.4"/>
      <rect x="106" y="278" width="26" height="20" rx="6" fill="#222"/>
      <rect x="108" y="280" width="22" height="16" rx="4" fill={accentColor} opacity="0.4"/>
      {/* BOOTS */}
      <rect x="62" y="316" width="36" height="30" rx="6" fill="#222"/>
      <rect x="60" y="338" width="40" height="14" rx="6" fill="#1a1a1a"/>
      <rect x="62" y="318" width="8" height="28" rx="3" fill={accentColor} opacity="0.6"/>
      <rect x="100" y="316" width="36" height="30" rx="6" fill="#222"/>
      <rect x="98" y="338" width="40" height="14" rx="6" fill="#1a1a1a"/>
      <rect x="128" y="318" width="8" height="28" rx="3" fill={accentColor} opacity="0.6"/>
      {/* GLOW LINES ON SUIT */}
      <line x1="68" y1="210" x2="68" y2="316" stroke={accentColor} strokeWidth="1" opacity="0.3"/>
      <line x1="132" y1="210" x2="132" y2="316" stroke={accentColor} strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;600;700&family=Share+Tech+Mono&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{background:#060810;overflow:hidden;font-family:'Rajdhani',sans-serif;color:#E8F0FF;}
.app{width:100%;max-width:430px;height:100dvh;margin:0 auto;position:relative;overflow:hidden;background:#060810;}
.app::after{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.1) 3px,rgba(0,0,0,0.1) 4px);pointer-events:none;z-index:999;}
.bg-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px);background-size:40px 40px;}
.bg-glow{position:absolute;inset:0;transition:background 0.8s;}

/* CHARACTER */
.char-wrap{position:absolute;bottom:80px;left:50%;transform:translateX(-50%);z-index:5;animation:charFloat 3s ease-in-out infinite;}
@keyframes charFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-12px)}}
.scanline{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--c),transparent);opacity:0.4;z-index:6;animation:scan 3s linear infinite;}
@keyframes scan{0%{top:0%}100%{top:100%}}

/* PARTICLES */
.particle{position:absolute;width:2px;height:2px;border-radius:50%;z-index:4;animation:pf linear infinite;}
@keyframes pf{0%{opacity:0;transform:translateY(0)}10%{opacity:1}90%{opacity:0.8}100%{opacity:0;transform:translateY(-180px)}}

/* TOP */
.topbar{position:absolute;top:0;left:0;right:0;z-index:20;padding:44px 16px 10px;display:flex;justify-content:space-between;align-items:flex-start;}
.tb-logo{font-family:'Orbitron',sans-serif;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;}
.tb-logo span{color:var(--c);}
.vip-tag{background:linear-gradient(135deg,#FFD700,#FF8C00);border-radius:5px;padding:3px 10px;font-family:'Orbitron',sans-serif;font-size:9px;font-weight:900;color:#000;letter-spacing:2px;animation:vp 2s ease-in-out infinite;}
@keyframes vp{0%,100%{box-shadow:0 0 12px rgba(255,215,0,0.6)}50%{box-shadow:0 0 28px rgba(255,215,0,1)}}

/* CORNER */
.corner{position:absolute;width:18px;height:18px;z-index:20;}
.c-tl{top:42px;left:10px;border-top:2px solid;border-left:2px solid;}
.c-tr{top:42px;right:10px;border-top:2px solid;border-right:2px solid;}

/* LEFT STATS */
.stats-left{position:absolute;left:8px;top:50%;transform:translateY(-60%);z-index:20;display:flex;flex-direction:column;gap:7px;}
.sbox{background:rgba(6,8,16,0.82);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:7px 9px;min-width:60px;text-align:center;backdrop-filter:blur(10px);}
.sv{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;line-height:1.1;}
.sl{font-size:7px;color:#4A6080;letter-spacing:1px;font-family:'Share Tech Mono',monospace;margin-top:2px;}

/* RIGHT BADGES */
.badges-right{position:absolute;right:8px;top:50%;transform:translateY(-60%);z-index:20;display:flex;flex-direction:column;gap:7px;}
.bbox{background:rgba(6,8,16,0.82);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:5px 8px;backdrop-filter:blur(10px);}
.bt{font-size:8px;font-weight:700;letter-spacing:1px;font-family:'Share Tech Mono',monospace;white-space:nowrap;}

/* NAME */
.name-plate{position:absolute;bottom:192px;left:0;right:0;z-index:20;text-align:center;pointer-events:none;}
.n-rank{display:inline-block;border:1px solid var(--c);border-radius:4px;padding:2px 12px;font-family:'Orbitron',sans-serif;font-size:9px;letter-spacing:3px;margin-bottom:5px;background:rgba(0,0,0,0.7);color:var(--c);}
.n-name{font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;color:#fff;text-shadow:0 0 24px var(--c);letter-spacing:1px;line-height:1.1;}
.n-title{font-size:11px;color:#4A6080;letter-spacing:3px;text-transform:uppercase;margin-top:3px;}
.n-lvl{font-family:'Orbitron',sans-serif;font-size:12px;margin-top:5px;color:var(--c);}

/* SKILLS BTN */
.skills-toggle{position:absolute;bottom:192px;right:16px;z-index:25;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:7px 11px;cursor:pointer;backdrop-filter:blur(10px);transition:all 0.2s;}
.skills-toggle:active{background:rgba(0,0,0,0.8);}
.st-txt{font-family:'Orbitron',sans-serif;font-size:8px;color:rgba(255,255,255,0.7);letter-spacing:1px;}

/* SKILLS PANEL */
.skills-panel{position:absolute;left:0;right:0;bottom:0;z-index:30;background:linear-gradient(180deg,transparent 0%,rgba(6,8,16,0.96) 12%,rgba(6,8,16,0.99) 100%);padding:36px 16px 100px;transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);}
.skills-panel.h{transform:translateY(100%);}
.skills-panel.v{transform:translateY(0);}
.sp-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
.sp-ttl{font-family:'Orbitron',sans-serif;font-size:9px;color:#4A6080;letter-spacing:3px;}
.sp-close{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);border-radius:6px;padding:4px 10px;font-family:'Orbitron',sans-serif;font-size:9px;color:#fff;cursor:pointer;letter-spacing:1px;}
.sk-row{margin-bottom:10px;}
.sk-top{display:flex;justify-content:space-between;margin-bottom:4px;}
.sk-name{font-size:13px;font-weight:600;color:#E8F0FF;}
.sk-val{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:700;}
.sk-bar{height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;}
.sk-fill{height:100%;border-radius:2px;position:relative;}
.sk-fill::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 60%,rgba(255,255,255,0.3));}

/* BOTTOM */
.bot{position:absolute;bottom:0;left:0;right:0;z-index:25;padding:8px 14px 26px;background:linear-gradient(0deg,rgba(6,8,16,1) 60%,transparent);}
.sel-row{display:flex;gap:7px;margin-bottom:10px;overflow-x:auto;}
.sel-row::-webkit-scrollbar{display:none;}
.sel-btn{flex-shrink:0;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:6px 12px;cursor:pointer;font-family:'Orbitron',sans-serif;font-size:9px;color:rgba(255,255,255,0.45);letter-spacing:1px;white-space:nowrap;transition:all 0.3s;}
.sel-btn.a{border-color:var(--c);color:var(--c);background:rgba(255,107,0,0.08);box-shadow:0 0 10px rgba(255,107,0,0.15);}
.hire-btn{width:100%;background:linear-gradient(135deg,var(--c),rgba(255,107,0,0.6));border:none;border-radius:11px;padding:15px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;color:#000;cursor:pointer;letter-spacing:2px;box-shadow:0 0 20px var(--glow);transition:all 0.2s;}
.hire-btn:active{transform:scale(0.98);}
`;

export default function SheberVIP() {
  const [active, setActive] = useState(0);
  const [showSkills, setShowSkills] = useState(false);
  const m = MASTERS[active];

  const pts = Array.from({length:10},(_,i)=>({
    left:`${5+i*10}%`, bottom:`${70+i*5}px`,
    delay:`${i*0.3}s`, dur:`${1.6+i*0.25}s`,
  }));

  return (
    <>
      <style>{css}</style>
      <div className="app" style={{"--c":m.color,"--glow":m.glow}}>
        <div className="bg-grid"/>
        <div className="bg-glow" style={{background:`radial-gradient(ellipse at 50% 40%,${m.glow} 0%,transparent 65%)`}}/>
        <div className="scanline"/>

        {pts.map((p,i)=>(
          <div key={i} className="particle" style={{left:p.left,bottom:p.bottom,animationDelay:p.delay,animationDuration:p.dur,background:m.color,boxShadow:`0 0 4px ${m.color}`}}/>
        ))}

        {/* CHARACTER */}
        <div className="char-wrap">
          <Builder color={m.color} helmetColor={m.helmetColor} suitColor={m.suitColor} accentColor={m.accentColor}/>
        </div>

        <div className="corner c-tl" style={{borderColor:m.color}}/>
        <div className="corner c-tr" style={{borderColor:m.color}}/>

        <div className="topbar">
          <div className="tb-logo">SHEBER<span>.</span>PRO</div>
          <div className="vip-tag">VIP</div>
        </div>

        <div className="stats-left">
          {[{val:m.stats.jobs,lbl:"ЗАКАЗОВ"},{val:m.stats.rating,lbl:"РЕЙТИНГ"},{val:m.stats.exp,lbl:"ОПЫТ"}].map((s,i)=>(
            <div key={i} className="sbox">
              <div className="sv" style={{color:m.color}}>{s.val}</div>
              <div className="sl">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="badges-right">
          {m.badges.map((b,i)=>(
            <div key={i} className="bbox">
              <div className="bt" style={{color:m.color}}>{b}</div>
            </div>
          ))}
        </div>

        <div className="name-plate">
          <div className="n-rank">◆ {m.rank}</div>
          <div className="n-name">{m.name}<br/>{m.surname}</div>
          <div className="n-title">{m.title}</div>
          <div className="n-lvl">▸ LVL.{m.level}</div>
        </div>

        {!showSkills && (
          <button className="skills-toggle" onClick={()=>setShowSkills(true)}>
            <div className="st-txt">⚡ НАВЫКИ</div>
          </button>
        )}

        <div className={`skills-panel ${showSkills?"v":"h"}`}>
          <div className="sp-hdr">
            <span className="sp-ttl">// НАВЫКИ</span>
            <button className="sp-close" onClick={()=>setShowSkills(false)}>✕ ЗАКРЫТЬ</button>
          </div>
          {m.skills.map((sk,i)=>(
            <div key={i} className="sk-row">
              <div className="sk-top">
                <span className="sk-name">{sk.name}</span>
                <span className="sk-val" style={{color:m.color}}>{sk.val}</span>
              </div>
              <div className="sk-bar">
                <div className="sk-fill" style={{width:`${sk.val}%`,background:`linear-gradient(90deg,${m.color}55,${m.color})`,boxShadow:`0 0 6px ${m.color}`}}/>
              </div>
            </div>
          ))}
        </div>

        <div className="bot">
          <div className="sel-row">
            {MASTERS.map((ms,i)=>(
              <button key={ms.id} className={`sel-btn ${active===i?"a":""}`} style={active===i?{"--c":ms.color}:{}} onClick={()=>{setActive(i);setShowSkills(false);}}>
                {ms.name} · LVL{ms.level}
              </button>
            ))}
          </div>
          <button className="hire-btn">⚡ НАНЯТЬ МАСТЕРА</button>
        </div>
      </div>
    </>
  );
}
