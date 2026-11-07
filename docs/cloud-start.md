# Inicialização na nuvem

Use o checkout existente em `/workspace/podologa`. Cada tarefa já possui ambiente isolado; não crie um worktree sem solicitação explícita.

Node.js >=20.9, validado com 24. Execute `npm ci --cache /tmp/podologa-npm` se necessário. Inicie `npm run dev` na pasta do projeto. Valide internamente uma resposta HTTP 200 da porta 3000 e o título da página. Processos precisam ser reiniciados após restauração de snapshot.

Verificações: `npm run lint`, `npm run typecheck`, `npm run build`, `npm run test:e2e`. Os testes deste ambiente usam Chromium em `/usr/bin/chromium`.

Dados reais em `lib/site.ts`. Não invente informações profissionais ou contatos. Não publique sem solicitação.

A tentativa de salvar `install_script` e `start_skill` no rascunho da plataforma retornou INVALID_ARGUMENT; a persistência desses campos não foi confirmada. Estes arquivos preservam as instruções no projeto, mas não substituem a configuração de inicialização da plataforma.
