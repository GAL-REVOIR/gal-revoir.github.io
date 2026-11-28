import{Br as e,Cn as t,Cr as n,Da as r,Do as i,Dr as a,Er as o,Fr as s,Hr as c,Mn as l,Mr as u,Nr as d,Oa as f,Or as p,Os as ee,Sn as m,Sr as te,Tr as h,Ur as ne,Vr as re,_i as g,_r as _,a as ie,aa as ae,br as v,bs as oe,di as y,do as se,fi as ce,gi as b,hi as x,i as le,ja as ue,jr as de,ka as fe,kr as pe,li as me,mi as S,n as he,ni as ge,oa as _e,pi as C,qa as ve,r as ye,ra as w,t as be,ui as xe,vi as T,wa as Se,wn as E,xi as D,xr as Ce,xs as we,yr as Te}from"./index-hx7tETuk.js";import"./PlutoniumIcon-82UaOhgZ.js";import"./CurrencyDisplay-BjVnYx0i.js";import{t as Ee}from"./LeaderboardTribeTable-C9hZH7p7.js";import{c as O,l as De}from"./CosmeticPreview-D1-wZzpj.js";import{r as Oe,t as k}from"./PurchaseButton-C53gRWfR.js";import{t as A}from"./CosmeticCard-Bk6bZXjx.js";import"./InsufficientCurrencyDialog-DxsvwBE2.js";import{t as ke}from"./EffectsGrid-_3eZlFRF.js";var j=20,M=2e3,N=class extends b{constructor(...e){super(...e),this.amount=100,this.buy=async()=>{let e=re(await ne({kind:`custom_currency`,hardAmount:this.amount}),`store.custom_currency_purchase_success`);e!==null&&await me(e)}}createRenderRoot(){return this}clamp(e){return Number.isFinite(e)?Math.min(M,Math.max(j,Math.floor(e))):j}get priceDollars(){return(this.amount/20).toFixed(2)}onSlider(e){this.amount=this.clamp(Number(e.target.value))}onInputChange(e){this.amount=this.clamp(Number(e.target.value))}render(){let e=`$${this.priceDollars}`;return D`
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
          >${w(`store.custom_amount`)}</span
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
              >${w(`store.plutonium_amount`)}</label
            >
            <input
              id="custom-plutonium-amount"
              type="number"
              class="custom-plutonium-input w-full min-w-0 max-w-24 text-center bg-black/30 border border-green-500/30 rounded px-1 py-0.5 text-lg font-black leading-none text-green-400 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/40"
              aria-label=${w(`store.plutonium_amount`)}
              min=${j}
              max=${M}
              step="1"
              .value=${String(this.amount)}
              @change=${this.onInputChange}
            />
            <span
              class="text-[10px] font-bold leading-none text-white/50 uppercase"
              >${w(`cosmetics.hard`)}</span
            >
            <span
              data-custom-currency-price
              class="pt-0.5 text-sm font-bold leading-none text-blue-300"
              >${e}</span
            >
          </div>

          <input
            type="range"
            class="w-full accent-green-500 cursor-pointer"
            aria-label=${w(`store.plutonium_amount`)}
            min=${j}
            max=${M}
            step="1"
            .value=${String(this.amount)}
            @input=${this.onSlider}
          />
        </div>

        <div data-cosmetic-action class="mt-auto w-full px-3 pb-3 pt-2">
          <purchase-button
            class="block w-full"
            .dollarPrice=${e}
            .onPurchaseDollar=${this.buy}
            .inlineCheckout=${{request:{kind:`custom_currency`,hardAmount:this.amount},amountCents:this.amount*5,successMessageKey:`store.custom_currency_purchase_success`}}
          ></purchase-button>
        </div>
      </article>
    `}};y([C()],N.prototype,`amount`,void 0),N=y([x(`custom-currency-card`)],N);var P=class extends b{constructor(...e){super(...e),this.linked=null,this._onUserMe=e=>{this.linked=i(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe);let e=l();e!==null&&(this.linked=i(e.response))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe)}render(){return this.linked===!1?D`<div class="no-game-portal flex items-center">
      <button
        class="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 cursor-pointer hover:bg-red-500/30"
        data-i18n="common.not_logged_in"
        @click=${()=>{window.showPage?.(`page-account`)}}
      >
        ${w(`common.not_logged_in`)}
      </button>
    </div>`:D``}};y([C()],P.prototype,`linked`,void 0),P=y([x(`not-logged-in-warning`)],P);var F=class extends b{constructor(...e){super(...e),this.pack=null,this.actionContent=T,this.portal=null,this.onKeyDown=e=>{e.key===`Escape`&&this.close()},this.relayPreview=e=>{e.stopPropagation(),this.openPreview(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown)}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown),this.portal&&=(g(D``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent(`close`))}openPreview(e){A(e)&&this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:e}))}render(){return this.portal&&g(this.pack?this.renderOverlay(this.pack):D``,this.portal),D``}renderOverlay(e){let t=e.cosmetic,n=e.packItems??[];return D`<div
      class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
      @click=${e=>{e.target===e.currentTarget&&this.close()}}
      @open-cosmetic-preview=${this.relayPreview}
    >
      <div
        data-pack-contents
        role="dialog"
        aria-label=${t.displayName}
        class="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl"
      >
        <button
          type="button"
          aria-label=${w(`common.close`)}
          @click=${()=>this.close()}
          class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <h2 class="mb-1 pr-8 text-lg font-bold text-white">
          ${t.displayName}
        </h2>
        ${t.description?D`<p class="mb-4 text-sm text-white/60">
                ${t.description}
              </p>`:D`<div class="mb-4"></div>`}
        ${n.length===0?D`<p class="py-6 text-center text-sm text-white/50">
                ${w(`store.pack_no_items`)}
              </p>`:D`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                ${n.map(e=>D`<div
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
                        >${De(e)}</span
                      >
                    </div>`)}
              </div>`}
        ${this.actionContent===T?T:D`<div data-pack-contents-action class="mx-auto mt-4 max-w-xs">
                ${this.actionContent}
              </div>`}
      </div>
    </div>`}};y([S({attribute:!1})],F.prototype,`pack`,void 0),y([S({attribute:!1})],F.prototype,`actionContent`,void 0),F=y([x(`pack-contents-dialog`)],F);var I=class extends b{constructor(...e){super(...e),this.tribeName=``,this.stats=null,this.loadSeq=0}createRenderRoot(){return this}updated(e){e.has(`tribeName`)&&this.tribeName!==``&&this.load(this.tribeName)}async load(e){let t=++this.loadSeq;this.stats=null;let n=await Se(e);t===this.loadSeq&&(this.stats=n)}renderFigures(e){return D`<div class="grid grid-cols-2 gap-2">
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${w(`store.tribe_stats_games`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.gamesAppeared.toLocaleString()}
        </span>
      </div>
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
        title=${w(`leaderboard_modal.tribes_reach_value_tooltip`,{count:e.playerReach.toLocaleString()})}
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${w(`leaderboard_modal.tribes_reach`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.playerReach.toLocaleString()}
        </span>
      </div>
    </div>`}renderStats(e){let t=Ee(e.window.start),n=Ee(e.window.end),r=t!==null&&n!==null?w(`store.tribe_stats_window`,{days:e.window.days,start:t,end:n}):w(`store.tribe_stats_window_short`,{days:e.window.days});return D`<div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm">
        <span class="text-white/40 font-medium">
          ${w(`store.tribe_stats_owner`)}
        </span>
        <player-name
          class="min-w-0"
          .username=${e.ownerUsername}
          .publicId=${e.ownerPublicId}
        ></player-name>
      </div>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${r}
        </h3>
        ${this.renderFigures(e.window)}
      </section>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${w(`store.tribe_stats_lifetime`)}
        </h3>
        ${this.renderFigures(e.lifetime)}
      </section>
    </div>`}renderBody(){return this.stats===null?E():this.stats===!1?D`<p class="text-sm font-medium text-red-400">
        ${w(`store.tribe_stats_failed`)}
      </p>`:this.renderStats(this.stats)}renderBoostedBadge(){if(this.stats===null||this.stats===!1)return T;let e=this.stats.activeBoosts;return e===0?T:D`<span
      class="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5"
    >
      ${w(`store.tribe_stats_boosted`,{multiplier:e+1})}
    </span>`}render(){return D`<div class="flex flex-col gap-4">
      ${m({titleContent:D`<span
          class="text-white text-xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
        >
          ${this.stats!==null&&this.stats!==!1?this.stats.name:this.tribeName} ${this.renderBoostedBadge()}
        </span>`,onBack:()=>this.dispatchEvent(new CustomEvent(`back`)),ariaLabel:w(`common.back`),padded:!1,showDivider:!1})}
      ${this.renderBody()}
    </div>`}};y([S({attribute:!1})],I.prototype,`tribeName`,void 0),y([C()],I.prototype,`stats`,void 0),I=y([x(`tribe-stats-view`)],I);var L,Ae=100,R={pending:`active`,live:`active`,rejected:`rejected`,revoked:`rejected`},je={active:{labelKey:`store.tribe_status_active`,classes:`bg-green-500/20 text-green-300 border-green-500/30`},rejected:{labelKey:`store.tribe_status_rejected`,classes:`bg-red-500/20 text-red-300 border-red-500/30`}},z=L=class extends b{constructor(...e){super(...e),this.userMeResponse=!1,this.data=null,this.purchasing=!1,this.notice=null,this.tribeNamesConfig=null,this.boostingId=null,this.boostNotice=null,this.insufficientInfo=null,this.statsName=null,this.loadStarted=!1,this.submit=async e=>{if(e.preventDefault(),this.purchasing)return;let t=this.input?.value.trim()??``;if(t.length===0){this.notice={kind:`error`,text:w(`store.tribe_name_required`)};return}if(this.hardBalance<0){this.notice={kind:`error`,text:this.debtText(-this.hardBalance)};return}this.purchasing=!0,this.notice=null;let n=await ue(t);if(this.purchasing=!1,n.ok){this.input&&(this.input.value=``),this.notice={kind:`success`,text:w(`store.tribe_purchase_live`,{name:n.data.displayName})},await this.refreshAfterPurchase();return}if(n.code===`debt`){this.notice={kind:`error`,text:w(`store.pack_debt`,{debt:n.debt})},await this.refreshAfterPurchase();return}if(n.code===`insufficient_balance`){let e=await this.refreshAfterPurchase(),n=this.price;if(n===null||e===!1){this.notice={kind:`error`,text:w(`store.purchase_failed`)};return}let r=L.hardBalanceOf(e),i=L.balanceOutcome(r,n);if(i!==`shortfall`){this.notice={kind:`error`,text:i===`debt`?this.debtText(-r):w(`store.purchase_failed`)};return}this.showInsufficient(t,n,r);return}if(n.code===`duplicate`){this.notice={kind:`error`,text:w(`store.tribe_duplicate`)};return}if(n.code===`rate_limited`){let e=n.retryAfterSeconds;this.notice={kind:`error`,text:e&&e>0?w(`store.tribe_rate_limited`,{seconds:e}):w(`store.purchase_failed`)};return}this.notice={kind:`error`,text:L.refusalText(n)}},this.boost=async e=>{let t=this.tribeNamesConfig;if(t===null||this.boostingId!==null)return;let n=t.boostPriceHard;if(this.hardBalance<0){this.boostNotice={kind:`error`,text:this.debtText(-this.hardBalance)};return}if(this.hardBalance<n){this.showInsufficient(e.displayName,n,this.hardBalance);return}if(!await xe(w(`store.tribe_boost_confirm`,{name:e.displayName,price:n,days:t.boostDurationDays}),{heading:w(`store.tribe_boost_heading`),variant:`warning`}))return;this.boostingId=e.id,this.boostNotice=null;let r=await _e(e.id,crypto.randomUUID());if(this.boostingId=null,r.ok){this.boostNotice={kind:`success`,text:w(`store.tribe_boost_success`,{name:e.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.boostNotice={kind:`error`,text:w(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let t=await this.refreshAfterPurchase();if(t===!1){this.boostNotice={kind:`error`,text:w(`store.tribe_boost_failed`)};return}let r=L.hardBalanceOf(t),i=L.balanceOutcome(r,n);if(i!==`shortfall`){this.boostNotice={kind:`error`,text:i===`debt`?this.debtText(-r):w(`store.tribe_boost_failed`)};return}this.showInsufficient(e.displayName,n,r);return}if(r.code===`not_found`){this.boostNotice={kind:`error`,text:w(`store.tribe_boost_gone`)},await this.load();return}this.boostNotice={kind:`error`,text:w(`store.tribe_boost_failed`)}}}createRenderRoot(){return this}updated(){!this.loadStarted&&this.userMeResponse!==!1&&(this.loadStarted=!0,this.load())}async load(){let[e,t]=await Promise.all([r(),Ce()]);this.data=e,this.tribeNamesConfig=t?.tribeNames??null}get price(){return this.tribeNamesConfig?.priceHard??null}get hardBalance(){return this.userMeResponse===!1?0:this.userMeResponse.player.currency?.hard??0}async refreshAfterPurchase(){await this.load(),fe();let e=await f();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}static hardBalanceOf(e){return e===!1?0:e.player.currency?.hard??0}static balanceOutcome(e,t){return e<0?`debt`:t-e<=0?`unexplained`:`shortfall`}static refusalText(e){switch(e.code){case`length`:return w(`store.tribe_name_length`,{min:e.min,max:e.max});case`invalid_charset`:return w(`store.tribe_name_charset`);case`invalid_no_letter`:return w(`store.tribe_name_no_letter`);case`not_allowed`:return w(`store.tribe_name_not_allowed`);default:return w(`store.purchase_failed`)}}debtText(e){return w(`store.pack_debt`,{debt:String(e)})}showInsufficient(e,t,n){this.insufficientInfo={currency:w(`cosmetics.hard`),shortfall:Math.max(1,t-n),item:e,canTopUp:!0}}renderLoginPrompt(){return D`<div
      class="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p class="text-white/60 font-medium">
        ${w(`store.tribes_login_required`)}
      </p>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        @click=${()=>window.showPage?.(`page-account`)}
      >
        ${w(`main.sign_in`)}
      </button>
    </div>`}renderPurchaseCard(){let e=this.price;return D`<section
      class="bg-surface rounded-xl border border-white/10 p-6 flex flex-col gap-3"
    >
      <h3 class="text-lg font-bold text-white">
        ${w(`store.tribes_purchase_heading`)}
      </h3>
      <p class="text-white/60 text-sm leading-relaxed">
        ${w(`store.tribes_purchase_description`)}
      </p>
      <form class="flex flex-col sm:flex-row gap-2" @submit=${this.submit}>
        <label for="tribe-name-input" class="sr-only"
          >${w(`store.tribe_name_placeholder`)}</label
        >
        <input
          id="tribe-name-input"
          type="text"
          maxlength=${Ae}
          placeholder=${w(`store.tribe_name_placeholder`)}
          class="flex-1 min-w-0 bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40"
          ?disabled=${this.purchasing}
        />
        <button
          type="submit"
          class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded px-4 py-2 whitespace-nowrap transition-colors cursor-pointer"
          ?disabled=${this.purchasing||e===null}
        >
          ${w(`store.purchase_tribe_button`)}
          ${e===null?``:D`<span class="flex items-center gap-1">
                  <plutonium-icon .size=${18}></plutonium-icon>${e}
                </span>`}
        </button>
      </form>
      ${this.notice?D`<p
              class="text-sm font-medium ${this.notice.kind===`success`?`text-green-400`:`text-red-400`}"
            >
              ${this.notice.text}
            </p>`:``}
    </section>`}renderBoostStatus(e){let t=e.activeBoosts??0;if(t===0)return T;let n=t===1?w(`store.tribe_boost_count`):w(`store.tribe_boost_count_plural`,{count:t}),r=e.boostExpiresAt?new Date(e.boostExpiresAt):null,i=r!==null&&!Number.isNaN(r.getTime())?r.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):null;return D`<span class="text-xs text-amber-300 mt-0.5">
      ${n}${i?D` ·
            ${w(`store.tribe_boost_next_expiry`,{date:i})}`:``}
    </span>`}renderBoostButton(e){let t=this.tribeNamesConfig;return t===null||R[e.status]!==`active`?T:D`<button
      class="shrink-0 flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      ?disabled=${this.boostingId!==null}
      @click=${()=>this.boost(e)}
    >
      ${w(`store.tribe_boost_button`)}
      <span class="flex items-center gap-0.5 normal-case">
        <plutonium-icon .size=${14}></plutonium-icon>${t.boostPriceHard}
      </span>
    </button>`}renderStatsButton(e){return R[e.status]===`active`?D`<button
      class="shrink-0 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      @click=${()=>this.statsName=e.displayName}
    >
      ${w(`store.tribe_stats_button`)}
    </button>`:T}renderTribeRow(e){let t=je[R[e.status]];return D`<div
      class="flex items-center justify-between gap-3 bg-surface rounded-lg border border-white/10 px-4 py-3"
    >
      <div class="flex flex-col min-w-0">
        <span class="font-bold text-white truncate">${e.displayName}</span>
        ${this.renderBoostStatus(e)}
        ${e.reviewReason?D`<span class="text-xs text-white/50 mt-0.5"
                >${e.reviewReason}</span
              >`:``}
      </div>
      <div class="shrink-0 flex items-center gap-2">
        ${this.renderStatsButton(e)} ${this.renderBoostButton(e)}
        <span
          class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${t.classes}"
        >
          ${w(t.labelKey)}
        </span>
      </div>
    </div>`}renderList(){if(this.data===null)return E();if(this.data===!1)return D`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${w(`store.tribes_load_failed`)}
      </p>`;let e=[...this.data.names].sort((e,t)=>(t.activeBoosts??0)-(e.activeBoosts??0));return e.length===0?D`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${w(`store.no_tribes`)}
      </p>`:D`<div class="flex flex-col gap-2">
      ${e.map(e=>this.renderTribeRow(e))}
    </div>`}render(){return this.userMeResponse===!1?this.renderLoginPrompt():this.statsName===null?D`<div
      class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
    >
      ${this.renderPurchaseCard()}
      <section class="flex flex-col gap-3">
        <h3
          class="text-sm font-bold uppercase tracking-wider text-white/60 px-1"
        >
          ${w(`store.your_tribes_heading`)}
        </h3>
        ${this.boostNotice?D`<p
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
    </div>`:D`<div
        class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
      >
        <tribe-stats-view
          .tribeName=${this.statsName}
          @back=${()=>this.statsName=null}
        ></tribe-stats-view>
      </div>`}};y([S({attribute:!1})],z.prototype,`userMeResponse`,void 0),y([C()],z.prototype,`data`,void 0),y([C()],z.prototype,`purchasing`,void 0),y([C()],z.prototype,`notice`,void 0),y([C()],z.prototype,`tribeNamesConfig`,void 0),y([C()],z.prototype,`boostingId`,void 0),y([C()],z.prototype,`boostNotice`,void 0),y([C()],z.prototype,`insufficientInfo`,void 0),y([C()],z.prototype,`statsName`,void 0),y([ce(`#tribe-name-input`)],z.prototype,`input`,void 0),z=L=y([x(`tribes-panel`)],z);var Me=1e3,B=.5,Ne=3e4,V=50,Pe=120;function H(e){if(!e.startsWith(`pattern:`))return e;let[,t]=e.split(`:`);return`pattern:${t}`}function Fe(){return se()?`steam`:ae.isOnCrazyGames()?`crazygames`:`web`}function Ie(e){try{let t=ge();fetch(`${ve()}/store/events`,{method:`POST`,keepalive:!0,headers:{"Content-Type":`application/json`,...t===``?{}:{Authorization:t}},body:JSON.stringify(e)}).catch(()=>{})}catch{}}var Le=class{constructor(e={}){this.observer=null,this.watched=new Map,this.queue=[],this.seenImpressions=new Set,this.seenClicks=new Set,this.onPageHide=()=>this.flush(),this.onVisibility=()=>{if(document.visibilityState===`hidden`){for(let e of this.watched.values())this.stopTimer(e);this.flush();return}for(let e of this.watched.values())e.visible&&this.startTimer(e)},this.send=e.send??Ie,this.interval=setInterval(()=>this.flush(),Ne),window.addEventListener(`pagehide`,this.onPageHide),document.addEventListener(`visibilitychange`,this.onVisibility)}beginPageView(){this.seenImpressions.clear(),this.seenClicks.clear()}observe(e,t,n){let r=H(t),i=this.watched.get(e);i!==void 0&&i.item===r&&JSON.stringify(i.placement)===JSON.stringify(n)||(this.observer??=new IntersectionObserver(e=>this.onEntries(e),{threshold:B}),i!==void 0&&(this.stopTimer(i),this.observer.unobserve(e)),this.watched.set(e,{item:r,placement:n,timer:null,visible:!1}),this.observer.observe(e))}releaseDetached(){for(let[e,t]of this.watched)e.isConnected||(t.timer!==null&&clearTimeout(t.timer),this.observer?.unobserve(e),this.watched.delete(e))}onEntries(e){for(let t of e){let e=this.watched.get(t.target);e!==void 0&&(this.stopTimer(e),e.visible=t.isIntersecting&&t.intersectionRatio>=B,e.visible&&document.visibilityState!==`hidden`&&this.startTimer(e))}}startTimer(e){this.stopTimer(e),e.timer=setTimeout(()=>{e.timer=null,!this.seenImpressions.has(e.item)&&(this.seenImpressions.add(e.item),this.enqueue({type:`impression`,item:e.item,placement:e.placement}))},Me)}stopTimer(e){e.timer!==null&&(clearTimeout(e.timer),e.timer=null)}click(e,t){let n=H(e);this.seenClicks.has(n)||(this.seenClicks.add(n),this.enqueue({type:`click`,item:n,placement:t}))}enqueue(e){e.item.length>Pe||this.queue.push(e)}flush(){if(this.queue.length===0)return;let e=this.queue;this.queue=[];let t=Fe();for(let n=0;n<e.length;n+=V)this.send({platform:t,events:e.slice(n,n+V)})}dispose(){this.flush(),clearInterval(this.interval),window.removeEventListener(`pagehide`,this.onPageHide),document.removeEventListener(`visibilitychange`,this.onVisibility);for(let e of this.watched.values())e.timer!==null&&clearTimeout(e.timer);this.watched.clear(),this.observer?.disconnect(),this.observer=null}},Re=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`});function ze(e){return Re.format(e/100)}function Be(e){return we.options.includes(e)}function Ve(e){return e!==void 0&&oe.options.includes(e)}var U=`(min-width: 40rem)`,W=`(min-width: 80rem)`;function G(){return typeof window.matchMedia!=`function`||window.matchMedia(W).matches?4:window.matchMedia(U).matches?3:2}function K(e){return new Date(e).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}var He=[`new`,`sale`,`patterns`,`flags`,`crowns`];function q(e){return e.startsWith(`crown:`)?`crowns`:e.startsWith(`flag:`)?`flags`:`patterns`}var Ue=15e3,We=8;function J(e){let t=Date.now();return(e?.promotions??[]).some(e=>new Date(e.endsAt).getTime()<=t)}function Y(e){return e.find(e=>e.some(e=>_(e.cosmetic)?.kind===`flash`))}function X(e){return e.some(e=>_(e.cosmetic)!==null)}function Z(e){return e.some(e=>a(e.cosmetic))}function Ge(e){return Math.max(...e.map(e=>p(e.cosmetic)??0))}function Ke(e){return e.map(e=>({group:e,until:Ge(e)})).sort((e,t)=>t.until-e.until).map(({group:e})=>e)}function Q(e){let t=Y(e),n=e.filter(e=>e!==t);return[...t?[t]:[],...n.filter(X),...n.filter(e=>!X(e))]}var $=class extends t{constructor(...e){super(...e),this.routerName=`store`,this.cosmetics=null,this.affiliateCode=null,this.userMeResponse=!1,this.authSettled=!1,this.cosmeticsSubTab=`patterns`,this.requestedItem=null,this.inspected=null,this.previewingCosmetic=null,this.visibleGroups=[],this.openedPack=null,this.pages=new ke(this),this.featuredVisible=!1,this.featuredRowLength=4,this.rowQueries=[],this.firstOnOpen=!1,this.dealRollover=null,this.shownFlashPromotionId=null,this.featuredNewGroups=[],this.onRowLengthChange=()=>{let e=G();e!==this.featuredRowLength&&(this.featuredRowLength=e,this.isModalOpen&&this.activeTab===`featured`&&(this.selectVisible(this.groupsForTab(this.activeTab)),this.requestUpdate()))},this.onUserMeEvent=e=>{let t=e;this.onUserMe(t.detail)},this.onOpenCosmeticPreview=e=>{let t=e,n=e.target;n?.closest?.(`pack-contents-dialog`)||this.trackClick(t.detail,n),this.previewingCosmetic=t.detail,this.requestUpdate()},this.rowObserver=null,this.saleEndTimer=null,this.saleEndAt=0,this.newEndTimer=null,this.newEndAt=0,this.saleRetryTimer=null,this.saleRefetchGeneration=0,this.catalogRequest=0,this.settledCatalogRequest=0,this.alignFrame=null,this.purchasablesCache=null,this.tracker=null}modalConfig(){return this.affiliateCode?{showScrollToTop:!0}:{showScrollToTop:!0,tabs:[...this.featuredVisible?[{key:`featured`,label:w(`store.featured`)}]:[],{key:`packs`,label:w(`store.packs`)},{key:`subscriptions`,label:w(`store.subscriptions`)},{key:`bundles`,label:w(`store.bundles`)},{key:`cosmetics`,label:w(`store.cosmetics`)},{key:`effects`,label:w(`store.effects`)},{key:`tribes`,label:w(`store.tribes`)}]}}open(e){this.isModalOpen||(this.cosmetics=n()??this.cosmetics,this.featuredRowLength=G(),this.featuredVisible=this.cosmetics===null||Te()||J(this.cosmetics)||this.featuredHasContent(),this.firstOnOpen=!0),super.open(e)}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.onUserMeEvent);let e=l();if(e!==null&&this.onUserMe(e.response),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),typeof ResizeObserver<`u`&&(this.rowObserver??=new ResizeObserver(()=>k(this)),this.rowObserver.observe(this)),typeof window.matchMedia==`function`){this.rowQueries=[U,W].map(e=>window.matchMedia(e));for(let e of this.rowQueries)e.addEventListener(`change`,this.onRowLengthChange)}}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.onUserMeEvent),this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),this.rowObserver?.disconnect();for(let e of this.rowQueries)e.removeEventListener(`change`,this.onRowLengthChange);this.rowQueries=[],this.tracker?.dispose(),this.tracker=null,this.alignFrame!==null&&cancelAnimationFrame(this.alignFrame),this.alignFrame=null,this.clearNewEnd(),this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=null,this.saleRefetchGeneration++,this.dealRollover=null,this.shownFlashPromotionId=null,this.requestUpdate(),super.disconnectedCallback()}updated(e){super.updated(e),this.observeProducts(),k(this),!(typeof requestAnimationFrame>`u`)&&(this.alignFrame??=requestAnimationFrame(()=>{this.alignFrame=null,k(this)}))}async onUserMe(e){this.userMeResponse=e,this.authSettled=!0,await this.loadCatalog(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}renderHeader(){let e=this.userMeResponse===!1?void 0:this.userMeResponse.player.currency;return m({title:w(`store.title`),onBack:()=>this.close(),ariaLabel:w(`common.back`),rightContent:D`<div class="flex items-center gap-4">
        ${e?D`<currency-display
                .hard=${e.hard}
                .soft=${e.soft}
              ></currency-display>`:``}
        <not-logged-in-warning></not-logged-in-warning>
      </div>`})}resolvedPurchasables(){let e=[this.cosmetics,this.userMeResponse,this.affiliateCode],t=this.purchasablesCache;if(t&&t.inputs.every((t,n)=>t===e[n]))return t.items;let n=this.resolvePurchasables();return this.purchasablesCache={inputs:e,items:n},n}resolvePurchasables(){return ie(this.cosmetics,this.userMeResponse,this.affiliateCode)}cosmeticsGroups(e){let t=this.resolvedPurchasables(),n=h(t.filter(e=>e.type===`pattern`||e.type===`skin`)),r=t.filter(e=>e.type===`flag`).map(e=>[e]),i=t.filter(e=>e.type===`crown`).map(e=>[e]);if(e===`sale`||e===`new`){let a=t.filter(e=>e.type===`effect`||e.type===`cosmeticPack`).map(e=>[e]),o=[...n,...r,...i,...a];return e===`sale`?Q(o.filter(X)):Ke(o.filter(Z))}return Q(e===`flags`?r:e===`crowns`?i:n)}featuredSections(){let e=this.cosmeticsGroups(`sale`),t=Y(e),n=e=>new Set(e.flatMap(e=>e.map(e=>e.key))),r=n(t?[t]:[]),i=this.cosmeticsGroups(`new`).filter(e=>!e.some(e=>r.has(e.key))).slice(0,this.featuredRowLength),a=n(i);return{deal:t,new:i,sale:e.filter(e=>e!==t&&!e.some(e=>r.has(e.key)||a.has(e.key))).slice(0,this.featuredRowLength)}}featuredHasContent(){let e=this.featuredSections();return e.deal!==void 0||e.new.length>0||e.sale.length>0}ownedFlashDeal(){if(this.userMeResponse===!1)return null;for(let e of d(this.cosmetics,this.userMeResponse,null)){if(e.relationship!==`owned`)continue;let t=_(e.cosmetic);if(t?.kind!==`flash`)continue;let n=e.cosmetic.promotion?.id;if(n===void 0)continue;let r=be(this.cosmetics,n);if(r!==null)return{name:r,endsAt:t.endsAt,promotionId:n}}return null}groupsForTab(e){if(this.affiliateCode)return h(this.resolvedPurchasables().filter(e=>{let t=e.cosmetic;return t!==null&&`affiliateCode`in t&&t.affiliateCode===this.affiliateCode}));if(e===`cosmetics`){let e=this.cosmeticsGroups(this.cosmeticsSubTab);return e.length===0&&(this.cosmeticsSubTab===`sale`||this.cosmeticsSubTab===`new`)&&this.cosmetics!==null&&this.settledCatalogRequest===this.catalogRequest?(this.cosmeticsSubTab=`patterns`,this.cosmeticsGroups(`patterns`)):e}if(e===`featured`){let e=this.featuredSections();return this.featuredNewGroups=e.new,[...e.deal?[e.deal]:[],...e.new,...e.sale]}return e===`effects`?this.resolvedPurchasables().filter(e=>e.type===`effect`).map(e=>[e]):e===`packs`?this.resolvedPurchasables().filter(e=>e.type===`pack`).map(e=>[e]):e===`bundles`?d(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`cosmeticPack`&&(e.relationship!==`blocked`||this.ownedPackItemNames(e).length>0)).map(e=>[e]):e===`subscriptions`?d(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`subscription`&&(e.relationship===`purchasable`||e.relationship===`owned`)).map(e=>[e]):[]}inspect(e){this.inspected=e,this.requestUpdate()}activate(e){this.trackClick(e,this.productFor(e)),e.type===`cosmeticPack`&&(this.openedPack=e),A(e)&&(this.previewingCosmetic=e),this.inspect(e)}placementFor(e){let t=e.closest(`[data-featured-section]`)?.dataset.featuredSection;if(Ve(t))return{kind:`featured`,section:t};if(e.closest(`[data-store-flash]`))return{kind:`flash`};if(this.affiliateCode)return{kind:`affiliate`};let n=this.activeTab;if(Be(n))return n===`cosmetics`?{kind:`tab`,tab:n,subTab:this.cosmeticsSubTab}:{kind:`tab`,tab:n}}observeProducts(){if(!(this.tracker===null||typeof IntersectionObserver>`u`)){this.tracker.releaseDetached();for(let e of this.querySelectorAll(`[data-store-product][data-cosmetic-key]`)){let t=e.dataset.cosmeticKey,n=this.placementFor(e);t&&n&&this.tracker.observe(e,t,n)}}}productFor(e){for(let t of this.querySelectorAll(`[data-store-product][data-cosmetic-key]`)){let n=t;if(t.dataset.cosmeticKey===e.key||n.resolved?.key===e.key||n.variants?.some(t=>t.key===e.key))return t}return null}trackClick(e,t){try{let n=this.placementFor(t??this);n&&this.tracker?.click(e.key,n)}catch{}}closePack(){this.openedPack=null,this.requestUpdate()}reconcileInspection(e){let t=e.flat(),n=this.requestedItem;if(n!==null){let e=t.find(e=>Oe(e.key,n));if(e!==void 0){this.requestedItem=null,this.inspected=e;return}}let r=t.find(e=>e.key===this.inspected?.key);this.inspected=r??e[0]?.[0]??null}selectVisible(e){this.visibleGroups=e,this.reconcileInspection(e)}onTabEnter(e){this.selectVisible(this.groupsForTab(e)),this.requestUpdate()}visibleCosmeticsSubTabs(){let e=this.cosmeticsGroups(`new`).length>0,t=this.cosmeticsGroups(`sale`).length>0;return He.filter(n=>n===this.cosmeticsSubTab||(n!==`new`||e)&&(n!==`sale`||t))}setCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.selectVisible(this.cosmeticsGroups(e)),this.requestUpdate()}ownedPackItemNames(e){return pe(e.cosmetic,this.userMeResponse).map(t=>{let n=te(t,e.packItems??[]);return n?O(n):t.name})}renderStatus(e,t=!1){return D`<span
      data-store-status
      class="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-1.5 text-center font-bold ${t?`border-white/15 bg-white/5 text-xs text-white/60`:`border-emerald-500/40 bg-emerald-500/15 text-base text-emerald-300`}"
      >${e}</span
    >`}renderCardAction(e,t){if(e.type===`subscription`&&e.relationship===`owned`)return this.renderStatus(w(`store.subscribed`));if(e.type===`cosmeticPack`){if(e.relationship===`owned`)return this.renderStatus(w(`store.pack_owned`));if(e.relationship===`blocked`)return this.renderStatus(w(`store.pack_partially_owned`,{items:this.ownedPackItemNames(e).join(`, `)}),!0)}return this.renderPurchaseAction(e,t)}renderCosmeticCards(e=this.visibleGroups,t=!1,n=`block h-full min-w-0`,r=`card`,i=!0){return D`${e.map(e=>{let a=e.find(e=>e.key===this.inspected?.key),o=a??e[0],s=i?this.renderCardAction(o,t):T;return D`<cosmetic-card
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
      ></cosmetic-card>`})}`}renderPurchaseAction(t,n){let r=t.cosmetic,i=t.relationship===`purchasable`,a=i&&(t.type===`pack`||t.type===`subscription`)?r?.product??null:null,o=i&&t.type===`subscription`&&a===null?ze(t.cosmetic.priceMonthly):``,c=r!==null&&s(r),l=i&&r?v(r,`hard`):void 0,u=i&&r?v(r,`soft`):void 0,d=()=>{try{return this.placementFor(this.productFor(t)??this)}catch{return}},f=e=>de(t,e,d()),p=t.type===`pack`&&a!==null&&r?.name!==void 0?e(a.price):null;return D`<purchase-button
      .product=${a}
      .dollarPrice=${o}
      .inlineCheckout=${p===null?null:{request:{kind:`currency_pack`,packName:r.name},amountCents:p,successMessageKey:`store.currency_pack_purchase_success`,placement:d}}
      .priceHard=${l??null}
      .priceSoft=${u??null}
      .listPriceHard=${l!==void 0&&!c?r?.listPriceHard??null:null}
      .listPriceSoft=${u!==void 0&&!c?r?.listPriceSoft??null:null}
      .rarity=${r?.rarity??`common`}
      .itemName=${O(t)}
      .dollarLabelKey=${t.type===`subscription`&&n?`store.switch_button`:``}
      .priceSuffix=${t.type===`subscription`?w(`store.price_per_month`):``}
      .onPurchaseDollar=${a||o?()=>f(`dollar`):void 0}
      .onPurchaseHard=${l===void 0?void 0:()=>f(`hard`)}
      .onPurchaseSoft=${u===void 0?void 0:()=>f(`soft`)}
    ></purchase-button>`}renderBrowserLayout(e,t=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`){return D`<div data-store-browser class="grid grid-cols-1 gap-4 p-3">
      <div data-store-grid class=${t}>${e}</div>
    </div>`}renderBrowser(e,t){let n=this.pages.page(`store-grid`,`${this.affiliateCode??``}:${this.activeTab}:${this.cosmeticsSubTab}`,e),r=e.length===0?t.trailingContent?D``:D`<div
              class=${`${t.emptyClass??`col-span-full`} py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`}
            >
              ${w(t.emptyTranslationKey)}
            </div>`:this.renderCosmeticCards(n.items,t.userHasSubscription,t.cardClass,t.previewSize);return this.renderBrowserLayout(D`${r}${n.more}${t.trailingContent??``}`,t.gridClass)}renderCosmeticsPanel(){let e=this.visibleCosmeticsSubTabs(),t=this.cosmeticsSubTab===`sale`?Y(this.visibleGroups):void 0,n=this.cosmeticsSubTab===`flags`?`store.no_flags`:this.cosmeticsSubTab===`crowns`?`store.no_crowns`:this.cosmeticsSubTab===`new`?`store.no_new_items`:this.cosmeticsSubTab===`sale`?`store.no_sale_items`:`store.no_skins`;return D`
      <div
        class="flex flex-nowrap items-center gap-6 overflow-x-auto border-b border-white/10 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>button:first-of-type]:ms-auto [&>button:last-of-type]:me-auto"
      >
        ${e.map(e=>D`<button
            data-store-subtab=${e}
            class="-mb-px flex items-center gap-1.5 shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.cosmeticsSubTab===e?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.setCosmeticsSubTab(e)}
          >
            ${e===`sale`?D`<span
                    class="h-2 w-2 rounded-full bg-aquarius shadow-[0_0_6px_var(--color-aquarius)]"
                    aria-hidden="true"
                  ></span>`:T}${w(e===`sale`?`store.on_sale`:e===`new`?`store.new_tab`:`store.${e}`)}
          </button>`)}
      </div>
      ${t?D`${this.renderFlashHero(t)}
            ${(()=>{let e=this.visibleGroups.filter(e=>e!==t);return e.length>0?this.renderBrowser(e,{emptyTranslationKey:n}):T})()}`:this.renderBrowser(this.visibleGroups,{emptyTranslationKey:n})}
      ${this.renderPackDialog()}
    `}renderFlashHero(e,t=!1){let n=e.map(e=>_(e.cosmetic)).find(e=>e!==null);if(!n)return D``;let r=e.find(e=>e.key===this.inspected?.key)??e[0],i=w(`store.flash_sale_hero_title`,{name:O(e[0]),percent:n.percentOff}),a=this.renderCosmeticCards([e],!1,void 0,`card`,!1),o=e=>D`<span
        class="flex items-baseline gap-2 rounded-lg bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-wider text-dawn-blue"
      >
        ${w(`store.flash_ends_in`)}
        <sale-countdown
          class="${e} font-black normal-case tracking-normal tabular-nums text-white"
          format="clock"
          .endsAt=${n.endsAt}
        ></sale-countdown>
      </span>`;return t?D`<section
        data-featured-section="deal"
        class="mx-3 mt-3 flex min-h-56 flex-row items-center gap-4 rounded-xl border border-aquarius/50 bg-gradient-to-br from-deep-navy via-deep-navy to-malibu-blue/50 p-4 shadow-[0_0_28px_rgba(63,169,245,0.25)] sm:min-h-72 sm:items-stretch"
      >
        <div class="w-32 shrink-0 sm:w-52">${a}</div>
        <div
          class="flex min-w-0 flex-1 flex-col items-start justify-center gap-2 sm:gap-3"
        >
          <span
            class="text-xs font-black uppercase tracking-widest text-aquarius sm:text-sm"
          >
            ${w(`store.flash_sale`)}
          </span>
          <span class="text-lg font-black leading-tight text-white sm:text-2xl"
            >${i}</span
          >
          <span class="hidden max-w-sm text-sm text-dawn-blue sm:block"
            >${w(`store.flash_sale_hero_body`)}</span
          >
          <div
            data-store-flash-buy
            class="w-full max-w-xs [&_button]:min-h-11 [&_button]:text-lg sm:[&_button]:min-h-14 sm:[&_button]:text-2xl [&_s]:text-sm [&_s]:text-white/75 sm:[&_s]:text-base"
          >
            ${this.renderCardAction(r,!1)}
          </div>
          ${o(`text-xl sm:text-2xl`)}
          <span data-featured-deal-at class="text-xs text-dawn-blue"
            >${w(`store.featured_next_deal_at`,{time:K(n.endsAt)})}</span
          >
        </div>
      </section>`:D`<section
      data-store-flash
      class="mx-3 mt-3 flex flex-col items-center gap-4 rounded-xl border border-aquarius/50 bg-gradient-to-br from-deep-navy via-deep-navy to-malibu-blue/50 p-4 shadow-[0_0_28px_rgba(63,169,245,0.25)] sm:flex-row sm:items-stretch"
    >
      <div class="w-44 shrink-0 sm:w-52">${a}</div>
      <div
        class="flex flex-1 flex-col items-center justify-center gap-3 text-center sm:items-start sm:text-left"
      >
        <span
          class="flex items-center gap-1.5 text-sm font-black uppercase tracking-widest text-aquarius"
        >
          ${w(`store.flash_sale`)}
        </span>
        <span class="text-2xl font-black leading-tight text-white"
          >${i}</span
        >
        <span class="max-w-sm text-sm text-dawn-blue"
          >${w(`store.flash_sale_hero_body`)}</span
        >
        <!-- The price, and the way to pay it, beside the offer at full size
             rather than small on the card: the card above carries none. -->
        <div
          data-store-flash-buy
          class="w-full max-w-xs [&_button]:min-h-14 [&_button]:text-2xl [&_s]:text-base [&_s]:text-white/75"
        >
          ${this.renderCardAction(r,!1)}
        </div>
        ${o(`text-2xl`)}
      </div>
    </section>`}renderFeatured(){if(this.cosmetics===null)return this.catalogRequest>0&&this.settledCatalogRequest===this.catalogRequest?this.renderFeaturedError():this.renderFeaturedLoading();let e=this.featuredSections(),t=this.renderFeaturedDeal(e.deal);return t===T&&e.new.length===0&&e.sale.length===0?this.catalogRequest!==this.settledCatalogRequest||this.saleRetryTimer!==null?this.renderFeaturedLoading():D`<div
        data-featured-empty
        class="py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40"
      >
        ${w(`store.featured_empty`)}
      </div>`:D`<div data-featured class="pb-3">
        ${t} ${this.renderFeaturedRow(`new`,e.new)}
        ${this.renderFeaturedRow(`sale`,e.sale)}
      </div>
      ${this.renderPackDialog()}`}renderFeaturedDeal(e){let t=e===void 0?this.ownedFlashDeal():null;if(e===void 0&&t===null&&this.dealRollover!==null){let e=this.dealRollover.height;return D`<div
        data-featured-section="deal"
        data-featured-rollover
        style=${e===null?T:`height: ${e}px`}
        class="mx-3 mt-3 flex flex-col items-center justify-center rounded-xl bg-white/5 ${e===null?`min-h-56 sm:min-h-72`:``}"
      >
        <div
          class="h-28 w-full max-w-md animate-pulse rounded-lg bg-white/5"
        ></div>
        <p
          class="mt-3 text-sm font-bold uppercase tracking-wider text-white/40"
        >
          ${w(`store.featured_next_deal_loading`)}
        </p>
      </div>`}return e===void 0?t===null?T:(this.shownFlashPromotionId=t.promotionId,D`<div
        data-featured-section="deal"
        data-featured-deal-owned
        class="mx-3 mt-3 flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm sm:flex-row sm:items-center sm:gap-3"
      >
        <span class="min-w-0 font-semibold text-dawn-blue sm:flex-1"
          >${w(`store.featured_deal_owned`,{name:t.name})}</span
        >
        <span
          class="flex flex-wrap items-baseline gap-x-2 text-xs font-bold uppercase tracking-wider text-dawn-blue"
        >
          ${w(`store.featured_next_deal_in`)}
          <sale-countdown
            class="text-base font-black normal-case tracking-normal tabular-nums text-white"
            format="clock"
            .endsAt=${t.endsAt}
          ></sale-countdown>
          <span data-featured-deal-at class="font-semibold normal-case"
            >${w(`store.featured_next_deal_at`,{time:K(t.endsAt)})}</span
          >
        </span>
      </div>`):(this.shownFlashPromotionId=e.map(e=>e.cosmetic?.promotion?.id).find(e=>e!==void 0)??null,this.renderFlashHero(e,!0))}renderFeaturedRow(e,t){if(t.length===0)return T;let n=`store-featured-${e}-heading`;return D`<div data-featured-section=${e}>
      <div
        class="mx-3 mt-4 flex items-center justify-between gap-3 border-b border-white/10 pb-2"
      >
        <h3
          id=${n}
          class="text-sm font-black uppercase tracking-wider text-white/70"
        >
          ${w(e===`new`?`store.new_tab`:`store.on_sale`)}
        </h3>
        <button
          data-featured-see-all=${e}
          aria-describedby=${n}
          class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          @click=${()=>this.openCosmeticsSubTab(e)}
        >
          ${w(`store.see_all`)}
        </button>
      </div>
      <div
        data-featured-grid
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 xl:grid-cols-4"
      >
        ${t.map(e=>this.renderCosmeticCards([e],!1,`block h-full min-w-0`))}
      </div>
    </div>`}renderFeaturedLoading(){let e=e=>e===2?`hidden sm:block`:e===3?`hidden xl:block`:``;return D`<div data-featured-loading aria-busy="true">
      <span class="sr-only">${w(`common.loading`)}</span>
      <div
        class="mx-3 mt-3 min-h-56 animate-pulse rounded-xl bg-white/5 sm:min-h-72"
      ></div>
      <div class="mx-3 mt-4 h-6 w-32 animate-pulse rounded bg-white/5"></div>
      <div class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 xl:grid-cols-4">
        ${[0,1,2,3].map(t=>D`<div
              class="${e(t)} aspect-square animate-pulse rounded-xl bg-white/5"
            ></div>`)}
      </div>
    </div>`}renderFeaturedError(){return D`<div
      data-featured-error
      class="flex flex-col items-center gap-4 p-8 text-center text-red-300"
    >
      <p>${w(`store.load_failed`)}</p>
      <button
        data-featured-retry
        class="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white"
        @click=${()=>void this.retryCatalog()}
      >
        ${w(`store.retry`)}
      </button>
    </div>`}async retryCatalog(){let e=this.loadCatalog();this.requestUpdate(),await e,this.selectVisible(this.groupsForTab(this.activeTab)),this.requestUpdate()}renderEffectGrid(){return D`<effects-grid
      mode="purchase"
      tabbed
      .cosmetics=${this.cosmetics}
      .userMeResponse=${this.userMeResponse}
      .affiliateCode=${this.affiliateCode}
      .focusedKey=${this.inspected?.key??null}
      .onPurchaseFocus=${e=>this.activate(e)}
      .renderPurchaseAction=${e=>this.renderPurchaseAction(e,!1)}
      .onVisiblePurchaseItemsChange=${e=>{this.selectVisible(e.map(e=>[e])),this.requestUpdate()}}
    ></effects-grid>`}renderPackGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_packs`,trailingContent:D`<custom-currency-card
        class="block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48"
      ></custom-currency-card>`,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderBundleGrid(){return D`${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_bundles`})}${this.renderPackDialog()}`}renderPackDialog(){return!this.openedPack||this.previewingCosmetic?``:D`<pack-contents-dialog
      .pack=${this.openedPack}
      .actionContent=${this.renderCardAction(this.openedPack,!1)}
      @close=${()=>this.closePack()}
    ></pack-contents-dialog>`}renderSubscriptionGrid(){let e=this.userMeResponse!==!1&&ee(this.userMeResponse.player)!==null,t=this.visibleGroups.length===1;return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_subscriptions`,userHasSubscription:e,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:t?`block w-full max-w-xs shrink-0`:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,previewSize:t?`detail`:`card`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderSaleBanner(){let e=he(this.cosmetics);this.scheduleSaleEnd(e),this.scheduleNewEnd();let t=le(e,this.cosmetics,this.resolvedPurchasables());return t.length===0?``:D`<sale-banner
      class="block px-3 pt-2"
      .sales=${t}
      .cosmetics=${this.cosmetics}
      @open-sale=${()=>this.openCosmeticsSubTab(`sale`)}
    ></sale-banner>`}openCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.activeTab===`cosmetics`?this.setCosmeticsSubTab(e):this.setActiveTab(`cosmetics`)}scheduleSaleEnd(e){let t=Date.now(),n=this.saleEndTimer!==null&&this.saleEndAt<=t;if(this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,!this.isModalOpen||!n&&e.length===0)return;let r=n?t:Math.min(...e.map(e=>new Date(e.endsAt).getTime()));this.saleEndAt=r;let i=Math.min(Math.max(r-t,0),2**31-1);this.saleEndTimer=setTimeout(()=>{this.saleEndTimer=null,this.beginDealRollover(),this.refetchAfterSaleEnd(0)},i)}beginDealRollover(){if(!this.isModalOpen||this.affiliateCode!==null)return;let e=Date.now();if(!(this.cosmetics?.promotions??[]).some(t=>t.kind===`flash`&&new Date(t.endsAt).getTime()<=e&&t.id===this.shownFlashPromotionId))return;let t=this.querySelector(`[data-featured-section="deal"]`);this.dealRollover={height:t?t.getBoundingClientRect().height:null},this.requestUpdate()}endDealRollover(){this.dealRollover!==null&&(this.dealRollover=null,this.shownFlashPromotionId=null,this.requestUpdate())}scheduleNewEnd(){let e=Date.now(),t=this.newEndTimer!==null&&this.newEndAt<=e||this.activeTab===`cosmetics`&&this.cosmeticsSubTab===`new`&&this.affiliateCode===null&&this.visibleGroups.some(e=>!Z(e))||this.activeTab===`featured`&&this.affiliateCode===null&&this.featuredNewGroups.some(e=>!Z(e));if(!this.isModalOpen){this.clearNewEnd();return}let n=this.resolvedPurchasables().flatMap(t=>{let n=p(t.cosmetic);return n!==null&&n>e?[n]:[]});if(!t&&n.length===0){this.clearNewEnd();return}let r=t?0:Math.min(Math.min(...n)-e,2**31-1);!t&&this.newEndTimer!==null&&this.newEndAt===e+r||(this.clearNewEnd(),this.newEndAt=e+r,this.newEndTimer=setTimeout(()=>{this.newEndTimer=null,(this.activeTab===`cosmetics`||this.activeTab===`featured`)&&this.affiliateCode===null&&this.selectVisible(this.groupsForTab(this.activeTab));for(let e of this.querySelectorAll(`cosmetic-card`))e.requestUpdate();this.requestUpdate()},r))}clearNewEnd(){this.newEndTimer!==null&&clearTimeout(this.newEndTimer),this.newEndTimer=null}async loadCatalog(){let e=++this.catalogRequest;try{return await this.fetchCatalog(e)}finally{e===this.catalogRequest&&(this.settledCatalogRequest=e)}}async fetchCatalog(e){let t=await Ce();return e===this.catalogRequest&&(this.cosmetics=t??this.cosmetics,this.dealRollover!==null&&(this.featuredSections().deal!==void 0||this.ownedFlashDeal()!==null)&&this.endDealRollover()),t}async refetchAfterSaleEnd(e){let t=this.saleRefetchGeneration;o();let n=await this.loadCatalog();!this.isModalOpen||t!==this.saleRefetchGeneration||(this.selectVisible(this.groupsForTab(this.activeTab)),this.requestUpdate(),(n===null||J(this.cosmetics))&&e<We?(this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=setTimeout(()=>{this.saleRetryTimer=null,this.refetchAfterSaleEnd(e+1)},Ue)):this.endDealRollover())}renderHeaderSlot(){return D`${this.renderHeader()} ${this.renderSaleBanner()}
    ${this.previewingCosmetic?D`<cosmetic-preview-modal
            .resolved=${this.previewingCosmetic}
            @close-preview=${()=>{this.previewingCosmetic=null,this.requestUpdate()}}
          ></cosmetic-preview-modal>`:``}`}renderBody(e){if(this.affiliateCode)return this.renderAffiliateGrid();switch(e){case`featured`:return this.featuredVisible?this.renderFeatured():this.renderPackGrid();case`cosmetics`:return this.renderCosmeticsPanel();case`bundles`:return this.renderBundleGrid();case`effects`:return this.renderEffectGrid();case`subscriptions`:return this.renderSubscriptionGrid();case`tribes`:return this.renderTribeGrid();default:return this.renderPackGrid()}}renderTribeGrid(){return this.authSettled?D`<tribes-panel
      .userMeResponse=${this.userMeResponse}
    ></tribes-panel>`:D``}renderAffiliateGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_affiliate_items`})}async onOpen(e){this.tracker??=new Le,this.tracker.beginPageView(),c();let t=typeof e?.affiliateCode==`string`?e.affiliateCode:null;this.affiliateCode=t,this.requestedItem=typeof e?.item==`string`?e.item:null,this.requestedItem!==null&&(this.cosmeticsSubTab=q(this.requestedItem)),(e?.sub===`sale`||e?.sub===`new`)&&(this.cosmeticsSubTab=e.sub),this.chooseOpeningTab(e,t),(u()||this.cosmetics===null)&&await this.loadCatalog(),J(this.cosmetics)&&this.refetchAfterSaleEnd(0),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}chooseOpeningTab(e,t){let n=this.firstOnOpen;if(this.firstOnOpen=!1,t===null){let t=this.modalConfig().tabs??[],r=typeof e?.tab==`string`&&t.some(t=>t.key===e.tab),i=typeof e?.sub==`string`||typeof e?.item==`string`;!r&&i?n?this.activeTab=`cosmetics`:this.setActiveTab(`cosmetics`):!r&&n&&(this.activeTab=this.featuredVisible?`featured`:`packs`)}this.activeTab===`featured`&&!this.featuredVisible&&(this.activeTab=`packs`)}onClose(){this.tracker?.flush(),this.dealRollover=null,this.shownFlashPromotionId=null,this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,this.clearNewEnd(),this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=null,this.saleRefetchGeneration++;for(let e of this.querySelectorAll(`inline-checkout`))e.closeCardModal();this.affiliateCode=null,this.openedPack=null,this.previewingCosmetic=null,this.pages.reset(),this.requestedItem=null,this.selectVisible(this.groupsForTab(this.activeTab))}async refresh(){this.requestUpdate()}};y([C()],$.prototype,`authSettled`,void 0),$=y([x(`store-modal`)],$);export{$ as StoreModal,ye as saleCoversEverything,Q as saleFirst,q as subTabForItem};