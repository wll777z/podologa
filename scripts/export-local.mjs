import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');const out=resolve(root,'dist-local');await mkdir(out,{recursive:true});
const asset=async(path,mime)=>`data:${mime};base64,${(await readFile(resolve(root,'public',path))).toString('base64')}`;
let html=await readFile(resolve(root,'index.html'),'utf8');let css=await readFile(resolve(root,'src/style.css'),'utf8');
const imagePaths=[...new Set((html+'\n'+css).match(/\/images\/[A-Za-z0-9._-]+\.(?:webp|png|jpe?g)/g)||[])];
const assets=new Map(await Promise.all(imagePaths.map(async path=>[path,await asset(path.slice(1),path.endsWith('.webp')?'image/webp':path.endsWith('.png')?'image/png':'image/jpeg')])));
assets.set('/fonts/inter-tight.ttf',await asset('fonts/inter-tight.ttf','font/ttf'));
let js=await readFile(resolve(root,'src/main.js'),'utf8');
for(const [path,data] of assets){html=html.replaceAll(path,data);css=css.replaceAll(path,data);js=js.replaceAll(path,data);}
html=html.replace('<link rel="stylesheet" href="/src/style.css">',()=>`<style>${css}</style>`).replace('<script type="module" src="/src/main.js"></script>',()=>`<script>${js}</script>`);
await writeFile(resolve(out,'ABRIR-SITE.html'),html);
await copyFile(resolve(root,'scripts/local-server.mjs'),resolve(out,'servidor.mjs'));
await copyFile(resolve(root,'public/fonts/OFL-InterTight.txt'),resolve(out,'LICENCA-INTER.txt'));
await writeFile(resolve(out,'INICIAR-LOCALHOST.bat'),'@echo off\r\ncd /d "%~dp0"\r\nwhere node >nul 2>&1\r\nif errorlevel 1 (\r\n echo Para usar localhost, instale Node.js LTS em https://nodejs.org\r\n echo Ou abra ABRIR-SITE.html diretamente, sem instalar nada.\r\n pause\r\n exit /b 1\r\n)\r\nnode servidor.mjs --open\r\npause\r\n');
await writeFile(resolve(out,'LEIA-ME.txt'),`SUELI A. RODRIGUES — SITE COM AGENDAMENTO PELO WHATSAPP

COMO USAR NO WINDOWS
1. Extraia TODO o ZIP em uma pasta.
2. Para abrir sem instalar nada, clique em ABRIR-SITE.html.
3. Para usar http://localhost:5173, tenha Node.js LTS instalado (https://nodejs.org) e execute INICIAR-LOCALHOST.bat.
4. Mantenha a janela do servidor aberta enquanto navega.

AGENDAMENTO
WhatsApp: (11) 99585-7781.
Instagram: @sueliarodrigues.terapeuta.
Atendimento a domicilio na Zona Sul de Sao Paulo.
O formulario e o painel de agendamento tradicional foram retirados.
Os botoes abrem o WhatsApp com uma mensagem; voce precisa confirmar o envio no proprio WhatsApp.
O site nao armazena novos pedidos ou informacoes clinicas.
Dados de versoes anteriores nao sao apagados automaticamente do seu navegador.

IMAGENS
As quatro artes e a logo foram recriadas com IA a partir das imagens enviadas. Sao aproximacoes dos originais.
Clique nos materiais para ampliar sem sair do site.
Nao ha link de avaliacao Google porque esse endereco nao foi fornecido.

LOCALHOST
Localhost funciona no computador que executa o servidor. O localhost da nuvem nao e o localhost do seu PC.
O iniciador requer Node.js; o HTML direto nao requer instalacao.
`);
console.log('Site Sueli independente exportado para '+out);
