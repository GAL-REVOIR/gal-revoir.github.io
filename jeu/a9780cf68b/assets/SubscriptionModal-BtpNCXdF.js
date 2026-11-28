import{$i as e,Cs as t,Ea as n,Mr as r,Nr as i,Ta as a,_i as o,_r as s,_s as c,ai as l,bs as u,di as d,fi as f,li as p,mi as m,oi as h,ra as g,si as _,so as v,ui as y,vs as b,ws as x}from"./index-BHQpe8wU.js";import"./PlutoniumIcon-TjVB4nmC.js";import{t as S}from"./ProfileMenuModal-CohfdGx-.js";var C=[`free_play.full_game`,`free_play.ranked`,`free_play.custom_lobbies`,`free_play.account`];function w(t,n=!1){let r=[...C,...n?[`free_play.licence_public_lobbies`,`free_play.licence_verified_name`]:[],...v()?[`free_play.ad_free_steam`]:[]];return o`
    <div class="flex flex-col gap-1.5">
      <div class="text-[10px] uppercase tracking-wider text-white/50">
        ${e(t)}
      </div>
      <ul class="flex flex-col gap-1 text-sm text-white/70">
        ${r.map(t=>o`
            <li class="flex gap-2 leading-snug">
              <span class="text-emerald-400 shrink-0" aria-hidden="true"
                >✓</span
              >
              <span>${e(t)}</span>
            </li>
          `)}
      </ul>
    </div>
  `}var T=new Set([`canceled`,`expired`,`incomplete`,`incomplete_expired`,`past_due`,`paused`,`unpaid`]),E=class extends f{constructor(...t){super(...t),this.cosmetic=null,this.steamLicence=!1,this.stacked=null,this.handleManage=async()=>{let t=await n();if(t===!1){await l(e(`account_modal.subscription_portal_failed`));return}window.open(t,`_blank`,`noopener,noreferrer`)},this.handleChangeTier=()=>{this.dispatchEvent(new CustomEvent(`request-close`,{bubbles:!0,composed:!0})),window.location.hash=`modal=store&tab=subscriptions`},this.handleCancel=async()=>{if(await h(this.isSteam()?this.steamText(`account_modal.cancel_subscription_confirm_steam`,`account_modal.cancel_subscription_confirm_steam_no_date`):e(`account_modal.cancel_subscription_confirm`),{heading:e(`account_modal.cancel_subscription`)})){if(!await g()){await l(e(`account_modal.cancel_subscription_failed`));return}await l(this.isSteam()?this.steamText(`account_modal.cancel_subscription_success_steam`,`account_modal.cancel_subscription_success_steam_no_date`):e(`account_modal.cancel_subscription_success`)),a(),this.reloadPage()}},this.reloadPage=()=>{window.location.reload()}}createRenderRoot(){return this}steamText(t,n){let r=this.periodEnd();return r?e(t,{date:r}):e(n)}periodEnd(){return this.sub.currentPeriodEnd?this.sub.currentPeriodEnd.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):null}isGranted(){return b(this.sub)}isSteam(){return this.sub.provider===`steam`}renderStatusPill(){let t=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border`;if(this.sub.cancelAtPeriodEnd)return o`<span
        class="${t} bg-amber-500/10 border-amber-500/30 text-amber-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        ${e(`account_modal.sub_status_canceling`)}
      </span>`;let n=!T.has(this.sub.status),r=e(`account_modal.sub_status_${this.sub.status}`),i=r.startsWith(`account_modal.sub_status_`)?this.sub.status:r;return o`<span
      class="${t} ${n?`bg-green-500/10 border-green-500/30 text-green-300`:`bg-white/5 border-white/15 text-white/60`}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full ${n?`bg-green-400`:`bg-white/40`}"
      ></span>
      ${i}
    </span>`}renderPeriodLine(t){let n=this.periodEnd();if(!n)return m;if(this.isGranted())return this.renderDateLine(e(`account_modal.sub_granted_perks_end_on`,{tier:t,date:n}),!1);if(!this.sub.cancelAtPeriodEnd){let e=this.pushedLine(n);if(e!==null)return this.renderDateLine(e,!1)}let r=this.sub.cancelAtPeriodEnd?`account_modal.sub_status_canceling_on`:`account_modal.sub_renews_on`;return this.renderDateLine(e(r,{date:n}),this.sub.cancelAtPeriodEnd)}pushedLine(t){switch(x(this.sub)){case`dlc`:return e(`account_modal.sub_next_payment_pushed_dlc`,{date:t});case`base`:return e(`account_modal.sub_next_payment_pushed_base`,{date:t});case`gift`:return e(`account_modal.sub_next_payment_pushed_gift`,{date:t});case null:return null}}renderDateLine(e,t){return o`<div
      class="flex items-center gap-2 text-sm ${t?`text-amber-200/80`:`text-white/50`}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </svg>
      <span>${e}</span>
    </div>`}renderPerk(t,n){return o`
      <div
        class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5"
      >
        <plutonium-icon .size=${24}></plutonium-icon>
        <div class="flex flex-col min-w-0">
          <span class="text-sm font-bold text-white leading-tight"
            >${t.toLocaleString()}</span
          >
          <span
            class="text-[10px] uppercase tracking-wider text-white/50 leading-tight"
            >${e(n)}</span
          >
        </div>
      </div>
    `}renderManageOnWeb(){return o`
      <p class="text-[11px] text-center text-white/40 leading-snug">
        ${e(`account_modal.manage_subscription_on_web`)}
      </p>
    `}renderGrantedNote(t){return u(this.sub)?o`
      <div class="flex flex-col gap-3">
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${e(`account_modal.sub_granted_from_purchase`,{tier:t})}
        </p>
        ${w(`free_play.after_grant_heading`,this.steamLicence)}
      </div>
    `:o`
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${e(`account_modal.sub_granted_indefinite`)}
        </p>
      `}renderSteamActions(){let t=o`<o-button
      class="flex-1 min-w-[8rem]"
      variant="secondary"
      width="block"
      size="md"
      translationKey="account_modal.manage_subscription"
      @click=${this.handleManage}
    ></o-button>`;return this.sub.cancelAtPeriodEnd?o`<div class="flex flex-col gap-2">
        ${t}
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${this.steamText(`account_modal.manage_subscription_on_steam_ending`,`account_modal.manage_subscription_on_steam_ending_no_date`)}
        </p>
      </div>`:o`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          ${m}
          ${t}
        </div>
        ${o`<p
      class="text-[11px] text-center text-white/40 leading-snug"
    >
      ${e(`account_modal.manage_subscription_on_steam_no_tier_change`)}
    </p>`}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${e(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}renderActions(t){if(this.isGranted())return this.renderGrantedNote(t);if(this.isSteam())return this.renderSteamActions();let n=v();return this.sub.status===`past_due`?o`
        <div class="flex flex-col gap-2">
          <p class="text-sm text-amber-200/80 leading-snug">
            ${e(`account_modal.sub_past_due_note`,{tier:t})}
          </p>
          ${n?this.renderManageOnWeb():o`<o-button
                  variant="primary"
                  width="block"
                  size="md"
                  translationKey="store.manage_billing"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
      `:this.sub.cancelAtPeriodEnd?n?this.renderManageOnWeb():o`
        <o-button
          variant="primary"
          width="block"
          size="md"
          translationKey="account_modal.reactivate_subscription"
          @click=${this.handleManage}
        ></o-button>
      `:o`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          <o-button
            class="flex-1 min-w-[8rem]"
            variant="primary"
            width="block"
            size="md"
            translationKey="account_modal.change_tier"
            @click=${this.handleChangeTier}
          ></o-button>
          ${n?m:o`<o-button
                  class="flex-1 min-w-[8rem]"
                  variant="secondary"
                  width="block"
                  size="md"
                  translationKey="account_modal.manage_subscription"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
        ${n?this.renderManageOnWeb():m}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${e(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}paidSummary(t){let n=this.periodEnd();if(n===null||this.sub.cancelAtPeriodEnd||T.has(this.sub.status)||x(this.sub)!==null)return null;let r=this.cosmetic?.product?.price;return[t,e(`account_modal.sub_next_payment`,{date:n}),...r?[e(`account_modal.sub_price_monthly`,{price:r})]:[]].join(` · `)}giftSummary(t){let n=this.periodEnd(),r=this.cosmetic?.dailyHardCurrency??0;return[u(this.sub)?e(`account_modal.sub_gift_from_steam`,{tier:t}):e(`account_modal.sub_gift_free`,{tier:t}),...n?[e(`account_modal.sub_gift_ends`,{date:n})]:[],...r>0?[e(`account_modal.sub_gift_daily`,{amount:r.toLocaleString()})]:[]].join(` · `)}renderStacked(e){let t=this.stacked===`paid`?this.paidSummary(e):this.giftSummary(e);return o`
      <div
        class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div class="text-base font-bold text-white leading-snug min-w-0">
            ${t??e}
          </div>
          ${this.renderStatusPill()}
        </div>
        ${t===null?this.renderPeriodLine(e):m}
        ${this.stacked===`paid`?o`<div class="border-t border-white/10 pt-4">
                ${this.renderActions(e)}
              </div>`:m}
      </div>
    `}render(){let{sub:t,cosmetic:n}=this,r=i(`subscriptions`,n?.name??t.tier);return this.stacked===null?o`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="text-xl font-bold text-white leading-tight">
                ${r}
              </div>
              ${n?.product?.price?o`<div class="text-sm text-white/50">
                      ${e(`account_modal.sub_price_monthly`,{price:n.product.price})}
                    </div>`:``}
            </div>
            ${this.renderStatusPill()}
          </div>

          ${n?.description?o`<p class="text-sm text-white/70 leading-relaxed">
                  ${n.description}
                </p>`:``}
          ${n?o`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${this.renderPerk(n.hardCurrencySignupBonus,`cosmetics.per_month`)}
                  ${this.renderPerk(n.dailyHardCurrency,`cosmetics.per_day`)}
                </div>`:``}
          ${this.renderPeriodLine(r)}

          <div class="border-t border-white/10 pt-4">
            ${this.renderActions(r)}
          </div>
        </div>
      </div>
    `:this.renderStacked(r)}};_([y({type:Object})],E.prototype,`sub`,void 0),_([y({type:Object})],E.prototype,`cosmetic`,void 0),_([y({type:Boolean})],E.prototype,`steamLicence`,void 0),_([y({type:String})],E.prototype,`stacked`,void 0),E=_([d(`subscription-panel`)],E);var D=class extends S{constructor(...e){super(...e),this.routerName=`subscription`,this.titleKey=`subscription_modal.title`,this.cosmetics=null}renderSignedIn(n){let i=n.player.pastDueSubscription,a=t(n.player)??(i?{tier:i.tier,status:`past_due`,currentPeriodEnd:null,cancelAtPeriodEnd:!1,provider:`stripe`}:null),s=c(n.player);if(!a&&!s)return o`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center flex flex-col items-center gap-4"
          >
            <p class="text-white/60 text-sm">
              ${e(`subscription_modal.none`)}
            </p>
            <div class="w-full text-left rounded-lg bg-white/5 px-4 py-3">
              ${n.steamLicence?w(`free_play.licence_heading`,!0):w(`free_play.free_heading`)}
            </div>
            <o-button
              variant="primary"
              size="md"
              translationKey="subscription_modal.browse"
              @click=${()=>{this.close(),window.location.hash=`modal=store&tab=subscriptions`}}
            ></o-button>
          </div>
        </div>
      `;let l=a!==null&&s!==null,u=(e,t)=>o`
      <subscription-panel
        .sub=${e}
        .cosmetic=${r(this.cosmetics,e.tier)}
        .steamLicence=${n.steamLicence}
        .stacked=${l?t:null}
        @request-close=${()=>this.close()}
      ></subscription-panel>
    `;return o`
      <div class="custom-scrollbar mr-1">
        <div class="p-6 flex flex-col gap-4">
          ${a?u(a,`paid`):``} ${s?u(s,`gift`):``}
        </div>
      </div>
    `}onOpenExtra(){s().then(e=>{this.cosmetics=e})}};_([p()],D.prototype,`cosmetics`,void 0),D=_([d(`subscription-modal`)],D);export{D as SubscriptionModal};