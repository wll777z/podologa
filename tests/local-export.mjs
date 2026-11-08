import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
try{
 const context=await browser.newContext();const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const response=await page.goto('http://127.0.0.1:5174');assert.equal(response.status(),200);assert.equal(await response.text(),await readFile('dist-local/ABRIR-SITE.html','utf8'));
 await page.locator('img').evaluateAll(async images=>{images.forEach(image=>image.loading='eager');await Promise.all(images.map(image=>image.decode()));});await context.setOffline(true);
 assert.ok(await page.locator('img').evaluateAll(imgs=>imgs.every(img=>img.complete&&img.naturalWidth>0)));
 assert.equal(await page.locator('form,[data-panel]').count(),0);
 const href=await page.locator('[data-book="integrativa"]').first().getAttribute('href');assert.match(href,/https:\/\/wa.me\/5511995857781/);
 await page.locator('#sobre .art-link').click();await page.getByRole('dialog').waitFor();await page.getByRole('dialog').locator('img').evaluate(img=>img.decode());await page.keyboard.press('Escape');assert.equal(await page.getByRole('dialog').count(),0);
 await page.locator('.point-controls [data-point="1"]').click();assert.match(await page.locator('.point-content h3').innerText(),/Laserterapia/);
 assert.deepEqual(errors,[]);console.log('PASS: HTML independente, imagens incorporadas, ampliação offline, WhatsApp e animação interativa');
}finally{await browser.close()}
