"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./icons";
const content = [
  {
    id: "podologia",
    label: "Podologia",
    title: "A base de cada passo.",
    text: "Atenção às necessidades dos pés, avaliação individual e orientações para o cuidado no dia a dia.",
    note: "As possibilidades de atendimento são definidas a partir de uma avaliação individual.",
  },
  {
    id: "terapias",
    label: "Terapias integrativas",
    title: "Um espaço para você.",
    text: "Práticas complementares de acolhimento e bem-estar, com respeito à individualidade e ao seu momento.",
    note: "As modalidades disponíveis serão confirmadas pela profissional. Práticas complementares não substituem acompanhamento médico quando necessário.",
  },
];
export function CareExplorer() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const syncHash = () => {
      const index = content.findIndex(
        (item) => location.hash === `#explorar-${item.id}`,
      );
      if (index >= 0) setSelected(index);
    };
    const frame = requestAnimationFrame(syncHash);
    addEventListener("hashchange", syncHash);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("hashchange", syncHash);
    };
  }, []);
  const active = content[selected];
  return (
    <div className="care-explorer">
      <span id="explorar-podologia" className="tab-anchor" aria-hidden="true" />
      <span id="explorar-terapias" className="tab-anchor" aria-hidden="true" />
      <div
        role="tablist"
        aria-label="Conheça os eixos de cuidado"
        className="care-tabs"
      >
        {content.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            id={`tab-${item.id}`}
            role="tab"
            aria-selected={selected === i}
            aria-controls={`panel-${item.id}`}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(event) => {
              let next: number | undefined;
              if (event.key === "ArrowRight" || event.key === "ArrowLeft")
                next = 1 - selected;
              if (event.key === "Home") next = 0;
              if (event.key === "End") next = 1;
              if (next !== undefined) {
                event.preventDefault();
                setSelected(next);
                buttons.current[next]?.focus();
              }
            }}
          >
            {item.label}
            <span aria-hidden="true">0{i + 1}</span>
          </button>
        ))}
      </div>
      {content.map((item, i) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`panel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={selected !== i}
          tabIndex={0}
        >
          <p className="eyebrow">UM OLHAR INDIVIDUAL</p>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <p className="small-copy muted">{item.note}</p>
          <a className="text-link" href="#contato">
            Conversar sobre o cuidado <Arrow />
          </a>
        </div>
      ))}
      <span className="explorer-caption" aria-hidden="true">
        {active.id === "podologia"
          ? "ATENÇÃO EM CADA PASSO."
          : "PRESENÇA EM CADA ENCONTRO."}
      </span>
    </div>
  );
}
