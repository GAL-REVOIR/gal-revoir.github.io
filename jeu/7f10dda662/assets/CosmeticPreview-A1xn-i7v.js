import{Ho as e,Zi as t,ai as n,ci as r,fi as i,hi as a,i as o,jr as s,li as c,mi as l,r as u,si as d,ui as f}from"./index-BZ-JOJvb.js";import"./CapIcon-DZBxta6E.js";import"./PlutoniumIcon-BLvAywb0.js";function p(e){let n=e.cosmetic;return n===null?e.type===`crown`||e.type===`flag`?t(`common.none`):t(`territory_patterns.pattern.default`):e.type===`flag`&&e.key===`country:xx`?t(`common.none`):e.type===`pattern`||e.type===`skin`?s(`territory_patterns.pattern`,n.name):e.type===`pack`||e.type===`cosmeticPack`?(n.displayName??``).replace(/(^|[\s-])\p{L}/gu,e=>e.toLocaleUpperCase()):e.type===`subscription`?s(`subscriptions`,n.name):e.type===`effect`?s(`effects`,n.name):e.type===`crown`?s(`crowns`,n.name):s(`flags`,n.name)}function m(e){let n=p(e),r=e.colorPalette;return r===null||e.cosmetic===null?n:t(`inventory.selected_cosmetic_variant`,{name:n,variant:s(`territory_patterns.color_palette`,r.name)})}function h(e){switch(e.type){case`pattern`:case`skin`:return t(`cosmetics.type_skin`);case`flag`:return t(`cosmetics.type_flag`);case`crown`:return t(`cosmetics.type_crown`);case`effect`:return t(`cosmetics.type_effect`,{type:t(`effects.type.${e.effectType}`)});default:return``}}function g(e){return e.cosmetic?.rarity??`common`}function ee(e){switch(g(e)){case`uncommon`:return t(`cosmetics.uncommon`);case`rare`:return t(`cosmetics.rare`);case`epic`:return t(`cosmetics.epic`);case`legendary`:return t(`cosmetics.legendary`);default:return t(`cosmetics.common`)}}var _={common:`bg-white/10 text-white/80 border-white/20`,uncommon:`bg-green-500/15 text-green-300 border-green-400/40`,rare:`bg-blue-500/15 text-blue-300 border-blue-400/40`,epic:`bg-purple-500/15 text-purple-300 border-purple-400/40`,legendary:`bg-orange-500/15 text-orange-300 border-orange-400/40`};function v(e){return _[g(e)]??_.common}function y(e,t){return e===!0?`cosmetics.ai_label`:e===!1?`cosmetics.ai_none_label`:t?`cosmetics.ai_unknown_label`:void 0}var b=o(`#4ade80`),x=b.toHex(),S=b.darken(.125).toHex(),te=`#4785b5`,ne=`#bedc8a`,re=.588,C=.588,w=`#ffffff`,ie=M(x,.65),ae=M(x,.1),T=[`#ff0000`,`#ff8000`,`#ffff00`,`#ffffff`],oe=T.map((e,t)=>pe(e,T[(t+2)%4])),se=1.2,ce=.8,E=6,le=`M13 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h11zM6 20H4v-2h2zm0-4H4v-2h2zm0-4H4v-2h2zm5 8H8v-2h3zm0-4H8v-2h3zm0-4H8v-2h3zm3.5-6H6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7h-3V6.5a.5.5 0 0 0-.5-.5zm7.5 7v9h-2.5v-4h-2v4H15v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z`,ue=[`..D..`,`.DLD.`,`DLLLD`,`.DLD.`,`..D..`],de=[`.....L.....`,`..LLLDLLL..`,`.LLLDDDLLL.`,`.LLDDDDDLL.`,`.LDDDLDDDL.`,`LDDDLLLDDDL`,`.LDDDLDDDL.`,`.LLDDDDDLL.`,`.LLLDDDLLL.`,`..LLLDLLL..`,`.....L.....`],fe=[`.....`,`..D..`,`.DDD.`,`..D..`,`.....`],D=[`.....`,`.LLL.`,`.LDL.`,`.LLL.`,`.....`],O=[`....M....`,`..MMMMM..`,`.MMMLMMM.`,`.MMLLLMM.`,`MMLLLLLMM`,`.MMLLLMM.`,`.MMMLMMM.`,`..MMMMM..`,`....M....`],k=1,A=2,j=5;function M(e,t){let n=o(e).toHsv();return o({h:n.h,s:n.s,v:n.v*t}).toHex()}function pe(e,t,n=.5){let r=o(e).toRgb(),i=o(t).toRgb();return o({r:r.r+(i.r-r.r)*n,g:r.g+(i.g-r.g)*n,b:r.b+(i.b-r.b)*n}).toHex()}function me(e){return e.filter(e=>o(e).isValid()).map(e=>o(e).toHex())}var N=e=>({fill:e,anim:i});function P(e,t,n,r){let a=n.length;if(a===1||t.type===`spiral`)return{paint:N(n[0]),defs:i};if(t.type===`transition`){let e=t.frequency>0?l`<animate
            attributeName="fill"
            values=${[...n,n[0]].join(`;`)}
            dur="${a/t.frequency}s"
            repeatCount="indefinite"
          ></animate>`:i;return{paint:{fill:n[0],anim:e},defs:i}}let o=Math.max(t.colorSize,.001)*a,[s,c,u,d]=r.space===`world`?[0,0,o/2,o/2]:[r.x,r.y,r.size,r.size],f=t.movementSpeed,p=f===0?i:l`<animateTransform
          attributeName="gradientTransform"
          type="translate"
          from="0 0"
          to="${Math.sign(f)*u} ${Math.sign(f)*d}"
          dur="${Math.min(Math.max(o/Math.abs(f),ce),E)}s"
          repeatCount="indefinite"
        ></animateTransform>`,m=l`<linearGradient
    id=${e}
    gradientUnits="userSpaceOnUse"
    spreadMethod="repeat"
    x1=${s}
    y1=${c}
    x2=${s+u}
    y2=${c+d}
  >
    ${n.map((e,t)=>l`<stop offset=${t/a} stop-color=${e}></stop>`)}
    <stop offset="1" stop-color=${n[0]}></stop>
    ${p}
  </linearGradient>`;return{paint:N(`url(#${e})`),defs:m}}function F(e,t,n,r){let i=``;return e.forEach((e,a)=>{for(let o=0;o<e.length;o++)e[o]===t&&(i+=`M${n+o} ${r+a}h1v1h-1z`)}),i}function I(e,t,n,r){let i=t-Math.floor(e[0].length/2),a=n-Math.floor(e.length/2);return l`<g shape-rendering="crispEdges">
    ${Object.keys(r).map(t=>{let n=r[t];return l`<path d=${F(e,t,i,a)} fill=${n.fill}>
        ${n.anim}
      </path>`})}
  </g>`}function L(e){let t=``;for(let n=1;n<e.length;n++){let[r,i]=e[n-1],[a,o]=e[n],s=Math.abs(a-r),c=-Math.abs(o-i),l=r<a?1:-1,u=i<o?1:-1,d=s+c;for(;t+=`M${r} ${i}h1v1h-1z`,!(r===a&&i===o);){let e=2*d;e>=c&&(d+=c,r+=l),e<=s&&(d+=s,i+=u)}}return t}function R(e,t,n){let r=1/3,i=``;for(let a=0;a<3;a++)for(let o=0;o<3;o++){let s=o===1&&a===1;e===k?s||=o===0||o===2:e===A?s||=a===0||a===2:e===j&&(s||=a===2||o===0),s&&(i+=`M${(t+o*r).toFixed(4)} ${(n+a*r).toFixed(4)}h${r.toFixed(4)}v${r.toFixed(4)}h-${r.toFixed(4)}z`)}return i}function z(e,t,n,r,i,a,o){let s=[];for(let c=e;c<=t;c+=.5){let e=Math.min((t-c)/a,1),l=n+r*Math.sin(Math.PI/2*e)*Math.sin(c/i*2*Math.PI+o);s.push(`${c} ${l.toFixed(2)}`)}return`M ${s.join(` L `)}`}function B(e,t,n){return a`<svg
    class="block w-full h-full"
    viewBox="0 0 ${e} ${e}"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>${t}</defs>
    ${n}
  </svg>`}var V=e=>l`<rect width=${e} height=${e} fill=${te}></rect>`,H=e=>l`<rect width=${e} height=${e} fill=${ne}></rect>
    <rect width=${e} height=${e} fill=${x} fill-opacity=${re}></rect>`;function he(e,t,n){let r=[[1,21],[7,16],[12,13],[18,8]],{paint:a,defs:o}=n.length>0?P(e,t,n,{space:`world`}):{paint:N(x),defs:i};return B(24,o,l`${V(24)}
      <path data-trail d=${L(r)} fill=${a.fill} opacity=${C} shape-rendering="crispEdges">
        ${a.anim}
      </path>
      ${I(ue,18,8,{L:N(x),D:N(S)})}`)}function ge(e,t,n){let{paint:r,defs:a}=n.length>0?P(e,t,n,{space:`world`}):{paint:N(x),defs:i},o=i;if(t.type===`spiral`&&n.length>0){let e=Math.min(Math.max(Math.round(t.strands),1),8),r=Math.min(Math.max(t.radius,1),8),a=t.rotationSpeed>0?2*Math.PI/t.rotationSpeed:0;o=l`<g data-spiral fill="none" stroke-linecap="round">
      ${Array.from({length:e},(t,o)=>{let s=z(0,17,12.5,r,10,8,o*2*Math.PI/e),c=n[o%n.length],u=-o*a/e,d=e=>a>0?l`<animate attributeName="opacity" values=${e} dur="${a}s" begin="${u}s" repeatCount="indefinite"></animate>`:i;return l`<g data-strand>
          ${d(`1;0.35;1`)}
          <path d=${s} stroke=${c} stroke-width="2.4" opacity="0.55" style="filter:blur(0.6px);mix-blend-mode:screen"></path>
          <path d=${s} stroke=${c} stroke-width="0.9"></path>
          <path d=${s} stroke="#fff" stroke-width="0.35" opacity="0.9">
            ${d(`0.9;0;0.9`)}
          </path>
        </g>`})}
    </g>`}let s=e=>({fill:e[0],anim:l`<animate attributeName="fill" values=${e.join(`;`)} dur="${se}s" calcMode="discrete" repeatCount="indefinite"></animate>`});return B(24,a,l`${V(24)}
      <path data-trail d=${L([[0,12],[17,12]])} fill=${r.fill} opacity=${C} shape-rendering="crispEdges">
        ${r.anim}
      </path>
      ${o}
      ${I(O,17,12,{L:s(T),M:s(oe)})}`)}function _e(e,t,n){let{paint:r,defs:a}=n.length>0?P(e,t,n,{space:`icon`,x:-.5,y:-.5,size:1}):{paint:N(ie),defs:i},o=.59;return B(1,l`${a}
      <clipPath id="${e}-fill"><circle cx="0.5" cy="0.5" r="0.39"></circle></clipPath>`,l`${H(1)}
      <circle cx="0.5" cy="0.5" r="0.45" fill=${ae}></circle>
      <circle data-fill cx="0.5" cy="0.5" r="0.39" fill=${r.fill}>${r.anim}</circle>
      <g clip-path="url(#${e}-fill)">
        <g
          transform="translate(${(1-o)/2} ${(1-o)/2}) scale(${o/24})"
        >
          <path data-glyph d=${le} fill="#fff"></path>
        </g>
      </g>`)}function ve(e,t,n){let{paint:r,defs:a}=n.length>0?P(e,t,n,{space:`icon`,x:2,y:2,size:11}):{paint:N(x),defs:i};return B(15,a,l`${V(15)}
      ${I(de,7,7,{L:r,D:N(S)})}`)}function ye(e,t,n){let r=n.length>0?P(e,t,n,{space:`world`}):{paint:N(x),defs:i},a=n.length>0?P(`${e}-dark`,t,n.map(e=>be(e,.6)),{space:`world`}):{paint:N(S),defs:i},o=``;for(let e=0;e<24;e++)o+=R(A,e,11);return B(24,l`${r.defs}${a.defs}`,l`${H(24)}
      <path data-rails d=${o} fill=${w}></path>
      ${[13,15,17].map(e=>I(D,e,11,{L:r.paint,D:a.paint}))}
      ${I(fe,19,11,{D:a.paint})}`)}function be(e,t){let n=o(e).toRgb();return o({r:n.r*t,g:n.g*t,b:n.b*t}).toHex()}function xe(e,t,n){let{paint:r,defs:a}=n.length>0?P(e,t,n,{space:`world`}):{paint:N(w),defs:i},o=``;for(let e=0;e<15;e++)o+=R(A,e,8);o+=R(j,15,8);for(let e=9;e<24;e++)o+=R(k,15,e);return B(24,a,l`${H(24)}
      <path data-rails d=${o} fill=${r.fill}>${r.anim}</path>`)}var Se=0,U=class extends f{constructor(...e){super(...e),this.effect=null,this.uid=`effect-scene-${++Se}`}createRenderRoot(){return this}render(){let e=this.effect;if(e===null)return a``;let t=me(e.attributes.colors),n;switch(e.effectType){case`transportShipTrail`:n=he(this.uid,e.attributes,t);break;case`nukeTrail`:n=ge(this.uid,e.attributes,t);break;case`structures`:n=_e(this.uid,e.attributes,t);break;case`warship`:n=ve(this.uid,e.attributes,t);break;case`train`:n=ye(this.uid,e.attributes,t);break;case`railroad`:n=xe(this.uid,e.attributes,t);break}return a`<div
      data-effect-scene=${e.effectType}
      class="w-full h-full rounded-md overflow-hidden"
    >
      ${n}
    </div>`}};n([r({attribute:!1})],U.prototype,`effect`,void 0),U=n([c(`effect-scene`)],U);var W=`#9919ff`,G=class extends f{constructor(...e){super(...e),this.explosion=null,this.animations=[]}createRenderRoot(){return this}render(){return a`<div
      class="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <div data-ring class="rounded-full" style="width:85%;height:85%;"></div>
    </div>`}updated(e){if(!e.has(`explosion`))return;for(let e of this.animations)e.cancel();this.animations=[];let t=this.explosion,n=this.querySelector(`[data-ring]`);if(!t||!n)return;let r=t.colors.length>0?t.colors:[W],i=n.clientWidth||100,a=t.size>0?t.thickness/t.size:.1,o=Math.min(Math.max(a*i,2),i/2);n.style.borderStyle=`solid`,n.style.borderWidth=`${o}px`,n.style.borderColor=r[0];let s=Math.min(Math.max(t.size/Math.max(t.speed,.001),.6),3);if(this.animations.push(n.animate([{transform:`scale(0.1)`,opacity:1},{transform:`scale(1)`,opacity:0}],{duration:s*1e3,iterations:1/0,easing:`linear`})),r.length>=2&&t.transitionSpeed!==0){let e=t.transitionSpeed>0?r:[...r].reverse();this.animations.push(n.animate([...e,e[0]].map(e=>({borderColor:e})),{duration:r.length/Math.abs(t.transitionSpeed)*1e3,iterations:1/0,easing:`linear`}))}}disconnectedCallback(){super.disconnectedCallback();for(let e of this.animations)e.cancel();this.animations=[]}};n([r({attribute:!1})],G.prototype,`explosion`,void 0),G=n([c(`shockwave-swatch`)],G);function K(e){let t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)}var q=class extends f{constructor(...e){super(...e),this.explosion=null,this.animations=[]}createRenderRoot(){return this}dotCount(){let e=this.explosion,t=e?.type===`sparkles`?e.density:10;return Math.round(Math.min(Math.max(t,4),40))}render(){return a`<div data-box class="relative w-full h-full overflow-hidden">
      ${Array.from({length:this.dotCount()},(e,t)=>{let n=K(t)*2*Math.PI,r=Math.sqrt(K(t+101))*42;return a`<div
          data-dot
          class="absolute rounded-full"
          style="left:${50+Math.cos(n)*r}%;top:${50+Math.sin(n)*r}%;transform:translate(-50%,-50%);opacity:0;"
        ></div>`})}
    </div>`}updated(e){if(!e.has(`explosion`))return;for(let e of this.animations)e.cancel();this.animations=[];let t=this.explosion,n=this.querySelector(`[data-box]`);if(!t||!n)return;let r=this.querySelectorAll(`[data-dot]`);if(r.length===0)return;let i=t.colors.length>0?t.colors:[W],a=n.clientWidth||100,o=t.size>0?t.thickness/t.size:.05,s=Math.min(Math.max(o*a,3),a/4),c=Math.min(Math.max(t.size/Math.max(t.speed,.001),.6),3);this.animations.push(n.animate([{transform:`scale(0.05)`,opacity:1,offset:0},{transform:`scale(1)`,opacity:1,offset:.75},{transform:`scale(1)`,opacity:0,offset:1}],{duration:c*1e3,iterations:1/0,easing:`linear`})),r.forEach((e,n)=>{let r=s*(.5+K(n+307));if(e.style.width=`${r}px`,e.style.height=`${r}px`,e.style.backgroundColor=i[n%i.length],this.animations.push(e.animate([{opacity:1},{opacity:.65},{opacity:1}],{duration:(.5+K(n+211)*.6)*1e3,iterations:1/0,easing:`ease-in-out`})),i.length>=2&&t.transitionSpeed!==0){let r=t.transitionSpeed>0?i:[...i].reverse(),a=n%r.length,o=[...r.slice(a),...r.slice(0,a)];this.animations.push(e.animate([...o,o[0]].map(e=>({backgroundColor:e})),{duration:i.length/Math.abs(t.transitionSpeed)*1e3,iterations:1/0,easing:`linear`}))}})}disconnectedCallback(){super.disconnectedCallback();for(let e of this.animations)e.cancel();this.animations=[]}};n([r({attribute:!1})],q.prototype,`explosion`,void 0),q=n([c(`sparkles-swatch`)],q);var J=`400px`,Y=new Map,X;function Z(){return X===void 0?typeof IntersectionObserver>`u`?(X=null,X):(X=new IntersectionObserver(e=>{for(let t of e)Y.get(t.target)?.(t.isIntersecting)},{rootMargin:J,scrollMargin:J}),X):X}function Ce(){return Z()!==null}function Q(e,t){let n=Z();return n===null?(t(!0),()=>{}):(Y.set(e,t),n.observe(e),()=>{Y.get(e)===t&&(Y.delete(e),n.unobserve(e))})}var $=class extends f{constructor(...e){super(...e),this.size=`card`,this.near=!1,this.stopObserving=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add(`block`,`h-full`,`w-full`),this.stopObserving=Q(this,e=>{this.near=e})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserving?.(),this.stopObserving=null,this.near=!1}render(){return a`<div
      data-cosmetic-preview=${this.resolved.cosmetic===null?`default`:this.resolved.type}
      class=${this.size===`detail`?`h-full w-full`:this.resolved.type===`subscription`?`w-full`:`aspect-square w-full`}
    >
      ${this.near||!this.deferrable()?this.renderResolvedPreview():i}
    </div>`}deferrable(){if(this.size!==`card`)return!1;let e=this.resolved.type;return e===`pattern`||e===`effect`||e===`flag`||e===`crown`||e===`skin`}renderResolvedPreview(){if(this.resolved.type===`pattern`){let e=this.resolved.cosmetic;return u(e===null?null:{name:e.name,patternData:e.pattern,colorPalette:this.resolved.colorPalette??void 0},150,150)}if(this.resolved.type===`skin`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():a`<img
        src=${e.url}
        alt=${p(this.resolved)}
        class="w-full h-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`}if(this.resolved.type===`effect`){let t=this.resolved.cosmetic;return t===null?this.renderDefaultPreview():e(t)?t.attributes.type===`sparkles`?a`<sparkles-swatch
            class="block w-full h-full"
            .explosion=${t.attributes}
          ></sparkles-swatch>`:a`<shockwave-swatch
          class="block w-full h-full"
          .explosion=${t.attributes}
        ></shockwave-swatch>`:a`<effect-scene
        class="block w-full h-full"
        .effect=${t}
      ></effect-scene>`}if(this.resolved.type===`crown`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():a`<img
        src=${e.url}
        alt=${p(this.resolved)}
        class="w-full h-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`}if(this.resolved.type===`pack`){let e=this.resolved.cosmetic,n=e.currency===`hard`,r=n?a`<plutonium-icon
            class="block shrink-0"
            .size=${80}
          ></plutonium-icon>`:a`<cap-icon class="block shrink-0" .size=${80}></cap-icon>`,o=n?`text-green-400`:`text-amber-700`,s=n?`cosmetics.hard`:`cosmetics.soft`;return a`<div
        class="relative flex h-full w-full flex-col items-center justify-center gap-0.5 overflow-visible text-center"
      >
        ${r}
        <span class="text-lg font-black leading-none ${o}"
          >${e.amount.toLocaleString()}</span
        >
        <span class="text-[10px] font-bold leading-none text-white/50 uppercase"
          >${t(s)}</span
        >
        ${e.product?.price?a`<span
                data-pack-price
                class="pt-0.5 text-sm font-bold leading-none text-blue-300"
                >${e.product.price}</span
              >`:i}
        ${e.bonusAmount>0?a`<div
                class="absolute top-8 -right-10 w-40 bg-green-500 text-white text-[10px] font-black py-0.5 rotate-45 shadow-md uppercase tracking-wide pointer-events-none"
              >
                ${t(`cosmetics.free`,{numFree:e.bonusAmount.toLocaleString()})}
              </div>`:i}
      </div>`}if(this.resolved.type===`cosmeticPack`)return this.renderPackPreview(this.resolved.packItems??[]);if(this.resolved.type===`subscription`){let e=this.resolved.cosmetic,n=this.size===`detail`,r=n?36:24,o=n?`text-2xl font-bold text-green-400`:`text-sm font-bold text-green-400`,s=n?`text-xs text-white/50 uppercase`:`text-[10px] text-white/50 uppercase`,c=`self-start text-left ${n?`text-xs`:`text-[10px]`} font-bold text-purple-300 uppercase tracking-wide`,l=!e.requiresSteamLicence;return a`<div
        class="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-1"
      >
        <div
          class="flex flex-col items-center ${n?`gap-2`:`gap-1`} w-full"
        >
          <div class="self-start flex items-center gap-1.5">
            <plutonium-icon .size=${r}></plutonium-icon>
            <span class=${o}
              >${e.hardCurrencySignupBonus.toLocaleString()}</span
            >
            <span class=${s}
              >${t(`cosmetics.per_month`)}</span
            >
          </div>
          <div class="self-start flex items-center gap-1.5">
            <plutonium-icon .size=${r}></plutonium-icon>
            <span class=${o}
              >${e.dailyHardCurrency.toLocaleString()}</span
            >
            <span class=${s}
              >${t(`cosmetics.per_day`)}</span
            >
          </div>
          ${l?a`<span
                  data-subscription-perk="verified_name"
                  class=${c}
                  ><span class="text-green-400">✓</span> ${t(`cosmetics.verified_name`)}</span
                >`:i}
          ${l&&e.canCreatePublicLobbies?a`<span
                  data-subscription-perk="public_lobbies"
                  class=${c}
                  ><span class="text-green-400">✓</span> ${t(`cosmetics.public_lobbies`)}</span
                >`:i}
        </div>
      </div>`}return a`<img
      src=${this.resolved.cosmetic.url}
      alt=${p(this.resolved)}
      class="w-full h-full object-contain pointer-events-none"
      draggable="false"
      loading="lazy"
      @error=${e=>{let t=e.currentTarget,n=`/flags/xx.svg`;t.src&&!t.src.endsWith(n)&&(t.src=n)}}
    />`}renderPackPreview(e){let n=e.slice(0,4),r=e.length-n.length;return a`<div
      class="relative grid h-full w-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden"
    >
      ${n.map(e=>a`<div
            data-cosmetic-pack-item=${e.key}
            class="flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded bg-black/30 p-1"
          >
            <cosmetic-preview .resolved=${e} size="card"></cosmetic-preview>
          </div>`)}
      ${r>0?a`<span
              class="absolute bottom-1 right-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white"
              >${t(`cosmetics.pack_more_items`,{count:r})}</span
            >`:i}
    </div>`}renderDefaultPreview(){return a`<div
      class="w-full h-full flex items-center justify-center text-white/40 text-xs uppercase"
    >
      ${t(`territory_patterns.pattern.default`)}
    </div>`}};n([r({attribute:!1})],$.prototype,`resolved`,void 0),n([r({type:String})],$.prototype,`size`,void 0),n([d()],$.prototype,`near`,void 0),$=n([c(`cosmetic-preview`)],$);export{g as a,m as c,p as i,h as l,Q as n,v as o,y as r,ee as s,Ce as t};