# Sueli A. Rodrigues — Terapeuta Integrativa

Site responsivo em português com visual inspirado na referência 2.AG: teal profundo, menta vivo, Inter Tight, animação interativa dos pés e identidade da profissional em creme e dourado.

## Agendamento

O agendamento é exclusivamente pelo **WhatsApp (11) 99585-7781**. Os botões dos cuidados abrem uma mensagem correspondente ao serviço. O usuário confirma o envio no WhatsApp; o site não envia mensagens automaticamente.

- Instagram: [@sueliarodrigues.terapeuta](https://www.instagram.com/sueliarodrigues.terapeuta/).
- Atendimento a domicílio na Zona Sul de São Paulo.
- O formulário tradicional e o painel local foram retirados a pedido do usuário.
- Esta versão não grava novos pedidos no navegador; dados antigos não são apagados automaticamente.

## Abrir sem terminal

Baixe este repositório pelo botão **Code → Download ZIP**, extraia a pasta e abra **ABRIR-SITE.html** com dois cliques no navegador. Ele contém as imagens, fontes, estilos e JavaScript. Não precisa de Node.js ou servidor para visualizar; WhatsApp e Instagram precisam de conexão.

## Desenvolver

Requer Node.js 20.19+ ou 22.12+.

```sh
npm ci
npm run dev
```

O endereço `http://localhost:5173` funciona no computador onde o servidor está rodando. Não aponta para outra máquina na nuvem.

```sh
npm run build
npm run preview
npm run export:local
```

A exportação em `dist-local/` oferece `ABRIR-SITE.html`, servidor Node sem dependências e iniciador Windows `INICIAR-LOCALHOST.bat`. O HTML abre sem instalações; o iniciador localhost requer Node.js. Mantenha a janela do servidor aberta.

## Verificação

Com Vite rodando, execute `npm test`. Os testes Playwright usam Chromium em `/usr/bin/chromium` ou `CHROMIUM_PATH` e verificam WhatsApp, remoção do formulário/painel, imagens, ampliação, menu móvel, filtros e movimento reduzido.

Para testar a exportação: execute `PORT=5174 node dist-local/servidor.mjs` e, em outra sessão, `npm run test:export`. A exportação é validada com rede desligada depois de abrir. O Chromium gerenciado bloqueia `file://`, portanto a abertura direta nesse protocolo não foi testada aqui. O iniciador Windows também não foi executado neste ambiente Linux.

## Artes

As quatro artes — contato, apresentação, terapias e logo — foram **recriadas com IA a partir das referências enviadas pelo usuário**, com a maior proximidade possível. São aproximações, não arquivos originais. O retrato é uma recriação da referência. Clique nas artes para ampliar.

Inter Tight: fonte do repositório oficial Google Fonts, licença em `public/fonts/OFL-InterTight.txt`. A fotografia de cuidado podológico é ilustrativa. Os materiais informativos não substituem avaliação profissional. Não foi criado um link de avaliações Google porque o endereço não foi fornecido.
