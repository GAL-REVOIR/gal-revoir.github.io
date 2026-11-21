import{n as e}from"./rolldown-runtime-BpQH8Ho1.js";import{Bn as t,Ks as n,Yi as r,_n as i,ai as a,ba as o,ca as s,ci as c,ct as l,fa as u,ii as d,oi as f,os as p,pi as m,ri as h,sa as g,si as _,ui as v,vn as y}from"./index-DOVkn8Nm.js";import{l as b,n as x,o as S,t as C}from"./OfstatsCredit-D8hCvepS.js";import"./LeaderboardTribeTable-D5qFDP_Z.js";import{t as w}from"./ProgressionAccount-BuDdUW03.js";function T(e){let{level:t,prestige:n,legend:r}=e;if(!(t===void 0||n===void 0||r===void 0))return{level:t,prestige:n,legend:r}}function E(e){return T(e)!==void 0}function D(e){let t=T(e);return t!==void 0&&(t.legend||t.prestige>0)}function O(e,t,n,r=24){let i=t?T(e):void 0;return i===void 0?n?m`<span
    class="shrink-0"
    style="width:${r}px;height:${r}px"
    aria-hidden="true"
    data-level-slot
  ></span>`:v:m`<level-badge
      stagger
      class="shrink-0"
      .level=${i.level}
      .prestige=${i.prestige}
      ?legend=${i.legend}
      size=${r}
    ></level-badge>`}var k=class extends c{constructor(...e){super(...e),this.clanData=null,this.isLoading=!1,this.error=null,this.sortBy=`rank`,this.sortOrder=`asc`,this.hasLoaded=!1}createRenderRoot(){return this}async ensureLoaded(){this.hasLoaded||this.isLoading||await this.loadClanLeaderboard()}async loadClanLeaderboard(){this.isLoading=!0,this.error=null;try{let e=await l();if(!e)throw Error(`Failed to load clan leaderboard`);this.clanData=e,this.hasLoaded=!0,this.dispatchEvent(new CustomEvent(`date-range-change`,{detail:{start:e.start,end:e.end},bubbles:!0,composed:!0}))}catch(e){console.warn(`loadClanLeaderboard: request failed`,e),this.error=r(`leaderboard_modal.error`)}finally{this.isLoading=!1}}handleSort(e){this.sortBy===e?this.sortOrder=this.sortOrder===`asc`?`desc`:`asc`:(this.sortBy=e,this.sortOrder=e===`rank`?`asc`:`desc`)}getSortedClans(e){if(this.sortBy===`rank`){let t=[...e];return this.sortOrder===`asc`?t:t.reverse()}let t=[...e];return t.sort((e,t)=>{let n,r;switch(this.sortBy){case`elo`:if(e.elo===null||t.elo===null)return(e.elo===null)-+(t.elo===null);n=e.elo,r=t.elo;break;case`games`:n=e.games,r=t.games;break;case`winScore`:n=e.weightedWins,r=t.weightedWins;break;case`lossScore`:n=e.weightedLosses,r=t.weightedLosses;break;case`ratio`:n=e.weightedWLRatio,r=t.weightedWLRatio;break;default:return 0}return this.sortOrder===`asc`?n-r:r-n}),t}renderLoading(){return m`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"
        ></div>
        <p class="text-blue-200/80 text-sm font-bold tracking-widest uppercase">
          ${r(`common.loading`)}
        </p>
      </div>
    `}renderError(){return m`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="bg-red-500/10 p-6 rounded-full mb-6 border border-red-500/20 shadow-lg shadow-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <p class="mb-8 text-center text-red-100/80 font-medium">
          ${this.error??r(`leaderboard_modal.error`)}
        </p>
        <button
          class="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-bold uppercase transition-all active:scale-95"
          @click=${()=>this.loadClanLeaderboard()}
        >
          ${r(`leaderboard_modal.try_again`)}
        </button>
      </div>
    `}renderNoData(){return m`
      <div
        class="flex flex-col items-center justify-center p-12 text-white/40 h-full"
      >
        <div class="bg-white/5 p-6 rounded-full mb-6 border border-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white/60 mb-2">
          ${r(`leaderboard_modal.no_data_yet`)}
        </h3>
        <p class="text-white/30 text-sm">
          ${r(`leaderboard_modal.no_stats`)}
        </p>
      </div>
    `}render(){if(this.isLoading)return this.renderLoading();if(this.error)return this.renderError();if(!this.clanData||this.clanData.clans.length===0)return this.renderNoData();let{clans:e}=this.clanData,t=this.getSortedClans(e),n=Math.max(...e.map(e=>e.games),1);return m`
      <div class="h-full">
        <div class="h-full border border-white/5 bg-black/20">
          <div
            class="h-full overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/20"
          >
            <table class="w-full text-sm border-collapse table-fixed">
              <colgroup>
                <col style="width: 4rem" />
                <col style="width: 5rem" />
                <col style="width: 5rem" />
                <col style="width: 8rem" />
                <col style="width: 6rem" />
                <col style="width: 6rem" />
                <col style="width: 6rem" />
              </colgroup>
              <thead class="sticky top-0 z-10">
                <tr
                  class="text-white/40 text-[10px] uppercase tracking-wider border-b border-white/5 bg-[#1e2433]"
                >
                  <th class="py-4 px-4 text-center font-bold">
                    ${r(`leaderboard_modal.rank`)}
                  </th>
                  <th class="py-4 px-4 text-left font-bold">
                    ${r(`leaderboard_modal.clan`)}
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`elo`)}
                      aria-sort=${this.sortBy===`elo`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${r(`leaderboard_modal.elo`)}
                      ${this.sortBy===`elo`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`games`)}
                      aria-sort=${this.sortBy===`games`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${r(`leaderboard_modal.games`)}
                      ${this.sortBy===`games`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                    title=${r(`leaderboard_modal.win_score_tooltip`)}
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`winScore`)}
                      aria-sort=${this.sortBy===`winScore`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${r(`leaderboard_modal.win_score`)}
                      ${this.sortBy===`winScore`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold cursor-pointer hover:text-white/60 transition-colors"
                    title=${r(`leaderboard_modal.loss_score_tooltip`)}
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`lossScore`)}
                      aria-sort=${this.sortBy===`lossScore`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${r(`leaderboard_modal.loss_score`)}
                      ${this.sortBy===`lossScore`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold pr-6 cursor-pointer hover:text-white/60 transition-colors"
                  >
                    <button
                      class="whitespace-nowrap uppercase"
                      @click=${()=>this.handleSort(`ratio`)}
                      aria-sort=${this.sortBy===`ratio`?this.sortOrder===`asc`?`ascending`:`descending`:`none`}
                    >
                      ${r(`leaderboard_modal.win_loss_ratio`)}
                      ${this.sortBy===`ratio`?this.sortOrder===`asc`?`↑`:`↓`:`↕`}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                ${t.map((e,t)=>{let i=t+1;return m`
                    <tr
                      class="border-b border-white/5 hover:bg-white/[0.07] transition-colors group"
                    >
                      <td class="py-3 px-4 text-center">
                        <div
                          class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg ${i===1?`text-yellow-400 bg-yellow-400/10 ring-1 ring-yellow-400/20`:i===2?`text-slate-300 bg-slate-400/10 ring-1 ring-slate-400/20`:i===3?`text-amber-600 bg-amber-600/10 ring-1 ring-amber-600/20`:`text-white/40 bg-white/5`}"
                        >
                          ${i===1?`👑`:i===2?`🥈`:i===3?`🥉`:String(i)}
                        </div>
                      </td>
                      <td class="py-3 px-4 font-bold text-blue-300">
                        <div
                          class="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 inline-block"
                        >
                          ${e.clanTag}
                        </div>
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono font-bold text-white"
                      >
                        ${e.elo??`—`}
                      </td>
                      <td class="py-3 px-4 text-right">
                        <div class="flex flex-col items-end gap-1">
                          <span class="text-white font-mono font-medium"
                            >${e.games.toLocaleString()}</span
                          >
                          <div
                            class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"
                          >
                            <div
                              class="h-full bg-blue-500/50 rounded-full"
                              style="width: ${e.games/n*100}%"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono text-green-400/90"
                      >
                        ${e.weightedWins.toLocaleString(void 0,{maximumFractionDigits:1})}
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono text-red-400/90"
                      >
                        ${e.weightedLosses.toLocaleString(void 0,{maximumFractionDigits:1})}
                      </td>
                      <td class="py-3 px-4 text-right pr-6">
                        <div class="inline-flex flex-col items-end">
                          <span
                            class="font-mono font-bold ${e.weightedWLRatio>=1?`text-green-400`:`text-red-400`}"
                            >${e.weightedWLRatio.toLocaleString(void 0,{maximumFractionDigits:2})}</span
                          >
                          <span
                            class="text-[10px] uppercase text-white/30 font-bold tracking-wider"
                            >${r(`leaderboard_modal.ratio`)}</span
                          >
                        </div>
                      </td>
                    </tr>
                  `})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}};h([a()],k.prototype,`clanData`,void 0),h([a()],k.prototype,`isLoading`,void 0),h([a()],k.prototype,`error`,void 0),h([a()],k.prototype,`sortBy`,void 0),h([a()],k.prototype,`sortOrder`,void 0),k=h([_(`leaderboard-clan-table`)],k);var A=864e5,j=e=>Math.floor(e.getTime()/A),M=e=>j(new Date(`${e}T00:00:00Z`));function N(e,t,n){let r=M(e),i=M(t),a=Math.min(i,Math.max(r,j(n)));return{daysLeft:i-a,progress:(a-r+1)/(i-r+1)}}function P(e,t=!1){return new Date(`${e}T00:00:00Z`).toLocaleDateString(void 0,{day:`numeric`,month:`short`,...t?{year:`numeric`}:{},timeZone:`UTC`})}var F=()=>({entries:[],userEntry:null,hasMore:!0,nextPage:1}),I=[n.OneVOne,n.TwoVTwo,n.FreeForAll],L=()=>({[n.OneVOne]:{entries:[],userEntry:null,hasMore:!0},[n.TwoVTwo]:{entries:[],userEntry:null,hasMore:!0},[n.FreeForAll]:{entries:[],userEntry:null,hasMore:!0}}),R=e=>({rank:e.rank,playerId:e.public_id,accountUsername:e.accountUsername,elo:e.elo,games:e.total,wins:e.wins,losses:e.losses,winRate:e.total>0?e.wins/e.total:0,level:e.level,prestige:e.prestige,legend:e.legend,uncertainty:e.uncertainty,tier:e.tier}),z=class extends c{constructor(...e){super(...e),this.rankedType=n.OneVOne,this.ladders=L(),this.showStickyUser=!1,this.isLoading=!1,this.error=null,this.isLoadingMore=!1,this.loadMoreError=null,this.hasLoadedPlayers=!1,this.playerPageSize=50,this.currentPage=1,this.currentUserId=null,this.currentUserIdLoaded=!1,this.ffaCalibration=null,this.ffaHidden=null,this.ffaSeason=null,this.ffaRank=null,this.ffaRankLadders={},this.ffaRanksLoading=new Set,this.ffaRanksFailed=new Set,this.ffaOwnRank=null,this.ffaPositionRow=null,this.ffaOwnRow=null,this.ffaRankGeneration=0,this.ffaRatingAnnounced=!1}get ffaRankActive(){return this.rankedType===n.FreeForAll&&this.ffaRatingServed&&this.ffaRank!==null}get activeLadder(){return this.ffaRankActive?this.ffaRankLadders[this.ffaRank]??F():this.ladders[this.rankedType]}get playerData(){return this.activeLadder.entries}get currentUserEntry(){return this.activeLadder.userEntry===null?this.ffaRankActive&&this.ffaRank===this.ffaOwnRank?this.ffaPositionRow:null:this.activeLadder.userEntry}get ffaRatingLive(){return this.rankedType===n.FreeForAll&&this.ffaRatingServed}get ffaRatingServed(){return this.ffaHidden!==null||this.ladders[n.FreeForAll].entries.some(e=>e.tier!==void 0)}get hasLoadMoreError(){return this.ffaRankActive?this.ffaRanksFailed.has(this.ffaRank):this.loadMoreError!==null}get playerHasMore(){return this.activeLadder.hasMore}mapLadders(e){let t={...this.ladders};for(let n of I)t[n]=e(this.ladders[n]);return t}createRenderRoot(){return this}updated(e){(e.has(`ladders`)||e.has(`ffaHidden`))&&!this.ffaRatingAnnounced&&this.ffaRatingServed&&(this.ffaRatingAnnounced=!0,this.dispatchEvent(new CustomEvent(`ffa-rating-live`,{bubbles:!0}))),e.has(`rankedType`)&&(this.scrollContainer&&(this.scrollContainer.scrollTop=0),this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck())}async ensureLoaded(){this.hasLoadedPlayers||this.isLoading||await this.loadPlayerLeaderboard(!0)}async loadPlayerLeaderboard(e=!1){if(!e&&this.ffaRankActive){await this.loadFfaRankPage(this.ffaRank);return}if(e)this.currentPage=1,this.loadMoreError=null,this.ladders=L(),this.showStickyUser=!1,this.ffaRank=null,this.ffaRankLadders={},this.ffaRanksLoading=new Set,this.ffaRanksFailed=new Set,this.ffaPositionRow=null,this.ffaRankGeneration++;else if(!this.playerHasMore)return;if(!(this.isLoading||this.isLoadingMore)){e?(this.isLoading=!0,this.error=null):(this.isLoadingMore=!0,this.loadMoreError=null);try{let t=await u(this.currentPage);if(t===!1)throw Error(`Failed to load player leaderboard`);if(t===`reached_limit`){this.ladders=this.mapLadders(e=>({...e,hasMore:!1})),this.hasLoadedPlayers=!0;return}this.ffaSeason=t.ffaSeason??(e?null:this.ffaSeason);let r=!this.currentUserIdLoaded;if(!this.currentUserIdLoaded){this.currentUserIdLoaded=!0;let e=await o();this.currentUserId=e?e.player.publicId:null;let t=e?e.player.leaderboard?.ffa:void 0;if(this.ffaOwnRank=t?.tier?b(t.tier)?.base??null:null,this.ffaCalibration=e&&t?.calibrationGames!==void 0&&t.tier===void 0&&await w(e)?{publicId:e.player.publicId,username:e.player.username??null,calibrationGames:t.calibrationGames,games:t.games??0,wins:t.wins??0}:null,this.ffaOwnRow=null,e&&t?.tier!==void 0&&t.elo!==void 0&&t.hiddenByUncertainty!==!0){let n=t.games??0,r=t.wins??0;this.ffaOwnRow={rank:0,playerId:e.player.publicId,accountUsername:e.player.username??null,elo:t.elo,games:n,wins:r,losses:n-r,winRate:n?r/n:0,uncertainty:t.uncertainty,tier:t.tier}}this.ffaHidden=e&&t?.hiddenByUncertainty===!0&&t.elo!==void 0&&t.tier!==void 0&&await w(e)?{rank:0,playerId:e.player.publicId,accountUsername:e.player.username??null,elo:t.elo,games:t.games??0,wins:t.wins??0,losses:(t.games??0)-(t.wins??0),winRate:t.games?(t.wins??0)/t.games:0,uncertainty:t.uncertainty,tier:t.tier}:null}(e||r)&&this.ffaOwnRow!==null&&this.loadFfaPosition(this.ffaOwnRow);let i=!1,a={...this.ladders};for(let e of I){let n=this.ladders[e],r=(t[e]??[]).map(R);r.length>0&&(i=!0);let o=new Set(n.entries.map(e=>e.playerId));a[e]={entries:[...n.entries,...r.filter(e=>!o.has(e.playerId))],userEntry:n.userEntry??r.find(e=>e.playerId===this.currentUserId)??null,hasMore:n.hasMore&&r.length>=this.playerPageSize}}if(this.ladders=a,i&&this.currentPage++,this.ffaRank===null&&this.ffaRatingServed){let e=a[n.FreeForAll].entries[0]?.tier,t=e?b(e)?.base:void 0;this.selectFfaRank(this.ffaOwnRank??t??`grandmaster`)}this.hasLoadedPlayers=!0,this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck()}catch(t){console.warn(`loadPlayerLeaderboard: request failed`,t),e?this.error=r(`leaderboard_modal.error`):this.loadMoreError=r(`leaderboard_modal.error`)}finally{e?this.isLoading=!1:this.isLoadingMore=!1}}}async loadFfaPosition(e){let t=this.ffaRankGeneration,n=await s();n===null||t!==this.ffaRankGeneration||(this.ffaPositionRow={...e,rank:n},this.scheduleStickyVisibilityCheck())}selectFfaRank(e){e!==this.ffaRank&&(this.ffaRank=e,this.showStickyUser=!1,this.scrollContainer&&(this.scrollContainer.scrollTop=0),this.ffaRankLadders[e]===void 0&&this.loadFfaRankPage(e),this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck())}setFfaRankFailed(e,t){let n=new Set(this.ffaRanksFailed);t?n.add(e):n.delete(e),this.ffaRanksFailed=n}handleRankTabKey(e,t){let n=C.length,r=C.indexOf(t),i={ArrowRight:(r+1)%n,ArrowLeft:(r-1+n)%n,Home:0,End:n-1}[e.key];if(i===void 0)return;e.preventDefault();let a=C[i];this.selectFfaRank(a),this.updateComplete.then(()=>this.querySelector(`[role="tab"][data-rank="${a}"]`)?.focus())}async loadFfaRankPage(e){let t=this.ffaRankLadders[e]??F();if(!t.hasMore||this.ffaRanksLoading.has(e))return;let n=this.ffaRankGeneration;this.ffaRanksLoading=new Set([...this.ffaRanksLoading,e]),this.setFfaRankFailed(e,!1);let r=await g(e,t.nextPage);if(n!==this.ffaRankGeneration)return;let i=new Set(this.ffaRanksLoading);if(i.delete(e),this.ffaRanksLoading=i,r===!1){this.setFfaRankFailed(e,!0);return}if(r===`reached_limit`){this.ffaRankLadders={...this.ffaRankLadders,[e]:{...t,hasMore:!1}};return}let a=r.players.map(R),o=new Set(t.entries.map(e=>e.playerId));this.ffaRankLadders={...this.ffaRankLadders,[e]:{entries:[...t.entries,...a.filter(e=>!o.has(e.playerId))],userEntry:t.userEntry??a.find(e=>e.playerId===this.currentUserId)??null,hasMore:a.length>=this.playerPageSize,nextPage:t.nextPage+1}},this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck()}handleTabActivated(){this.scheduleStickyVisibilityCheck(),this.schedulePlayerFillCheck()}openProfile(e){t(`player-profile-modal`).then(()=>document.querySelector(`player-profile-modal`)?.openFromLeaderboard(e),e=>console.error(`player-profile-modal failed to load:`,e))}isVisible(){return this.isConnected&&this.getClientRects().length>0}updateStickyVisibility(){if(!this.currentUserEntry){this.showStickyUser=!1;return}if(!this.scrollContainer||!this.isVisible()){this.showStickyUser=!1;return}let e=this.scrollContainer.querySelector(`[data-current-user="true"]`);if(!e){this.showStickyUser=!0;return}let t=this.scrollContainer.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.scrollContainer.querySelector(`thead`),i=r?r.getBoundingClientRect().bottom:t.top,a=this.showStickyUser?this.scrollContainer.querySelector(`tfoot`):null,o=a?a.getBoundingClientRect().top:t.top+this.scrollContainer.clientHeight,s=n.top>=i-1&&n.bottom<=o+1;this.showStickyUser=!s}scheduleStickyVisibilityCheck(){this.updateComplete.then(()=>{requestAnimationFrame(()=>this.updateStickyVisibility())})}handleScroll(){this.updateStickyVisibility(),this.maybeLoadMorePlayers()}maybeLoadMorePlayers(){if(this.isLoading||this.isLoadingMore||!this.playerHasMore||this.error||this.hasLoadMoreError||!this.scrollContainer||!this.isVisible())return;let e=this.scrollContainer.scrollTop,t=this.scrollContainer.clientHeight,n=this.scrollContainer.scrollHeight,r=e+t>=n-192;t===0||n===0||r&&this.loadPlayerLeaderboard()}schedulePlayerFillCheck(){!this.playerHasMore||this.error||this.hasLoadMoreError||this.updateComplete.then(()=>this.maybeLoadMorePlayers())}renderStickyUserRow(e){if(this.rankedType===n.FreeForAll&&this.currentUserEntry===null&&this.ffaCalibration!==null)return this.renderCalibratingRow(this.ffaCalibration);if(this.rankedType===n.FreeForAll&&this.currentUserEntry===null&&this.ffaHidden!==null)return this.renderHiddenRow(this.ffaHidden);if(!this.currentUserEntry||!this.showStickyUser)return v;let t=this.currentUserEntry;return m`
      <tfoot class="sticky bottom-0 z-20">
        <tr class="bg-blue-600 border-t border-blue-400/30 shadow-2xl">
          <td class="py-3 ${t.rank>=1e3?`px-1`:`px-4`} text-center">
            <div
              class="min-w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono ${t.rank>=1e3?`text-xs`:`text-lg`} bg-white/20 text-white"
            >
              ${t.rank}
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="flex flex-col">
              <span
                class="text-[10px] uppercase font-bold text-blue-200/80 leading-tight"
                >${r(`leaderboard_modal.your_ranking`)}</span
              >
              <div class="flex items-center gap-2 min-w-0">
                ${O(t,D(t),e)}
                <player-name
                  class="min-w-0"
                  .username=${t.accountUsername}
                  .publicId=${t.playerId}
                  .nameClass=${`font-bold text-white truncate text-base hover:underline`}
                  .onNameClick=${()=>this.openProfile(t.playerId)}
                ></player-name>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            ${this.renderRatingCell(t,!0)}
          </td>
          <td class="py-3 px-4 text-right">
            <span class="font-mono text-white font-bold">${t.games}</span>
          </td>
          <td class="py-3 px-4 text-right pr-6">
            <div class="inline-flex flex-col items-end">
              <span class="font-mono font-bold text-white"
                >${(t.winRate*100).toFixed(1)}%</span
              >
              <span
                class="text-[10px] uppercase text-blue-200/80 font-bold tracking-wider"
                >${r(`leaderboard_modal.ratio`)}</span
              >
            </div>
          </td>
        </tr>
      </tfoot>
    `}renderCalibratingRow(e){let t=e.games>0?`${(e.wins/e.games*100).toFixed(1)}%`:`—`;return m`
      <tfoot class="sticky bottom-0 z-20">
        <tr
          data-ffa-calibrating-row
          class="bg-blue-600 border-t border-blue-400/30 shadow-2xl"
        >
          <td class="py-3 px-4 text-center">
            <div
              class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg bg-white/20 text-white"
            >
              —
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="flex flex-col">
              <span
                class="text-[10px] uppercase font-bold text-blue-200/80 leading-tight"
                >${r(`leaderboard_modal.your_ranking`)}</span
              >
              <player-name
                class="min-w-0"
                .username=${e.username}
                .publicId=${e.publicId}
                .nameClass=${`font-bold text-white truncate text-base hover:underline`}
                .onNameClick=${()=>this.openProfile(e.publicId)}
              ></player-name>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            <ffa-tier-badge
              .calibrationGames=${e.calibrationGames}
            ></ffa-tier-badge>
          </td>
          <td class="py-3 px-4 text-right">
            <span class="font-mono text-white font-bold">${e.games}</span>
          </td>
          <td class="py-3 px-4 text-right pr-6">
            <div class="inline-flex flex-col items-end">
              <span class="font-mono font-bold text-white">${t}</span>
              <span
                class="text-[10px] uppercase text-blue-200/80 font-bold tracking-wider"
                >${r(`leaderboard_modal.ratio`)}</span
              >
            </div>
          </td>
        </tr>
      </tfoot>
    `}renderHiddenRow(e){return m`
      <tfoot class="sticky bottom-0 z-20">
        <tr data-ffa-hidden-row class="bg-blue-600 border-t border-blue-400/30">
          <td class="py-3 px-4 text-center">
            <div
              class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg bg-white/20 text-white"
            >
              —
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="flex flex-col">
              <span
                class="text-[10px] uppercase font-bold text-blue-200/80 leading-tight"
                >${r(`leaderboard_modal.your_ranking`)}</span
              >
              <player-name
                class="min-w-0"
                .username=${e.accountUsername}
                .publicId=${e.playerId}
                .nameClass=${`font-bold text-white truncate text-base hover:underline`}
                .onNameClick=${()=>this.openProfile(e.playerId)}
              ></player-name>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            ${this.renderRatingCell(e,!0)}
          </td>
          <td class="py-3 px-4 text-right">
            <span class="font-mono text-white font-bold">${e.games}</span>
          </td>
          <td class="py-3 px-4 text-right pr-6">
            <div class="inline-flex flex-col items-end">
              <span class="font-mono font-bold text-white"
                >${(e.winRate*100).toFixed(1)}%</span
              >
              <span
                class="text-[10px] uppercase text-blue-200/80 font-bold tracking-wider"
                >${r(`leaderboard_modal.ratio`)}</span
              >
            </div>
          </td>
        </tr>
        <tr data-ffa-hidden-note class="bg-blue-700 shadow-2xl">
          <td colspan="5" class="py-2 px-4 text-xs text-blue-100">
            <!-- Below 34rem the table scrolls sideways: keep the note in view. -->
            <div class="sticky left-4 max-w-[calc(100vw-2rem)]">
              ${r(`ffa_rating.off_board_note`)}
            </div>
          </td>
        </tr>
      </tfoot>
    `}renderSeasonLabel(){if(this.ffaSeason===null)return v;let{number:e,startDate:t,endDate:n}=this.ffaSeason;if(n&&n<t)return v;let i=n?N(t,n,new Date):null,a=n?P(n,!0):null,o=P(t),s=i?.daysLeft===0,c=s?`border-orange-400/70 shadow-[0_0_24px_rgba(251,146,60,0.25)]`:`border-aquarius/40 shadow-[0_0_24px_rgba(63,169,245,0.15)]`,l=s?`text-orange-400`:`text-aquarius`,u=s?r(`ffa_rating.season_last_day`):i?r(`ffa_rating.season_days_left`,{days:i.daysLeft}):r(`ffa_rating.season_in_progress`);return m`
      <div data-ffa-season class="shrink-0 px-2 py-2 sm:px-3 sm:pt-3">
        <section
          class="rounded-xl border bg-gradient-to-br from-deep-navy via-[#0b1830] to-[#132644] px-4 py-3 text-white sm:px-5 sm:py-4 ${c}"
        >
          <div
            class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1"
          >
            <h2
              class="text-2xl font-black uppercase italic leading-none tracking-wide sm:text-4xl"
            >
              ${r(`ffa_rating.season`,{n:e})}
            </h2>
            <span
              class="text-base font-black uppercase tracking-wide tabular-nums sm:text-2xl ${l}"
              >${u}</span
            >
          </div>
          ${a===null?v:m`<span class="sr-only"
                  >${r(`ffa_rating.season_dates`,{start:o,end:a})}</span
                >`}
          <div
            class="mt-3 flex items-center gap-3 text-xs font-bold tabular-nums sm:mt-4 sm:text-sm [@media(max-height:500px)]:hidden"
          >
            ${i===null||a===null?m`<span class="shrink-0 text-white/80"
                      >${r(`ffa_rating.season_started`,{date:o})}</span
                    >
                    <span
                      aria-hidden="true"
                      class="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-aquarius bg-white"
                    ></span>
                    <div
                      class="-ml-3 h-0 min-w-0 flex-1 border-t-2 border-dashed border-aquarius/50"
                    ></div>
                    <span class="shrink-0 text-white/70"
                      >${r(`ffa_rating.season_no_end_date`)}</span
                    >`:m`<span aria-hidden="true" class="shrink-0 text-white/80"
                      >${o}</span
                    >
                    <div
                      aria-hidden="true"
                      class="h-2 min-w-0 flex-1 rounded-full bg-white/10"
                    >
                      <div
                        data-ffa-season-progress
                        class="relative h-full rounded-full ${s?`bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.7)]`:`bg-aquarius shadow-[0_0_10px_rgba(63,169,245,0.6)]`}"
                        style="width: ${Math.round(i.progress*100)}%"
                      >
                        <span
                          class="absolute -right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 bg-white ${s?`border-orange-400 motion-safe:animate-pulse`:`border-aquarius`}"
                        ></span>
                      </div>
                    </div>
                    ${s?m`<span class="shrink-0 text-orange-400"
                            >${r(`ffa_rating.season_ends_midnight_utc`)}</span
                          >`:m`<span
                            aria-hidden="true"
                            class="shrink-0 text-white/80"
                            >${a}</span
                          >`}`}
          </div>
        </section>
      </div>
    `}renderRankTabs(){let e=(e,t)=>m`
      <img
        src=${p(`images/ffa-tiers/compact/${e}.svg`)}
        alt=""
        class=${t}
      />
    `,t=this.ffaRank;return m`
      <div class="shrink-0 px-2 sm:px-3 pb-2">
        <div
          role="tablist"
          aria-label=${r(`ffa_rating.rank_tabs`)}
          class="grid grid-cols-8 gap-0.5 sm:gap-1"
        >
          ${C.map(n=>{let i=r(x[n]),a=n===t;return m`
              <button
                type="button"
                role="tab"
                data-rank=${n}
                aria-selected=${a?`true`:`false`}
                tabindex=${a?0:-1}
                aria-label=${i}
                title=${i}
                class="flex flex-col items-center justify-center gap-1 min-w-0 py-1.5 sm:py-2 rounded-lg border transition-colors ${a?`border-blue-400 bg-blue-500/25 text-white`:`border-white/10 bg-white/5 text-white/50 opacity-70 hover:opacity-100 hover:bg-white/10`}"
                @click=${()=>this.selectFfaRank(n)}
                @keydown=${e=>this.handleRankTabKey(e,n)}
              >
                ${e(n,`w-5 h-5 sm:w-7 sm:h-7`)}
                <span
                  class="hidden sm:block w-full truncate text-center text-[10px] font-bold"
                  >${i}</span
                >
              </button>
            `})}
        </div>
        <div class="sm:hidden flex items-center gap-2 pt-2 px-1">
          ${e(t,`w-5 h-5`)}
          <span class="text-sm font-bold uppercase tracking-wider text-white"
            >${r(x[t])}</span
          >
          <span class="ml-auto text-xs text-white/50"
            >${r(`ffa_rating.rank_top_250`)}</span
          >
        </div>
      </div>
    `}renderRatingCell(e,t){let n=t?`font-bold`:`font-medium`;return!this.ffaRatingLive||e.tier===void 0?m`<span class="font-mono text-white ${n}"
        >${this.ffaRatingLive?S(e.elo):e.elo}</span
      >`:m`
      <div
        class="flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:justify-end sm:gap-2"
        data-ffa-rating-cell
      >
        <ffa-tier-badge .tier=${e.tier}></ffa-tier-badge>
        <span class="whitespace-nowrap" data-ffa-rating-value>
          <span class="font-mono text-white ${n}"
            >${S(e.elo)}</span
          >
          ${e.uncertainty===void 0?v:m`<span class="font-mono text-white/40"
                  >± ${S(e.uncertainty)}</span
                >`}
        </span>
      </div>
    `}renderPlayerRow(e,t){let n=this.currentUserEntry?.playerId===e.playerId,i=e.rank,a={1:`text-yellow-400 bg-yellow-400/10 ring-1 ring-yellow-400/20`,2:`text-slate-300 bg-slate-400/10 ring-1 ring-slate-400/20`,3:`text-amber-600 bg-amber-600/10 ring-1 ring-amber-600/20`}[i]??`text-white/40 bg-white/5`,o={1:`👑`,2:`🥈`,3:`🥉`}[i]??String(i);return m`
      <tr
        data-player-id=${e.playerId}
        data-current-user=${n?`true`:`false`}
        class="border-b border-white/5 hover:bg-white/[0.07] transition-colors group ${n?`bg-blue-500/15`:``}"
      >
        <td class="py-3 px-4 text-center">
          <div
            class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg ${a}"
          >
            ${o}
          </div>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            ${O(e,D(e),t)}
            <player-name
              class="min-w-0"
              .username=${e.accountUsername}
              .publicId=${e.playerId}
              .nameClass=${`font-bold text-blue-300 truncate text-base hover:underline`}
              .onNameClick=${()=>this.openProfile(e.playerId)}
            ></player-name>
          </div>
        </td>
        <td class="py-3 px-4 text-right">
          ${this.renderRatingCell(e,!1)}
        </td>
        <td class="py-3 px-4 text-right">
          <span class="font-mono text-white font-medium">${e.games}</span>
        </td>
        <td class="py-3 px-4 text-right pr-6">
          <div class="inline-flex flex-col items-end">
            <span
              class="font-mono font-bold ${e.winRate>=.5?`text-green-400`:`text-red-400`}"
              >${(e.winRate*100).toFixed(1)}%</span
            >
            <span
              class="text-[10px] uppercase text-white/30 font-bold tracking-wider"
              >${r(`leaderboard_modal.ratio`)}</span
            >
          </div>
        </td>
      </tr>
    `}renderPlayerFooter(){return(this.ffaRankActive?this.ffaRanksLoading.has(this.ffaRank):this.isLoadingMore)?m`
        <div class="flex items-center justify-center py-4 text-white/50">
          <div
            class="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mr-2"
          ></div>
          <span class="text-[10px] font-bold uppercase tracking-widest">
            ${r(`common.loading`)}
          </span>
        </div>
      `:this.hasLoadMoreError?m`
        <div class="flex items-center justify-center py-4">
          <button
            class="px-6 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-xs font-bold uppercase transition-all active:scale-95"
            @click=${()=>this.loadPlayerLeaderboard()}
          >
            ${r(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.ffaRankActive&&this.playerData.length===0&&!this.playerHasMore?m`
        <p class="py-12 text-center text-sm text-white/40">
          ${r(`ffa_rating.rank_empty`)}
        </p>
      `:``}renderLoading(){return m`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"
        ></div>
        <p class="text-blue-200/80 text-sm font-bold tracking-widest uppercase">
          ${r(`common.loading`)}
        </p>
      </div>
    `}renderError(){return m`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="bg-red-500/10 p-6 rounded-full mb-6 border border-red-500/20 shadow-lg shadow-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <p class="mb-8 text-center text-red-100/80 font-medium">
          ${this.error??r(`leaderboard_modal.error`)}
        </p>
        <button
          class="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-bold uppercase transition-all active:scale-95"
          @click=${()=>this.loadPlayerLeaderboard(!0)}
        >
          ${r(`leaderboard_modal.try_again`)}
        </button>
      </div>
    `}renderNoData(){return m`
      <div
        class="flex flex-col items-center justify-center p-12 text-white/40 h-full"
      >
        <div class="bg-white/5 p-6 rounded-full mb-6 border border-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white/60 mb-2">
          ${r(`leaderboard_modal.no_data_yet`)}
        </h3>
        <p class="text-white/30 text-sm">
          ${r(`leaderboard_modal.ranked_no_stats`)}
        </p>
      </div>
    `}render(){if(this.isLoading&&this.playerData.length===0)return this.renderLoading();if(this.error)return this.renderError();let e=this.rankedType===n.FreeForAll&&(this.ffaCalibration!==null||this.ffaHidden!==null);if(this.hasLoadedPlayers&&this.playerData.length===0&&!e&&!this.ffaRankActive)return this.renderNoData();let t=this.playerData.some(D),i=this.ffaRatingLive;return m`
      <div class="h-full">
        <!--
          No bottom border: the pinned "your ranking" row sits flush against
          this edge, and a dark hairline under a saturated blue row reads as a
          stray outline. The rows above it end on their own border-b.
        -->
        <div
          class="h-full border-x border-t border-white/5 bg-black/20 relative ${i?`flex flex-col`:``}"
        >
          ${i?this.renderSeasonLabel():v}
          ${this.ffaRankActive?this.renderRankTabs():v}
          <div
            class="scroll-container ${i?`flex-1 min-h-0`:`h-full`} overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/20"
            @scroll=${()=>this.handleScroll()}
          >
            <table class="w-full text-sm border-collapse table-fixed">
              <colgroup>
                <col style="width: 4rem" />
                <col style="width: 12rem" />
                ${i?m`<col class="w-32 sm:w-60" />`:m`<col style="width: 6rem" />`}
                <col style="width: 6rem" />
                <col style="width: 6rem" />
              </colgroup>
              <thead class="sticky top-0 z-10">
                <tr
                  class="text-white/40 text-[10px] uppercase tracking-wider border-b border-white/5 bg-[#1e2433]"
                >
                  <th class="py-4 px-4 text-center font-bold">
                    ${r(`leaderboard_modal.rank`)}
                  </th>
                  <th class="py-4 px-4 text-left font-bold">
                    ${r(`leaderboard_modal.player`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold">
                    ${r(i?`ffa_rating.rating`:`leaderboard_modal.elo`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold">
                    ${r(`leaderboard_modal.games`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold pr-6">
                    ${r(`leaderboard_modal.win_loss_ratio`)}
                  </th>
                </tr>
              </thead>
              <tbody>
                ${this.playerData.map(e=>this.renderPlayerRow(e,t))}
              </tbody>
              ${this.renderStickyUserRow(t)}
            </table>
            ${this.renderPlayerFooter()}
          </div>
          ${i?m`<ofstats-credit
                  class="block shrink-0 py-2 text-center"
                ></ofstats-credit>`:v}
        </div>
      </div>
    `}};h([f({attribute:!1})],z.prototype,`rankedType`,void 0),h([a()],z.prototype,`ladders`,void 0),h([a()],z.prototype,`showStickyUser`,void 0),h([a()],z.prototype,`isLoading`,void 0),h([a()],z.prototype,`error`,void 0),h([a()],z.prototype,`isLoadingMore`,void 0),h([a()],z.prototype,`loadMoreError`,void 0),h([a()],z.prototype,`ffaCalibration`,void 0),h([a()],z.prototype,`ffaHidden`,void 0),h([a()],z.prototype,`ffaSeason`,void 0),h([a()],z.prototype,`ffaRank`,void 0),h([a()],z.prototype,`ffaRankLadders`,void 0),h([a()],z.prototype,`ffaRanksLoading`,void 0),h([a()],z.prototype,`ffaRanksFailed`,void 0),h([a()],z.prototype,`ffaPositionRow`,void 0),h([d(`.scroll-container`)],z.prototype,`scrollContainer`,void 0),z=h([_(`leaderboard-player-list`)],z);var B=e({LeaderboardModal:()=>U}),V=[`players`,`players2v2`,`playersFfa`,`clans`,`tribes`],H={players:n.OneVOne,players2v2:n.TwoVTwo,playersFfa:n.FreeForAll},U=class extends y{constructor(...e){super(...e),this.routerName=`leaderboard`,this.clanDateRange=null,this.ffaRatingLive=!1,this.loadToken=0,this.lastRankedType=n.OneVOne}modalConfig(){return{tabs:[{key:`players`,label:r(`leaderboard_modal.ranked_tab`)},{key:`players2v2`,label:r(`leaderboard_modal.ranked_2v2_tab`)},{key:`playersFfa`,label:r(this.ffaRatingLive?`leaderboard_modal.ffa_rating_tab`:`leaderboard_modal.ranked_ffa_tab`)},{key:`clans`,label:r(`leaderboard_modal.clans_tab`)},{key:`tribes`,label:r(`leaderboard_modal.tribes_tab`)}]}}rankedTypeFor(e){return H[e]??null}tabComponent(e){return this.rankedTypeFor(e)===null?e===`clans`?this.clanTable:this.tribeTable:this.playerList}onOpen(){this.loadActiveTabData()}onTabEnter(){this.lastRankedType=this.rankedTypeFor(this.activeTab)??this.lastRankedType,this.loadActiveTabData()}loadActiveTabData(){let e=++this.loadToken,t=this.activeTab,n=async()=>{if(e===this.loadToken){if(this.rankedTypeFor(t)!==null){if(await this.playerList?.ensureLoaded(),e!==this.loadToken)return;this.playerList?.handleTabActivated()}else await this.tabComponent(t)?.ensureLoaded();queueMicrotask(()=>{if(e===this.loadToken)for(let e of V)e!==t&&this.tabComponent(e)?.ensureLoaded()})}};(async()=>{this.tabComponent(t)||await this.updateComplete,await n()})()}handleClanDateRangeChange(e){this.clanDateRange=e.detail}renderHeaderSlot(){let e=m``;this.clanDateRange&&(e=m`<span
        class="text-sm font-normal text-white/40 ml-2 wrap-break-words"
        >(${new Date(this.clanDateRange.start).toLocaleDateString()} - ${new Date(this.clanDateRange.end).toLocaleDateString()})</span
      >`);let t=m`<span
      class="text-sm font-normal text-white/40 ml-2 wrap-break-words italic"
      >(${r(`leaderboard_modal.refresh_time`)})</span
    >`;return i({titleContent:m`
        <div class="flex flex-wrap items-center gap-2">
          <span
            class="text-white text-xl sm:text-2xl font-bold uppercase tracking-widest"
          >
            ${r(`leaderboard_modal.title`)}
          </span>
          ${this.activeTab===`clans`?e:``}
          ${this.rankedTypeFor(this.activeTab)!==null||this.activeTab===`tribes`?t:``}
        </div>
      `,onBack:()=>this.close(),ariaLabel:r(`common.close`)})}renderBody(){return m`
      <div class="flex-1 min-h-0 h-full">
        <leaderboard-player-list
          class=${this.rankedTypeFor(this.activeTab)===null?`hidden`:`h-full`}
          .rankedType=${this.rankedTypeFor(this.activeTab)??this.lastRankedType}
          @ffa-rating-live=${()=>this.ffaRatingLive=!0}
        ></leaderboard-player-list>
        <leaderboard-clan-table
          class=${this.activeTab===`clans`?`h-full`:`hidden`}
          @date-range-change=${e=>this.handleClanDateRangeChange(e)}
        ></leaderboard-clan-table>
        <leaderboard-tribe-table
          class=${this.activeTab===`tribes`?`h-full`:`hidden`}
        ></leaderboard-tribe-table>
      </div>
    `}};h([a()],U.prototype,`clanDateRange`,void 0),h([a()],U.prototype,`ffaRatingLive`,void 0),h([d(`leaderboard-player-list`)],U.prototype,`playerList`,void 0),h([d(`leaderboard-clan-table`)],U.prototype,`clanTable`,void 0),h([d(`leaderboard-tribe-table`)],U.prototype,`tribeTable`,void 0),U=h([_(`leaderboard-modal`)],U);export{E as n,O as r,B as t};