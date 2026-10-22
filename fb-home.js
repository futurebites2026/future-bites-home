import{a as x,b as T}from"./fb-chunk-UJHWT3O5.js";import{b as J,c as W,e as X,f as K,g as Q,h as Y}from"./fb-chunk-4SXRHZMA.js";var b={origin:"https://futurebites.mitiendanube.com",catalog:"/productos/",cart:"/comprar/",snapshotDate:"19/10/2026"},h=[{key:"pollo",index:"01",name:"Pollo",fullName:"Future Bites Pollo",productId:367924923,url:"/productos/future-bites-pollo-1jxp2/",jar:"jar-pollo.webp",bite:"bite-pollo.webp",photo:"foto-pollo-pastilla.webp",photoAlt:"Bocado de Future Bites Pollo con una pastilla colocada en su cavidad",tagline:"Bocados de pollo deshuesado fresco, deshidratados.",ingredient:"Carne de pollo deshuesada fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:72,unit:"%"},{label:"Grasa bruta",value:4,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5.5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"3.500 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cerdo",index:"02",name:"Cerdo",fullName:"Future Bites Cerdo",productId:367924746,url:"/productos/future-bites-cerdo-snack-deshidratado-perros/",jar:"jar-cerdo.webp",bite:"bite-cerdo.webp",photo:"foto-cerdo-pastilla.webp",photoAlt:"Mano colocando una pastilla dentro de un bocado de Future Bites Cerdo",tagline:"Bocados de cerdo magro fresco, deshidratados. El sabor m\xE1s intenso de la l\xEDnea.",ingredient:"Carne de cerdo magra fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:68,unit:"%"},{label:"Grasa bruta",value:10,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"4.100 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cornalitos",index:"03",name:"Cornalitos",fullName:"Future Bites Cornalitos",productId:367925431,url:"/productos/future-bites-cornalitos-1wr3d/",jar:"jar-cornalitos.webp",tagline:"Cornalitos enteros deshidratados. El sabor que m\xE1s premios rinde.",ingredient:"Cornalitos (pescado entero fresco) deshidratados",fillable:!1,content:"20 g",pieces:"Unos 40 cornalitos de 0,4 g",analysis:[{label:"Prote\xEDna bruta",value:62,unit:"%"},{label:"Grasa bruta",value:7.5,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:13,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:null,price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}}];var k={key:"surtida",name:"Surtida",fullName:"Future Bites Surtida",productId:375760431,url:"/productos/future-bites-caja-x6/",perFlavor:{x6:2,x12:4}},Z=[...h,k];var y=e=>String(e).replace(".",",");var l=e=>String(e).replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]),f=Object.fromEntries(h.map(e=>[e.key,e])),O={pollo:[{id:"p1",obj:"jarP",u:.5,v:.93,dx:150,dy:-70,title:"Frasco de vidrio",value:"200 cc",more:"Tapa negra y etiqueta envolvente Future Bites."},{id:"p2",obj:"jarP",u:.62,v:.5,dx:170,dy:30,title:"Un solo ingrediente",value:"Pollo deshuesado fresco",more:"Deshidratado, sin conservantes."},{id:"p3",obj:"jarP",u:.42,v:.12,dx:-190,dy:40,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Cada bocado tiene una cavidad rellenable."}],cerdo:[{id:"c1",obj:"jarC",u:.55,v:.92,dx:-170,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"La misma familia de envase, con etiqueta naranja."},{id:"c2",obj:"jarC",u:.4,v:.5,dx:-190,dy:40,title:"Un solo ingrediente",value:"Cerdo magro fresco",more:"Deshidratado, sin conservantes."},{id:"c3",obj:"jarC",u:.6,v:.12,dx:170,dy:30,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Bocados rellenables, como en Pollo."}],cornalitos:[{id:"k1",obj:"jarK",u:.5,v:.93,dx:160,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"Etiqueta gris carb\xF3n y tapa con sticker azul."},{id:"k2",obj:"jarK",u:.6,v:.18,dx:180,dy:40,title:"Contenido",value:"20 g \xB7 unos 40 cornalitos",more:"Cada cornalito pesa alrededor de 0,4 g."}]},m=e=>e.normalize("NFD").replace(/\u0301/g,"").normalize("NFC");function S(e,a=!1){let r=e.key==="surtida"?"Cajas con 2 o 4 frascos de cada sabor":"Cajas de 6 o 12 frascos",o=`<a class="fb-btn fb-btn--primary${a?" fb-card__buy":""}" href="${b.origin}${e.url}" data-product-link="${e.key}">Ver producto</a>`;return`<div class="fb-pack"><p class="fb-pack__note">${r}</p>${a?o:`<div class="fb-actions">${o}</div>`}</div>`}function ue(e,a=""){let r=e.analysis[0],o=e.analysis.slice(1),i=2*Math.PI*52;return`<div class="fb-analysis ${a}">
    <div class="fb-gauge" role="img" aria-label="${l(r.label)}: ${y(r.value)}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" class="fb-gauge__track"/>
        <circle cx="60" cy="60" r="52" class="fb-gauge__bar" style="--len:${(i*r.value/100).toFixed(1)};--c:${i.toFixed(1)}"/>
        <g class="fb-gauge__ticks">${Array.from({length:40},(s,t)=>`<line x1="60" y1="2" x2="60" y2="${t%5?5:8}" transform="rotate(${t*9} 60 60)"/>`).join("")}</g>
      </svg>
      <div class="fb-gauge__val"><b>${y(r.value)}<small>%</small></b><span>Prote\xEDna</span></div>
    </div>
    <ul class="fb-bars">
      ${o.map(s=>`<li><span class="fb-bars__l">${l(s.label)}</span><span class="fb-bars__t"><i style="--v:${s.value/100}"></i></span><span class="fb-bars__v">${y(s.value)}${s.unit}</span></li>`).join("")}
      ${e.energy?`<li class="fb-bars__energy"><span class="fb-bars__l">Energ\xEDa</span><span class="fb-bars__v">${l(e.energy)}</span></li>`:""}
    </ul>
    <p class="fb-source">An\xE1lisis garantizado cada 100 g, seg\xFAn la etiqueta y la ficha oficial del producto.</p>
  </div>`}function I(e,a){return`<div class="fb-panel fb-panel--${a} fb-p-intro" data-panel="${e.key}" id="fb-${e.key}">
    <p class="fb-kicker"><span>Variedad ${e.index}</span></p>
    <h2 class="fb-variety"><span class="fb-variety__brand">Future Bites</span>${l(e.name)}</h2>
    <p class="fb-lead">${l(e.tagline)}</p>
    <ul class="fb-chips">
      <li>Frasco 200 cc \xB7 ${l(e.content)}</li>
      <li>${e.fillable?"Rellenable":"Pescado entero"}</li>
      <li>Un solo ingrediente</li>
    </ul>
    <img class="fb-static" src="{A}${e.jar}" alt="Frasco de ${l(e.fullName)}" loading="lazy" decoding="async">
  </div>`}function ee(e,a,r){return`<div class="fb-panel fb-panel--${a} fb-p-fill" data-panel="${e.key}-fill">
    <p class="fb-kicker"><span>Formato rellenable</span></p>
    <h3 class="fb-h3">${m(r)}</h3>
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
  </div>`}function M(e,a){return`<div class="fb-panel fb-panel--${a} fb-p-data" data-panel="${e.key}-data">
    <p class="fb-kicker"><span>${l(e.fullName)}</span></p>
    <h3 class="fb-h3">${m(l(e.name)+", en n\xFAmeros.")}</h3>
    ${ue(e)}
    <dl class="fb-spec">
      <div><dt>Ingrediente</dt><dd>${l(e.ingredient)}</dd></div>
      <div><dt>Contenido</dt><dd>${l(e.content)} \xB7 ${l(e.pieces)}</dd></div>
    </dl>
    ${S(e)}
  </div>`}function D(e){return O[e].map(a=>`<div class="fb-co${a.dx<0?" fb-co--l":""}" data-co="${a.id}" data-co-group="${e}" style="--dx:${a.dx}px;--dy:${a.dy}px;--len:${Math.hypot(a.dx,a.dy).toFixed(1)}px;--ang:${(Math.atan2(a.dy,a.dx)*180/Math.PI).toFixed(1)}deg">
      <span class="fb-co__line" aria-hidden="true"></span>
      <button class="fb-co__dot" type="button" aria-expanded="false" aria-controls="fb-co-${a.id}" aria-label="${l(a.title)}: ${l(a.value)}"></button>
      <div class="fb-co__label" id="fb-co-${a.id}"><span class="fb-co__t">${l(a.title)}</span><b>${l(a.value)}</b><span class="fb-co__more">${l(a.more)}</span></div>
    </div>`).join("")}function pe(e){let a=e.analysis[0],r=e.analysis[1];return`<dl class="fb-cmp__dl">
    <div><dt>Ingrediente</dt><dd>${l(e.ingredient)}</dd></div>
    <div><dt>Presentaci\xF3n</dt><dd>Frasco 200 cc \xB7 ${l(e.content)}</dd></div>
    <div><dt>Piezas</dt><dd>${l(e.pieces)}</dd></div>
    <div><dt>Rellenable</dt><dd>${e.fillable?"S\xED, con cavidad para pastilla":"No"}</dd></div>
    <div><dt>Prote\xEDna bruta</dt><dd><span class="fb-mini"><i style="--v:${a.value/100}"></i></span>${y(a.value)}%</dd></div>
    <div><dt>Grasa bruta</dt><dd><span class="fb-mini"><i style="--v:${r.value/100}"></i></span>${y(r.value)}%</dd></div>
    ${e.energy?`<div><dt>Energ\xEDa</dt><dd>${l(e.energy)}</dd></div>`:""}
  </dl>`}function ae({assets:e,mode:a,showNav:r}){let o=e;return`
  <a class="fb-skip" href="#fb-shop">Saltar el recorrido e ir a los productos</a>
  ${r?`<header class="fb-nav">
      <a class="fb-nav__logo" href="${b.origin}/" aria-label="Future Bites, inicio"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164"></a>
      <nav class="fb-nav__links" aria-label="Secciones">
        ${h.map(t=>`<button type="button" data-goto="${t.key}">${l(t.name)}</button>`).join("")}
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
        <h1 class="fb-display">${m("El futuro tiene <em>otro sabor.</em>")}</h1>
        <p class="fb-lead">Snacks deshidratados para perros, de un solo ingrediente y sin conservantes.</p>
        <div class="fb-actions">
          <button class="fb-btn fb-btn--primary" type="button" data-goto="laboratorio">Explorar Future Bites</button>
          <a class="fb-btn fb-btn--ghost" href="#fb-shop">Ver productos</a>
        </div>
        <img class="fb-static" src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" decoding="async">
      </div>

      <div class="fb-panel fb-panel--right fb-p-lab" data-panel="lab" id="fb-laboratorio">
        <p class="fb-kicker"><span>Laboratorio Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${m("Peque\xF1os bites. <em>Grandes ideas.</em>")}</h2>
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
      <div class="fb-callouts" data-callouts>${D("pollo")}${D("cerdo")}${D("cornalitos")}</div>

      ${I(f.pollo,"left")}
      ${ee(f.pollo,"left","Una cavidad pensada para la pastilla.")}
      ${M(f.pollo,"right")}

      ${I(f.cerdo,"right")}
      ${ee(f.cerdo,"right","El mismo gesto, con el sabor m\xE1s intenso.")}
      ${M(f.cerdo,"left")}

      ${I(f.cornalitos,"left")}
      ${M(f.cornalitos,"right")}

      <div class="fb-panel fb-panel--wide fb-p-compare" data-panel="compare" id="fb-comparar">
        <div class="fb-cmp__head">
          <p class="fb-kicker"><span>Comparador</span></p>
          <h2 class="fb-display fb-display--md">${m("Eleg\xED tu <em>bite.</em>")}</h2>
        </div>
        <div class="fb-cmp__tabs" role="tablist" aria-label="Variedades">
          ${h.map((t,n)=>`<button role="tab" type="button" id="fb-tab-${t.key}" aria-controls="fb-tp-${t.key}" aria-selected="${n===0}" tabindex="${n===0?0:-1}" data-cmp="${n}"><span>${t.index}</span>${l(t.name)}</button>`).join("")}
        </div>
        ${h.map((t,n)=>`<div class="fb-cmp__panel" role="tabpanel" id="fb-tp-${t.key}" aria-labelledby="fb-tab-${t.key}" ${n===0?"":"hidden"}>
          ${pe(t)}
          ${S(t)}
        </div>`).join("")}
      </div>

      <div class="fb-panel fb-panel--left fb-p-universe" data-panel="universe" id="fb-universo">
        <p class="fb-kicker"><span>Universo Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${m("Dise\xF1ados para una <em>nueva generaci\xF3n</em> de perros.")}</h2>
        <ul class="fb-statements">
          <li data-stmt="1"><b>Un solo ingrediente</b> por variedad.</li>
          <li data-stmt="2"><b>Funcionales</b> por dise\xF1o.</li>
          <li data-stmt="3"><b>Nacidos en Domani</b>, Rosario.</li>
        </ul>
        <a class="fb-btn fb-btn--primary" href="#fb-shop">Ver los productos</a>
        <img class="fb-static" src="{A}universo.webp" alt="Ilustraci\xF3n retrofuturista de tres perros en una ciudad del futuro" loading="lazy" decoding="async">
      </div>

      <nav class="fb-dots" aria-label="Escenas del recorrido">
        ${W.map((t,n)=>`<button type="button" data-goto="${t.id}" aria-label="${l(t.label)}"${n===0?' aria-current="step"':""}><span>${l(t.label)}</span></button>`).join("")}
      </nav>
      <div class="fb-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
      <div class="fb-drag" aria-hidden="true"><i></i>Arrastr\xE1 el frasco para girarlo</div>
    </div>
  </section>

  <section class="fb-shop" id="fb-shop" aria-labelledby="fb-shop-title">
    <div class="fb-shop__in">
      <p class="fb-kicker fb-kicker--dark"><span>Tienda Future Bites</span></p>
      <h2 class="fb-display fb-display--dark" id="fb-shop-title">${m("Snacks con <em>prop\xF3sito.</em>")}</h2>
      <div class="fb-cards">
        ${h.map(t=>`<article class="fb-card" data-card="${t.key}">
          <a class="fb-card__media" href="${b.origin}${t.url}" data-product-link="${t.key}" aria-label="Ver la ficha de ${l(t.fullName)}"><img src="{A}card-${t.key}.webp" alt="Frasco de ${l(t.fullName)}" width="900" height="750" loading="lazy" decoding="async"></a>
          <div class="fb-card__body">
            <h3 class="fb-card__name">${l(t.name)}</h3>
            ${S(t,!0)}
          </div>
        </article>`).join("")}
      </div>
      <article class="fb-boxcard" data-card="surtida">
        <a class="fb-boxcard__media" href="${b.origin}${k.url}" data-product-link="surtida" aria-label="Ver la ficha de ${l(k.fullName)}"><img src="{A}card-surtida.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" width="1400" height="700" loading="lazy" decoding="async"></a>
        <div class="fb-boxcard__body">
          <p class="fb-card__idx">Surtida</p>
          <h3 class="fb-boxcard__title">${m("Los tres sabores en una caja")}</h3>
          ${S(k,!0)}
        </div>
      </article>
    </div>
  </section>`.replaceAll("{A}",o)}function te(e,a){let r=Object.fromEntries(Z.map(i=>[i.key,i])),o=a==="store";e.querySelectorAll("[data-product-link]").forEach(i=>{let s=r[i.dataset.productLink];s&&(i.href=(o?"":b.origin)+s.url,o||(i.target="_blank",i.rel="noopener"))}),e.querySelectorAll("[data-catalog]").forEach(i=>{i.href=(o?"":b.origin)+b.catalog})}function L(e,a){let r=[...e.querySelectorAll("[data-cmp]")],o=(i,s)=>{r.forEach((t,n)=>{let c=i===n;t.setAttribute("aria-selected",c),t.tabIndex=c?0:-1;let v=e.querySelector("#"+t.getAttribute("aria-controls"));v&&(v.hidden=!c)}),s&&r[i].focus(),a&&x.to(a.state.cmp,{sel:i,u:Q[i],duration:.9,ease:"power3.inOut",overwrite:!0})};r.forEach((i,s)=>{i.addEventListener("click",()=>o(s)),i.addEventListener("keydown",t=>{(t.key==="ArrowRight"||t.key==="ArrowLeft")&&(t.preventDefault(),o((s+(t.key==="ArrowRight"?1:r.length-1))%r.length,!0))})})}function se(e,a){let r=[];return Object.entries(O).forEach(([o,i])=>i.forEach(s=>{let t=e.querySelector(`[data-co="${s.id}"]`);t&&r.push({el:t,c:s})})),e.querySelectorAll(".fb-co__dot").forEach(o=>o.addEventListener("click",()=>{let i=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!i)),o.closest(".fb-co").classList.toggle("is-open",!i)})),function(){for(let{el:i,c:s}of r){if(i.style.visibility==="hidden"||i.style.opacity==="0")continue;let t=a.project(s.obj,s.u,s.v);t&&(i.style.transform=`translate3d(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px, 0)`)}}}function re(e,a){let r=e.querySelector(".fb-cmparrow");if(!r)return()=>{};let o=!1;return function(){let s=a.state,t=Math.min(1,s.trio.o)*s.cmp.on,n=t>.01?a.project("trio",s.cmp.u,Y):null;if(!n){o&&(r.style.opacity="0",o=!1);return}r.style.opacity=t.toFixed(3),r.style.transform=`translate3d(${n.x.toFixed(1)}px, ${n.y.toFixed(1)}px, 0)`,o=!0}}function ie(e,a){let r=e.querySelector(".fb-canvas"),o=e.querySelector(".fb-drag"),i=n=>{let c=r.getBoundingClientRect();return[n.clientX-c.left,n.clientY-c.top]},s=null;r.addEventListener("pointerdown",n=>{if(n.button!==0)return;let c=a.pickJar(...i(n));c&&(s={k:c,x:n.clientX,t:performance.now(),v:0,id:n.pointerId},r.setPointerCapture(n.pointerId),a.grabJar(c),e.classList.add("is-dragging"),o&&o.classList.add("is-used"))}),r.addEventListener("pointermove",n=>{if(!s){n.pointerType==="mouse"&&e.classList.toggle("is-grab",!!a.pickJar(...i(n)));return}let c=performance.now(),v=(n.clientX-s.x)*.011,E=Math.max(8,c-s.t);s.v=v*(16/E),s.x=n.clientX,s.t=c,a.dragJar(s.k,v)});let t=n=>{!s||n.pointerId!==s.id||(a.releaseJar(s.k,performance.now()-s.t>90?0:s.v),s=null,e.classList.remove("is-dragging"))};r.addEventListener("pointerup",t),r.addEventListener("pointercancel",t),r.addEventListener("lostpointercapture",t)}function F(e,a,r){e.addEventListener("click",o=>{let i=o.target.closest("[data-goto]");if(!i)return;o.preventDefault();let s=i.dataset.goto;if(a&&a.scrollToScene(s,!r))return;let t=e.querySelector("#fb-"+s)||e.querySelector("#fb-shop");t&&t.scrollIntoView({behavior:r?"auto":"smooth",block:"start"})})}function oe(e,a){a||x.from(e.querySelectorAll(".fb-card, .fb-boxcard"),{y:40,autoAlpha:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:e.querySelector(".fb-cards"),start:"top 82%"}})}x.registerPlugin(T);async function be(e){if(e.dataset.fbReady)return;e.dataset.fbReady="1";let a=e.dataset.assets||"assets/",r=location.hostname,o=e.dataset.mode||(window.LS||/mitiendanube\.com$/.test(r)?"store":"review"),i=e.dataset.nav?e.dataset.nav==="true":o!=="store";e.classList.add("fb"),e.dataset.prerendered?i||e.querySelector(".fb-nav")?.remove():e.innerHTML=ae({assets:a,mode:o,showNav:i}),e.classList.remove("fb--pending","fb--static"),e.style.setProperty("--fb-exp-h",`${J.end+100}`);let s=matchMedia("(prefers-reduced-motion: reduce)"),t=/[?&]fb-static\b/.test(location.search),n=K()&&!s.matches&&!t;if(te(e,o),import("./fb-ruleta-QSA2GICQ.js").then(d=>d.setupRuleta({mode:o,assets:a})).catch(d=>console.warn("[Future Bites] Ruleta no disponible",d)),!n){e.classList.add("fb--static"),L(e,null),F(e,null,!0);return}e.classList.add("fb--3d","fb--loading");let c=X();e.dataset.quality=c.tier;let{World:v}=await import("./fb-world-MN6U3TVX.js"),{buildDirector:E}=await import("./fb-director-NHHMYSTS.js"),le=e.querySelector(".fb-canvas"),j=e.querySelector(".fb-stage"),u;try{u=new v(le,{quality:c,assets:a}),await u.loadProducts()}catch(d){console.warn("[Future Bites] 3D no disponible, se usa la versi\xF3n est\xE1tica.",d),e.classList.remove("fb--3d","fb--loading"),e.classList.add("fb--static"),L(e,null),F(e,null,!0);return}let A=()=>{let d=j.getBoundingClientRect();u.resize(Math.max(1,d.width),Math.max(1,d.height))};if(A(),o==="store"){let d=-1,p=!1,$=()=>{p=!1;let g=0;document.querySelectorAll('.draft-bar, .sticky-header-wrapper, .js-head-main, .head-main, header, [data-store="head"]').forEach(q=>{if(e.contains(q))return;let R=getComputedStyle(q);if(!/fixed|sticky/.test(R.position)||R.visibility==="hidden"||R.display==="none")return;let _=q.getBoundingClientRect();_.top<=1&&_.bottom>0&&_.width>=innerWidth*.5&&_.height<innerHeight*.4&&(g=Math.max(g,Math.round(_.bottom)))}),Math.abs(g-d)>1&&(d=g,e.style.setProperty("--fb-top",g+"px"),A())},H,B=()=>{p||(p=!0,requestAnimationFrame($)),clearTimeout(H),H=setTimeout($,450)};addEventListener("scroll",B,{passive:!0}),addEventListener("resize",B),document.addEventListener("transitionend",g=>{e.contains(g.target)||B()},!0),$()}let N=E(e,u),de=se(e,u),ce=re(e,u);L(e,u),ie(e,u),F(e,N,!1),oe(e,!1),e.classList.remove("fb--loading"),/[?&]fb-debug\b/.test(location.search)&&(window.__fb={world:u,director:N}),c.parallax&&j.addEventListener("pointermove",d=>{let p=j.getBoundingClientRect();u.setPointer((d.clientX-p.left)/p.width*2-1,(d.clientY-p.top)/p.height*2-1)},{passive:!0});let z=!0;new IntersectionObserver(([d])=>{z=d.isIntersecting},{rootMargin:"100px"}).observe(e.querySelector(".fb-exp"));let P=0,w=0,C=c.dpr,U=performance.now();function V(d){requestAnimationFrame(V);let p=d-U;if(U=d,!(!z||document.hidden)&&(u.render(),de(),ce(),P+=p,w++,w===90)){let $=P/w;P=0,w=0,$>30&&C>1&&(C=Math.max(1,C-.25),u.setDpr(C))}}requestAnimationFrame(V);let G;addEventListener("resize",()=>{clearTimeout(G),G=setTimeout(()=>{A(),T.refresh()},120)}),s.addEventListener?.("change",()=>location.reload()),window.addEventListener("pagehide",()=>u.dispose(),{once:!0})}function ne(){document.querySelectorAll("[data-fb-home], #fb-home").forEach(e=>be(e))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ne):ne();
