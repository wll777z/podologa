# Podologia & Terapias Integrativas

Site em português brasileiro com Next.js App Router, TypeScript e Tailwind CSS. Identidade clínico-botânica baseada na referência fornecida em `docs/design/seed-reference.md`, adaptada a podologia e terapias integrativas. Sem cópia de marca ou ativos da Seed.

## Executar

Node.js >=20.9 (validado em Node 24).

```sh
npm ci
npm run dev
```

Acesso local: http://localhost:3000. Para testar a versão otimizada:

```sh
npm run build
npm run start
```

## Verificações

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Os testes cobrem 360, 390, 768, 1024 e 1440px, overflow, axe/WCAG, âncoras, teclado e Escape no menu, FAQ nativo, abas com setas/Home/End, movimento reduzido e conteúdo sem JavaScript. O teste usa `/usr/bin/chromium` neste ambiente; em outro sistema ajuste `executablePath` em `playwright.config.ts` ou remova a opção e execute `npx playwright install chromium`.

## Estrutura

- `app/page.tsx`: conteúdo renderizado no servidor.
- `app/globals.css`: tokens, composição e responsividade.
- `components/header.tsx`: navegação móvel acessível.
- `components/care-explorer.tsx`: abas dos eixos de cuidado.
- `components/motion.tsx`: entrada editorial, parallax e progressão da ilustração durante a rolagem.
- `components/study.tsx`: ilustração vetorial original.
- `lib/site.ts`: dados tipados da clínica, profissional, serviços e contato.

## Informações para preencher antes de publicar

Configure em `lib/site.ts` somente dados reais: nome da clínica; nome, biografia e formação profissional; serviços confirmados; WhatsApp com código 55; telefone; e-mail; endereço; horários; fotografias e redes sociais autorizadas. O nome exibido é descritivo e não representa uma marca confirmada. Dados ausentes são tratados na interface; não existem formulário simulado, agenda, pagamento, depoimentos ou qualificações inventadas.

Imagens locais ficam em `public/`. Para imagens remotas configure `images.remotePatterns` antes de utilizá-las. Domínio, canonical e dados estruturados não foram inventados.

## Movimento e acessibilidade

APIs nativas de animação e IntersectionObserver; sem nova biblioteca de animação. No desktop, o estudo visual permanece fixo ao lado dos três estágios de atendimento e acompanha a rolagem. No celular, o conteúdo segue o fluxo da página. Não há captura da rolagem ou animações infinitas automáticas. Preferência de movimento reduzido é respeitada inclusive quando muda durante a visita. Conteúdo não é escondido por CSS antes da hidratação.

O site Seed retornou bloqueio de rede HTTP 403 nesta sessão. A composição segue o arquivo enviado; as animações são originais, sem promessa de equivalência exata ao site externo.

## Ativos e referências

- `public/images/cuidado-editorial.png`: imagem original gerada por IA para este projeto, uma escultura conceitual de pé em vidro fosco com eucalipto. É ilustrativa e não retrata clínica, profissional ou resultado real.
- SVGs em `components/icons.tsx` e `components/study.tsx`: originais.
- Inter e IBM Plex Mono: Fontsource local, licença SIL OFL 1.1 incluída nos pacotes.
- Referência visual fornecida: https://seed.com.
- Next.js: https://nextjs.org/docs/app.
- Abas acessíveis: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/.

Enviar ao GitHub não realiza deploy na web.
