import{a as C,b as T}from"./fb-chunk-UJHWT3O5.js";import{b as K,c as Y,e as Q,f as Z}from"./fb-chunk-4NWNGGMU.js";var g={origin:"https://futurebites.mitiendanube.com",catalog:"/productos/",cart:"/comprar/",snapshotDate:"19/10/2026"},y=[{key:"pollo",index:"01",name:"Pollo",fullName:"Future Bites Pollo",productId:367924923,url:"/productos/future-bites-pollo-1jxp2/",jar:"jar-pollo.webp",bite:"bite-pollo.webp",photo:"foto-pollo-pastilla.webp",photoAlt:"Bocado de Future Bites Pollo con una pastilla colocada en su cavidad",tagline:"Bocados de pollo deshuesado fresco, deshidratados.",ingredient:"Carne de pollo deshuesada fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:72,unit:"%"},{label:"Grasa bruta",value:4,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5.5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"3.500 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cerdo",index:"02",name:"Cerdo",fullName:"Future Bites Cerdo",productId:367924746,url:"/productos/future-bites-cerdo-snack-deshidratado-perros/",jar:"jar-cerdo.webp",bite:"bite-cerdo.webp",photo:"foto-cerdo-pastilla.webp",photoAlt:"Mano colocando una pastilla dentro de un bocado de Future Bites Cerdo",tagline:"Bocados de cerdo magro fresco, deshidratados. El sabor m\xE1s intenso de la l\xEDnea.",ingredient:"Carne de cerdo magra fresca deshidratada",fillable:!0,content:"50 g",pieces:"Bocados de 2 a 5 g",analysis:[{label:"Prote\xEDna bruta",value:68,unit:"%"},{label:"Grasa bruta",value:10,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:5,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:"4.100 kcal/kg",price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}},{key:"cornalitos",index:"03",name:"Cornalitos",fullName:"Future Bites Cornalitos",productId:367925431,url:"/productos/future-bites-cornalitos-1wr3d/",jar:"jar-cornalitos.webp",tagline:"Cornalitos enteros deshidratados. El sabor que m\xE1s premios rinde.",ingredient:"Cornalitos (pescado entero fresco) deshidratados",fillable:!1,content:"20 g",pieces:"Unos 40 cornalitos de 0,4 g",analysis:[{label:"Prote\xEDna bruta",value:62,unit:"%"},{label:"Grasa bruta",value:7.5,unit:"%"},{label:"Humedad",value:8,unit:"%"},{label:"Cenizas",value:13,unit:"%"},{label:"Fibra bruta",value:0,unit:"%"}],energy:null,price:{short:"$12.000,00",transfer:"$10.800,00",available:!0}}],p={key:"caja",name:"Caja x6",productId:375760431,url:"/productos/future-bites-caja-x6/",units:6,price:{short:"$51.000,00",list:"$56.666,67",available:!0},values:{pollo:"Pollo x6",cerdo:"Cerdo x6",cornalitos:"Cornalitos x6",surtida:"Surtida (2 de cada)"},variantIds:{pollo:{id:1623627748,option:"Pollo x6",available:!0},cerdo:{id:1623627750,option:"Cerdo x6",available:!0},cornalitos:{id:1623627751,option:"Cornalitos x6",available:!0},surtida:{id:1623627752,option:"Surtida (2 de cada)",available:!0}}},S=e=>String(e).replace(".",",");async function ee(e,t=""){return(await Promise.allSettled(e.map(async n=>{let l=await fetch(t+n.url,{credentials:"same-origin",cache:"no-store"});if(!l.ok)throw new Error("HTTP "+l.status);let o=await l.text(),u=new DOMParser().parseFromString(o,"text/html").querySelector("[data-variants]");if(!u)throw new Error("sin variantes");let i=JSON.parse(u.getAttribute("data-variants"))[0];return n.price={short:i.price_short,transfer:i.price_with_payment_discount_short||null,available:!!i.available,live:!0},n.variantId=i.id,n}))).map(n=>n.status==="fulfilled")}async function ae(e,t=""){let r=await fetch(t+e.url,{credentials:"same-origin",cache:"no-store"});if(!r.ok)throw new Error("HTTP "+r.status);let n=new DOMParser().parseFromString(await r.text(),"text/html"),l=n.querySelector("[data-variants]");if(!l)throw new Error("sin variantes");let o=JSON.parse(l.getAttribute("data-variants")),s=n.querySelector('form.js-product-form, form[action*="comprar"]'),u=s&&s.querySelector('[name="add_to_cart"]');u&&(e.productId=+u.value||e.productId);for(let[i,d]of Object.entries(e.values)){let b=o.find(v=>[v.option0,v.option1,v.option2].includes(d));b&&(e.variantIds[i]={id:b.id,price:b.price_with_payment_discount_short||b.price_short,list:b.price_short,available:!!b.available,option:d})}let a=Object.values(e.variantIds).find(i=>i.price);return a&&(e.price={short:a.price,list:a.list,available:Object.values(e.variantIds).some(i=>i.available),live:!0}),e}var c=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),x=Object.fromEntries(y.map(e=>[e.key,e])),z={pollo:[{id:"p1",obj:"jarP",u:.5,v:.93,dx:150,dy:-70,title:"Frasco de vidrio",value:"200 cc",more:"Tapa negra y etiqueta envolvente Future Bites."},{id:"p2",obj:"jarP",u:.62,v:.5,dx:170,dy:30,title:"Un solo ingrediente",value:"Pollo deshuesado fresco",more:"Deshidratado, sin conservantes."},{id:"p3",obj:"jarP",u:.42,v:.12,dx:-190,dy:40,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Cada bocado tiene una cavidad rellenable."}],cerdo:[{id:"c1",obj:"jarC",u:.55,v:.92,dx:-170,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"La misma familia de envase, con etiqueta naranja."},{id:"c2",obj:"jarC",u:.4,v:.5,dx:-190,dy:40,title:"Un solo ingrediente",value:"Cerdo magro fresco",more:"Deshidratado, sin conservantes."},{id:"c3",obj:"jarC",u:.6,v:.12,dx:170,dy:30,title:"Contenido",value:"50 g \xB7 bocados de 2 a 5 g",more:"Bocados rellenables, como en Pollo."}],cornalitos:[{id:"k1",obj:"jarK",u:.5,v:.93,dx:160,dy:-60,title:"Frasco de vidrio",value:"200 cc",more:"Etiqueta gris carb\xF3n y tapa con sticker azul."},{id:"k2",obj:"jarK",u:.6,v:.18,dx:180,dy:40,title:"Contenido",value:"20 g \xB7 unos 40 cornalitos",more:"Cada cornalito pesa alrededor de 0,4 g."}]},$=e=>e.normalize("NFD").replace(/\u0301/g,"").normalize("NFC");function R(e){let t=e.price.transfer?`<span class="fb-price__alt" data-price-transfer="${e.key}">${c(e.price.transfer)} con transferencia</span>`:"";return`<div class="fb-price"><span class="fb-price__main" data-price="${e.key}">${c(e.price.short)}</span>${t}
    <span class="fb-price__note" data-price-note="${e.key}">Precio de referencia tomado de la tienda el ${g.snapshotDate}</span></div>`}function N(e,t="Agregar al carrito"){return`<div class="fb-actions">
    <button class="fb-btn fb-btn--primary" type="button" data-buy="${e.key}">${t}</button>
    <a class="fb-btn fb-btn--ghost" href="${g.origin}${e.url}" data-product-link="${e.key}">Ver ficha</a>
  </div>`}function se(e,t="Caja x6"){return`<button class="fb-boxbtn" type="button" data-buy-box="${e}" data-box-label="${c(t)}">
      <span class="fb-boxbtn__l">${c(t)}</span><b class="fb-boxbtn__p"><span data-box-price>${c(p.price.short.replace(",00",""))}</span><small>con transferencia</small></b><span class="fb-boxbtn__cta">Agregar caja</span>
    </button>`}function ue(e,t=""){let r=e.analysis[0],n=e.analysis.slice(1),l=2*Math.PI*52;return`<div class="fb-analysis ${t}">
    <div class="fb-gauge" role="img" aria-label="${c(r.label)}: ${S(r.value)}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" class="fb-gauge__track"/>
        <circle cx="60" cy="60" r="52" class="fb-gauge__bar" style="--len:${(l*r.value/100).toFixed(1)};--c:${l.toFixed(1)}"/>
        <g class="fb-gauge__ticks">${Array.from({length:40},(o,s)=>`<line x1="60" y1="2" x2="60" y2="${s%5?5:8}" transform="rotate(${s*9} 60 60)"/>`).join("")}</g>
      </svg>
      <div class="fb-gauge__val"><b>${S(r.value)}<small>%</small></b><span>Prote\xEDna</span></div>
    </div>
    <ul class="fb-bars">
      ${n.map(o=>`<li><span class="fb-bars__l">${c(o.label)}</span><span class="fb-bars__t"><i style="--v:${o.value/100}"></i></span><span class="fb-bars__v">${S(o.value)}${o.unit}</span></li>`).join("")}
      ${e.energy?`<li class="fb-bars__energy"><span class="fb-bars__l">Energ\xEDa</span><span class="fb-bars__v">${c(e.energy)}</span></li>`:""}
    </ul>
    <p class="fb-source">An\xE1lisis garantizado cada 100 g, seg\xFAn la etiqueta y la ficha oficial del producto.</p>
  </div>`}function O(e,t){return`<div class="fb-panel fb-panel--${t} fb-p-intro" data-panel="${e.key}" id="fb-${e.key}">
    <p class="fb-kicker"><span>Variedad ${e.index}</span></p>
    <h2 class="fb-variety"><span class="fb-variety__brand">Future Bites</span>${c(e.name)}</h2>
    <p class="fb-lead">${c(e.tagline)}</p>
    <ul class="fb-chips">
      <li>Frasco 200 cc \xB7 ${c(e.content)}</li>
      <li>${e.fillable?"Rellenable":"Pescado entero"}</li>
      <li>Un solo ingrediente</li>
    </ul>
    <img class="fb-static" src="{A}${e.jar}" alt="Frasco de ${c(e.fullName)}" loading="lazy" decoding="async">
  </div>`}function te(e,t,r){return`<div class="fb-panel fb-panel--${t} fb-p-fill" data-panel="${e.key}-fill">
    <p class="fb-kicker"><span>Formato rellenable</span></p>
    <h3 class="fb-h3">${$(r)}</h3>
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
    <h3 class="fb-h3">${$(c(e.name)+", en n\xFAmeros.")}</h3>
    ${ue(e)}
    <dl class="fb-spec">
      <div><dt>Ingrediente</dt><dd>${c(e.ingredient)}</dd></div>
      <div><dt>Contenido</dt><dd>${c(e.content)} \xB7 ${c(e.pieces)}</dd></div>
    </dl>
    ${R(e)}
    ${N(e)}
    ${se(e.key,"Caja x6 de "+e.name)}
  </div>`}function D(e){return z[e].map(t=>`<div class="fb-co${t.dx<0?" fb-co--l":""}" data-co="${t.id}" data-co-group="${e}" style="--dx:${t.dx}px;--dy:${t.dy}px;--len:${Math.hypot(t.dx,t.dy).toFixed(1)}px;--ang:${(Math.atan2(t.dy,t.dx)*180/Math.PI).toFixed(1)}deg">
      <span class="fb-co__line" aria-hidden="true"></span>
      <button class="fb-co__dot" type="button" aria-expanded="false" aria-controls="fb-co-${t.id}" aria-label="${c(t.title)}: ${c(t.value)}"></button>
      <div class="fb-co__label" id="fb-co-${t.id}"><span class="fb-co__t">${c(t.title)}</span><b>${c(t.value)}</b><span class="fb-co__more">${c(t.more)}</span></div>
    </div>`).join("")}function be(e){let t=e.analysis[0],r=e.analysis[1];return`<dl class="fb-cmp__dl">
    <div><dt>Ingrediente</dt><dd>${c(e.ingredient)}</dd></div>
    <div><dt>Presentaci\xF3n</dt><dd>Frasco 200 cc \xB7 ${c(e.content)}</dd></div>
    <div><dt>Piezas</dt><dd>${c(e.pieces)}</dd></div>
    <div><dt>Rellenable</dt><dd>${e.fillable?"S\xED, con cavidad para pastilla":"No"}</dd></div>
    <div><dt>Prote\xEDna bruta</dt><dd><span class="fb-mini"><i style="--v:${t.value/100}"></i></span>${S(t.value)}%</dd></div>
    <div><dt>Grasa bruta</dt><dd><span class="fb-mini"><i style="--v:${r.value/100}"></i></span>${S(r.value)}%</dd></div>
    ${e.energy?`<div><dt>Energ\xEDa</dt><dd>${c(e.energy)}</dd></div>`:""}
  </dl>`}function re({assets:e,mode:t,showNav:r}){let n=e;return`
  <a class="fb-skip" href="#fb-shop">Saltar el recorrido e ir a los productos</a>
  ${r?`<header class="fb-nav">
      <a class="fb-nav__logo" href="${g.origin}/" aria-label="Future Bites, inicio"><img src="{A}logo.webp" alt="Future Bites" width="304" height="164"></a>
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
        <h1 class="fb-display">${$("El futuro tiene <em>otro sabor.</em>")}</h1>
        <p class="fb-lead">Snacks deshidratados para perros, de un solo ingrediente y sin conservantes.</p>
        <div class="fb-actions">
          <button class="fb-btn fb-btn--primary" type="button" data-goto="laboratorio">Explorar Future Bites</button>
          <a class="fb-btn fb-btn--ghost" href="#fb-shop">Ver productos</a>
        </div>
        <img class="fb-static" src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" decoding="async">
      </div>

      <div class="fb-panel fb-panel--right fb-p-lab" data-panel="lab" id="fb-laboratorio">
        <p class="fb-kicker"><span>Laboratorio Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${$("Peque\xF1os bites. <em>Grandes ideas.</em>")}</h2>
        <ul class="fb-readout">
          <li data-read="1"><span>Ingrediente</span><b>Uno solo por variedad</b></li>
          <li data-read="2"><span>Conservantes</span><b>Sin conservantes</b></li>
          <li data-read="3"><span>Proceso</span><b>Deshidratado</b></li>
          <li data-read="4"><span>Formato</span><b>Rellenable en Pollo y Cerdo</b></li>
        </ul>
      </div>

      <div class="fb-callouts" data-callouts>${D("pollo")}${D("cerdo")}${D("cornalitos")}</div>

      ${O(x.pollo,"left")}
      ${te(x.pollo,"left","Una cavidad pensada para la pastilla.")}
      ${M(x.pollo,"right")}

      ${O(x.cerdo,"right")}
      ${te(x.cerdo,"right","El mismo gesto, con el sabor m\xE1s intenso.")}
      ${M(x.cerdo,"left")}

      ${O(x.cornalitos,"left")}
      ${M(x.cornalitos,"right")}

      <div class="fb-panel fb-panel--wide fb-p-compare" data-panel="compare" id="fb-comparar">
        <div class="fb-cmp__head">
          <p class="fb-kicker"><span>Comparador</span></p>
          <h2 class="fb-display fb-display--md">${$("Eleg\xED tu <em>bite.</em>")}</h2>
        </div>
        <div class="fb-cmp__tabs" role="tablist" aria-label="Variedades">
          ${y.map((s,u)=>`<button role="tab" type="button" id="fb-tab-${s.key}" aria-controls="fb-tp-${s.key}" aria-selected="${u===0}" tabindex="${u===0?0:-1}" data-cmp="${u}"><span>${s.index}</span>${c(s.name)}</button>`).join("")}
        </div>
        ${y.map((s,u)=>`<div class="fb-cmp__panel" role="tabpanel" id="fb-tp-${s.key}" aria-labelledby="fb-tab-${s.key}" ${u===0?"":"hidden"}>
          ${be(s)}
          ${R(s)}
          ${N(s)}
          ${se(s.key,"Caja x6 de "+s.name)}
        </div>`).join("")}
      </div>

      <div class="fb-panel fb-panel--left fb-p-universe" data-panel="universe" id="fb-universo">
        <p class="fb-kicker"><span>Universo Future Bites</span></p>
        <h2 class="fb-display fb-display--md">${$("Dise\xF1ados para una <em>nueva generaci\xF3n</em> de perros.")}</h2>
        <ul class="fb-statements">
          <li data-stmt="1"><b>Un solo ingrediente</b> por variedad.</li>
          <li data-stmt="2"><b>Funcionales</b> por dise\xF1o.</li>
          <li data-stmt="3"><b>Nacidos en Domani</b>, Rosario.</li>
        </ul>
        <a class="fb-btn fb-btn--primary" href="#fb-shop">Ver los productos</a>
        <img class="fb-static" src="{A}universo.webp" alt="Ilustraci\xF3n retrofuturista de tres perros en una ciudad del futuro" loading="lazy" decoding="async">
      </div>

      <nav class="fb-dots" aria-label="Escenas del recorrido">
        ${Y.map((s,u)=>`<button type="button" data-goto="${s.id}" aria-label="${c(s.label)}"${u===0?' aria-current="step"':""}><span>${c(s.label)}</span></button>`).join("")}
      </nav>
      <div class="fb-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
      <div class="fb-drag" aria-hidden="true"><i></i>Arrastr\xE1 el frasco para girarlo</div>
    </div>
  </section>

  <section class="fb-shop" id="fb-shop" aria-labelledby="fb-shop-title">
    <div class="fb-shop__in">
      <p class="fb-kicker fb-kicker--dark"><span>Tienda Future Bites</span></p>
      <h2 class="fb-display fb-display--dark" id="fb-shop-title">${$("Snacks con <em>prop\xF3sito.</em>")}</h2>
      <div class="fb-cards">
        ${y.map(s=>`<article class="fb-card" data-card="${s.key}">
          <div class="fb-card__media"><img src="{A}${s.jar}" alt="Frasco de ${c(s.fullName)}" loading="lazy" decoding="async"></div>
          <div class="fb-card__body">
            <p class="fb-card__idx">Variedad ${s.index}</p>
            <h3 class="fb-variety fb-variety--card"><span class="fb-variety__brand">Future Bites</span>${c(s.name)}</h3>
            <p class="fb-card__desc">${c(s.tagline)}</p>
            <ul class="fb-chips fb-chips--dark"><li>Frasco 200 cc \xB7 ${c(s.content)}</li><li>${s.fillable?"Rellenable":"Pescado entero"}</li></ul>
            <div class="fb-format" role="radiogroup" aria-label="Formato de compra de ${c(s.name)}">
              <button type="button" role="radio" aria-checked="true" data-format="unit">Frasco</button>
              <button type="button" role="radio" aria-checked="false" data-format="box">Caja x6</button>
            </div>
            ${R(s)}
            <div class="fb-price fb-price--box"><span class="fb-price__main" data-box-price>${c(p.price.short)}</span><span class="fb-price__alt">con transferencia \xB7 6 frascos de ${c(s.name)}</span>
              <span class="fb-price__note">Precio de lista <span data-box-list>${c(p.price.list)}</span></span></div>
            ${N(s)}
          </div>
        </article>`).join("")}
      </div>
      <article class="fb-boxcard" data-card="surtida">
        <div class="fb-boxcard__media"><img src="{A}trio.webp" alt="Frascos de Future Bites Cerdo, Pollo y Cornalitos" loading="lazy" decoding="async"></div>
        <div class="fb-boxcard__body">
          <p class="fb-card__idx">Caja x6 \xB7 Surtida</p>
          <h3 class="fb-boxcard__title">${$("Los tres sabores en una caja")}</h3>
          <p class="fb-card__desc">2 frascos de Pollo, 2 de Cerdo y 2 de Cornalitos.</p>
          <div class="fb-price"><span class="fb-price__main" data-box-price>${c(p.price.short)}</span><span class="fb-price__alt">con transferencia</span>
            <span class="fb-price__note">Caja de 6 frascos \xB7 precio de lista <span data-box-list>${c(p.price.list)}</span></span></div>
          <div class="fb-actions">
            <button class="fb-btn fb-btn--primary" type="button" data-buy-box="surtida">Agregar caja al carrito</button>
            <a class="fb-btn fb-btn--ghost" href="${g.origin}${p.url}" data-box-link>Ver ficha</a>
          </div>
        </div>
      </article>
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
      <h2 class="fb-display" id="fb-outro-title">${$("Future Bites <em>\u2014 el futuro de los snacks.</em>")}</h2>
      <a class="fb-btn fb-btn--primary" href="${g.origin}${g.catalog}" data-catalog>Ver cat\xE1logo completo</a>
    </div>
  </section>`.replaceAll("{A}",n)}var U=e=>{let t=document.createElement("form");t.method="post",t.action=g.cart,e.forEach(([r,n])=>{let l=document.createElement("input");l.type="hidden",l.name=r,l.value=n,t.appendChild(l)}),document.body.appendChild(t),t.submit()};function ie(e,t){let r=Object.fromEntries(y.map(a=>[a.key,a])),n=t==="store",l=a=>{n||(a.target="_blank",a.rel="noopener")},o=(n?"":g.origin)+p.url;e.querySelectorAll("[data-product-link]").forEach(a=>{a.href=(n?"":g.origin)+r[a.dataset.productLink].url,l(a)}),e.querySelectorAll("[data-catalog]").forEach(a=>{a.href=(n?"":g.origin)+g.catalog,l(a)}),e.querySelectorAll("[data-box-link]").forEach(a=>{a.href=o,l(a)}),e.querySelectorAll(".fb-card").forEach(a=>{let i=[...a.querySelectorAll("[data-format]")],d=b=>{i.forEach(f=>f.setAttribute("aria-checked",String(f.dataset.format===b))),a.classList.toggle("is-box",b==="box");let v=a.querySelector("[data-buy]");v&&(v.tagName==="A"?v.href=b==="box"?o:g.origin+r[v.dataset.buy].url:v.disabled||(v.textContent=b==="box"?"Agregar caja al carrito":"Agregar al carrito"))};i.forEach((b,v)=>{b.addEventListener("click",()=>d(b.dataset.format)),b.addEventListener("keydown",f=>{if(!/Arrow(Left|Right|Up|Down)/.test(f.key))return;f.preventDefault();let k=i[(v+1)%i.length];k.focus(),d(k.dataset.format)})})});let s=a=>{let i=p.variantIds[a];return[["add_to_cart",p.productId],["variation[0]",i?i.option:p.values[a]],["quantity",1]]},u=(a,i)=>{a.disabled=!0,a.textContent=i};e.querySelectorAll("[data-buy]").forEach(a=>{let i=r[a.dataset.buy];if(!n){let d=document.createElement("a");d.className=a.className,d.href=g.origin+i.url,d.target="_blank",d.rel="noopener",d.dataset.buy=i.key,d.textContent="Comprar en la tienda",a.replaceWith(d);return}a.addEventListener("click",()=>{let d=a.closest(".fb-card");if(d&&d.classList.contains("is-box")){u(a,"Agregando\u2026"),U(s(i.key));return}u(a,"Agregando\u2026"),U([["add_to_cart",i.productId],["quantity",1]])})}),e.querySelectorAll("[data-buy-box]").forEach(a=>{let i=a.dataset.buyBox;if(!n){let d=document.createElement("a");d.className=a.className,d.href=o,d.target="_blank",d.rel="noopener",d.dataset.buyBox=i,d.innerHTML=a.innerHTML;let b=d.querySelector(".fb-boxbtn__cta");b&&(b.textContent="Ver en la tienda"),d.classList.contains("fb-boxbtn")||(d.textContent="Comprar en la tienda"),a.replaceWith(d);return}a.addEventListener("click",()=>{let d=a.querySelector(".fb-boxbtn__cta");a.disabled=!0,d?d.textContent="Agregando\u2026":a.textContent="Agregando\u2026",U(s(i))})}),n&&(ee(y).then(a=>{y.forEach((i,d)=>{a[d]&&(e.querySelectorAll(`[data-price="${i.key}"]`).forEach(b=>{b.textContent=i.price.short}),e.querySelectorAll(`[data-price-transfer="${i.key}"]`).forEach(b=>{b.textContent=i.price.transfer?`${i.price.transfer} con transferencia`:""}),e.querySelectorAll(`[data-price-note="${i.key}"]`).forEach(b=>{b.textContent=i.price.available?"":"Sin stock por el momento"}),i.price.available||e.querySelectorAll(`[data-buy="${i.key}"]`).forEach(b=>{b.disabled=!0,b.textContent="Sin stock"}))})}),ae(p).then(()=>{if(!p.productId||!Object.keys(p.variantIds).length)throw new Error("caja sin variantes");e.querySelectorAll("[data-box-price]").forEach(a=>{a.textContent=a.closest(".fb-boxbtn")?p.price.short.replace(",00",""):p.price.short}),p.price.list&&e.querySelectorAll("[data-box-list]").forEach(a=>{a.textContent=p.price.list}),Object.entries(p.variantIds).forEach(([a,i])=>{i.available||e.querySelectorAll(`[data-buy-box="${a}"]`).forEach(d=>{d.disabled=!0})})}).catch(a=>{console.warn("[Future Bites] Caja x6 no disponible:",a.message),e.classList.add("fb--nobox")}))}function j(e,t){let r=[...e.querySelectorAll("[data-cmp]")],n=(l,o)=>{r.forEach((s,u)=>{let a=l===u;s.setAttribute("aria-selected",a),s.tabIndex=a?0:-1;let i=e.querySelector("#"+s.getAttribute("aria-controls"));i&&(i.hidden=!a)}),o&&r[l].focus(),t&&C.to(t.state.cmp,{sel:l,duration:.9,ease:"power3.inOut",overwrite:!0})};r.forEach((l,o)=>{l.addEventListener("click",()=>n(o)),l.addEventListener("keydown",s=>{(s.key==="ArrowRight"||s.key==="ArrowLeft")&&(s.preventDefault(),n((o+(s.key==="ArrowRight"?1:r.length-1))%r.length,!0))})})}function oe(e,t){let r=[];return Object.entries(z).forEach(([n,l])=>l.forEach(o=>{let s=e.querySelector(`[data-co="${o.id}"]`);s&&r.push({el:s,c:o})})),e.querySelectorAll(".fb-co__dot").forEach(n=>n.addEventListener("click",()=>{let l=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!l)),n.closest(".fb-co").classList.toggle("is-open",!l)})),function(){for(let{el:l,c:o}of r){if(l.style.visibility==="hidden"||l.style.opacity==="0")continue;let s=t.project(o.obj,o.u,o.v);s&&(l.style.transform=`translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`)}}}function ne(e,t){let r=e.querySelector(".fb-canvas"),n=e.querySelector(".fb-drag"),l=u=>{let a=r.getBoundingClientRect();return[u.clientX-a.left,u.clientY-a.top]},o=null;r.addEventListener("pointerdown",u=>{if(u.button!==0)return;let a=t.pickJar(...l(u));a&&(o={k:a,x:u.clientX,t:performance.now(),v:0,id:u.pointerId},r.setPointerCapture(u.pointerId),t.grabJar(a),e.classList.add("is-dragging"),n&&n.classList.add("is-used"))}),r.addEventListener("pointermove",u=>{if(!o){u.pointerType==="mouse"&&e.classList.toggle("is-grab",!!t.pickJar(...l(u)));return}let a=performance.now(),i=(u.clientX-o.x)*.011,d=Math.max(8,a-o.t);o.v=i*(16/d),o.x=u.clientX,o.t=a,t.dragJar(o.k,i)});let s=u=>{!o||u.pointerId!==o.id||(t.releaseJar(o.k,performance.now()-o.t>90?0:o.v),o=null,e.classList.remove("is-dragging"))};r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),r.addEventListener("lostpointercapture",s)}function q(e,t,r){e.addEventListener("click",n=>{let l=n.target.closest("[data-goto]");if(!l)return;n.preventDefault();let o=l.dataset.goto;if(t&&t.scrollToScene(o,!r))return;let s=e.querySelector("#fb-"+o)||e.querySelector("#fb-shop");s&&s.scrollIntoView({behavior:r?"auto":"smooth",block:"start"})})}function le(e,t){if(t)return;C.from(e.querySelectorAll(".fb-card, .fb-boxcard"),{y:40,autoAlpha:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:e.querySelector(".fb-cards"),start:"top 82%"}});let r=e.querySelector(".fb-outro");C.timeline({scrollTrigger:{trigger:r,start:"top bottom",end:"bottom bottom",scrub:.8}}).fromTo(r.querySelector(".fb-outro__trio"),{scale:1.22,y:40},{scale:1,y:0,ease:"none"},0).fromTo(r.querySelector(".fb-outro__orbits"),{scale:1.3,rotate:-4,opacity:0},{scale:1,rotate:0,opacity:1,ease:"none"},0).fromTo(r.querySelectorAll(".fb-outro__logo, .fb-outro h2, .fb-outro .fb-btn"),{y:30,autoAlpha:0},{y:0,autoAlpha:1,stagger:.08,ease:"none"},.3)}C.registerPlugin(T);async function pe(e){if(e.dataset.fbReady)return;e.dataset.fbReady="1";let t=e.dataset.assets||"assets/",r=location.hostname,n=e.dataset.mode||(window.LS||/mitiendanube\.com$/.test(r)?"store":"review"),l=e.dataset.nav?e.dataset.nav==="true":n!=="store";e.classList.add("fb"),e.dataset.prerendered?l||e.querySelector(".fb-nav")?.remove():e.innerHTML=re({assets:t,mode:n,showNav:l}),e.classList.remove("fb--pending","fb--static"),e.style.setProperty("--fb-exp-h",`${K.end+100}`);let o=matchMedia("(prefers-reduced-motion: reduce)"),s=/[?&]fb-static\b/.test(location.search),u=Z()&&!o.matches&&!s;if(ie(e,n),!u){e.classList.add("fb--static"),j(e,null),q(e,null,!0);return}e.classList.add("fb--3d","fb--loading");let a=Q();e.dataset.quality=a.tier;let{World:i}=await import("./fb-world-IAAW24XE.js"),{buildDirector:d}=await import("./fb-director-DDZRE7F6.js"),b=e.querySelector(".fb-canvas"),v=e.querySelector(".fb-stage"),f;try{f=new i(b,{quality:a,assets:t}),await f.loadProducts()}catch(m){console.warn("[Future Bites] 3D no disponible, se usa la versi\xF3n est\xE1tica.",m),e.classList.remove("fb--3d","fb--loading"),e.classList.add("fb--static"),j(e,null),q(e,null,!0);return}let k=()=>{let m=v.getBoundingClientRect();f.resize(Math.max(1,m.width),Math.max(1,m.height))};if(k(),n==="store"){let m=-1,h=!1,w=()=>{h=!1;let _=0;document.querySelectorAll('.draft-bar, .sticky-header-wrapper, .js-head-main, .head-main, header, [data-store="head"]').forEach(B=>{if(e.contains(B))return;let I=getComputedStyle(B);if(!/fixed|sticky/.test(I.position)||I.visibility==="hidden"||I.display==="none")return;let E=B.getBoundingClientRect();E.top<=1&&E.bottom>0&&E.width>=innerWidth*.5&&E.height<innerHeight*.4&&(_=Math.max(_,Math.round(E.bottom)))}),Math.abs(_-m)>1&&(m=_,e.style.setProperty("--fb-top",_+"px"),k())},W,P=()=>{h||(h=!0,requestAnimationFrame(w)),clearTimeout(W),W=setTimeout(w,450)};addEventListener("scroll",P,{passive:!0}),addEventListener("resize",P),document.addEventListener("transitionend",_=>{e.contains(_.target)||P()},!0),w()}let V=d(e,f),de=oe(e,f);j(e,f),ne(e,f),q(e,V,!1),le(e,!1),e.classList.remove("fb--loading"),/[?&]fb-debug\b/.test(location.search)&&(window.__fb={world:f,director:V}),a.parallax&&v.addEventListener("pointermove",m=>{let h=v.getBoundingClientRect();f.setPointer((m.clientX-h.left)/h.width*2-1,(m.clientY-h.top)/h.height*2-1)},{passive:!0});let H=!0;new IntersectionObserver(([m])=>{H=m.isIntersecting},{rootMargin:"100px"}).observe(e.querySelector(".fb-exp"));let L=0,A=0,F=a.dpr,X=performance.now();function G(m){requestAnimationFrame(G);let h=m-X;if(X=m,!(!H||document.hidden)&&(f.render(),de(),L+=h,A++,A===90)){let w=L/A;L=0,A=0,w>30&&F>1&&(F=Math.max(1,F-.25),f.setDpr(F))}}requestAnimationFrame(G);let J;addEventListener("resize",()=>{clearTimeout(J),J=setTimeout(()=>{k(),T.refresh()},120)}),o.addEventListener?.("change",()=>location.reload()),window.addEventListener("pagehide",()=>f.dispose(),{once:!0})}function ce(){document.querySelectorAll("[data-fb-home], #fb-home").forEach(e=>pe(e))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ce):ce();
