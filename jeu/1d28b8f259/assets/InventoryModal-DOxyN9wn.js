import{$r as e,Bo as t,Er as n,Ha as r,Ja as i,Tr as a,Ua as o,Va as s,Xa as c,Yi as l,Za as u,_n as d,ai as f,ba as p,ci as m,hr as h,oi as g,os as _,pi as v,ri as y,si as b,ui as x,vn as S,yr as C}from"./index-C4scEURh.js";import{c as w,i as T}from"./CosmeticPreview-BQEbewFo.js";import{t as E}from"./SignedOutNotice-DLCenvvY.js";import{t as D}from"./countries-xxB0V8z5.js";import"./CosmeticCard-O-za7TkL.js";import{t as O}from"./EffectsGrid-2Fgc2Gs3.js";var k=class extends m{constructor(...e){super(...e),this.entries=[],this.activeCategory=`skins`}createRenderRoot(){return this}renderPreviews(e){let t=e.category===`effects`?e.items.slice(0,3):e.items.slice(0,1),n=e.items.length-t.length;return v`<div
      data-loadout-previews
      class="flex h-10 items-center justify-center ${e.category===`effects`?`-space-x-3`:``}"
    >
      ${t.map((t,n)=>v`<div
            data-loadout-preview
            class="h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-black/30 p-1 ${e.category===`effects`?`relative`:``}"
            style=${e.category===`effects`?`z-index:${3-n}`:x}
          >
            <cosmetic-preview .resolved=${t}></cosmetic-preview>
          </div>`)}
      ${n>0?v`<span
              data-loadout-more
              class="relative z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-slate-800 px-1 text-xs font-black text-white"
              >+${n}</span
            >`:x}
    </div>`}render(){return v`<section
      data-inventory-loadout
      aria-label=${l(`inventory.loadout`)}
    >
      <h2 class="sr-only">${l(`inventory.loadout`)}</h2>
      <div class="overflow-x-auto overflow-y-visible px-3 py-2">
        <div class="mx-auto flex w-max min-w-max gap-3">
          ${this.entries.map(e=>{let t=e.category===this.activeCategory,n=e.category===`effects`?l(`inventory.showing_effects`,{count:e.items.length}):e.summary;return v`<button
              type="button"
              data-loadout-category=${e.category}
              aria-pressed=${t?`true`:`false`}
              aria-label=${l(`inventory.loadout_category_label`,{category:e.label,summary:n})}
              class="flex min-h-24 min-w-36 flex-col items-center justify-center gap-1 rounded-xl border p-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${t?`border-blue-400 bg-blue-500/20 text-white`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10`}"
              @click=${()=>this.onCategorySelect?.(e.category)}
            >
              ${this.renderPreviews(e)}
              <span class="text-sm font-bold">${e.label}</span>
              <span class="text-xs text-white/60">${e.summary}</span>
            </button>`})}
        </div>
      </div>
    </section>`}};y([g({attribute:!1})],k.prototype,`entries`,void 0),y([g({type:String})],k.prototype,`activeCategory`,void 0),y([g({attribute:!1})],k.prototype,`onCategorySelect`,void 0),k=y([b(`inventory-loadout-bar`)],k);var A=class extends m{constructor(...e){super(...e),this.names=[],this.active=``,this.canAdd=!1,this.canUnequip=!1}createRenderRoot(){return this}renderSlot(e){let t=e===this.active;return v`<div
      class="flex items-stretch overflow-hidden rounded-lg border ${t?`border-blue-400 bg-blue-500/20`:`border-white/15 bg-white/5`}"
    >
      <button
        type="button"
        data-loadout-slot=${e}
        aria-pressed=${t?`true`:`false`}
        aria-label=${l(`inventory.loadout_slot`,{name:e})}
        class="px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${t?`text-white`:`text-white/75 hover:bg-white/10`}"
        @click=${()=>this.onSelect?.(e)}
      >
        ${e}
      </button>
      ${t?v`<button
              type="button"
              data-loadout-delete=${e}
              aria-label=${l(`inventory.loadout_delete_target`,{name:e})}
              class="border-l border-white/15 px-2 text-xs font-black text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              @click=${()=>this.onDelete?.(e)}
            >
              ✕
            </button>`:x}
    </div>`}render(){return v`<section
      data-inventory-loadout-menu
      aria-label=${l(`inventory.loadout_presets`)}
      class="flex flex-wrap items-center gap-2 px-3 pt-3"
    >
      ${this.names.map(e=>this.renderSlot(e))}
      <button
        type="button"
        data-loadout-add
        ?disabled=${!this.canAdd}
        aria-label=${l(`inventory.loadout_add`)}
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
        ${l(`inventory.unequip_all`)}
      </button>
    </section>`}};y([g({attribute:!1})],A.prototype,`names`,void 0),y([g({type:String})],A.prototype,`active`,void 0),y([g({type:Boolean})],A.prototype,`canAdd`,void 0),y([g({type:Boolean})],A.prototype,`canUnequip`,void 0),y([g({attribute:!1})],A.prototype,`onSelect`,void 0),y([g({attribute:!1})],A.prototype,`onAdd`,void 0),y([g({attribute:!1})],A.prototype,`onDelete`,void 0),y([g({attribute:!1})],A.prototype,`onUnequipAll`,void 0),A=y([b(`inventory-loadout-menu`)],A);function j(e,t){return{name:e,url:_(`/flags/${t}.svg`),product:null,rarity:`common`,affiliateCode:null}}var M=class extends S{constructor(...e){super(...e),this.routerName=`inventory`,this.search=``,this.isLoading=!1,this.loadFailed=!1,this.ownershipState=`loading`,this.previewingCosmetic=null,this.cosmetics=null,this.userSettings=new u,this.userMeResponse=!1,this.catalogLoad=null,this.inventoryLoadId=0,this.ownershipLoadId=0,this.countryFlagTiles=D.filter(e=>e.code!==`xx`&&e.restricted!==!0).map(e=>({type:`flag`,cosmetic:j(e.name,e.code),colorPalette:null,relationship:`owned`,key:`country:${e.code}`})),this.pages=new O(this),this._onCosmeticSelected=()=>this.updateFromSettings(),this._onUserMe=e=>{this.onUserMe(e.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail}}modalConfig(){return{showScrollToTop:!0,hideTabs:!0,tabs:[{key:`skins`,label:l(`store.patterns`)},{key:`flags`,label:l(`store.flags`)},{key:`crowns`,label:l(`store.crowns`)},{key:`effects`,label:l(`store.effects`)}]}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),window.addEventListener(`${c}:${i}`,this._onCosmeticSelected),window.addEventListener(`${c}:${o}`,this._onCosmeticSelected),window.addEventListener(`${c}:${s}`,this._onCosmeticSelected),window.addEventListener(`${c}:${r}`,this._onCosmeticSelected)}disconnectedCallback(){this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe),window.removeEventListener(`${c}:${i}`,this._onCosmeticSelected),window.removeEventListener(`${c}:${o}`,this._onCosmeticSelected),window.removeEventListener(`${c}:${s}`,this._onCosmeticSelected),window.removeEventListener(`${c}:${r}`,this._onCosmeticSelected)}updateFromSettings(){this.requestUpdate()}async loadOwnership(t){let n=++this.ownershipLoadId;if(t!==void 0&&t!==!1){this.userMeResponse=t,this.ownershipState=`loaded`;return}try{let r=await e();if(n!==this.ownershipLoadId)return;if(r===!1){this.userMeResponse=!1,this.ownershipState=`guest`;return}let i=t===!1?!1:await p();if(n!==this.ownershipLoadId)return;if(i===!1){this.userMeResponse=!1,this.ownershipState=`error`;return}this.userMeResponse=i,this.ownershipState=`loaded`}catch{if(n!==this.ownershipLoadId)return;this.userMeResponse=!1,this.ownershipState=`error`}}loadCatalog(){if(this.catalogLoad!==null)return this.catalogLoad;let e=h().finally(()=>{this.catalogLoad===e&&(this.catalogLoad=null)});return this.catalogLoad=e,e}async loadInventory(e){let t=++this.inventoryLoadId;this.isLoading=!0,this.loadFailed=!1,this.ownershipState=`loading`;try{let[n]=await Promise.all([this.loadCatalog(),this.loadOwnership(e)]);if(t!==this.inventoryLoadId)return;this.cosmetics=n,this.loadFailed=n===null}catch{if(t!==this.inventoryLoadId)return;this.cosmetics=null,this.loadFailed=!0,this.ownershipState===`loading`&&(this.ownershipState=`error`)}finally{t===this.inventoryLoadId&&(this.isLoading=!1,this.updateFromSettings())}}async onUserMe(e){await this.loadInventory(e)}includedInSearch(e){return e.replace(/_/g,` `).toLowerCase().includes(this.search.toLowerCase())}handleSearch(e){this.search=e.target.value}hasOwnedCatalogItem(e){return this.resolvedItems().some(t=>e.includes(t.type)&&t.cosmetic!==null&&t.relationship===`owned`)}resolvedItems(){if(this.resolvedCache?.cosmetics===this.cosmetics&&this.resolvedCache.userMeResponse===this.userMeResponse)return this.resolvedCache.items;let e=a(this.cosmetics,this.userMeResponse,null);return this.resolvedCache={cosmetics:this.cosmetics,userMeResponse:this.userMeResponse,items:e},e}equippedSkin(){let e=this.resolvedItems(),t=this.userSettings.getSelectedSkinName();if(t!==null)return e.find(e=>e.type===`skin`&&e.cosmetic?.name===t)??null;let n=this.userSettings.getSelectedPatternName(this.cosmetics);return n===null?null:e.find(e=>e.type===`pattern`&&e.cosmetic?.name===n.name&&(e.colorPalette?.name??null)===(n.colorPalette?.name??null))??null}equippedFlag(){let e=this.userSettings.getFlag();return e===null?null:this.resolvedItems().find(t=>t.type===`flag`&&t.key===e)??this.countryFlagTiles.find(t=>t.key===e)??null}equippedCrown(){let e=this.userSettings.getSelectedCrownName();return e===null?null:this.resolvedItems().find(t=>t.type===`crown`&&t.cosmetic?.name===e)??null}effectSlotFor(e){if(e.type!==`effect`||e.cosmetic===null)return null;let n=e.cosmetic;return t(n)?n.attributes.nukeType:e.effectType??null}equippedEffects(){let e=this.userSettings.getSelectedEffects();return this.resolvedItems().filter(t=>t.type===`effect`&&t.cosmetic!==null&&this.effectSlotFor(t)!==null&&e[this.effectSlotFor(t)]===t.cosmetic.name)}loadoutEntries(){let e=this.equippedEffects();return[...[{category:`skins`,label:l(`store.patterns`),item:this.equippedSkin()},{category:`flags`,label:l(`store.flags`),item:this.equippedFlag()},{category:`crowns`,label:l(`store.crowns`),item:this.equippedCrown()}].map(({category:e,label:t,item:n})=>({category:e,label:t,items:n?[n]:[],summary:n?T(n):``})),{category:`effects`,label:l(`store.effects`),items:e,summary:l(`inventory.showing_effects`,{count:e.length})}]}loadoutNames(){return this.userSettings.getLoadouts().map(e=>e.name).sort()}hasEquippedCosmetic(){let e=this.userSettings.captureLoadout(``);return e.pattern!==null||e.flag!==null||e.crown!==null||Object.keys(e.effects).length>0}renderLoadoutMenu(){let e=this.loadoutNames();return v`<inventory-loadout-menu
      .names=${e}
      .active=${this.userSettings.getActiveLoadout()??``}
      .canAdd=${e.length<10}
      .canUnequip=${this.hasEquippedCosmetic()}
      .onSelect=${e=>this.applyLoadout(e)}
      .onAdd=${()=>this.addLoadout()}
      .onDelete=${e=>this.deleteLoadout(e)}
      .onUnequipAll=${()=>this.unequipAll()}
    ></inventory-loadout-menu>`}applyLoadout(e){this.userSettings.getActiveLoadout()!==e&&this.userSettings.applyLoadout(e)&&(this.showMessage(l(`inventory.loadout_applied`,{name:e})),this.updateFromSettings())}addLoadout(){let e=this.userSettings.addLoadout();if(e===null){this.showMessage(l(`inventory.loadout_limit`,{count:10}));return}this.showMessage(l(`inventory.loadout_saved`,{name:e.name})),this.updateFromSettings()}deleteLoadout(e){this.userSettings.deleteLoadout(e),this.showMessage(l(`inventory.loadout_deleted`,{name:e})),this.updateFromSettings()}unequipAll(){this.userSettings.unequipAll(),this.showMessage(l(`inventory.unequipped_all`)),this.updateFromSettings()}renderEmptyState(e){return v`<p
      data-inventory-empty=${e}
      class="px-4 pt-4 text-center text-sm font-medium text-white/60"
    >
      ${l(`inventory.no_owned_${e}`)}
    </p>`}renderSkinGrid(){let e=this.resolvedItems().filter(e=>(e.type===`pattern`||e.type===`skin`)&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-skins`,this.search,C(e)),n=this.equippedSkin()?.key;return v`
      ${this.hasOwnedCatalogItem([`pattern`,`skin`])?null:this.renderEmptyState(`skins`)}
      <div
        data-inventory-grid="skins"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>{let t=e.find(e=>e.key===n),r=t??e[0];return v`
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
    `}renderCrownGrid(){let e=this.resolvedItems().filter(e=>e.type===`crown`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-crowns`,this.search,e),n=this.equippedCrown()?.key;return v`
      ${this.hasOwnedCatalogItem([`crown`])?null:this.renderEmptyState(`crowns`)}
      <div
        data-inventory-grid="crowns"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>v`
            <cosmetic-card
              .resolved=${e}
              state=${e.key===n?`equipped`:`idle`}
              .onActivate=${()=>this.selectCrown(e)}
            ></cosmetic-card>
          `)}
        ${t.more}
      </div>
    `}renderFlagGrid(){let e=this.equippedFlag()?.key,t=this.resolvedItems().filter(e=>e.type===`flag`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),n=this.countryFlagTiles.filter(e=>this.includedInSearch(e.cosmetic.name)||this.includedInSearch(e.key.slice(8))),r=this.pages.page(`inventory-flags`,this.search,[...t,...n]);return v`
      <div
        data-inventory-grid="flags"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${r.items.map(t=>v`
            <cosmetic-card
              .resolved=${t}
              state=${e===t.key?`equipped`:`idle`}
              .onActivate=${()=>this.selectFlag(t)}
            ></cosmetic-card>
          `)}
        ${r.more}
      </div>
    `}renderUnequip(e){return v`<div class="flex justify-end px-3 pt-3">
      <button
        type="button"
        data-inventory-unequip
        ?disabled=${(e===`skins`?this.equippedSkin():e===`flags`?this.equippedFlag():this.equippedCrown())===null}
        class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>{e===`skins`?this.userSettings.setSelectedPatternName(void 0):e===`flags`?this.userSettings.clearFlag(!0):this.userSettings.setSelectedCrownName(void 0)}}
      >
        ${l(`inventory.unequip`)}
      </button>
    </div>`}renderHeaderSlot(){let e=this.userMeResponse!==!1;return v`
      <div
        class="relative flex flex-col border-b border-white/10 pb-4 shrink-0"
      >
        ${d({title:l(`inventory.title`),onBack:()=>this.close(),ariaLabel:l(`common.back`),rightContent:v`<o-button
            data-inventory-header-action
            class="no-game-portal"
            variant=${e?`primary`:`danger`}
            size="sm"
            .translationKey=${e?`main.store`:`common.not_logged_in`}
            @click=${()=>{e?(this.close(),window.location.hash=`modal=store&tab=cosmetics`):window.showPage?.(`page-account`)}}
          ></o-button>`})}

        <div class="md:flex items-center gap-2 justify-center mt-4">
          <input
            class="h-12 w-full max-w-md border border-white/10 bg-black/60
              rounded-xl shadow-inner text-xl text-center focus:outline-none
              focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-white/30 transition-all"
            type="text"
            placeholder=${l(`cosmetics.search`)}
            .value=${this.search}
            @change=${this.handleSearch}
            @keyup=${this.handleSearch}
          />
        </div>
      </div>
      ${this.previewingCosmetic?v`<cosmetic-preview-modal
              .resolved=${this.previewingCosmetic}
              @close-preview=${()=>{this.previewingCosmetic=null}}
            ></cosmetic-preview-modal>`:x}
    `}renderBody(e){if(!this.isModalOpen)return v``;if(this.isLoading||this.ownershipState===`loading`)return v`<div data-inventory-state="loading" aria-busy="true">
        <span class="sr-only">${l(`inventory.loading`)}</span>
        <div
          data-inventory-skeleton="loadout"
          class="mx-3 my-2 h-28 animate-pulse rounded-xl bg-white/5"
        ></div>
        <div
          data-inventory-skeleton="grid"
          class="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          ${Array.from({length:6},()=>v`<div
                class="aspect-square animate-pulse rounded-xl bg-white/5"
              ></div>`)}
        </div>
      </div>`;if(this.loadFailed||this.ownershipState===`error`)return v`<div
        data-inventory-state="error"
        class="flex flex-col items-center gap-4 p-8 text-center text-red-300"
      >
        <p>${l(`inventory.load_failed`)}</p>
        <button
          type="button"
          data-inventory-retry
          ?disabled=${this.isLoading}
          class="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          @click=${e=>{this.isLoading||(e.currentTarget.disabled=!0,this.loadInventory())}}
        >
          ${l(`inventory.retry`)}
        </button>
      </div>`;let t;t=e===`flags`?v`${this.renderUnequip(`flags`)}${this.renderFlagGrid()}`:e===`crowns`?v`${this.renderUnequip(`crowns`)}${this.renderCrownGrid()}`:e===`effects`?v`<div data-inventory-grid="effects" class="min-w-0">
        <effects-grid
          mode="select"
          tabbed
          .cosmetics=${this.cosmetics}
          .userMeResponse=${this.userMeResponse}
          .search=${this.search}
        ></effects-grid>
      </div>`:v`${this.renderUnequip(`skins`)}${this.renderSkinGrid()}`;let n=e;return v`
      ${this.ownershipState===`guest`?v`<div data-inventory-sign-in>
              ${E(()=>window.showPage?.(`page-account`),l(`inventory.sign_in_for_cosmetics`))}
            </div>`:x}
      ${this.renderLoadoutMenu()}
      <inventory-loadout-bar
        .entries=${this.loadoutEntries()}
        .activeCategory=${n}
        .onCategorySelect=${e=>this.setActiveTab(e)}
      ></inventory-loadout-bar>
      <div class="px-3 pb-3">${t}</div>
    `}open(e){let t=this.modalConfig().tabs??[],n=(typeof e?.tab==`string`&&t.some(t=>t.key===e.tab)?e.tab:null)??(this.activeTab||t[0]?.key);super.open({...e,...n?{tab:n}:{}})}async onOpen(){if(this.ownershipState===`loading`||this.cosmetics===null&&!this.loadFailed){await this.loadInventory();return}this.updateFromSettings()}onClose(){this.search=``,this.previewingCosmetic=null,this.pages.reset()}onTabEnter(e){this.search=``}selectCosmetic(e){e.type===`pattern`?this.selectPattern(n(e),e):e.type===`skin`&&(this.selectSkin(e.cosmetic?.name??null),this.showSelectedPopup(e))}selectSkin(e){this.userSettings.setSelectedPatternName(e===null?void 0:`skin:${e}`)}selectCrown(e){this.userSettings.setSelectedCrownName(e.cosmetic?.name??void 0),this.showSelectedPopup(e)}selectFlag(e){this.userSettings.setFlag(e.key),this.showSelectedPopup(e)}selectPattern(e,t){if(e===null)this.userSettings.setSelectedPatternName(void 0);else{let t=e.colorPalette?.name===void 0?e.name:`${e.name}:${e.colorPalette.name}`;this.userSettings.setSelectedPatternName(`pattern:${t}`)}this.showSelectedPopup(t)}showSelectedPopup(e){this.showMessage(l(`inventory.selected_cosmetic`,{name:w(e)}))}showMessage(e){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:2e3}}))}async refresh(){this.requestUpdate()}};y([f()],M.prototype,`search`,void 0),y([f()],M.prototype,`isLoading`,void 0),y([f()],M.prototype,`loadFailed`,void 0),y([f()],M.prototype,`ownershipState`,void 0),y([f()],M.prototype,`previewingCosmetic`,void 0),M=y([b(`inventory-modal`)],M);export{M as InventoryModal};