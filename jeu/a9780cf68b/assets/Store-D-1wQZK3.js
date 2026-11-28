import{$i as e,Ca as t,Co as n,Cr as r,Cs as i,Da as a,Dr as o,Ir as s,Lr as c,Or as l,Qr as u,Rr as d,Sr as f,Ta as p,Tr as m,Ua as ee,_i as h,_r as g,ai as te,ba as ne,bn as re,ci as ie,di as _,fi as v,gr as y,gs as ae,jr as oe,kn as b,kr as x,li as S,mi as C,mr as w,n as se,na as ce,oi as le,pi as ue,si as T,so as de,t as fe,ta as pe,ui as E,vr as me,wa as he,wr as D,xn as O,xr as k,yn as A,zr as ge}from"./index-BHQpe8wU.js";import"./PlutoniumIcon-TjVB4nmC.js";import"./CurrencyDisplay-5S6Ceh1l.js";import{t as j}from"./LeaderboardTribeTable-BGCtQ6Up.js";import{c as M,l as _e}from"./CosmeticPreview-DtAVOsm6.js";import{r as ve,t as N}from"./PurchaseButton-C_9xu1_U.js";import{t as P}from"./CosmeticCard-VokGUh_K.js";import"./InsufficientCurrencyDialog-BtEonRz-.js";import{t as ye}from"./EffectsGrid-DSU7lY2F.js";var F=20,I=2e3,L=class extends v{constructor(...e){super(...e),this.amount=100,this.buy=async()=>{let e=c(await ge({kind:`custom_currency`,hardAmount:this.amount}),`store.custom_currency_purchase_success`);e!==null&&await te(e)}}createRenderRoot(){return this}clamp(e){return Number.isFinite(e)?Math.min(I,Math.max(F,Math.floor(e))):F}get priceDollars(){return(this.amount/20).toFixed(2)}onSlider(e){this.amount=this.clamp(Number(e.target.value))}onInputChange(e){this.amount=this.clamp(Number(e.target.value))}render(){let t=`$${this.priceDollars}`;return h`
      <article
        data-custom-currency-card
        data-cosmetic-shell
        data-cosmetic-rarity="common"
        style="background:linear-gradient(to top, rgba(80,80,80,0.55) 0%, rgba(15,15,20,0.85) 100%);border-color:rgba(255,255,255,0.15)"
        class="relative flex h-full w-full flex-col items-center overflow-visible rounded-xl border border-white/20 transition-all duration-200 ease-out hover:-translate-y-1 hover:z-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      >
        <span
          data-custom-currency-name
          class="w-full whitespace-normal break-words px-3 pt-3 text-center text-sm font-bold leading-tight text-white"
          >${e(`store.custom_amount`)}</span
        >

        <div
          data-cosmetic-main
          class="group relative flex w-full flex-col items-center gap-2 rounded-xl px-3 pb-3 pt-2"
        >
          <div
            data-custom-currency-preview
            class="relative flex w-full aspect-square flex-col items-center justify-center gap-1 overflow-hidden rounded-lg bg-white/5 p-2"
          >
            <plutonium-icon class="block shrink-0" .size=${64}></plutonium-icon>
            <label for="custom-plutonium-amount" class="sr-only"
              >${e(`store.plutonium_amount`)}</label
            >
            <input
              id="custom-plutonium-amount"
              type="number"
              class="custom-plutonium-input w-full min-w-0 max-w-24 text-center bg-black/30 border border-green-500/30 rounded px-1 py-0.5 text-lg font-black leading-none text-green-400 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/40"
              aria-label=${e(`store.plutonium_amount`)}
              min=${F}
              max=${I}
              step="1"
              .value=${String(this.amount)}
              @change=${this.onInputChange}
            />
            <span
              class="text-[10px] font-bold leading-none text-white/50 uppercase"
              >${e(`cosmetics.hard`)}</span
            >
            <span
              data-custom-currency-price
              class="pt-0.5 text-sm font-bold leading-none text-blue-300"
              >${t}</span
            >
          </div>

          <input
            type="range"
            class="w-full accent-green-500 cursor-pointer"
            aria-label=${e(`store.plutonium_amount`)}
            min=${F}
            max=${I}
            step="1"
            .value=${String(this.amount)}
            @input=${this.onSlider}
          />
        </div>

        <div data-cosmetic-action class="mt-auto w-full px-3 pb-3 pt-2">
          <purchase-button
            class="block w-full"
            .dollarPrice=${t}
            .onPurchaseDollar=${this.buy}
            .inlineCheckout=${{request:{kind:`custom_currency`,hardAmount:this.amount},amountCents:this.amount*5,successMessageKey:`store.custom_currency_purchase_success`}}
          ></purchase-button>
        </div>
      </article>
    `}};T([S()],L.prototype,`amount`,void 0),L=T([_(`custom-currency-card`)],L);var R=class extends v{constructor(...e){super(...e),this.linked=null,this._onUserMe=e=>{this.linked=n(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe);let e=b();e!==null&&(this.linked=n(e.response))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe)}render(){return this.linked===!1?h`<div class="no-game-portal flex items-center">
      <button
        class="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 cursor-pointer hover:bg-red-500/30"
        data-i18n="common.not_logged_in"
        @click=${()=>{window.showPage?.(`page-account`)}}
      >
        ${e(`common.not_logged_in`)}
      </button>
    </div>`:h``}};T([S()],R.prototype,`linked`,void 0),R=T([_(`not-logged-in-warning`)],R);var z=class extends v{constructor(...e){super(...e),this.pack=null,this.actionContent=C,this.portal=null,this.onKeyDown=e=>{e.key===`Escape`&&this.close()},this.relayPreview=e=>{e.stopPropagation(),this.openPreview(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown)}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown),this.portal&&=(ue(h``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent(`close`))}openPreview(e){P(e)&&this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:e}))}render(){return this.portal&&ue(this.pack?this.renderOverlay(this.pack):h``,this.portal),h``}renderOverlay(t){let n=t.cosmetic,r=t.packItems??[];return h`<div
      class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
      @click=${e=>{e.target===e.currentTarget&&this.close()}}
      @open-cosmetic-preview=${this.relayPreview}
    >
      <div
        data-pack-contents
        role="dialog"
        aria-label=${n.displayName}
        class="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl"
      >
        <button
          type="button"
          aria-label=${e(`common.close`)}
          @click=${()=>this.close()}
          class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <h2 class="mb-1 pr-8 text-lg font-bold text-white">
          ${n.displayName}
        </h2>
        ${n.description?h`<p class="mb-4 text-sm text-white/60">
                ${n.description}
              </p>`:h`<div class="mb-4"></div>`}
        ${r.length===0?h`<p class="py-6 text-center text-sm text-white/50">
                ${e(`store.pack_no_items`)}
              </p>`:h`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                ${r.map(e=>h`<div
                      data-pack-contents-item=${e.key}
                      class="flex min-w-0 flex-col items-center gap-1"
                    >
                      <cosmetic-card
                        class="block w-full"
                        .resolved=${e}
                        .onActivate=${e=>this.openPreview(e)}
                      ></cosmetic-card>
                      <span
                        data-pack-contents-type
                        class="text-[10px] font-bold uppercase tracking-wider text-white/50"
                        >${_e(e)}</span
                      >
                    </div>`)}
              </div>`}
        ${this.actionContent===C?C:h`<div data-pack-contents-action class="mx-auto mt-4 max-w-xs">
                ${this.actionContent}
              </div>`}
      </div>
    </div>`}};T([E({attribute:!1})],z.prototype,`pack`,void 0),T([E({attribute:!1})],z.prototype,`actionContent`,void 0),z=T([_(`pack-contents-dialog`)],z);var B=class extends v{constructor(...e){super(...e),this.tribeName=``,this.stats=null,this.loadSeq=0}createRenderRoot(){return this}updated(e){e.has(`tribeName`)&&this.tribeName!==``&&this.load(this.tribeName)}async load(e){let t=++this.loadSeq;this.stats=null;let n=await ne(e);t===this.loadSeq&&(this.stats=n)}renderFigures(t){return h`<div class="grid grid-cols-2 gap-2">
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${e(`store.tribe_stats_games`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${t.gamesAppeared.toLocaleString()}
        </span>
      </div>
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
        title=${e(`leaderboard_modal.tribes_reach_value_tooltip`,{count:t.playerReach.toLocaleString()})}
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${e(`leaderboard_modal.tribes_reach`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${t.playerReach.toLocaleString()}
        </span>
      </div>
    </div>`}renderStats(t){let n=j(t.window.start),r=j(t.window.end),i=n!==null&&r!==null?e(`store.tribe_stats_window`,{days:t.window.days,start:n,end:r}):e(`store.tribe_stats_window_short`,{days:t.window.days});return h`<div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm">
        <span class="text-white/40 font-medium">
          ${e(`store.tribe_stats_owner`)}
        </span>
        <player-name
          class="min-w-0"
          .username=${t.ownerUsername}
          .publicId=${t.ownerPublicId}
        ></player-name>
      </div>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${i}
        </h3>
        ${this.renderFigures(t.window)}
      </section>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${e(`store.tribe_stats_lifetime`)}
        </h3>
        ${this.renderFigures(t.lifetime)}
      </section>
    </div>`}renderBody(){return this.stats===null?O():this.stats===!1?h`<p class="text-sm font-medium text-red-400">
        ${e(`store.tribe_stats_failed`)}
      </p>`:this.renderStats(this.stats)}renderBoostedBadge(){if(this.stats===null||this.stats===!1)return C;let t=this.stats.activeBoosts;return t===0?C:h`<span
      class="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5"
    >
      ${e(`store.tribe_stats_boosted`,{multiplier:t+1})}
    </span>`}render(){return h`<div class="flex flex-col gap-4">
      ${A({titleContent:h`<span
          class="text-white text-xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
        >
          ${this.stats!==null&&this.stats!==!1?this.stats.name:this.tribeName} ${this.renderBoostedBadge()}
        </span>`,onBack:()=>this.dispatchEvent(new CustomEvent(`back`)),ariaLabel:e(`common.back`),padded:!1,showDivider:!1})}
      ${this.renderBody()}
    </div>`}};T([E({attribute:!1})],B.prototype,`tribeName`,void 0),T([S()],B.prototype,`stats`,void 0),B=T([_(`tribe-stats-view`)],B);var V,be=100,H={pending:`active`,live:`active`,rejected:`rejected`,revoked:`rejected`},xe={active:{labelKey:`store.tribe_status_active`,classes:`bg-green-500/20 text-green-300 border-green-500/30`},rejected:{labelKey:`store.tribe_status_rejected`,classes:`bg-red-500/20 text-red-300 border-red-500/30`}},U=V=class extends v{constructor(...t){super(...t),this.userMeResponse=!1,this.data=null,this.purchasing=!1,this.notice=null,this.tribeNamesConfig=null,this.boostingId=null,this.boostNotice=null,this.insufficientInfo=null,this.statsName=null,this.loadStarted=!1,this.submit=async t=>{if(t.preventDefault(),this.purchasing)return;let n=this.input?.value.trim()??``;if(n.length===0){this.notice={kind:`error`,text:e(`store.tribe_name_required`)};return}if(this.hardBalance<0){this.notice={kind:`error`,text:this.debtText(-this.hardBalance)};return}this.purchasing=!0,this.notice=null;let r=await a(n);if(this.purchasing=!1,r.ok){this.input&&(this.input.value=``),this.notice={kind:`success`,text:e(`store.tribe_purchase_live`,{name:r.data.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.notice={kind:`error`,text:e(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let t=await this.refreshAfterPurchase(),r=this.price;if(r===null||t===!1){this.notice={kind:`error`,text:e(`store.purchase_failed`)};return}let i=V.hardBalanceOf(t),a=V.balanceOutcome(i,r);if(a!==`shortfall`){this.notice={kind:`error`,text:a===`debt`?this.debtText(-i):e(`store.purchase_failed`)};return}this.showInsufficient(n,r,i);return}if(r.code===`duplicate`){this.notice={kind:`error`,text:e(`store.tribe_duplicate`)};return}if(r.code===`rate_limited`){let t=r.retryAfterSeconds;this.notice={kind:`error`,text:t&&t>0?e(`store.tribe_rate_limited`,{seconds:t}):e(`store.purchase_failed`)};return}this.notice={kind:`error`,text:V.refusalText(r)}},this.boost=async t=>{let n=this.tribeNamesConfig;if(n===null||this.boostingId!==null)return;let r=n.boostPriceHard;if(this.hardBalance<0){this.boostNotice={kind:`error`,text:this.debtText(-this.hardBalance)};return}if(this.hardBalance<r){this.showInsufficient(t.displayName,r,this.hardBalance);return}if(!await le(e(`store.tribe_boost_confirm`,{name:t.displayName,price:r,days:n.boostDurationDays}),{heading:e(`store.tribe_boost_heading`),variant:`warning`}))return;this.boostingId=t.id,this.boostNotice=null;let i=await ce(t.id,crypto.randomUUID());if(this.boostingId=null,i.ok){this.boostNotice={kind:`success`,text:e(`store.tribe_boost_success`,{name:t.displayName})},await this.refreshAfterPurchase();return}if(i.code===`debt`){this.boostNotice={kind:`error`,text:e(`store.pack_debt`,{debt:i.debt})},await this.refreshAfterPurchase();return}if(i.code===`insufficient_balance`){let n=await this.refreshAfterPurchase();if(n===!1){this.boostNotice={kind:`error`,text:e(`store.tribe_boost_failed`)};return}let i=V.hardBalanceOf(n),a=V.balanceOutcome(i,r);if(a!==`shortfall`){this.boostNotice={kind:`error`,text:a===`debt`?this.debtText(-i):e(`store.tribe_boost_failed`)};return}this.showInsufficient(t.displayName,r,i);return}if(i.code===`not_found`){this.boostNotice={kind:`error`,text:e(`store.tribe_boost_gone`)},await this.load();return}this.boostNotice={kind:`error`,text:e(`store.tribe_boost_failed`)}}}createRenderRoot(){return this}updated(){!this.loadStarted&&this.userMeResponse!==!1&&(this.loadStarted=!0,this.load())}async load(){let[e,n]=await Promise.all([t(),g()]);this.data=e,this.tribeNamesConfig=n?.tribeNames??null}get price(){return this.tribeNamesConfig?.priceHard??null}get hardBalance(){return this.userMeResponse===!1?0:this.userMeResponse.player.currency?.hard??0}async refreshAfterPurchase(){await this.load(),p();let e=await he();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}static hardBalanceOf(e){return e===!1?0:e.player.currency?.hard??0}static balanceOutcome(e,t){return e<0?`debt`:t-e<=0?`unexplained`:`shortfall`}static refusalText(t){switch(t.code){case`length`:return e(`store.tribe_name_length`,{min:t.min,max:t.max});case`invalid_charset`:return e(`store.tribe_name_charset`);case`invalid_no_letter`:return e(`store.tribe_name_no_letter`);case`not_allowed`:return e(`store.tribe_name_not_allowed`);default:return e(`store.purchase_failed`)}}debtText(t){return e(`store.pack_debt`,{debt:String(t)})}showInsufficient(t,n,r){this.insufficientInfo={currency:e(`cosmetics.hard`),shortfall:Math.max(1,n-r),item:t,canTopUp:!0}}renderLoginPrompt(){return h`<div
      class="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p class="text-white/60 font-medium">
        ${e(`store.tribes_login_required`)}
      </p>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        @click=${()=>window.showPage?.(`page-account`)}
      >
        ${e(`main.sign_in`)}
      </button>
    </div>`}renderPurchaseCard(){let t=this.price;return h`<section
      class="bg-surface rounded-xl border border-white/10 p-6 flex flex-col gap-3"
    >
      <h3 class="text-lg font-bold text-white">
        ${e(`store.tribes_purchase_heading`)}
      </h3>
      <p class="text-white/60 text-sm leading-relaxed">
        ${e(`store.tribes_purchase_description`)}
      </p>
      <form class="flex flex-col sm:flex-row gap-2" @submit=${this.submit}>
        <label for="tribe-name-input" class="sr-only"
          >${e(`store.tribe_name_placeholder`)}</label
        >
        <input
          id="tribe-name-input"
          type="text"
          maxlength=${be}
          placeholder=${e(`store.tribe_name_placeholder`)}
          class="flex-1 min-w-0 bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40"
          ?disabled=${this.purchasing}
        />
        <button
          type="submit"
          class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded px-4 py-2 whitespace-nowrap transition-colors cursor-pointer"
          ?disabled=${this.purchasing||t===null}
        >
          ${e(`store.purchase_tribe_button`)}
          ${t===null?``:h`<span class="flex items-center gap-1">
                  <plutonium-icon .size=${18}></plutonium-icon>${t}
                </span>`}
        </button>
      </form>
      ${this.notice?h`<p
              class="text-sm font-medium ${this.notice.kind===`success`?`text-green-400`:`text-red-400`}"
            >
              ${this.notice.text}
            </p>`:``}
    </section>`}renderBoostStatus(t){let n=t.activeBoosts??0;if(n===0)return C;let r=n===1?e(`store.tribe_boost_count`):e(`store.tribe_boost_count_plural`,{count:n}),i=t.boostExpiresAt?new Date(t.boostExpiresAt):null,a=i!==null&&!Number.isNaN(i.getTime())?i.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):null;return h`<span class="text-xs text-amber-300 mt-0.5">
      ${r}${a?h` ·
            ${e(`store.tribe_boost_next_expiry`,{date:a})}`:``}
    </span>`}renderBoostButton(t){let n=this.tribeNamesConfig;return n===null||H[t.status]!==`active`?C:h`<button
      class="shrink-0 flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      ?disabled=${this.boostingId!==null}
      @click=${()=>this.boost(t)}
    >
      ${e(`store.tribe_boost_button`)}
      <span class="flex items-center gap-0.5 normal-case">
        <plutonium-icon .size=${14}></plutonium-icon>${n.boostPriceHard}
      </span>
    </button>`}renderStatsButton(t){return H[t.status]===`active`?h`<button
      class="shrink-0 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      @click=${()=>this.statsName=t.displayName}
    >
      ${e(`store.tribe_stats_button`)}
    </button>`:C}renderTribeRow(t){let n=xe[H[t.status]];return h`<div
      class="flex items-center justify-between gap-3 bg-surface rounded-lg border border-white/10 px-4 py-3"
    >
      <div class="flex flex-col min-w-0">
        <span class="font-bold text-white truncate">${t.displayName}</span>
        ${this.renderBoostStatus(t)}
        ${t.reviewReason?h`<span class="text-xs text-white/50 mt-0.5"
                >${t.reviewReason}</span
              >`:``}
      </div>
      <div class="shrink-0 flex items-center gap-2">
        ${this.renderStatsButton(t)} ${this.renderBoostButton(t)}
        <span
          class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${n.classes}"
        >
          ${e(n.labelKey)}
        </span>
      </div>
    </div>`}renderList(){if(this.data===null)return O();if(this.data===!1)return h`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${e(`store.tribes_load_failed`)}
      </p>`;let t=[...this.data.names].sort((e,t)=>(t.activeBoosts??0)-(e.activeBoosts??0));return t.length===0?h`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${e(`store.no_tribes`)}
      </p>`:h`<div class="flex flex-col gap-2">
      ${t.map(e=>this.renderTribeRow(e))}
    </div>`}render(){return this.userMeResponse===!1?this.renderLoginPrompt():this.statsName===null?h`<div
      class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
    >
      ${this.renderPurchaseCard()}
      <section class="flex flex-col gap-3">
        <h3
          class="text-sm font-bold uppercase tracking-wider text-white/60 px-1"
        >
          ${e(`store.your_tribes_heading`)}
        </h3>
        ${this.boostNotice?h`<p
                class="text-sm font-medium px-1 ${this.boostNotice.kind===`success`?`text-green-400`:`text-red-400`}"
              >
                ${this.boostNotice.text}
              </p>`:``}
        ${this.renderList()}
      </section>
      <insufficient-currency-dialog
        .info=${this.insufficientInfo}
        @close=${()=>this.insufficientInfo=null}
      ></insufficient-currency-dialog>
    </div>`:h`<div
        class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
      >
        <tribe-stats-view
          .tribeName=${this.statsName}
          @back=${()=>this.statsName=null}
        ></tribe-stats-view>
      </div>`}};T([E({attribute:!1})],U.prototype,`userMeResponse`,void 0),T([S()],U.prototype,`data`,void 0),T([S()],U.prototype,`purchasing`,void 0),T([S()],U.prototype,`notice`,void 0),T([S()],U.prototype,`tribeNamesConfig`,void 0),T([S()],U.prototype,`boostingId`,void 0),T([S()],U.prototype,`boostNotice`,void 0),T([S()],U.prototype,`insufficientInfo`,void 0),T([S()],U.prototype,`statsName`,void 0),T([ie(`#tribe-name-input`)],U.prototype,`input`,void 0),U=V=T([_(`tribes-panel`)],U);var Se=1e3,W=.5,Ce=3e4,G=50,we=120;function K(e){if(!e.startsWith(`pattern:`))return e;let[,t]=e.split(`:`);return`pattern:${t}`}function Te(){return de()?`steam`:pe.isOnCrazyGames()?`crazygames`:`web`}function Ee(e){try{let t=u();fetch(`${ee()}/store/events`,{method:`POST`,keepalive:!0,headers:{"Content-Type":`application/json`,...t===``?{}:{Authorization:t}},body:JSON.stringify(e)}).catch(()=>{})}catch{}}var De=class{constructor(e={}){this.observer=null,this.watched=new Map,this.queue=[],this.seenImpressions=new Set,this.seenClicks=new Set,this.onPageHide=()=>this.flush(),this.onVisibility=()=>{if(document.visibilityState===`hidden`){for(let e of this.watched.values())this.stopTimer(e);this.flush();return}for(let e of this.watched.values())e.visible&&this.startTimer(e)},this.send=e.send??Ee,this.interval=setInterval(()=>this.flush(),Ce),window.addEventListener(`pagehide`,this.onPageHide),document.addEventListener(`visibilitychange`,this.onVisibility)}beginPageView(){this.seenImpressions.clear(),this.seenClicks.clear()}observe(e,t,n){let r=K(t),i=this.watched.get(e);i!==void 0&&i.item===r&&JSON.stringify(i.placement)===JSON.stringify(n)||(this.observer??=new IntersectionObserver(e=>this.onEntries(e),{threshold:W}),i!==void 0&&(this.stopTimer(i),this.observer.unobserve(e)),this.watched.set(e,{item:r,placement:n,timer:null,visible:!1}),this.observer.observe(e))}releaseDetached(){for(let[e,t]of this.watched)e.isConnected||(t.timer!==null&&clearTimeout(t.timer),this.observer?.unobserve(e),this.watched.delete(e))}onEntries(e){for(let t of e){let e=this.watched.get(t.target);e!==void 0&&(this.stopTimer(e),e.visible=t.isIntersecting&&t.intersectionRatio>=W,e.visible&&document.visibilityState!==`hidden`&&this.startTimer(e))}}startTimer(e){this.stopTimer(e),e.timer=setTimeout(()=>{e.timer=null,!this.seenImpressions.has(e.item)&&(this.seenImpressions.add(e.item),this.enqueue({type:`impression`,item:e.item,placement:e.placement}))},Se)}stopTimer(e){e.timer!==null&&(clearTimeout(e.timer),e.timer=null)}click(e,t){let n=K(e);this.seenClicks.has(n)||(this.seenClicks.add(n),this.enqueue({type:`click`,item:n,placement:t}))}enqueue(e){e.item.length>we||this.queue.push(e)}flush(){if(this.queue.length===0)return;let e=this.queue;this.queue=[];let t=Te();for(let n=0;n<e.length;n+=G)this.send({platform:t,events:e.slice(n,n+G)})}dispose(){this.flush(),clearInterval(this.interval),window.removeEventListener(`pagehide`,this.onPageHide),document.removeEventListener(`visibilitychange`,this.onVisibility);for(let e of this.watched.values())e.timer!==null&&clearTimeout(e.timer);this.watched.clear(),this.observer?.disconnect(),this.observer=null}},Oe=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`});function ke(e){return Oe.format(e/100)}function Ae(e){return ae.options.includes(e)}var je=[`new`,`sale`,`patterns`,`flags`,`crowns`];function q(e){return e.startsWith(`crown:`)?`crowns`:e.startsWith(`flag:`)?`flags`:`patterns`}var Me=15e3,Ne=8;function J(e){let t=Date.now();return(e?.promotions??[]).some(e=>new Date(e.endsAt).getTime()<=t)}function Y(e){return e.find(e=>e.some(e=>w(e.cosmetic)?.kind===`flash`))}function X(e){return e.some(e=>w(e.cosmetic)!==null)}function Z(e){return e.some(e=>r(e.cosmetic))}function Pe(e){return Math.max(...e.map(e=>D(e.cosmetic)??0))}function Fe(e){return e.map(e=>({group:e,until:Pe(e)})).sort((e,t)=>t.until-e.until).map(({group:e})=>e)}function Q(e){let t=Y(e),n=e.filter(e=>e!==t);return[...t?[t]:[],...n.filter(X),...n.filter(e=>!X(e))]}var $=class extends re{constructor(...e){super(...e),this.routerName=`store`,this.cosmetics=null,this.affiliateCode=null,this.userMeResponse=!1,this.authSettled=!1,this.cosmeticsSubTab=`patterns`,this.requestedItem=null,this.inspected=null,this.previewingCosmetic=null,this.visibleGroups=[],this.openedPack=null,this.pages=new ye(this),this.onUserMeEvent=e=>{let t=e;this.onUserMe(t.detail)},this.onOpenCosmeticPreview=e=>{let t=e,n=e.target;n?.closest?.(`pack-contents-dialog`)||this.trackClick(t.detail,n),this.previewingCosmetic=t.detail,this.requestUpdate()},this.rowObserver=null,this.saleEndTimer=null,this.saleEndAt=0,this.newEndTimer=null,this.newEndAt=0,this.saleRetryTimer=null,this.saleRefetchGeneration=0,this.catalogRequest=0,this.settledCatalogRequest=0,this.alignFrame=null,this.purchasablesCache=null,this.tracker=null}modalConfig(){return this.affiliateCode?{showScrollToTop:!0}:{showScrollToTop:!0,tabs:[{key:`packs`,label:e(`store.packs`)},{key:`subscriptions`,label:e(`store.subscriptions`)},{key:`bundles`,label:e(`store.bundles`)},{key:`cosmetics`,label:e(`store.cosmetics`)},{key:`effects`,label:e(`store.effects`)},{key:`tribes`,label:e(`store.tribes`)}]}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.onUserMeEvent);let e=b();e!==null&&this.onUserMe(e.response),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),typeof ResizeObserver<`u`&&(this.rowObserver??=new ResizeObserver(()=>N(this)),this.rowObserver.observe(this))}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.onUserMeEvent),this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),this.rowObserver?.disconnect(),this.tracker?.dispose(),this.tracker=null,this.alignFrame!==null&&cancelAnimationFrame(this.alignFrame),this.alignFrame=null,this.clearNewEnd(),super.disconnectedCallback()}updated(e){super.updated(e),this.observeProducts(),N(this),!(typeof requestAnimationFrame>`u`)&&(this.alignFrame??=requestAnimationFrame(()=>{this.alignFrame=null,N(this)}))}async onUserMe(e){this.userMeResponse=e,this.authSettled=!0,await this.loadCatalog(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}renderHeader(){let t=this.userMeResponse===!1?void 0:this.userMeResponse.player.currency;return A({title:e(`store.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`),rightContent:h`<div class="flex items-center gap-4">
        ${t?h`<currency-display
                .hard=${t.hard}
                .soft=${t.soft}
              ></currency-display>`:``}
        <not-logged-in-warning></not-logged-in-warning>
      </div>`})}resolvedPurchasables(){let e=[this.cosmetics,this.userMeResponse,this.affiliateCode],t=this.purchasablesCache;if(t&&t.inputs.every((t,n)=>t===e[n]))return t.items;let n=this.resolvePurchasables();return this.purchasablesCache={inputs:e,items:n},n}resolvePurchasables(){return x(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.relationship===`purchasable`)}cosmeticsGroups(e){let t=this.resolvedPurchasables(),n=k(t.filter(e=>e.type===`pattern`||e.type===`skin`)),r=t.filter(e=>e.type===`flag`).map(e=>[e]),i=t.filter(e=>e.type===`crown`).map(e=>[e]);if(e===`sale`||e===`new`){let a=t.filter(e=>e.type===`effect`||e.type===`cosmeticPack`).map(e=>[e]),o=[...n,...r,...i,...a];return e===`sale`?Q(o.filter(X)):Fe(o.filter(Z))}return Q(e===`flags`?r:e===`crowns`?i:n)}groupsForTab(e){if(this.affiliateCode)return k(this.resolvedPurchasables().filter(e=>{let t=e.cosmetic;return t!==null&&`affiliateCode`in t&&t.affiliateCode===this.affiliateCode}));if(e===`cosmetics`){let e=this.cosmeticsGroups(this.cosmeticsSubTab);return e.length===0&&(this.cosmeticsSubTab===`sale`||this.cosmeticsSubTab===`new`)&&this.cosmetics!==null&&this.settledCatalogRequest===this.catalogRequest?(this.cosmeticsSubTab=`patterns`,this.cosmeticsGroups(`patterns`)):e}return e===`effects`?this.resolvedPurchasables().filter(e=>e.type===`effect`).map(e=>[e]):e===`packs`?this.resolvedPurchasables().filter(e=>e.type===`pack`).map(e=>[e]):e===`bundles`?x(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`cosmeticPack`&&(e.relationship!==`blocked`||this.ownedPackItemNames(e).length>0)).map(e=>[e]):e===`subscriptions`?x(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`subscription`&&(e.relationship===`purchasable`||e.relationship===`owned`)).map(e=>[e]):[]}inspect(e){this.inspected=e,this.requestUpdate()}activate(e){this.trackClick(e,this.productFor(e)),e.type===`cosmeticPack`&&(this.openedPack=e),P(e)&&(this.previewingCosmetic=e),this.inspect(e)}placementFor(e){if(e.closest(`[data-store-flash]`))return{kind:`flash`};if(this.affiliateCode)return{kind:`affiliate`};let t=this.activeTab;if(Ae(t))return t===`cosmetics`?{kind:`tab`,tab:t,subTab:this.cosmeticsSubTab}:{kind:`tab`,tab:t}}observeProducts(){if(!(this.tracker===null||typeof IntersectionObserver>`u`)){this.tracker.releaseDetached();for(let e of this.querySelectorAll(`[data-store-product][data-cosmetic-key]`)){let t=e.dataset.cosmeticKey,n=this.placementFor(e);t&&n&&this.tracker.observe(e,t,n)}}}productFor(e){for(let t of this.querySelectorAll(`[data-store-product][data-cosmetic-key]`)){let n=t;if(t.dataset.cosmeticKey===e.key||n.resolved?.key===e.key||n.variants?.some(t=>t.key===e.key))return t}return null}trackClick(e,t){try{let n=this.placementFor(t??this);n&&this.tracker?.click(e.key,n)}catch{}}closePack(){this.openedPack=null,this.requestUpdate()}reconcileInspection(e){let t=e.flat(),n=this.requestedItem;if(n!==null){let e=t.find(e=>ve(e.key,n));if(e!==void 0){this.requestedItem=null,this.inspected=e;return}}let r=t.find(e=>e.key===this.inspected?.key);this.inspected=r??e[0]?.[0]??null}selectVisible(e){this.visibleGroups=e,this.reconcileInspection(e)}onTabEnter(e){this.selectVisible(this.groupsForTab(e)),this.requestUpdate()}visibleCosmeticsSubTabs(){let e=this.cosmeticsGroups(`new`).length>0,t=this.cosmeticsGroups(`sale`).length>0;return je.filter(n=>n===this.cosmeticsSubTab||(n!==`new`||e)&&(n!==`sale`||t))}setCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.selectVisible(this.cosmeticsGroups(e)),this.requestUpdate()}ownedPackItemNames(e){return m(e.cosmetic,this.userMeResponse).map(t=>{let n=me(t,e.packItems??[]);return n?M(n):t.name})}renderStatus(e,t=!1){return h`<span
      data-store-status
      class="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-1.5 text-center font-bold ${t?`border-white/15 bg-white/5 text-xs text-white/60`:`border-emerald-500/40 bg-emerald-500/15 text-base text-emerald-300`}"
      >${e}</span
    >`}renderCardAction(t,n){if(t.type===`subscription`&&t.relationship===`owned`)return this.renderStatus(e(`store.subscribed`));if(t.type===`cosmeticPack`){if(t.relationship===`owned`)return this.renderStatus(e(`store.pack_owned`));if(t.relationship===`blocked`)return this.renderStatus(e(`store.pack_partially_owned`,{items:this.ownedPackItemNames(t).join(`, `)}),!0)}return this.renderPurchaseAction(t,n)}renderCosmeticCards(e=this.visibleGroups,t=!1,n=`block h-full min-w-0`,r=`card`,i=!0){return h`${e.map(e=>{let a=e.find(e=>e.key===this.inspected?.key),o=a??e[0],s=i?this.renderCardAction(o,t):C;return h`<cosmetic-card
        data-store-product
        data-cosmetic-key=${e[0].key}
        class=${n}
        previewSize=${r}
        showNewBadge
        .resolved=${e[0]}
        .variants=${e.length>1||e[0].type===`pattern`||e[0].type===`skin`?e:[]}
        .activeVariantKey=${o.key}
        .actionContent=${s}
        state=${a?`focused`:`idle`}
        .onActivate=${e=>this.activate(e)}
        .onVariantActivate=${e=>this.inspect(e)}
      ></cosmetic-card>`})}`}renderPurchaseAction(t,n){let r=t.cosmetic,i=t.relationship===`purchasable`,a=i&&(t.type===`pack`||t.type===`subscription`)?r?.product??null:null,c=i&&t.type===`subscription`&&a===null?ke(t.cosmetic.priceMonthly):``,l=r!==null&&oe(r),u=i&&r?y(r,`hard`):void 0,d=i&&r?y(r,`soft`):void 0,f=()=>{try{return this.placementFor(this.productFor(t)??this)}catch{return}},p=e=>o(t,e,f()),m=t.type===`pack`&&a!==null&&r?.name!==void 0?s(a.price):null;return h`<purchase-button
      .product=${a}
      .dollarPrice=${c}
      .inlineCheckout=${m===null?null:{request:{kind:`currency_pack`,packName:r.name},amountCents:m,successMessageKey:`store.currency_pack_purchase_success`,placement:f}}
      .priceHard=${u??null}
      .priceSoft=${d??null}
      .listPriceHard=${u!==void 0&&!l?r?.listPriceHard??null:null}
      .listPriceSoft=${d!==void 0&&!l?r?.listPriceSoft??null:null}
      .rarity=${r?.rarity??`common`}
      .itemName=${M(t)}
      .dollarLabelKey=${t.type===`subscription`&&n?`store.switch_button`:``}
      .priceSuffix=${t.type===`subscription`?e(`store.price_per_month`):``}
      .onPurchaseDollar=${a||c?()=>p(`dollar`):void 0}
      .onPurchaseHard=${u===void 0?void 0:()=>p(`hard`)}
      .onPurchaseSoft=${d===void 0?void 0:()=>p(`soft`)}
    ></purchase-button>`}renderBrowserLayout(e,t=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`){return h`<div data-store-browser class="grid grid-cols-1 gap-4 p-3">
      <div data-store-grid class=${t}>${e}</div>
    </div>`}renderBrowser(t,n){let r=this.pages.page(`store-grid`,`${this.affiliateCode??``}:${this.activeTab}:${this.cosmeticsSubTab}`,t),i=t.length===0?n.trailingContent?h``:h`<div
              class=${`${n.emptyClass??`col-span-full`} py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`}
            >
              ${e(n.emptyTranslationKey)}
            </div>`:this.renderCosmeticCards(r.items,n.userHasSubscription,n.cardClass,n.previewSize);return this.renderBrowserLayout(h`${i}${r.more}${n.trailingContent??``}`,n.gridClass)}renderCosmeticsPanel(){let t=this.visibleCosmeticsSubTabs(),n=this.cosmeticsSubTab===`sale`?Y(this.visibleGroups):void 0,r=this.cosmeticsSubTab===`flags`?`store.no_flags`:this.cosmeticsSubTab===`crowns`?`store.no_crowns`:this.cosmeticsSubTab===`new`?`store.no_new_items`:this.cosmeticsSubTab===`sale`?`store.no_sale_items`:`store.no_skins`;return h`
      <div
        class="flex flex-nowrap items-center gap-6 overflow-x-auto border-b border-white/10 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>button:first-of-type]:ms-auto [&>button:last-of-type]:me-auto"
      >
        ${t.map(t=>h`<button
            data-store-subtab=${t}
            class="-mb-px flex items-center gap-1.5 shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.cosmeticsSubTab===t?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.setCosmeticsSubTab(t)}
          >
            ${t===`sale`?h`<span
                    class="h-2 w-2 rounded-full bg-aquarius shadow-[0_0_6px_var(--color-aquarius)]"
                    aria-hidden="true"
                  ></span>`:C}${e(t===`sale`?`store.on_sale`:t===`new`?`store.new_tab`:`store.${t}`)}
          </button>`)}
      </div>
      ${n?h`${this.renderFlashHero(n)}
            ${(()=>{let e=this.visibleGroups.filter(e=>e!==n);return e.length>0?this.renderBrowser(e,{emptyTranslationKey:r}):C})()}`:this.renderBrowser(this.visibleGroups,{emptyTranslationKey:r})}
      ${this.renderPackDialog()}
    `}renderFlashHero(t){let n=t.map(e=>w(e.cosmetic)).find(e=>e!==null);if(!n)return h``;let r=t.find(e=>e.key===this.inspected?.key)??t[0];return h`<section
      data-store-flash
      class="mx-3 mt-3 flex flex-col items-center gap-4 rounded-xl border border-aquarius/50 bg-gradient-to-br from-deep-navy via-deep-navy to-malibu-blue/50 p-4 shadow-[0_0_28px_rgba(63,169,245,0.25)] sm:flex-row sm:items-stretch"
    >
      <div class="w-44 shrink-0 sm:w-52">
        ${this.renderCosmeticCards([t],!1,void 0,`card`,!1)}
      </div>
      <div
        class="flex flex-1 flex-col items-center justify-center gap-3 text-center sm:items-start sm:text-left"
      >
        <span
          class="flex items-center gap-1.5 text-sm font-black uppercase tracking-widest text-aquarius"
        >
          ${e(`store.flash_sale`)}
        </span>
        <span class="text-2xl font-black leading-tight text-white"
          >${e(`store.flash_sale_hero_title`,{name:M(t[0]),percent:n.percentOff})}</span
        >
        <span class="max-w-sm text-sm text-dawn-blue"
          >${e(`store.flash_sale_hero_body`)}</span
        >
        <!-- The price, and the way to pay it, beside the offer at full size
             rather than small on the card: the card above carries none. -->
        <div
          data-store-flash-buy
          class="w-full max-w-xs [&_button]:min-h-14 [&_button]:text-2xl [&_s]:text-base [&_s]:text-white/75"
        >
          ${this.renderCardAction(r,!1)}
        </div>
        <span
          class="flex items-baseline gap-2 rounded-lg bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-wider text-dawn-blue"
        >
          ${e(`store.flash_ends_in`)}
          <sale-countdown
            class="text-2xl font-black normal-case tracking-normal tabular-nums text-white"
            format="clock"
            .endsAt=${n.endsAt}
          ></sale-countdown>
        </span>
      </div>
    </section>`}renderEffectGrid(){return h`<effects-grid
      mode="purchase"
      tabbed
      .cosmetics=${this.cosmetics}
      .userMeResponse=${this.userMeResponse}
      .affiliateCode=${this.affiliateCode}
      .focusedKey=${this.inspected?.key??null}
      .onPurchaseFocus=${e=>this.activate(e)}
      .renderPurchaseAction=${e=>this.renderPurchaseAction(e,!1)}
      .onVisiblePurchaseItemsChange=${e=>{this.selectVisible(e.map(e=>[e])),this.requestUpdate()}}
    ></effects-grid>`}renderPackGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_packs`,trailingContent:h`<custom-currency-card
        class="block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48"
      ></custom-currency-card>`,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderBundleGrid(){return h`${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_bundles`})}${this.renderPackDialog()}`}renderPackDialog(){return!this.openedPack||this.previewingCosmetic?``:h`<pack-contents-dialog
      .pack=${this.openedPack}
      .actionContent=${this.renderCardAction(this.openedPack,!1)}
      @close=${()=>this.closePack()}
    ></pack-contents-dialog>`}renderSubscriptionGrid(){let e=this.userMeResponse!==!1&&i(this.userMeResponse.player)!==null,t=this.visibleGroups.length===1;return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_subscriptions`,userHasSubscription:e,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:t?`block w-full max-w-xs shrink-0`:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,previewSize:t?`detail`:`card`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderSaleBanner(){let e=fe(this.cosmetics);return this.scheduleSaleEnd(e),this.scheduleNewEnd(),e.length===0?``:h`<sale-banner
      class="block px-3 pt-2"
      .sales=${e}
      .cosmetics=${this.cosmetics}
      @open-sale=${()=>this.openSaleTab()}
    ></sale-banner>`}openSaleTab(){this.cosmeticsSubTab=`sale`,this.activeTab===`cosmetics`?this.setCosmeticsSubTab(`sale`):this.setActiveTab(`cosmetics`)}scheduleSaleEnd(e){let t=Date.now(),n=this.saleEndTimer!==null&&this.saleEndAt<=t;if(this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,!this.isModalOpen||!n&&e.length===0)return;let r=n?t:Math.min(...e.map(e=>new Date(e.endsAt).getTime()));this.saleEndAt=r;let i=Math.min(Math.max(r-t,0),2**31-1);this.saleEndTimer=setTimeout(()=>{this.saleEndTimer=null,this.refetchAfterSaleEnd(0)},i)}scheduleNewEnd(){let e=Date.now(),t=this.newEndTimer!==null&&this.newEndAt<=e||this.activeTab===`cosmetics`&&this.cosmeticsSubTab===`new`&&this.affiliateCode===null&&this.visibleGroups.some(e=>!Z(e));if(!this.isModalOpen){this.clearNewEnd();return}let n=this.resolvedPurchasables().flatMap(t=>{let n=D(t.cosmetic);return n!==null&&n>e?[n]:[]});if(!t&&n.length===0){this.clearNewEnd();return}let r=t?0:Math.min(Math.min(...n)-e,2**31-1);!t&&this.newEndTimer!==null&&this.newEndAt===e+r||(this.clearNewEnd(),this.newEndAt=e+r,this.newEndTimer=setTimeout(()=>{this.newEndTimer=null,this.activeTab===`cosmetics`&&this.affiliateCode===null&&this.selectVisible(this.groupsForTab(this.activeTab));for(let e of this.querySelectorAll(`cosmetic-card`))e.requestUpdate();this.requestUpdate()},r))}clearNewEnd(){this.newEndTimer!==null&&clearTimeout(this.newEndTimer),this.newEndTimer=null}async loadCatalog(){let e=++this.catalogRequest;try{return await this.fetchCatalog(e)}finally{e===this.catalogRequest&&(this.settledCatalogRequest=e)}}async fetchCatalog(e){let t=await g();return e===this.catalogRequest&&(this.cosmetics=t??this.cosmetics),t}async refetchAfterSaleEnd(e){let t=this.saleRefetchGeneration;f();let n=await this.loadCatalog();!this.isModalOpen||t!==this.saleRefetchGeneration||(this.selectVisible(this.groupsForTab(this.activeTab)),this.requestUpdate(),(n===null||J(this.cosmetics))&&e<Ne&&(this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=setTimeout(()=>{this.saleRetryTimer=null,this.refetchAfterSaleEnd(e+1)},Me)))}renderHeaderSlot(){return h`${this.renderHeader()} ${this.renderSaleBanner()}
    ${this.previewingCosmetic?h`<cosmetic-preview-modal
            .resolved=${this.previewingCosmetic}
            @close-preview=${()=>{this.previewingCosmetic=null,this.requestUpdate()}}
          ></cosmetic-preview-modal>`:``}`}renderBody(e){if(this.affiliateCode)return this.renderAffiliateGrid();switch(e){case`cosmetics`:return this.renderCosmeticsPanel();case`bundles`:return this.renderBundleGrid();case`effects`:return this.renderEffectGrid();case`subscriptions`:return this.renderSubscriptionGrid();case`tribes`:return this.renderTribeGrid();default:return this.renderPackGrid()}}renderTribeGrid(){return this.authSettled?h`<tribes-panel
      .userMeResponse=${this.userMeResponse}
    ></tribes-panel>`:h``}renderAffiliateGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_affiliate_items`})}async onOpen(e){this.tracker??=new De,this.tracker.beginPageView(),d();let t=typeof e?.affiliateCode==`string`?e.affiliateCode:null;this.affiliateCode=t,this.requestedItem=typeof e?.item==`string`?e.item:null,this.requestedItem!==null&&(this.cosmeticsSubTab=q(this.requestedItem)),(e?.sub===`sale`||e?.sub===`new`)&&(this.cosmeticsSubTab=e.sub),(l()||this.cosmetics===null)&&await this.loadCatalog(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh(),J(this.cosmetics)&&this.refetchAfterSaleEnd(0)}onClose(){this.tracker?.flush(),this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,this.clearNewEnd(),this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=null,this.saleRefetchGeneration++;for(let e of this.querySelectorAll(`inline-checkout`))e.closeCardModal();this.affiliateCode=null,this.openedPack=null,this.previewingCosmetic=null,this.pages.reset(),this.requestedItem=null,this.selectVisible(this.groupsForTab(this.activeTab))}async refresh(){this.requestUpdate()}};T([S()],$.prototype,`authSettled`,void 0),$=T([_(`store-modal`)],$);export{$ as StoreModal,se as saleCoversEverything,Q as saleFirst,q as subTabForItem};