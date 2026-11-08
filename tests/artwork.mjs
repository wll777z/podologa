import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto('http://127.0.0.1:5173');
 for(const asset of ['sueli-logo','sueli-sobre','sueli-terapias','sueli-contato']){
  const image=p.locator(`img[src="/images/${asset}.webp"]`).first();await image.scrollIntoViewIfNeeded();await image.evaluate(img=>img.decode());assert.ok(await image.evaluate(img=>img.naturalWidth>0));
 }
 assert.equal(await p.locator('.brand-logo').count(),2);
 await p.locator('#sobre .art-link').click();await p.getByRole('dialog').waitFor();await p.getByRole('button',{name:'Fechar imagem ampliada'}).click();assert.equal(await p.getByRole('dialog').count(),0);
 assert.match(await p.locator('#agendamento').innerText(),/99585-7781/);assert.equal(await p.locator('#agendamento a[href="https://wa.me/5511995857781"]').count(),1);
 await p.setViewportSize({width:390,height:844});await p.goto('http://127.0.0.1:5173');assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await p.locator('#terapias .art-link').click();await p.keyboard.press('Escape');assert.equal(await p.getByRole('dialog').count(),0);
 assert.deepEqual(errors,[]);console.log('PASS: quatro artes, logo, ampliação, contatos e celular');
}finally{await browser.close()}
