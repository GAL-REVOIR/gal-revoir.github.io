import{A as e,Ca as t,Sa as n,Zi as r,_i as i,_s as a,ai as o,ci as s,hi as c,li as l,na as u,ra as d,ri as f,si as p,ui as m}from"./index-BZ-JOJvb.js";import"./CapIcon-DZBxta6E.js";import"./PlutoniumIcon-BLvAywb0.js";var h=class extends m{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let i=await d(e.id);if(i===!1){await f(r(`account_modal.claim_failed`));return}if(t(),i!==`not_found`&&`held`in i){let t=await n(),r=t===!1?this.rewards:t.player.rewards??[];this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:r.map(t=>t.id===e.id&&a(t)?{...t,held:i.held}:t)});return}if(i===`not_found`){let t=await n();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:i.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await u();if(e===!1){await f(r(`account_modal.claim_failed`));return}t(),this.emitChanged({currency:e.currency,rewards:e.held})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(t){let n=e(t.reason);return n===void 0?t.note?t.note:t.reason===`subscription_signup_bonus`?r(`account_modal.reward_signup_bonus`):t.reason===`subscription_monthly_bonus`?r(`account_modal.reward_monthly_bonus`):t.reason===`subscription_daily`?r(`account_modal.reward_daily`):t.reason:r(n)}renderReward(e){let t=e.currencyType===`hard`;return c`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?c`<plutonium-icon .size=${20}></plutonium-icon>`:c`<cap-icon .size=${20}></cap-icon>`}
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
        ${a(e)?c`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim"
                .disable=${this.claiming}
                @click=${()=>this.handleClaim(e)}
              ></o-button>`:c`<span
                data-reward-held
                class="shrink-0 text-xs font-bold text-white/60 text-right"
                >${e.held===`trust`?r(`account_modal.reward_held_trust`):``}</span
              >`}
      </div>
    `}trustNoteKey(){let e=i.isOnGamePortal();return this.signedIn?e?`account_modal.reward_held_trust_info_crazygames`:`account_modal.reward_held_trust_info`:e?`account_modal.reward_held_trust_info_signed_out_crazygames`:`account_modal.reward_held_trust_info_signed_out`}otherHoldNoteKey(){return`account_modal.reward_held_other_info`}renderHeldNotes(){let e=this.rewards.filter(e=>!a(e)),t=new Set;return e.some(e=>e.held===`trust`)&&t.add(this.trustNoteKey()),e.some(e=>e.held!==`trust`)&&t.add(this.otherHoldNoteKey()),[...t].map(e=>c`<p data-reward-held-note class="mt-3 text-xs text-white/60">
          ${r(e)}
        </p>`)}render(){if(this.rewards.length===0)return c``;let e=this.rewards.filter(a);return c`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${r(`account_modal.unclaimed_rewards`)}
          </h3>
          ${e.length>1?c`<o-button
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
    `}};o([s({type:Array})],h.prototype,`rewards`,void 0),o([s({type:Boolean})],h.prototype,`signedIn`,void 0),o([p()],h.prototype,`claiming`,void 0),h=o([l(`rewards-panel`)],h);