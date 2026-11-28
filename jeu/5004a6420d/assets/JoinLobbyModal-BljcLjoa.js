import{Ao as e,Ci as t,Cn as n,Hi as r,Ks as i,Li as a,Mt as o,Ns as s,Oo as c,Pn as l,Po as u,Sn as d,Ua as f,Va as p,Vi as m,Yi as h,Zi as g,di as _,er as v,fi as y,hc as b,hi as x,ir as S,ki as C,mi as w,ms as T,nr as E,pi as D,qa as O,qs as k,ra as A,rr as j,sr as M,tr as N,vn as P,xi as F,xn as I,za as L,zi as R}from"./index-hx7tETuk.js";import"./CopyButton-DLJ7XbUb.js";import{a as z,d as B,p as V}from"./GameConfigHelpers-CUmZRX5B.js";import{t as H}from"./InviteFriendsButton-Dh0-IGqG.js";import{t as U}from"./GameStartAlertController-5nHknXEQ.js";var W=class extends n{constructor(...e){super(...e),this.eventBus=null,this.players=[],this.playerCount=0,this.gameConfig=null,this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.isConnecting=!0,this.lobbyCreatorClientID=null,this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.hostedServerTimeOffset=0,this.gameStartAlert=new U(this,()=>this.currentLobbyId!==``),this.leaveLobbyOnClose=!0,this.countdownTimerId=null,this.handledJoinTimeout=!1,this.hostedLobbySocket=new l(e=>{this.hostedServerTimeOffset=C(e.serverTime),this.hostedLobbies=e.games?.hosted??[],this.hostedLobbiesLoaded=!0}),this.handleLobbyInfo=e=>{let t=e.lobby;this.currentClientID=e.myClientID,this.isConnecting&&t.clients&&(this.isConnecting=!1),this.updateFromLobby({...t,startsAt:t.startsAt??void 0})}}isPrivateLobby(){return this.gameConfig?.gameType===k.Private}get isSpectating(){return this.players.find(e=>e.clientID===this.currentClientID)?.spectator===!0}setSpectating(e){this.eventBus?.emit(new P(e))}renderHeaderSlot(){if(!this.currentLobbyId)return d({title:A(`private_lobby.title`),onBack:()=>this.closeAndLeave(),ariaLabel:A(`common.close`)});let e=this.gameConfig?.gameType===k.Public&&this.gameConfig.gameMode!==i.Team,t=this.gameConfig!==null&&!e,n=t?F`<copy-button .lobbyId=${this.currentLobbyId}></copy-button>`:void 0,r=t?H():void 0;return d({titleContent:F`<span class="${I}"
          >${A(`public_lobby.title`)}</span
        >
        ${this.gameStartAlert.renderBell()}`,onBack:()=>this.closeAndLeave(),ariaLabel:A(`common.close`),rightContent:r?F`<div class="flex items-center gap-2">${n}${r}</div>`:n})}renderSpectateToggle(){if(this.isConnecting)return F``;let e=this.isSpectating,t=e=>`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest transition ${e?`bg-white text-black`:`text-white/60 hover:text-white`}`;return F`
      <div class="flex items-center gap-1 rounded-xl bg-white/5 p-1">
        <button
          class=${t(!e)}
          ?disabled=${!e}
          @click=${()=>this.setSpectating(!1)}
        >
          ${A(`private_lobby.play`)}
        </button>
        <button
          class=${t(e)}
          ?disabled=${e}
          @click=${()=>this.setSpectating(!0)}
        >
          ${A(`private_lobby.spectate`)}
        </button>
      </div>
    `}renderBody(){if(!this.currentLobbyId)return this.renderJoinForm();let e=this.lobbyStartAt===null?null:m(this.lobbyStartAt,this.serverTimeOffset),t=e===null?this.isPrivateLobby()?A(`private_lobby.joined_waiting`):A(`public_lobby.waiting_for_players`):e>0?A(`public_lobby.starting_in`,{time:g(e)}):A(`public_lobby.started`),n=this.gameConfig?.maxPlayers??0,r=this.players?.filter(e=>!e.spectator).length??0,a=this.isPrivateLobby()?this.lobbyCreatorClientID??``:``;return F`
      <div class="flex flex-col h-full">
        <div class="flex-1 custom-scrollbar p-6 space-y-4 mr-1">
          ${this.isConnecting?F`
                  <div
                    class="min-h-[240px] flex flex-col items-center justify-center gap-4"
                  >
                    <div
                      class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"
                    ></div>
                    <p class="text-center text-white/80 text-sm">
                      ${A(`public_lobby.connecting`)}
                    </p>
                  </div>
                `:F`
                  ${this.gameConfig?this.renderGameConfig():F``}
                  ${this.players.length>0?F`
                          <lobby-player-view
                            class="mt-6"
                            .gameMode=${this.gameConfig?.gameMode??i.FFA}
                            .clients=${this.players}
                            .lobbyCreatorClientID=${a}
                            .currentClientID=${this.currentClientID}
                            .anonymizeNames=${this.gameConfig?.anonymizeNames??!1}
                            .teamCount=${this.gameConfig?.playerTeams??2}
                            .isPublicGame=${this.gameConfig?.gameType===k.Public}
                            .nationCount=${z(this.gameConfig?.nations??`default`,this.nationCount)}
                          ></lobby-player-view>
                        `:``}
                `}
        </div>

        ${F`
          <div
            class="p-6 lg:p-6 border-t border-white/10 bg-black/60 backdrop-blur-md shrink-0 sticky bottom-0 z-10"
          >
            <div
              class="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between gap-3"
            >
              <div class="flex flex-col">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-white/40"
                  >${A(`public_lobby.status`)}</span
                >
                <span class="text-sm font-bold text-white">${t}</span>
              </div>
              ${this.renderSpectateToggle()}
              ${n>0?F`
                      <div
                        class="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest"
                      >
                        <span>${r}/${n}</span>
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                          ></path>
                        </svg>
                      </div>
                    `:F``}
            </div>
          </div>
        `}
      </div>
    `}renderJoinForm(){return F`
      <div class="custom-scrollbar p-6 space-y-4 mr-1">
        <form @submit=${this.joinLobbyFromInput}>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <input
                type="text"
                id="lobbyIdInput"
                placeholder=${A(`private_lobby.enter_id`)}
                @keyup=${this.handleChange}
                class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono text-sm tracking-wider"
              />
              <o-button
                variant="ghost"
                size="md"
                iconPosition="only"
                .title=${A(`common.paste`)}
                .icon=${F`<svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 32 32"
                  height="18px"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 15 3 C 13.742188 3 12.847656 3.890625 12.40625 5 L 5 5 L 5 28 L 13 28 L 13 30 L 27 30 L 27 14 L 25 14 L 25 5 L 17.59375 5 C 17.152344 3.890625 16.257813 3 15 3 Z M 15 5 C 15.554688 5 16 5.445313 16 6 L 16 7 L 19 7 L 19 9 L 11 9 L 11 7 L 14 7 L 14 6 C 14 5.445313 14.445313 5 15 5 Z M 7 7 L 9 7 L 9 11 L 21 11 L 21 7 L 23 7 L 23 14 L 13 14 L 13 26 L 7 26 Z M 15 16 L 25 16 L 25 28 L 15 28 Z"
                  ></path>
                </svg>`}
                @click=${this.pasteFromClipboard}
              ></o-button>
            </div>
            <div class="flex gap-2">
              <div class="flex-[2]">
                <o-button
                  title=${A(`private_lobby.join_lobby`)}
                  width="block"
                  submit
                ></o-button>
              </div>
              <div class="flex-1">
                <o-button
                  variant="ghost"
                  title=${A(`private_lobby.spectate`)}
                  width="block"
                  @click=${this.spectateLobbyFromInput}
                ></o-button>
              </div>
            </div>
          </div>
        </form>
        ${this.renderHostedLobbies()}
      </div>
    `}renderHostedLobbies(){let e;return e=this.hostedLobbiesLoaded?this.hostedLobbies.length===0?F`<p class="text-sm text-white/50">
        ${A(`private_lobby.no_open_lobbies`)}
      </p>`:F`<div class="flex flex-col gap-2">
        ${this.hostedLobbies.map(e=>this.renderHostedLobbyRow(e))}
      </div>`:F`<div class="flex justify-center py-3">
        <div
          class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"
        ></div>
      </div>`,F`
      <div class="pt-2">
        <div
          class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2"
        >
          ${A(`private_lobby.open_lobbies`)}
        </div>
        ${e}
      </div>
    `}renderHostedLobbyRow(e){let t=e.gameConfig,n=t?R(t.gameMap)??t.gameMap:``,r=t?T(`maps/${encodeURIComponent(h(t.gameMap))}/thumbnail.webp`):``,i=t?S(t,null):[],o=t?.disabledUnits?.length??0,s=e.featured?e.label:void 0,c=s===void 0?`text-white`:{gold:`text-amber-300`,blue:`text-sky-300`,green:`text-emerald-300`,red:`text-rose-300`}[e.accent??`gold`],l=t?a(t):``,u=s?[n,l].filter(Boolean).join(` · `):l,d=e.startsAt??e.autoStartAt,f=d===void 0?void 0:m(d,this.hostedServerTimeOffset);return F`
      <button
        type="button"
        @click=${()=>this.joinHostedLobby(e)}
        class="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all flex items-center gap-3 text-left"
      >
        <img
          src=${r}
          alt=${n}
          class="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
          @error=${e=>{e.target.style.display=`none`}}
        />
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-sm font-bold truncate ${c}"
              >${s??n}</span
            >
            ${e.custom?F`<span
                    class="px-1.5 py-0.5 bg-orange-500 text-white text-[10px] rounded font-bold uppercase tracking-wider shrink-0"
                    >${A(`public_lobby.custom`)}</span
                  >`:``}
          </div>
          <span class="text-xs text-white/60">${u}</span>
          ${i.length>0||o>0?F`<div class="flex flex-wrap gap-1 mt-1">
                  ${i.map(e=>F`<span
                      class="px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded font-bold"
                      >${j(e)}</span
                    >`)}
                  ${o>0?F`<span
                          class="px-1.5 py-0.5 bg-red-500/20 text-red-200 text-[10px] rounded font-bold border border-red-500/30"
                          >${A(`private_lobby.disabled_units`)}:
                          ${o}</span
                        >`:``}
                </div>`:``}
        </div>
        <div class="flex flex-col items-end gap-1 shrink-0">
          <div class="flex items-center gap-1 text-white/80 text-xs font-bold">
            ${e.numClients}${t?.maxPlayers?`/${t.maxPlayers}`:``}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </div>
          ${f===void 0?``:F`<span
                  class="text-amber-300 text-xs font-bold tabular-nums"
                  title=${A(`host_modal.auto_start_timer`)}
                  >${f>0?g(f):A(`public_lobby.starting_game`)}</span
                >`}
        </div>
      </button>
    `}async joinHostedLobby(e){let t=e.gameID;this.startTrackingLobby(t,e);try{await this.checkActiveLobby(t)||(this.resetTrackingState(),this.showMessage(A(`private_lobby.not_found`),`red`))}catch(e){console.error(`Error joining hosted lobby:`,e),this.resetTrackingState(),this.showMessage(A(`private_lobby.error`),`red`)}}onOpen(e){this.leaveLobbyOnClose=!0,this.hostedLobbiesLoaded=!1,this.hostedLobbySocket.start();let t=typeof e?.lobbyId==`string`?e.lobbyId:``,n=e?.lobbyInfo;t&&(this.startTrackingLobby(t,n),n||this.handleUrlJoin(t,e?.spectate===!0))}async handleUrlJoin(e,t=!1){try{if(await this.checkActiveLobby(e,t))return;switch(await this.checkArchivedGame(e)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(A(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(A(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(A(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby from URL:`,e),this.resetTrackingState(),this.showMessage(A(`private_lobby.error`),`red`)}}startTrackingLobby(e,t){this.currentLobbyId=e,this.currentClientID=``,this.gameConfig=null,this.players=[],this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0,this.handledJoinTimeout=!1,this.startLobbyUpdates(),t&&(this.updateFromLobby(t),`clients`in t&&t.clients&&(this.isConnecting=!1))}resetTrackingState(){this.stopLobbyUpdates(),this.currentLobbyId=``,this.currentClientID=``,this.isConnecting=!1}leaveLobby(){this.currentLobbyId&&this.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:this.currentLobbyId},bubbles:!0,composed:!0}))}confirmBeforeClose(){return this.currentLobbyId?this.confirmClose(A(`host_modal.leave_confirmation`)):!0}onClose(){this.hostedLobbySocket.stop(),this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.clearCountdownTimer(),this.stopLobbyUpdates(),this.leaveLobbyOnClose&&(this.leaveLobby(),this.updateHistory(`/`)),this.lobbyIdInput&&(this.lobbyIdInput.value=``),this.gameConfig=null,this.players=[],this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0}disconnectedCallback(){this.hostedLobbySocket.stop(),this.clearCountdownTimer(),this.stopLobbyUpdates(),super.disconnectedCallback()}closeAndLeave(){this.leaveLobby();try{this.updateHistory(`/`)}catch(e){console.warn(`Failed to restore URL on leave:`,e)}this.leaveLobbyOnClose=!1,this.close()}disarmLeaveOnClose(){this.leaveLobbyOnClose=!1}closeWithoutLeaving(){this.disarmLeaveOnClose(),this.close()}updateHistory(e){t.isOnGamePortal()||history.replaceState(null,``,e)}renderGameConfig(){if(!this.gameConfig)return F``;let e=this.gameConfig,t=R(e.gameMap),n=h(e.gameMap),r=T(`maps/${encodeURIComponent(n)}/thumbnail.webp`),i=a(e),o=S(e,this.nationCount).map(e=>F`<span class="${v}"
          >${j(e)}</span
        >`),s=b.find(t=>t.type===e.gameMap),c=B(s);return F`
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span class="text-lg font-bold text-white">${t}</span>
        <span class="text-sm text-white/60">${i}</span>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          data-test-map-preview
          class="flex items-center justify-center w-full ${o.length>0||c?`sm:w-3/5`:``} shrink-0 rounded-lg border border-white/10 bg-black/20 overflow-hidden"
        >
          <img
            src=${r}
            alt=${t??e.gameMap}
            class="block w-full max-h-60 object-contain"
            @error=${e=>{let t=e.target.parentElement;t&&(t.style.display=`none`)}}
          />
        </div>
        ${o.length>0||c?F`<div class="flex flex-col gap-3 min-w-0 flex-1">
                ${o.length>0?F`<div
                        data-test-lobby-settings
                        class="flex flex-wrap content-start gap-1 uppercase"
                      >
                        ${o}
                      </div>`:F``}
                ${c?F`<div
                        data-test-map-details
                        class="flex flex-col gap-1 text-xs text-white/80"
                      >
                        ${V(s)}
                      </div>`:F``}
              </div>`:F``}
      </div>
      ${N(e,`mt-4 mb-6`)} ${E(e,`mt-4 mb-6`)}
    `}updateFromLobby(e){if(this.players=`clients`in e?e.clients??[]:[],`serverTime`in e&&typeof e.serverTime==`number`&&(this.serverTimeOffset=C(e.serverTime)),this.lobbyStartAt=e.startsAt??null,this.syncCountdownTimer(),e.gameConfig){let t=this.gameConfig?.gameMap!==e.gameConfig.gameMap;this.gameConfig=e.gameConfig,t&&this.loadNationCount()}this.lobbyCreatorClientID=`lobbyCreatorClientID`in e?e.lobbyCreatorClientID??null:null}startLobbyUpdates(){if(this.stopLobbyUpdates(),!this.eventBus){console.warn(`JoinLobbyModal: eventBus not set, cannot subscribe to lobby updates`);return}this.eventBus.on(u,this.handleLobbyInfo)}stopLobbyUpdates(){this.eventBus?.off(u,this.handleLobbyInfo)}syncCountdownTimer(){if(this.lobbyStartAt===null){this.clearCountdownTimer();return}this.countdownTimerId===null&&(this.countdownTimerId=window.setInterval(()=>{this.checkForJoinTimeout(),this.requestUpdate()},1e3))}clearCountdownTimer(){this.countdownTimerId!==null&&(clearInterval(this.countdownTimerId),this.countdownTimerId=null)}checkForJoinTimeout(){this.handledJoinTimeout||!this.isConnecting||this.lobbyStartAt===null||!this.isModalOpen||r(this.serverTimeOffset)<this.lobbyStartAt||(this.handledJoinTimeout=!0,window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:A(`public_lobby.join_timeout`),color:`red`,duration:3500}})),this.closeAndLeave())}async loadNationCount(){if(!this.gameConfig){this.nationCount=0;return}let e=this.gameConfig.gameMap;try{let t=await M.getMapData(e).manifest();this.gameConfig?.gameMap===e&&(this.nationCount=t.nations.length)}catch(t){console.warn(`Failed to load nation count`,t),this.gameConfig?.gameMap===e&&(this.nationCount=0)}}isValidLobbyId(e){return s.test(e)}normalizeLobbyId(e){let t=e.trim();if(!t)return null;let n=this.extractLobbyIdFromUrl(t).trim();return this.isValidLobbyId(n)?n:null}sanitizeForLog(e){return e.replace(/[\r\n]/g,``)}extractLobbyIdFromUrl(e){if(!e.startsWith(`http`))return e;try{let t=new URL(e);for(let e of[`gdgameId`,`gameId`]){let n=t.searchParams.get(e);if(n&&s.test(n))return n}let n=t.pathname.match(/game\/([^/]+)/)?.[1];return n&&s.test(n)?n:e}catch(t){return console.warn(`Failed to parse lobby URL`,t),e}}setLobbyId(e){this.lobbyIdInput&&(this.lobbyIdInput.value=this.extractLobbyIdFromUrl(e))}handleChange(e){let t=e.target.value.trim();this.setLobbyId(t)}async pasteFromClipboard(){try{let e=await navigator.clipboard.readText();this.setLobbyId(e)}catch(e){console.warn(`Failed to read clipboard contents: `,e)}}joinLobbyFromInput(e){return e.preventDefault(),this.enterLobbyFromInput(!1)}spectateLobbyFromInput(){return this.enterLobbyFromInput(!0)}async enterLobbyFromInput(e){let t=this.normalizeLobbyId(this.lobbyIdInput.value);if(!t){this.showMessage(A(`private_lobby.not_found`),`red`);return}this.lobbyIdInput.value=t,console.log(`Joining lobby with ID: ${this.sanitizeForLog(t)}`),this.startTrackingLobby(t);try{if(await this.checkActiveLobby(t,e))return;switch(await this.checkArchivedGame(t)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(A(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(A(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(A(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby existence:`,e),this.resetTrackingState(),this.showMessage(A(`private_lobby.error`),`red`)}}showMessage(e,t=`green`){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:3e3,color:t}}))}async checkActiveLobby(e,t=!1){if(await L(),p(e,t))return!0;let n;try{let t=`${c.gameHttpBase(e)}/${c.gameWorkerPath(e)}/api/game/${e}/exists`;n=await fetch(t,{method:`GET`,headers:{"Content-Type":`application/json`}})}catch{return!1}if(!n.ok||!(n.headers.get(`content-type`)??``).includes(`application/json`))return!1;let r;try{r=await n.json()}catch(e){return console.warn(`Failed to parse active lobby response`,e),!1}return r.exists?(this.showMessage(A(t?`private_lobby.spectating`:`private_lobby.joined_waiting`)),this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,source:`private`,spectator:t},bubbles:!0,composed:!0,cancelable:!0})),!0):!1}async checkArchivedGame(t){let n=await fetch(`${O()}/game/${t}`,{method:`GET`,headers:{"Content-Type":`application/json`}});if(n.status===404)return`not_found`;if(n.status!==200)return`error`;let r=await n.json(),i=e.safeParse(r);if(!i.success)return`version_mismatch`;let a=c.gitCommit();if(a!==`DEV`&&i.data.gitCommit!==a){let e=this.sanitizeForLog(t);return console.warn(`Git commit hash mismatch for game ${e}`,r.details),await this.redirectToVersionedShell(t)?`redirected`:`version_mismatch`}return this.leaveLobbyOnClose=!1,o(t,i.data)?(this.close(),`success`):(this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:t,gameRecord:i.data,source:`private`},bubbles:!0,composed:!0,cancelable:!0})),`success`)}async redirectToVersionedShell(e){let t=await f(c.jwtAudience(),e,window.location.hostname);return t===null?!1:(window.location.href=t,!0)}};_([y(`#lobbyIdInput`)],W.prototype,`lobbyIdInput`,void 0),_([w({attribute:!1})],W.prototype,`eventBus`,void 0),_([D()],W.prototype,`players`,void 0),_([D()],W.prototype,`playerCount`,void 0),_([D()],W.prototype,`gameConfig`,void 0),_([D()],W.prototype,`currentLobbyId`,void 0),_([D()],W.prototype,`currentClientID`,void 0),_([D()],W.prototype,`nationCount`,void 0),_([D()],W.prototype,`lobbyStartAt`,void 0),_([D()],W.prototype,`serverTimeOffset`,void 0),_([D()],W.prototype,`isConnecting`,void 0),_([D()],W.prototype,`lobbyCreatorClientID`,void 0),_([D()],W.prototype,`hostedLobbies`,void 0),_([D()],W.prototype,`hostedLobbiesLoaded`,void 0),W=_([x(`join-lobby-modal`)],W);export{W as JoinLobbyModal};