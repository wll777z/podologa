// Ilustração vetorial original, criada para este projeto. Nenhum ativo da Seed.
export function Botanical({ variant = 'hero' }: { variant?: 'hero' | 'detail' }) {
  return <svg className={`botanical botanical-${variant}`} viewBox="0 0 600 700" role="img" aria-label="Estudo botânico original: ramos delicados e folhas em verde sobre um fundo claro">
    <defs><pattern id={`grain-${variant}`} width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".5" fill="#757c5d" opacity=".15" /><circle cx="7" cy="8" r=".4" fill="#757c5d" opacity=".12" /></pattern></defs>
    <rect width="600" height="700" fill="#eeeee9" /><rect width="600" height="700" fill={`url(#grain-${variant})`} />
    <circle cx="300" cy="320" r="221" fill="none" stroke="#c4c7c4" strokeWidth=".7" />
    <circle cx="300" cy="320" r="185" fill="none" stroke="#c4c7c4" strokeWidth=".5" strokeDasharray="2 7" />
    <path d="M292 645C322 531 268 450 309 335S360 172 329 79" fill="none" stroke="#1c3a13" strokeWidth="2" />
    <g fill="#698e79" fillOpacity=".22" stroke="#1c3a13" strokeWidth="1.1">
      <path d="M309 335C228 327 180 262 202 182c76 14 113 74 107 153Z" />
      <path d="M303 360c70-14 134-62 131-143-81 12-125 72-131 143Z" />
      <path d="M294 455c-93 6-159-55-164-138 83 8 148 58 164 138Z" />
      <path d="M302 498c75-9 143-46 163-128-88-1-150 55-163 128Z" />
      <path d="M340 228c-62-28-92-86-72-147 65 27 84 84 72 147Z" />
      <path d="M348 189c49-11 91-48 90-103-55 10-90 50-90 103Z" />
      <path d="M305 568c-77 1-126-34-146-100 74-5 132 39 146 100Z" />
    </g>
    <g fill="none" stroke="#1c3a13" strokeWidth=".7" opacity=".65">
      <path d="M309 335 202 182m107 153-62-22m28-29-48-12m20-28-38-11m94 127 131-143m-96 107 53-15m-28-14 46-15m-23-12 34-10M294 455 130 317m164 138-78-18m39-15-68-19m37-11-55-21m133 127 163-128m-122 96 58-10m-24-16 57-15m-31-6 40-18M340 228 268 81m72 147-48-37m39-1-47-41m64 40 90-103m-90 103 46-20m-25-5 43-30M305 568 159 468m146 100-68-7m25-22-55-5" />
      <path d="M102 590h105m-105 5v-10m105 10v-10M80 104h40m-20-20v40M487 559h40m-20-20v40" strokeWidth="1" />
      <path d="m204 182-57-34H87m348 68 54-25h50M159 468l-53 22H68" strokeDasharray="3 4" />
    </g>
    <g fill="#1c3a13"><circle cx="202" cy="182" r="3"/><circle cx="434" cy="217" r="3"/><circle cx="159" cy="468" r="3"/></g>
    <text x="45" y="49" fill="#1c3a13" fontSize="10" fontFamily="monospace" letterSpacing="2">ESTUDO BOTÂNICO / 01</text>
    <text x="45" y="663" fill="#1c3a13" fontSize="10" fontFamily="monospace" letterSpacing="1.5">NATUREZA. EQUILÍBRIO. CUIDADO.</text>
    <text x="492" y="663" fill="#1c3a13" fontSize="10" fontFamily="monospace">FIG. 01</text>
  </svg>;
}
