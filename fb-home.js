import{a as E,b as O}from"./fb-chunk-UJHWT3O5.js";import{b as J,c as W,e as K,f as Q,g as Y,h as Z}from"./fb-chunk-4SXRHZMA.js";var v={origin:"https://futurebites.mitiendanube.com",catalog:"/productos/",cart:"/comprar/",snapshotDate:"19/10/2026"},g=[{key:"pollo",index:"01",name:"Pollo",fullName:"Future Bites Pollo",productId:367924923,url:"/productos/future-bites-pollo-1jxp2/",jar:"jar-pollo.webp",bite:"bite-pollo.webp",photo:"foto-pollo-pastilla.webp",photoAlt:"Bocado de Future Bites Pollo con una pastilla colocada en su cavidad",tagline:"Bocados de pollo deshuesado fresco, deshidratados.",ingredient:"Carne de pollo deshuesada fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:72,unit:"%"},{label:"Grasa bruta",value:4,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5.5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"3.500 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cerdo",index:"02",name:"Cerdo",fullName:"Future Bites Cerdo",productId:367924746,url:"/productos/future-bites-cerdo-snack-deshidratado-perros/",jar:"jar-cerdo.webp",bite:"bite-cerdo.webp",photo:"foto-cerdo-pastilla.webp",photoAlt:"Mano colocando una pastilla dentro de un bocado de Future Bites Cerdo",tagline:"Bocados de cerdo magro fresco, deshidratados. El sabor m\xE1s intenso de la l\xEDnea.",ingredient:"Carne de cerdo magra fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:68,unit:"%"},{label:"Grasa bruta",value:10,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"4.100 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cornalitos",index:"03",name:"Cornalitos",fullName:"Future Bites Cornalitos",productId:367925431,url:"/productos/future-bites-cornalitos-1wr3d/",jar:"jar-cornalitos.webp",tagline:"Cornalitos enteros deshidratados. El sabor que m\xE1s premios rinde.",ingredient:"Cornalitos (pescado entero fresco) deshidratados",fillable:!1,content:"20 g",pieces:"Unos 40 cornalitos de 0,4 g",analysis:[{label:"Prote\xEDna bruta",value:62,unit:"%"},{label:"Grasa bruta",value:7.5,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:13,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:null,price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}}],f={key:"caja",name:"Caja x6",productId:375760431,url:"/productos/future-bites-caja-x6/",units:6,price:{short:"$51.000,00",list:"$56.666,67",available:!0},values:{pollo:"Pollo x6",cerdo:"Cerdo x6",cornalitos:"Cornalitos x6",surtida:"Surtida (2 de cada)"},variantIds:{pollo:{id:1623627748,option:"Pollo x6",available:!0},cerdo:{id:1623627750,option:"Cerdo x6",available:!0},cornalitos:{id:1623627751,option:"Cornalitos x6",available:!0},surtida:{id:1623627752,option:"Surtida (2 de cada)",available:!0}}},C=e=>String(e).replace(".",",");async function ee(e,r=""){return(await Promise.allSettled(e.map(async o=>{let l=await fetch(r+o.url,{credentials:"same-origin",cache:"no-store"});if(!l.ok)throw new Error("HTTP "+l.status);let s=await l.text(),c=new DOMParser().parseFromString(s,"text/html").querySelector("[data-variants]");if(!c)throw new Error("sin variantes");let n=JSON.parse(c.getAttribute("data-variants"))[0];return o.price={short:n.price_short,transfer:n.price_with_payment_discount_short||null,available:!!n.available,live:!0},o.variantId=n.id,o}))).map(o=>o.status==="fulfilled")}async function ae(e,r=""){let i=await fetch(r+e.url,{credentials:"same-origin",cache:"no-store"});if(!i.ok)throw new Error("HTTP "+i.status);let o=new DOMParser().parseFromString(await i.text(),"text/html"),l=o.querySelector("[data-variants]");if(!l)throw new Error("sin variantes");let s=JSON.parse(l.getAttribute("data-variants")),t=o.querySelector('form.js-product-form, form[action*="comprar"]'),c=t&&t.querySelector('[name="add_to_cart"]');c&&(e.productId=+c.value||e.productId);for(let[n,u]of Object.entries(e.values)){let b=s.find(m=>[m.option0,m.option1,m.option2].includes(u));b&&(e.variantIds[n]={id:b.id,price:b.price_with_payment_discount_short||b.price_short,list:b.price_short,available:!!b.available,option:u})}let a=Object.values(e.variantIds).find(n=>n.price);return a&&(e.price={short:a.price,list:a.list,available:Object.values(e.variantIds).some(n=>n.available),live:!0}),e}var d=e=>String(e).replace(/[&<>"]/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[r]),$=Object.fromEntries(g.map(e=>[e.key,e])),R={pollo:[{id:"p1",obj:"jarP",u:.5,v:.93,dx:150,dy:-70,title:"Frasco de vidrio",value:"200 cc",more:"Tapa negra y etiqueta envolvente Future Bites."},{id:"p2",obj:"jarP",u:.62,v:.5,dx:170,dy:30,title:"Un solo ingrediente",value:"Pollo deshuesado fresco",more:"Deshidratado, sin conservantes."},{id:"p3",obj:"jarP",u:.42,v:.12,dx:-190,dy:40,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Cada bocado tiene una cavidad rellenable."}],cerdo:[{id:"c1",obj:"jarC",u:.55,v:.92,dx:-170,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"La misma familia de envase, con etiqueta naranja."},{id:"c2",obj:"jarC",u:.4,v:.5,dx:-190,dy:40,title:"Un solo ingrediente",value:"Cerdo magro fresco",more:"Deshidratado, sin conservantes."},{id:"c3",obj:"jarC",u:.6,v:.12,dx:170,dy:30,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Bocados rellenables, como en Pollo."}],cornalitos:[{id:"k1",obj:"jarK",u:.5,v:.93,dx:160,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"Etiqueta gris carb\xF3n y tapa con sticker azul."},{id:"k2",obj:"jarK",u:.6,v:.18,dx:180,dy:40,title:"Contenido",value:"20 g \xB7 unos 40 cornalitos",more:"Cada cornalito pesa alrededor de 0,4 g."}]},x=e=>e.normalize("NFD").replace(/\u0301/g,"").normalize("NFC");function re(e){let r=e.price.transfer?`<span class="fb-price__alt" data-price-transfer="${e.key}">${d(e.price.transfer)} con transferencia</span>`:"";return`<div class="fb-price"><span class="fb-price__main" data-price="${e.key}">${d(e.price.short)}</span>${r}
    <span class="fb-price__note" data-price-note="${e.key}">Precio de referencia tomado de la tienda el ${v.snapshotDate}</span></div>`}function se(e,r="Agregar al carrito"){return`<div class="fb-actions">
    <button class="fb-btn fb-btn--primary" type="button" data-buy="${e.key}">${r}</button>
    <a class="fb-btn fb-btn--ghost" href="${v.origin}${e.url}" data-product-link="${e.key}">Ver ficha</a>
  </div>`}function ie(e,r="Caja x6"){return`<button class="fb-boxbtn" type="button" data-buy-box="${e}" data-box-label="${d(r)}">
      <span class="fb-boxbtn__l">${d(r)}</span><b class="fb-boxbtn__p"><span data-box-price>${d(f.price.short.replace(",00",""))}</span><small>con transferencia</small></b><span class="fb-boxbtn__cta">Agregar caja</span>
    </button>`}function me(e,r=""){let i=e.analysis[0],o=e.analysis.slice(1),l=2*Math.PI*52;return`<div class="fb-analysis ${r}">
    <div class="fb-gauge" role="img" aria-label="${d(i.label)}: ${C(i.value)}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" class="fb-gauge__track"/>
        <circle cx="60" cy="60" r="52" class="fb-gauge__bar" style="--len:${(l*i.value/100).toFixed(1)};--c:${l.toFixed(1)}"/>
        <g class="fb-gauge__ticks">${Array.from({length:40},(s,t)=>`<line x1="60" y1="2" x2="60" y2="${t%5?5:8}" transform="rotate(${t*9} 60 60)"/>`).join("")}</g>
      </svg>
      <div class="fb-gauge__val"><b>${C(i.value)}<small>%</small></b><span>Prote\xEDna</span></div>
    </div>
    <ul class="fb-bars">
      ${o.map(s=>`<li><span class="fb-bars__l">${d(s.label)}</span><span class="fb-bars__t"><i style="--v:${s.value/100}"></i></span><span class="fb-bars__v">${C(s.value)}${s.unit}</span></li>`).join("")}
      ${e.energy?`<li class="fb-bars__energy"><span class="fb-bars__l">Energ\xEDa</span><span class="fb-bars__v">${d(e.energy)}</span></li>`:""}
    </ul>
    <p class="fb-source">An\xE1lisis garantizado cada 100 g, seg\xFAn la etiqueta y la ficha oficial del producto.</p>
  </div>`}function T(e,r){return`<div class="fb-panel fb-panel--${r} fb-p-intro" data-panel="${e.key}" id="fb-${e.key}">
    <p class="fb-kicker"><span>Variedad ${e.index}</span></p>
    <h2 class="fb-variety"><span class="fb-variety__brand">Future Bites</span>${d(e.name)}</h2>
    <p class="fb-lead">${d(e.tagline)}</p>
    <ul class="fb-chips">
      <li>Frasco 200 cc \xB7 ${d(e.content)}</li>
      <li>${e.fillable?"Rellenable":"Pescado entero"}</li>
      <li>Un solo ingrediente</li>
    </ul>
    <img class="fb-static" src="{A}${e.jar}" alt="Frasco de ${d(e.fullName)}" loading="lazy" decoding="async">
  </div>`}function te(e,r,i){return`<div class="fb-panel fb-panel--${r} fb-p-fill" data-panel="${e.key}-fill">
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
      <img src="{A}${e.photo}" alt="${d(e.photoAlt)}" loading="lazy" decoding="async" width="733" height="1100">
      <figcaption>Foto real del producto</figcaption>
    </figure>
  </div>`}function M(e,r){return`<div class="fb-panel fb-panel--${r} fb-p-data" data-panel="${e.key}-data">
    <p class="fb-kicker"><span>${d(e.fullName)}</span></p>
    <h3 class="fb-h3">${x(d(e.name)+", en n\xFAmeros.")}</h3>
    ${me(e)}
    <dl class="fb-spec">
      <div><dt>Ingrediente</dt><dd>${d(e.ingredient)}</dd></div>
      <div><dt>Contenido</dt><dd>${d(e.content)} \xB7 ${d(e.pieces)}</dd></div>
    </dl>
    ${re(e)}
    ${se(e)}
    ${ie(e.key,"Caja x6 de "+e.name)}
  </div>`}function D(e){return R[e].map(r=>`<div class="fb-co${r.dx<0?" fb-co--l":""}" data-co="${r.id}" data-co-group="${e}" style="--dx:${r.dx}px;--dy:${r.dy}px;--len:${Math.hypot(r.dx,r.dy).toFixed(1)}px;--ang:${(Math.atan2(r.dy,r.dx)*180/Math.PI).toFixed(1)}deg">
      <span class="fb-co__line" aria-hidden="true"></span>
      <button class="fb-co__dot" type="button" aria-expanded="false" aria-controls="fb-co-${r.id}" aria-label="${d(r.title)}: ${d(r.value)}"></button>
      <div class="fb-co__label" id="fb-co-${r.id}"><span class="fb-co__t">${d(r.title)}</span><b>${d(r.value)}</b><span class="fb-co__more">${d(r.more)}</span></div>
    </div>`).join("")}function ve(e){let r=e.analysis[0],i=e.analysis[1];return`<dl class="fb-cmp__dl">
    <div><dt>Ingrediente</dt><dd>${d(e.ingredient)}</dd></div>
    <div><dt>Presentaci\xF3n</dt><dd>Frasco 200 cc \xB7 ${d(e.content)}</dd></div>
    <div><dt>Piezas</dt><dd>${d(e.pieces)}</dd></div>
    <div><dt>Rellenable</dt><dd>${e.fillable?"S\xED, con cavidad para pastilla":"No"}</dd></div>
    <div><dt>Prote\xEDna bruta</dt><dd><span class="fb-mini"><i style="--v:${r.value/100}"></i></span>${C(r.value)}%</dd></div>
    <div><dt>Grasa bruta</dt><dd><span class="fb-mini"><i style="--v:${i.value/100}"></i></span>${C(i.value)}%</dd></div>
    ${e.energy?`<div><dt>Energ\xEDa</dt><dd>${d(e.energy)}</dd></div>`:""}
  </dl>`}function ne({assets:e,mode:r,showNav:i}){let o=e;return`
  <a class="fb-skip" href="#fb-shop">Saltar el recorrido e ir a los productos</a>
  ${i?`<header class="fb-nav">
      <a class="fb-nav__logo" href="${v.origin}/" aria-label="Future Bites, inicio"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164"></a>
      <nav class="fb-nav__links" aria-label="Secciones">
        ${g.map(t=>`<button type="button" data-goto="${t.key}">${d(t.name)}</button>`).join("")}
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
      <div class="fb-callouts" data-callouts>${D("pollo")}${D("cerdo")}${D("cornalitos")}</div>

      ${T($.pollo,"left")}
      ${te($.pollo,"left","Una cavidad pensada para la pastilla.")}
      ${M($.pollo,"right")}

      ${T($.cerdo,"right")}
      ${te($.cerdo,"right","El mismo gesto, con el sabor m\xE1s intenso.")}
      ${M($.cerdo,"left")}

      ${T($.cornalitos,"left")}
      ${M($.cornalitos,"right")}

      <div class="fb-panel fb-panel--wide fb-p-compare" data-panel="compare" id="fb-comparar">
        <div class="fb-cmp__head">
          <p class="fb-kicker"><span>Comparador</span></p>
          <h2 class="fb-display fb-display--md">${x("Eleg\xED tu <em>bite.</em>")}</h2>
        </div>
        <div class="fb-cmp__tabs" role="tablist" aria-label="Variedades">
          ${g.map((t,c)=>`<button role="tab" type="button" id="fb-tab-${t.key}" aria-controls="fb-tp-${t.key}" aria-selected="${c===0}" tabindex="${c===0?0:-1}" data-cmp="${c}"><span>${t.index}</span>${d(t.name)}</button>`).join("")}
        </div>
        ${g.map((t,c)=>`<div class="fb-cmp__panel" role="tabpanel" id="fb-tp-${t.key}" aria-labelledby="fb-tab-${t.key}" ${c===0?"":"hidden"}>
          ${ve(t)}
          ${re(t)}
          ${se(t)}
          ${ie(t.key,"Caja x6 de "+t.name)}
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
        ${W.map((t,c)=>`<button type="button" data-goto="${t.id}" aria-label="${d(t.label)}"${c===0?' aria-current="step"':""}><span>${d(t.label)}</span></button>`).join("")}
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
        ${g.map(t=>`<article class="fb-card" data-card="${t.key}">
          <a class="fb-card__media" href="${v.origin}${t.url}" data-product-link="${t.key}" aria-label="Ver la ficha de ${d(t.fullName)}"><img src="{A}card-${t.key}.webp" alt="Frasco de ${d(t.fullName)}" width="900" height="750" loading="lazy" decoding="async"></a>
          <div class="fb-card__body">
            <h3 class="fb-card__name">${d(t.name)}</h3>
            <div class="fb-format" role="radiogroup" aria-label="Formato de compra de ${d(t.name)}">
              <button type="button" role="radio" aria-checked="true" data-format="unit">Frasco</button>
              <button type="button" role="radio" aria-checked="false" data-format="box">Caja x6</button>
            </div>
            <div class="fb-price"><span class="fb-price__main" data-price="${t.key}">${d(t.price.short)}</span>${t.price.transfer?`<span class="fb-price__alt" data-price-transfer="${t.key}">${d(t.price.transfer)} con transferencia</span>`:""}<span class="fb-price__note" data-price-note="${t.key}"></span></div>
            <div class="fb-price fb-price--box"><span class="fb-price__main" data-box-price>${d(f.price.short)}</span><span class="fb-price__alt">con transferencia \xB7 6 frascos</span></div>
            <button class="fb-btn fb-btn--primary fb-card__buy" type="button" data-buy="${t.key}">Agregar al carrito</button>
          </div>
        </article>`).join("")}
      </div>
      <article class="fb-boxcard" data-card="surtida">
        <a class="fb-boxcard__media" href="${v.origin}${f.url}" data-box-link aria-label="Ver la ficha de la Caja x6"><img src="{A}card-surtida.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" width="1400" height="700" loading="lazy" decoding="async"></a>
        <div class="fb-boxcard__body">
          <p class="fb-card__idx">Caja x6 \xB7 Surtida</p>
          <h3 class="fb-boxcard__title">${x("Los tres sabores en una caja")}</h3>
          <p class="fb-card__desc">2 de Pollo, 2 de Cerdo y 2 de Cornalitos.</p>
          <div class="fb-price"><span class="fb-price__main" data-box-price>${d(f.price.short)}</span><span class="fb-price__alt">con transferencia</span></div>
          <button class="fb-btn fb-btn--primary fb-card__buy" type="button" data-buy-box="surtida">Agregar caja al carrito</button>
        </div>
      </article>
      ${r==="store"?"":`<p class="fb-shop__note">Precios de referencia tomados de la tienda el ${v.snapshotDate}.</p>`}
    </div>
  </section>`.replaceAll("{A}",o)}var N=e=>{let r=document.createElement("form");r.method="post",r.action=v.cart,e.forEach(([i,o])=>{let l=document.createElement("input");l.type="hidden",l.name=i,l.value=o,r.appendChild(l)}),document.body.appendChild(r),r.submit()};function oe(e,r){let i=Object.fromEntries(g.map(a=>[a.key,a])),o=r==="store",l=a=>{o||(a.target="_blank",a.rel="noopener")},s=(o?"":v.origin)+f.url;e.querySelectorAll("[data-product-link]").forEach(a=>{a.href=(o?"":v.origin)+i[a.dataset.productLink].url,l(a)}),e.querySelectorAll("[data-catalog]").forEach(a=>{a.href=(o?"":v.origin)+v.catalog,l(a)}),e.querySelectorAll("[data-box-link]").forEach(a=>{a.href=s,l(a)}),e.querySelectorAll(".fb-card").forEach(a=>{let n=[...a.querySelectorAll("[data-format]")],u=b=>{n.forEach(p=>p.setAttribute("aria-checked",String(p.dataset.format===b))),a.classList.toggle("is-box",b==="box");let m=a.querySelector("[data-buy]");m&&(m.tagName==="A"?m.href=b==="box"?s:v.origin+i[m.dataset.buy].url:m.disabled||(m.textContent=b==="box"?"Agregar caja al carrito":"Agregar al carrito"))};n.forEach((b,m)=>{b.addEventListener("click",()=>u(b.dataset.format)),b.addEventListener("keydown",p=>{if(!/Arrow(Left|Right|Up|Down)/.test(p.key))return;p.preventDefault();let k=n[(m+1)%n.length];k.focus(),u(k.dataset.format)})})});let t=a=>{let n=f.variantIds[a];return[["add_to_cart",f.productId],["variation[0]",n?n.option:f.values[a]],["quantity",1]]},c=(a,n)=>{a.disabled=!0,a.textContent=n};e.querySelectorAll("[data-buy]").forEach(a=>{let n=i[a.dataset.buy];if(!o){let u=document.createElement("a");u.className=a.className,u.href=v.origin+n.url,u.target="_blank",u.rel="noopener",u.dataset.buy=n.key,u.textContent="Comprar en la tienda",a.replaceWith(u);return}a.addEventListener("click",()=>{let u=a.closest(".fb-card");if(u&&u.classList.contains("is-box")){c(a,"Agregando\u2026"),N(t(n.key));return}c(a,"Agregando\u2026"),N([["add_to_cart",n.productId],["quantity",1]])})}),e.querySelectorAll("[data-buy-box]").forEach(a=>{let n=a.dataset.buyBox;if(!o){let u=document.createElement("a");u.className=a.className,u.href=s,u.target="_blank",u.rel="noopener",u.dataset.buyBox=n,u.innerHTML=a.innerHTML;let b=u.querySelector(".fb-boxbtn__cta");b&&(b.textContent="Ver en la tienda"),u.classList.contains("fb-boxbtn")||(u.textContent="Comprar en la tienda"),a.replaceWith(u);return}a.addEventListener("click",()=>{let u=a.querySelector(".fb-boxbtn__cta");a.disabled=!0,u?u.textContent="Agregando\u2026":a.textContent="Agregando\u2026",N(t(n))})}),o&&(ee(g).then(a=>{g.forEach((n,u)=>{if(!a[u]){e.querySelectorAll(`[data-price-note="${n.key}"]`).forEach(b=>{b.textContent||(b.textContent=`Precio de referencia del ${v.snapshotDate}`)});return}e.querySelectorAll(`[data-price="${n.key}"]`).forEach(b=>{b.textContent=n.price.short}),e.querySelectorAll(`[data-price-transfer="${n.key}"]`).forEach(b=>{b.textContent=n.price.transfer?`${n.price.transfer} con transferencia`:""}),e.querySelectorAll(`[data-price-note="${n.key}"]`).forEach(b=>{b.textContent=n.price.available?"":"Sin stock por el momento"}),n.price.available||e.querySelectorAll(`[data-buy="${n.key}"]`).forEach(b=>{b.disabled=!0,b.textContent="Sin stock"})})}),ae(f).then(()=>{if(!f.productId||!Object.keys(f.variantIds).length)throw new Error("caja sin variantes");e.querySelectorAll("[data-box-price]").forEach(a=>{a.textContent=a.closest(".fb-boxbtn")?f.price.short.replace(",00",""):f.price.short}),f.price.list&&e.querySelectorAll("[data-box-list]").forEach(a=>{a.textContent=f.price.list}),Object.entries(f.variantIds).forEach(([a,n])=>{n.available||e.querySelectorAll(`[data-buy-box="${a}"]`).forEach(u=>{u.disabled=!0})})}).catch(a=>{console.warn("[Future Bites] Caja x6 no disponible:",a.message),e.classList.add("fb--nobox")}))}function L(e,r){let i=[...e.querySelectorAll("[data-cmp]")],o=(l,s)=>{i.forEach((t,c)=>{let a=l===c;t.setAttribute("aria-selected",a),t.tabIndex=a?0:-1;let n=e.querySelector("#"+t.getAttribute("aria-controls"));n&&(n.hidden=!a)}),s&&i[l].focus(),r&&E.to(r.state.cmp,{sel:l,u:Y[l],duration:.9,ease:"power3.inOut",overwrite:!0})};i.forEach((l,s)=>{l.addEventListener("click",()=>o(s)),l.addEventListener("keydown",t=>{(t.key==="ArrowRight"||t.key==="ArrowLeft")&&(t.preventDefault(),o((s+(t.key==="ArrowRight"?1:i.length-1))%i.length,!0))})})}function le(e,r){let i=[];return Object.entries(R).forEach(([o,l])=>l.forEach(s=>{let t=e.querySelector(`[data-co="${s.id}"]`);t&&i.push({el:t,c:s})})),e.querySelectorAll(".fb-co__dot").forEach(o=>o.addEventListener("click",()=>{let l=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",String(!l)),o.closest(".fb-co").classList.toggle("is-open",!l)})),function(){for(let{el:l,c:s}of i){if(l.style.visibility==="hidden"||l.style.opacity==="0")continue;let t=r.project(s.obj,s.u,s.v);t&&(l.style.transform=`translate3d(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px, 0)`)}}}function ce(e,r){let i=e.querySelector(".fb-cmparrow");if(!i)return()=>{};let o=!1;return function(){let s=r.state,t=Math.min(1,s.trio.o)*s.cmp.on,c=t>.01?r.project("trio",s.cmp.u,Z):null;if(!c){o&&(i.style.opacity="0",o=!1);return}i.style.opacity=t.toFixed(3),i.style.transform=`translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0)`,o=!0}}function de(e,r){let i=e.querySelector(".fb-canvas"),o=e.querySelector(".fb-drag"),l=c=>{let a=i.getBoundingClientRect();return[c.clientX-a.left,c.clientY-a.top]},s=null;i.addEventListener("pointerdown",c=>{if(c.button!==0)return;let a=r.pickJar(...l(c));a&&(s={k:a,x:c.clientX,t:performance.now(),v:0,id:c.pointerId},i.setPointerCapture(c.pointerId),r.grabJar(a),e.classList.add("is-dragging"),o&&o.classList.add("is-used"))}),i.addEventListener("pointermove",c=>{if(!s){c.pointerType==="mouse"&&e.classList.toggle("is-grab",!!r.pickJar(...l(c)));return}let a=performance.now(),n=(c.clientX-s.x)*.011,u=Math.max(8,a-s.t);s.v=n*(16/u),s.x=c.clientX,s.t=a,r.dragJar(s.k,n)});let t=c=>{!s||c.pointerId!==s.id||(r.releaseJar(s.k,performance.now()-s.t>90?0:s.v),s=null,e.classList.remove("is-dragging"))};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("lostpointercapture",t)}function F(e,r,i){e.addEventListener("click",o=>{let l=o.target.closest("[data-goto]");if(!l)return;o.preventDefault();let s=l.dataset.goto;if(r&&r.scrollToScene(s,!i))return;let t=e.querySelector("#fb-"+s)||e.querySelector("#fb-shop");t&&t.scrollIntoView({behavior:i?"auto":"smooth",block:"start"})})}function ue(e,r){r||E.from(e.querySelectorAll(".fb-card, .fb-boxcard"),{y:40,autoAlpha:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:e.querySelector(".fb-cards"),start:"top 82%"}})}E.registerPlugin(O);async function he(e){if(e.dataset.fbReady)return;e.dataset.fbReady="1";let r=e.dataset.assets||"assets/",i=location.hostname,o=e.dataset.mode||(window.LS||/mitiendanube\.com$/.test(i)?"store":"review"),l=e.dataset.nav?e.dataset.nav==="true":o!=="store";e.classList.add("fb"),e.dataset.prerendered?l||e.querySelector(".fb-nav")?.remove():e.innerHTML=ne({assets:r,mode:o,showNav:l}),e.classList.remove("fb--pending","fb--static"),e.style.setProperty("--fb-exp-h",`${J.end+100}`);let s=matchMedia("(prefers-reduced-motion: reduce)"),t=/[?&]fb-static\b/.test(location.search),c=Q()&&!s.matches&&!t;if(oe(e,o),!c){e.classList.add("fb--static"),L(e,null),F(e,null,!0);return}e.classList.add("fb--3d","fb--loading");let a=K();e.dataset.quality=a.tier;let{World:n}=await import("./fb-world-MN6U3TVX.js"),{buildDirector:u}=await import("./fb-director-NHHMYSTS.js"),b=e.querySelector(".fb-canvas"),m=e.querySelector(".fb-stage"),p;try{p=new n(b,{quality:a,assets:r}),await p.loadProducts()}catch(h){console.warn("[Future Bites] 3D no disponible, se usa la versi\xF3n est\xE1tica.",h),e.classList.remove("fb--3d","fb--loading"),e.classList.add("fb--static"),L(e,null),F(e,null,!0);return}let k=()=>{let h=m.getBoundingClientRect();p.resize(Math.max(1,h.width),Math.max(1,h.height))};if(k(),o==="store"){let h=-1,y=!1,w=()=>{y=!1;let _=0;document.querySelectorAll('.draft-bar, .sticky-header-wrapper, .js-head-main, .head-main, header, [data-store="head"]').forEach(B=>{if(e.contains(B))return;let I=getComputedStyle(B);if(!/fixed|sticky/.test(I.position)||I.visibility==="hidden"||I.display==="none")return;let S=B.getBoundingClientRect();S.top<=1&&S.bottom>0&&S.width>=innerWidth*.5&&S.height<innerHeight*.4&&(_=Math.max(_,Math.round(S.bottom)))}),Math.abs(_-h)>1&&(h=_,e.style.setProperty("--fb-top",_+"px"),k())},G,P=()=>{y||(y=!0,requestAnimationFrame(w)),clearTimeout(G),G=setTimeout(w,450)};addEventListener("scroll",P,{passive:!0}),addEventListener("resize",P),document.addEventListener("transitionend",_=>{e.contains(_.target)||P()},!0),w()}let z=u(e,p),pe=le(e,p),fe=ce(e,p);L(e,p),de(e,p),F(e,z,!1),ue(e,!1),e.classList.remove("fb--loading"),/[?&]fb-debug\b/.test(location.search)&&(window.__fb={world:p,director:z}),a.parallax&&m.addEventListener("pointermove",h=>{let y=m.getBoundingClientRect();p.setPointer((h.clientX-y.left)/y.width*2-1,(h.clientY-y.top)/y.height*2-1)},{passive:!0});let U=!0;new IntersectionObserver(([h])=>{U=h.isIntersecting},{rootMargin:"100px"}).observe(e.querySelector(".fb-exp"));let q=0,A=0,j=a.dpr,H=performance.now();function V(h){requestAnimationFrame(V);let y=h-H;if(H=h,!(!U||document.hidden)&&(p.render(),pe(),fe(),q+=y,A++,A===90)){let w=q/A;q=0,A=0,w>30&&j>1&&(j=Math.max(1,j-.25),p.setDpr(j))}}requestAnimationFrame(V);let X;addEventListener("resize",()=>{clearTimeout(X),X=setTimeout(()=>{k(),O.refresh()},120)}),s.addEventListener?.("change",()=>location.reload()),window.addEventListener("pagehide",()=>p.dispose(),{once:!0})}function be(){document.querySelectorAll("[data-fb-home], #fb-home").forEach(e=>he(e))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",be):be();
