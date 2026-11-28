import{$n as e,Ci as t,Cn as n,Do as r,Oa as i,Sn as a,Xn as o,Zn as s,di as c,hi as l,pi as u,ra as d,si as f,xi as p}from"./index-hx7tETuk.js";var m=class extends n{isRankedEligible(){return r(this.userMeResponse)||this.portalSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.userMeResponse=!1,this.errorMessage=null,this.loading=!0,this.showTrustRequired=!1,this.portalSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=d(`map_component.error`),this.elo2v2=d(`map_component.error`);return}if(this.isRankedEligible()){let e=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,t=d(`matchmaking_modal.no_elo`);this.elo=e?.oneVone?.elo??t,this.elo2v2=e?.twoVtwo?.elo??t}}async onOpen(){this.loading=!0,this.showTrustRequired=!1,this.elo=`...`,this.elo2v2=`...`,this.errorMessage=null;try{let e=await i();this.userMeResponse=e,this.portalSignedIn=t.isOnGamePortal()&&await t.getUserProfile()!==null}catch(e){console.warn(`Failed to fetch user profile for ranked modal`,e),this.userMeResponse=!1,this.errorMessage=d(`map_component.error`),this.elo=d(`map_component.error`),this.elo2v2=d(`map_component.error`)}finally{this.loading=!1,this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return a({title:d(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:d(`common.back`)})}renderBody(){return p`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(d(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?d(`matchmaking_modal.elo`,{elo:this.elo}):d(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(d(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?d(`matchmaking_modal.elo`,{elo:this.elo2v2}):d(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderCard(d(`mode_selector.ranked_clanwars_title`),this.errorMessage??d(`mode_selector.ranked_clanwars_subtitle`),()=>this.handleRanked(`clanwars`),!0)}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${d(`mode_selector.ranked_pairing_note`)}
        </p>
        ${this.showTrustRequired?s(this.isRankedEligible(),()=>this.showTrustRequired=!1,`ranked`):``}
      </div>
    `}renderCard(t,n,r,i=!1){let a=this.trustKnown()?o(e(this.userMeResponse),{tooltipTitle:d(`mode_selector.ranked_trust_tooltip_title`)}):``;return p`
      <button
        @click=${r}
        class="${i?`sm:col-span-2 `:``}relative flex flex-col w-full h-28 sm:h-32 rounded-2xl bg-malibu-blue border-0 transition-all duration-200 hover:bg-aquarius hover:scale-[1.03] hover:shadow-[var(--shadow-action-card-hover)] active:bg-malibu-blue/80 active:scale-[0.98] p-6 items-center justify-center gap-3"
      >
        <div class="flex flex-col items-center gap-1 text-center">
          <h3
            class="text-lg sm:text-xl font-bold text-white uppercase tracking-widest leading-tight"
          >
            ${t}
          </h3>
          <p
            class="text-xs text-white/80 uppercase tracking-wider whitespace-pre-line leading-tight"
          >
            ${n}
          </p>
        </div>
        ${a}
      </button>
    `}trustKnown(){return!this.loading&&this.errorMessage===null}async handleRanked(t){if(this.trustKnown()&&!e(this.userMeResponse)){this.showTrustRequired=!0;return}if(await f()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:t}}))}};c([u()],m.prototype,`elo`,void 0),c([u()],m.prototype,`elo2v2`,void 0),c([u()],m.prototype,`userMeResponse`,void 0),c([u()],m.prototype,`errorMessage`,void 0),c([u()],m.prototype,`loading`,void 0),c([u()],m.prototype,`showTrustRequired`,void 0),c([u()],m.prototype,`portalSignedIn`,void 0),m=c([l(`ranked-modal`)],m);export{m as RankedModal};