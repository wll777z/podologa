# Site de Podologia — Implementation Plan

**Goal:** Construir a presença digital editorial descrita nos anexos, sem dados profissionais fictícios.
**Architecture:** Next.js App Router; página majoritariamente renderizada no servidor, menu móvel interativo, FAQ nativo, configuração tipada e ilustração SVG original.
**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Playwright.
**Spec:** Texto colado.txt e seed-DESIGN.md enviados pelo usuário.

## Global Constraints
Paleta exata; títulos leves; sem sombras ou gradientes; sem contatos, serviços ou qualificações inventados. Sem deploy, pagamentos ou banco de dados. Dados ausentes devem ser tratados com honestidade. Usar checkout existente.

## Review Focus
Menu com teclado e Escape; nenhum overflow em cinco larguras; CTAs e âncoras válidos; contato ausente sem simulação; contraste e semântica acessíveis.

## Tasks
- [x] Criar configuração Next/TS/Tailwind e dados tipados; validar compilação.
- [x] Construir página editorial, arte botânica, menu e FAQ; verificar comportamento no navegador.
- [x] Executar lint, tipos, build e testes de acessibilidade/responsividade; corrigir falhas.
- [x] Documentar execução, fontes, referências e dados faltantes.

## Decisions
Execução direta solicitada pelo usuário, sem nova rodada de aprovação. Identificação genérica descritiva até fornecimento da marca. Sem fotografia disponível: SVG botânico original. Fontes locais distribuídas por Fontsource, sem dependência de Google Fonts em runtime.

## Verification
Lint sem avisos; TypeScript e build de produção aprovados; 7 testes Playwright aprovados, incluindo axe e cinco larguras. Falha inicial do teste de menu diagnosticada: seletor usava rótulo que muda ao abrir. Corrigido para aria-controls estável.

Revisão independente: nenhum bloqueador atual; textos de FAQ e primeiro contato foram ajustados para acompanhar dados configurados. Verificação final: lint, tipos, build e 7/7 Playwright aprovados após o ajuste.
