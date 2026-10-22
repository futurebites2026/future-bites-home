import{a as E,b as O}from"./fb-chunk-UJHWT3O5.js";import{b as J,c as W,e as K,f as Q,g as Y,h as Z}from"./fb-chunk-4SXRHZMA.js";var h={origin:"https://futurebites.mitiendanube.com",catalog:"/productos/",cart:"/comprar/",snapshotDate:"19/10/2026"},y=[{key:"pollo",index:"01",name:"Pollo",fullName:"Future Bites Pollo",productId:367924923,url:"/productos/future-bites-pollo-1jxp2/",jar:"jar-pollo.webp",bite:"bite-pollo.webp",photo:"foto-pollo-pastilla.webp",photoAlt:"Bocado de Future Bites Pollo con una pastilla colocada en su cavidad",tagline:"Bocados de pollo deshuesado fresco, deshidratados.",ingredient:"Carne de pollo deshuesada fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:72,unit:"%"},{label:"Grasa bruta",value:4,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5.5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"3.500 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cerdo",index:"02",name:"Cerdo",fullName:"Future Bites Cerdo",productId:367924746,url:"/productos/future-bites-cerdo-snack-deshidratado-perros/",jar:"jar-cerdo.webp",bite:"bite-cerdo.webp",photo:"foto-cerdo-pastilla.webp",photoAlt:"Mano colocando una pastilla dentro de un bocado de Future Bites Cerdo",tagline:"Bocados de cerdo magro fresco, deshidratados. El sabor m\xE1s intenso de la l\xEDnea.",ingredient:"Carne de cerdo magra fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:68,unit:"%"},{label:"Grasa bruta",value:10,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"4.100 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cornalitos",index:"03",name:"Cornalitos",fullName:"Future Bites Cornalitos",productId:367925431,url:"/productos/future-bites-cornalitos-1wr3d/",jar:"jar-cornalitos.webp",tagline:"Cornalitos enteros deshidratados. El sabor que m\xE1s premios rinde.",ingredient:"Cornalitos (pescado entero fresco) deshidratados",fillable:!1,content:"20 g",pieces:"Unos 40 cornalitos de 0,4 g",analysis:[{label:"Prote\xEDna bruta",value:62,unit:"%"},{label:"Grasa bruta",value:7.5,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:13,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:null,price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}}],p={key:"caja",name:"Caja x6",productId:375760431,url:"/productos/future-bites-caja-x6/",units:6,price:{short:"$56.000,00",list:"$62.222,22",available:!0},values:{pollo:"Pollo x6",cerdo:"Cerdo x6",cornalitos:"Cornalitos x6",surtida:"Surtida (2 de cada)"},variantIds:{pollo:{id:1623627748,option:"Pollo x6",available:!0},cerdo:{id:1623627750,option:"Cerdo x6",available:!0},cornalitos:{id:1623627751,option:"Cornalitos x6",available:!0},surtida:{id:1623627752,option:"Surtida (2 de cada)",available:!0}}},w=e=>String(e).replace(".",",");async function ee(e,t=""){let i=await fetch(t+e.url,{credentials:"same-origin",cache:"no-store"});if(!i.ok)throw new Error("HTTP "+i.status);let n=new DOMParser().parseFromString(await i.text(),"text/html"),o=n.querySelector("[data-variants]");if(!o)throw new Error("sin variantes");let r=JSON.parse(o.getAttribute("data-variants")),s=n.querySelector('form.js-product-form, form[action*="comprar"]'),l=s&&s.querySelector('[name="add_to_cart"]');l&&(e.productId=+l.value||e.productId);for(let[u,d]of Object.entries(e.values)){let b=r.find(m=>[m.option0,m.option1,m.option2].includes(d));b&&(e.variantIds[u]={id:b.id,price:b.price_with_payment_discount_short||b.price_short,list:b.price_short,available:!!b.available,option:d})}let a=Object.values(e.variantIds).find(u=>u.price);return a&&(e.price={short:a.price,list:a.list,available:Object.values(e.variantIds).some(u=>u.available),live:!0}),e}var c=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$=Object.fromEntries(y.map(e=>[e.key,e])),D={pollo:[{id:"p1",obj:"jarP",u:.5,v:.93,dx:150,dy:-70,title:"Frasco de vidrio",value:"200 cc",more:"Tapa negra y etiqueta envolvente Future Bites."},{id:"p2",obj:"jarP",u:.62,v:.5,dx:170,dy:30,title:"Un solo ingrediente",value:"Pollo deshuesado fresco",more:"Deshidratado, sin conservantes."},{id:"p3",obj:"jarP",u:.42,v:.12,dx:-190,dy:40,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Cada bocado tiene una cavidad rellenable."}],cerdo:[{id:"c1",obj:"jarC",u:.55,v:.92,dx:-170,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"La misma familia de envase, con etiqueta naranja."},{id:"c2",obj:"jarC",u:.4,v:.5,dx:-190,dy:40,title:"Un solo ingrediente",value:"Cerdo magro fresco",more:"Deshidratado, sin conservantes."},{id:"c3",obj:"jarC",u:.6,v:.12,dx:170,dy:30,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Bocados rellenables, como en Pollo."}],cornalitos:[{id:"k1",obj:"jarK",u:.5,v:.93,dx:160,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"Etiqueta gris carb\xF3n y tapa con sticker azul."},{id:"k2",obj:"jarK",u:.6,v:.18,dx:180,dy:40,title:"Contenido",value:"20 g \xB7 unos 40 cornalitos",more:"Cada cornalito pesa alrededor de 0,4 g."}]},x=e=>e.normalize("NFD").replace(/\u0301/g,"").normalize("NFC");function te(e,t){return`<div class="fb-price"><span class="fb-price__main" data-box-price>${c(p.price.short)}</span><span class="fb-price__alt">con transferencia \xB7 ${c(t||"Caja x6 de "+e.name)}</span></div>`}function se(e){return`<div class="fb-actions">
    <button class="fb-btn fb-btn--primary" type="button" data-buy-box="${e.key}">Agregar caja x6</button>
    <a class="fb-btn fb-btn--ghost" href="${h.origin}${p.url}" data-box-link>Ver ficha</a>
  </div>`}function pe(e,t=""){let i=e.analysis[0],n=e.analysis.slice(1),o=2*Math.PI*52;return`<div class="fb-analysis ${t}">
    <div class="fb-gauge" role="img" aria-label="${c(i.label)}: ${w(i.value)}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" class="fb-gauge__track"/>
        <circle cx="60" cy="60" r="52" class="fb-gauge__bar" style="--len:${(o*i.value/100).toFixed(1)};--c:${o.toFixed(1)}"/>
        <g class="fb-gauge__ticks">${Array.from({length:40},(r,s)=>`<line x1="60" y1="2" x2="60" y2="${s%5?5:8}" transform="rotate(${s*9} 60 60)"/>`).join("")}</g>
      </svg>
      <div class="fb-gauge__val"><b>${w(i.value)}<small>%</small></b><span>Prote\xEDna</span></div>
    </div>
    <ul class="fb-bars">
      ${n.map(r=>`<li><span class="fb-bars__l">${c(r.label)}</span><span class="fb-bars__t"><i style="--v:${r.value/100}"></i></span><span class="fb-bars__v">${w(r.value)}${r.unit}</span></li>`).join("")}
      ${e.energy?`<li class="fb-bars__energy"><span class="fb-bars__l">Energ\xEDa</span><span class="fb-bars__v">${c(e.energy)}</span></li>`:""}
    </ul>
    <p class="fb-source">An\xE1lisis garantizado cada 100 g, seg\xFAn la etiqueta y la ficha oficial del producto.</p>
  </div>`}function T(e,t){return`<div class="fb-panel fb-panel--${t} fb-p-intro" data-panel="${e.key}" id="fb-${e.key}">
    <p class="fb-kicker"><span>Variedad ${e.index}</span></p>
    <h2 class="fb-variety"><span class="fb-variety__brand">Future Bites</span>${c(e.name)}</h2>
    <p class="fb-lead">${c(e.tagline)}</p>
    <ul class="fb-chips">
      <li>Frasco 200 cc \xB7 ${c(e.content)}</li>
      <li>${e.fillable?"Rellenable":"Pescado entero"}</li>
      <li>Un solo ingrediente</li>
    </ul>
    <img class="fb-static" src="{A}${e.jar}" alt="Frasco de ${c(e.fullName)}" loading="lazy" decoding="async">
  </div>`}function ae(e,t,i){return`<div class="fb-panel fb-panel--${t} fb-p-fill" data-panel="${e.key}-fill">
    <p class="fb-kicker"><span>Formato rellenable</span></p>
    <h3 class="fb-h3">${x(i)}</h3>
    <ol class="fb-steps" aria-label="C\xF3mo se usa">
      <li data-step="1"><b>01</b> Cavidad del bocado</li>
      <li data-step="2"><b>02</b> Coloc\xE1s la pastilla</li>
      <li data-step="3"><b>03</b> Se convierte en premio</li>
    </ol>
    <p class="fb-body">Cada bocado tiene un espacio para esconder la pastilla adentro. La hora de la medicaci\xF3n se convierte en un premio m\xE1s.</p>
    <p class="fb-note">Respet\xE1 siempre las indicaciones de tu veterinario sobre c\xF3mo darle cada medicamento.</p>
    <figure class="fb-photo" data-photo="${e.key}">
      <img src="{A}${e.photo}" alt="${c(e.photoAlt)}" loading="lazy" decoding="async" width="733" height="1100">
      <figcaption>Foto real del producto</figcaption>
    </figure>
  </div>`}function M(e,t){return`<div class="fb-panel fb-panel--${t} fb-p-data" data-panel="${e.key}-data">
    <p class="fb-kicker"><span>${c(e.fullName)}</span></p>
    <h3 class="fb-h3">${x(c(e.name)+", en n\xFAmeros.")}</h3>
    ${pe(e)}
    <dl class="fb-spec">
      <div><dt>Ingrediente</dt><dd>${c(e.ingredient)}</dd></div>
      <div><dt>Contenido</dt><dd>${c(e.content)} \xB7 ${c(e.pieces)}</dd></div>
    </dl>
    ${te(e)}
    ${se(e)}
  </div>`}function R(e){return D[e].map(t=>`<div class="fb-co${t.dx<0?" fb-co--l":""}" data-co="${t.id}" data-co-group="${e}" style="--dx:${t.dx}px;--dy:${t.dy}px;--len:${Math.hypot(t.dx,t.dy).toFixed(1)}px;--ang:${(Math.atan2(t.dy,t.dx)*180/Math.PI).toFixed(1)}deg">
      <span class="fb-co__line" aria-hidden="true"></span>
      <button class="fb-co__dot" type="button" aria-expanded="false" aria-controls="fb-co-${t.id}" aria-label="${c(t.title)}: ${c(t.value)}"></button>
      <div class="fb-co__label" id="fb-co-${t.id}"><span class="fb-co__t">${c(t.title)}</span><b>${c(t.value)}</b><span class="fb-co__more">${c(t.more)}</span></div>
    </div>`).join("")}function fe(e){let t=e.analysis[0],i=e.analysis[1];return`<dl class="fb-cmp__dl">
    <div><dt>Ingrediente</dt><dd>${c(e.ingredient)}</dd></div>
    <div><dt>Presentaci\xF3n</dt><dd>Frasco 200 cc \xB7 ${c(e.content)}</dd></div>
    <div><dt>Piezas</dt><dd>${c(e.pieces)}</dd></div>
    <div><dt>Rellenable</dt><dd>${e.fillable?"S\xED, con cavidad para pastilla":"No"}</dd></div>
    <div><dt>Prote\xEDna bruta</dt><dd><span class="fb-mini"><i style="--v:${t.value/100}"></i></span>${w(t.value)}%</dd></div>
    <div><dt>Grasa bruta</dt><dd><span class="fb-mini"><i style="--v:${i.value/100}"></i></span>${w(i.value)}%</dd></div>
    ${e.energy?`<div><dt>Energ\xEDa</dt><dd>${c(e.energy)}</dd></div>`:""}
  </dl>`}function re({assets:e,mode:t,showNav:i}){let n=e;return`
  <a class="fb-skip" href="#fb-shop">Saltar el recorrido e ir a los productos</a>
  ${i?`<header class="fb-nav">
      <a class="fb-nav__logo" href="${h.origin}/" aria-label="Future Bites, inicio"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164"></a>
      <nav class="fb-nav__links" aria-label="Secciones">
        ${y.map(s=>`<button type="button" data-goto="${s.key}">${c(s.name)}</button>`).join("")}
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
        <h1 class="fb-display">${x("El futuro tiene <em>otro sabor.</em>")}</h1>
        <p class="fb-lead">Snacks deshidratados para perros, de un solo ingrediente y sin conservantes.</p>
        <div class="fb-actions">
          <button class="fb-btn fb-btn--primary" type="button" data-goto="laboratorio">Explorar Future Bites</button>
          <a class="fb-btn fb-btn--ghost" href="#fb-shop">Ver productos</a>
        </div>
        <img class="fb-static" src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" decoding="async">
      </div>

      <div class="fb-panel fb-panel--right fb-p-lab" data-panel="lab" id="fb-laboratorio">
        <p class="fb-kicker"><span>Laboratorio Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${x("Peque\xF1os bites. <em>Grandes ideas.</em>")}</h2>
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
      <div class="fb-callouts" data-callouts>${R("pollo")}${R("cerdo")}${R("cornalitos")}</div>

      ${T($.pollo,"left")}
      ${ae($.pollo,"left","Una cavidad pensada para la pastilla.")}
      ${M($.pollo,"right")}

      ${T($.cerdo,"right")}
      ${ae($.cerdo,"right","El mismo gesto, con el sabor m\xE1s intenso.")}
      ${M($.cerdo,"left")}

      ${T($.cornalitos,"left")}
      ${M($.cornalitos,"right")}

      <div class="fb-panel fb-panel--wide fb-p-compare" data-panel="compare" id="fb-comparar">
        <div class="fb-cmp__head">
          <p class="fb-kicker"><span>Comparador</span></p>
          <h2 class="fb-display fb-display--md">${x("Eleg\xED tu <em>bite.</em>")}</h2>
        </div>
        <div class="fb-cmp__tabs" role="tablist" aria-label="Variedades">
          ${y.map((s,l)=>`<button role="tab" type="button" id="fb-tab-${s.key}" aria-controls="fb-tp-${s.key}" aria-selected="${l===0}" tabindex="${l===0?0:-1}" data-cmp="${l}"><span>${s.index}</span>${c(s.name)}</button>`).join("")}
        </div>
        ${y.map((s,l)=>`<div class="fb-cmp__panel" role="tabpanel" id="fb-tp-${s.key}" aria-labelledby="fb-tab-${s.key}" ${l===0?"":"hidden"}>
          ${fe(s)}
          ${te(s)}
          ${se(s)}
        </div>`).join("")}
      </div>

      <div class="fb-panel fb-panel--left fb-p-universe" data-panel="universe" id="fb-universo">
        <p class="fb-kicker"><span>Universo Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${x("Dise\xF1ados para una <em>nueva generaci\xF3n</em> de perros.")}</h2>
        <ul class="fb-statements">
          <li data-stmt="1"><b>Un solo ingrediente</b> por variedad.</li>
          <li data-stmt="2"><b>Funcionales</b> por dise\xF1o.</li>
          <li data-stmt="3"><b>Nacidos en Domani</b>, Rosario.</li>
        </ul>
        <a class="fb-btn fb-btn--primary" href="#fb-shop">Ver los productos</a>
        <img class="fb-static" src="{A}universo.webp" alt="Ilustraci\xF3n retrofuturista de tres perros en una ciudad del futuro" loading="lazy" decoding="async">
      </div>

      <nav class="fb-dots" aria-label="Escenas del recorrido">
        ${W.map((s,l)=>`<button type="button" data-goto="${s.id}" aria-label="${c(s.label)}"${l===0?' aria-current="step"':""}><span>${c(s.label)}</span></button>`).join("")}
      </nav>
      <div class="fb-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
      <div class="fb-drag" aria-hidden="true"><i></i>Arrastr\xE1 el frasco para girarlo</div>
    </div>
  </section>

  <section class="fb-shop" id="fb-shop" aria-labelledby="fb-shop-title">
    <div class="fb-shop__in">
      <p class="fb-kicker fb-kicker--dark"><span>Tienda Future Bites</span></p>
      <h2 class="fb-display fb-display--dark" id="fb-shop-title">${x("Snacks con <em>prop\xF3sito.</em>")}</h2>
      <div class="fb-cards">
        ${y.map(s=>`<article class="fb-card" data-card="${s.key}">
          <a class="fb-card__media" href="${h.origin}${p.url}" data-box-link aria-label="Ver la Caja x6 de ${c(s.fullName)}"><img src="{A}card-${s.key}.webp" alt="Frasco de ${c(s.fullName)}" width="900" height="750" loading="lazy" decoding="async"></a>
          <div class="fb-card__body">
            <div class="fb-card__head"><h3 class="fb-card__name">${c(s.name)}</h3><span class="fb-card__meta">Caja x6</span></div>
            <div class="fb-price"><span class="fb-price__main" data-box-price>${c(p.price.short)}</span><span class="fb-price__alt">con transferencia \xB7 6 frascos de ${c(s.name)}</span></div>
            <button class="fb-btn fb-btn--primary fb-card__buy" type="button" data-buy-box="${s.key}">Agregar caja al carrito</button>
          </div>
        </article>`).join("")}
      </div>
      <article class="fb-boxcard" data-card="surtida">
        <a class="fb-boxcard__media" href="${h.origin}${p.url}" data-box-link aria-label="Ver la ficha de la Caja x6"><img src="{A}card-surtida.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" width="1400" height="700" loading="lazy" decoding="async"></a>
        <div class="fb-boxcard__body">
          <p class="fb-card__idx">Caja x6 \xB7 Surtida</p>
          <h3 class="fb-boxcard__title">${x("Los tres sabores en una caja")}</h3>
          <p class="fb-card__desc">2 de Pollo, 2 de Cerdo y 2 de Cornalitos.</p>
          <div class="fb-price"><span class="fb-price__main" data-box-price>${c(p.price.short)}</span><span class="fb-price__alt">con transferencia</span></div>
          <button class="fb-btn fb-btn--primary fb-card__buy" type="button" data-buy-box="surtida">Agregar caja al carrito</button>
        </div>
      </article>
      ${t==="store"?"":`<p class="fb-shop__note">Precios de referencia tomados de la tienda el ${h.snapshotDate}.</p>`}
    </div>
  </section>`.replaceAll("{A}",n)}var N=e=>{let t=document.createElement("form");t.method="post",t.action=h.cart,e.forEach(([i,n])=>{let o=document.createElement("input");o.type="hidden",o.name=i,o.value=n,t.appendChild(o)}),document.body.appendChild(t),t.submit()};function ie(e,t){let i=Object.fromEntries(y.map(a=>[a.key,a])),n=t==="store",o=a=>{n||(a.target="_blank",a.rel="noopener")},r=(n?"":h.origin)+p.url;e.querySelectorAll("[data-product-link]").forEach(a=>{a.href=(n?"":h.origin)+i[a.dataset.productLink].url,o(a)}),e.querySelectorAll("[data-catalog]").forEach(a=>{a.href=(n?"":h.origin)+h.catalog,o(a)}),e.querySelectorAll("[data-box-link]").forEach(a=>{a.href=r,o(a)}),e.querySelectorAll(".fb-card").forEach(a=>{let u=[...a.querySelectorAll("[data-format]")],d=b=>{u.forEach(f=>f.setAttribute("aria-checked",String(f.dataset.format===b))),a.classList.toggle("is-box",b==="box");let m=a.querySelector("[data-buy]");m&&(m.tagName==="A"?m.href=b==="box"?r:h.origin+i[m.dataset.buy].url:m.disabled||(m.textContent=b==="box"?"Agregar caja al carrito":"Agregar al carrito"))};u.forEach((b,m)=>{b.addEventListener("click",()=>d(b.dataset.format)),b.addEventListener("keydown",f=>{if(!/Arrow(Left|Right|Up|Down)/.test(f.key))return;f.preventDefault();let k=u[(m+1)%u.length];k.focus(),d(k.dataset.format)})})});let s=a=>{let u=p.variantIds[a];return[["add_to_cart",p.productId],["variation[0]",u?u.option:p.values[a]],["quantity",1]]},l=(a,u)=>{a.disabled=!0,a.textContent=u};e.querySelectorAll("[data-buy]").forEach(a=>{let u=i[a.dataset.buy];if(!n){let d=document.createElement("a");d.className=a.className,d.href=h.origin+u.url,d.target="_blank",d.rel="noopener",d.dataset.buy=u.key,d.textContent="Comprar en la tienda",a.replaceWith(d);return}a.addEventListener("click",()=>{let d=a.closest(".fb-card");if(d&&d.classList.contains("is-box")){l(a,"Agregando\u2026"),N(s(u.key));return}l(a,"Agregando\u2026"),N([["add_to_cart",u.productId],["quantity",1]])})}),e.querySelectorAll("[data-buy-box]").forEach(a=>{let u=a.dataset.buyBox;if(!n){let d=document.createElement("a");d.className=a.className,d.href=r,d.target="_blank",d.rel="noopener",d.dataset.buyBox=u,d.innerHTML=a.innerHTML;let b=d.querySelector(".fb-boxbtn__cta");b&&(b.textContent="Ver en la tienda"),d.classList.contains("fb-boxbtn")||(d.textContent="Comprar en la tienda"),a.replaceWith(d);return}a.addEventListener("click",()=>{let d=a.querySelector(".fb-boxbtn__cta");a.disabled=!0,d?d.textContent="Agregando\u2026":a.textContent="Agregando\u2026",N(s(u))})}),n&&ee(p).then(()=>{if(!p.productId||!Object.keys(p.variantIds).length)throw new Error("caja sin variantes");e.querySelectorAll("[data-box-price]").forEach(a=>{a.textContent=a.closest(".fb-boxbtn")?p.price.short.replace(",00",""):p.price.short}),p.price.list&&e.querySelectorAll("[data-box-list]").forEach(a=>{a.textContent=p.price.list}),Object.entries(p.variantIds).forEach(([a,u])=>{u.available||e.querySelectorAll(`[data-buy-box="${a}"]`).forEach(d=>{d.disabled=!0})})}).catch(a=>{console.warn("[Future Bites] Precio de la Caja x6 no actualizado:",a.message)})}function L(e,t){let i=[...e.querySelectorAll("[data-cmp]")],n=(o,r)=>{i.forEach((s,l)=>{let a=o===l;s.setAttribute("aria-selected",a),s.tabIndex=a?0:-1;let u=e.querySelector("#"+s.getAttribute("aria-controls"));u&&(u.hidden=!a)}),r&&i[o].focus(),t&&E.to(t.state.cmp,{sel:o,u:Y[o],duration:.9,ease:"power3.inOut",overwrite:!0})};i.forEach((o,r)=>{o.addEventListener("click",()=>n(r)),o.addEventListener("keydown",s=>{(s.key==="ArrowRight"||s.key==="ArrowLeft")&&(s.preventDefault(),n((r+(s.key==="ArrowRight"?1:i.length-1))%i.length,!0))})})}function oe(e,t){let i=[];return Object.entries(D).forEach(([n,o])=>o.forEach(r=>{let s=e.querySelector(`[data-co="${r.id}"]`);s&&i.push({el:s,c:r})})),e.querySelectorAll(".fb-co__dot").forEach(n=>n.addEventListener("click",()=>{let o=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!o)),n.closest(".fb-co").classList.toggle("is-open",!o)})),function(){for(let{el:o,c:r}of i){if(o.style.visibility==="hidden"||o.style.opacity==="0")continue;let s=t.project(r.obj,r.u,r.v);s&&(o.style.transform=`translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`)}}}function ne(e,t){let i=e.querySelector(".fb-cmparrow");if(!i)return()=>{};let n=!1;return function(){let r=t.state,s=Math.min(1,r.trio.o)*r.cmp.on,l=s>.01?t.project("trio",r.cmp.u,Z):null;if(!l){n&&(i.style.opacity="0",n=!1);return}i.style.opacity=s.toFixed(3),i.style.transform=`translate3d(${l.x.toFixed(1)}px, ${l.y.toFixed(1)}px, 0)`,n=!0}}function le(e,t){let i=e.querySelector(".fb-canvas"),n=e.querySelector(".fb-drag"),o=l=>{let a=i.getBoundingClientRect();return[l.clientX-a.left,l.clientY-a.top]},r=null;i.addEventListener("pointerdown",l=>{if(l.button!==0)return;let a=t.pickJar(...o(l));a&&(r={k:a,x:l.clientX,t:performance.now(),v:0,id:l.pointerId},i.setPointerCapture(l.pointerId),t.grabJar(a),e.classList.add("is-dragging"),n&&n.classList.add("is-used"))}),i.addEventListener("pointermove",l=>{if(!r){l.pointerType==="mouse"&&e.classList.toggle("is-grab",!!t.pickJar(...o(l)));return}let a=performance.now(),u=(l.clientX-r.x)*.011,d=Math.max(8,a-r.t);r.v=u*(16/d),r.x=l.clientX,r.t=a,t.dragJar(r.k,u)});let s=l=>{!r||l.pointerId!==r.id||(t.releaseJar(r.k,performance.now()-r.t>90?0:r.v),r=null,e.classList.remove("is-dragging"))};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),i.addEventListener("lostpointercapture",s)}function F(e,t,i){e.addEventListener("click",n=>{let o=n.target.closest("[data-goto]");if(!o)return;n.preventDefault();let r=o.dataset.goto;if(t&&t.scrollToScene(r,!i))return;let s=e.querySelector("#fb-"+r)||e.querySelector("#fb-shop");s&&s.scrollIntoView({behavior:i?"auto":"smooth",block:"start"})})}function de(e,t){t||E.from(e.querySelectorAll(".fb-card, .fb-boxcard"),{y:40,autoAlpha:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:e.querySelector(".fb-cards"),start:"top 82%"}})}E.registerPlugin(O);async function me(e){if(e.dataset.fbReady)return;e.dataset.fbReady="1";let t=e.dataset.assets||"assets/",i=location.hostname,n=e.dataset.mode||(window.LS||/mitiendanube\.com$/.test(i)?"store":"review"),o=e.dataset.nav?e.dataset.nav==="true":n!=="store";e.classList.add("fb"),e.dataset.prerendered?o||e.querySelector(".fb-nav")?.remove():e.innerHTML=re({assets:t,mode:n,showNav:o}),e.classList.remove("fb--pending","fb--static"),e.style.setProperty("--fb-exp-h",`${J.end+100}`);let r=matchMedia("(prefers-reduced-motion: reduce)"),s=/[?&]fb-static\b/.test(location.search),l=Q()&&!r.matches&&!s;if(ie(e,n),!l){e.classList.add("fb--static"),L(e,null),F(e,null,!0);return}e.classList.add("fb--3d","fb--loading");let a=K();e.dataset.quality=a.tier;let{World:u}=await import("./fb-world-MN6U3TVX.js"),{buildDirector:d}=await import("./fb-director-NHHMYSTS.js"),b=e.querySelector(".fb-canvas"),m=e.querySelector(".fb-stage"),f;try{f=new u(b,{quality:a,assets:t}),await f.loadProducts()}catch(v){console.warn("[Future Bites] 3D no disponible, se usa la versi\xF3n est\xE1tica.",v),e.classList.remove("fb--3d","fb--loading"),e.classList.add("fb--static"),L(e,null),F(e,null,!0);return}let k=()=>{let v=m.getBoundingClientRect();f.resize(Math.max(1,v.width),Math.max(1,v.height))};if(k(),n==="store"){let v=-1,g=!1,C=()=>{g=!1;let _=0;document.querySelectorAll('.draft-bar, .sticky-header-wrapper, .js-head-main, .head-main, header, [data-store="head"]').forEach(B=>{if(e.contains(B))return;let I=getComputedStyle(B);if(!/fixed|sticky/.test(I.position)||I.visibility==="hidden"||I.display==="none")return;let S=B.getBoundingClientRect();S.top<=1&&S.bottom>0&&S.width>=innerWidth*.5&&S.height<innerHeight*.4&&(_=Math.max(_,Math.round(S.bottom)))}),Math.abs(_-v)>1&&(v=_,e.style.setProperty("--fb-top",_+"px"),k())},G,P=()=>{g||(g=!0,requestAnimationFrame(C)),clearTimeout(G),G=setTimeout(C,450)};addEventListener("scroll",P,{passive:!0}),addEventListener("resize",P),document.addEventListener("transitionend",_=>{e.contains(_.target)||P()},!0),C()}let z=d(e,f),ue=oe(e,f),be=ne(e,f);L(e,f),le(e,f),F(e,z,!1),de(e,!1),e.classList.remove("fb--loading"),/[?&]fb-debug\b/.test(location.search)&&(window.__fb={world:f,director:z}),a.parallax&&m.addEventListener("pointermove",v=>{let g=m.getBoundingClientRect();f.setPointer((v.clientX-g.left)/g.width*2-1,(v.clientY-g.top)/g.height*2-1)},{passive:!0});let U=!0;new IntersectionObserver(([v])=>{U=v.isIntersecting},{rootMargin:"100px"}).observe(e.querySelector(".fb-exp"));let q=0,A=0,j=a.dpr,H=performance.now();function V(v){requestAnimationFrame(V);let g=v-H;if(H=v,!(!U||document.hidden)&&(f.render(),ue(),be(),q+=g,A++,A===90)){let C=q/A;q=0,A=0,C>30&&j>1&&(j=Math.max(1,j-.25),f.setDpr(j))}}requestAnimationFrame(V);let X;addEventListener("resize",()=>{clearTimeout(X),X=setTimeout(()=>{k(),O.refresh()},120)}),r.addEventListener?.("change",()=>location.reload()),window.addEventListener("pagehide",()=>f.dispose(),{once:!0})}function ce(){document.querySelectorAll("[data-fb-home], #fb-home").forEach(e=>me(e))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce();
