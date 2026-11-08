import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173');await page.getByRole('heading',{name:'Auriculoterapia. Laserterapia. Cuidado com você.'}).waitFor();
 assert.equal(await page.locator('form,#booking-form,[data-panel],.panel-button').count(),0);
 const primary=page.locator('.header-actions>a');assert.equal(await primary.getAttribute('href'),'https://wa.me/5511995857781');assert.equal(await primary.getAttribute('target'),'_blank');
 const careLink=page.locator('[data-book="auriculoterapia"]');const url=new URL(await careLink.getAttribute('href'));assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/5511995857781');assert.match(url.searchParams.get('text'),/auriculoterapia/);
 assert.match(await page.locator('#agendamento').innerText(),/99585-7781/);
 await page.locator('.point-controls [data-point="1"]').click();assert.match(await page.locator('.point-content h3').innerText(),/Laserterapia/);
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:5173');await page.getByRole('button',{name:'Abrir menu'}).click();assert.ok(await page.locator('.mobile-nav').evaluate(nav=>nav.contains(document.activeElement)));
 for(let n=0;n<8;n++){await page.keyboard.press('Tab');assert.ok(await page.evaluate(()=>document.activeElement.closest('.mobile-nav,.menu-button')!==null));}
 await page.locator('.mobile-nav a[href="#cuidados"]').click();assert.equal(await page.locator('.mobile-nav').count(),0);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await page.getByRole('tab',{name:'Nossas terapias',exact:true}).click();assert.equal(await page.locator('.service-card:visible').count(),2);
 await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.scan-line').first().evaluate(el=>getComputedStyle(el).animationName),'none');
 assert.deepEqual(errors,[]);console.log('PASS: agendamento exclusivo via WhatsApp, mensagem por cuidado, sem formulário/painel, menu móvel, filtros e movimento reduzido');
}finally{await browser.close()}
