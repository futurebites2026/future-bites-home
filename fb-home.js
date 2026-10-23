import{a as _,b as j}from"./fb-chunk-UJHWT3O5.js";import{c as W,d as X,e as K,f as Q,h as Y,i as Z,j as ee,k as ae}from"./fb-chunk-DSK7QPXF.js";var f={origin:"https://futurebites.mitiendanube.com",catalog:"/productos/",cart:"/comprar/",snapshotDate:"19/10/2026"},h=[{key:"pollo",index:"01",name:"Pollo",fullName:"Future Bites Pollo",productId:367924923,url:"/productos/future-bites-pollo-1jxp2/",jar:"jar-pollo.webp",bite:"bite-pollo.webp",photo:"foto-pollo-pastilla.webp",photoAlt:"Bocado de Future Bites Pollo con una pastilla colocada en su cavidad",tagline:"Bocados de pollo deshuesado fresco, deshidratados.",ingredient:"Carne de pollo deshuesada fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:72,unit:"%"},{label:"Grasa bruta",value:4,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5.5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"3.500 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cerdo",index:"02",name:"Cerdo",fullName:"Future Bites Cerdo",productId:367924746,url:"/productos/future-bites-cerdo-snack-deshidratado-perros/",jar:"jar-cerdo.webp",bite:"bite-cerdo.webp",photo:"foto-cerdo-pastilla.webp",photoAlt:"Mano colocando una pastilla dentro de un bocado de Future Bites Cerdo",tagline:"Bocados de cerdo magro fresco, deshidratados. El sabor m\xE1s intenso de la l\xEDnea.",ingredient:"Carne de cerdo magra fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:68,unit:"%"},{label:"Grasa bruta",value:10,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"4.100 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cornalitos",index:"03",name:"Cornalitos",fullName:"Future Bites Cornalitos",productId:367925431,url:"/productos/future-bites-cornalitos-1wr3d/",jar:"jar-cornalitos.webp",tagline:"Cornalitos enteros deshidratados. El sabor que m\xE1s premios rinde.",ingredient:"Cornalitos (pescado entero fresco) deshidratados",fillable:!1,content:"20 g",pieces:"Unos 40 cornalitos de 0,4 g",analysis:[{label:"Prote\xEDna bruta",value:62,unit:"%"},{label:"Grasa bruta",value:7.5,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:13,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:null,price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}}];var L={key:"surtida",name:"Surtida",fullName:"Future Bites Surtida",productId:375760431,url:"/productos/future-bites-caja-x6/",perFlavor:{x6:2,x12:4}},te=[...h,L];var x=e=>String(e).replace(".",",");var d=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),z=Object.fromEntries(h.map(e=>[e.key,e])),U={pollo:[{id:"p1",obj:"jarP",u:.5,v:.93,dx:150,dy:-70,title:"Frasco de vidrio",value:"200 cc",more:"Tapa negra y etiqueta envolvente Future Bites."},{id:"p2",obj:"jarP",u:.62,v:.5,dx:170,dy:30,title:"Un solo ingrediente",value:"Pollo deshuesado fresco",more:"Deshidratado, sin conservantes."},{id:"p3",obj:"jarP",u:.42,v:.12,dx:-190,dy:40,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Cada bocado tiene una cavidad rellenable."}],cerdo:[{id:"c1",obj:"jarC",u:.55,v:.92,dx:-170,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"La misma familia de envase, con etiqueta naranja."},{id:"c2",obj:"jarC",u:.4,v:.5,dx:-190,dy:40,title:"Un solo ingrediente",value:"Cerdo magro fresco",more:"Deshidratado, sin conservantes."},{id:"c3",obj:"jarC",u:.6,v:.12,dx:170,dy:30,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Bocados rellenables, como en Pollo."}],cornalitos:[{id:"k1",obj:"jarK",u:.5,v:.93,dx:160,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"Etiqueta gris carb\xF3n y tapa con sticker azul."},{id:"k2",obj:"jarK",u:.6,v:.18,dx:180,dy:40,title:"Contenido",value:"20 g \xB7 unos 40 cornalitos",more:"Cada cornalito pesa alrededor de 0,4 g."}]},y=e=>e.normalize("NFD").replace(/\u0301/g,"").normalize("NFC");function P(e,t=!1){let r=e.key==="surtida"?"Cajas con 2 o 4 frascos de cada sabor":"Cajas de 6 o 12 frascos",o=`<a class="fb-btn fb-btn--primary${t?" fb-card__buy":""}" href="${f.origin}${e.url}" data-product-link="${e.key}">Ver producto</a>`;return`<div class="fb-pack"><p class="fb-pack__note">${r}</p>${t?o:`<div class="fb-actions">${o}</div>`}</div>`}function ve(e,t=""){let r=e.analysis[0],o=e.analysis.slice(1),i=2*Math.PI*52;return`<div class="fb-analysis ${t}">
    <div class="fb-gauge" role="img" aria-label="${d(r.label)}: ${x(r.value)}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" class="fb-gauge__track"/>
        <circle cx="60" cy="60" r="52" class="fb-gauge__bar" style="--len:${(i*r.value/100).toFixed(1)};--c:${i.toFixed(1)}"/>
        <g class="fb-gauge__ticks">${Array.from({length:40},(s,a)=>`<line x1="60" y1="2" x2="60" y2="${a%5?5:8}" transform="rotate(${a*9} 60 60)"/>`).join("")}</g>
      </svg>
      <div class="fb-gauge__val"><b>${x(r.value)}<small>%</small></b><span>Prote\xEDna</span></div>
    </div>
    <ul class="fb-bars">
      ${o.map(s=>`<li><span class="fb-bars__l">${d(s.label)}</span><span class="fb-bars__t"><i style="--v:${s.value/100}"></i></span><span class="fb-bars__v">${x(s.value)}${s.unit}</span></li>`).join("")}
      ${e.energy?`<li class="fb-bars__energy"><span class="fb-bars__l">Energ\xEDa</span><span class="fb-bars__v">${d(e.energy)}</span></li>`:""}
    </ul>
    <p class="fb-source">An\xE1lisis garantizado cada 100 g, seg\xFAn la etiqueta y la ficha oficial del producto.</p>
  </div>`}function N(e,t){let r=e.fillable?`
      <div class="fb-combo" data-block="fill">
        <p class="fb-combo__label">Formato rellenable</p>
        <ol class="fb-steps" aria-label="C\xF3mo se usa">
          <li data-step="1"><b>01</b> Cavidad del bocado</li>
          <li data-step="2"><b>02</b> Coloc\xE1s la pastilla</li>
          <li data-step="3"><b>03</b> Se convierte en premio</li>
        </ol>
        <p class="fb-note">Respet\xE1 siempre las indicaciones de tu veterinario sobre c\xF3mo darle cada medicamento.</p>
        <figure class="fb-photo" data-photo="${e.key}">
          <img src="{A}${e.photo}" alt="${d(e.photoAlt)}" loading="lazy" decoding="async" width="733" height="1100">
          <figcaption>Foto real</figcaption>
        </figure>
      </div>`:"",o=`
      <div class="fb-combo fb-combo--data" data-block="data">
        <p class="fb-combo__label">${y(d(e.name)+", en n\xFAmeros")}</p>
        ${ve(e)}
        ${P(e)}
      </div>`;return`<div class="fb-panel fb-panel--${t} fb-p-intro fb-p-intro--fill" data-panel="${e.key}" id="fb-${e.key}">
    <p class="fb-kicker"><span>Variedad ${e.index}</span></p>
    <h2 class="fb-variety"><span class="fb-variety__brand">Future Bites</span>${d(e.name)}</h2>
    <p class="fb-lead">${d(e.tagline)}</p>
    <ul class="fb-chips">
      <li>Frasco 200 cc \xB7 ${d(e.content)}</li>
      <li>${e.fillable?"Rellenable":"Pescado entero"}</li>
      <li>Un solo ingrediente</li>
    </ul>
    <div class="fb-slot">${r}${o}
    </div>
    <img class="fb-static" src="{A}${e.jar}" alt="Frasco de ${d(e.fullName)}" loading="lazy" decoding="async">
  </div>`}function ge(e){return U[e].map(t=>`<div class="fb-co${t.dx<0?" fb-co--l":""}" data-co="${t.id}" data-co-group="${e}" style="--dx:${t.dx}px;--dy:${t.dy}px;--len:${Math.hypot(t.dx,t.dy).toFixed(1)}px;--ang:${(Math.atan2(t.dy,t.dx)*180/Math.PI).toFixed(1)}deg">
      <span class="fb-co__line" aria-hidden="true"></span>
      <button class="fb-co__dot" type="button" aria-expanded="false" aria-controls="fb-co-${t.id}" aria-label="${d(t.title)}: ${d(t.value)}"></button>
      <div class="fb-co__label" id="fb-co-${t.id}"><span class="fb-co__t">${d(t.title)}</span><b>${d(t.value)}</b><span class="fb-co__more">${d(t.more)}</span></div>
    </div>`).join("")}function he(e){let t=e.analysis[0],r=e.analysis[1];return`<dl class="fb-cmp__dl">
    <div><dt>Ingrediente</dt><dd>${d(e.ingredient)}</dd></div>
    <div><dt>Presentaci\xF3n</dt><dd>Frasco 200 cc \xB7 ${d(e.content)}</dd></div>
    <div><dt>Piezas</dt><dd>${d(e.pieces)}</dd></div>
    <div><dt>Rellenable</dt><dd>${e.fillable?"S\xED, con cavidad para pastilla":"No"}</dd></div>
    <div><dt>Prote\xEDna bruta</dt><dd><span class="fb-mini"><i style="--v:${t.value/100}"></i></span>${x(t.value)}%</dd></div>
    <div><dt>Grasa bruta</dt><dd><span class="fb-mini"><i style="--v:${r.value/100}"></i></span>${x(r.value)}%</dd></div>
    ${e.energy?`<div><dt>Energ\xEDa</dt><dd>${d(e.energy)}</dd></div>`:""}
  </dl>`}function se({assets:e,mode:t,showNav:r}){let o=e;return`
  <a class="fb-skip" href="#fb-shop">Saltar el recorrido e ir a los productos</a>
  ${r?`<header class="fb-nav">
      <a class="fb-nav__logo" href="${f.origin}/" aria-label="Future Bites, inicio"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164"></a>
      <nav class="fb-nav__links" aria-label="Secciones">
        ${h.map(a=>`<button type="button" data-goto="${a.key}">${d(a.name)}</button>`).join("")}
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
        <h1 class="fb-display">${y("El futuro tiene <em>otro sabor.</em>")}</h1>
        <p class="fb-lead">Snacks deshidratados para perros, de un solo ingrediente y sin conservantes.</p>
        <div class="fb-actions">
          <a class="fb-btn fb-btn--primary" href="#fb-shop">Ver productos</a>
          <button class="fb-btn fb-btn--ghost fb-btn--play" type="button" data-play><span class="fb-play" aria-hidden="true"></span>Ver la animaci\xF3n</button>
        </div>
        <img class="fb-static" src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" decoding="async">
      </div>

      <div class="fb-panel fb-panel--right fb-p-lab" data-panel="lab" id="fb-laboratorio">
        <p class="fb-kicker"><span>Laboratorio Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${y("Peque\xF1os bites. <em>Grandes ideas.</em>")}</h2>
        <ul class="fb-readout">
          <li data-read="1"><span>Ingrediente</span><b>Uno solo por variedad</b></li>
          <li data-read="2"><span>Conservantes</span><b>Sin conservantes</b></li>
          <li data-read="3"><span>Proceso</span><b>Deshidratado</b></li>
          <li data-read="4"><span>Formato</span><b>Rellenable en Pollo y Cerdo</b></li>
        </ul>
      </div>

      <div class="fb-cmparrow" aria-hidden="true">
        <svg viewBox="0 0 48 76" fill="none" stroke-linecap="square">
          <circle cx="24" cy="6" r="4" class="fb-cmparrow__dot"/>
          <line x1="24" y1="12" x2="24" y2="26" class="fb-cmparrow__stem"/>
          <path d="M8 30 L24 44 L40 30" class="fb-cmparrow__c fb-cmparrow__c--1"/>
          <path d="M8 44 L24 58 L40 44" class="fb-cmparrow__c fb-cmparrow__c--2"/>
          <path d="M8 58 L24 72 L40 58" class="fb-cmparrow__c fb-cmparrow__c--3"/>
        </svg>
      </div>
      <div class="fb-callouts" data-callouts>${ge("cornalitos")}</div>

      ${N(z.pollo,"left")}
      ${N(z.cerdo,"right")}
      ${N(z.cornalitos,"left")}

      <div class="fb-panel fb-panel--wide fb-p-compare" data-panel="compare" id="fb-comparar">
        <div class="fb-cmp__head">
          <p class="fb-kicker"><span>Comparador</span></p>
          <h2 class="fb-display fb-display--md">${y("Eleg\xED tu <em>bite.</em>")}</h2>
        </div>
        <div class="fb-cmp__tabs" role="tablist" aria-label="Variedades">
          ${h.map((a,l)=>`<button role="tab" type="button" id="fb-tab-${a.key}" aria-controls="fb-tp-${a.key}" aria-selected="${l===0}" tabindex="${l===0?0:-1}" data-cmp="${l}"><span>${a.index}</span>${d(a.name)}</button>`).join("")}
        </div>
        ${h.map((a,l)=>`<div class="fb-cmp__panel" role="tabpanel" id="fb-tp-${a.key}" aria-labelledby="fb-tab-${a.key}" ${l===0?"":"hidden"}>
          ${he(a)}
          ${P(a)}
        </div>`).join("")}
      </div>

      <div class="fb-panel fb-panel--left fb-p-universe" data-panel="universe" id="fb-universo">
        <p class="fb-kicker"><span>Universo Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${y("Dise\xF1ados para una <em>nueva generaci\xF3n</em> de perros.")}</h2>
        <ul class="fb-statements">
          <li data-stmt="1"><b>Un solo ingrediente</b> por variedad.</li>
          <li data-stmt="2"><b>Funcionales</b> por dise\xF1o.</li>
          <li data-stmt="3"><b>Nacidos en Domani</b>, Rosario.</li>
        </ul>
        <a class="fb-btn fb-btn--primary" href="#fb-shop">Ver los productos</a>
        <img class="fb-static" src="{A}universo.webp" alt="Ilustraci\xF3n retrofuturista de tres perros en una ciudad del futuro" loading="lazy" decoding="async">
      </div>

      <nav class="fb-dots" aria-label="Escenas del recorrido">
        ${Q.map((a,l)=>`<button type="button" data-goto="${a.id}" aria-label="${d(a.label)}"${l===0?' aria-current="step"':""}><span>${d(a.label)}</span></button>`).join("")}
      </nav>
      <div class="fb-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
      <button class="fb-skipbtn" type="button" data-skip>Saltar animaci\xF3n <span aria-hidden="true">\u2193</span></button>
      <div class="fb-drag" aria-hidden="true"><i></i>Arrastr\xE1 el frasco para girarlo</div>
    </div>
  </section>

  <section class="fb-shop" id="fb-shop" aria-labelledby="fb-shop-title">
    <div class="fb-shop__in">
      <p class="fb-kicker fb-kicker--dark"><span>Tienda Future Bites</span></p>
      <h2 class="fb-display fb-display--dark" id="fb-shop-title">${y("Snacks con <em>prop\xF3sito.</em>")}</h2>
      <div class="fb-cards">
        ${h.map(a=>`<article class="fb-card" data-card="${a.key}">
          <a class="fb-card__media" href="${f.origin}${a.url}" data-product-link="${a.key}" aria-label="Ver la ficha de ${d(a.fullName)}"><img src="{A}card-${a.key}.webp" alt="Frasco de ${d(a.fullName)}" width="900" height="750" loading="lazy" decoding="async"></a>
          <div class="fb-card__body">
            <h3 class="fb-card__name">${d(a.name)}</h3>
            ${P(a,!0)}
          </div>
        </article>`).join("")}
      </div>
      <article class="fb-boxcard" data-card="surtida">
        <a class="fb-boxcard__media" href="${f.origin}${L.url}" data-product-link="surtida" aria-label="Ver la ficha de ${d(L.fullName)}"><img src="{A}card-surtida.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" width="1400" height="700" loading="lazy" decoding="async"></a>
        <div class="fb-boxcard__body">
          <p class="fb-card__idx">Surtida</p>
          <h3 class="fb-boxcard__title">${y("Los tres sabores en una caja")}</h3>
          ${P(L,!0)}
        </div>
      </article>
    </div>
  </section>`.replaceAll("{A}",o)}function re(e,t){let r=Object.fromEntries(te.map(i=>[i.key,i])),o=t==="store";e.querySelectorAll("[data-product-link]").forEach(i=>{let s=r[i.dataset.productLink];s&&(i.href=(o?"":f.origin)+s.url,o||(i.target="_blank",i.rel="noopener"))}),e.querySelectorAll("[data-catalog]").forEach(i=>{i.href=(o?"":f.origin)+f.catalog})}function q(e,t){let r=[...e.querySelectorAll("[data-cmp]")],o=(i,s)=>{r.forEach((a,l)=>{let u=i===l;a.setAttribute("aria-selected",u),a.tabIndex=u?0:-1;let m=e.querySelector("#"+a.getAttribute("aria-controls"));m&&(m.hidden=!u)}),s&&r[i].focus(),t&&_.to(t.state.cmp,{sel:i,u:ee[i],duration:.9,ease:"power3.inOut",overwrite:!0})};r.forEach((i,s)=>{i.addEventListener("click",()=>o(s)),i.addEventListener("keydown",a=>{(a.key==="ArrowRight"||a.key==="ArrowLeft")&&(a.preventDefault(),o((s+(a.key==="ArrowRight"?1:r.length-1))%r.length,!0))})})}function ie(e,t){let r=[];return Object.entries(U).forEach(([o,i])=>i.forEach(s=>{let a=e.querySelector(`[data-co="${s.id}"]`);a&&r.push({el:a,c:s})})),e.querySelectorAll(".fb-co__dot").forEach(o=>o.addEventListener("click",()=>{let i=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!i)),o.closest(".fb-co").classList.toggle("is-open",!i)})),function(){for(let{el:i,c:s}of r){if(i.style.visibility==="hidden"||i.style.opacity==="0")continue;let a=t.project(s.obj,s.u,s.v);a&&(i.style.transform=`translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`)}}}function oe(e,t){let r=e.querySelector(".fb-cmparrow");if(!r)return()=>{};let o=!1;return function(){let s=t.state,a=Math.min(1,s.trio.o)*s.cmp.on,l=a>.01?t.project("trio",s.cmp.u,ae):null;if(!l){o&&(r.style.opacity="0",o=!1);return}r.style.opacity=a.toFixed(3),r.style.transform=`translate3d(${l.x.toFixed(1)}px, ${l.y.toFixed(1)}px, 0)`,o=!0}}function ne(e,t){let r=e.querySelector(".fb-canvas"),o=e.querySelector(".fb-drag"),i=l=>{let u=r.getBoundingClientRect();return[l.clientX-u.left,l.clientY-u.top]},s=null;r.addEventListener("pointerdown",l=>{if(l.button!==0)return;let u=t.pickJar(...i(l));u&&(s={k:u,x:l.clientX,t:performance.now(),v:0,id:l.pointerId},r.setPointerCapture(l.pointerId),t.grabJar(u),e.classList.add("is-dragging"),o&&o.classList.add("is-used"))}),r.addEventListener("pointermove",l=>{if(!s){l.pointerType==="mouse"&&e.classList.toggle("is-grab",!!t.pickJar(...i(l)));return}let u=performance.now(),m=(l.clientX-s.x)*.011,$=Math.max(8,u-s.t);s.v=m*(16/$),s.x=l.clientX,s.t=u,t.dragJar(s.k,m)});let a=l=>{!s||l.pointerId!==s.id||(t.releaseJar(s.k,performance.now()-s.t>90?0:s.v),s=null,e.classList.remove("is-dragging"))};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a),r.addEventListener("lostpointercapture",a)}function B(e,t,r){e.addEventListener("click",o=>{let i=o.target.closest("[data-goto]");if(!i)return;o.preventDefault();let s=i.dataset.goto;if(t&&t.scrollToScene(s,!r))return;let a=e.querySelector("#fb-"+s)||e.querySelector("#fb-shop");a&&a.scrollIntoView({behavior:r?"auto":"smooth",block:"start"})})}function le(e,t){t||_.from(e.querySelectorAll(".fb-card, .fb-boxcard"),{y:40,autoAlpha:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:e.querySelector(".fb-cards"),start:"top 82%"}})}_.registerPlugin(j);async function ye(e){if(e.dataset.fbReady)return;e.dataset.fbReady="1";let t=e.dataset.assets||"assets/",r=location.hostname,o=e.dataset.mode||(window.LS||/mitiendanube\.com$/.test(r)?"store":"review"),i=e.dataset.nav?e.dataset.nav==="true":o!=="store";e.classList.add("fb"),/[?&]tema=oscuro\b/.test(location.search)?e.classList.remove("fb--white"):(W(),e.classList.add("fb--white")),e.dataset.prerendered?i||e.querySelector(".fb-nav")?.remove():e.innerHTML=se({assets:t,mode:o,showNav:i}),e.classList.remove("fb--pending","fb--static"),e.classList.add("fb--banner");let s=/[?&]animacion\b/.test(location.search)||location.hash==="#animacion",a=()=>{let n=e.querySelector("#fb-shop");n&&n.scrollIntoView({behavior:"auto",block:"start"})};e.style.setProperty("--fb-exp-h",`${Math.round(K.end*X+100)}`);let l=matchMedia("(prefers-reduced-motion: reduce)"),u=/[?&]fb-static\b/.test(location.search),m=Z()&&!l.matches&&!u;if(re(e,o),import("./fb-ruleta-VMZ4AEW7.js").then(n=>n.setupRuleta({mode:o,assets:t})).catch(n=>console.warn("[Future Bites] Ruleta no disponible",n)),!m){e.classList.add("fb--static");let n=(c="laboratorio")=>{e.classList.remove("fb--banner");let p=e.querySelector("#fb-"+c);p&&p.scrollIntoView({behavior:"auto",block:"start"})};e.addEventListener("click",c=>{let p=c.target.closest("[data-play]"),k=c.target.closest("[data-goto]");p?(c.preventDefault(),n()):k&&e.classList.contains("fb--banner")&&(c.preventDefault(),c.stopImmediatePropagation(),n(k.dataset.goto))},!0),s&&e.classList.remove("fb--banner"),q(e,null),B(e,null,!0);return}e.classList.add("fb--3d","fb--loading");let $=Y();e.dataset.quality=$.tier;let{World:ce}=await import("./fb-world-RAAC4VOW.js"),{buildDirector:ue}=await import("./fb-director-TRVEPKOH.js"),be=e.querySelector(".fb-canvas"),S=e.querySelector(".fb-stage"),b;try{b=new ce(be,{quality:$,assets:t}),await b.loadProducts()}catch(n){console.warn("[Future Bites] 3D no disponible, se usa la versi\xF3n est\xE1tica.",n),e.classList.remove("fb--3d","fb--loading"),e.classList.add("fb--static"),q(e,null),B(e,null,!0);return}let C=()=>{let n=S.getBoundingClientRect();b.resize(Math.max(1,n.width),Math.max(1,n.height))};if(C(),o==="store"){let n=-1,c=!1,p=()=>{c=!1;let g=0;document.querySelectorAll('.draft-bar, .sticky-header-wrapper, .js-head-main, .head-main, header, [data-store="head"]').forEach(M=>{if(e.contains(M))return;let O=getComputedStyle(M);if(!/fixed|sticky/.test(O.position)||O.visibility==="hidden"||O.display==="none")return;let w=M.getBoundingClientRect();w.top<=1&&w.bottom>0&&w.width>=innerWidth*.5&&w.height<innerHeight*.4&&(g=Math.max(g,Math.round(w.bottom)))}),Math.abs(g-n)>1&&(n=g,e.style.setProperty("--fb-top",g+"px"),C())},k,R=()=>{c||(c=!0,requestAnimationFrame(p)),clearTimeout(k),k=setTimeout(p,450)};addEventListener("scroll",R,{passive:!0}),addEventListener("resize",R),document.addEventListener("transitionend",g=>{e.contains(g.target)||R()},!0),p()}let v=ue(e,b);v.st.disable(!1);let pe=_.fromTo(b.state.form,{ry:-.08},{ry:-.34,duration:5,ease:"sine.inOut",yoyo:!0,repeat:-1}),T=!1,F=(n="laboratorio",c=!0)=>{T||(T=!0,pe.kill(),b.state.form.ry=-.08,e.classList.remove("fb--banner"),C(),v.st.enable(),j.refresh(),requestAnimationFrame(()=>v.scrollToScene(n,c)))};e.addEventListener("click",n=>{if(n.target.closest("[data-play]")){n.preventDefault(),F();return}if(n.target.closest("[data-skip]")){n.preventDefault(),a();return}let c=n.target.closest("[data-goto]");c&&!T&&(n.preventDefault(),n.stopImmediatePropagation(),F(c.dataset.goto))},!0);let D=null;if(e.classList.contains("fb--white"))try{D=(await import("./fb-deco-6HDGFHHJ.js")).buildDeco(S)}catch(n){console.warn("[Future Bites] Detalles no disponibles",n)}let fe=ie(e,b),me=oe(e,b);q(e,b),ne(e,b),B(e,v,!1),le(e,!1),e.classList.remove("fb--loading"),/[?&]fb-debug\b/.test(location.search)&&(window.__fb={world:b,director:v,openJourney:F}),s&&F("inicio",!1),$.parallax&&S.addEventListener("pointermove",n=>{let c=S.getBoundingClientRect();b.setPointer((n.clientX-c.left)/c.width*2-1,(n.clientY-c.top)/c.height*2-1)},{passive:!0});let V=!0;new IntersectionObserver(([n])=>{V=n.isIntersecting},{rootMargin:"100px"}).observe(e.querySelector(".fb-exp"));let I=0,E=0,A=$.dpr,J=performance.now();function G(n){requestAnimationFrame(G);let c=n-J;if(J=n,!(!V||document.hidden)&&(b.render(),D&&D(v.tl.time(),v.tl.progress()),fe(),me(),I+=c,E++,E===90)){let p=I/E;I=0,E=0,p>30&&A>1&&(A=Math.max(1,A-.25),b.setDpr(A))}}requestAnimationFrame(G);let H;addEventListener("resize",()=>{clearTimeout(H),H=setTimeout(()=>{C(),j.refresh()},120)}),l.addEventListener?.("change",()=>location.reload()),window.addEventListener("pagehide",()=>b.dispose(),{once:!0})}function de(){document.querySelectorAll("[data-fb-home], #fb-home").forEach(e=>ye(e))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",de):de();
