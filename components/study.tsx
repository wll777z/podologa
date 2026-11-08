export function Study() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="living-study"
      role="img"
      aria-label="Ilustração original de um pé, envolvido por linhas botânicas e círculos de estudo"
    >
      <g
        className="study-rings"
        fill="none"
        stroke="currentColor"
        strokeWidth=".6"
      >
        <circle cx="300" cy="300" r="250" />
        <circle cx="300" cy="300" r="215" strokeDasharray="2 8" />
        <ellipse
          cx="300"
          cy="300"
          rx="160"
          ry="250"
          transform="rotate(35 300 300)"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="160"
          ry="250"
          transform="rotate(-35 300 300)"
        />
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="study-foot"
      >
        <path
          pathLength="1"
          d="M247 450c-42-40-23-85 1-137 24-51 17-83 21-130 3-36 24-58 52-48 30 10 28 40 14 70-21 45-28 76-13 117 19 51 34 89 17 119-19 33-64 36-92 9Z"
        />
        <ellipse
          cx="354"
          cy="112"
          rx="20"
          ry="27"
          transform="rotate(20 354 112)"
        />
        <ellipse cx="312" cy="94" rx="13" ry="18" />
        <ellipse cx="281" cy="101" rx="10" ry="14" />
        <ellipse cx="256" cy="116" rx="8" ry="12" />
        <ellipse cx="238" cy="137" rx="7" ry="10" />
        <path d="M276 425c-13-32 16-66 15-103-1-35-11-61 6-99" />
      </g>
      <g
        className="study-branch"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          pathLength="1"
          d="M356 484c44-67 35-146 55-215 12-41 20-78 13-116"
        />
        <path d="M400 326c-37-12-51-44-41-79 33 16 48 43 41 79Zm10-52c35-9 55-36 53-68-34 6-53 34-53 68Zm-25 112c35-5 64-31 68-64-39 1-63 29-68 64Z" />
      </g>
      <g
        fill="currentColor"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
      >
        <text x="38" y="40">
          ESTUDO DO CUIDADO
        </text>
        <text x="38" y="570">
          CORPO · ESCUTA · EQUILÍBRIO
        </text>
        <text x="500" y="570">
          FIG. 01
        </text>
      </g>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M30 300h20m-10-10v20M550 300h20m-10-10v20" />
        <path d="M300 30v20m-10-10h20M300 550v20m-10-10h20" />
      </g>
    </svg>
  );
}
