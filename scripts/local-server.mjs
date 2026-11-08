import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
const port = Number(process.env.PORT || 5173);
const file = new URL('./ABRIR-SITE.html', import.meta.url);
const server = createServer(async (req, res) => {
 if (req.url === '/favicon.ico') { res.writeHead(204); return res.end(); }
 if (req.url !== '/' && req.url !== '/ABRIR-SITE.html') { res.writeHead(404); return res.end('Pagina nao encontrada.'); }
 try {
  const html = await readFile(file);
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-store'});
  if (req.method === 'HEAD') res.end(); else res.end(html);
 } catch {
  res.writeHead(500); res.end('Extraia todo o ZIP antes de iniciar o servidor.');
 }
});
server.on('error', error => {
 console.error(error.code === 'EADDRINUSE' ? `A porta ${port} ja esta em uso. Feche o outro servidor ou defina PORT para outra porta.` : error.message);
 process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
 const url = `http://localhost:${port}`;
 console.log(`Site disponivel em ${url}\nMantenha esta janela aberta. Pressione Ctrl+C para encerrar.`);
 if (process.argv.includes('--open') && process.platform === 'win32') {
  const child = spawn('explorer.exe', [url], {detached:true, stdio:'ignore'});
  child.on('error', () => console.log(`Abra ${url} no navegador.`));
  child.unref();
 }
});
