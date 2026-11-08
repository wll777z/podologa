# Inicialização no ambiente de nuvem

Use o checkout existente em `/workspace/podologa`. A tarefa já tem ambiente isolado; não crie worktree sem pedido explícito.

Requer Node >=20.9 (validado com Node 24). Para instalar, `npm ci --cache /tmp/podologa-npm`. Execute `npm run build` e `npm run start` para servir a versão otimizada na porta 3000. Para desenvolvimento use `npm run dev`.

Valide a resposta HTTP 200 e o título por uma requisição local. Processos não sobrevivem à restauração de snapshot e precisam ser reiniciados. Testes: lint, typecheck, build e test:e2e; Chromium disponível em `/usr/bin/chromium`.

Dados reais em `lib/site.ts`. Não invente informações da clínica ou da profissional. Envio de código ao GitHub não faz deploy web.
