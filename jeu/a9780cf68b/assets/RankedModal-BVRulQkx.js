import{$i as e,Co as t,Jn as n,Xn as r,_i as i,bn as a,di as o,li as s,qn as c,ri as l,si as u,wa as d,yi as f,yn as p}from"./index-BHQpe8wU.js";var m=class extends a{isRankedEligible(){return t(this.userMeResponse)||this.portalSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.userMeResponse=!1,this.errorMessage=null,this.loading=!0,this.showTrustRequired=!1,this.portalSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=e(`map_component.error`),this.elo2v2=e(`map_component.error`);return}if(this.isRankedEligible()){let t=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,n=e(`matchmaking_modal.no_elo`);this.elo=t?.oneVone?.elo??n,this.elo2v2=t?.twoVtwo?.elo??n}}async onOpen(){this.loading=!0,this.showTrustRequired=!1,this.elo=`...`,this.elo2v2=`...`,this.errorMessage=null;try{let e=await d();this.userMeResponse=e,this.portalSignedIn=f.isOnGamePortal()&&await f.getUserProfile()!==null}catch(t){console.warn(`Failed to fetch user profile for ranked modal`,t),this.userMeResponse=!1,this.errorMessage=e(`map_component.error`),this.elo=e(`map_component.error`),this.elo2v2=e(`map_component.error`)}finally{this.loading=!1,this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return p({title:e(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:e(`common.back`)})}renderBody(){return i`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(e(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?e(`matchmaking_modal.elo`,{elo:this.elo}):e(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(e(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?e(`matchmaking_modal.elo`,{elo:this.elo2v2}):e(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderCard(e(`mode_selector.ranked_clanwars_title`),this.errorMessage??e(`mode_selector.ranked_clanwars_subtitle`),()=>this.handleRanked(`clanwars`),!0)}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${e(`mode_selector.ranked_pairing_note`)}
        </p>
        ${this.showTrustRequired?n(this.isRankedEligible(),()=>this.showTrustRequired=!1,`ranked`):``}
      </div>
    `}renderCard(t,n,a,o=!1){let s=this.trustKnown()?c(r(this.userMeResponse),{tooltipTitle:e(`mode_selector.ranked_trust_tooltip_title`)}):``;return i`
      <button
        @click=${a}
        class="${o?`sm:col-span-2 `:``}relative flex flex-col w-full h-28 sm:h-32 rounded-2xl bg-malibu-blue border-0 transition-all duration-200 hover:bg-aquarius hover:scale-[1.03] hover:shadow-[var(--shadow-action-card-hover)] active:bg-malibu-blue/80 active:scale-[0.98] p-6 items-center justify-center gap-3"
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
        ${s}
      </button>
    `}trustKnown(){return!this.loading&&this.errorMessage===null}async handleRanked(e){if(this.trustKnown()&&!r(this.userMeResponse)){this.showTrustRequired=!0;return}if(await l()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:e}}))}};u([s()],m.prototype,`elo`,void 0),u([s()],m.prototype,`elo2v2`,void 0),u([s()],m.prototype,`userMeResponse`,void 0),u([s()],m.prototype,`errorMessage`,void 0),u([s()],m.prototype,`loading`,void 0),u([s()],m.prototype,`showTrustRequired`,void 0),u([s()],m.prototype,`portalSignedIn`,void 0),m=u([o(`ranked-modal`)],m);export{m as RankedModal};