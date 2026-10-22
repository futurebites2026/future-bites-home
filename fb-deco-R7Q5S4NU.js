var i="#fa8412",r="#173253",b="#1f4756",$=`
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <mask id="fbd-sun-m"><rect width="200" height="200" fill="#fff"/>${[[112,4],[126,6],[142,8],[160,10],[180,12]].map(([l,e])=>`<rect y="${l}" width="200" height="${e}" fill="#000"/>`).join("")}</mask>
    <symbol id="fbd-sun" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="92" fill="${i}" mask="url(#fbd-sun-m)"/>
    </symbol>
    <symbol id="fbd-planet" viewBox="0 0 240 150">
      <ellipse cx="120" cy="78" rx="112" ry="20" fill="none" stroke="${r}" stroke-width="1.4" transform="rotate(-12 120 78)" opacity=".55"/>
      <circle cx="120" cy="75" r="44" fill="${b}"/>
      <path d="M78 66 H162" stroke="#2c5f78" stroke-width="7" opacity=".55"/>
      <path d="M8 78 A112 20 0 0 0 232 78" fill="none" stroke="${i}" stroke-width="2" transform="rotate(-12 120 78)"/>
    </symbol>
    <symbol id="fbd-orange" viewBox="0 0 240 240">
      <circle cx="120" cy="120" r="112" fill="none" stroke="${r}" stroke-width="1.2" stroke-dasharray="1 7" stroke-linecap="round" opacity=".5"/>
      <circle cx="120" cy="120" r="70" fill="${i}"/>
      <circle cx="120" cy="120" r="88" fill="none" stroke="${i}" stroke-width="1.2" opacity=".45"/>
    </symbol>
    <symbol id="fbd-orbit" viewBox="0 0 200 200">
      <ellipse cx="100" cy="100" rx="92" ry="34" fill="none" stroke="${r}" stroke-width="1.2" opacity=".45" transform="rotate(-24 100 100)"/>
      <ellipse cx="100" cy="100" rx="92" ry="34" fill="none" stroke="${r}" stroke-width="1.2" opacity=".3" transform="rotate(36 100 100)"/>
      <circle cx="100" cy="100" r="16" fill="${r}"/>
      <circle cx="176" cy="66" r="5" fill="${i}"/>
    </symbol>
    <symbol id="fbd-path" viewBox="0 0 260 120">
      <path d="M6 112 C70 108 150 80 236 18" fill="none" stroke="${r}" stroke-width="1.4" stroke-dasharray="2 8" stroke-linecap="round" opacity=".55"/>
      <path d="M226 14 L246 10 L238 30Z" fill="${i}"/>
    </symbol>
    <symbol id="fbd-burst" viewBox="-50 -50 100 100"><g stroke="${i}" stroke-width="1.4" stroke-linecap="round">${Array.from({length:8},(l,e)=>{let s=e*Math.PI/4,a=e%2?24:44;return`<line x1="${(Math.cos(s)*8).toFixed(1)}" y1="${(Math.sin(s)*8).toFixed(1)}" x2="${(Math.cos(s)*a).toFixed(1)}" y2="${(Math.sin(s)*a).toFixed(1)}"/>`}).join("")}</g><circle r="3.5" fill="${i}"/></symbol>
    <symbol id="fbd-spark" viewBox="-12 -12 24 24"><path d="M0-12C.8-3 3-.8 12 0C3 .8.8 3 0 12C-.8 3-3 .8-12 0C-3-.8-.8-3 0-12Z"/></symbol>
  </defs>
</svg>`,m={sun:"0 0 200 200",planet:"0 0 240 150",orange:"0 0 240 240",orbit:"0 0 200 200",path:"0 0 260 120",burst:"-50 -50 100 100"},v=[["sun",0,96,"top:-8%;right:-70px",300,"",!0],["planet",0,96,"top:72%;left:3vw",220,"FB-00 \xB7 Feed the future",!1],["orbit",96,256,"top:8%;left:6vw",120,"Laboratorio \xB7 An\xE1lisis",!0],["burst",96,256,"top:10%;left:46vw",46,"",!1],["path",256,442,"top:62%;right:6vw",240,"Trayectoria 01 \xB7 Pollo",!1],["burst",256,442,"top:10%;right:26vw",40,"",!0],["orange",442,696,"top:58%;left:1vw",250,"\xD3rbita 02 \xB7 Cerdo",!1],["orbit",442,696,"top:8%;left:30vw",96,"",!0],["planet",696,912,"top:64%;right:3vw",200,"Misi\xF3n 03 \xB7 Cornalitos",!1],["burst",696,912,"top:9%;right:30vw",40,"",!0],["orbit",912,1074,"top:8%;left:5vw",96,"Comparador",!0],["path",912,1074,"top:76%;left:6vw",200,"",!1],["sun",1074,1400,"top:4%;right:5vw",120,"",!0]],u=Array.from({length:16},(l,e)=>{let s=e*41%170,a=(e*53+11)%96,p=7+e*5%8,c=e%4===0?i:r,t=e%4===0?.55:.22;return{top:s,left:a,size:p,color:c,op:t}});function x(l){let e=document.createElement("div");e.className="fb-deco",e.setAttribute("aria-hidden","true");let s=v.map(([t,h,o,n,y,d,f])=>`
    <div class="fb-deco__item${f?"":" fb-deco__item--desk"}" data-t0="${h}" data-t1="${o}" style="${n};width:calc(${y}px * var(--fb-deco-s, 1))">
      <svg viewBox="${m[t]}"><use href="#fbd-${t}"/></svg>
      ${d?`<span class="fb-deco__label">${d}</span>`:""}
    </div>`).join(""),a=u.map(t=>`<svg class="fb-deco__spark" style="top:${t.top}vh;left:${t.left}%;width:${t.size}px;height:${t.size}px;opacity:${t.op}" viewBox="-12 -12 24 24" fill="${t.color}"><use href="#fbd-spark"/></svg>`).join("");e.innerHTML=`${$}
    <div class="fb-deco__orbit"></div>
    <div class="fb-deco__far">${a}</div>
    ${s}`,l.insertBefore(e,l.querySelector(".fb-canvas"));let p=[...e.querySelectorAll(".fb-deco__item")].map(t=>({n:t,t0:+t.dataset.t0,t1:+t.dataset.t1,last:""})),c=18;return(t,h)=>{e.style.setProperty("--fb-prog",h.toFixed(4));for(let o of p){let n=Math.max(0,Math.min(1,(t-o.t0+c)/c,(o.t1+c-t)/c)),d=(6-Math.max(0,Math.min(1,(t-o.t0)/(o.t1-o.t0)))*12).toFixed(2),f=n<=.001?"hidden":`${n.toFixed(3)}|${d}`;if(f!==o.last){if(o.last=f,f==="hidden"){o.n.style.visibility="hidden";continue}o.n.style.visibility="visible",o.n.style.opacity=n.toFixed(3),o.n.style.transform=`translate3d(0, ${d}vh, 0)`}}}}export{x as buildDeco};
