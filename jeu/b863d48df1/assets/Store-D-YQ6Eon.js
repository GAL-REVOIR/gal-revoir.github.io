import{Ca as e,Cr as t,Dn as n,Dr as r,Fr as i,Jr as a,Mr as o,Nr as s,Pr as c,Qi as l,Tr as u,Yi as d,Zi as f,_n as p,ai as m,ba as h,br as ee,ci as g,fr as _,fs as te,ga as ne,gr as re,hr as v,ii as ie,li as y,mr as b,n as ae,ni as oe,oi as x,pi as S,ri as C,ro as se,si as w,t as T,ti as E,ui as D,vn as ce,wr as le,xa as ue,xr as de,ya as fe,yn as O,yo as k,yr as A,ys as pe,za as me}from"./index-CdogmdF1.js";import"./PlutoniumIcon-BoftlY4d.js";import"./CurrencyDisplay-Ei3-7Zbs.js";import{t as j}from"./LeaderboardTribeTable-C3v4SheI.js";import{c as M,l as he}from"./CosmeticPreview-0kfg3Usy.js";import{r as ge,t as N}from"./PurchaseButton-Dyl1J51W.js";import{t as P}from"./CosmeticCard-BCe2vzYs.js";import"./InsufficientCurrencyDialog-BNeVFWbD.js";import{t as _e}from"./EffectsGrid-Bd5hEZ1r.js";var F=20,I=2e3,L=class extends g{constructor(...e){super(...e),this.amount=100,this.buy=async()=>{let e=s(await i({kind:`custom_currency`,hardAmount:this.amount}),`store.custom_currency_purchase_success`);e!==null&&await E(e)}}createRenderRoot(){return this}clamp(e){return Number.isFinite(e)?Math.min(I,Math.max(F,Math.floor(e))):F}get priceDollars(){return(this.amount/20).toFixed(2)}onSlider(e){this.amount=this.clamp(Number(e.target.value))}onInputChange(e){this.amount=this.clamp(Number(e.target.value))}render(){let e=`$${this.priceDollars}`;return S`
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
          >${d(`store.custom_amount`)}</span
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
              >${d(`store.plutonium_amount`)}</label
            >
            <input
              id="custom-plutonium-amount"
              type="number"
              class="custom-plutonium-input w-full min-w-0 max-w-24 text-center bg-black/30 border border-green-500/30 rounded px-1 py-0.5 text-lg font-black leading-none text-green-400 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/40"
              aria-label=${d(`store.plutonium_amount`)}
              min=${F}
              max=${I}
              step="1"
              .value=${String(this.amount)}
              @change=${this.onInputChange}
            />
            <span
              class="text-[10px] font-bold leading-none text-white/50 uppercase"
              >${d(`cosmetics.hard`)}</span
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
            aria-label=${d(`store.plutonium_amount`)}
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
            .dollarPrice=${e}
            .onPurchaseDollar=${this.buy}
            .inlineCheckout=${{request:{kind:`custom_currency`,hardAmount:this.amount},amountCents:this.amount*5,successMessageKey:`store.custom_currency_purchase_success`}}
          ></purchase-button>
        </div>
      </article>
    `}};C([m()],L.prototype,`amount`,void 0),L=C([w(`custom-currency-card`)],L);var R=class extends g{constructor(...e){super(...e),this.linked=null,this._onUserMe=e=>{this.linked=k(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this._onUserMe);let e=n();e!==null&&(this.linked=k(e.response))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe)}render(){return this.linked===!1?S`<div class="no-game-portal flex items-center">
      <button
        class="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 cursor-pointer hover:bg-red-500/30"
        data-i18n="common.not_logged_in"
        @click=${()=>{window.showPage?.(`page-account`)}}
      >
        ${d(`common.not_logged_in`)}
      </button>
    </div>`:S``}};C([m()],R.prototype,`linked`,void 0),R=C([w(`not-logged-in-warning`)],R);var z=class extends g{constructor(...e){super(...e),this.pack=null,this.actionContent=D,this.portal=null,this.onKeyDown=e=>{e.key===`Escape`&&this.close()},this.relayPreview=e=>{e.stopPropagation(),this.openPreview(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown)}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown),this.portal&&=(y(S``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent(`close`))}openPreview(e){P(e)&&this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:e}))}render(){return this.portal&&y(this.pack?this.renderOverlay(this.pack):S``,this.portal),S``}renderOverlay(e){let t=e.cosmetic,n=e.packItems??[];return S`<div
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
          aria-label=${d(`common.close`)}
          @click=${()=>this.close()}
          class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <h2 class="mb-1 pr-8 text-lg font-bold text-white">
          ${t.displayName}
        </h2>
        ${t.description?S`<p class="mb-4 text-sm text-white/60">
                ${t.description}
              </p>`:S`<div class="mb-4"></div>`}
        ${n.length===0?S`<p class="py-6 text-center text-sm text-white/50">
                ${d(`store.pack_no_items`)}
              </p>`:S`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                ${n.map(e=>S`<div
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
                        >${he(e)}</span
                      >
                    </div>`)}
              </div>`}
        ${this.actionContent===D?D:S`<div data-pack-contents-action class="mx-auto mt-4 max-w-xs">
                ${this.actionContent}
              </div>`}
      </div>
    </div>`}};C([x({attribute:!1})],z.prototype,`pack`,void 0),C([x({attribute:!1})],z.prototype,`actionContent`,void 0),z=C([w(`pack-contents-dialog`)],z);var B=class extends g{constructor(...e){super(...e),this.tribeName=``,this.stats=null,this.loadSeq=0}createRenderRoot(){return this}updated(e){e.has(`tribeName`)&&this.tribeName!==``&&this.load(this.tribeName)}async load(e){let t=++this.loadSeq;this.stats=null;let n=await ne(e);t===this.loadSeq&&(this.stats=n)}renderFigures(e){return S`<div class="grid grid-cols-2 gap-2">
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${d(`store.tribe_stats_games`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.gamesAppeared.toLocaleString()}
        </span>
      </div>
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
        title=${d(`leaderboard_modal.tribes_reach_value_tooltip`,{count:e.playerReach.toLocaleString()})}
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${d(`leaderboard_modal.tribes_reach`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.playerReach.toLocaleString()}
        </span>
      </div>
    </div>`}renderStats(e){let t=j(e.window.start),n=j(e.window.end),r=t!==null&&n!==null?d(`store.tribe_stats_window`,{days:e.window.days,start:t,end:n}):d(`store.tribe_stats_window_short`,{days:e.window.days});return S`<div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm">
        <span class="text-white/40 font-medium">
          ${d(`store.tribe_stats_owner`)}
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
          ${d(`store.tribe_stats_lifetime`)}
        </h3>
        ${this.renderFigures(e.lifetime)}
      </section>
    </div>`}renderBody(){return this.stats===null?O():this.stats===!1?S`<p class="text-sm font-medium text-red-400">
        ${d(`store.tribe_stats_failed`)}
      </p>`:this.renderStats(this.stats)}renderBoostedBadge(){if(this.stats===null||this.stats===!1)return D;let e=this.stats.activeBoosts;return e===0?D:S`<span
      class="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5"
    >
      ${d(`store.tribe_stats_boosted`,{multiplier:e+1})}
    </span>`}render(){return S`<div class="flex flex-col gap-4">
      ${p({titleContent:S`<span
          class="text-white text-xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
        >
          ${this.stats!==null&&this.stats!==!1?this.stats.name:this.tribeName} ${this.renderBoostedBadge()}
        </span>`,onBack:()=>this.dispatchEvent(new CustomEvent(`back`)),ariaLabel:d(`common.back`),padded:!1,showDivider:!1})}
      ${this.renderBody()}
    </div>`}};C([x({attribute:!1})],B.prototype,`tribeName`,void 0),C([m()],B.prototype,`stats`,void 0),B=C([w(`tribe-stats-view`)],B);var V,ve=100,H={pending:`active`,live:`active`,rejected:`rejected`,revoked:`rejected`},ye={active:{labelKey:`store.tribe_status_active`,classes:`bg-green-500/20 text-green-300 border-green-500/30`},rejected:{labelKey:`store.tribe_status_rejected`,classes:`bg-red-500/20 text-red-300 border-red-500/30`}},U=V=class extends g{constructor(...t){super(...t),this.userMeResponse=!1,this.data=null,this.purchasing=!1,this.notice=null,this.tribeNamesConfig=null,this.boostingId=null,this.boostNotice=null,this.insufficientInfo=null,this.statsName=null,this.loadStarted=!1,this.submit=async t=>{if(t.preventDefault(),this.purchasing)return;let n=this.input?.value.trim()??``;if(n.length===0){this.notice={kind:`error`,text:d(`store.tribe_name_required`)};return}if(this.hardBalance<0){this.notice={kind:`error`,text:this.debtText(-this.hardBalance)};return}this.purchasing=!0,this.notice=null;let r=await e(n);if(this.purchasing=!1,r.ok){this.input&&(this.input.value=``),this.notice={kind:`success`,text:d(`store.tribe_purchase_live`,{name:r.data.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.notice={kind:`error`,text:d(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let e=await this.refreshAfterPurchase(),t=this.price;if(t===null||e===!1){this.notice={kind:`error`,text:d(`store.purchase_failed`)};return}let r=V.hardBalanceOf(e),i=V.balanceOutcome(r,t);if(i!==`shortfall`){this.notice={kind:`error`,text:i===`debt`?this.debtText(-r):d(`store.purchase_failed`)};return}this.showInsufficient(n,t,r);return}if(r.code===`duplicate`){this.notice={kind:`error`,text:d(`store.tribe_duplicate`)};return}if(r.code===`rate_limited`){let e=r.retryAfterSeconds;this.notice={kind:`error`,text:e&&e>0?d(`store.tribe_rate_limited`,{seconds:e}):d(`store.purchase_failed`)};return}this.notice={kind:`error`,text:V.refusalText(r)}},this.boost=async e=>{let t=this.tribeNamesConfig;if(t===null||this.boostingId!==null)return;let n=t.boostPriceHard;if(this.hardBalance<0){this.boostNotice={kind:`error`,text:this.debtText(-this.hardBalance)};return}if(this.hardBalance<n){this.showInsufficient(e.displayName,n,this.hardBalance);return}if(!await oe(d(`store.tribe_boost_confirm`,{name:e.displayName,price:n,days:t.boostDurationDays}),{heading:d(`store.tribe_boost_heading`),variant:`warning`}))return;this.boostingId=e.id,this.boostNotice=null;let r=await l(e.id,crypto.randomUUID());if(this.boostingId=null,r.ok){this.boostNotice={kind:`success`,text:d(`store.tribe_boost_success`,{name:e.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.boostNotice={kind:`error`,text:d(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let t=await this.refreshAfterPurchase();if(t===!1){this.boostNotice={kind:`error`,text:d(`store.tribe_boost_failed`)};return}let r=V.hardBalanceOf(t),i=V.balanceOutcome(r,n);if(i!==`shortfall`){this.boostNotice={kind:`error`,text:i===`debt`?this.debtText(-r):d(`store.tribe_boost_failed`)};return}this.showInsufficient(e.displayName,n,r);return}if(r.code===`not_found`){this.boostNotice={kind:`error`,text:d(`store.tribe_boost_gone`)},await this.load();return}this.boostNotice={kind:`error`,text:d(`store.tribe_boost_failed`)}}}createRenderRoot(){return this}updated(){!this.loadStarted&&this.userMeResponse!==!1&&(this.loadStarted=!0,this.load())}async load(){let[e,t]=await Promise.all([fe(),v()]);this.data=e,this.tribeNamesConfig=t?.tribeNames??null}get price(){return this.tribeNamesConfig?.priceHard??null}get hardBalance(){return this.userMeResponse===!1?0:this.userMeResponse.player.currency?.hard??0}async refreshAfterPurchase(){await this.load(),ue();let e=await h();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}static hardBalanceOf(e){return e===!1?0:e.player.currency?.hard??0}static balanceOutcome(e,t){return e<0?`debt`:t-e<=0?`unexplained`:`shortfall`}static refusalText(e){switch(e.code){case`length`:return d(`store.tribe_name_length`,{min:e.min,max:e.max});case`invalid_charset`:return d(`store.tribe_name_charset`);case`invalid_no_letter`:return d(`store.tribe_name_no_letter`);case`not_allowed`:return d(`store.tribe_name_not_allowed`);default:return d(`store.purchase_failed`)}}debtText(e){return d(`store.pack_debt`,{debt:String(e)})}showInsufficient(e,t,n){this.insufficientInfo={currency:d(`cosmetics.hard`),shortfall:Math.max(1,t-n),item:e,canTopUp:!0}}renderLoginPrompt(){return S`<div
      class="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p class="text-white/60 font-medium">
        ${d(`store.tribes_login_required`)}
      </p>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        @click=${()=>window.showPage?.(`page-account`)}
      >
        ${d(`main.sign_in`)}
      </button>
    </div>`}renderPurchaseCard(){let e=this.price;return S`<section
      class="bg-surface rounded-xl border border-white/10 p-6 flex flex-col gap-3"
    >
      <h3 class="text-lg font-bold text-white">
        ${d(`store.tribes_purchase_heading`)}
      </h3>
      <p class="text-white/60 text-sm leading-relaxed">
        ${d(`store.tribes_purchase_description`)}
      </p>
      <form class="flex flex-col sm:flex-row gap-2" @submit=${this.submit}>
        <label for="tribe-name-input" class="sr-only"
          >${d(`store.tribe_name_placeholder`)}</label
        >
        <input
          id="tribe-name-input"
          type="text"
          maxlength=${ve}
          placeholder=${d(`store.tribe_name_placeholder`)}
          class="flex-1 min-w-0 bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40"
          ?disabled=${this.purchasing}
        />
        <button
          type="submit"
          class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded px-4 py-2 whitespace-nowrap transition-colors cursor-pointer"
          ?disabled=${this.purchasing||e===null}
        >
          ${d(`store.purchase_tribe_button`)}
          ${e===null?``:S`<span class="flex items-center gap-1">
                  <plutonium-icon .size=${18}></plutonium-icon>${e}
                </span>`}
        </button>
      </form>
      ${this.notice?S`<p
              class="text-sm font-medium ${this.notice.kind===`success`?`text-green-400`:`text-red-400`}"
            >
              ${this.notice.text}
            </p>`:``}
    </section>`}renderBoostStatus(e){let t=e.activeBoosts??0;if(t===0)return D;let n=t===1?d(`store.tribe_boost_count`):d(`store.tribe_boost_count_plural`,{count:t}),r=e.boostExpiresAt?new Date(e.boostExpiresAt):null,i=r!==null&&!Number.isNaN(r.getTime())?r.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):null;return S`<span class="text-xs text-amber-300 mt-0.5">
      ${n}${i?S` ·
            ${d(`store.tribe_boost_next_expiry`,{date:i})}`:``}
    </span>`}renderBoostButton(e){let t=this.tribeNamesConfig;return t===null||H[e.status]!==`active`?D:S`<button
      class="shrink-0 flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      ?disabled=${this.boostingId!==null}
      @click=${()=>this.boost(e)}
    >
      ${d(`store.tribe_boost_button`)}
      <span class="flex items-center gap-0.5 normal-case">
        <plutonium-icon .size=${14}></plutonium-icon>${t.boostPriceHard}
      </span>
    </button>`}renderStatsButton(e){return H[e.status]===`active`?S`<button
      class="shrink-0 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      @click=${()=>this.statsName=e.displayName}
    >
      ${d(`store.tribe_stats_button`)}
    </button>`:D}renderTribeRow(e){let t=ye[H[e.status]];return S`<div
      class="flex items-center justify-between gap-3 bg-surface rounded-lg border border-white/10 px-4 py-3"
    >
      <div class="flex flex-col min-w-0">
        <span class="font-bold text-white truncate">${e.displayName}</span>
        ${this.renderBoostStatus(e)}
        ${e.reviewReason?S`<span class="text-xs text-white/50 mt-0.5"
                >${e.reviewReason}</span
              >`:``}
      </div>
      <div class="shrink-0 flex items-center gap-2">
        ${this.renderStatsButton(e)} ${this.renderBoostButton(e)}
        <span
          class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${t.classes}"
        >
          ${d(t.labelKey)}
        </span>
      </div>
    </div>`}renderList(){if(this.data===null)return O();if(this.data===!1)return S`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${d(`store.tribes_load_failed`)}
      </p>`;let e=[...this.data.names].sort((e,t)=>(t.activeBoosts??0)-(e.activeBoosts??0));return e.length===0?S`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${d(`store.no_tribes`)}
      </p>`:S`<div class="flex flex-col gap-2">
      ${e.map(e=>this.renderTribeRow(e))}
    </div>`}render(){return this.userMeResponse===!1?this.renderLoginPrompt():this.statsName===null?S`<div
      class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
    >
      ${this.renderPurchaseCard()}
      <section class="flex flex-col gap-3">
        <h3
          class="text-sm font-bold uppercase tracking-wider text-white/60 px-1"
        >
          ${d(`store.your_tribes_heading`)}
        </h3>
        ${this.boostNotice?S`<p
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
    </div>`:S`<div
        class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
      >
        <tribe-stats-view
          .tribeName=${this.statsName}
          @back=${()=>this.statsName=null}
        ></tribe-stats-view>
      </div>`}};C([x({attribute:!1})],U.prototype,`userMeResponse`,void 0),C([m()],U.prototype,`data`,void 0),C([m()],U.prototype,`purchasing`,void 0),C([m()],U.prototype,`notice`,void 0),C([m()],U.prototype,`tribeNamesConfig`,void 0),C([m()],U.prototype,`boostingId`,void 0),C([m()],U.prototype,`boostNotice`,void 0),C([m()],U.prototype,`insufficientInfo`,void 0),C([m()],U.prototype,`statsName`,void 0),C([ie(`#tribe-name-input`)],U.prototype,`input`,void 0),U=V=C([w(`tribes-panel`)],U);var be=1e3,W=.5,xe=3e4,G=50,Se=120;function K(e){if(!e.startsWith(`pattern:`))return e;let[,t]=e.split(`:`);return`pattern:${t}`}function Ce(){return se()?`steam`:f.isOnCrazyGames()?`crazygames`:`web`}function we(e){try{let t=a();fetch(`${me()}/store/events`,{method:`POST`,keepalive:!0,headers:{"Content-Type":`application/json`,...t===``?{}:{Authorization:t}},body:JSON.stringify(e)}).catch(()=>{})}catch{}}var Te=class{constructor(e={}){this.observer=null,this.watched=new Map,this.queue=[],this.seenImpressions=new Set,this.seenClicks=new Set,this.onPageHide=()=>this.flush(),this.onVisibility=()=>{if(document.visibilityState===`hidden`){for(let e of this.watched.values())this.stopTimer(e);this.flush();return}for(let e of this.watched.values())e.visible&&this.startTimer(e)},this.send=e.send??we,this.interval=setInterval(()=>this.flush(),xe),window.addEventListener(`pagehide`,this.onPageHide),document.addEventListener(`visibilitychange`,this.onVisibility)}beginPageView(){this.seenImpressions.clear(),this.seenClicks.clear()}observe(e,t,n){let r=K(t),i=this.watched.get(e);i!==void 0&&i.item===r&&JSON.stringify(i.placement)===JSON.stringify(n)||(this.observer??=new IntersectionObserver(e=>this.onEntries(e),{threshold:W}),i!==void 0&&(this.stopTimer(i),this.observer.unobserve(e)),this.watched.set(e,{item:r,placement:n,timer:null,visible:!1}),this.observer.observe(e))}releaseDetached(){for(let[e,t]of this.watched)e.isConnected||(t.timer!==null&&clearTimeout(t.timer),this.observer?.unobserve(e),this.watched.delete(e))}onEntries(e){for(let t of e){let e=this.watched.get(t.target);e!==void 0&&(this.stopTimer(e),e.visible=t.isIntersecting&&t.intersectionRatio>=W,e.visible&&document.visibilityState!==`hidden`&&this.startTimer(e))}}startTimer(e){this.stopTimer(e),e.timer=setTimeout(()=>{e.timer=null,!this.seenImpressions.has(e.item)&&(this.seenImpressions.add(e.item),this.enqueue({type:`impression`,item:e.item,placement:e.placement}))},be)}stopTimer(e){e.timer!==null&&(clearTimeout(e.timer),e.timer=null)}click(e,t){let n=K(e);this.seenClicks.has(n)||(this.seenClicks.add(n),this.enqueue({type:`click`,item:n,placement:t}))}enqueue(e){e.item.length>Se||this.queue.push(e)}flush(){if(this.queue.length===0)return;let e=this.queue;this.queue=[];let t=Ce();for(let n=0;n<e.length;n+=G)this.send({platform:t,events:e.slice(n,n+G)})}dispose(){this.flush(),clearInterval(this.interval),window.removeEventListener(`pagehide`,this.onPageHide),document.removeEventListener(`visibilitychange`,this.onVisibility);for(let e of this.watched.values())e.timer!==null&&clearTimeout(e.timer);this.watched.clear(),this.observer?.disconnect(),this.observer=null}},Ee=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`});function q(e){return Ee.format(e/100)}function De(e){return te.options.includes(e)}var Oe=[`sale`,`patterns`,`flags`,`crowns`];function J(e){return e.startsWith(`crown:`)?`crowns`:e.startsWith(`flag:`)?`flags`:`patterns`}var ke=15e3,Ae=8;function Y(e){let t=Date.now();return(e?.promotions??[]).some(e=>new Date(e.endsAt).getTime()<=t)}function X(e){return e.find(e=>e.some(e=>_(e.cosmetic)?.kind===`flash`))}function Z(e){return e.some(e=>_(e.cosmetic)!==null)}function Q(e){let t=X(e),n=e.filter(e=>e!==t);return[...t?[t]:[],...n.filter(Z),...n.filter(e=>!Z(e))]}var $=class extends ce{constructor(...e){super(...e),this.routerName=`store`,this.cosmetics=null,this.affiliateCode=null,this.userMeResponse=!1,this.authSettled=!1,this.cosmeticsSubTab=`patterns`,this.requestedItem=null,this.inspected=null,this.previewingCosmetic=null,this.visibleGroups=[],this.openedPack=null,this.pages=new _e(this),this.onUserMeEvent=e=>{let t=e;this.onUserMe(t.detail)},this.onOpenCosmeticPreview=e=>{let t=e,n=e.target;n?.closest?.(`pack-contents-dialog`)||this.trackClick(t.detail,n),this.previewingCosmetic=t.detail,this.requestUpdate()},this.rowObserver=null,this.saleEndTimer=null,this.saleRetryTimer=null,this.saleRefetchGeneration=0,this.catalogRequest=0,this.alignFrame=null,this.tracker=null}modalConfig(){return this.affiliateCode?{showScrollToTop:!0}:{showScrollToTop:!0,tabs:[{key:`packs`,label:d(`store.packs`)},{key:`subscriptions`,label:d(`store.subscriptions`)},{key:`bundles`,label:d(`store.bundles`)},{key:`cosmetics`,label:d(`store.cosmetics`)},{key:`effects`,label:d(`store.effects`)},{key:`tribes`,label:d(`store.tribes`)}]}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.onUserMeEvent);let e=n();e!==null&&this.onUserMe(e.response),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),typeof ResizeObserver<`u`&&(this.rowObserver??=new ResizeObserver(()=>N(this)),this.rowObserver.observe(this))}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.onUserMeEvent),this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),this.rowObserver?.disconnect(),this.tracker?.dispose(),this.tracker=null,this.alignFrame!==null&&cancelAnimationFrame(this.alignFrame),this.alignFrame=null,super.disconnectedCallback()}updated(e){super.updated(e),this.observeProducts(),N(this),!(typeof requestAnimationFrame>`u`)&&(this.alignFrame??=requestAnimationFrame(()=>{this.alignFrame=null,N(this)}))}async onUserMe(e){this.userMeResponse=e,this.authSettled=!0,await this.loadCatalog(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}renderHeader(){let e=this.userMeResponse===!1?void 0:this.userMeResponse.player.currency;return p({title:d(`store.title`),onBack:()=>this.close(),ariaLabel:d(`common.back`),rightContent:S`<div class="flex items-center gap-4">
        ${e?S`<currency-display
                .hard=${e.hard}
                .soft=${e.soft}
              ></currency-display>`:``}
        <not-logged-in-warning></not-logged-in-warning>
      </div>`})}resolvedPurchasables(){return u(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.relationship===`purchasable`)}cosmeticsGroups(e){let t=this.resolvedPurchasables(),n=A(t.filter(e=>e.type===`pattern`||e.type===`skin`)),r=t.filter(e=>e.type===`flag`).map(e=>[e]),i=t.filter(e=>e.type===`crown`).map(e=>[e]);if(e===`sale`){let e=t.filter(e=>e.type===`effect`||e.type===`cosmeticPack`).map(e=>[e]);return Q([...n,...r,...i,...e].filter(Z))}return Q(e===`flags`?r:e===`crowns`?i:n)}groupsForTab(e){return this.affiliateCode?A(this.resolvedPurchasables().filter(e=>{let t=e.cosmetic;return t!==null&&`affiliateCode`in t&&t.affiliateCode===this.affiliateCode})):e===`cosmetics`?(this.cosmeticsSubTab===`sale`&&this.cosmeticsGroups(`sale`).length===0&&(this.cosmeticsSubTab=`patterns`),this.cosmeticsGroups(this.cosmeticsSubTab)):e===`effects`?this.resolvedPurchasables().filter(e=>e.type===`effect`).map(e=>[e]):e===`packs`?this.resolvedPurchasables().filter(e=>e.type===`pack`).map(e=>[e]):e===`bundles`?u(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`cosmeticPack`&&(e.relationship!==`blocked`||this.ownedPackItemNames(e).length>0)).map(e=>[e]):e===`subscriptions`?u(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`subscription`&&(e.relationship===`purchasable`||e.relationship===`owned`)).map(e=>[e]):[]}inspect(e){this.inspected=e,this.requestUpdate()}activate(e){this.trackClick(e,this.productFor(e)),e.type===`cosmeticPack`&&(this.openedPack=e),P(e)&&(this.previewingCosmetic=e),this.inspect(e)}placementFor(e){if(e.closest(`[data-store-flash]`))return{kind:`flash`};if(this.affiliateCode)return{kind:`affiliate`};let t=this.activeTab;if(De(t))return t===`cosmetics`?{kind:`tab`,tab:t,subTab:this.cosmeticsSubTab}:{kind:`tab`,tab:t}}observeProducts(){if(!(this.tracker===null||typeof IntersectionObserver>`u`)){this.tracker.releaseDetached();for(let e of this.querySelectorAll(`[data-store-product][data-cosmetic-key]`)){let t=e.dataset.cosmeticKey,n=this.placementFor(e);t&&n&&this.tracker.observe(e,t,n)}}}productFor(e){for(let t of this.querySelectorAll(`[data-store-product][data-cosmetic-key]`)){let n=t;if(t.dataset.cosmeticKey===e.key||n.resolved?.key===e.key||n.variants?.some(t=>t.key===e.key))return t}return null}trackClick(e,t){try{let n=this.placementFor(t??this);n&&this.tracker?.click(e.key,n)}catch{}}closePack(){this.openedPack=null,this.requestUpdate()}reconcileInspection(e){let t=e.flat(),n=this.requestedItem;if(n!==null){let e=t.find(e=>ge(e.key,n));if(e!==void 0){this.requestedItem=null,this.inspected=e;return}}let r=t.find(e=>e.key===this.inspected?.key);this.inspected=r??e[0]?.[0]??null}selectVisible(e){this.visibleGroups=e,this.reconcileInspection(e)}onTabEnter(e){this.selectVisible(this.groupsForTab(e)),this.requestUpdate()}visibleCosmeticsSubTabs(){let e=this.cosmeticsGroups(`sale`).length>0;return Oe.filter(t=>t!==`sale`||e)}setCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.selectVisible(this.cosmeticsGroups(e)),this.requestUpdate()}ownedPackItemNames(e){return de(e.cosmetic,this.userMeResponse).map(t=>{let n=re(t,e.packItems??[]);return n?M(n):t.name})}renderStatus(e,t=!1){return S`<span
      data-store-status
      class="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-1.5 text-center font-bold ${t?`border-white/15 bg-white/5 text-xs text-white/60`:`border-emerald-500/40 bg-emerald-500/15 text-base text-emerald-300`}"
      >${e}</span
    >`}renderCardAction(e,t){if(e.type===`subscription`&&e.relationship===`owned`)return this.renderStatus(d(`store.subscribed`));if(e.type===`cosmeticPack`){if(e.relationship===`owned`)return this.renderStatus(d(`store.pack_owned`));if(e.relationship===`blocked`)return this.renderStatus(d(`store.pack_partially_owned`,{items:this.ownedPackItemNames(e).join(`, `)}),!0)}return this.renderPurchaseAction(e,t)}renderCosmeticCards(e=this.visibleGroups,t=!1,n=`block h-full min-w-0`,r=`card`){return S`${e.map(e=>{let i=e.find(e=>e.key===this.inspected?.key),a=i??e[0],o=this.renderCardAction(a,t);return S`<cosmetic-card
        data-store-product
        data-cosmetic-key=${e[0].key}
        class=${n}
        previewSize=${r}
        .resolved=${e[0]}
        .variants=${e.length>1||e[0].type===`pattern`||e[0].type===`skin`?e:[]}
        .activeVariantKey=${a.key}
        .actionContent=${o}
        state=${i?`focused`:`idle`}
        .onActivate=${e=>this.activate(e)}
        .onVariantActivate=${e=>this.inspect(e)}
      ></cosmetic-card>`})}`}renderPurchaseAction(e,n){let i=e.cosmetic,a=e.relationship===`purchasable`,s=a&&(e.type===`pack`||e.type===`subscription`)?i?.product??null:null,c=a&&e.type===`subscription`&&s===null?q(e.cosmetic.priceMonthly):``,l=i!==null&&r(i),u=a&&i?b(i,`hard`):void 0,f=a&&i?b(i,`soft`):void 0,p=()=>{try{return this.placementFor(this.productFor(e)??this)}catch{return}},m=n=>t(e,n,p()),h=e.type===`pack`&&s!==null&&i?.name!==void 0?o(s.price):null;return S`<purchase-button
      .product=${s}
      .dollarPrice=${c}
      .inlineCheckout=${h===null?null:{request:{kind:`currency_pack`,packName:i.name},amountCents:h,successMessageKey:`store.currency_pack_purchase_success`,placement:p}}
      .priceHard=${u??null}
      .priceSoft=${f??null}
      .listPriceHard=${u!==void 0&&!l?i?.listPriceHard??null:null}
      .listPriceSoft=${f!==void 0&&!l?i?.listPriceSoft??null:null}
      .rarity=${i?.rarity??`common`}
      .itemName=${M(e)}
      .dollarLabelKey=${e.type===`subscription`&&n?`store.switch_button`:``}
      .priceSuffix=${e.type===`subscription`?d(`store.price_per_month`):``}
      .onPurchaseDollar=${s||c?()=>m(`dollar`):void 0}
      .onPurchaseHard=${u===void 0?void 0:()=>m(`hard`)}
      .onPurchaseSoft=${f===void 0?void 0:()=>m(`soft`)}
    ></purchase-button>`}renderBrowserLayout(e,t=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`){return S`<div data-store-browser class="grid grid-cols-1 gap-4 p-3">
      <div data-store-grid class=${t}>${e}</div>
    </div>`}renderBrowser(e,t){let n=this.pages.page(`store-grid`,`${this.affiliateCode??``}:${this.activeTab}:${this.cosmeticsSubTab}`,e),r=e.length===0?t.trailingContent?S``:S`<div
              class=${`${t.emptyClass??`col-span-full`} py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`}
            >
              ${d(t.emptyTranslationKey)}
            </div>`:this.renderCosmeticCards(n.items,t.userHasSubscription,t.cardClass,t.previewSize);return this.renderBrowserLayout(S`${r}${n.more}${t.trailingContent??``}`,t.gridClass)}renderCosmeticsPanel(){let e=this.visibleCosmeticsSubTabs(),t=this.cosmeticsSubTab===`sale`?X(this.visibleGroups):void 0,n=this.cosmeticsSubTab===`flags`?`store.no_flags`:this.cosmeticsSubTab===`crowns`?`store.no_crowns`:`store.no_skins`;return S`
      <div
        class="flex flex-nowrap items-center gap-6 overflow-x-auto border-b border-white/10 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>button:first-of-type]:ms-auto [&>button:last-of-type]:me-auto"
      >
        ${e.map(e=>S`<button
            data-store-subtab=${e}
            class="-mb-px flex items-center gap-1.5 shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.cosmeticsSubTab===e?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.setCosmeticsSubTab(e)}
          >
            ${e===`sale`?S`<span
                    class="h-2 w-2 rounded-full bg-aquarius shadow-[0_0_6px_var(--color-aquarius)]"
                    aria-hidden="true"
                  ></span>`:D}${d(e===`sale`?`store.on_sale`:`store.${e}`)}
          </button>`)}
      </div>
      ${t?S`${this.renderFlashHero(t)}
            ${(()=>{let e=this.visibleGroups.filter(e=>e!==t);return e.length>0?this.renderBrowser(e,{emptyTranslationKey:n}):D})()}`:this.renderBrowser(this.visibleGroups,{emptyTranslationKey:n})}
    `}renderFlashHero(e){let t=e.map(e=>_(e.cosmetic)).find(e=>e!==null);return t?S`<section
      data-store-flash
      class="mx-3 mt-3 flex flex-col items-center gap-4 rounded-xl border border-aquarius/50 bg-gradient-to-br from-deep-navy via-deep-navy to-malibu-blue/50 p-4 shadow-[0_0_28px_rgba(63,169,245,0.25)] sm:flex-row sm:items-stretch"
    >
      <div class="w-44 shrink-0 sm:w-52">
        ${this.renderCosmeticCards([e])}
      </div>
      <div
        class="flex flex-1 flex-col items-center justify-center gap-3 text-center sm:items-start sm:text-left"
      >
        <span
          class="flex items-center gap-1.5 text-sm font-black uppercase tracking-widest text-aquarius"
        >
          ${d(`store.flash_sale`)}
        </span>
        <span class="text-2xl font-black leading-tight text-white"
          >${d(`store.flash_sale_hero_title`,{name:M(e[0]),percent:t.percentOff})}</span
        >
        <span class="max-w-sm text-sm text-dawn-blue"
          >${d(`store.flash_sale_hero_body`)}</span
        >
        <span
          class="flex items-baseline gap-2 rounded-lg bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-wider text-dawn-blue"
        >
          ${d(`store.flash_next_in`)}
          <sale-countdown
            class="text-2xl font-black normal-case tracking-normal tabular-nums text-white"
            format="clock"
            .endsAt=${t.endsAt}
          ></sale-countdown>
        </span>
      </div>
    </section>`:S``}renderEffectGrid(){return S`<effects-grid
      mode="purchase"
      tabbed
      .cosmetics=${this.cosmetics}
      .userMeResponse=${this.userMeResponse}
      .affiliateCode=${this.affiliateCode}
      .focusedKey=${this.inspected?.key??null}
      .onPurchaseFocus=${e=>this.activate(e)}
      .renderPurchaseAction=${e=>this.renderPurchaseAction(e,!1)}
      .onVisiblePurchaseItemsChange=${e=>{this.selectVisible(e.map(e=>[e])),this.requestUpdate()}}
    ></effects-grid>`}renderPackGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_packs`,trailingContent:S`<custom-currency-card
        class="block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48"
      ></custom-currency-card>`,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderBundleGrid(){return S`${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_bundles`})}${this.openedPack&&!this.previewingCosmetic?S`<pack-contents-dialog
            .pack=${this.openedPack}
            .actionContent=${this.renderCardAction(this.openedPack,!1)}
            @close=${()=>this.closePack()}
          ></pack-contents-dialog>`:``}`}renderSubscriptionGrid(){let e=this.userMeResponse!==!1&&pe(this.userMeResponse.player)!==null,t=this.visibleGroups.length===1;return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_subscriptions`,userHasSubscription:e,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:t?`block w-full max-w-xs shrink-0`:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,previewSize:t?`detail`:`card`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderSaleBanner(){let e=T(this.cosmetics);return this.scheduleSaleEnd(e),e.length===0?``:S`<sale-banner
      class="block px-3 pt-2"
      .sales=${e}
      .cosmetics=${this.cosmetics}
      @open-sale=${()=>this.openSaleTab()}
    ></sale-banner>`}openSaleTab(){this.cosmeticsSubTab=`sale`,this.activeTab===`cosmetics`?this.setCosmeticsSubTab(`sale`):this.setActiveTab(`cosmetics`)}scheduleSaleEnd(e){if(this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,e.length===0||!this.isModalOpen)return;let t=Math.min(...e.map(e=>new Date(e.endsAt).getTime())),n=Math.min(Math.max(t-Date.now(),0),2**31-1);this.saleEndTimer=setTimeout(()=>{this.saleEndTimer=null,this.refetchAfterSaleEnd(0)},n)}async loadCatalog(){let e=++this.catalogRequest,t=await v();return e===this.catalogRequest&&(this.cosmetics=t??this.cosmetics),t}async refetchAfterSaleEnd(e){let t=this.saleRefetchGeneration;ee();let n=await this.loadCatalog();!this.isModalOpen||t!==this.saleRefetchGeneration||(this.selectVisible(this.groupsForTab(this.activeTab)),this.requestUpdate(),(n===null||Y(this.cosmetics))&&e<Ae&&(this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=setTimeout(()=>{this.saleRetryTimer=null,this.refetchAfterSaleEnd(e+1)},ke)))}renderHeaderSlot(){return S`${this.renderHeader()} ${this.renderSaleBanner()}
    ${this.previewingCosmetic?S`<cosmetic-preview-modal
            .resolved=${this.previewingCosmetic}
            @close-preview=${()=>{this.previewingCosmetic=null,this.requestUpdate()}}
          ></cosmetic-preview-modal>`:``}`}renderBody(e){if(this.affiliateCode)return this.renderAffiliateGrid();switch(e){case`cosmetics`:return this.renderCosmeticsPanel();case`bundles`:return this.renderBundleGrid();case`effects`:return this.renderEffectGrid();case`subscriptions`:return this.renderSubscriptionGrid();case`tribes`:return this.renderTribeGrid();default:return this.renderPackGrid()}}renderTribeGrid(){return this.authSettled?S`<tribes-panel
      .userMeResponse=${this.userMeResponse}
    ></tribes-panel>`:S``}renderAffiliateGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_affiliate_items`})}async onOpen(e){this.tracker??=new Te,this.tracker.beginPageView(),c();let t=typeof e?.affiliateCode==`string`?e.affiliateCode:null;this.affiliateCode=t,this.requestedItem=typeof e?.item==`string`?e.item:null,this.requestedItem!==null&&(this.cosmeticsSubTab=J(this.requestedItem)),e?.sub===`sale`&&(this.cosmeticsSubTab=`sale`),(le()||this.cosmetics===null)&&await this.loadCatalog(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh(),Y(this.cosmetics)&&this.refetchAfterSaleEnd(0)}onClose(){this.tracker?.flush(),this.saleEndTimer!==null&&clearTimeout(this.saleEndTimer),this.saleEndTimer=null,this.saleRetryTimer!==null&&clearTimeout(this.saleRetryTimer),this.saleRetryTimer=null,this.saleRefetchGeneration++;for(let e of this.querySelectorAll(`inline-checkout`))e.closeCardModal();this.affiliateCode=null,this.openedPack=null,this.previewingCosmetic=null,this.pages.reset(),this.requestedItem=null,this.selectVisible(this.groupsForTab(this.activeTab))}async refresh(){this.requestUpdate()}};C([m()],$.prototype,`authSettled`,void 0),$=C([w(`store-modal`)],$);export{$ as StoreModal,ae as saleCoversEverything,Q as saleFirst,J as subTabForItem};