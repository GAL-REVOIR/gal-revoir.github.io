import{A as e,Yi as t,ai as n,ba as r,ci as i,ea as a,hi as o,hs as s,oi as c,pi as l,ri as u,si as d,ta as f,ti as p,xa as m}from"./index-C4scEURh.js";import"./CapIcon-Byp1Aa4U.js";import"./PlutoniumIcon-B0Uyly3b.js";var h=class extends i{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let n=await f(e.id);if(n===!1){await p(t(`account_modal.claim_failed`));return}if(m(),n!==`not_found`&&`held`in n){let t=await r(),i=t===!1?this.rewards:t.player.rewards??[];this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:i.map(t=>t.id===e.id&&s(t)?{...t,held:n.held}:t)});return}if(n===`not_found`){let t=await r();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:n.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await a();if(e===!1){await p(t(`account_modal.claim_failed`));return}m(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(n){let r=e(n.reason);return r===void 0?n.note?n.note:n.reason===`subscription_signup_bonus`?t(`account_modal.reward_signup_bonus`):n.reason===`subscription_monthly_bonus`?t(`account_modal.reward_monthly_bonus`):n.reason===`subscription_daily`?t(`account_modal.reward_daily`):n.reason:t(r)}renderReward(e){let n=e.currencyType===`hard`;return l`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${n?l`<plutonium-icon .size=${20}></plutonium-icon>`:l`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${n?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${s(e)?l`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:l`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?t(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=o.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!s(e)),n=new Set;return e.some(e=>e.held===`trust`)&&n.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&n.add(this.otherHoldNoteKey()),[...n].map(e=>l`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${t(e)}
        </p>`)}render(){if(this.rewards.length===0)return l``;let e=this.rewards.filter(s);return l`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${t(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?l`<o-button
                  variant="primary"
                  size="xs"
                  translationKey="account_modal.claim_all"
                  .disable=${this.claiming}
                  @click=${this.handleClaimAll}
                ></o-button>`:``}
        </div>
        <div class="flex flex-col gap-2">
          ${this.rewards.map(e=>this.renderReward(e))}
        </div>
        ${this.renderHeldNotes()}
      </div>
    `}};u([c({type:Array})],h.prototype,`rewards`,void 0),u([c({type:Boolean})],h.prototype,`signedIn`,void 0),u([n()],h.prototype,`claiming`,void 0),h=u([d(`rewards-panel`)],h);