import{$r as e,Gn as t,Jn as n,Kn as r,Yi as i,_n as a,ai as o,ba as s,hi as c,pi as l,ri as u,si as d,vn as f,yo as p}from"./index-C4scEURh.js";var m=class extends f{isRankedEligible(){return p(this.userMeResponse)||this.portalSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.userMeResponse=!1,this.errorMessage=null,this.loading=!0,this.showTrustRequired=!1,this.portalSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=i(`map_component.error`),this.elo2v2=i(`map_component.error`);return}if(this.isRankedEligible()){let e=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,t=i(`matchmaking_modal.no_elo`);this.elo=e?.oneVone?.elo??t,this.elo2v2=e?.twoVtwo?.elo??t}}async onOpen(){this.loading=!0,this.showTrustRequired=!1,this.elo=`...`,this.elo2v2=`...`,this.errorMessage=null;try{let e=await s();this.userMeResponse=e,this.portalSignedIn=c.isOnGamePortal()&&await c.getUserProfile()!==null}catch(e){console.warn(`Failed to fetch user profile for ranked modal`,e),this.userMeResponse=!1,this.errorMessage=i(`map_component.error`),this.elo=i(`map_component.error`),this.elo2v2=i(`map_component.error`)}finally{this.loading=!1,this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return a({title:i(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:i(`common.back`)})}renderBody(){return l`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(i(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?i(`matchmaking_modal.elo`,{elo:this.elo}):i(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(i(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?i(`matchmaking_modal.elo`,{elo:this.elo2v2}):i(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderCard(i(`mode_selector.ranked_clanwars_title`),this.errorMessage??i(`mode_selector.ranked_clanwars_subtitle`),()=>this.handleRanked(`clanwars`),!0)}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${i(`mode_selector.ranked_pairing_note`)}
        </p>
        ${this.showTrustRequired?r(this.isRankedEligible(),()=>this.showTrustRequired=!1,`ranked`):``}
      </div>
    `}renderCard(e,r,a,o=!1){let s=this.trustKnown()?t(n(this.userMeResponse),{tooltipTitle:i(`mode_selector.ranked_trust_tooltip_title`)}):``;return l`
      <button
        @click=${a}
        class="${o?`sm:col-span-2 `:``}relative flex flex-col w-full h-28 sm:h-32 rounded-2xl bg-malibu-blue border-0 transition-all duration-200 hover:bg-aquarius hover:scale-[1.03] hover:shadow-[var(--shadow-action-card-hover)] active:bg-malibu-blue/80 active:scale-[0.98] p-6 items-center justify-center gap-3"
      >
        <div class="flex flex-col items-center gap-1 text-center">
          <h3
            class="text-lg sm:text-xl font-bold text-white uppercase tracking-widest leading-tight"
          >
            ${e}
          </h3>
          <p
            class="text-xs text-white/80 uppercase tracking-wider whitespace-pre-line leading-tight"
          >
            ${r}
          </p>
        </div>
        ${s}
      </button>
    `}trustKnown(){return!this.loading&&this.errorMessage===null}async handleRanked(t){if(this.trustKnown()&&!n(this.userMeResponse)){this.showTrustRequired=!0;return}if(await e()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:t}}))}};u([o()],m.prototype,`elo`,void 0),u([o()],m.prototype,`elo2v2`,void 0),u([o()],m.prototype,`userMeResponse`,void 0),u([o()],m.prototype,`errorMessage`,void 0),u([o()],m.prototype,`loading`,void 0),u([o()],m.prototype,`showTrustRequired`,void 0),u([o()],m.prototype,`portalSignedIn`,void 0),m=u([d(`ranked-modal`)],m);export{m as RankedModal};