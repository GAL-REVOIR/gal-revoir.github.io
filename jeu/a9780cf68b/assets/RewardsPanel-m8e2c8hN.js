import{$i as e,A as t,Ta as n,_i as r,aa as i,ai as a,di as o,fi as s,ia as c,li as l,si as u,ui as d,wa as f,yi as p,ys as m}from"./index-BHQpe8wU.js";import"./CapIcon-DWYUmxOg.js";import"./PlutoniumIcon-TjVB4nmC.js";var h=class extends s{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(t){if(!this.claiming){this.claiming=!0;try{let r=await i(t.id);if(r===!1){await a(e(`account_modal.claim_failed`));return}if(n(),r!==`not_found`&&`held`in r){let e=await f(),n=e===!1?this.rewards:e.player.rewards??[];this.emitChanged({currency:e===!1?null:e.player.currency??null,rewards:n.map(e=>e.id===t.id&&m(e)?{...e,held:r.held}:e)});return}if(r===`not_found`){let e=await f();this.emitChanged({currency:e===!1?null:e.player.currency??null,rewards:e===!1?this.rewards.filter(e=>e.id!==t.id):e.player.rewards??[]});return}this.emitChanged({currency:r.currency,rewards:this.rewards.filter(e=>e.id!==t.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let t=await c();if(t===!1){await a(e(`account_modal.claim_failed`));return}n(),this.emitChanged({currency:t.currency,rewards:t.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(n){let r=t(n.reason);return r===void 0?n.note?n.note:n.reason===`subscription_signup_bonus`?e(`account_modal.reward_signup_bonus`):n.reason===`subscription_monthly_bonus`?e(`account_modal.reward_monthly_bonus`):n.reason===`subscription_daily`?e(`account_modal.reward_daily`):n.reason:e(r)}renderReward(t){let n=t.currencyType===`hard`;return r`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${n?r`<plutonium-icon .size=${20}></plutonium-icon>`:r`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${n?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(t.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(t)}</span
            >
          </div>
        </div>
        ${m(t)?r`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(t)}
              ></o-button>`:r`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${t.held===`trust`?e(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=p.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let t=this.rewards.filter(e=>!m(e)),n=new Set;return t.some(e=>e.held===`trust`)&&n.add(this.trustNoteKey()),t.some(e=>e.held!==`trust`)&&n.add(this.otherHoldNoteKey()),[...n].map(t=>r`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${e(t)}
        </p>`)}render(){if(this.rewards.length===0)return r``;let t=this.rewards.filter(m);return r`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${e(`account_modal.unclaimed_rewards`)}
          </h3>
          ${t.length>1?r`<o-button
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
    `}};u([d({type:Array})],h.prototype,`rewards`,void 0),u([d({type:Boolean})],h.prototype,`signedIn`,void 0),u([l()],h.prototype,`claiming`,void 0),h=u([o(`rewards-panel`)],h);