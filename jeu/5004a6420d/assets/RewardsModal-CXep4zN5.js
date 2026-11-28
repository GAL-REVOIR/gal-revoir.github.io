import{Cn as e,Sn as t,di as n,hi as r,pi as i,ra as a,ws as o,xi as s}from"./index-hx7tETuk.js";import"./RewardsPanel-CqQsKUJa.js";var c=class extends e{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(o)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return t({title:a(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:a(`common.back`)})}renderBody(){return s`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};n([i()],c.prototype,`rewards`,void 0),n([i()],c.prototype,`signedIn`,void 0),c=n([r(`rewards-modal`)],c);export{c as RewardsModal};