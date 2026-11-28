import{Ar as e,Ca as t,Ss as n,Zi as r,_r as i,ai as a,ao as o,ci as s,fi as c,gs as l,hi as u,hs as d,ii as f,jr as p,li as m,ri as h,si as g,ta as _,ui as v,vs as y,wa as b,xs as x}from"./index-BZ-JOJvb.js";import"./PlutoniumIcon-BLvAywb0.js";import{t as S}from"./ProfileMenuModal-BoUHslZI.js";var C=[`free_play.full_game`,`free_play.ranked`,`free_play.custom_lobbies`,`free_play.account`];function w(e,t=!1){let n=[...C,...t?[`free_play.licence_public_lobbies`,`free_play.licence_verified_name`]:[],...o()?[`free_play.ad_free_steam`]:[]];return u`
    <div class="flex flex-col gap-1.5">
      <div class="text-[10px] uppercase tracking-wider text-white/50">
        ${r(e)}
      </div>
      <ul class="flex flex-col gap-1 text-sm text-white/70">
        ${n.map(e=>u`
            <li class="flex gap-2 leading-snug">
              <span class="text-emerald-400 shrink-0" aria-hidden="true"
                >✓</span
              >
              <span>${r(e)}</span>
            </li>
          `)}
      </ul>
    </div>
  `}var T=new Set([`canceled`,`expired`,`incomplete`,`incomplete_expired`,`past_due`,`paused`,`unpaid`]),E=class extends v{constructor(...e){super(...e),this.cosmetic=null,this.steamLicence=!1,this.stacked=null,this.handleManage=async()=>{let e=await b();if(e===!1){await h(r(`account_modal.subscription_portal_failed`));return}window.open(e,`_blank`,`noopener,noreferrer`)},this.handleChangeTier=()=>{this.dispatchEvent(new CustomEvent(`request-close`,{bubbles:!0,composed:!0})),window.location.hash=`modal=store&tab=subscriptions`},this.handleCancel=async()=>{if(await f(this.isSteam()?this.steamText(`account_modal.cancel_subscription_confirm_steam`,`account_modal.cancel_subscription_confirm_steam_no_date`):r(`account_modal.cancel_subscription_confirm`),{heading:r(`account_modal.cancel_subscription`)})){if(!await _()){await h(r(`account_modal.cancel_subscription_failed`));return}await h(this.isSteam()?this.steamText(`account_modal.cancel_subscription_success_steam`,`account_modal.cancel_subscription_success_steam_no_date`):r(`account_modal.cancel_subscription_success`)),t(),this.reloadPage()}},this.reloadPage=()=>{window.location.reload()}}createRenderRoot(){return this}steamText(e,t){let n=this.periodEnd();return n?r(e,{date:n}):r(t)}periodEnd(){return this.sub.currentPeriodEnd?this.sub.currentPeriodEnd.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):null}isGranted(){return l(this.sub)}isSteam(){return this.sub.provider===`steam`}renderStatusPill(){let e=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border`;if(this.sub.cancelAtPeriodEnd)return u`<span
        class="${e} bg-amber-500/10 border-amber-500/30 text-amber-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        ${r(`account_modal.sub_status_canceling`)}
      </span>`;let t=!T.has(this.sub.status),n=r(`account_modal.sub_status_${this.sub.status}`),i=n.startsWith(`account_modal.sub_status_`)?this.sub.status:n;return u`<span
      class="${e} ${t?`bg-green-500/10 border-green-500/30 text-green-300`:`bg-white/5 border-white/15 text-white/60`}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full ${t?`bg-green-400`:`bg-white/40`}"
      ></span>
      ${i}
    </span>`}renderPeriodLine(e){let t=this.periodEnd();if(!t)return c;if(this.isGranted())return this.renderDateLine(r(`account_modal.sub_granted_perks_end_on`,{tier:e,date:t}),!1);if(!this.sub.cancelAtPeriodEnd){let e=this.pushedLine(t);if(e!==null)return this.renderDateLine(e,!1)}let n=this.sub.cancelAtPeriodEnd?`account_modal.sub_status_canceling_on`:`account_modal.sub_renews_on`;return this.renderDateLine(r(n,{date:t}),this.sub.cancelAtPeriodEnd)}pushedLine(e){switch(n(this.sub)){case`dlc`:return r(`account_modal.sub_next_payment_pushed_dlc`,{date:e});case`base`:return r(`account_modal.sub_next_payment_pushed_base`,{date:e});case`gift`:return r(`account_modal.sub_next_payment_pushed_gift`,{date:e});case null:return null}}renderDateLine(e,t){return u`<div
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
    </div>`}renderPerk(e,t){return u`
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
            >${r(t)}</span
          >
        </div>
      </div>
    `}renderManageOnWeb(){return u`
      <p class="text-[11px] text-center text-white/40 leading-snug">
        ${r(`account_modal.manage_subscription_on_web`)}
      </p>
    `}renderGrantedNote(e){return y(this.sub)?u`
      <div class="flex flex-col gap-3">
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${r(`account_modal.sub_granted_from_purchase`,{tier:e})}
        </p>
        ${w(`free_play.after_grant_heading`,this.steamLicence)}
      </div>
    `:u`
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${r(`account_modal.sub_granted_indefinite`)}
        </p>
      `}renderSteamActions(){let e=u`<o-button
      class="flex-1 min-w-[8rem]"
      variant="secondary"
      width="block"
      size="md"
      translationKey="account_modal.manage_subscription"
      @click=${this.handleManage}
    ></o-button>`;return this.sub.cancelAtPeriodEnd?u`<div class="flex flex-col gap-2">
        ${e}
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${this.steamText(`account_modal.manage_subscription_on_steam_ending`,`account_modal.manage_subscription_on_steam_ending_no_date`)}
        </p>
      </div>`:u`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          ${c}
          ${e}
        </div>
        ${u`<p
      class="text-[11px] text-center text-white/40 leading-snug"
    >
      ${r(`account_modal.manage_subscription_on_steam_no_tier_change`)}
    </p>`}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${r(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}renderActions(e){if(this.isGranted())return this.renderGrantedNote(e);if(this.isSteam())return this.renderSteamActions();let t=o();return this.sub.status===`past_due`?u`
        <div class="flex flex-col gap-2">
          <p class="text-sm text-amber-200/80 leading-snug">
            ${r(`account_modal.sub_past_due_note`,{tier:e})}
          </p>
          ${t?this.renderManageOnWeb():u`<o-button
                  variant="primary"
                  width="block"
                  size="md"
                  translationKey="store.manage_billing"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
      `:this.sub.cancelAtPeriodEnd?t?this.renderManageOnWeb():u`
        <o-button
          variant="primary"
          width="block"
          size="md"
          translationKey="account_modal.reactivate_subscription"
          @click=${this.handleManage}
        ></o-button>
      `:u`
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
          ${t?c:u`<o-button
                  class="flex-1 min-w-[8rem]"
                  variant="secondary"
                  width="block"
                  size="md"
                  translationKey="account_modal.manage_subscription"
                  @click=${this.handleManage}
                ></o-button>`}
        </div>
        ${t?this.renderManageOnWeb():c}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${r(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}paidSummary(e){let t=this.periodEnd();if(t===null||this.sub.cancelAtPeriodEnd||T.has(this.sub.status)||n(this.sub)!==null)return null;let i=this.cosmetic?.product?.price;return[e,r(`account_modal.sub_next_payment`,{date:t}),...i?[r(`account_modal.sub_price_monthly`,{price:i})]:[]].join(` · `)}giftSummary(e){let t=this.periodEnd(),n=this.cosmetic?.dailyHardCurrency??0;return[y(this.sub)?r(`account_modal.sub_gift_from_steam`,{tier:e}):r(`account_modal.sub_gift_free`,{tier:e}),...t?[r(`account_modal.sub_gift_ends`,{date:t})]:[],...n>0?[r(`account_modal.sub_gift_daily`,{amount:n.toLocaleString()})]:[]].join(` · `)}renderStacked(e){let t=this.stacked===`paid`?this.paidSummary(e):this.giftSummary(e);return u`
      <div
        class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div class="text-base font-bold text-white leading-snug min-w-0">
            ${t??e}
          </div>
          ${this.renderStatusPill()}
        </div>
        ${t===null?this.renderPeriodLine(e):c}
        ${this.stacked===`paid`?u`<div class="border-t border-white/10 pt-4">
                ${this.renderActions(e)}
              </div>`:c}
      </div>
    `}render(){let{sub:e,cosmetic:t}=this,n=p(`subscriptions`,t?.name??e.tier);return this.stacked===null?u`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="text-xl font-bold text-white leading-tight">
                ${n}
              </div>
              ${t?.product?.price?u`<div class="text-sm text-white/50">
                      ${r(`account_modal.sub_price_monthly`,{price:t.product.price})}
                    </div>`:``}
            </div>
            ${this.renderStatusPill()}
          </div>

          ${t?.description?u`<p class="text-sm text-white/70 leading-relaxed">
                  ${t.description}
                </p>`:``}
          ${t?u`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${this.renderPerk(t.hardCurrencySignupBonus,`cosmetics.per_month`)}
                  ${this.renderPerk(t.dailyHardCurrency,`cosmetics.per_day`)}
                </div>`:``}
          ${this.renderPeriodLine(n)}

          <div class="border-t border-white/10 pt-4">
            ${this.renderActions(n)}
          </div>
        </div>
      </div>
    `:this.renderStacked(n)}};a([s({type:Object})],E.prototype,`sub`,void 0),a([s({type:Object})],E.prototype,`cosmetic`,void 0),a([s({type:Boolean})],E.prototype,`steamLicence`,void 0),a([s({type:String})],E.prototype,`stacked`,void 0),E=a([m(`subscription-panel`)],E);var D=class extends S{constructor(...e){super(...e),this.routerName=`subscription`,this.titleKey=`subscription_modal.title`,this.cosmetics=null}renderSignedIn(t){let n=t.player.pastDueSubscription,i=x(t.player)??(n?{tier:n.tier,status:`past_due`,currentPeriodEnd:null,cancelAtPeriodEnd:!1,provider:`stripe`}:null),a=d(t.player);if(!i&&!a)return u`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center flex flex-col items-center gap-4"
          >
            <p class="text-white/60 text-sm">
              ${r(`subscription_modal.none`)}
            </p>
            <div class="w-full text-left rounded-lg bg-white/5 px-4 py-3">
              ${t.steamLicence?w(`free_play.licence_heading`,!0):w(`free_play.free_heading`)}
            </div>
            <o-button
              variant="primary"
              size="md"
              translationKey="subscription_modal.browse"
              @click=${()=>{this.close(),window.location.hash=`modal=store&tab=subscriptions`}}
            ></o-button>
          </div>
        </div>
      `;let o=i!==null&&a!==null,s=(n,r)=>u`
      <subscription-panel
        .sub=${n}
        .cosmetic=${e(this.cosmetics,n.tier)}
        .steamLicence=${t.steamLicence}
        .stacked=${o?r:null}
        @request-close=${()=>this.close()}
      ></subscription-panel>
    `;return u`
      <div class="custom-scrollbar mr-1">
        <div class="p-6 flex flex-col gap-4">
          ${i?s(i,`paid`):``} ${a?s(a,`gift`):``}
        </div>
      </div>
    `}onOpenExtra(){i().then(e=>{this.cosmetics=e})}};a([g()],D.prototype,`cosmetics`,void 0),D=a([m(`subscription-modal`)],D);export{D as SubscriptionModal};