import {chromium} from 'playwright';import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});await page.goto('http://127.0.0.1:5173');
 const text=await page.locator('body').innerText();assert.doesNotMatch(text,/podolog|reflexolog|\bpés\b|\bpé\b/iu);
 await page.getByRole('heading',{name:'Auriculoterapia. Laserterapia. Cuidado com você.'}).waitFor();
 for(const service of ['auriculoterapia','laserterapia']){const url=new URL(await page.locator(`[data-book="${service}"]`).getAttribute('href'));assert.equal(url.pathname,'/5511995857781');assert.match(url.searchParams.get('text'),new RegExp(service,'i'));}
 assert.equal(await page.locator('.care-map .ear-diagram').count(),1);assert.equal(await page.locator('.foot-diagram').count(),0);
 await page.evaluate(()=>scrollTo({top:250,behavior:'instant'}));await page.waitForTimeout(100);assert.notEqual(await page.locator('.hero').evaluate(el=>el.style.getPropertyValue('--hero-image-shift')),'');
 assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(255, 255, 255)');
 console.log('PASS: base clara do GitHub, foco auriculoterapia/laserterapia e sem podologia');
}finally{await browser.close()}
