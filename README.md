# Podologia & Terapias Integrativas

Site editorial responsivo em português brasileiro, com Next.js App Router, TypeScript e Tailwind CSS. Página estática renderizada no servidor; JavaScript de cliente somente para o menu móvel. FAQ com `details`/`summary` nativo.

## Executar

Requer Node.js 20.9 ou superior (validado com Node 24).

```sh
npm ci
npm run dev
```

Abra a porta 3000 no seu ambiente local. Para produção: `npm run build` e `npm run start`.

## Verificar

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Os testes usam Chromium em `/usr/bin/chromium` neste ambiente. Em outro sistema, ajuste `executablePath` em `playwright.config.ts` ou remova a opção e execute `npx playwright install chromium`.

Os testes cobrem cinco larguras (360, 390, 768, 1024 e 1440), semântica, contraste via axe, overflow, âncoras, erros JavaScript, menu por teclado/Escape e FAQ. Capturas são geradas em `test-results/`.

## Informações reais antes da publicação

Edite `lib/site.ts`: nome da clínica; nome, biografia e formação da profissional; serviços confirmados; WhatsApp brasileiro com código 55, telefone, e-mail, endereço, horários, redes e fotografias autorizadas. Dados desconhecidos permanecem ausentes. A interface adapta contato, serviços e apresentação sem inventar conteúdo. O nome atual é apenas a descrição das áreas de atuação.

Fotografias locais podem ser colocadas em `public/` e referenciadas por caminhos como `/clinica.jpg`. Para imagens remotas, configure domínios confiáveis em `next.config.ts` antes do uso. Não há envio de formulário, agenda, pagamento, rastreamento, domínio/canonical ou dados estruturados de empresa.

## Design e ativos

Referências fornecidas pelo usuário: `seed-DESIGN.md` e briefing de implementação. Inspiração visual: https://seed.com — apenas linguagem visual, sem uso de marca, textos ou ativos proprietários.

Ilustração botânica e símbolo: SVGs originais em `components/botanical.tsx` e `components/icons.tsx`. Fontes Inter e IBM Plex Mono servidas localmente pelos pacotes Fontsource, sob licença SIL OFL 1.1 incluída nos respectivos pacotes. Sem fontes comerciais ou imagens externas.

## Links úteis

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS/PostCSS: https://tailwindcss.com/docs/installation/using-postcss
- Padrão de disclosure acessível: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- Inter e licença: https://github.com/rsms/inter
- IBM Plex e licença: https://github.com/IBM/plex
- Playwright: https://playwright.dev/docs/intro

As páginas de documentação Next.js, Tailwind e W3C foram bloqueadas pela política de saída da sessão; os links são referências oficiais e não são apresentados como conteúdo consultado. As dependências foram obtidas pelo registro oficial npm.

O projeto não inclui deploy automático. O envio ao GitHub não publica o site na web.
