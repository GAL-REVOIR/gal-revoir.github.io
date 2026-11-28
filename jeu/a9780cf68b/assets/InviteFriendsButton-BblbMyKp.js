import{$i as e,Bi as t,Es as n,Js as r,Ls as i,Vs as a,Yi as o,Yo as s,_i as c,di as l,fi as u,fr as d,ic as f,li as p,qs as m,si as h,to as g,ts as _,ui as v}from"./index-BHQpe8wU.js";import{n as y,t as b}from"./OwnLevelBadge-rkT6Q15t.js";import{n as x}from"./ThemeProvider-x4VgipRu.js";import{t as S}from"./repeat-DuAfc1u0.js";function C(e,t){return e===t||e!==void 0&&t!==void 0&&e.level===t.level&&e.prestige===t.prestige&&e.legend===t.legend}var w=class extends u{constructor(...e){super(...e),this.gameMode=a.FFA,this.clients=[],this.teamPreview=[],this.teamMaxSize=0,this.lobbyCreatorClientID=``,this.currentClientID=``,this.teamCount=2,this.nameReveals=[],this.anonymizeNames=!1,this.nationCount=0,this.isPublicGame=!1,this.showTeamColors=!1,this._clanUpdateTimeout=null,this._teamClanTags=new Map,this._viewerFriends=new Set,this._ownHiddenBadge=b(),this.userSettings=new g}get theme(){return x.current()}get activePlayers(){return this.clients.filter(e=>!e.spectator)}get spectators(){return this.clients.filter(e=>e.spectator===!0)}get effectiveNationCount(){return this.isPublicGame&&this.teamCount===`Humans Vs Nations`?this.activePlayers.length:this.nationCount}willUpdate(e){if(e.has(`clients`)||e.has(`currentClientID`)){let e=this.currentClientID?this.clients.find(e=>e.clientID===this.currentClientID):void 0;this._viewerFriends=new Set(e?.friends??[])}if((e.has(`currentClientID`)||e.has(`clients`))&&this.currentClientID){let e=this.currentClientID;y().then(t=>{this.currentClientID===e&&(C(t,this._ownHiddenBadge)||(this._ownHiddenBadge=t))})}if(e.has(`gameMode`)||e.has(`clients`)||e.has(`teamCount`)||e.has(`nationCount`)||e.has(`isPublicGame`)){let e=this.getTeamList();this.computeTeamPreview(e),this.showTeamColors=e.length<=7}}disconnectedCallback(){super.disconnectedCallback(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null)}render(){return c`
      <div class="border-t border-white/10 pt-6">
        <div class="flex justify-between items-center mb-4">
          <div
            class="text-xs font-bold text-white/40 uppercase tracking-widest"
          >
            ${this.activePlayers.length}
            ${this.activePlayers.length===1?e(`host_modal.player`):e(`host_modal.players`)}
            <span style="margin: 0 8px;">•</span>
            ${this.effectiveNationCount}
            ${this.effectiveNationCount===1?e(`host_modal.nation_player`):e(`host_modal.nation_players`)}
          </div>
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${this.gameMode===a.Team?this.renderTeamMode():this.renderFreeForAll()}
        </div>
        ${this.renderSpectators()}
      </div>
    `}renderSpectators(){let t=this.spectators;return t.length===0?c``:c`
      <div class="mt-4">
        <div
          class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4"
        >
          ${t.length}
          ${t.length===1?e(`host_modal.spectator`):e(`host_modal.spectators`)}
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${S(t,e=>e.clientID??e.username,e=>c`<span
                class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
              >
                <span class="text-white"
                  >${this.renderLevelBadge(e,!1)}${this.getClientDisplayName(e)}
                  ${this.renderVerifiedBadge(e)}</span
                >
              </span>`)}
        </div>
      </div>
    `}createRenderRoot(){return this}renderTeamMode(){let t=this.teamPreview.filter(e=>e.players.length>0||e.team===i.Nations),n=this.teamPreview.filter(e=>e.players.length===0&&e.team!==i.Nations),r=this.anyVisibleLevelBadge(this.activePlayers);return c` <div
      class="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch"
    >
      <div
        class="w-full md:w-60 bg-gray-800 p-2 border border-gray-700 rounded-lg"
      >
        <div class="font-bold mb-1.5 text-gray-300 text-sm">
          ${e(`host_modal.players`)}
        </div>
        ${S(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return c`<div
              class="px-2 py-1 rounded-sm mb-1 text-xs text-white border break-words
                ${this.isCurrentPlayer(e)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
            >
              ${this.renderLevelBadge(e,r)}${t}
              ${this.renderVerifiedBadge(e)}
              ${this.renderFriendBadge(e)}
            </div>`})}
      </div>
      <div class="flex-1 flex flex-col gap-3 md:gap-4 md:pr-1">
        <div>
          <div class="font-semibold text-gray-200 mb-1 text-sm">
            ${e(`host_modal.assigned_teams`)}
          </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${S(t,e=>e.team,e=>this.renderTeamCard(e,!1))}
          </div>
        </div>
        <div>
          ${n.length>0?c`<div class="font-semibold text-gray-200 mb-1 text-sm">
                  ${e(`host_modal.empty_teams`)}
                </div>`:``}
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${S(n,e=>e.team,e=>this.renderTeamCard(e,!0))}
          </div>
        </div>
      </div>
    </div>`}renderRevealToggle(t){if(!this.onToggleNameReveal||!this.anonymizeNames)return c``;let n=this.nameReveals.includes(t);return c`<button
      @click=${()=>this.onToggleNameReveal?.(t)}
      title=${e(`host_modal.toggle_name_reveal`)}
      style="background:none;border:none;cursor:pointer;font-size:13px;line-height:1;margin-left:4px;opacity:${n?`1`:`0.35`};"
    >
      👁
    </button>`}renderFreeForAll(){return c`${S(this.activePlayers,e=>e.clientID??e.username,t=>{let n=this.getClientDisplayName(t);return c`<span
          class="player-tag ${this.isCurrentPlayer(t)?`current-player`:``}"
        >
          <span class="text-white"
            >${this.renderLevelBadge(t,!1)}${n}
            ${this.renderVerifiedBadge(t)}
            ${this.renderFriendBadge(t)}</span
          >
          ${this.renderRevealToggle(t.clientID)}
          ${t.clientID===this.lobbyCreatorClientID?c`<span class="host-badge"
                  >(${e(`host_modal.host_badge`)})</span
                >`:this.onKickPlayer?c`<button
                    class="remove-player-btn"
                    @click=${()=>this.onKickPlayer?.(t.clientID)}
                    aria-label=${e(`host_modal.remove_player`,{username:n})}
                  >
                    <svg
                      class="h-2.5 w-2.5 stroke-white"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <line x1="4" y1="4" x2="12" y2="12" />
                      <line x1="12" y1="4" x2="4" y2="12" />
                    </svg>
                  </button>`:c``}
        </span>`})} `}renderTeamCard(n,r=!1){let a=n.team===i.Nations?this.effectiveNationCount:n.players.length,o=n.team===i.Nations?this.effectiveNationCount:this.teamMaxSize,s=this._teamClanTags.get(n.team)??null,l=t(n.team,s),u=this.anyVisibleLevelBadge(n.players);return c`
      <div
        class="bg-gray-800 border rounded-xl flex flex-col
          ${this.teamContainsCurrentPlayer(n)?`border-sky-500/60`:`border-gray-700`}"
      >
        <div
          class="px-2 py-1 font-bold flex items-center justify-between text-white rounded-t-xl text-[13px] gap-2 bg-gray-700/70"
        >
          <div class="flex items-center gap-1.5 min-w-0">
            ${this.showTeamColors?c` <span
                    class="inline-block w-2.5 h-2.5 rounded-full border-2 border-white/90 shadow-inner bg-(--bg) shrink-0"
                    style="--bg:${this.teamHeaderColor(n.team)};"
                  ></span>`:null}
            <span class="truncate">${l}</span>
          </div>
          <span class="text-white/90 font-bold text-[13px] shrink-0"
            >${a}/${o}</span
          >
        </div>
        <div class="p-2 ${r?``:`flex flex-col gap-1.5`}">
          ${r?c`<div class="text-[11px] italic text-gray-400">
                  ${e(`host_modal.empty_team`)}
                </div>`:S(n.players,e=>e.clientID??e.username,t=>{let n=this.getClientDisplayName(t);return c` <div
                      class="px-2 py-1 rounded-sm text-xs flex items-center justify-between border
                      ${this.isCurrentPlayer(t)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
                    >
                      <span class="flex items-center gap-1 min-w-0">
                        ${this.renderLevelBadge(t,u)}
                        <span class="truncate text-white">${n}</span>
                        ${this.renderVerifiedBadge(t)}
                        ${this.renderFriendBadge(t)}
                      </span>
                      ${this.renderRevealToggle(t.clientID)}
                      ${t.clientID===this.lobbyCreatorClientID?c`<span class="ml-2 text-[11px] text-green-300"
                              >(${e(`host_modal.host_badge`)})</span
                            >`:this.onKickPlayer?c`<button
                                class="remove-player-btn ml-2"
                                @click=${()=>this.onKickPlayer?.(t.clientID)}
                                aria-label=${e(`host_modal.remove_player`,{username:n})}
                              >
                                <svg
                                  class="h-2.5 w-2.5 stroke-white"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2.5"
                                  stroke-linecap="round"
                                >
                                  <line x1="4" y1="4" x2="12" y2="12" />
                                  <line x1="12" y1="4" x2="4" y2="12" />
                                </svg>
                              </button>`:c``}
                    </div>`})}
        </div>
      </div>
    `}getTeamList(){if(this.gameMode!==a.Team)return[];let e=this.activePlayers.length+this.effectiveNationCount,t=this.teamCount;if(t===`Humans Vs Nations`)return[i.Humans,i.Nations];let n;return n=typeof t==`number`?Math.max(2,t):Math.max(2,Math.ceil(e/(t===`Duos`?2:t===`Trios`?3:t===`Quads`?4:2))),n<8?[i.Red,i.Blue,i.Yellow,i.Green,i.Purple,i.Orange,i.Teal].slice(0,n):Array.from({length:n},(e,t)=>`Team ${t+1}`)}teamHeaderColor(e){try{return this.theme.teamColor(e).toHex()}catch{return`#3b3f46`}}computeTeamPreview(e=[]){if(this.gameMode!==a.Team){this.teamPreview=[],this.teamMaxSize=0,this._teamClanTags.clear(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null);return}if(this.teamCount===`Humans Vs Nations`){this.teamMaxSize=this.activePlayers.length,this.teamPreview=[{team:i.Humans,players:[...this.activePlayers]},{team:i.Nations,players:[]}],this.triggerClanUpdate();return}let t=_(this.activePlayers.map(e=>new m(e.username,r.Human,e.clientID,e.clientID,!1,e.clanTag,e.friends??[],e.teamIndex??null)),e,this.teamCount,this.effectiveNationCount),n=new Map;for(let t of e)n.set(t,[]);for(let[e,r]of t.entries()){if(r===`kicked`)continue;let t=n.get(r);if(!t)continue;let i=this.clients.find(t=>t.clientID===e.clientID);i&&t.push(i)}this.teamCount===`Duos`?this.teamMaxSize=2:this.teamCount===`Trios`?this.teamMaxSize=3:this.teamCount===`Quads`?this.teamMaxSize=4:this.teamMaxSize=Math.max(1,Math.ceil((this.activePlayers.length+this.effectiveNationCount)/e.length)),this.teamPreview=e.map(e=>({team:e,players:n.get(e)??[]})),this.triggerClanUpdate()}triggerClanUpdate(){this._teamClanTags.size===0?this.updateTeamClanTags():this.scheduleClanUpdate()}scheduleClanUpdate(){this._clanUpdateTimeout===null&&(this._clanUpdateTimeout=window.setTimeout(()=>{this.updateTeamClanTags(),this._clanUpdateTimeout=null,this.requestUpdate()},500))}updateTeamClanTags(){this._teamClanTags.clear();for(let e of this.teamPreview){let t=o(e.players);this._teamClanTags.set(e.team,t)}}isCurrentPlayer(e){return!!this.currentClientID&&e.clientID===this.currentClientID}teamContainsCurrentPlayer(e){return e.players.some(e=>this.isCurrentPlayer(e))}getClientDisplayName(e){let t=f(e.username,e.clanTag);return!this.userSettings.anonymousNames()||this.currentClientID&&e.clientID===this.currentClientID?t:f(s(e.username,r.Human)??e.username,e.clanTag)}renderVerifiedBadge(t){let n=this.userSettings.anonymousNames()&&!this.isCurrentPlayer(t);return t.verified!==!0||n?c``:c`<svg
      viewBox="0 0 24 24"
      class="inline-block w-3.5 h-3.5 align-[-2px] text-blue-400 shrink-0"
      aria-label=${e(`username.verified_heading`)}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="white"
        stroke-width="2.2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>`}visibleLevelBadge(e){return this.isCurrentPlayer(e)?n(e.levelBadge)??this._ownHiddenBadge:this.userSettings.anonymousNames()?void 0:n(e.levelBadge)}anyVisibleLevelBadge(e){return e.some(e=>this.visibleLevelBadge(e)!==void 0)}renderLevelBadge(e,t){let n=this.visibleLevelBadge(e);return n===void 0?t?c`<span
            class="lobby-level-slot inline-block w-6 h-6 align-[-7px] shrink-0 mr-1.5"
            aria-hidden="true"
          ></span>`:c``:c`<level-badge
      stagger
      class="inline-block align-[-7px] shrink-0 mr-1.5"
      .level=${n.level}
      .prestige=${n.prestige}
      ?legend=${n.legend}
      size="24"
    ></level-badge>`}renderFriendBadge(t){return!this._viewerFriends.has(t.clientID)||this.isCurrentPlayer(t)||this.anonymizeNames||this.userSettings.anonymousNames()?c``:c`<svg
      viewBox="0 0 24 24"
      class="lobby-friend-badge inline-block w-4 h-4 align-[-3px] text-emerald-400 shrink-0"
      fill="currentColor"
      aria-label=${e(`friends.lobby_marker`)}
    >
      <title>${e(`friends.lobby_marker`)}</title>
      <circle cx="9" cy="8" r="3.6"></circle>
      <path
        d="M9 13.2c-3.4 0-6.3 1.7-6.3 3.9V20h12.6v-2.9c0-2.2-2.9-3.9-6.3-3.9z"
      ></path>
      <circle cx="17.4" cy="8.6" r="2.9"></circle>
      <path
        d="M17.4 13.4c-.7 0-1.3.06-1.9.18 1.2 1 1.9 2.24 1.9 3.52V20h5.4v-2.6c0-1.9-2.4-4-5.4-4z"
      ></path>
    </svg>`}};h([v({type:String})],w.prototype,`gameMode`,void 0),h([v({type:Array})],w.prototype,`clients`,void 0),h([p()],w.prototype,`teamPreview`,void 0),h([p()],w.prototype,`teamMaxSize`,void 0),h([v({type:String})],w.prototype,`lobbyCreatorClientID`,void 0),h([v({type:String})],w.prototype,`currentClientID`,void 0),h([v({attribute:`team-count`})],w.prototype,`teamCount`,void 0),h([v({type:Function})],w.prototype,`onKickPlayer`,void 0),h([v({type:Function})],w.prototype,`onToggleNameReveal`,void 0),h([v({type:Array})],w.prototype,`nameReveals`,void 0),h([v({type:Boolean})],w.prototype,`anonymizeNames`,void 0),h([v({type:Number})],w.prototype,`nationCount`,void 0),h([v({type:Boolean})],w.prototype,`isPublicGame`,void 0),h([p()],w.prototype,`showTeamColors`,void 0),h([p()],w.prototype,`_ownHiddenBadge`,void 0),w=h([l(`lobby-player-view`)],w);function T(){if(!d.isAvailable())return;let t=e(`public_lobby.invite_friends`);return c`<button
    data-test-invite-friends
    type="button"
    @click=${()=>void d.openInviteDialog()}
    class="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 rounded-lg px-2 py-1 border border-white/10 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
    title=${t}
    aria-label=${t}
  >
    <svg
      class="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM16 7a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2V7z"
      ></path>
    </svg>
    ${t}
  </button>`}export{T as t};