const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CosmeticRenderCanvas-D0iXE8Jv.js","./index-BHQpe8wU.js","./vendor-CreOc2dO.js","./rolldown-runtime-BpQH8Ho1.js","./index-C4jrL9Nv.css","./PlayerPalette-CEMmRTIP.js","./RenderSettings-BqbhQCKL.js","./render-settings-CPXrWPgl.js","./WebGLFrameBuilder-DUxVMtpO.js"])))=>i.map(i=>d[i]);
import{$i as e,Fo as t,Io as n,Ka as r,Nr as i,Wo as a,_i as o,di as s,eo as c,fi as l,i as u,kr as d,li as f,mi as p,si as m,to as h,ui as g,ur as _,yr as v}from"./index-BHQpe8wU.js";import{c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./CosmeticPreview-DtAVOsm6.js";import"./CosmeticCard-VokGUh_K.js";var E=[{name:`Red`,hex:`#eb3333`},{name:`Blue`,hex:`#2962ff`},{name:`Teal`,hex:`#06b6d4`},{name:`Purple`,hex:`#9234ea`},{name:`Yellow`,hex:`#e7b008`},{name:`Orange`,hex:`#ff7f0e`},{name:`Green`,hex:`#41be52`}],D=`default`,O=class extends l{constructor(...e){super(...e),this.resolved=null,this.selectedPrimary=D,this.selectedSecondary=D,this.paletteSecondary=null,this.onKeyDown=e=>{e.key===`Escape`&&this.resolved&&(e.stopImmediatePropagation(),e.preventDefault(),this.close())}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),_(()=>import(`./CosmeticRenderCanvas-D0iXE8Jv.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).catch(e=>console.warn(`Failed to load the cosmetic preview:`,e)),window.addEventListener(`keydown`,this.onKeyDown,{capture:!0})}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown,{capture:!0}),super.disconnectedCallback()}skinPalettes(){if(!this.resolved)return[];if(this.resolved.type===`skin`)return[{name:D,label:e(`territory_patterns.pattern.default`),primaryColor:D,secondaryColor:D}];if(this.resolved.type!==`pattern`)return[];let t=this.resolved.cosmetic,n=v(),r=[],a=new Set;if(this.resolved.colorPalette&&(r.push(this.resolved.colorPalette),a.add(this.resolved.colorPalette.name)),t?.colorPalettes&&n?.colorPalettes)for(let e of t.colorPalettes){if(e.isArchived||a.has(e.name))continue;let t=n.colorPalettes[e.name];t&&(r.push(t),a.add(e.name))}return r.map(e=>({name:e.name,label:i(`territory_patterns.color_palette`,e.name),primaryColor:e.primaryColor,secondaryColor:e.secondaryColor}))}teamPalettes(){if(!this.resolved)return[];let t=this.resolved.type===`pattern`;return!t&&this.resolved.type!==`skin`?[]:E.map(n=>({name:n.name,label:e(`team_colors.${n.name.toLowerCase()}`),primaryColor:n.hex,secondaryColor:t?this.paletteSecondary??u(n.hex).darken(.125).toHex():n.hex}))}updated(e){if(super.updated(e),e.has(`resolved`)&&this.resolved){let e=this.skinPalettes()[0];this.selectedPrimary=e?.primaryColor??D,this.selectedSecondary=e?.secondaryColor??D,this.paletteSecondary=this.resolved.type===`pattern`?e?.secondaryColor??null:null}}selectPalette(e,t){this.selectedPrimary=e.primaryColor,this.selectedSecondary=e.secondaryColor,t&&this.resolved?.type===`pattern`&&(this.paletteSecondary=e.secondaryColor)}get canvasEl(){return this.querySelector(`cosmetic-render-canvas`)}close(){this.resolved=null,this.dispatchEvent(new CustomEvent(`close-preview`,{bubbles:!0}))}customColors(){return this.resolved?this.resolved.type===`skin`?this.selectedPrimary===D?null:[this.selectedPrimary]:this.resolved.type===`pattern`?this.selectedPrimary===D||this.selectedSecondary===D?null:[this.selectedPrimary,this.selectedSecondary]:null:null}renderSwatch(e,t){let n=this.selectedPrimary===e.primaryColor&&this.selectedSecondary===e.secondaryColor,r=n?`ring-2 ring-cyan-400 ring-offset-2 ring-offset-zinc-900 border-white`:``;if(e.primaryColor===D)return o`<button
        type="button"
        title=${e.label}
        aria-label=${e.label}
        aria-pressed=${n?`true`:`false`}
        class="group relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer ${n?`${r} bg-white/25 text-white shadow-sm`:`border-white/30 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white`}"
        @click=${()=>this.selectPalette(e,t)}
      >
        <svg
          class="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      </button>`;let i=e.primaryColor!==e.secondaryColor;return o`<button
      type="button"
      title=${e.label}
      aria-label=${e.label}
      aria-pressed=${n?`true`:`false`}
      class="group relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/40 overflow-hidden transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer ${r}"
      @click=${()=>this.selectPalette(e,t)}
    >
      <div
        class="w-full h-full"
        style=${i?`background-image: linear-gradient(135deg, ${e.primaryColor} 0 calc(50% - 0.5px), rgba(255,255,255,0.55) calc(50% - 0.5px) calc(50% + 0.5px), ${e.secondaryColor} calc(50% + 0.5px) 100%);`:`background-color: ${e.primaryColor};`}
      ></div>
    </button>`}renderPaletteGroup(t,n,r){return n.length===0?p:o`<div class="flex items-center gap-2.5">
      <span class="font-bold text-white/70 whitespace-nowrap"
        >${e(t)}</span
      >
      <div class="flex items-center gap-2.5 p-1.5">
        ${n.map(e=>this.renderSwatch(e,r))}
      </div>
    </div>`}render(){if(!this.resolved)return p;let t=b(this.resolved),n=w(this.resolved),r=this.skinPalettes(),i=this.teamPalettes(),a=this.resolved.cosmetic,s=a?.artist,c=C(a?.aiDisclosed,s);return o`<div
      data-cosmetic-preview-modal
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      @click=${e=>{e.target===e.currentTarget&&this.close()}}
    >
      <div
        class="relative flex flex-col w-full max-w-3xl h-[600px] max-h-[85vh] rounded-2xl bg-zinc-900 border border-white/15 shadow-2xl overflow-hidden"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between gap-4 px-6 py-3 border-b border-white/10 bg-zinc-900/90"
        >
          <div class="flex items-center gap-3 min-w-0">
            <h2 class="text-lg font-bold text-white tracking-wide truncate">
              ${t}
            </h2>
            <span
              class="rounded-full px-2.5 py-0.5 text-xs font-black uppercase tracking-wider border ${S(this.resolved)}"
            >
              ${n}
            </span>
            ${s||c?o`<div class="flex min-w-0 flex-col items-start gap-y-0.5">
                    ${s?o`<span
                            class="truncate text-xs text-white/60 max-w-full"
                          >
                            ${e(`cosmetics.artist_label`)}
                            <span class="text-white/90 font-medium"
                              >${s}</span
                            >
                          </span>`:p}
                    ${c?o`<span
                            class="truncate text-xs text-white/60 max-w-full"
                          >
                            ${e(c)}
                          </span>`:p}
                  </div>`:p}
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <div
              class="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10"
            >
              <button
                type="button"
                aria-label=${e(`user_setting.zoom_out`)}
                title=${e(`user_setting.zoom_out`)}
                class="flex h-7 w-7 items-center justify-center rounded-md text-white/80 hover:bg-white/15 hover:text-white transition active:scale-90 cursor-pointer text-sm font-bold"
                @click=${()=>this.canvasEl?.zoomOut()}
              >
                −
              </button>
              <button
                type="button"
                aria-label=${e(`user_setting.zoom_in`)}
                title=${e(`user_setting.zoom_in`)}
                class="flex h-7 w-7 items-center justify-center rounded-md text-white/80 hover:bg-white/15 hover:text-white transition active:scale-90 cursor-pointer text-sm font-bold"
                @click=${()=>this.canvasEl?.zoomIn()}
              >
                +
              </button>
            </div>
            <button
              type="button"
              aria-label=${e(`common.close`)}
              title=${e(`common.close`)}
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-colors"
              @click=${()=>this.close()}
            >
              ✕
            </button>
          </div>
        </div>

        <!-- WebGL Canvas Viewport -->
        <div class="flex-1 p-3 bg-zinc-950/60 min-h-0">
          <cosmetic-render-canvas
            .resolved=${this.resolved}
            .customColors=${this.customColors()}
            class="block h-full w-full"
          ></cosmetic-render-canvas>
        </div>

        <!-- Skin colors (catalog palettes) and team colors (team-game look) -->
        ${r.length+i.length>1?o`
                <div
                  class="flex flex-wrap items-center gap-x-6 gap-y-1 px-6 py-2 border-t border-white/10 bg-zinc-900/80 text-xs text-white/80 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  ${this.renderPaletteGroup(`store.preview_skin_colors`,r,!0)}
                  ${this.renderPaletteGroup(`store.preview_team_colors`,i,!1)}
                </div>
              `:p}
      </div>
    </div>`}};m([g({attribute:!1})],O.prototype,`resolved`,void 0),m([f()],O.prototype,`selectedPrimary`,void 0),m([f()],O.prototype,`selectedSecondary`,void 0),m([f()],O.prototype,`paletteSecondary`,void 0),O=m([s(`cosmetic-preview-modal`)],O);var k=24,A=class{constructor(e,t=k){this.host=e,this.pageSize=t,this.lists=new Map,this.watched=new Map,e.addController(this)}page(e,t,n){if(!T())return{items:n,more:p};let r=this.lists.get(e);return(r===void 0||r.key!==t)&&(r={key:t,limit:this.pageSize},this.lists.set(e,r)),n.length<=r.limit?{items:n,more:p}:{items:n.slice(0,r.limit),more:o`<div
        aria-hidden="true"
        data-progressive-sentinel=${e}
        class="col-span-full h-px"
      ></div>`}}hostUpdated(){for(let e of this.lists.keys()){let t=this.host.renderRoot.querySelector(`[data-progressive-sentinel="${e}"]`),n=this.lists.get(e),r=this.watched.get(e);if(r?.element===t&&r.state===n&&r.limit===n.limit||(r?.stop(),this.watched.delete(e),t===null))continue;let i=n.limit;this.watched.set(e,{element:t,state:n,limit:i,stop:x(t,t=>{!t||n!==this.lists.get(e)||n.limit!==i||(n.limit+=this.pageSize,this.host.requestUpdate())})})}}reset(){this.lists.clear(),this.stopWatching()}hostDisconnected(){this.stopWatching()}stopWatching(){for(let e of this.watched.values())e.stop();this.watched.clear()}},j=class extends l{constructor(...e){super(...e),this.cosmetics=null,this.userMeResponse=!1,this.mode=`select`,this.affiliateCode=null,this.search=``,this.effectType=null,this.tabbed=!1,this.focusedKey=null,this.activeType=t[0],this.activeNukeType=n[0],this.userSettings=new h,this.renderedItems=[],this.pages=new A(this),this._onChange=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(`${c}:${r}`,this._onChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`${c}:${r}`,this._onChange)}createRenderRoot(){return this}select(t,n,r){this.userSettings.setSelectedEffectName(t,n??void 0),r!==void 0&&window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e(`inventory.selected_cosmetic`,{name:y(r)}),duration:2e3}})),this.requestUpdate()}effectiveEffectType(){return this.tabbed?this.activeType:this.effectType??this.activeType}activeSlot(){let e=this.effectiveEffectType();return e===`nukeExplosion`?this.activeNukeType:e}resolvedItems(){let e=this.resolvedCache;if(e?.cosmetics===this.cosmetics&&e.userMeResponse===this.userMeResponse&&e.affiliateCode===this.affiliateCode)return e.items;let t=d(this.cosmetics,this.userMeResponse,this.affiliateCode);return this.resolvedCache={cosmetics:this.cosmetics,userMeResponse:this.userMeResponse,affiliateCode:this.affiliateCode,items:t},t}emitActiveSlot(e=this.resolvedItems()){let t=this.effectiveEffectType(),n=this.activeSlot(),r=this.userSettings.getSelectedEffectName(n),i=r?e.find(e=>e.type===`effect`&&e.effectType===t&&e.cosmetic?.name===r&&this.slotForTile(t,e)===n)??null:null;this.onActiveSlotChange?.({effectType:t,slot:n,resolved:i})}selectEffectType(e){this.activeType=e;let t=this.resolvedItems();this.emitActiveSlot(t),this.emitVisiblePurchaseItems(t)}selectNukeType(e){this.activeNukeType=e;let t=this.resolvedItems();this.emitActiveSlot(t),this.emitVisiblePurchaseItems(t)}slotForTile(e,t){return e===`nukeExplosion`?this.nukeTypeOf(t)??this.activeNukeType:e}matchesSearch(e){let t=this.search.trim().toLowerCase();if(!t)return!0;let n=e.cosmetic?.name;return n?n.toLowerCase().includes(t)||i(`effects`,n).toLowerCase().includes(t):!1}itemsForType(e,t){let n=e.filter(e=>e.type===`effect`&&e.cosmetic!==null&&e.effectType===t&&this.matchesSearch(e));return this.mode===`purchase`?n.filter(e=>e.relationship===`purchasable`):n.filter(e=>e.relationship===`owned`)}visiblePurchaseItems(e){let n=this.tabbed?this.activeType:this.effectType;return(n?[n]:t).flatMap(t=>{let n=this.itemsForType(e,t);return t===`nukeExplosion`?n.filter(e=>this.nukeTypeOf(e)===this.activeNukeType):n})}emitVisiblePurchaseItems(e){this.mode===`purchase`&&this.onVisiblePurchaseItemsChange?.(this.visiblePurchaseItems(e??this.resolvedItems()))}updated(e){(e.has(`cosmetics`)||e.has(`userMeResponse`)||e.has(`affiliateCode`)||e.has(`mode`)||e.has(`search`)||e.has(`effectType`)||e.has(`tabbed`))&&this.emitVisiblePurchaseItems(this.renderedItems)}renderTile(e,t){if(this.mode===`purchase`)return o`<cosmetic-card
        data-store-product
        data-cosmetic-key=${t.key}
        class="block h-full min-w-0"
        showNewBadge
        .resolved=${t}
        state=${t.key===this.focusedKey?`focused`:`idle`}
        .onActivate=${()=>this.onPurchaseFocus?.(t)}
        .actionContent=${this.renderPurchaseAction?.(t)??p}
      ></cosmetic-card>`;let n=t.cosmetic?.name??null,r=this.userSettings.getSelectedEffectName(e);return o`<cosmetic-card
      .resolved=${t}
      state=${n===null&&r===null||n!==null&&r===n?`equipped`:`idle`}
      .onActivate=${()=>this.select(e,n,t)}
    ></cosmetic-card>`}nukeTypeOf(e){let t=e.cosmetic;return t&&a(t)?t.attributes.nukeType:null}renderNukeTypeTabBar(){return o`
      <div class="flex items-center justify-center gap-2 px-4 pt-3">
        ${n.map(t=>o`<button
            class="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-colors ${this.activeNukeType===t?`bg-blue-600 text-white`:`bg-white/5 text-white/50 hover:text-white/80 hover:bg-white/10`}"
            @click=${()=>this.selectNukeType(t)}
          >
            ${e(`effects.nukeType.${t}`)}
          </button>`)}
      </div>
    `}renderTabBar(){return o`
      <div
        class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-white/10 px-4"
      >
        ${t.map(t=>o`<button
            class="-mb-px max-w-full shrink-0 whitespace-normal border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.activeType===t?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.selectEffectType(t)}
          >
            ${e(`effects.type.${t}`)}
          </button>`)}
      </div>
    `}renderUnequip(){if(this.mode!==`select`||!this.tabbed&&this.effectType===null)return p;let t=this.activeSlot();return o`<div class="flex justify-end px-4 pt-3">
      <button
        type="button"
        data-effects-unequip
        ?disabled=${this.userSettings.getSelectedEffectName(t)===null}
        class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.select(t,null)}
      >
        ${e(`inventory.unequip`)}
      </button>
    </div>`}render(){let n=this.resolvedItems();this.renderedItems=n;let r=this.tabbed?this.activeType:this.effectType,i=r?[r]:t,a=r===`nukeExplosion`,s=i.map(e=>{let t=this.itemsForType(n,e);return e===`nukeExplosion`&&(t=t.filter(e=>this.nukeTypeOf(e)===this.activeNukeType)),{type:e,items:t}}).filter(e=>e.items.length>0),c;c=s.length===0?r&&this.mode===`select`?o`<p
              data-effects-empty=${r}
              class="px-4 pt-4 pb-8 text-center text-sm font-medium text-white/60"
            >
              ${e(`inventory.no_owned_effects_of_type`,{type:e(`effects.type.${r}`)})}
            </p>`:r?o`<div class="p-4"></div>`:o`<div
                class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
              >
                ${e(`store.no_effects`)}
              </div>`:o`
        <div class="flex flex-col gap-4 p-4">
          ${s.map(t=>{let n=this.pages.page(`effects-${t.type}`,`${this.mode}:${this.activeNukeType}:${this.search}`,t.items);return o`
              <div class="flex flex-col">
                ${r?p:o`<h3
                        class="text-white/70 text-sm font-black uppercase tracking-wider px-2 pb-2 mb-2 border-b border-white/10"
                      >
                        ${e(`effects.type.${t.type}`)}
                      </h3>`}
                ${!r&&t.type===`nukeExplosion`?this.renderNukeTypeTabBar():p}
                <div
                  data-effects-items
                  class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                >
                  ${n.items.map(e=>this.renderTile(this.slotForTile(t.type,e),e))}
                  ${n.more}
                </div>
              </div>
            `})}
        </div>
      `;let l=a?this.renderNukeTypeTabBar():p,u=this.renderUnequip();return this.tabbed?o`${this.renderTabBar()}${l}${u}${c}`:o`${l}${u}${c}`}};m([g({attribute:!1})],j.prototype,`cosmetics`,void 0),m([g({attribute:!1})],j.prototype,`userMeResponse`,void 0),m([g({type:String})],j.prototype,`mode`,void 0),m([g({attribute:!1})],j.prototype,`affiliateCode`,void 0),m([g({type:String})],j.prototype,`search`,void 0),m([g({type:String})],j.prototype,`effectType`,void 0),m([g({type:Boolean})],j.prototype,`tabbed`,void 0),m([g({attribute:!1})],j.prototype,`onActiveSlotChange`,void 0),m([g({attribute:!1})],j.prototype,`onPurchaseFocus`,void 0),m([g({attribute:!1})],j.prototype,`onVisiblePurchaseItemsChange`,void 0),m([g({attribute:!1})],j.prototype,`renderPurchaseAction`,void 0),m([g({type:String})],j.prototype,`focusedKey`,void 0),m([f()],j.prototype,`activeType`,void 0),m([f()],j.prototype,`activeNukeType`,void 0),j=m([s(`effects-grid`)],j);export{A as t};