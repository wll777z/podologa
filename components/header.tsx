'use client';
import { useEffect, useRef, useState } from 'react';
import { Mark, Arrow } from './icons';
const links = [['Cuidados', '#cuidados'], ['Abordagem', '#abordagem'], ['Sobre', '#sobre'], ['Dúvidas', '#duvidas'], ['Contato', '#contato']];
export function Header({ name }: { name?: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: FocusEvent) => {
      if (!nav.current?.contains(event.target as Node) && event.target !== toggle.current) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('focusin', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('focusin', outside); };
  }, [open]);
  return <header className="site-header"><div className="header-inner wrap">
    <a className="brand" href="#inicio" aria-label={name ?? 'Podologia e Terapias Integrativas — início'}><Mark /><span>{name ?? <>Podologia<span className="brand-sub">& terapias integrativas</span></>}</span></a>
    <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fechar' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="navigation" ref={nav} aria-label="Navegação principal" className={open ? 'navigation is-open' : 'navigation'}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button header-cta" href="#contato" onClick={() => setOpen(false)}>Solicitar avaliação <Arrow /></a></nav>
  </div></header>;
}
