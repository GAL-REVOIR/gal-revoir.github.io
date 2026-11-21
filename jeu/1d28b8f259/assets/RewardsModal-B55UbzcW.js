import{Yi as e,_n as t,ai as n,hs as r,pi as i,ri as a,si as o,vn as s}from"./index-C4scEURh.js";import"./RewardsPanel-Cf2GMl0e.js";var c=class extends s{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(r)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return t({title:e(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`)})}renderBody(){return i`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};a([n()],c.prototype,`rewards`,void 0),a([n()],c.prototype,`signedIn`,void 0),c=a([o(`rewards-modal`)],c);export{c as RewardsModal};