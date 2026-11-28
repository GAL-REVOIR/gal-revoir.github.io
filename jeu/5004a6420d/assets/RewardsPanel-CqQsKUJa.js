import{Ci as e,N as t,Oa as n,ca as r,di as i,gi as a,hi as o,ka as s,la as c,li as l,mi as u,pi as d,ra as f,ws as p,xi as m}from"./index-hx7tETuk.js";import"./CapIcon-Dm-ai8vC.js";import"./PlutoniumIcon-82UaOhgZ.js";var h=class extends a{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let t=await c(e.id);if(t===!1){await l(f(`account_modal.claim_failed`));return}if(s(),t!==`not_found`&&`held`in t){let r=await n(),i=r===!1?this.rewards:r.player.rewards??[];this.emitChanged({currency:r===!1?null:r.player.currency??null,rewards:i.map(n=>n.id===e.id&&p(n)?{...n,held:t.held}:n)});return}if(t===`not_found`){let t=await n();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:t.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await r();if(e===!1){await l(f(`account_modal.claim_failed`));return}s(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){let n=t(e.reason);return n===void 0?e.note?e.note:e.reason===`subscription_signup_bonus`?f(`account_modal.reward_signup_bonus`):e.reason===`subscription_monthly_bonus`?f(`account_modal.reward_monthly_bonus`):e.reason===`subscription_daily`?f(`account_modal.reward_daily`):e.reason:f(n)}renderReward(e){let t=e.currencyType===`hard`;return m`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?m`<plutonium-icon .size=${20}></plutonium-icon>`:m`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${t?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        ${p(e)?m`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:m`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?f(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let t=e.isOnGamePortal();return this.signedIn?t?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:t?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!p(e)),t=new Set;return e.some(e=>e.held===`trust`)&&t.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&t.add(this.otherHoldNoteKey()),[...t].map(e=>m`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${f(e)}
        </p>`)}render(){if(this.rewards.length===0)return m``;let e=this.rewards.filter(p);return m`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${f(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?m`<o-button
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
    `}};i([u({type:Array})],h.prototype,`rewards`,void 0),i([u({type:Boolean})],h.prototype,`signedIn`,void 0),i([d()],h.prototype,`claiming`,void 0),h=i([o(`rewards-panel`)],h);