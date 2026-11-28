import{Aa as e,Cs as t,Ir as n,Lr as r,Os as i,Ss as a,Ts as o,di as s,do as c,gi as l,hi as u,ka as d,ks as f,li as p,mi as m,pi as h,ra as g,sa as _,ui as v,vi as y,xi as b,xr as x}from"./index-hx7tETuk.js";import"./PlutoniumIcon-82UaOhgZ.js";import{t as S}from"./ProfileMenuModal-CwhWHZY_.js";var C=[`free_play.full_game`,`free_play.ranked`,`free_play.custom_lobbies`,`free_play.account`];function w(e,t=!1){let n=[...C,...t?[`free_play.licence_public_lobbies`,`free_play.licence_verified_name`]:[],...c()?[`free_play.ad_free_steam`]:[]];return b`
    <div class="flex flex-col gap-1.5">
      <div class="text-[10px] uppercase tracking-wider text-white/50">
        ${g(e)}
      </div>
      <ul class="flex flex-col gap-1 text-sm text-white/70">
        ${n.map(e=>b`
            <li class="flex gap-2 leading-snug">
              <span class="text-emerald-400 shrink-0" aria-hidden="true"
                >✓</span
              >
              <span>${g(e)}</span>
            </li>
          `)}
      </ul>
    </div>
  `}var T=new Set([`canceled`,`expired`,`incomplete`,`incomplete_expired`,`past_due`,`paused`,`unpaid`]),E=class extends l{constructor(...t){super(...t),this.cosmetic=null,this.steamLicence=!1,this.stacked=null,this.handleManage=async()=>{let t=await e();if(t===!1){await p(g(`account_modal.subscription_portal_failed`));return}window.open(t,`_blank`,`noopener,noreferrer`)},this.handleChangeTier=()=>{this.dispatchEvent(new CustomEvent(`request-close`,{bubbles:!0,composed:!0})),window.location.hash=`modal=store&tab=subscriptions`},this.handleCancel=async()=>{if(await v(this.isSteam()?this.steamText(`account_modal.cancel_subscription_confirm_steam`,`account_modal.cancel_subscription_confirm_steam_no_date`):g(`account_modal.cancel_subscription_confirm`),{heading:g(`account_modal.cancel_subscription`)})){if(!await _()){await p(g(`account_modal.cancel_subscription_failed`));return}await p(this.isSteam()?this.steamText(`account_modal.cancel_subscription_success_steam`,`account_modal.cancel_subscription_success_steam_no_date`):g(`account_modal.cancel_subscription_success`)),d(),this.reloadPage()}},this.reloadPage=()=>{window.location.reload()}}createRenderRoot(){return this}steamText(e,t){let n=this.periodEnd();return n?g(e,{date:n}):g(t)}periodEnd(){return this.sub.currentPeriodEnd?this.sub.currentPeriodEnd.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):null}isGranted(){return t(this.sub)}isSteam(){return this.sub.provider===`steam`}renderStatusPill(){let e=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border`;if(this.sub.cancelAtPeriodEnd)return b`<span
        class="${e} bg-amber-500/10 border-amber-500/30 text-amber-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        ${g(`account_modal.sub_status_canceling`)}
      </span>`;let t=!T.has(this.sub.status),n=g(`account_modal.sub_status_${this.sub.status}`),r=n.startsWith(`account_modal.sub_status_`)?this.sub.status:n;return b`<span
      class="${e} ${t?`bg-green-500/10 border-green-500/30 text-green-300`:`bg-white/5 border-white/15 text-white/60`}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full ${t?`bg-green-400`:`bg-white/40`}"
      ></span>
      ${r}
    </span>`}renderPeriodLine(e){let t=this.periodEnd();if(!t)return y;if(this.isGranted())return this.renderDateLine(g(`account_modal.sub_granted_perks_end_on`,{tier:e,date:t}),!1);if(!this.sub.cancelAtPeriodEnd){let e=this.pushedLine(t);if(e!==null)return this.renderDateLine(e,!1)}let n=this.sub.cancelAtPeriodEnd?`account_modal.sub_status_canceling_on`:`account_modal.sub_renews_on`;return this.renderDateLine(g(n,{date:t}),this.sub.cancelAtPeriodEnd)}pushedLine(e){switch(f(this.sub)){case`dlc`:return g(`account_modal.sub_next_payment_pushed_dlc`,{date:e});case`base`:return g(`account_modal.sub_next_payment_pushed_base`,{date:e});case`gift`:return g(`account_modal.sub_next_payment_pushed_gift`,{date:e});case null:return null}}renderDateLine(e,t){return b`<div
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
    </div>`}renderPerk(e,t){return b`
      <div
        class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5"
      >
        <plutonium-icon .size=${24}></plutonium-icon>
        <div class="flex flex-col min-w-0">
          <span class="text-sm font-bold text-white leading-tight"
            >${e.toLocaleString()}</span
          >
          <span
            class="text-[10px] uppercase tracking-wider text-white/50 leading-tight"
            >${g(t)}</span
          >
        </div>
      </div>
    `}renderManageOnWeb(){return b`
      <p class="text-[11px] text-center text-white/40 leading-snug">
        ${g(`account_modal.manage_subscription_on_web`)}
      </p>
    `}renderGrantedNote(e){return o(this.sub)?b`
      <div class="flex flex-col gap-3">
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${g(`account_modal.sub_granted_from_purchase`,{tier:e})}
        </p>
        ${w(`free_play.after_grant_heading`,this.steamLicence)}
      </div>
    `:b`
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${g(`account_modal.sub_granted_indefinite`)}
        </p>
      `}renderSteamActions(){let e=b`<o-button
      class="flex-1 min-w-[8rem]"
      variant="secondary"
      width="block"
      size="md"
      translationKey="account_modal.manage_subscription"
      @click=${this.handleManage}
    ></o-button>`;return this.sub.cancelAtPeriodEnd?b`<div class="flex flex-col gap-2">
        ${e}
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${this.steamText(`account_modal.manage_subscription_on_steam_ending`,`account_modal.manage_subscription_on_steam_ending_no_date`)}
        </p>
      </div>`:b`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          ${y}
          ${e}
        </div>
        ${b`<p
      class="text-[11px] text-center text-white/40 leading-snug"
    >
      ${g(`account_modal.manage_subscription_on_steam_no_tier_change`)}
    </p>`}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${g(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}renderActions(e){if(this.isGranted())return this.renderGrantedNote(e);if(this.isSteam())return this.renderSteamActions();let t=c();return this.sub.status===`past_due`?b`
        <div class="flex flex-col gap-2">
          <p class="text-sm text-amber-200/80 leading-snug">
            ${g(`account_modal.sub_past_due_note`,{tier:e})}
          </p>
          ${t?this.renderManageOnWeb():b`<o-button
                  variant="primary"
                  width="block"
                  size="md"
                  translationKey="store.manage_billing"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
      `:this.sub.cancelAtPeriodEnd?t?this.renderManageOnWeb():b`
        <o-button
          variant="primary"
          width="block"
          size="md"
          translationKey="account_modal.reactivate_subscription"
          @click=${this.handleManage}
        ></o-button>
      `:b`
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
          ${t?y:b`<o-button
                  class="flex-1 min-w-[8rem]"
                  variant="secondary"
                  width="block"
                  size="md"
                  translationKey="account_modal.manage_subscription"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
        ${t?this.renderManageOnWeb():y}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${g(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}paidSummary(e){let t=this.periodEnd();if(t===null||this.sub.cancelAtPeriodEnd||T.has(this.sub.status)||f(this.sub)!==null)return null;let n=this.cosmetic?.product?.price;return[e,g(`account_modal.sub_next_payment`,{date:t}),...n?[g(`account_modal.sub_price_monthly`,{price:n})]:[]].join(` · `)}giftSummary(e){let t=this.periodEnd(),n=this.cosmetic?.dailyHardCurrency??0;return[o(this.sub)?g(`account_modal.sub_gift_from_steam`,{tier:e}):g(`account_modal.sub_gift_free`,{tier:e}),...t?[g(`account_modal.sub_gift_ends`,{date:t})]:[],...n>0?[g(`account_modal.sub_gift_daily`,{amount:n.toLocaleString()})]:[]].join(` · `)}renderStacked(e){let t=this.stacked===`paid`?this.paidSummary(e):this.giftSummary(e);return b`
      <div
        class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div class="text-base font-bold text-white leading-snug min-w-0">
            ${t??e}
          </div>
          ${this.renderStatusPill()}
        </div>
        ${t===null?this.renderPeriodLine(e):y}
        ${this.stacked===`paid`?b`<div class="border-t border-white/10 pt-4">
                ${this.renderActions(e)}
              </div>`:y}
      </div>
    `}render(){let{sub:e,cosmetic:t}=this,n=r(`subscriptions`,t?.name??e.tier);return this.stacked===null?b`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="text-xl font-bold text-white leading-tight">
                ${n}
              </div>
              ${t?.product?.price?b`<div class="text-sm text-white/50">
                      ${g(`account_modal.sub_price_monthly`,{price:t.product.price})}
                    </div>`:``}
            </div>
            ${this.renderStatusPill()}
          </div>

          ${t?.description?b`<p class="text-sm text-white/70 leading-relaxed">
                  ${t.description}
                </p>`:``}
          ${t?b`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${this.renderPerk(t.hardCurrencySignupBonus,`cosmetics.per_month`)}
                  ${this.renderPerk(t.dailyHardCurrency,`cosmetics.per_day`)}
                </div>`:``}
          ${this.renderPeriodLine(n)}

          <div class="border-t border-white/10 pt-4">
            ${this.renderActions(n)}
          </div>
        </div>
      </div>
    `:this.renderStacked(n)}};s([m({type:Object})],E.prototype,`sub`,void 0),s([m({type:Object})],E.prototype,`cosmetic`,void 0),s([m({type:Boolean})],E.prototype,`steamLicence`,void 0),s([m({type:String})],E.prototype,`stacked`,void 0),E=s([u(`subscription-panel`)],E);var D=class extends S{constructor(...e){super(...e),this.routerName=`subscription`,this.titleKey=`subscription_modal.title`,this.cosmetics=null}renderSignedIn(e){let t=e.player.pastDueSubscription,r=i(e.player)??(t?{tier:t.tier,status:`past_due`,currentPeriodEnd:null,cancelAtPeriodEnd:!1,provider:`stripe`}:null),o=a(e.player);if(!r&&!o)return b`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center flex flex-col items-center gap-4"
          >
            <p class="text-white/60 text-sm">
              ${g(`subscription_modal.none`)}
            </p>
            <div class="w-full text-left rounded-lg bg-white/5 px-4 py-3">
              ${e.steamLicence?w(`free_play.licence_heading`,!0):w(`free_play.free_heading`)}
            </div>
            <o-button
              variant="primary"
              size="md"
              translationKey="subscription_modal.browse"
              @click=${()=>{this.close(),window.location.hash=`modal=store&tab=subscriptions`}}
            ></o-button>
          </div>
        </div>
      `;let s=r!==null&&o!==null,c=(t,r)=>b`
      <subscription-panel
        .sub=${t}
        .cosmetic=${n(this.cosmetics,t.tier)}
        .steamLicence=${e.steamLicence}
        .stacked=${s?r:null}
        @request-close=${()=>this.close()}
      ></subscription-panel>
    `;return b`
      <div class="custom-scrollbar mr-1">
        <div class="p-6 flex flex-col gap-4">
          ${r?c(r,`paid`):``} ${o?c(o,`gift`):``}
        </div>
      </div>
    `}onOpenExtra(){x().then(e=>{this.cosmetics=e})}};s([h()],D.prototype,`cosmetics`,void 0),D=s([u(`subscription-modal`)],D);export{D as SubscriptionModal};