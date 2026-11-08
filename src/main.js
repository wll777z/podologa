const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];
const icon=name=>`<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const WHATSAPP='5511995857781';
const careNames={podologia:'cuidado podológico',reflexologia:'reflexologia podal',integrativa:'terapias integrativas',avaliacao:'uma primeira avaliação'};
$$('[data-book]').forEach(link=>{
 link.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, Sueli! Gostaria de agendar ${careNames[link.dataset.book]||'um atendimento'}. Poderia me informar a disponibilidade e os valores?`)}`;
 link.target='_blank';link.rel='noopener';
});
// Illustrative foot study: the selectable points do not represent a diagnostic map.
const grid=$('#foot-grid');let paths='';
for(let y=70;y<=590;y+=12){const curve=Math.sin(y*.018)*10;paths+=`<path d="M100 ${y} Q250 ${y+curve} 400 ${y+8}"/>`;}
for(let x=120;x<=390;x+=11)paths+=`<path d="M${x} 50 Q${x+50*Math.sin(x*.03)} 330 ${x-30} 600"/>`;
grid.innerHTML=paths;grid.setAttribute('fill','none');grid.setAttribute('stroke','#6dddbd');grid.setAttribute('stroke-width','.65');grid.setAttribute('opacity','.65');
const heroDiagram=$('.foot-diagram').cloneNode(true);heroDiagram.setAttribute('aria-hidden','true');heroDiagram.removeAttribute('role');heroDiagram.removeAttribute('aria-label');heroDiagram.innerHTML=heroDiagram.innerHTML.replaceAll('foot-clip','hero-foot-clip').replaceAll('foot-outline','hero-foot-outline');$('.hero-mesh').append(heroDiagram);
const motionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('running-off',!entry.isIntersecting)),{threshold:.05});$$('.care-map,.hero-mesh').forEach(el=>motionObserver.observe(el));
addEventListener('visibilitychange',()=>document.body.classList.toggle('tab-hidden',document.hidden));
const pointText=[['Unhas e pele','Observar mudanças e cuidar da higiene faz parte da prevenção. Na avaliação, cada necessidade recebe atenção individual.'],['Apoio e conforto','Seus pés sustentam o movimento do dia a dia. A atenção às áreas de pressão e aos hábitos de cuidado começa com uma avaliação.'],['Toque e relaxamento','A reflexologia propõe uma pausa de atenção ao corpo por meio do toque nos pés. Uma prática complementar de bem-estar.']];
$$('[data-point]').forEach(button=>button.addEventListener('click',()=>{
 const index=Number(button.dataset.point);$$('[data-point]').forEach(el=>{const active=Number(el.dataset.point)===index;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
 $('.point-number').textContent=`0${index+1} / 03`;$('.point-content h3').textContent=pointText[index][0];$('.point-content p').textContent=pointText[index][1];
}));
$$('[data-category]').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.category;$$('[data-category]').forEach(el=>el.setAttribute('aria-selected',String(el===button)));$$('.service-card').forEach(card=>card.hidden=category!=='todos'&&card.dataset.group!==category);}));
$$('[data-category]').forEach((button,index,tabs)=>button.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[next].focus();tabs[next].click();}));
const menu=$('.menu-button');
function menuInert(value){for(const element of $$('.notice,main,.footer,.header .brand,.main-nav,.header-actions>.button'))element.inert=value;}
function closeMenu(){const nav=$('.mobile-nav');if(!nav)return;nav.remove();menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');document.body.classList.remove('locked');menuInert(false);menu.focus({preventScroll:true});}
menu.addEventListener('click',()=>{
 if($('.mobile-nav'))return closeMenu();
 const nav=document.createElement('nav');nav.className='mobile-nav';nav.setAttribute('aria-label','Navegação móvel');nav.innerHTML=`<a href="#cuidados">Cuidados</a><a href="#sobre">Sobre a Sueli</a><a href="#terapias">Terapias</a><a href="#agendamento">Contato</a><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">Agendar pelo WhatsApp ${icon('diagonal')}</a>`;
 document.body.append(nav);menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Fechar menu');document.body.classList.add('locked');$$('a',nav).forEach(a=>a.addEventListener('click',closeMenu));menuInert(true);$('a',nav).focus();
});
addEventListener('resize',()=>{if(innerWidth>650)closeMenu();});
addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!$('dialog[open]'))closeMenu();
 const nav=$('.mobile-nav');if(event.key!=='Tab'||!nav)return;
 const items=[menu,...$$('a[href],button',nav)];const first=items[0],last=items.at(-1);
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
$('[data-privacy]').addEventListener('click',()=>{
 const dialog=document.createElement('dialog');dialog.className='confirm-dialog';dialog.innerHTML=`<h3>Agendamento direto com a Sueli.</h3><p>Este site não possui formulário de agendamento nem salva novos pedidos no navegador. Ao tocar nos links de WhatsApp ou Instagram, você acessa um serviço externo. A mensagem só é enviada quando você confirma o envio nesse serviço.</p><button class="button">Entendi ${icon('check')}</button>`;
 document.body.append(dialog);$('button',dialog).addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>dialog.remove());dialog.showModal();
});
// Full-size artwork works in the hosted page and in the standalone HTML export.
document.addEventListener('click',event=>{
 const link=event.target.closest('.art-link');if(!link)return;event.preventDefault();
 const image=$('img',link);const dialog=document.createElement('dialog');dialog.className='art-dialog';dialog.setAttribute('aria-label',image.alt);
 const close=document.createElement('button');close.className='art-dialog-close';close.setAttribute('aria-label','Fechar imagem ampliada');close.innerHTML='Fechar '+icon('close');
 const enlarged=image.cloneNode(true);enlarged.removeAttribute('loading');dialog.append(close,enlarged);document.body.append(dialog);
 const wasLocked=document.body.classList.contains('locked');document.body.classList.add('locked');
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{dialog.remove();if(!wasLocked)document.body.classList.remove('locked');link.focus({preventScroll:true});});
 dialog.showModal();close.focus();
});
