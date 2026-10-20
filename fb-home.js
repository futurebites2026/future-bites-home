import{a as h,b as E}from"./fb-chunk-UJHWT3O5.js";import{b as O,c as z,e as N,f as U}from"./fb-chunk-4NWNGGMU.js";var p={origin:"https://futurebites.mitiendanube.com",catalog:"/productos/",cart:"/comprar/",snapshotDate:"19/10/2026"},f=[{key:"pollo",index:"01",name:"Pollo",fullName:"Future Bites Pollo",productId:367924923,url:"/productos/future-bites-pollo-1jxp2/",jar:"jar-pollo.webp",bite:"bite-pollo.webp",photo:"foto-pollo-pastilla.webp",photoAlt:"Bocado de Future Bites Pollo con una pastilla colocada en su cavidad",tagline:"Bocados de pollo deshuesado fresco, deshidratados.",ingredient:"Carne de pollo deshuesada fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:72,unit:"%"},{label:"Grasa bruta",value:4,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5.5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"3.500 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cerdo",index:"02",name:"Cerdo",fullName:"Future Bites Cerdo",productId:367924746,url:"/productos/future-bites-cerdo-snack-deshidratado-perros/",jar:"jar-cerdo.webp",bite:"bite-cerdo.webp",photo:"foto-cerdo-pastilla.webp",photoAlt:"Mano colocando una pastilla dentro de un bocado de Future Bites Cerdo",tagline:"Bocados de cerdo magro fresco, deshidratados. El sabor m\xE1s intenso de la l\xEDnea.",ingredient:"Carne de cerdo magra fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:68,unit:"%"},{label:"Grasa bruta",value:10,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"4.100 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cornalitos",index:"03",name:"Cornalitos",fullName:"Future Bites Cornalitos",productId:367925431,url:"/productos/future-bites-cornalitos-1wr3d/",jar:"jar-cornalitos.webp",tagline:"Cornalitos enteros deshidratados. El sabor que m\xE1s premios rinde.",ingredient:"Cornalitos (pescado entero fresco) deshidratados",fillable:!1,content:"20 g",pieces:"Unos 40 cornalitos de 0,4 g",analysis:[{label:"Prote\xEDna bruta",value:62,unit:"%"},{label:"Grasa bruta",value:7.5,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:13,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:null,price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}}],y=e=>String(e).replace(".",",");async function V(e,s=""){return(await Promise.allSettled(e.map(async n=>{let r=await fetch(s+n.url,{credentials:"same-origin",cache:"no-store"});if(!r.ok)throw new Error("HTTP "+r.status);let t=await r.text(),i=new DOMParser().parseFromString(t,"text/html").querySelector("[data-variants]");if(!i)throw new Error("sin variantes");let c=JSON.parse(i.getAttribute("data-variants"))[0];return n.price={short:c.price_short,transfer:c.price_with_payment_discount_short||null,available:!!c.available,live:!0},n.variantId=c.id,n}))).map(n=>n.status==="fulfilled")}var l=e=>String(e).replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]),m=Object.fromEntries(f.map(e=>[e.key,e])),q={pollo:[{id:"p1",obj:"jarP",u:.5,v:.93,dx:150,dy:-70,title:"Frasco de vidrio",value:"200 cc",more:"Tapa negra y etiqueta envolvente Future Bites."},{id:"p2",obj:"jarP",u:.62,v:.5,dx:170,dy:30,title:"Un solo ingrediente",value:"Pollo deshuesado fresco",more:"Deshidratado, sin conservantes."},{id:"p3",obj:"jarP",u:.42,v:.12,dx:-190,dy:40,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Cada bocado tiene una cavidad rellenable."}],cerdo:[{id:"c1",obj:"jarC",u:.55,v:.92,dx:-170,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"La misma familia de envase, con etiqueta naranja."},{id:"c2",obj:"jarC",u:.4,v:.5,dx:-190,dy:40,title:"Un solo ingrediente",value:"Cerdo magro fresco",more:"Deshidratado, sin conservantes."},{id:"c3",obj:"jarC",u:.6,v:.12,dx:170,dy:30,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Bocados rellenables, como en Pollo."}],cornalitos:[{id:"k1",obj:"jarK",u:.5,v:.93,dx:160,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"Etiqueta gris carb\xF3n y tapa con sticker azul."},{id:"k2",obj:"jarK",u:.6,v:.18,dx:180,dy:40,title:"Contenido",value:"20 g \xB7 unos 40 cornalitos",more:"Cada cornalito pesa alrededor de 0,4 g."}]};function j(e){let s=e.price.transfer?`<span class="fb-price__alt" data-price-transfer="${e.key}">${l(e.price.transfer)} con transferencia</span>`:"";return`<div class="fb-price"><span class="fb-price__main" data-price="${e.key}">${l(e.price.short)}</span>${s}
    <span class="fb-price__note" data-price-note="${e.key}">Precio de referencia tomado de la tienda el ${p.snapshotDate}</span></div>`}function L(e,s="Agregar al carrito"){return`<div class="fb-actions">
    <button class="fb-btn fb-btn--primary" type="button" data-buy="${e.key}">${s}</button>
    <a class="fb-btn fb-btn--ghost" href="${p.origin}${e.url}" data-product-link="${e.key}">Ver ficha</a>
  </div>`}function ee(e,s=""){let o=e.analysis[0],n=e.analysis.slice(1),r=2*Math.PI*52;return`<div class="fb-analysis ${s}">
    <div class="fb-gauge" role="img" aria-label="${l(o.label)}: ${y(o.value)}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" class="fb-gauge__track"/>
        <circle cx="60" cy="60" r="52" class="fb-gauge__bar" style="--len:${(r*o.value/100).toFixed(1)};--c:${r.toFixed(1)}"/>
        <g class="fb-gauge__ticks">${Array.from({length:40},(t,a)=>`<line x1="60" y1="2" x2="60" y2="${a%5?5:8}" transform="rotate(${a*9} 60 60)"/>`).join("")}</g>
      </svg>
      <div class="fb-gauge__val"><b>${y(o.value)}<small>%</small></b><span>Prote\xEDna</span></div>
    </div>
    <ul class="fb-bars">
      ${n.map(t=>`<li><span class="fb-bars__l">${l(t.label)}</span><span class="fb-bars__t"><i style="--v:${t.value/100}"></i></span><span class="fb-bars__v">${y(t.value)}${t.unit}</span></li>`).join("")}
      ${e.energy?`<li class="fb-bars__energy"><span class="fb-bars__l">Energ\xEDa</span><span class="fb-bars__v">${l(e.energy)}</span></li>`:""}
    </ul>
    <p class="fb-source">An\xE1lisis garantizado cada 100 g, seg\xFAn la etiqueta y la ficha oficial del producto.</p>
  </div>`}function F(e,s){return`<div class="fb-panel fb-panel--${s} fb-p-intro" data-panel="${e.key}" id="fb-${e.key}">
    <p class="fb-kicker"><span>Variedad ${e.index}</span></p>
    <h2 class="fb-variety"><span class="fb-variety__brand">Future Bites</span>${l(e.name)}</h2>
    <p class="fb-lead">${l(e.tagline)}</p>
    <ul class="fb-chips">
      <li>Frasco 200 cc \xB7 ${l(e.content)}</li>
      <li>${e.fillable?"Rellenable":"Pescado entero"}</li>
      <li>Un solo ingrediente</li>
    </ul>
    <img class="fb-static" src="{A}${e.jar}" alt="Frasco de ${l(e.fullName)}" loading="lazy" decoding="async">
  </div>`}function J(e,s,o){return`<div class="fb-panel fb-panel--${s} fb-p-fill" data-panel="${e.key}-fill">
    <p class="fb-kicker"><span>Formato rellenable</span></p>
    <h3 class="fb-h3">${o}</h3>
    <ol class="fb-steps" aria-label="C\xF3mo se usa">
      <li data-step="1"><b>01</b> Cavidad del bocado</li>
      <li data-step="2"><b>02</b> Coloc\xE1s la pastilla</li>
      <li data-step="3"><b>03</b> Se convierte en premio</li>
    </ol>
    <p class="fb-body">Cada bocado tiene un espacio para esconder la pastilla adentro. La hora de la medicaci\xF3n se convierte en un premio m\xE1s.</p>
    <p class="fb-note">Respet\xE1 siempre las indicaciones de tu veterinario sobre c\xF3mo darle cada medicamento.</p>
    <figure class="fb-photo" data-photo="${e.key}">
      <img src="{A}${e.photo}" alt="${l(e.photoAlt)}" loading="lazy" decoding="async" width="733" height="1100">
      <figcaption>Foto real del producto</figcaption>
    </figure>
  </div>`}function A(e,s){return`<div class="fb-panel fb-panel--${s} fb-p-data" data-panel="${e.key}-data">
    <p class="fb-kicker"><span>${l(e.fullName)}</span></p>
    <h3 class="fb-h3">${l(e.name)}, en n\xFAmeros.</h3>
    ${ee(e)}
    <dl class="fb-spec">
      <div><dt>Ingrediente</dt><dd>${l(e.ingredient)}</dd></div>
      <div><dt>Contenido</dt><dd>${l(e.content)} \xB7 ${l(e.pieces)}</dd></div>
    </dl>
    ${j(e)}
    ${L(e)}
  </div>`}function P(e){return q[e].map(s=>`<div class="fb-co${s.dx<0?" fb-co--l":""}" data-co="${s.id}" data-co-group="${e}" style="--dx:${s.dx}px;--dy:${s.dy}px;--len:${Math.hypot(s.dx,s.dy).toFixed(1)}px;--ang:${(Math.atan2(s.dy,s.dx)*180/Math.PI).toFixed(1)}deg">
      <span class="fb-co__line" aria-hidden="true"></span>
      <button class="fb-co__dot" type="button" aria-expanded="false" aria-controls="fb-co-${s.id}" aria-label="${l(s.title)}: ${l(s.value)}"></button>
      <div class="fb-co__label" id="fb-co-${s.id}"><span class="fb-co__t">${l(s.title)}</span><b>${l(s.value)}</b><span class="fb-co__more">${l(s.more)}</span></div>
    </div>`).join("")}function ae(e){let s=e.analysis[0],o=e.analysis[1];return`<dl class="fb-cmp__dl">
    <div><dt>Ingrediente</dt><dd>${l(e.ingredient)}</dd></div>
    <div><dt>Presentaci\xF3n</dt><dd>Frasco 200 cc \xB7 ${l(e.content)}</dd></div>
    <div><dt>Piezas</dt><dd>${l(e.pieces)}</dd></div>
    <div><dt>Rellenable</dt><dd>${e.fillable?"S\xED, con cavidad para pastilla":"No"}</dd></div>
    <div><dt>Prote\xEDna bruta</dt><dd><span class="fb-mini"><i style="--v:${s.value/100}"></i></span>${y(s.value)}%</dd></div>
    <div><dt>Grasa bruta</dt><dd><span class="fb-mini"><i style="--v:${o.value/100}"></i></span>${y(o.value)}%</dd></div>
    ${e.energy?`<div><dt>Energ\xEDa</dt><dd>${l(e.energy)}</dd></div>`:""}
  </dl>`}function G({assets:e,mode:s,showNav:o}){let n=e;return`
  <a class="fb-skip" href="#fb-shop">Saltar el recorrido e ir a los productos</a>
  ${o?`<header class="fb-nav">
      <a class="fb-nav__logo" href="${p.origin}/" aria-label="Future Bites, inicio"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164"></a>
      <nav class="fb-nav__links" aria-label="Secciones">
        ${f.map(a=>`<button type="button" data-goto="${a.key}">${l(a.name)}</button>`).join("")}
        <button type="button" data-goto="comparar">Comparar</button>
      </nav>
      <a class="fb-btn fb-btn--primary fb-btn--sm" href="#fb-shop">Comprar</a>
    </header>`:""}
  <section class="fb-exp" id="fb-exp" aria-label="Recorrido por el universo Future Bites">
    <div class="fb-stage">
      <canvas class="fb-canvas" aria-hidden="true"></canvas>
      <div class="fb-vignette" aria-hidden="true"></div>
      <div class="fb-grid" aria-hidden="true"></div>
      <div class="fb-hud" aria-hidden="true">
        <span class="fb-hud__tl">FB \xB7 <span data-hud-scene>Inicio</span></span>
        <span class="fb-hud__tr">32\xB057\u2032S \xB7 60\xB038\u2032W</span>
        <span class="fb-hud__bl">Feed the future</span>
        <span class="fb-hud__br"><span data-hud-index>01</span> / 07</span>
      </div>

      <div class="fb-panel fb-panel--left fb-p-hero" data-panel="hero" id="fb-inicio">
        <p class="fb-kicker"><span>Feed the future</span></p>
        <h1 class="fb-display">El futuro tiene <em>otro sabor.</em></h1>
        <p class="fb-lead">Snacks deshidratados para perros, de un solo ingrediente y sin conservantes.</p>
        <div class="fb-actions">
          <button class="fb-btn fb-btn--primary" type="button" data-goto="laboratorio">Explorar Future Bites</button>
          <a class="fb-btn fb-btn--ghost" href="#fb-shop">Ver productos</a>
        </div>
        <img class="fb-static" src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" decoding="async">
      </div>

      <div class="fb-panel fb-panel--right fb-p-lab" data-panel="lab" id="fb-laboratorio">
        <p class="fb-kicker"><span>Laboratorio Future Bites</span></p>
        <h2 class="fb-display fb-display--md">Peque\xF1os bites. <em>Grandes ideas.</em></h2>
        <ul class="fb-readout">
          <li data-read="1"><span>Ingrediente</span><b>Uno solo por variedad</b></li>
          <li data-read="2"><span>Conservantes</span><b>Sin conservantes</b></li>
          <li data-read="3"><span>Proceso</span><b>Deshidratado</b></li>
          <li data-read="4"><span>Formato</span><b>Rellenable en Pollo y Cerdo</b></li>
        </ul>
      </div>

      <div class="fb-callouts" data-callouts>${P("pollo")}${P("cerdo")}${P("cornalitos")}</div>

      ${F(m.pollo,"left")}
      ${J(m.pollo,"left","Una cavidad pensada para la pastilla.")}
      ${A(m.pollo,"right")}

      ${F(m.cerdo,"right")}
      ${J(m.cerdo,"right","El mismo gesto, con el sabor m\xE1s intenso.")}
      ${A(m.cerdo,"left")}

      ${F(m.cornalitos,"left")}
      ${A(m.cornalitos,"right")}

      <div class="fb-panel fb-panel--wide fb-p-compare" data-panel="compare" id="fb-comparar">
        <div class="fb-cmp__head">
          <p class="fb-kicker"><span>Comparador</span></p>
          <h2 class="fb-display fb-display--md">Eleg\xED tu <em>bite.</em></h2>
        </div>
        <div class="fb-cmp__tabs" role="tablist" aria-label="Variedades">
          ${f.map((a,i)=>`<button role="tab" type="button" id="fb-tab-${a.key}" aria-controls="fb-tp-${a.key}" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-cmp="${i}"><span>${a.index}</span>${l(a.name)}</button>`).join("")}
        </div>
        ${f.map((a,i)=>`<div class="fb-cmp__panel" role="tabpanel" id="fb-tp-${a.key}" aria-labelledby="fb-tab-${a.key}" ${i===0?"":"hidden"}>
          ${ae(a)}
          ${j(a)}
          ${L(a)}
        </div>`).join("")}
      </div>

      <div class="fb-panel fb-panel--left fb-p-universe" data-panel="universe" id="fb-universo">
        <p class="fb-kicker"><span>Universo Future Bites</span></p>
        <h2 class="fb-display fb-display--md">Dise\xF1ados para una <em>nueva generaci\xF3n</em> de perros.</h2>
        <ul class="fb-statements">
          <li data-stmt="1"><b>Un solo ingrediente</b> por variedad.</li>
          <li data-stmt="2"><b>Funcionales</b> por dise\xF1o.</li>
          <li data-stmt="3"><b>Nacidos en Domani</b>, Rosario.</li>
        </ul>
        <a class="fb-btn fb-btn--primary" href="#fb-shop">Ver los productos</a>
        <img class="fb-static" src="{A}universo.webp" alt="Ilustraci\xF3n retrofuturista de tres perros en una ciudad del futuro" loading="lazy" decoding="async">
      </div>

      <nav class="fb-dots" aria-label="Escenas del recorrido">
        ${z.map((a,i)=>`<button type="button" data-goto="${a.id}" aria-label="${l(a.label)}"${i===0?' aria-current="step"':""}><span>${l(a.label)}</span></button>`).join("")}
      </nav>
      <div class="fb-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
      <div class="fb-drag" aria-hidden="true"><i></i>Arrastr\xE1 el frasco para girarlo</div>
    </div>
  </section>

  <section class="fb-shop" id="fb-shop" aria-labelledby="fb-shop-title">
    <div class="fb-shop__in">
      <p class="fb-kicker fb-kicker--dark"><span>Tienda Future Bites</span></p>
      <h2 class="fb-display fb-display--dark" id="fb-shop-title">Snacks con <em>prop\xF3sito.</em></h2>
      <div class="fb-cards">
        ${f.map(a=>`<article class="fb-card" data-card="${a.key}">
          <div class="fb-card__media"><img src="{A}${a.jar}" alt="Frasco de ${l(a.fullName)}" loading="lazy" decoding="async"></div>
          <div class="fb-card__body">
            <p class="fb-card__idx">Variedad ${a.index}</p>
            <h3 class="fb-variety fb-variety--card"><span class="fb-variety__brand">Future Bites</span>${l(a.name)}</h3>
            <p class="fb-card__desc">${l(a.tagline)}</p>
            <ul class="fb-chips fb-chips--dark"><li>Frasco 200 cc \xB7 ${l(a.content)}</li><li>${a.fillable?"Rellenable":"Pescado entero"}</li></ul>
            ${j(a)}
            ${L(a)}
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <section class="fb-outro" id="fb-outro" aria-labelledby="fb-outro-title">
    <div class="fb-outro__sky" aria-hidden="true"></div>
    <svg class="fb-outro__orbits" viewBox="0 0 1000 500" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="500" cy="290" rx="430" ry="120"/><ellipse cx="500" cy="290" rx="330" ry="86"/><ellipse cx="500" cy="290" rx="250" ry="60"/>
    </svg>
    <div class="fb-outro__in">
      <div class="fb-outro__logo"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164" loading="lazy"></div>
      <img class="fb-outro__trio" src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" loading="lazy" decoding="async">
      <h2 class="fb-display" id="fb-outro-title">Future Bites <em>\u2014 el futuro de los snacks.</em></h2>
      <a class="fb-btn fb-btn--primary" href="${p.origin}${p.catalog}" data-catalog>Ver cat\xE1logo completo</a>
    </div>
  </section>`.replaceAll("{A}",n)}function H(e,s){let o=Object.fromEntries(f.map(r=>[r.key,r])),n=s==="store";e.querySelectorAll("[data-product-link]").forEach(r=>{let t=o[r.dataset.productLink];r.href=(n?"":p.origin)+t.url,n||(r.target="_blank",r.rel="noopener")}),e.querySelectorAll("[data-catalog]").forEach(r=>{r.href=(n?"":p.origin)+p.catalog,n||(r.target="_blank",r.rel="noopener")}),e.querySelectorAll("[data-buy]").forEach(r=>{let t=o[r.dataset.buy];if(!n){let a=document.createElement("a");a.className=r.className,a.href=p.origin+t.url,a.target="_blank",a.rel="noopener",a.dataset.buy=t.key,a.textContent="Comprar en la tienda",r.replaceWith(a);return}r.addEventListener("click",()=>{let a=document.createElement("form");a.method="post",a.action=p.cart,[["add_to_cart",t.productId],["quantity",1]].forEach(([i,d])=>{let c=document.createElement("input");c.type="hidden",c.name=i,c.value=d,a.appendChild(c)}),document.body.appendChild(a),r.disabled=!0,r.textContent="Agregando\u2026",a.submit()})}),n&&V(f).then(r=>{f.forEach((t,a)=>{r[a]&&(e.querySelectorAll(`[data-price="${t.key}"]`).forEach(i=>{i.textContent=t.price.short}),e.querySelectorAll(`[data-price-transfer="${t.key}"]`).forEach(i=>{i.textContent=t.price.transfer?`${t.price.transfer} con transferencia`:""}),e.querySelectorAll(`[data-price-note="${t.key}"]`).forEach(i=>{i.textContent=t.price.available?"":"Sin stock por el momento"}),t.price.available||e.querySelectorAll(`[data-buy="${t.key}"]`).forEach(i=>{i.disabled=!0,i.textContent="Sin stock"}))})})}var te=["jarP","jarC","jarK"];function x(e,s){let o=[...e.querySelectorAll("[data-cmp]")],n=0,r=(t,a)=>{let i=t!==n;if(n=t,o.forEach((d,c)=>{let g=t===c;d.setAttribute("aria-selected",g),d.tabIndex=g?0:-1;let $=e.querySelector("#"+d.getAttribute("aria-controls"));$&&($.hidden=!g)}),a&&o[t].focus(),s){h.to(s.state.cmp,{sel:t,duration:.9,ease:"power3.inOut",overwrite:!0});let d=i&&s.spinJar(te[t]);d&&h.fromTo(d,{a:0},{a:Math.PI*2,duration:1.3,ease:"power3.inOut",overwrite:!0,onComplete:()=>{d.a=0}})}};o.forEach((t,a)=>{t.addEventListener("click",()=>r(a)),t.addEventListener("keydown",i=>{(i.key==="ArrowRight"||i.key==="ArrowLeft")&&(i.preventDefault(),r((a+(i.key==="ArrowRight"?1:o.length-1))%o.length,!0))})})}function X(e,s){let o=[];return Object.entries(q).forEach(([n,r])=>r.forEach(t=>{let a=e.querySelector(`[data-co="${t.id}"]`);a&&o.push({el:a,c:t})})),e.querySelectorAll(".fb-co__dot").forEach(n=>n.addEventListener("click",()=>{let r=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!r)),n.closest(".fb-co").classList.toggle("is-open",!r)})),function(){for(let{el:r,c:t}of o){if(r.style.visibility==="hidden"||r.style.opacity==="0")continue;let a=s.project(t.obj,t.u,t.v);a&&(r.style.transform=`translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`)}}}function K(e,s){let o=e.querySelector(".fb-canvas"),n=e.querySelector(".fb-drag"),r=i=>{let d=o.getBoundingClientRect();return[i.clientX-d.left,i.clientY-d.top]},t=null;o.addEventListener("pointerdown",i=>{if(i.button!==0)return;let d=s.pickJar(...r(i));d&&(t={k:d,x:i.clientX,t:performance.now(),v:0,id:i.pointerId},o.setPointerCapture(i.pointerId),s.grabJar(d),e.classList.add("is-dragging"),n&&n.classList.add("is-used"))}),o.addEventListener("pointermove",i=>{if(!t){i.pointerType==="mouse"&&e.classList.toggle("is-grab",!!s.pickJar(...r(i)));return}let d=performance.now(),c=(i.clientX-t.x)*.011,g=Math.max(8,d-t.t);t.v=c*(16/g),t.x=i.clientX,t.t=d,s.dragJar(t.k,c)});let a=i=>{!t||i.pointerId!==t.id||(s.releaseJar(t.k,performance.now()-t.t>90?0:t.v),t=null,e.classList.remove("is-dragging"))};o.addEventListener("pointerup",a),o.addEventListener("pointercancel",a),o.addEventListener("lostpointercapture",a)}function C(e,s,o){e.addEventListener("click",n=>{let r=n.target.closest("[data-goto]");if(!r)return;n.preventDefault();let t=r.dataset.goto;if(s&&s.scrollToScene(t,!o))return;let a=e.querySelector("#fb-"+t)||e.querySelector("#fb-shop");a&&a.scrollIntoView({behavior:o?"auto":"smooth",block:"start"})})}function W(e,s){if(s)return;h.from(e.querySelectorAll(".fb-card"),{y:40,autoAlpha:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:e.querySelector(".fb-cards"),start:"top 82%"}});let o=e.querySelector(".fb-outro");h.timeline({scrollTrigger:{trigger:o,start:"top bottom",end:"bottom bottom",scrub:.8}}).fromTo(o.querySelector(".fb-outro__trio"),{scale:1.22,y:40},{scale:1,y:0,ease:"none"},0).fromTo(o.querySelector(".fb-outro__orbits"),{scale:1.3,rotate:-4,opacity:0},{scale:1,rotate:0,opacity:1,ease:"none"},0).fromTo(o.querySelectorAll(".fb-outro__logo, .fb-outro h2, .fb-outro .fb-btn"),{y:30,autoAlpha:0},{y:0,autoAlpha:1,stagger:.08,ease:"none"},.3)}h.registerPlugin(E);async function se(e){if(e.dataset.fbReady)return;e.dataset.fbReady="1";let s=e.dataset.assets||"assets/",o=location.hostname,n=e.dataset.mode||(window.LS||/mitiendanube\.com$/.test(o)?"store":"review"),r=e.dataset.nav?e.dataset.nav==="true":n!=="store";e.classList.add("fb"),e.dataset.prerendered?r||e.querySelector(".fb-nav")?.remove():e.innerHTML=G({assets:s,mode:n,showNav:r}),e.classList.remove("fb--pending"),e.style.setProperty("--fb-exp-h",`${O.end+100}`);let t=matchMedia("(prefers-reduced-motion: reduce)"),a=/[?&]fb-static\b/.test(location.search),i=U()&&!t.matches&&!a;if(H(e,n),!i){e.classList.add("fb--static"),x(e,null),C(e,null,!0);return}if(e.classList.add("fb--3d","fb--loading"),n==="store"){let u=[...document.querySelectorAll("header, .js-head-main, .head-main")].find(v=>/sticky|fixed/.test(getComputedStyle(v).position));u&&e.style.setProperty("--fb-top",u.offsetHeight+"px")}let d=N();e.dataset.quality=d.tier;let{World:c}=await import("./fb-world-HF6XCZ2Q.js"),{buildDirector:g}=await import("./fb-director-2JE2V6CG.js"),$=e.querySelector(".fb-canvas"),S=e.querySelector(".fb-stage"),b;try{b=new c($,{quality:d,assets:s}),await b.loadProducts()}catch(u){console.warn("[Future Bites] 3D no disponible, se usa la versi\xF3n est\xE1tica.",u),e.classList.remove("fb--3d","fb--loading"),e.classList.add("fb--static"),x(e,null),C(e,null,!0);return}let B=()=>{let u=S.getBoundingClientRect();b.resize(Math.max(1,u.width),Math.max(1,u.height))};B();let T=g(e,b),Q=X(e,b);x(e,b),K(e,b),C(e,T,!1),W(e,!1),e.classList.remove("fb--loading"),/[?&]fb-debug\b/.test(location.search)&&(window.__fb={world:b,director:T}),d.parallax&&S.addEventListener("pointermove",u=>{let v=S.getBoundingClientRect();b.setPointer((u.clientX-v.left)/v.width*2-1,(u.clientY-v.top)/v.height*2-1)},{passive:!0});let R=!0;new IntersectionObserver(([u])=>{R=u.isIntersecting},{rootMargin:"100px"}).observe(e.querySelector(".fb-exp"));let w=0,_=0,k=d.dpr,I=performance.now();function M(u){requestAnimationFrame(M);let v=u-I;if(I=u,!(!R||document.hidden)&&(b.render(),Q(),w+=v,_++,_===90)){let Z=w/_;w=0,_=0,Z>30&&k>1&&(k=Math.max(1,k-.25),b.setDpr(k))}}requestAnimationFrame(M);let D;addEventListener("resize",()=>{clearTimeout(D),D=setTimeout(()=>{B(),E.refresh()},120)}),t.addEventListener?.("change",()=>location.reload()),window.addEventListener("pagehide",()=>b.dispose(),{once:!0})}function Y(){document.querySelectorAll("[data-fb-home], #fb-home").forEach(e=>se(e))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();
