import{$s as e,Is as t,Ls as n,Vs as r,Zi as i,ai as a,cc as o,ci as s,cs as ee,ec as c,fi as l,fo as te,hi as u,ic as d,ir as f,li as p,mi as m,nr as ne,oc as h,oi as g,qs as re,sc as ie,si as _,ui as v,zs as y}from"./index-BZ-JOJvb.js";import"./Difficulties-CK0ZtTbE.js";import{t as ae}from"./repeat-dhEvulj5.js";import{f as b,p as oe}from"./GameConfigHelpers-CNc19QSu.js";var se={[t.Easy]:50,[t.Medium]:75,[t.Hard]:100,[t.Impossible]:125},ce=new Set([t.Medium,t.Hard]),x=class extends v{constructor(...e){super(...e),this.difficultyKey=``,this.disabled=!1}createRenderRoot(){return this}render(){if(this.disabled)return l;let e=this.difficultyKey,t=se[e];if(t===void 0)return l;let n=this.difficultyKey.toLowerCase(),r=t===100?i(`difficulty.info_troops_same`):i(`difficulty.info_troops`,{percent:t});return u`<div
      data-difficulty-info
      class="group/difficulty-info pointer-events-none absolute inset-x-2 top-2 z-10 flex justify-end hover:z-20 focus-within:z-20"
      @click=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        aria-label=${i(`difficulty.info_label`)}
        class="pointer-events-auto flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-black/55 text-xs font-black text-white/80 ring-1 ring-white/20 opacity-0 transition-opacity duration-200 hover:bg-black/80 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group-hover/difficulty-card:opacity-100 pointer-coarse:opacity-100"
      >
        ?
      </button>
      <div
        role="tooltip"
        class="pointer-events-none absolute right-0 top-8 hidden w-max max-w-full flex-col gap-1 whitespace-normal rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-left text-xs normal-case tracking-normal text-white/90 shadow-xl group-hover/difficulty-info:flex group-focus-within/difficulty-info:flex"
      >
        <div>
          ${i(`difficulty.info`,{smarts:i(`difficulty.info_smarts_${n}`),troops:r})}
        </div>
        ${ce.has(e)?u`<div class="text-white/60">
                ${i(`difficulty.info_note_${n}`)}
              </div>`:l}
      </div>
    </div>`}};a([s({type:String})],x.prototype,`difficultyKey`,void 0),a([s({type:Boolean})],x.prototype,`disabled`,void 0),x=a([p(`difficulty-info`)],x);var S=class extends v{constructor(...e){super(...e),this.value=0,this.min=0,this.max=400,this.step=1,this.labelKey=``,this.disabledKey=``,this.defaultValue=void 0,this.defaultLabelKey=``,this.isEditing=!1}createRenderRoot(){return this}dispatchValueChange(){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleSliderInput(e){let t=e.target;this.value=t.valueAsNumber}handleSliderChange(e){let t=e.target;this.value=t.valueAsNumber,this.dispatchValueChange()}handleNumberInput(e){let t=e.target.valueAsNumber;isNaN(t)&&(t=this.min),t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.value=t}handleNumberComplete(){this.dispatchValueChange()}handleNumberKeyDown(e){e.key===`Enter`&&(this.isEditing=!1,this.handleNumberComplete())}enableEditing(){this.isEditing=!0,this.updateComplete.then(()=>this.numberInput?.focus())}render(){let e=this.max===this.min?0:(this.value-this.min)/(this.max-this.min)*100;return u`
      <div
        class="flex flex-col items-center justify-center gap-1 w-full text-center"
      >
        <input
          type="range"
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .valueAsNumber=${this.value}
          style="background: linear-gradient(to right, var(--color-malibu-blue) 0%, var(--color-malibu-blue) ${e}%, rgba(255, 255, 255, 0.15) ${e}%, rgba(255, 255, 255, 0.15) 100%); background-size: 100% 6px; background-repeat: no-repeat; background-position: center; border-radius: 9999px;"
          class="w-full h-6 p-0 m-0 bg-transparent appearance-none cursor-pointer focus:outline-none 
                 [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-[6px] [&::-webkit-slider-runnable-track]:cursor-pointer [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:transition-colors
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-malibu-blue [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-mt-[6px] [&::-webkit-slider-thumb]:shadow-[var(--shadow-malibu-blue-ring-sm)] [&::-webkit-slider-thumb]:transition-all active:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:shadow-[var(--shadow-malibu-blue-ring-lg)]
                 [&::-moz-range-track]:w-full [&::-moz-range-track]:h-[6px] [&::-moz-range-track]:cursor-pointer [&::-moz-range-track]:bg-transparent [&::-moz-range-track]:rounded-full [&::-moz-range-track]:transition-colors
                 [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-malibu-blue [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-[var(--shadow-malibu-blue-ring-sm)] [&::-moz-range-thumb]:transition-all active:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:shadow-[var(--shadow-malibu-blue-ring-lg)]"
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        <div
          class="text-xs uppercase font-bold tracking-wider text-center w-full leading-tight mb-1 flex flex-col items-center ${this.value>0?`text-white`:`text-white/60`}"
        >
          <span>${this.labelKey?i(this.labelKey):``}</span>
          ${this.isEditing?u`<input
                  type="number"
                  .min=${this.min}
                  .max=${this.max}
                  .valueAsNumber=${this.value}
                  class="w-[60px] bg-black/60 text-white border border-white/20 text-center rounded text-sm p-1 leading-none font-bold font-inherit mt-1 focus:outline-none focus:border-blue-500"
                  @input=${this.handleNumberInput}
                  @blur=${()=>{this.isEditing=!1,this.handleNumberComplete()}}
                  @keydown=${this.handleNumberKeyDown}
                />`:u`<span
                  class="cursor-pointer min-w-[60px] inline-block text-center text-sm font-bold select-none hover:text-white transition-colors mt-1 ${this.value>0?`text-white`:`text-white/60`}"
                  role="button"
                  tabindex="0"
                  @click=${this.enableEditing}
                  @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(this.enableEditing(),e.preventDefault())}}
                >
                  ${this.value===0&&this.disabledKey?i(this.disabledKey):this.defaultValue!==void 0&&this.value===this.defaultValue&&this.defaultLabelKey?u`${this.value}
                            <span class="text-white/40 uppercase"
                              >(${i(this.defaultLabelKey)})</span
                            >`:this.value}
                </span>`}
        </div>
      </div>
    `}};a([s({type:Number})],S.prototype,`value`,void 0),a([s({type:Number})],S.prototype,`min`,void 0),a([s({type:Number})],S.prototype,`max`,void 0),a([s({type:Number})],S.prototype,`step`,void 0),a([s({type:String})],S.prototype,`labelKey`,void 0),a([s({type:String})],S.prototype,`disabledKey`,void 0),a([s({type:Number})],S.prototype,`defaultValue`,void 0),a([s({type:String})],S.prototype,`defaultLabelKey`,void 0),a([_()],S.prototype,`isEditing`,void 0),a([g(`input[type='number']`)],S.prototype,`numberInput`,void 0),S=a([p(`fluent-slider`)],S);var le=1.340264,ue=-.081106,de=893e-6,fe=.003796,pe=Math.sqrt(3)/2;function C(e,t){let n=Math.asin(pe*Math.sin(e*Math.PI/180)),r=n*n,i=r*r*r;return[t*Math.PI/180*Math.cos(n)/(pe*(le+3*ue*r+i*(7*de+9*fe*r))),n*(le+ue*r+i*(de+fe*r))]}var w=1e3,T=w/2/C(0,180)[0],E=Math.ceil(2*C(90,0)[1]*T);function me(e,t){let[n,r]=C(e,t);return[w/2+n*T,E/2-r*T]}var D=d.flatMap(e=>{if(e.location===void 0)return[];let[t,n]=me(e.location.lat,e.location.lon);return[{map:e,x:t,y:n,continental:e.categories.includes(`continental`)}]}).sort((e,t)=>Number(t.continental)-Number(e.continental)),O=D.filter(e=>e.continental),he=new Set(O.filter(e=>O.some(t=>t.y<e.y&&e.y-t.y<30&&Math.abs(t.x-e.x)<60))),k=E/w,A=w/10,j=1.6,M=5,N=null;function ge(){return N??=fetch(ee(`images/AtlasMap.svg`)).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.text()}).then(e=>{let t=new DOMParser().parseFromString(e,`image/svg+xml`),n=e=>t.getElementById(e)?.getAttribute(`d`)??``,r={sphere:n(`sphere`),land:n(`land`)};if(!r.sphere||!r.land)throw Error(`AtlasMap.svg is missing the sphere or land path`);return r}).catch(e=>{throw N=null,e}),N}var P=class extends v{constructor(...e){super(...e),this.selectedMap=h.World,this.useRandomMap=!1,this.paths={sphere:``,land:``},this.view={x:0,y:0,width:w},this.hovered=null,this.stats=new Map,this.revealDetails=!1,this.pointers=new Map,this.dragDistance=0}createRenderRoot(){return this}updated(e){this.revealDetails&&(e.has(`revealDetails`)||e.has(`stats`))&&this.querySelector(`[role="tooltip"]`)?.scrollIntoView({block:`nearest`})}connectedCallback(){super.connectedCallback(),ge().then(e=>this.paths=e).catch(e=>console.warn(`Failed to load the atlas map:`,e))}get zoomed(){return this.view.width<w}setView(e,t,n){let r=n*k;this.view={x:Math.min(w-n,Math.max(0,e)),y:Math.min(E-r,Math.max(0,t)),width:n}}zoomTo(e,t=.5,n=.5){let{x:r,y:i,width:a}=this.view,o=Math.min(w,Math.max(A,e));this.setView(r+t*(a-o),i+n*(a-o)*k,o)}frameFraction(e,t){let n=this.frame.getBoundingClientRect();return[(e-n.left)/n.width,(t-n.top)/n.height]}handleWheel(e){if(e.deltaY>0&&!this.zoomed||e.deltaY<0&&this.view.width<=A)return;e.preventDefault();let t=e.deltaY*(e.deltaMode===1?16:1);this.zoomTo(this.view.width*Math.exp(Math.max(-100,Math.min(100,t))/250),...this.frameFraction(e.clientX,e.clientY))}handlePointerDown(e){e.pointerType===`mouse`&&e.button!==0||(e.pointerType===`touch`&&!this.isOnPin(e)&&(this.hovered=null),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1&&(this.dragDistance=0))}handlePointerMove(e){let t=this.pointers.get(e.pointerId);if(t===void 0)return;let n=[...this.pointers].filter(([t])=>t!==e.pointerId);if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),n.length===0){let n=e.clientX-t.x,r=e.clientY-t.y;if(this.dragDistance+=Math.abs(n)+Math.abs(r),this.dragDistance<=M)return;this.frame.hasPointerCapture(e.pointerId)||(this.frame.setPointerCapture(e.pointerId),this.hovered=null);let i=this.view.width/this.frame.clientWidth;this.setView(this.view.x-n*i,this.view.y-r*i,this.view.width);return}let r=n[0][1],i=Math.hypot(t.x-r.x,t.y-r.y),a=Math.hypot(e.clientX-r.x,e.clientY-r.y);this.dragDistance=1/0,this.hovered=null,i>0&&a>0&&this.zoomTo(this.view.width*i/a,...this.frameFraction((e.clientX+r.x)/2,(e.clientY+r.y)/2))}handlePointerUp(e){this.pointers.delete(e.pointerId)}isOnPin(e){return e.target.closest(`[data-atlas-pin]`)!==null}hover(e){this.hovered=e,this.revealDetails=!1;let t=e.map.type;this.stats.has(t)||ne(t).then(e=>{this.stats=new Map(this.stats).set(t,b(e))}).catch(e=>console.warn(`Failed to load map stats:`,e))}selectPin(e){this.dragDistance>M||(this.hover(e),this.revealDetails=!0,this.onSelectMap?.(e.map.type))}position(e){return[(e.x-this.view.x)/this.view.width*100,(e.y-this.view.y)/(this.view.width*k)*100]}renderPin(e){let[t,n]=this.position(e);if(t<-2||t>102||n<-2||n>102)return l;let r=!this.useRandomMap&&e.map.type===this.selectedMap,a=i(e.map.translationKey);return u`<button
      type="button"
      tabindex="-1"
      data-atlas-pin=${e.map.id}
      aria-label=${a}
      aria-pressed=${r}
      class="group/pin absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center ${r?`z-10`:``}"
      style="left: ${t}%; top: ${n}%"
      @pointerenter=${()=>this.hover(e)}
      @pointerleave=${t=>{t.pointerType!==`touch`&&this.hovered===e&&(this.hovered=null)}}
      @click=${()=>this.selectPin(e)}
    >
      ${e.continental?u`<span
              class="flex h-4 w-4 items-center justify-center rounded-full border-2 bg-black/40 transition-transform duration-150 group-hover/pin:scale-125 ${r?`border-cyber-yellow shadow-[0_0_10px_rgba(255,215,0,0.7)]`:`border-aquarius`}"
            >
              <span
                class="h-1.5 w-1.5 rounded-full ${r?`bg-cyber-yellow`:`bg-aquarius`}"
              ></span>
            </span>`:u`<span
              class="rounded-full ring-2 ring-black/50 transition-transform duration-150 group-hover/pin:scale-150 ${r?`h-3.5 w-3.5 bg-cyber-yellow shadow-[0_0_10px_rgba(255,215,0,0.8)]`:`h-2.5 w-2.5 bg-emerald-400`}"
            ></span>`}
    </button>`}renderContinentLabel(e){let[t,n]=this.position(e);return t<0||t>100||n<0||n>100?l:u`<span
      class="pointer-events-none absolute -translate-x-1/2 whitespace-nowrap text-[11px] font-bold text-aquarius [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]"
      style="left: ${t}%; ${he.has(e)?`top: calc(${n}% + 10px)`:`bottom: calc(${100-n}% + 10px)`}"
    >
      ${i(e.map.translationKey)}
    </span>`}renderTooltip(){let e=this.hovered;if(e===null)return l;let[t,n]=this.position(e),r=Math.max(0,Math.min(100,t)),a=Math.max(0,Math.min(100,n));return u`<div
      class="pointer-events-none mt-2 @lg:absolute @lg:inset-y-1 @lg:z-30 @lg:mt-0 @lg:flex @lg:w-56 @lg:flex-col"
      style=${r<50?`left: calc(${r}% + 16px)`:`right: calc(${100-r}% + 16px)`}
    >
      <div style="flex-grow: ${a}"></div>
      <div
        role="tooltip"
        class="flex shrink-0 flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/95 p-2 text-xs text-white/90 shadow-xl"
      >
        <div class="flex items-center gap-2 @lg:flex-col @lg:items-stretch">
          <img
            src=${f.getMapData(e.map.type).webpPath}
            alt=""
            draggable="false"
            class="aspect-[2/1] w-24 shrink-0 rounded-md bg-black/30 object-contain @lg:mb-1 @lg:w-full"
          />
          <div class="text-sm font-bold uppercase tracking-wider text-white">
            ${i(e.map.translationKey)}
          </div>
        </div>
        ${oe(e.map,this.stats.get(e.map.type))}
      </div>
      <div style="flex-grow: ${100-a}"></div>
    </div>`}renderControls(){let e=`flex h-8 w-8 items-center justify-center text-lg font-bold text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent`;return u`<div
      class="absolute right-2 top-2 z-20 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm"
      @pointerdown=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        class=${e}
        aria-label=${i(`map_component.zoom_in`)}
        title=${i(`map_component.zoom_in`)}
        ?disabled=${this.view.width<=A}
        @click=${()=>this.zoomTo(this.view.width/j)}
      >
        +
      </button>
      <button
        type="button"
        class=${e}
        aria-label=${i(`map_component.zoom_out`)}
        title=${i(`map_component.zoom_out`)}
        ?disabled=${!this.zoomed}
        @click=${()=>this.zoomTo(this.view.width*j)}
      >
        −
      </button>
      ${this.zoomed?u`<button
              type="button"
              class=${e}
              aria-label=${i(`map_component.atlas_reset`)}
              title=${i(`map_component.atlas_reset`)}
              @click=${()=>this.setView(0,0,w)}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>`:l}
    </div>`}renderLegend(){return u`<div
      class="pointer-events-none absolute bottom-2 left-2 z-20 flex items-center gap-3 rounded-lg bg-black/50 px-2.5 py-1.5 text-[11px] text-white/70 backdrop-blur-sm"
    >
      <span class="flex items-center gap-1.5">
        <span
          class="h-3 w-3 rounded-full border-2 border-aquarius bg-black/40"
        ></span>
        ${i(`map_component.atlas_continental`)}
      </span>
      <span class="flex items-center gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        ${i(`map_component.atlas_regional`)}
      </span>
    </div>`}render(){let{x:e,y:t,width:n}=this.view;return u`<div class="@container relative">
      <div
        data-atlas-frame
        class="relative w-full select-none overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 ${this.zoomed?`cursor-grab active:cursor-grabbing`:``}"
        style="aspect-ratio: ${w} / ${E}; touch-action: ${this.zoomed?`none`:`pan-y`}"
        @wheel=${{handleEvent:e=>this.handleWheel(e),passive:!1}}
        @pointerdown=${this.handlePointerDown}
        @pointermove=${this.handlePointerMove}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
        @pointerleave=${this.handlePointerUp}
      >
        <svg
          class="absolute inset-0 h-full w-full ${this.paths.land?``:`animate-pulse`}"
          viewBox="${e} ${t} ${n} ${n*k}"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d=${this.paths.sphere}
            vector-effect="non-scaling-stroke"
            stroke-width="0.75"
            class="fill-slate-900/80 stroke-slate-500/30"
          ></path>
          <path
            d=${this.paths.land}
            fill-rule="evenodd"
            vector-effect="non-scaling-stroke"
            stroke-width="0.75"
            class="fill-slate-700/60 stroke-slate-400/30"
          ></path>
        </svg>
        ${O.map(e=>this.renderContinentLabel(e))}
        ${D.map(e=>this.renderPin(e))} ${this.renderControls()}
        ${this.renderLegend()}
      </div>
      ${this.renderTooltip()}
    </div>`}};a([s({type:String})],P.prototype,`selectedMap`,void 0),a([s({type:Boolean})],P.prototype,`useRandomMap`,void 0),a([s({attribute:!1})],P.prototype,`onSelectMap`,void 0),a([_()],P.prototype,`paths`,void 0),a([_()],P.prototype,`view`,void 0),a([_()],P.prototype,`hovered`,void 0),a([_()],P.prototype,`stats`,void 0),a([_()],P.prototype,`revealDetails`,void 0),a([g(`[data-atlas-frame]`)],P.prototype,`frame`,void 0),P=a([p(`atlas-map`)],P);var F=`map-favorites`,_e=new Set(Object.values(h));function I(){try{let e=localStorage.getItem(F);if(e===null)return[];let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>typeof e==`string`&&_e.has(e)):[]}catch(e){return console.warn(`Failed to read favorite maps from localStorage:`,e),[]}}function ve(e){let t=I(),n=t.indexOf(e);n>=0?t.splice(n,1):t.push(e);try{localStorage.setItem(F,JSON.stringify(t))}catch(e){console.warn(`Failed to save favorite maps to localStorage:`,e)}return t}function L(e,t=``){return u`<svg
    viewBox="0 0 24 24"
    class=${t}
    fill=${e?`currentColor`:`none`}
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>`}var R=`url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%0A%20%20%3Cpath%20d%3D%22m59.903346%2013.687732v6.602231h6.60223v19.806691h-6.60223v6.602231H40.096654v-6.602231h-6.60223V20.289963h6.60223v-6.602231z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M33.494424.48327138V7.0855019h-6.602231v6.6022301h-6.60223v33.011153h6.60223v6.60223h6.602231v6.602231h-6.602231v39.613383h6.602231v-6.602231h6.60223v-6.60223h4.951673v-6.602231h6.602231v6.602231h6.60223v6.60223h6.602231v6.602231h6.60223V59.903346h-4.951673v-6.602231h6.602231v-6.60223h6.60223V13.687732h-6.60223V7.0855019H66.505576V.48327138ZM58.252788%2086.312268v-6.602231h-6.60223v-6.60223h-6.602231v6.60223h-6.60223v6.602231H33.494424V59.903346H64.855019V86.312268ZM59.903346%207.0855019H40.096654v6.6022301h-6.60223v6.602231h-6.602231v19.806691h6.602231v6.602231h6.60223v6.60223h19.806692v-6.60223h6.60223v-6.602231h6.602231V20.289963h-6.602231v-6.602231h-6.60223z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A') no-repeat center / contain`,z=[t.Easy,t.Medium,t.Hard,t.Impossible],ye={[t.Easy]:`var(--medal-easy)`,[t.Medium]:`var(--medal-medium)`,[t.Hard]:`var(--medal-hard)`,[t.Impossible]:`var(--medal-impossible)`};function B(e,t=`w-5 h-5`,n=!0){return u`<div
    class="${t} ${n?`opacity-100`:`opacity-25`}"
    style="background-color:${ye[e]}; mask:${R}; -webkit-mask:${R};"
    title=${i(`difficulty.${e.toLowerCase()}`)}
  ></div>`}var V=class extends v{constructor(...e){super(...e),this.mapKey=``,this.selected=!1,this.translation=``,this.showMedals=!1,this.favorite=!1,this.wins=new Set,this.mapWebpPath=null,this.mapName=null,this.isLoading=!0,this.hasNations=!0,this.observer=null,this.dataLoaded=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.observer=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&!this.dataLoaded&&(this.dataLoaded=!0,this.loadMapData(),this.observer?.disconnect())},{rootMargin:`200px`}),this.observer.observe(this)}disconnectedCallback(){this.observer?.disconnect(),this.observer=null,super.disconnectedCallback()}updated(e){let t=e.get(`mapKey`);e.has(`mapKey`)&&t!==void 0&&t!==this.mapKey&&this.dataLoaded&&this.loadMapData()}async loadMapData(){if(this.mapKey)try{this.isLoading=!0,this.stats=void 0;let e=h[this.mapKey];this.mapWebpPath=f.getMapData(e).webpPath;let t=await ne(e);this.mapName=t.name,this.stats=b(t),this.hasNations=Array.isArray(t.nations)&&t.nations.length>0}catch(e){console.warn(`Failed to load map data:`,e)}finally{this.isLoading=!1}}handleKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.target.click())}preventImageDrag(e){e.preventDefault()}handleToggleFavorite(e){e.stopPropagation(),e.preventDefault(),this.onToggleFavorite?.()}renderFavoriteButton(){return this.onToggleFavorite?u`<button
      type="button"
      @click=${this.handleToggleFavorite}
      @keydown=${e=>e.stopPropagation()}
      aria-pressed=${this.favorite}
      aria-label=${i(this.favorite?`map_component.unfavorite`:`map_component.favorite`)}
      title=${i(this.favorite?`map_component.unfavorite`:`map_component.favorite`)}
      class="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all duration-200 active:scale-90 ${this.favorite?`opacity-100 text-cyber-yellow`:`opacity-0 group-hover:opacity-100 text-white hover:text-cyber-yellow`}"
    >
      ${L(this.favorite,`w-4 h-4`)}
    </button>`:null}render(){return u`
      <div
        role="button"
        tabindex="0"
        aria-selected="${this.selected}"
        aria-label="${this.translation??this.mapName??this.mapKey}"
        @keydown="${this.handleKeydown}"
        class="relative w-full h-full p-3 flex flex-col items-center justify-between rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 gap-3 group hover:z-10 focus-within:z-10 ${this.selected?`bg-malibu-blue/20 border-malibu-blue/50 shadow-[var(--shadow-malibu-blue-strong)]`:`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105`}"
      >
        ${this.isLoading?u`<div
                class="w-full aspect-[2/1] text-white/40 transition-transform duration-200 rounded-lg bg-black/20 text-xs font-bold uppercase tracking-wider flex items-center justify-center animate-pulse"
              >
                ${i(`common.loading`)}
              </div>`:this.mapWebpPath?u`<div
                  class="w-full aspect-[2/1] relative overflow-hidden rounded-lg bg-black/20"
                >
                  <img
                    src="${this.mapWebpPath}"
                    alt="${this.translation||this.mapName}"
                    draggable="false"
                    @dragstart=${this.preventImageDrag}
                    class="w-full h-full object-cover ${this.selected?`opacity-100`:`opacity-80`} group-hover:opacity-100 transition-opacity duration-200"
                  />
                  ${this.renderFavoriteButton()}
                </div>`:u`<div
                  class="w-full aspect-[2/1] text-red-400 transition-transform duration-200 rounded-lg bg-red-500/10 text-xs font-bold uppercase tracking-wider flex items-center justify-center"
                >
                  ${i(`map_component.error`)}
                </div>`}
        ${this.showMedals&&this.hasNations?u`<div class="flex gap-1 justify-center w-full">
                ${this.renderMedals()}
              </div>`:null}
        <div
          class="text-xs font-bold text-white uppercase tracking-wider text-center leading-tight break-words hyphens-auto"
        >
          ${this.translation||this.mapName}
        </div>
        <map-details
          class="contents"
          .map=${o.find(e=>e.id===this.mapKey)}
          .stats=${this.stats}
        ></map-details>
      </div>
    `}renderMedals(){let e=this.readWins();return z.map(t=>B(t,`w-5 h-5`,e.has(t)))}readWins(){return this.wins??new Set}};a([s({type:String})],V.prototype,`mapKey`,void 0),a([s({type:Boolean})],V.prototype,`selected`,void 0),a([s({type:String})],V.prototype,`translation`,void 0),a([s({type:Boolean})],V.prototype,`showMedals`,void 0),a([s({type:Boolean})],V.prototype,`favorite`,void 0),a([s({attribute:!1})],V.prototype,`wins`,void 0),a([s({attribute:!1})],V.prototype,`onToggleFavorite`,void 0),a([_()],V.prototype,`mapWebpPath`,void 0),a([_()],V.prototype,`mapName`,void 0),a([_()],V.prototype,`isLoading`,void 0),a([_()],V.prototype,`hasNations`,void 0),a([_()],V.prototype,`stats`,void 0),V=a([p(`map-display`)],V);var be=ee(`images/RandomMap.webp`),H=d.filter(e=>e.categories.includes(`featured`)).sort((e,t)=>(e.featuredRank??2**53-1)-(t.featuredRank??2**53-1));function xe(e){return d.filter(t=>t.categories.includes(e))}var U=class extends v{constructor(...e){super(...e),this.selectedMap=h.World,this.useRandomMap=!1,this.showMedals=!1,this.randomMapDivider=!1,this.searchQuery=``,this.mapWins=new Map,this.activeTab=`featured`,this.expandedCategories=new Set,this.favorites=I(),this.handleSelectRandomMap=()=>{this.onSelectRandom?.()}}createRenderRoot(){return this}handleToggleFavorite(e){this.favorites=ve(e)}handleMapSelection(e){this.onSelectMap?.(e)}toggleCategory(e){let t=new Set(this.expandedCategories);t.has(e)?t.delete(e):t.add(e),this.expandedCategories=t}get allCategories(){return ie.filter(e=>e!==`featured`)}toggleExpandAll(){this.expandedCategories=this.expandedCategories.size>0?new Set:new Set(this.allCategories)}preventImageDrag(e){e.preventDefault()}get filteredMaps(){if(!this.searchQuery.trim())return[];let e=this.searchQuery.trim().toLowerCase();return d.filter(t=>{let n=i(t.translationKey).toLowerCase(),r=t.id.toLowerCase();return n.includes(e)||r.includes(e)})}getWins(e){return this.mapWins?.get(e)??new Set}renderMapCard(e){return u`
      <div
        @click=${()=>this.handleMapSelection(e.type)}
        class="cursor-pointer"
      >
        <map-display
          .mapKey=${e.id}
          .selected=${!this.useRandomMap&&this.selectedMap===e.type}
          .showMedals=${this.showMedals}
          .wins=${this.getWins(e.type)}
          .favorite=${this.favorites.includes(e.type)}
          .onToggleFavorite=${()=>this.handleToggleFavorite(e.type)}
          .translation=${i(e.translationKey)}
        ></map-display>
      </div>
    `}renderMapGrid(e){return u`<div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      ${ae(e,e=>e.id,e=>this.renderMapCard(e))}
    </div>`}renderSectionHeading(e){return u`<h4
      class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 pl-2"
    >
      ${e}
    </h4>`}renderCategoryBar(e,t){let n=this.expandedCategories.has(e);return u`<div class="w-full">
      <button
        type="button"
        aria-expanded=${n}
        @click=${()=>this.toggleCategory(e)}
        class="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200 active:scale-[0.99] ${n?`bg-malibu-blue/20 border-malibu-blue/50`:`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`}"
      >
        <span
          class="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider"
        >
          <svg
            class="w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${n?`rotate-90`:``}"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 2l5 4-5 4z" />
          </svg>
          ${i(`map_categories.${e}`)}
        </span>
        <span class="text-xs font-bold text-white/40">${t.length}</span>
      </button>
      ${n?u`<div class="mt-4">${this.renderMapGrid(t)}</div>`:null}
    </div>`}renderFeaturedTab(){let e=H,t=o.find(e=>e.type===this.selectedMap);return!this.useRandomMap&&t!==void 0&&!H.includes(t)&&(e=[t,...H]),u`<div class="w-full">
      ${this.renderSectionHeading(i(`map_categories.featured`))}
      ${this.renderMapGrid(e)}
    </div>`}renderAllTab(){return u`<div class="space-y-3">
      ${this.allCategories.map(e=>this.renderCategoryBar(e,xe(e)))}
    </div>`}renderExpandToggle(){let e=this.expandedCategories.size>0;return u`<div
      class="shrink-0 rounded-xl border border-white/10 bg-black/20 p-1"
    >
      <button
        type="button"
        aria-expanded=${e}
        title=${i(e?`common.collapse_all`:`common.expand_all`)}
        @click=${()=>this.toggleExpandAll()}
        class="h-full flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition-all active:scale-95"
      >
        <svg
          class="w-3 h-3 shrink-0 transition-transform duration-200 ${e?`rotate-180`:``}"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 4l4 5 4-5z" />
        </svg>
        <span class="hidden sm:inline">
          ${i(e?`common.collapse_all`:`common.expand_all`)}
        </span>
      </button>
    </div>`}renderFavoritesTab(){if(this.favorites.length===0)return u`<div
        class="w-full flex flex-col items-center justify-center gap-3 py-12 px-4 text-center rounded-xl border border-dashed border-white/10 bg-black/20"
      >
        <div class="text-white/30">${L(!1,`w-8 h-8`)}</div>
        <p class="text-sm text-white/50 leading-relaxed max-w-xs">
          ${i(`map_component.favorites_empty`)}
        </p>
      </div>`;let e=this.favorites.map(e=>o.find(t=>t.type===e)).filter(e=>e!==void 0);return u`<div class="w-full">
      ${this.renderSectionHeading(i(`map_categories.favorites`))}
      ${this.renderMapGrid(e)}
    </div>`}renderAtlasTab(){return u`<atlas-map
      class="block"
      .selectedMap=${this.selectedMap}
      .useRandomMap=${this.useRandomMap}
      .onSelectMap=${e=>this.handleMapSelection(e)}
    ></atlas-map>`}renderActiveTab(){switch(this.activeTab){case`all`:return this.renderAllTab();case`atlas`:return this.renderAtlasTab();case`favorites`:return this.renderFavoritesTab();default:return this.renderFeaturedTab()}}renderSearchResults(){let e=this.filteredMaps;return e.length===0?u`<div
        class="w-full flex flex-col items-center justify-center gap-3 py-12 px-4 text-center rounded-xl border border-dashed border-white/10 bg-black/20"
      >
        <svg
          class="w-8 h-8 text-white/30"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-sm text-white/50 leading-relaxed max-w-xs">
          ${i(`map_component.no_results`)}
        </p>
      </div>`:u`<div class="w-full">
      ${this.renderSectionHeading(`${i(`map_component.search_results`)} (${e.length})`)}
      ${this.renderMapGrid(e)}
    </div>`}renderTabButton(e,t){let n=this.activeTab===e;return u`<button
      type="button"
      role="tab"
      aria-selected=${n}
      class="min-w-0 truncate px-1 sm:px-3 py-2 rounded-lg text-xs font-bold uppercase sm:tracking-wider transition-all active:scale-95 ${n?`bg-malibu-blue/20 text-white shadow-[var(--shadow-malibu-blue-soft)]`:`text-white/60 hover:text-white`}"
      @click=${()=>this.activeTab=e}
    >
      ${t}
    </button>`}render(){let e=this.searchQuery.trim().length>0;return u`
      <div class="space-y-8">
        <div class="w-full flex items-center gap-2">
          ${e?null:u`<div
                    role="tablist"
                    aria-label="${i(`map.map`)}"
                    class="flex-1 grid grid-cols-4 gap-1 sm:gap-2 rounded-xl border border-white/10 bg-black/20 p-1"
                  >
                    ${this.renderTabButton(`featured`,i(`map.featured`))}
                    ${this.renderTabButton(`all`,i(`map.all`))}
                    ${this.renderTabButton(`atlas`,i(`map.atlas`))}
                    ${this.renderTabButton(`favorites`,i(`map.favorites`))}
                  </div>
                  ${this.activeTab===`all`?this.renderExpandToggle():null}`}
        </div>
        ${e?this.renderSearchResults():this.renderActiveTab()}
        <div
          class="w-full ${this.randomMapDivider?`pt-4 border-t border-white/5`:``}"
        >
          ${this.renderSectionHeading(i(`map_categories.special`))}
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button
              type="button"
              class="w-full h-full p-3 flex flex-col items-center justify-between rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 gap-3 group ${this.useRandomMap?`bg-malibu-blue/20 border-malibu-blue/50 shadow-[var(--shadow-malibu-blue-strong)]`:`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1`}"
              @click=${this.handleSelectRandomMap}
            >
              <div
                class="w-full aspect-[2/1] relative overflow-hidden rounded-lg bg-black/20"
              >
                <img
                  src=${be}
                  alt=${i(`map.random`)}
                  draggable="false"
                  @dragstart=${this.preventImageDrag}
                  class="w-full h-full object-cover ${this.useRandomMap?`opacity-100`:`opacity-80`} group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <div
                class="text-xs font-bold text-white uppercase tracking-wider text-center leading-tight break-words hyphens-auto"
              >
                ${i(`map.random`)}
              </div>
            </button>
          </div>
        </div>
      </div>
    `}};a([s({type:String})],U.prototype,`selectedMap`,void 0),a([s({type:Boolean})],U.prototype,`useRandomMap`,void 0),a([s({type:Boolean})],U.prototype,`showMedals`,void 0),a([s({type:Boolean})],U.prototype,`randomMapDivider`,void 0),a([s({type:String})],U.prototype,`searchQuery`,void 0),a([s({attribute:!1})],U.prototype,`mapWins`,void 0),a([s({attribute:!1})],U.prototype,`onSelectMap`,void 0),a([s({attribute:!1})],U.prototype,`onSelectRandom`,void 0),a([_()],U.prototype,`activeTab`,void 0),a([_()],U.prototype,`expandedCategories`,void 0),a([_()],U.prototype,`favorites`,void 0),U=a([p(`map-picker`)],U);var W=`bg-malibu-blue/20 border-malibu-blue/50 shadow-[var(--shadow-malibu-blue)]`,G=`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`,Se=`w-full rounded-xl border transition-all duration-200 opacity-30 grayscale cursor-not-allowed bg-white/5 border-white/5`;function K(e,t=``){return`w-full rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 ${t} ${e?W:G}`}var q=`text-xs uppercase font-bold tracking-wider leading-tight break-words hyphens-auto`,Ce=Object.entries(t).filter(([e])=>isNaN(Number(e))),we=[2,3,4,5,6,7,re,e,n,r];function J(e){return e?`text-white`:`text-white/60`}function Te(e,t,n,r){return u`
    <button
      class="${K(t,r)} flex items-center justify-center"
      @click=${n}
    >
      <span class="${q} ${J(t)}">
        ${e}
      </span>
    </button>
  `}function Y(e,t,n,r,i,a=`space-y-6`,o){return u`
    <section class=${a}>
      ${Ne(e,t,n,r,o)}
      ${i}
    </section>
  `}var Ee=[{type:c.City,translationKey:`unit_type.city`},{type:c.DefensePost,translationKey:`unit_type.defense_post`},{type:c.Port,translationKey:`unit_type.port`},{type:c.Warship,translationKey:`unit_type.warship`},{type:c.TransportShip,translationKey:`unit_type.boat`},{type:c.MissileSilo,translationKey:`unit_type.missile_silo`},{type:c.SAMLauncher,translationKey:`unit_type.sam_launcher`},{type:c.AtomBomb,translationKey:`unit_type.atom_bomb`},{type:c.HydrogenBomb,translationKey:`unit_type.hydrogen_bomb`},{type:c.MIRV,translationKey:`unit_type.mirv`},{type:c.Factory,translationKey:`unit_type.factory`}],De=m`<path
  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
/>`,Oe=m`<path
  fill-rule="evenodd"
  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
  clip-rule="evenodd"
/>`,ke=m`<path
  d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
/>`,Ae=m`<path
  fill-rule="evenodd"
  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.922-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
  clip-rule="evenodd"
/>`,je=m`<path
  fill-rule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
  clip-rule="evenodd"
/>`,Me=m`<path
  fill-rule="evenodd"
  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
  clip-rule="evenodd"
/>`;function Ne(e,t,n,r,a){return u`
    <div class="flex items-center gap-4 pb-2 border-b border-white/10">
      <div
        class="w-8 h-8 rounded-lg flex items-center justify-center ${n} ${t}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          ${e}
        </svg>
      </div>
      <h3 class="text-lg font-bold text-white uppercase tracking-wider">
        ${i(r)}
      </h3>
      ${a?u`<div class="ml-auto">${a}</div>`:null}
    </div>
  `}var X=class extends v{constructor(...e){super(...e),this.sectionGapClass=`space-y-6`,this.mapSearchQuery=``,this.handleMapSearchInput=e=>{let t=e.target;this.mapSearchQuery=t.value},this.clearMapSearch=()=>{this.mapSearchQuery=``},this.handleSelectMap=e=>{this.emit(`map-selected`,{map:e})},this.handleSelectRandom=()=>{this.emit(`random-map-selected`,{})},this.handleDifficultySelect=e=>{this.emit(`difficulty-selected`,{difficulty:e})},this.handleDoomsdayClockSpeedChange=e=>{let t=e.target.value;this.emit(`doomsday-clock-speed-selected`,{speed:t})},this.handleGameModeSelect=e=>{this.emit(`game-mode-selected`,{mode:e})},this.handleTeamCountSelect=e=>{this.emit(`team-count-selected`,{count:e})},this.handleOptionToggle=e=>{this.emit(`option-toggle-changed`,{labelKey:e.labelKey,checked:!e.checked})},this.handleBotsChanged=e=>{let t=e;this.emit(`bots-changed`,t.detail)},this.handleNationsChanged=e=>{let t=e;this.emit(`nations-changed`,t.detail)},this.handleHostCheatToggle=e=>{this.emit(`host-cheat-toggle-changed`,{labelKey:e.labelKey,checked:!e.checked})},this.handleUnitToggle=(e,t)=>{this.emit(`unit-toggle-changed`,{unit:e,checked:t})}}createRenderRoot(){return this}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}renderOptionToggle(e){return e.hidden?u``:e.doomsdayClockSpeed===void 0?Te(i(e.labelKey),e.checked,()=>this.handleOptionToggle(e),`p-4 text-center`):this.renderDoomsdayClockToggle(e)}renderDoomsdayClockToggle(e){let t=e.doomsdayClockSpeed;return u`
      <div
        class="${K(e.checked,`p-4 flex flex-col items-center justify-center gap-2 text-center`)}"
        @click=${()=>this.handleOptionToggle(e)}
      >
        <span class="${q} ${J(e.checked)}">
          ${i(e.labelKey)}
        </span>
        ${e.checked?u`
                <select
                  class="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-white text-xs"
                  @click=${e=>e.stopPropagation()}
                  @change=${this.handleDoomsdayClockSpeedChange}
                >
                  ${te.map(e=>u`
                      <option value=${e} ?selected=${t===e}>
                        ${i(`doomsday_clock_speed.${e}`)}
                      </option>
                    `)}
                </select>
              `:l}
      </div>
    `}renderUnitTypeOptions(e){return Ee.map(({type:t,translationKey:n})=>{let r=!e.includes(t);return u`
        <button
          class="${K(r,`p-4 text-center`)}"
          aria-pressed=${r}
          @click=${()=>this.handleUnitToggle(t,r)}
        >
          <span class="${q} ${J(r)}">
            ${i(n)}
          </span>
        </button>
      `})}renderMapSearchInput(){return u`<div class="relative">
      <input
        type="text"
        placeholder="${i(`map_component.search_maps`)}"
        .value=${this.mapSearchQuery}
        @input=${this.handleMapSearchInput}
        class="w-48 px-3 py-1.5 pl-8 pr-7 rounded-lg text-sm bg-transparent border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-malibu-blue/50 transition-all"
      />
      <svg
        class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
      ${this.mapSearchQuery?u`<button
              type="button"
              @click=${this.clearMapSearch}
              class="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                />
              </svg>
            </button>`:null}
    </div>`}render(){if(!this.settings)return l;let e=this.settings;return u`
      <div class=${this.sectionGapClass}>
        ${Y(De,`text-aquarius`,`bg-malibu-blue/20`,`map.map`,u`<map-picker
            .selectedMap=${e.map.selected}
            .useRandomMap=${e.map.useRandom}
            .randomMapDivider=${e.map.randomMapDivider??!1}
            .showMedals=${e.map.showMedals??!1}
            .mapWins=${e.map.mapWins??new Map}
            .onSelectMap=${this.handleSelectMap}
            .onSelectRandom=${this.handleSelectRandom}
            .searchQuery=${this.mapSearchQuery}
          ></map-picker>`,void 0,this.renderMapSearchInput())}
        ${Y(Oe,`text-green-400`,`bg-green-500/20`,`difficulty.difficulty`,u`
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${Ce.map(([t,n])=>{let r=e.difficulty.selected===n,a=e.difficulty.disabled;return u`
                  <div class="group/difficulty-card relative">
                    <button
                      ?disabled=${a}
                      @click=${()=>!a&&this.handleDifficultySelect(n)}
                      class="${a?`${Se} flex flex-col items-center p-4 gap-3 h-full`:K(r,`flex flex-col items-center p-4 gap-3 h-full`)}"
                    >
                      <difficulty-display
                        .difficultyKey=${t}
                        class="transform scale-125 origin-center ${a?`pointer-events-none`:``}"
                      ></difficulty-display>
                      <span
                        class="${q} text-center mt-1 text-white"
                      >
                        ${i(`difficulty.${t.toLowerCase()}`)}
                      </span>
                    </button>
                    <difficulty-info
                      .difficultyKey=${t}
                      .disabled=${a}
                    ></difficulty-info>
                  </div>
                `})}
            </div>
          `)}
        ${Y(ke,`text-purple-400`,`bg-purple-500/20`,`host_modal.mode`,u`
            <div class="grid grid-cols-2 gap-4">
              ${[y.FFA,y.Team].map(t=>u`
                  <button
                    class="${K(e.gameMode.selected===t,`py-6 text-center`)}"
                    @click=${()=>this.handleGameModeSelect(t)}
                  >
                    <span
                      class="text-sm font-bold text-white uppercase tracking-widest"
                    >
                      ${t===y.FFA?i(`game_mode.ffa`):i(`game_mode.teams`)}
                    </span>
                  </button>
                `)}
            </div>
          `)}
        ${e.gameMode.selected===y.FFA?l:u`
                <section class="space-y-6">
                  <div
                    class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 pl-2"
                  >
                    ${i(`host_modal.team_count`)}
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                    ${we.map(t=>u`
                        <button
                          class="${K(e.teamCount.selected===t,`px-4 py-3 text-center`)}"
                          @click=${()=>this.handleTeamCountSelect(t)}
                        >
                          <span class="${q} text-white">
                            ${typeof t==`string`?i(t===`Humans Vs Nations`?`public_lobby.teams_hvn`:`host_modal.teams_${t}`):i(`public_lobby.teams`,{num:t})}
                          </span>
                        </button>
                      `)}
                  </div>
                </section>
              `}
        ${Y(Ae,`text-orange-400`,`bg-orange-500/20`,e.options.titleKey,u`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                class="col-span-2 rounded-xl p-4 flex flex-col justify-center border transition-all duration-200 ${e.options.bots.value>0?W:G}"
              >
                <fluent-slider
                  min="0"
                  max="400"
                  step="1"
                  .value=${e.options.bots.value}
                  labelKey=${e.options.bots.labelKey}
                  disabledKey=${e.options.bots.disabledKey}
                  @value-changed=${this.handleBotsChanged}
                ></fluent-slider>
              </div>

              ${e.options.nations&&!e.options.nations.hidden?u`<div
                      class="col-span-2 rounded-xl p-4 flex flex-col justify-center border transition-all duration-200 ${e.options.nations.value>0?W:G}"
                    >
                      <fluent-slider
                        min="0"
                        max="400"
                        step="1"
                        .value=${e.options.nations.value}
                        .defaultValue=${e.options.nations.defaultValue}
                        defaultLabelKey="common.map_default"
                        labelKey=${e.options.nations.labelKey}
                        disabledKey=${e.options.nations.disabledKey}
                        @value-changed=${this.handleNationsChanged}
                      ></fluent-slider>
                    </div>`:l}
              ${e.options.toggles.map(e=>this.renderOptionToggle(e))}
              ${e.options.inputCards}
            </div>
          `)}
        ${e.hostCheats?.visible?Y(je,`text-yellow-400`,`bg-yellow-500/20`,e.hostCheats.titleKey,u`
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    ${e.hostCheats.toggles.map(e=>Te(i(e.labelKey),e.checked,()=>this.handleHostCheatToggle(e),`p-4 text-center`))}
                    ${e.hostCheats.inputCards}
                  </div>
                `):l}
        ${Y(Me,`text-teal-400`,`bg-teal-500/20`,e.unitTypes.titleKey,u`
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              ${this.renderUnitTypeOptions(e.unitTypes.disabledUnits)}
            </div>
          `,`space-y-6 pb-6`)}
      </div>
    `}};a([s({attribute:!1})],X.prototype,`settings`,void 0),a([s({attribute:!1})],X.prototype,`sectionGapClass`,void 0),a([_()],X.prototype,`mapSearchQuery`,void 0),X=a([p(`game-config-settings`)],X);var Pe=`bg-malibu-blue/20 border-malibu-blue/50 shadow-[var(--shadow-malibu-blue)]`,Fe=`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`,Ie=`w-full text-center rounded bg-black/60 text-white text-sm font-bold border border-white/20 focus:outline-none focus:border-malibu-blue p-1 my-1`,Le=`text-xs uppercase font-bold tracking-wider leading-tight break-words hyphens-auto`;function Re(e,t=``){return`w-full h-full rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 relative overflow-hidden ${t} ${e?Pe:Fe}`}var ze=384,Z=16,Q=class extends v{constructor(...e){super(...e),this.presets=[],this.selectedName=``,this.disabled=!1,this.nameInput=``,this.open=!1,this.popoverLeft=0,this.popoverWidth=ze,this.onResize=()=>{this.open&&this.place()},this.onOutside=e=>{this.contains(e.target)||this.setOpen(!1)},this.onKeyDown=e=>{if(e.key!==`Escape`||!this.open)return;e.preventDefault(),e.stopPropagation();let t=this.contains(document.activeElement);this.setOpen(!1),t&&this.updateComplete.then(()=>this.querySelector(`[data-test-preset-toggle]`)?.focus())}}createRenderRoot(){return this}disconnectedCallback(){this.setOpen(!1),super.disconnectedCallback()}setOpen(e){e&&this.place(),this.open=e,e?(window.addEventListener(`resize`,this.onResize),document.addEventListener(`pointerdown`,this.onOutside,!0),window.addEventListener(`keydown`,this.onKeyDown,!0)):(window.removeEventListener(`resize`,this.onResize),document.removeEventListener(`pointerdown`,this.onOutside,!0),window.removeEventListener(`keydown`,this.onKeyDown,!0))}place(){let e=this.closest(`[slot="header"]`)?.getBoundingClientRect(),t=e?.left??0,n=e?.right??window.innerWidth,r=this.getBoundingClientRect(),i=Math.max(0,Math.min(ze,n-t-2*Z)),a=Math.max(t+Z,Math.min(r.right-i,n-Z-i));this.popoverLeft=a-r.left,this.popoverWidth=i}willUpdate(e){e.has(`selectedName`)&&!this.selectedName&&(this.nameInput=``)}handleSelectChange(e){let t=e.target.value;this.selectedName=t,t&&(this.nameInput=t),this.dispatchEvent(new CustomEvent(`preset-select`,{detail:t,bubbles:!0,composed:!0}))}handleLoad(){let e=this.selectedName.trim();!e||this.disabled||(this.setOpen(!1),this.dispatchEvent(new CustomEvent(`preset-load`,{detail:e,bubbles:!0,composed:!0})))}handleDelete(){let e=this.selectedName.trim();!e||this.disabled||this.dispatchEvent(new CustomEvent(`preset-delete`,{detail:e,bubbles:!0,composed:!0}))}handleNameInput(e){let t=e.target;this.nameInput=t.value}handleKeyDown(e){e.key===`Enter`&&(e.preventDefault(),this.handleSave())}handleSave(){let e=this.nameInput.trim().slice(0,50);!e||this.disabled||this.dispatchEvent(new CustomEvent(`preset-save`,{detail:e,bubbles:!0,composed:!0}))}render(){let e=this.open;return u`
      <div class="relative shrink-0">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded=${e}
          data-test-preset-toggle
          @click=${()=>this.setOpen(!this.open)}
          class="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${e?`bg-malibu-blue/20 border-malibu-blue/50 text-white`:`border-white/10 bg-white/5 hover:bg-white/10 text-white/60`}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"
            />
            <path
              d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
            />
          </svg>
          <span
            class="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
            >${i(`lobby_config.preset.title`)}</span
          >
        </button>

        ${e?u`<div
                role="dialog"
                aria-label=${i(`lobby_config.preset.title`)}
                style="left: ${this.popoverLeft}px; width: ${this.popoverWidth}px"
                class="absolute top-[calc(100%+8px)] z-50 rounded-xl border border-white/15 bg-zinc-900 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.55)] ${this.disabled?`opacity-60`:``}"
              >
                ${this.renderControls()}
              </div>`:null}
      </div>
    `}renderControls(){let e=this.presets.length>0,t=!this.disabled&&!!this.selectedName,n=!this.disabled&&!!this.nameInput.trim();return u`
      <div class="flex flex-col gap-4">
        <!-- Load / Delete Existing Preset -->
        <div class="flex flex-col gap-2">
          <label
            class="text-xs uppercase font-bold tracking-wider text-white/60"
          >
            ${i(`lobby_config.preset.select_label`)}
          </label>
          <div class="flex gap-2 items-center">
            <select
              data-test-preset-select
              class="flex-1 min-w-0 bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-white text-sm font-semibold focus:outline-none focus:border-malibu-blue disabled:opacity-50 transition-colors"
              .value=${this.selectedName}
              @change=${this.handleSelectChange}
              ?disabled=${this.disabled||!e}
            >
              <option value="">
                ${i(e?`lobby_config.preset.select`:`lobby_config.preset.no_presets`)}
              </option>
              ${this.presets.map(e=>u`
                  <option
                    value=${e.name}
                    ?selected=${e.name===this.selectedName}
                  >
                    ${e.name}
                  </option>
                `)}
            </select>
            <o-button
              data-test-preset-load-btn
              title=${i(`lobby_config.preset.load`)}
              variant="primary"
              size="sm"
              ?disable=${!t}
              @click=${this.handleLoad}
            ></o-button>
            <o-button
              data-test-preset-delete-btn
              title=${i(`lobby_config.preset.delete`)}
              variant="danger"
              size="sm"
              ?disable=${!t}
              @click=${this.handleDelete}
            ></o-button>
          </div>
        </div>

        <!-- Save Current Configuration -->
        <div class="flex flex-col gap-2">
          <label
            class="text-xs uppercase font-bold tracking-wider text-white/60"
          >
            ${i(`lobby_config.preset.save_label`)}
          </label>
          <div class="flex gap-2 items-center">
            <input
              data-test-preset-name-input
              type="text"
              maxlength=${50}
              placeholder=${i(`lobby_config.preset.placeholder`)}
              .value=${this.nameInput}
              @input=${this.handleNameInput}
              @keydown=${this.handleKeyDown}
              class="flex-1 min-w-0 bg-black/60 border border-white/20 rounded-xl px-3 py-2 text-white text-sm font-semibold placeholder:text-white/40 focus:outline-none focus:border-malibu-blue disabled:opacity-50 transition-colors"
              ?disabled=${this.disabled}
            />
            <o-button
              data-test-preset-save-btn
              title=${i(`lobby_config.preset.save`)}
              variant="secondary"
              size="sm"
              ?disable=${!n}
              @click=${this.handleSave}
            ></o-button>
          </div>
        </div>
      </div>
    `}};a([s({type:Array})],Q.prototype,`presets`,void 0),a([s({type:String})],Q.prototype,`selectedName`,void 0),a([s({type:Boolean})],Q.prototype,`disabled`,void 0),a([_()],Q.prototype,`nameInput`,void 0),a([_()],Q.prototype,`open`,void 0),a([_()],Q.prototype,`popoverLeft`,void 0),a([_()],Q.prototype,`popoverWidth`,void 0),Q=a([p(`lobby-preset-controls`)],Q);var $=class extends v{constructor(...e){super(...e),this.labelKey=``,this.checked=!1,this.inputType=`number`,this.handleCardClick=()=>{this.emitToggle()}}createRenderRoot(){return this}updated(e){if(e.has(`checked`)&&e.get(`checked`)===!1&&this.checked){let e=this.querySelector(`input`);e?.focus(),e?.select()}}toOptionalNumber(e){if(typeof e==`number`)return Number.isFinite(e)?e:void 0;if(typeof e==`string`){let t=e.trim();if(!t)return;let n=Number(t);return Number.isFinite(n)?n:void 0}}resolveValueOnEnable(){let e=this.inputValue;if(e==null||e===``)return this.defaultInputValue;if(this.minValidOnEnable===void 0)return e;let t=this.toOptionalNumber(e);return t===void 0||t<this.minValidOnEnable?this.defaultInputValue:t}emitToggle(){let e=!this.checked,t=e?this.resolveValueOnEnable():void 0;this.onToggle?.(e,t)}render(){return u`
      <div class="${Re(this.checked)}">
        <button
          type="button"
          aria-pressed=${this.checked}
          @click=${this.handleCardClick}
          class="w-full h-full p-3 flex flex-col items-center justify-between gap-2 focus:outline-none"
        >
          <div
            class="w-5 h-5 rounded border flex items-center justify-center transition-colors mt-1 ${this.checked?`bg-blue-500 border-blue-500`:`border-white/20 bg-white/5`}"
          >
            ${this.checked?u`<svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>`:``}
          </div>

          ${this.checked?u`<div class="h-[30px] my-1"></div>`:u`<div class="h-[2px] w-4 rounded my-3 bg-white/10"></div>`}

          <span
            class="${Le} text-center ${this.checked?`text-white`:`text-white/60`}"
          >
            ${i(this.labelKey)}
          </span>
        </button>

        <!-- Keep the input permanently mounted and just hide it when unchecked.
             Rendering it conditionally (\${checked ? input : nothing}) inserts a
             fresh input on enable, and focusing a just-inserted input forces
             several ms of layout/paint per frame. CSS-hiding an always-present
             input avoids that. -->
        <div
          class="absolute left-3 right-3 top-1/2 -translate-y-1/2 z-10 ${this.checked?``:`hidden`}"
        >
          <input
            type=${this.inputType}
            id=${this.inputId??l}
            min=${this.inputMin??l}
            max=${this.inputMax??l}
            step=${this.inputStep??l}
            .value=${String(this.inputValue??``)}
            class=${Ie}
            aria-label=${this.inputAriaLabel??l}
            placeholder=${this.inputPlaceholder??l}
            @input=${this.onInput}
            @change=${this.onChange}
            @keydown=${this.onKeyDown}
          />
          ${this.checked&&this.zeroLabel!==void 0&&this.toOptionalNumber(this.inputValue)===0?u`<div
                  class="pointer-events-none absolute left-0 right-0 top-full mt-0.5 text-center text-[10px] leading-none text-white/70"
                >
                  ${this.zeroLabel}
                </div>`:l}
        </div>
      </div>
    `}};a([s({attribute:!1})],$.prototype,`labelKey`,void 0),a([s({type:Boolean,attribute:!1})],$.prototype,`checked`,void 0),a([s({attribute:!1})],$.prototype,`inputId`,void 0),a([s({attribute:!1})],$.prototype,`inputType`,void 0),a([s({attribute:!1})],$.prototype,`inputMin`,void 0),a([s({attribute:!1})],$.prototype,`inputMax`,void 0),a([s({attribute:!1})],$.prototype,`inputStep`,void 0),a([s({attribute:!1})],$.prototype,`inputValue`,void 0),a([s({attribute:!1})],$.prototype,`inputAriaLabel`,void 0),a([s({attribute:!1})],$.prototype,`inputPlaceholder`,void 0),a([s({attribute:!1})],$.prototype,`zeroLabel`,void 0),a([s({attribute:!1})],$.prototype,`defaultInputValue`,void 0),a([s({attribute:!1})],$.prototype,`minValidOnEnable`,void 0),a([s({attribute:!1})],$.prototype,`onToggle`,void 0),a([s({attribute:!1})],$.prototype,`onInput`,void 0),a([s({attribute:!1})],$.prototype,`onChange`,void 0),a([s({attribute:!1})],$.prototype,`onKeyDown`,void 0),$=a([p(`toggle-input-card`)],$);export{B as a,z as i,Ie as n,Re as r,Le as t};