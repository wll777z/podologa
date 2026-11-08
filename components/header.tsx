"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow, Mark } from "./icons";
const links = [
  ["Cuidados", "#cuidados"],
  ["Abordagem", "#abordagem"],
  ["Sobre", "#sobre"],
  ["Dúvidas", "#duvidas"],
];
export function Header({ name }: { name?: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: FocusEvent) => {
      if (
        !nav.current?.contains(event.target as Node) &&
        event.target !== toggle.current
      )
        setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("focusin", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("focusin", outside);
    };
  }, [open]);
  return (
    <>
      <div className="announcement">
        <span className="seed-dot" /> Cuidado individualizado. Atenção por
        inteiro.
      </div>
      <header className="site-header">
        <div className="header-inner wrap">
          <a
            className="brand"
            href="#inicio"
            aria-label={name ?? "Podologia e terapias integrativas — início"}
          >
            <Mark />
            <span>
              {name ?? "podologia."}
              <small>& terapias integrativas</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-controls="navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            ref={toggle}
          >
            {open ? "Fechar" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <nav
            ref={nav}
            id="navigation"
            aria-label="Navegação principal"
            className={`navigation ${open ? "is-open" : ""}`}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="button header-cta"
              href="#contato"
              onClick={() => setOpen(false)}
            >
              Solicitar avaliação <Arrow />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
