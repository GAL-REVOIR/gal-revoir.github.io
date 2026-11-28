import{$i as e,_i as t,bn as n,di as r,li as i,si as a,yn as o,ys as s}from"./index-BHQpe8wU.js";import"./RewardsPanel-m8e2c8hN.js";var c=class extends n{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(s)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return o({title:e(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`)})}renderBody(){return t`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};a([i()],c.prototype,`rewards`,void 0),a([i()],c.prototype,`signedIn`,void 0),c=a([r(`rewards-modal`)],c);export{c as RewardsModal};