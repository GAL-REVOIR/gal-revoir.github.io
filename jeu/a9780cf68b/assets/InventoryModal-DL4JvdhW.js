import{$i as e,Ar as t,Ga as n,Ka as r,Qa as i,Wo as a,_i as o,_r as s,bn as c,di as l,eo as u,fi as d,kr as f,li as p,mi as m,qa as h,ri as g,si as _,to as v,ui as y,us as b,wa as x,xr as S,yn as C}from"./index-BHQpe8wU.js";import{c as w,i as T}from"./CosmeticPreview-DtAVOsm6.js";import{t as E}from"./SignedOutNotice-CnnYfYii.js";import{t as D}from"./countries-xxB0V8z5.js";import"./CosmeticCard-VokGUh_K.js";import{t as O}from"./EffectsGrid-DSU7lY2F.js";var k=class extends d{constructor(...e){super(...e),this.entries=[],this.activeCategory=`skins`}createRenderRoot(){return this}renderPreviews(e){let t=e.category===`effects`?e.items.slice(0,3):e.items.slice(0,1),n=e.items.length-t.length;return o`<div
      data-loadout-previews
      class="flex h-10 items-center justify-center ${e.category===`effects`?`-space-x-3`:``}"
    >
      ${t.map((t,n)=>o`<div
            data-loadout-preview
            class="h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-black/30 p-1 ${e.category===`effects`?`relative`:``}"
            style=${e.category===`effects`?`z-index:${3-n}`:m}
          >
            <cosmetic-preview .resolved=${t}></cosmetic-preview>
          </div>`)}
      ${n>0?o`<span
              data-loadout-more
              class="relative z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-slate-800 px-1 text-xs font-black text-white"
              >+${n}</span
            >`:m}
    </div>`}render(){return o`<section
      data-inventory-loadout
      aria-label=${e(`inventory.loadout`)}
    >
      <h2 class="sr-only">${e(`inventory.loadout`)}</h2>
      <div class="overflow-x-auto overflow-y-visible px-3 py-2">
        <div class="mx-auto flex w-max min-w-max gap-3">
          ${this.entries.map(t=>{let n=t.category===this.activeCategory,r=t.category===`effects`?e(`inventory.showing_effects`,{count:t.items.length}):t.summary;return o`<button
              type="button"
              data-loadout-category=${t.category}
              aria-pressed=${n?`true`:`false`}
              aria-label=${e(`inventory.loadout_category_label`,{category:t.label,summary:r})}
              class="flex min-h-24 min-w-36 flex-col items-center justify-center gap-1 rounded-xl border p-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${n?`border-blue-400 bg-blue-500/20 text-white`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10`}"
              @click=${()=>this.onCategorySelect?.(t.category)}
            >
              ${this.renderPreviews(t)}
              <span class="text-sm font-bold">${t.label}</span>
              <span class="text-xs text-white/60">${t.summary}</span>
            </button>`})}
        </div>
      </div>
    </section>`}};_([y({attribute:!1})],k.prototype,`entries`,void 0),_([y({type:String})],k.prototype,`activeCategory`,void 0),_([y({attribute:!1})],k.prototype,`onCategorySelect`,void 0),k=_([l(`inventory-loadout-bar`)],k);var A=class extends d{constructor(...e){super(...e),this.names=[],this.active=``,this.canAdd=!1,this.canUnequip=!1}createRenderRoot(){return this}renderSlot(t){let n=t===this.active;return o`<div
      class="flex items-stretch overflow-hidden rounded-lg border ${n?`border-blue-400 bg-blue-500/20`:`border-white/15 bg-white/5`}"
    >
      <button
        type="button"
        data-loadout-slot=${t}
        aria-pressed=${n?`true`:`false`}
        aria-label=${e(`inventory.loadout_slot`,{name:t})}
        class="px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${n?`text-white`:`text-white/75 hover:bg-white/10`}"
        @click=${()=>this.onSelect?.(t)}
      >
        ${t}
      </button>
      ${n?o`<button
              type="button"
              data-loadout-delete=${t}
              aria-label=${e(`inventory.loadout_delete_target`,{name:t})}
              class="border-l border-white/15 px-2 text-xs font-black text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              @click=${()=>this.onDelete?.(t)}
            >
              ✕
            </button>`:m}
    </div>`}render(){return o`<section
      data-inventory-loadout-menu
      aria-label=${e(`inventory.loadout_presets`)}
      class="flex flex-wrap items-center gap-2 px-3 pt-3"
    >
      ${this.names.map(e=>this.renderSlot(e))}
      <button
        type="button"
        data-loadout-add
        ?disabled=${!this.canAdd}
        aria-label=${e(`inventory.loadout_add`)}
        class="rounded-lg border border-dashed border-white/25 px-3 py-1.5 text-xs font-black text-white/75 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.onAdd?.()}
      >
        +
      </button>
      <button
        type="button"
        data-inventory-unequip-all
        ?disabled=${!this.canUnequip}
        class="ml-auto rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.onUnequipAll?.()}
      >
        ${e(`inventory.unequip_all`)}
      </button>
    </section>`}};_([y({attribute:!1})],A.prototype,`names`,void 0),_([y({type:String})],A.prototype,`active`,void 0),_([y({type:Boolean})],A.prototype,`canAdd`,void 0),_([y({type:Boolean})],A.prototype,`canUnequip`,void 0),_([y({attribute:!1})],A.prototype,`onSelect`,void 0),_([y({attribute:!1})],A.prototype,`onAdd`,void 0),_([y({attribute:!1})],A.prototype,`onDelete`,void 0),_([y({attribute:!1})],A.prototype,`onUnequipAll`,void 0),A=_([l(`inventory-loadout-menu`)],A);function j(e,t){return{name:e,url:b(`/flags/${t}.svg`),product:null,rarity:`common`,affiliateCode:null}}var M=class extends c{constructor(...e){super(...e),this.routerName=`inventory`,this.search=``,this.isLoading=!1,this.loadFailed=!1,this.ownershipState=`loading`,this.previewingCosmetic=null,this.cosmetics=null,this.userSettings=new v,this.userMeResponse=!1,this.catalogLoad=null,this.inventoryLoadId=0,this.ownershipLoadId=0,this.countryFlagTiles=D.filter(e=>e.code!==`xx`&&e.restricted!==!0).map(e=>({type:`flag`,cosmetic:j(e.name,e.code),colorPalette:null,relationship:`owned`,key:`country:${e.code}`})),this.pages=new O(this),this._onCosmeticSelected=()=>this.updateFromSettings(),this._onUserMe=e=>{this.onUserMe(e.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail}}modalConfig(){return{showScrollToTop:!0,hideTabs:!0,tabs:[{key:`skins`,label:e(`store.patterns`)},{key:`flags`,label:e(`store.flags`)},{key:`crowns`,label:e(`store.crowns`)},{key:`effects`,label:e(`store.effects`)}]}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),window.addEventListener(`${u}:${i}`,this._onCosmeticSelected),window.addEventListener(`${u}:${h}`,this._onCosmeticSelected),window.addEventListener(`${u}:${n}`,this._onCosmeticSelected),window.addEventListener(`${u}:${r}`,this._onCosmeticSelected)}disconnectedCallback(){this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe),window.removeEventListener(`${u}:${i}`,this._onCosmeticSelected),window.removeEventListener(`${u}:${h}`,this._onCosmeticSelected),window.removeEventListener(`${u}:${n}`,this._onCosmeticSelected),window.removeEventListener(`${u}:${r}`,this._onCosmeticSelected)}updateFromSettings(){this.requestUpdate()}async loadOwnership(e){let t=++this.ownershipLoadId;if(e!==void 0&&e!==!1){this.userMeResponse=e,this.ownershipState=`loaded`;return}try{let n=await g();if(t!==this.ownershipLoadId)return;if(n===!1){this.userMeResponse=!1,this.ownershipState=`guest`;return}let r=e===!1?!1:await x();if(t!==this.ownershipLoadId)return;if(r===!1){this.userMeResponse=!1,this.ownershipState=`error`;return}this.userMeResponse=r,this.ownershipState=`loaded`}catch{if(t!==this.ownershipLoadId)return;this.userMeResponse=!1,this.ownershipState=`error`}}loadCatalog(){if(this.catalogLoad!==null)return this.catalogLoad;let e=s().finally(()=>{this.catalogLoad===e&&(this.catalogLoad=null)});return this.catalogLoad=e,e}async loadInventory(e){let t=++this.inventoryLoadId;this.isLoading=!0,this.loadFailed=!1,this.ownershipState=`loading`;try{let[n]=await Promise.all([this.loadCatalog(),this.loadOwnership(e)]);if(t!==this.inventoryLoadId)return;this.cosmetics=n,this.loadFailed=n===null}catch{if(t!==this.inventoryLoadId)return;this.cosmetics=null,this.loadFailed=!0,this.ownershipState===`loading`&&(this.ownershipState=`error`)}finally{t===this.inventoryLoadId&&(this.isLoading=!1,this.updateFromSettings())}}async onUserMe(e){await this.loadInventory(e)}includedInSearch(e){return e.replace(/_/g,` `).toLowerCase().includes(this.search.toLowerCase())}handleSearch(e){this.search=e.target.value}hasOwnedCatalogItem(e){return this.resolvedItems().some(t=>e.includes(t.type)&&t.cosmetic!==null&&t.relationship===`owned`)}resolvedItems(){if(this.resolvedCache?.cosmetics===this.cosmetics&&this.resolvedCache.userMeResponse===this.userMeResponse)return this.resolvedCache.items;let e=f(this.cosmetics,this.userMeResponse,null);return this.resolvedCache={cosmetics:this.cosmetics,userMeResponse:this.userMeResponse,items:e},e}equippedSkin(){let e=this.resolvedItems(),t=this.userSettings.getSelectedSkinName();if(t!==null)return e.find(e=>e.type===`skin`&&e.cosmetic?.name===t)??null;let n=this.userSettings.getSelectedPatternName(this.cosmetics);return n===null?null:e.find(e=>e.type===`pattern`&&e.cosmetic?.name===n.name&&(e.colorPalette?.name??null)===(n.colorPalette?.name??null))??null}equippedFlag(){let e=this.userSettings.getFlag();return e===null?null:this.resolvedItems().find(t=>t.type===`flag`&&t.key===e)??this.countryFlagTiles.find(t=>t.key===e)??null}equippedCrown(){let e=this.userSettings.getSelectedCrownName();return e===null?null:this.resolvedItems().find(t=>t.type===`crown`&&t.cosmetic?.name===e)??null}effectSlotFor(e){if(e.type!==`effect`||e.cosmetic===null)return null;let t=e.cosmetic;return a(t)?t.attributes.nukeType:e.effectType??null}equippedEffects(){let e=this.userSettings.getSelectedEffects();return this.resolvedItems().filter(t=>t.type===`effect`&&t.cosmetic!==null&&this.effectSlotFor(t)!==null&&e[this.effectSlotFor(t)]===t.cosmetic.name)}loadoutEntries(){let t=this.equippedEffects();return[...[{category:`skins`,label:e(`store.patterns`),item:this.equippedSkin()},{category:`flags`,label:e(`store.flags`),item:this.equippedFlag()},{category:`crowns`,label:e(`store.crowns`),item:this.equippedCrown()}].map(({category:e,label:t,item:n})=>({category:e,label:t,items:n?[n]:[],summary:n?T(n):``})),{category:`effects`,label:e(`store.effects`),items:t,summary:e(`inventory.showing_effects`,{count:t.length})}]}loadoutNames(){return this.userSettings.getLoadouts().map(e=>e.name).sort()}hasEquippedCosmetic(){let e=this.userSettings.captureLoadout(``);return e.pattern!==null||e.flag!==null||e.crown!==null||Object.keys(e.effects).length>0}renderLoadoutMenu(){let e=this.loadoutNames();return o`<inventory-loadout-menu
      .names=${e}
      .active=${this.userSettings.getActiveLoadout()??``}
      .canAdd=${e.length<10}
      .canUnequip=${this.hasEquippedCosmetic()}
      .onSelect=${e=>this.applyLoadout(e)}
      .onAdd=${()=>this.addLoadout()}
      .onDelete=${e=>this.deleteLoadout(e)}
      .onUnequipAll=${()=>this.unequipAll()}
    ></inventory-loadout-menu>`}applyLoadout(t){this.userSettings.getActiveLoadout()!==t&&this.userSettings.applyLoadout(t)&&(this.showMessage(e(`inventory.loadout_applied`,{name:t})),this.updateFromSettings())}addLoadout(){let t=this.userSettings.addLoadout();if(t===null){this.showMessage(e(`inventory.loadout_limit`,{count:10}));return}this.showMessage(e(`inventory.loadout_saved`,{name:t.name})),this.updateFromSettings()}deleteLoadout(t){this.userSettings.deleteLoadout(t),this.showMessage(e(`inventory.loadout_deleted`,{name:t})),this.updateFromSettings()}unequipAll(){this.userSettings.unequipAll(),this.showMessage(e(`inventory.unequipped_all`)),this.updateFromSettings()}renderEmptyState(t){return o`<p
      data-inventory-empty=${t}
      class="px-4 pt-4 text-center text-sm font-medium text-white/60"
    >
      ${e(`inventory.no_owned_${t}`)}
    </p>`}renderSkinGrid(){let e=this.resolvedItems().filter(e=>(e.type===`pattern`||e.type===`skin`)&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-skins`,this.search,S(e)),n=this.equippedSkin()?.key;return o`
      ${this.hasOwnedCatalogItem([`pattern`,`skin`])?null:this.renderEmptyState(`skins`)}
      <div
        data-inventory-grid="skins"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>{let t=e.find(e=>e.key===n),r=t??e[0];return o`
            <cosmetic-card
              .resolved=${r}
              .variants=${e}
              .activeVariantKey=${r.key}
              state=${t?`equipped`:`idle`}
              .onActivate=${e=>this.selectCosmetic(e)}
              .onVariantActivate=${e=>this.selectCosmetic(e)}
            ></cosmetic-card>
          `})}
        ${t.more}
      </div>
    `}renderCrownGrid(){let e=this.resolvedItems().filter(e=>e.type===`crown`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-crowns`,this.search,e),n=this.equippedCrown()?.key;return o`
      ${this.hasOwnedCatalogItem([`crown`])?null:this.renderEmptyState(`crowns`)}
      <div
        data-inventory-grid="crowns"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>o`
            <cosmetic-card
              .resolved=${e}
              state=${e.key===n?`equipped`:`idle`}
              .onActivate=${()=>this.selectCrown(e)}
            ></cosmetic-card>
          `)}
        ${t.more}
      </div>
    `}renderFlagGrid(){let e=this.equippedFlag()?.key,t=this.resolvedItems().filter(e=>e.type===`flag`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),n=this.countryFlagTiles.filter(e=>this.includedInSearch(e.cosmetic.name)||this.includedInSearch(e.key.slice(8))),r=this.pages.page(`inventory-flags`,this.search,[...t,...n]);return o`
      <div
        data-inventory-grid="flags"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${r.items.map(t=>o`
            <cosmetic-card
              .resolved=${t}
              state=${e===t.key?`equipped`:`idle`}
              .onActivate=${()=>this.selectFlag(t)}
            ></cosmetic-card>
          `)}
        ${r.more}
      </div>
    `}renderUnequip(t){return o`<div class="flex justify-end px-3 pt-3">
      <button
        type="button"
        data-inventory-unequip
        ?disabled=${(t===`skins`?this.equippedSkin():t===`flags`?this.equippedFlag():this.equippedCrown())===null}
        class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>{t===`skins`?this.userSettings.setSelectedPatternName(void 0):t===`flags`?this.userSettings.clearFlag(!0):this.userSettings.setSelectedCrownName(void 0)}}
      >
        ${e(`inventory.unequip`)}
      </button>
    </div>`}renderHeaderSlot(){let t=this.userMeResponse!==!1;return o`
      <div
        class="relative flex flex-col border-b border-white/10 pb-4 shrink-0"
      >
        ${C({title:e(`inventory.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`),rightContent:o`<o-button
            data-inventory-header-action
            class="no-game-portal"
            variant=${t?`primary`:`danger`}
            size="sm"
            .translationKey=${t?`main.store`:`common.not_logged_in`}
            @click=${()=>{t?(this.close(),window.location.hash=`modal=store&tab=cosmetics`):window.showPage?.(`page-account`)}}
          ></o-button>`})}

        <div class="md:flex items-center gap-2 justify-center mt-4">
          <input
            class="h-12 w-full max-w-md border border-white/10 bg-black/60
              rounded-xl shadow-inner text-xl text-center focus:outline-none
              focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-white/30 transition-all"
            type="text"
            placeholder=${e(`cosmetics.search`)}
            .value=${this.search}
            @change=${this.handleSearch}
            @keyup=${this.handleSearch}
          />
        </div>
      </div>
      ${this.previewingCosmetic?o`<cosmetic-preview-modal
              .resolved=${this.previewingCosmetic}
              @close-preview=${()=>{this.previewingCosmetic=null}}
            ></cosmetic-preview-modal>`:m}
    `}renderBody(t){if(!this.isModalOpen)return o``;if(this.isLoading||this.ownershipState===`loading`)return o`<div data-inventory-state="loading" aria-busy="true">
        <span class="sr-only">${e(`inventory.loading`)}</span>
        <div
          data-inventory-skeleton="loadout"
          class="mx-3 my-2 h-28 animate-pulse rounded-xl bg-white/5"
        ></div>
        <div
          data-inventory-skeleton="grid"
          class="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          ${Array.from({length:6},()=>o`<div
                class="aspect-square animate-pulse rounded-xl bg-white/5"
              ></div>`)}
        </div>
      </div>`;if(this.loadFailed||this.ownershipState===`error`)return o`<div
        data-inventory-state="error"
        class="flex flex-col items-center gap-4 p-8 text-center text-red-300"
      >
        <p>${e(`inventory.load_failed`)}</p>
        <button
          type="button"
          data-inventory-retry
          ?disabled=${this.isLoading}
          class="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          @click=${e=>{this.isLoading||(e.currentTarget.disabled=!0,this.loadInventory())}}
        >
          ${e(`inventory.retry`)}
        </button>
      </div>`;let n;n=t===`flags`?o`${this.renderUnequip(`flags`)}${this.renderFlagGrid()}`:t===`crowns`?o`${this.renderUnequip(`crowns`)}${this.renderCrownGrid()}`:t===`effects`?o`<div data-inventory-grid="effects" class="min-w-0">
        <effects-grid
          mode="select"
          tabbed
          .cosmetics=${this.cosmetics}
          .userMeResponse=${this.userMeResponse}
          .search=${this.search}
        ></effects-grid>
      </div>`:o`${this.renderUnequip(`skins`)}${this.renderSkinGrid()}`;let r=t;return o`
      ${this.ownershipState===`guest`?o`<div data-inventory-sign-in>
              ${E(()=>window.showPage?.(`page-account`),e(`inventory.sign_in_for_cosmetics`))}
            </div>`:m}
      ${this.renderLoadoutMenu()}
      <inventory-loadout-bar
        .entries=${this.loadoutEntries()}
        .activeCategory=${r}
        .onCategorySelect=${e=>this.setActiveTab(e)}
      ></inventory-loadout-bar>
      <div class="px-3 pb-3">${n}</div>
    `}open(e){let t=this.modalConfig().tabs??[],n=(typeof e?.tab==`string`&&t.some(t=>t.key===e.tab)?e.tab:null)??(this.activeTab||t[0]?.key);super.open({...e,...n?{tab:n}:{}})}async onOpen(){if(this.ownershipState===`loading`||this.cosmetics===null&&!this.loadFailed){await this.loadInventory();return}this.updateFromSettings()}onClose(){this.search=``,this.previewingCosmetic=null,this.pages.reset()}onTabEnter(e){this.search=``}selectCosmetic(e){e.type===`pattern`?this.selectPattern(t(e),e):e.type===`skin`&&(this.selectSkin(e.cosmetic?.name??null),this.showSelectedPopup(e))}selectSkin(e){this.userSettings.setSelectedPatternName(e===null?void 0:`skin:${e}`)}selectCrown(e){this.userSettings.setSelectedCrownName(e.cosmetic?.name??void 0),this.showSelectedPopup(e)}selectFlag(e){this.userSettings.setFlag(e.key),this.showSelectedPopup(e)}selectPattern(e,t){if(e===null)this.userSettings.setSelectedPatternName(void 0);else{let t=e.colorPalette?.name===void 0?e.name:`${e.name}:${e.colorPalette.name}`;this.userSettings.setSelectedPatternName(`pattern:${t}`)}this.showSelectedPopup(t)}showSelectedPopup(t){this.showMessage(e(`inventory.selected_cosmetic`,{name:w(t)}))}showMessage(e){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:2e3}}))}async refresh(){this.requestUpdate()}};_([p()],M.prototype,`search`,void 0),_([p()],M.prototype,`isLoading`,void 0),_([p()],M.prototype,`loadFailed`,void 0),_([p()],M.prototype,`ownershipState`,void 0),_([p()],M.prototype,`previewingCosmetic`,void 0),M=_([l(`inventory-modal`)],M);export{M as InventoryModal};