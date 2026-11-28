import{Zi as e,_s as t,ai as n,bn as r,hi as i,li as a,si as o,yn as s}from"./index-BZ-JOJvb.js";import"./RewardsPanel-ocQUOG2k.js";var c=class extends r{constructor(...e){super(...e),this.rewards=[],this.signedIn=!1,this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.hasClaimable()||this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e,t){this.rewards=e,this.signedIn=t,this.open()}hasClaimable(){return this.rewards.some(t)}open(e){this.hasClaimable()&&super.open(e)}renderHeaderSlot(){return s({title:e(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`)})}renderBody(){return i`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          .signedIn=${this.signedIn}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};n([o()],c.prototype,`rewards`,void 0),n([o()],c.prototype,`signedIn`,void 0),c=n([a(`rewards-modal`)],c);export{c as RewardsModal};