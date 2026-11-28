import{$a as e,Ci as t,Ea as n,Eo as r,Fi as i,Gi as a,Is as o,Ji as s,Oo as c,Os as l,Rs as u,Sa as d,So as f,Zi as p,_i as m,_r as h,ai as g,bn as _,ci as v,di as y,do as b,fi as x,hi as S,ir as C,ka as w,ko as T,li as E,oa as D,oc as O,si as k,ss as A,ui as j,uo as M,yn as N,zs as P}from"./index-BZ-JOJvb.js";import"./PlutoniumIcon-BLvAywb0.js";import"./InsufficientCurrencyDialog-Bdu3jciW.js";import{n as F,r as I,t as L}from"./ToggleInputCard-Eb0H6KrE.js";import{a as R,c as z,i as B,l as V,n as H,o as U,r as W,s as G,t as K,u as q}from"./GameConfigHelpers-CNc19QSu.js";import{t as J}from"./InviteFriendsButton-BBugwEkC.js";var Y=class extends j{constructor(...e){super(...e),this.labelKey=``,this.inputType=`number`}createRenderRoot(){return this}render(){return S`
      <div class="${I(!0)}">
        <div
          class="w-full h-full p-3 flex flex-col items-center justify-between gap-2"
        >
          <div class="h-[30px] my-1"></div>

          <span class="${L} text-center text-white">
            ${p(this.labelKey)}
          </span>
        </div>

        <div class="absolute left-3 right-3 top-1/2 -translate-y-1/2 z-10">
          <input
            type=${this.inputType}
            id=${this.inputId??x}
            min=${this.inputMin??x}
            max=${this.inputMax??x}
            step=${this.inputStep??x}
            .value=${String(this.inputValue??``)}
            class=${F}
            aria-label=${this.inputAriaLabel??x}
            placeholder=${this.inputPlaceholder??x}
            @input=${this.onInput}
            @change=${this.onChange}
            @keydown=${this.onKeyDown}
          />
        </div>
      </div>
    `}};g([v({attribute:!1})],Y.prototype,`labelKey`,void 0),g([v({attribute:!1})],Y.prototype,`inputId`,void 0),g([v({attribute:!1})],Y.prototype,`inputType`,void 0),g([v({attribute:!1})],Y.prototype,`inputMin`,void 0),g([v({attribute:!1})],Y.prototype,`inputMax`,void 0),g([v({attribute:!1})],Y.prototype,`inputStep`,void 0),g([v({attribute:!1})],Y.prototype,`inputValue`,void 0),g([v({attribute:!1})],Y.prototype,`inputAriaLabel`,void 0),g([v({attribute:!1})],Y.prototype,`inputPlaceholder`,void 0),g([v({attribute:!1})],Y.prototype,`onInput`,void 0),g([v({attribute:!1})],Y.prototype,`onChange`,void 0),g([v({attribute:!1})],Y.prototype,`onKeyDown`,void 0),Y=g([E(`input-card`)],Y);var X=T/6e4,Z=r/6e4,Q=class extends j{constructor(...e){super(...e),this.currentPlayers=1,this.startMinutes=Z,this.maxPlayers=500,this.portal=null}willUpdate(e){e.has(`suggestedMaxPlayers`)&&this.suggestedMaxPlayers!==void 0&&(this.maxPlayers=Math.min(500,this.suggestedMaxPlayers))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(y(S``,this.portal),this.portal.remove(),null)}render(){return this.portal&&y(this.renderOverlay(),this.portal),S``}minPlayers(){let e=this.playerTeams===`Duos`?2:this.playerTeams===`Trios`?3:this.playerTeams===`Quads`?4:1,t=Math.max(10,this.currentPlayers+1),n=e>1?Math.ceil(t/e)*e:t;return Math.min(500,n)}renderOverlay(){let e=this.minPlayers(),t=Math.max(this.maxPlayers,e);return S`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.handleCancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-malibu-blue/50 bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-2">
            ${p(`host_modal.list_lobby_title`)}
          </h2>
          <p class="text-sm font-medium text-white/70 mb-5">
            ${p(`host_modal.list_lobby_body`)}
          </p>
          <div class="flex flex-col gap-5 mb-6">
            <fluent-slider
              .min=${X}
              .max=${Z}
              .step=${1}
              .value=${this.startMinutes}
              labelKey="host_modal.list_lobby_start_minutes"
              @value-changed=${e=>this.startMinutes=e.detail.value}
            ></fluent-slider>
            <fluent-slider
              .min=${e}
              .max=${500}
              .step=${1}
              .value=${t}
              labelKey="host_modal.list_lobby_max_players"
              @value-changed=${e=>this.maxPlayers=e.detail.value}
            ></fluent-slider>
          </div>
          <div class="flex gap-3">
            <button
              @click=${()=>this.handleCancel()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
            >
              ${p(`common.cancel`)}
            </button>
            <button
              @click=${()=>this.handleConfirm(t)}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-malibu-blue text-white hover:brightness-110 transition-all border-0"
            >
              ${p(`host_modal.list_lobby_confirm`)}
            </button>
          </div>
        </div>
      </div>
    `}handleConfirm(e){this.dispatchEvent(new CustomEvent(`confirm`,{detail:{autoStartMs:this.startMinutes*6e4,maxPlayers:e}}))}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`))}};g([v({type:Number})],Q.prototype,`currentPlayers`,void 0),g([v({attribute:!1})],Q.prototype,`suggestedMaxPlayers`,void 0),g([v({attribute:!1})],Q.prototype,`playerTeams`,void 0),g([k()],Q.prototype,`startMinutes`,void 0),g([k()],Q.prototype,`maxPlayers`,void 0),Q=g([E(`list-lobby-dialog`)],Q);var $=class extends _{constructor(){super(),this.selectedMap=O.World,this.selectedDifficulty=o.Easy,this.nations=0,this.defaultNationCount=0,this.gameMode=P.FFA,this.teamCount=2,this.lobbyPresets=[],this.selectedPresetName=``,this.bots=400,this.spawnImmunity=!1,this.spawnImmunityDurationMinutes=void 0,this.infiniteGold=!1,this.donateGold=!1,this.infiniteTroops=!1,this.donateTroops=!1,this.maxTimer=!1,this.maxTimerValue=void 0,this.winThreshold=!1,this.winThresholdValue=void 0,this.playerLimit=!1,this.playerLimitValue=void 0,this.startDelayValue=3,this.instantBuild=!1,this.randomSpawn=!1,this.compactMap=!1,this.goldMultiplier=!1,this.goldMultiplierValue=void 0,this.startingGold=!1,this.startingGoldValue=void 0,this.customAlliances=!1,this.customAllianceMinutes=void 0,this.doomsdayClock=!1,this.doomsdayClockSpeed=`normal`,this.overtime=!1,this.overtimeStartMinutes=void 0,this.anonymizeNames=!1,this.nameReveals=[],this.whitelistEnabled=!1,this.allowedPublicIds=``,this.waterNukes=!1,this.lobbyId=``,this.lobbyUrlSuffix=``,this.clients=[],this.useRandomMap=!1,this.disabledUnits=[],this.hostCheatsEnabled=!1,this.hostCheatInfiniteGold=!1,this.hostCheatInfiniteTroops=!1,this.hostCheatGoldMultiplier=!1,this.hostCheatGoldMultiplierValue=void 0,this.hostCheatStartingGold=!1,this.hostCheatStartingGoldValue=void 0,this.lobbyCreatorClientID=``,this.lobbyStartAt=null,this.serverTimeOffset=0,this.canListPublicly=!1,this.publiclyListed=!1,this.showSubscriptionRequired=!1,this.showListLobbyDialog=!1,this.autoStartAt=null,this.queued=!1,this.queuePriceHard=null,this.queueRequestInFlight=!1,this.showQueueConfirm=!1,this.insufficientInfo=null,this.hardBalance=0,this.eventBus=null,this.botsUpdateTimer=null,this.nationsUpdateTimer=null,this.mapLoader=C,this.userSettings=new e,this.leaveLobbyOnClose=!0,this.listingRequestInFlight=!1,this.playerLimitLoadedFor=null,this.winThresholdLoadedFor=null,this.handleLobbyInfo=e=>{let n=e.lobby;if(!(!this.lobbyId||n.gameID!==this.lobbyId)){if(this.playerLimitLoadedFor!==this.lobbyId){this.playerLimitLoadedFor=this.lobbyId;let e=n.gameConfig?.maxPlayers;e!==void 0&&(this.playerLimit=!0,this.playerLimitValue=e)}if(this.winThresholdLoadedFor!==this.lobbyId){this.winThresholdLoadedFor=this.lobbyId;let e=n.gameConfig?.winThresholdTenths;typeof e==`number`&&(this.winThreshold=!0,this.winThresholdValue=e/10)}`serverTime`in n&&typeof n.serverTime==`number`&&(this.serverTimeOffset=t(n.serverTime)),this.lobbyStartAt=n.startsAt??null,this.lobbyCreatorClientID=n.lobbyCreatorClientID??``,n.clients&&(this.clients=n.clients),!this.listingRequestInFlight&&n.listed!==void 0&&(this.publiclyListed=n.listed),this.autoStartAt=n.autoStartAt??null,this.queued=n.queued??!1}},this.handleConfigRandomMapSelected=()=>{this.handleSelectRandomMap()},this.handleConfigMapSelected=e=>{let t=e;this.handleMapSelection(t.detail.map)},this.handleConfigDifficultySelected=e=>{let t=e;this.handleDifficultySelection(t.detail.difficulty)},this.handleConfigDoomsdayClockSpeedSelected=e=>{let t=e;this.doomsdayClockSpeed=t.detail.speed,this.putGameConfig()},this.handleConfigGameModeSelected=e=>{let t=e;this.handleGameModeSelection(t.detail.mode)},this.handleConfigTeamCountSelected=e=>{let t=e;this.handleTeamCountSelection(t.detail.count)},this.handleConfigOptionToggleChanged=e=>{let{labelKey:t,checked:n}=e.detail;switch(t){case`game_settings.instant_build`:this.handleInstantBuildChange(n);break;case`game_settings.random_spawn`:this.handleRandomSpawnChange(n);break;case`host_modal.donate_gold`:this.handleDonateGoldChange(n);break;case`host_modal.donate_troops`:this.handleDonateTroopsChange(n);break;case`game_settings.infinite_gold`:this.handleInfiniteGoldChange(n);break;case`game_settings.infinite_troops`:this.handleInfiniteTroopsChange(n);break;case`game_settings.compact_map`:this.handleCompactMapChange(n);break;case`host_modal.anonymous_players`:this.anonymizeNames=n,this.putGameConfig();break;case`game_settings.water_nukes`:this.waterNukes=n,this.putGameConfig();break;case`game_settings.doomsday_clock`:this.doomsdayClock=n,this.putGameConfig();break;case`host_modal.host_cheats`:this.hostCheatsEnabled=n,this.putGameConfig();break;default:break}},this.handleConfigHostCheatToggleChanged=e=>{let{labelKey:t,checked:n}=e.detail;switch(t){case`game_settings.infinite_gold`:this.hostCheatInfiniteGold=n,this.putGameConfig();break;case`game_settings.infinite_troops`:this.hostCheatInfiniteTroops=n,this.putGameConfig();break;default:break}},this.handleConfigUnitToggleChanged=e=>{let{unit:t,checked:n}=e.detail;this.disabledUnits=B(this.disabledUnits,t,n),this.putGameConfig()},this.handleBotsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.bots=t,this.botsUpdateTimer!==null&&clearTimeout(this.botsUpdateTimer),this.botsUpdateTimer=window.setTimeout(()=>{this.putGameConfig(),this.botsUpdateTimer=null},300))},this.handleInstantBuildChange=e=>{this.instantBuild=e,this.putGameConfig()},this.handleMaxTimerToggle=(e,t)=>{this.maxTimer=e,this.maxTimerValue=q(t),this.putGameConfig()},this.handleWinThresholdToggle=(e,t)=>{this.winThreshold=e,this.winThresholdValue=q(t),this.winThresholdLoadedFor=this.lobbyId,this.putGameConfig()},this.handleWinThresholdValueKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`])},this.handleWinThresholdValueChanges=e=>{let t=e.target,n=U(t,{min:10,max:99.9});this.winThresholdLoadedFor=this.lobbyId,n===void 0?(this.winThresholdValue=void 0,t.value=``):this.winThresholdValue=Math.round(n*10)/10,this.putGameConfig()},this.handleOvertimeToggle=(e,t)=>{this.overtime=e,this.overtimeStartMinutes=q(t),this.putGameConfig()},this.handleOvertimeMinutesKeyDown=e=>{z(e,[`-`,`+`,`e`])},this.handleOvertimeMinutesInput=e=>{let t=e.target,n=G(t,{min:1,max:120,stripPattern:/[e+-]/gi});n!==void 0&&(this.overtimeStartMinutes=n,this.putGameConfig())},this.handleSpawnImmunityToggle=(e,t)=>{this.spawnImmunity=e,this.spawnImmunityDurationMinutes=q(t),this.putGameConfig()},this.handleGoldMultiplierToggle=(e,t)=>{this.goldMultiplier=e,this.goldMultiplierValue=q(t),this.putGameConfig()},this.handleStartingGoldToggle=(e,t)=>{this.startingGold=e,this.startingGoldValue=q(t),this.putGameConfig()},this.handleSpawnImmunityDurationKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`])},this.handleSpawnImmunityDurationInput=e=>{let t=e.target,n=G(t,{min:0,max:120});n!==void 0&&(this.spawnImmunityDurationMinutes=n,this.putGameConfig())},this.handleCustomAlliancesToggle=(e,t)=>{this.customAlliances=e,this.customAllianceMinutes=q(t),this.putGameConfig()},this.handleCustomAllianceMinutesKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`])},this.handleCustomAllianceMinutesInput=e=>{let t=e.target,n=G(t,{min:0,max:15});n!==void 0&&(this.customAllianceMinutes=n,this.putGameConfig())},this.handleGoldMultiplierValueKeyDown=e=>{z(e,[`+`,`-`,`e`,`E`])},this.handleGoldMultiplierValueChanges=e=>{let t=e.target,n=U(t,{min:.1,max:1e3});n===void 0?(this.goldMultiplierValue=void 0,t.value=``):this.goldMultiplierValue=n,this.putGameConfig()},this.handleStartingGoldValueKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`])},this.handleStartingGoldValueChanges=e=>{let t=e.target,n=U(t,{min:.1,max:1e3});n===void 0?(this.startingGoldValue=void 0,t.value=``):this.startingGoldValue=n,this.putGameConfig()},this.handleHostCheatGoldMultiplierToggle=(e,t)=>{this.hostCheatGoldMultiplier=e,this.hostCheatGoldMultiplierValue=q(t),this.putGameConfig()},this.handleHostCheatGoldMultiplierValueKeyDown=e=>{z(e,[`+`,`-`,`e`,`E`])},this.handleHostCheatGoldMultiplierValueChanges=e=>{let t=e.target,n=U(t,{min:.1,max:1e3});n===void 0?(this.hostCheatGoldMultiplierValue=void 0,t.value=``):this.hostCheatGoldMultiplierValue=n,this.putGameConfig()},this.handleHostCheatStartingGoldToggle=(e,t)=>{this.hostCheatStartingGold=e,this.hostCheatStartingGoldValue=q(t),this.putGameConfig()},this.handleHostCheatStartingGoldValueKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`])},this.handleHostCheatStartingGoldValueChanges=e=>{let t=e.target,n=U(t,{min:.1,max:1e3});n===void 0?(this.hostCheatStartingGoldValue=void 0,t.value=``):this.hostCheatStartingGoldValue=n,this.putGameConfig()},this.handleRandomSpawnChange=e=>{this.randomSpawn=e,this.putGameConfig()},this.handleInfiniteGoldChange=e=>{this.infiniteGold=e,this.putGameConfig()},this.handleDonateGoldChange=e=>{this.donateGold=e,this.putGameConfig()},this.handleInfiniteTroopsChange=e=>{this.infiniteTroops=e,this.putGameConfig()},this.handleCompactMapChange=e=>{this.compactMap=e,this.bots=K(this.bots,e),this.nations=H(this.nations,this.defaultNationCount,e),this.putGameConfig()},this.handleDonateTroopsChange=e=>{this.donateTroops=e,this.putGameConfig()},this.handleMaxTimerValueKeyDown=e=>{z(e,[`-`,`+`,`e`])},this.handleMaxTimerValueChanges=e=>{let t=e.target,n=G(t,{min:1,max:120,stripPattern:/[e+-]/gi});n!==void 0&&(this.maxTimerValue=n,this.putGameConfig())},this.handlePlayerLimitToggle=(e,t)=>{this.playerLimit=e,this.playerLimitValue=q(t),this.markPlayerLimitSettled(),this.putGameConfig()},this.handlePlayerLimitValueKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`,`.`])},this.handlePlayerLimitValueChanges=e=>{let t=e.target,n=G(t,{min:2,max:1e3});n!==void 0&&(this.playerLimitValue=n,this.markPlayerLimitSettled(),this.putGameConfig())},this.handleStartDelayValueKeyDown=e=>{z(e,[`-`,`+`,`e`,`E`,`.`])},this.handleStartDelayValueChanges=e=>{let t=e.target,n=G(t,{min:0,max:600});n===void 0?(this.startDelayValue=void 0,t.value=``):this.startDelayValue=n,this.putGameConfig()},this.handleNationsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.nations=t,this.nationsUpdateTimer!==null&&clearTimeout(this.nationsUpdateTimer),this.nationsUpdateTimer=window.setTimeout(()=>{this.putGameConfig(),this.nationsUpdateTimer=null},300))},this.handleWhitelistToggle=e=>{this.whitelistEnabled=e,this.putGameConfig()},this.handleAllowedPublicIdsChange=e=>{this.allowedPublicIds=e.target.value,this.putGameConfig()},this.handlePresetSelect=e=>{this.selectedPresetName=e.detail},this.handlePresetLoad=async e=>{if(this.publiclyListed)return;let t=e.detail,n=this.lobbyPresets.find(e=>e.name.toLowerCase()===t.toLowerCase());n&&(await this.importPresetConfig(n.config),this.selectedPresetName=n.name,s(p(`lobby_config.preset.loaded`),`green`))},this.handlePresetSave=e=>{let t=e.detail,n=b(t,this.exportPresetConfig(),this.userSettings);if(!n){s(p(`lobby_config.preset.save_failed`),`red`);return}this.lobbyPresets=n;let r=n.find(e=>e.name.toLowerCase()===t.trim().toLowerCase());this.selectedPresetName=r?r.name:t.trim(),s(p(`lobby_config.preset.saved`),`green`)},this.handlePresetDelete=e=>{let t=e.detail,n=M(t,this.userSettings);if(!n){s(p(`lobby_config.preset.delete_failed`),`red`);return}this.lobbyPresets=n,this.selectedPresetName.toLowerCase()===t.toLowerCase()&&(this.selectedPresetName=``),s(p(`lobby_config.preset.deleted`),`green`)},this.id=`page-host-lobby`}connectedCallback(){super.connectedCallback(),this.lobbyPresets=this.userSettings.getLobbyPresets()}getRandomString(){return Array.from({length:5},()=>`abcdefghijklmnopqrstuvwxyz0123456789`[Math.floor(Math.random()*36)]).join(``)}async buildLobbyUrl(){if(m.isOnGamePortal()){let e=await m.createInviteLink(this.lobbyId);if(e!==null)return e}return`${window.location.origin}${f.gamePath(this.lobbyId)}?lobby&s=${encodeURIComponent(this.lobbyUrlSuffix)}`}async constructUrl(){return this.lobbyUrlSuffix=this.getRandomString(),await this.buildLobbyUrl()}updateHistory(e){m.isOnGamePortal()||history.replaceState(null,``,e)}updateLobbyHistory(e){if(m.isOnGamePortal())return;let t=!this.userSettings.lobbyIdVisibility();history.replaceState(null,``,t?`/streamer-mode`:e)}startLobbyUpdates(){if(this.stopLobbyUpdates(),!this.eventBus){console.warn(`HostLobbyModal: eventBus not set, cannot subscribe to lobby updates`);return}this.eventBus.on(c,this.handleLobbyInfo)}stopLobbyUpdates(){this.eventBus?.off(c,this.handleLobbyInfo)}renderHeaderSlot(){return N({titleContent:S`
        <span
          class="text-white text-xl lg:text-2xl font-bold uppercase tracking-widest break-words hyphens-auto"
        >
          ${p(`host_modal.title`)}
        </span>
        ${this.renderVisibilityToggle()}
      `,onBack:()=>{this.leaveLobbyOnClose=!0,this.close()},ariaLabel:p(`common.back`),rightContent:S`<div class="flex flex-wrap items-center gap-2">
          ${S`<lobby-preset-controls
          .presets=${this.lobbyPresets}
          .selectedName=${this.selectedPresetName}
          ?disabled=${this.publiclyListed}
          @preset-select=${this.handlePresetSelect}
          @preset-load=${this.handlePresetLoad}
          @preset-save=${this.handlePresetSave}
          @preset-delete=${this.handlePresetDelete}
        ></lobby-preset-controls>`}${S`<copy-button
          .lobbyId=${this.lobbyId}
          .lobbySuffix=${this.lobbyUrlSuffix}
          include-lobby-query
        ></copy-button>`}${this.lobbyId?J():void 0}
        </div>`})}renderVisibilityToggle(){let e=(e,t)=>S`
      <button
        class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${this.publiclyListed===t?`bg-malibu-blue text-white`:`text-white/50 hover:text-white`}"
        @click=${()=>this.handleVisibilitySelect(t)}
      >
        ${p(e)}
      </button>
    `;return S`
      <div
        class="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 shrink-0"
      >
        ${this.publiclyListed?x:e(`host_modal.visibility_private`,!1)}
        ${e(`host_modal.visibility_public`,!0)}
      </div>
      ${this.renderAutoStartTimer()} ${this.renderQueueButton()}
    `}renderQueueButton(){return this.publiclyListed?this.queued?S`<span
        class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-green-500/15 text-green-400 border border-green-500/30 shrink-0"
        >${p(`host_modal.queued`)}</span
      >`:this.queuePriceHard===null||this.lobbyStartAt!==null||this.autoStartAt!==null&&i(this.autoStartAt,this.serverTimeOffset)*1e3<3e4?x:S`<button
      class="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-green-500/15 text-green-400 border border-green-500/30 hover:bg-green-500/25 transition-all shrink-0 disabled:opacity-50"
      title=${p(`host_modal.queue_tooltip`)}
      ?disabled=${this.queueRequestInFlight}
      @click=${()=>this.showQueueConfirm=!0}
    >
      ${p(`host_modal.queue`)}
      <plutonium-icon .size=${12}></plutonium-icon>
      <span class="tabular-nums">${this.queuePriceHard}</span>
    </button>`:x}async handleQueue(){let e=this.queuePriceHard;if(this.queueRequestInFlight||e===null||!this.lobbyId)return;this.queueRequestInFlight=!0;let t=await n(this.lobbyId);if(this.queueRequestInFlight=!1,t.ok){this.queued=!0;return}if(t.error===`insufficient_balance`){this.insufficientInfo={currency:p(`cosmetics.hard`),shortfall:Math.max(1,e-this.hardBalance),item:p(`host_modal.queue_item`),canTopUp:!0};return}s(p(`host_modal.queue_failed`),`red`,3e3)}renderAutoStartTimer(){if(!this.publiclyListed||this.autoStartAt===null||this.lobbyStartAt!==null)return x;let e=i(this.autoStartAt,this.serverTimeOffset);return S`<span
      class="text-amber-300 text-xs font-bold tabular-nums shrink-0"
      title=${p(`host_modal.auto_start_timer`)}
      >${a(e)}</span
    >`}handleVisibilitySelect(e){if(!(this.listingRequestInFlight||e===this.publiclyListed||!this.lobbyId)){if(e&&!this.canListPublicly){this.showSubscriptionRequired=!0;return}if(e){this.showListLobbyDialog=!0;return}this.handlePublicListingToggle(e)}}renderBody(){let e=this.lobbyStartAt===null?null:i(this.lobbyStartAt,this.serverTimeOffset),t=e===null?this.queued?p(`host_modal.queued_waiting`):this.seatedPlayerCount()===1?p(`host_modal.waiting`):p(`game_settings.start`):p(this.queued?`public_lobby.starting_in`:`host_modal.starting_in`,{time:a(e)}),n=[S`<toggle-input-card
        .labelKey=${`game_settings.max_timer`}
        .checked=${this.maxTimer}
        .inputMin=${1}
        .inputMax=${120}
        .inputValue=${this.maxTimerValue}
        .inputAriaLabel=${p(`game_settings.max_timer`)}
        .inputPlaceholder=${p(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleMaxTimerToggle}
        .onInput=${this.handleMaxTimerValueChanges}
        .onKeyDown=${this.handleMaxTimerValueKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`host_modal.player_limit`}
        .checked=${this.playerLimit}
        .inputId=${`player-limit-value`}
        .inputMin=${2}
        .inputMax=${1e3}
        .inputValue=${this.playerLimitValue}
        .inputAriaLabel=${p(`host_modal.player_limit`)}
        .inputPlaceholder=${p(`host_modal.player_limit_placeholder`)}
        .defaultInputValue=${50}
        .minValidOnEnable=${2}
        .onToggle=${this.handlePlayerLimitToggle}
        .onInput=${this.handlePlayerLimitValueChanges}
        .onKeyDown=${this.handlePlayerLimitValueKeyDown}
      ></toggle-input-card>`,S`<input-card
        .labelKey=${`host_modal.start_delay`}
        .inputId=${`start-delay-value`}
        .inputMin=${0}
        .inputMax=${600}
        .inputStep=${`1`}
        .inputValue=${this.startDelayValue}
        .inputAriaLabel=${p(`host_modal.start_delay`)}
        .inputPlaceholder=${`3`}
        .defaultInputValue=${3}
        .onChange=${this.handleStartDelayValueChanges}
        .onKeyDown=${this.handleStartDelayValueKeyDown}
      ></input-card>`,S`<toggle-input-card
        .labelKey=${`host_modal.player_immunity_duration`}
        .checked=${this.spawnImmunity}
        .inputMin=${0}
        .inputMax=${120}
        .inputStep=${1}
        .inputValue=${this.spawnImmunityDurationMinutes}
        .inputAriaLabel=${p(`host_modal.player_immunity_duration`)}
        .inputPlaceholder=${p(`game_settings.mins_placeholder`)}
        .defaultInputValue=${5}
        .minValidOnEnable=${0}
        .onToggle=${this.handleSpawnImmunityToggle}
        .onInput=${this.handleSpawnImmunityDurationInput}
        .onKeyDown=${this.handleSpawnImmunityDurationKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`game_settings.custom_alliances`}
        .checked=${this.customAlliances}
        .inputMin=${0}
        .inputMax=${15}
        .inputStep=${1}
        .inputValue=${this.customAllianceMinutes}
        .inputAriaLabel=${p(`game_settings.custom_alliances`)}
        .inputPlaceholder=${p(`game_settings.mins_placeholder`)}
        .defaultInputValue=${0}
        .minValidOnEnable=${0}
        .zeroLabel=${`(${p(`public_game_modifier.disable_alliances`)})`}
        .onToggle=${this.handleCustomAlliancesToggle}
        .onInput=${this.handleCustomAllianceMinutesInput}
        .onKeyDown=${this.handleCustomAllianceMinutesKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`game_settings.overtime`}
        .checked=${this.overtime}
        .inputMin=${1}
        .inputMax=${120}
        .inputStep=${1}
        .inputValue=${this.overtimeStartMinutes}
        .inputAriaLabel=${p(`game_settings.overtime`)}
        .inputPlaceholder=${p(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleOvertimeToggle}
        .onInput=${this.handleOvertimeMinutesInput}
        .onKeyDown=${this.handleOvertimeMinutesKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`game_settings.win_threshold`}
        .checked=${this.winThreshold}
        .inputId=${`win-threshold-value`}
        .inputMin=${10}
        .inputMax=${99.9}
        .inputStep=${`0.1`}
        .inputValue=${this.winThresholdValue}
        .inputAriaLabel=${p(`game_settings.win_threshold`)}
        .inputPlaceholder=${`80`}
        .defaultInputValue=${80}
        .minValidOnEnable=${10}
        .onToggle=${this.handleWinThresholdToggle}
        .onChange=${this.handleWinThresholdValueChanges}
        .onKeyDown=${this.handleWinThresholdValueKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`game_settings.gold_multiplier`}
        .checked=${this.goldMultiplier}
        .inputId=${`gold-multiplier-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.goldMultiplierValue}
        .inputAriaLabel=${p(`game_settings.gold_multiplier`)}
        .inputPlaceholder=${`2.0x`}
        .defaultInputValue=${2}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleGoldMultiplierToggle}
        .onChange=${this.handleGoldMultiplierValueChanges}
        .onKeyDown=${this.handleGoldMultiplierValueKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`game_settings.starting_gold`}
        .checked=${this.startingGold}
        .inputId=${`starting-gold-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.startingGoldValue}
        .inputAriaLabel=${p(`game_settings.starting_gold`)}
        .inputPlaceholder=${`5`}
        .defaultInputValue=${5}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleStartingGoldToggle}
        .onChange=${this.handleStartingGoldValueChanges}
        .onKeyDown=${this.handleStartingGoldValueKeyDown}
      ></toggle-input-card>`,...this.publiclyListed?[]:[S`<toggle-input-card
              .labelKey=${`host_modal.player_whitelist`}
              .checked=${this.whitelistEnabled}
              .inputType=${`text`}
              .inputId=${`allowed-public-ids`}
              .inputValue=${this.allowedPublicIds}
              .inputAriaLabel=${p(`host_modal.player_whitelist`)}
              .inputPlaceholder=${p(`host_modal.player_whitelist_placeholder`)}
              .onToggle=${this.handleWhitelistToggle}
              .onChange=${this.handleAllowedPublicIdsChange}
            ></toggle-input-card>`]],r=[S`<toggle-input-card
        .labelKey=${`game_settings.gold_multiplier`}
        .checked=${this.hostCheatGoldMultiplier}
        .inputId=${`host-cheat-gold-multiplier-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.hostCheatGoldMultiplierValue}
        .inputAriaLabel=${p(`game_settings.gold_multiplier`)}
        .inputPlaceholder=${`2.0x`}
        .defaultInputValue=${2}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleHostCheatGoldMultiplierToggle}
        .onChange=${this.handleHostCheatGoldMultiplierValueChanges}
        .onKeyDown=${this.handleHostCheatGoldMultiplierValueKeyDown}
      ></toggle-input-card>`,S`<toggle-input-card
        .labelKey=${`game_settings.starting_gold`}
        .checked=${this.hostCheatStartingGold}
        .inputId=${`host-cheat-starting-gold-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.hostCheatStartingGoldValue}
        .inputAriaLabel=${p(`game_settings.starting_gold`)}
        .inputPlaceholder=${`5`}
        .defaultInputValue=${5}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleHostCheatStartingGoldToggle}
        .onChange=${this.handleHostCheatStartingGoldValueChanges}
        .onKeyDown=${this.handleHostCheatStartingGoldValueKeyDown}
      ></toggle-input-card>`];return S`
      <div class="flex flex-col h-full">
        <div
          class="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-6 mr-1 mx-auto w-full max-w-5xl"
        >
          ${this.publiclyListed?S`<div
                  class="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm font-medium text-amber-300"
                >
                  ${p(`host_modal.settings_locked_listed`)}
                </div>`:x}
          <!-- Players joined a listed lobby for its advertised settings, so
               they are frozen (the server rejects changes too). -->
          <game-config-settings
            class="block ${this.publiclyListed?`opacity-60`:``}"
            ?inert=${this.publiclyListed}
            .sectionGapClass=${`space-y-10`}
            .settings=${{map:{selected:this.selectedMap,useRandom:this.useRandomMap,randomMapDivider:!0},difficulty:{selected:this.selectedDifficulty,disabled:this.nations===0},gameMode:{selected:this.gameMode},teamCount:{selected:this.teamCount},options:{titleKey:`game_settings.options`,bots:{value:this.bots,labelKey:`game_settings.bots`,disabledKey:`common.disabled`},nations:{value:this.nations,defaultValue:this.defaultNationCount,labelKey:`game_settings.nations`,disabledKey:`common.disabled`},toggles:[{labelKey:`game_settings.instant_build`,checked:this.instantBuild},{labelKey:`game_settings.random_spawn`,checked:this.randomSpawn},{labelKey:`host_modal.donate_gold`,checked:this.donateGold},{labelKey:`host_modal.donate_troops`,checked:this.donateTroops},{labelKey:`game_settings.infinite_gold`,checked:this.infiniteGold},{labelKey:`game_settings.infinite_troops`,checked:this.infiniteTroops},{labelKey:`game_settings.compact_map`,checked:this.compactMap},{labelKey:`host_modal.anonymous_players`,checked:this.anonymizeNames},{labelKey:`game_settings.water_nukes`,checked:this.waterNukes},{labelKey:`game_settings.doomsday_clock`,checked:this.doomsdayClock,doomsdayClockSpeed:this.doomsdayClockSpeed},...this.publiclyListed?[]:[{labelKey:`host_modal.host_cheats`,checked:this.hostCheatsEnabled}]],inputCards:n},hostCheats:{titleKey:`host_modal.host_cheats`,visible:this.hostCheatsEnabled&&!this.publiclyListed,toggles:[{labelKey:`game_settings.infinite_gold`,checked:this.hostCheatInfiniteGold},{labelKey:`game_settings.infinite_troops`,checked:this.hostCheatInfiniteTroops}],inputCards:r},unitTypes:{titleKey:`game_settings.disable_units`,disabledUnits:this.disabledUnits}}}
            @map-selected=${this.handleConfigMapSelected}
            @random-map-selected=${this.handleConfigRandomMapSelected}
            @difficulty-selected=${this.handleConfigDifficultySelected}
            @doomsday-clock-speed-selected=${this.handleConfigDoomsdayClockSpeedSelected}
            @game-mode-selected=${this.handleConfigGameModeSelected}
            @team-count-selected=${this.handleConfigTeamCountSelected}
            @bots-changed=${this.handleBotsChange}
            @nations-changed=${this.handleNationsChange}
            @option-toggle-changed=${this.handleConfigOptionToggleChanged}
            @host-cheat-toggle-changed=${this.handleConfigHostCheatToggleChanged}
            @unit-toggle-changed=${this.handleConfigUnitToggleChanged}
          ></game-config-settings>

          <lobby-player-view
            class="mt-10"
            .gameMode=${this.gameMode}
            .clients=${this.clients}
            .lobbyCreatorClientID=${this.lobbyCreatorClientID}
            .currentClientID=${this.lobbyCreatorClientID}
            .teamCount=${this.teamCount}
            .nationCount=${this.nations}
            .onKickPlayer=${this.publiclyListed?void 0:e=>this.kickPlayer(e)}
            .onToggleNameReveal=${this.publiclyListed?void 0:e=>this.toggleNameReveal(e)}
            .nameReveals=${this.nameReveals}
            .anonymizeNames=${this.anonymizeNames}
          ></lobby-player-view>
        </div>

        <!-- Player List / footer -->
        <div
          class="p-6 pt-4 compact:py-3 border-t border-white/10 bg-black/20 shrink-0"
        >
          <o-button
            variant=${e===null?`primary`:`warning`}
            width="block"
            size="lg"
            .title=${t}
            .uppercase=${e===null}
            ?disable=${this.queued||this.lobbyStartAt===null&&this.seatedPlayerCount()<2}
            @click=${this.toggleGameStartTimer}
          ></o-button>
        </div>

        ${this.showListLobbyDialog?S`<list-lobby-dialog
                .currentPlayers=${this.seatedPlayerCount()}
                .suggestedMaxPlayers=${this.playerLimit?this.playerLimitValue:void 0}
                .playerTeams=${this.gameMode===P.Team?this.teamCount:void 0}
                @cancel=${()=>this.showListLobbyDialog=!1}
                @confirm=${e=>{this.showListLobbyDialog=!1,this.handlePublicListingToggle(!0,e.detail)}}
              ></list-lobby-dialog>`:``}
        ${this.showQueueConfirm&&this.queuePriceHard!==null?S`<confirm-dialog
                .heading=${p(`host_modal.queue_confirm_title`)}
                .message=${p(`host_modal.queue_confirm_body`,{price:this.queuePriceHard})}
                variant="warning"
                .confirmText=${p(`host_modal.queue_confirm`)}
                @cancel=${()=>this.showQueueConfirm=!1}
                @confirm=${()=>{this.showQueueConfirm=!1,this.handleQueue()}}
              ></confirm-dialog>`:``}
        <insufficient-currency-dialog
          .info=${this.insufficientInfo}
          @close=${()=>this.insufficientInfo=null}
        ></insufficient-currency-dialog>
        ${this.showSubscriptionRequired?S`<confirm-dialog
                .heading=${p(`host_modal.subscription_required_title`)}
                .message=${p(`host_modal.subscription_required_body`)}
                variant="warning"
                .showClose=${!0}
                .buttons=${`confirmOnly`}
                .confirmText=${p(`host_modal.view_subscriptions`)}
                @cancel=${()=>this.showSubscriptionRequired=!1}
                @confirm=${()=>{this.showSubscriptionRequired=!1,window.location.href=`/#modal=store&tab=subscriptions`}}
              ></confirm-dialog>`:``}
      </div>
    `}onOpen(e){this.lobbyPresets=this.userSettings.getLobbyPresets(),this.leaveLobbyOnClose=!0,this.startLobbyUpdates(),d().then(e=>{this.canListPublicly=f.env()===A.Dev||e!==!1&&e.player.canCreatePublicLobbies,this.hardBalance=e===!1?0:e.player.currency?.hard??0}),h().then(e=>{this.queuePriceHard=e?.lobbyQueue?.priceHard??null});let t=typeof e?.existingLobbyId==`string`?e.existingLobbyId:null;if(t!==null){this.attachToExistingLobby(t).catch(()=>{navigator.clipboard.writeText(``).catch(()=>{})}),this.loadNationCount();return}D().then(async({lobby:e,creatorToken:t})=>{if(this.lobbyId=e.gameID,!l(this.lobbyId))throw Error(`Invalid lobby ID format: ${this.lobbyId}`);m.showInviteButton(this.lobbyId);let n=await this.constructUrl();return this.updateLobbyHistory(n),await this.updateComplete,this.querySelector(`copy-button`)?.handleCopy(),t}).then(e=>{this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:this.lobbyId,source:`host`,creatorToken:e},bubbles:!0,composed:!0,cancelable:!0}))}).catch(()=>{navigator.clipboard.writeText(``).catch(()=>{})}),this.loadNationCount()}async attachToExistingLobby(e){if(!l(e))throw Error(`Invalid lobby ID format: ${e}`);this.lobbyId=e,m.showInviteButton(this.lobbyId);let t=await this.constructUrl();this.updateLobbyHistory(t),await this.updateComplete,this.querySelector(`copy-button`)?.handleCopy(),this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:this.lobbyId,source:`host`},bubbles:!0,composed:!0,cancelable:!0}))}leaveLobby(){this.lobbyId&&this.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:this.lobbyId},bubbles:!0,composed:!0}))}disarmLeaveOnClose(){this.leaveLobbyOnClose=!1}closeWithoutLeaving(){this.disarmLeaveOnClose(),this.close()}confirmBeforeClose(){return this.confirmClose(p(`host_modal.leave_confirmation`))}onClose(){console.log(`Closing host lobby modal`),this.stopLobbyUpdates(),this.leaveLobbyOnClose&&(this.leaveLobby(),this.updateHistory(`/`)),m.hideInviteButton(),this.botsUpdateTimer!==null&&(clearTimeout(this.botsUpdateTimer),this.botsUpdateTimer=null),this.nationsUpdateTimer!==null&&(clearTimeout(this.nationsUpdateTimer),this.nationsUpdateTimer=null),this.selectedPresetName=``,this.selectedMap=O.World,this.selectedDifficulty=o.Easy,this.nations=0,this.defaultNationCount=0,this.gameMode=P.FFA,this.teamCount=2,this.bots=400,this.spawnImmunity=!1,this.spawnImmunityDurationMinutes=void 0,this.infiniteGold=!1,this.donateGold=!1,this.infiniteTroops=!1,this.donateTroops=!1,this.maxTimer=!1,this.maxTimerValue=void 0,this.winThreshold=!1,this.winThresholdValue=void 0,this.winThresholdLoadedFor=null,this.playerLimit=!1,this.playerLimitValue=void 0,this.playerLimitLoadedFor=null,this.startDelayValue=3,this.instantBuild=!1,this.randomSpawn=!1,this.compactMap=!1,this.useRandomMap=!1,this.disabledUnits=[],this.lobbyId=``,this.clients=[],this.lobbyCreatorClientID=``,this.goldMultiplier=!1,this.goldMultiplierValue=void 0,this.startingGold=!1,this.startingGoldValue=void 0,this.customAlliances=!1,this.customAllianceMinutes=void 0,this.doomsdayClock=!1,this.doomsdayClockSpeed=`normal`,this.overtime=!1,this.overtimeStartMinutes=void 0,this.anonymizeNames=!1,this.nameReveals=[],this.whitelistEnabled=!1,this.allowedPublicIds=``,this.waterNukes=!1,this.hostCheatsEnabled=!1,this.hostCheatInfiniteGold=!1,this.hostCheatInfiniteTroops=!1,this.hostCheatGoldMultiplier=!1,this.hostCheatGoldMultiplierValue=void 0,this.hostCheatStartingGold=!1,this.hostCheatStartingGoldValue=void 0,this.publiclyListed=!1,this.showSubscriptionRequired=!1,this.showListLobbyDialog=!1,this.queued=!1,this.queueRequestInFlight=!1,this.showQueueConfirm=!1,this.insufficientInfo=null,this.autoStartAt=null}async handleSelectRandomMap(){this.useRandomMap=!0,this.selectedMap=W(),await this.loadNationCount(),this.putGameConfig()}async handleMapSelection(e){this.selectedMap=e,this.useRandomMap=!1,await this.loadNationCount(),this.putGameConfig()}async handleDifficultySelection(e){this.selectedDifficulty=e,this.putGameConfig()}markPlayerLimitSettled(){this.playerLimitLoadedFor=this.lobbyId}seatedPlayerCount(){return this.clients.filter(e=>e.spectator!==!0).length}async handleGameModeSelection(e){this.gameMode=e,this.gameMode===P.Team?(this.donateGold=!0,this.donateTroops=!0):(this.donateGold=!1,this.donateTroops=!1),this.putGameConfig()}async handleTeamCountSelection(e){this.teamCount=e,this.putGameConfig()}async handlePublicListingToggle(e,t){this.listingRequestInFlight=!0;let n=this.publiclyListed;this.publiclyListed=e;let r=await w(this.lobbyId,e,t);r.ok?(this.publiclyListed=r.listed,!n&&r.listed&&t?.maxPlayers!==void 0&&(this.playerLimit=!0,this.playerLimitValue=t.maxPlayers)):(this.publiclyListed=!e,this.showListingError(r.error)),this.listingRequestInFlight=!1}showListingError(e){let t=`private_lobby.listing_failed`;e===`subscription_required`?t=`private_lobby.listing_requires_subscription`:e===`listing_limit_reached`?t=`private_lobby.listing_limit_reached`:e===`listing_whitelist_enabled`?t=`private_lobby.listing_whitelist_enabled`:e===`listing_host_cheats_enabled`?t=`private_lobby.listing_host_cheats_enabled`:e===`listing_full`?t=`private_lobby.listing_full`:e===`listing_max_players_too_low`?t=`private_lobby.listing_max_players_too_low`:e===`listing_max_players_too_high`&&(t=`private_lobby.listing_max_players_too_high`),s(p(t),`red`,3e3)}parseAllowedPublicIds(){let e=this.allowedPublicIds.split(/[\s,]+/).map(e=>e.trim()).filter(e=>e.length>0).slice(0,200);return e.length>0?e:void 0}exportPresetConfig(){return{gameMap:this.selectedMap,useRandomMap:this.useRandomMap,compactMap:this.compactMap,difficulty:this.selectedDifficulty,gameMode:this.gameMode,teamCount:this.teamCount,bots:this.bots,nations:V(this.nations,this.defaultNationCount),infiniteGold:this.infiniteGold,donateGold:this.donateGold,infiniteTroops:this.infiniteTroops,donateTroops:this.donateTroops,instantBuild:this.instantBuild,randomSpawn:this.randomSpawn,maxTimer:this.maxTimer,maxTimerValue:this.maxTimerValue,disabledUnits:[...this.disabledUnits],goldMultiplier:this.goldMultiplier,goldMultiplierValue:this.goldMultiplierValue,startingGold:this.startingGold,startingGoldValue:this.startingGoldValue,customAlliances:this.customAlliances,customAllianceMinutes:this.customAllianceMinutes,waterNukes:this.waterNukes,doomsdayClock:this.doomsdayClock,doomsdayClockSpeed:this.doomsdayClockSpeed,overtime:this.overtime,overtimeStartMinutes:this.overtimeStartMinutes,spawnImmunity:this.spawnImmunity,spawnImmunityDurationMinutes:this.spawnImmunityDurationMinutes,playerLimit:this.playerLimit,playerLimitValue:this.playerLimitValue,startDelayValue:this.startDelayValue,anonymizeNames:this.anonymizeNames,whitelistEnabled:this.whitelistEnabled,allowedPublicIds:this.allowedPublicIds,hostCheatsEnabled:this.hostCheatsEnabled,hostCheatInfiniteGold:this.hostCheatInfiniteGold,hostCheatInfiniteTroops:this.hostCheatInfiniteTroops,hostCheatGoldMultiplier:this.hostCheatGoldMultiplier,hostCheatGoldMultiplierValue:this.hostCheatGoldMultiplierValue,hostCheatStartingGold:this.hostCheatStartingGold,hostCheatStartingGoldValue:this.hostCheatStartingGoldValue}}async importPresetConfig(e){this.useRandomMap=e.useRandomMap??!1,this.selectedMap=this.useRandomMap?W():e.gameMap,this.compactMap=e.compactMap??!1,this.selectedDifficulty=e.difficulty,this.gameMode=e.gameMode,this.teamCount=e.teamCount,this.bots=e.bots;let t=e.gameMode===P.Team;this.infiniteGold=e.infiniteGold??!1,this.donateGold=e.donateGold??t,this.infiniteTroops=e.infiniteTroops??!1,this.donateTroops=e.donateTroops??t,this.instantBuild=e.instantBuild??!1,this.randomSpawn=e.randomSpawn??!1,this.maxTimer=e.maxTimer??!1,this.maxTimerValue=e.maxTimerValue,this.disabledUnits=e.disabledUnits?[...e.disabledUnits]:[],this.goldMultiplier=e.goldMultiplier??!1,this.goldMultiplierValue=e.goldMultiplierValue,this.startingGold=e.startingGold??!1,this.startingGoldValue=e.startingGoldValue,this.customAlliances=e.customAlliances??!1,this.customAllianceMinutes=e.customAllianceMinutes,this.waterNukes=e.waterNukes??!1,this.doomsdayClock=e.doomsdayClock??!1,this.doomsdayClockSpeed=e.doomsdayClockSpeed??`normal`,this.overtime=e.overtime??!1,this.overtimeStartMinutes=e.overtimeStartMinutes,e.spawnImmunity!==void 0&&(this.spawnImmunity=e.spawnImmunity),e.spawnImmunityDurationMinutes!==void 0&&(this.spawnImmunityDurationMinutes=e.spawnImmunityDurationMinutes),e.playerLimit!==void 0&&(this.playerLimit=e.playerLimit,this.markPlayerLimitSettled()),e.playerLimitValue!==void 0&&(this.playerLimitValue=e.playerLimitValue),e.startDelayValue!==void 0&&(this.startDelayValue=e.startDelayValue),e.anonymizeNames!==void 0&&(this.anonymizeNames=e.anonymizeNames),e.whitelistEnabled!==void 0&&(this.whitelistEnabled=e.whitelistEnabled),e.allowedPublicIds!==void 0&&(this.allowedPublicIds=e.allowedPublicIds),e.hostCheatsEnabled!==void 0&&(this.hostCheatsEnabled=e.hostCheatsEnabled),e.hostCheatInfiniteGold!==void 0&&(this.hostCheatInfiniteGold=e.hostCheatInfiniteGold),e.hostCheatInfiniteTroops!==void 0&&(this.hostCheatInfiniteTroops=e.hostCheatInfiniteTroops),e.hostCheatGoldMultiplier!==void 0&&(this.hostCheatGoldMultiplier=e.hostCheatGoldMultiplier),e.hostCheatGoldMultiplierValue!==void 0&&(this.hostCheatGoldMultiplierValue=e.hostCheatGoldMultiplierValue),e.hostCheatStartingGold!==void 0&&(this.hostCheatStartingGold=e.hostCheatStartingGold),e.hostCheatStartingGoldValue!==void 0&&(this.hostCheatStartingGoldValue=e.hostCheatStartingGoldValue),await this.loadNationCount(),e.nations!==void 0&&(this.nations=R(e.nations,this.defaultNationCount)),await this.putGameConfig()}async putGameConfig(){let e=this.spawnImmunityDurationMinutes?this.spawnImmunityDurationMinutes*60*10:0,t=await this.constructUrl();this.updateLobbyHistory(t),this.dispatchEvent(new CustomEvent(`update-game-config`,{detail:{config:{gameMap:this.selectedMap,gameMapSize:this.compactMap?u.Compact:u.Normal,difficulty:this.selectedDifficulty,bots:this.bots,infiniteGold:this.infiniteGold,donateGold:this.donateGold,infiniteTroops:this.infiniteTroops,donateTroops:this.donateTroops,instantBuild:this.instantBuild,randomSpawn:this.randomSpawn,gameMode:this.gameMode,disabledUnits:this.disabledUnits,spawnImmunityDuration:this.spawnImmunity?e:null,playerTeams:this.teamCount,nations:V(this.nations,this.defaultNationCount),maxTimerValue:this.maxTimer===!0?this.maxTimerValue:null,winThresholdTenths:this.winThreshold===!0&&this.winThresholdValue!==void 0?Math.round(this.winThresholdValue*10):this.winThresholdLoadedFor===this.lobbyId?null:void 0,maxPlayers:this.playerLimit===!0&&this.playerLimitValue!==void 0?this.playerLimitValue:this.playerLimitLoadedFor===this.lobbyId?null:void 0,startDelay:this.startDelayValue,goldMultiplier:this.goldMultiplier===!0?this.goldMultiplierValue:null,startingGold:this.startingGold===!0&&this.startingGoldValue!==void 0?Math.round(this.startingGoldValue*1e6):null,customAllianceDuration:this.customAlliances?this.customAllianceMinutes??0:null,doomsdayClock:this.doomsdayClock?{enabled:!0,speed:this.doomsdayClockSpeed}:{enabled:!1},overtime:this.overtime?{enabled:!0,startMinutes:this.overtimeStartMinutes??30}:{enabled:!1},anonymizeNames:this.anonymizeNames,nameReveals:this.nameReveals,allowedPublicIds:this.whitelistEnabled?this.parseAllowedPublicIds()??[]:[],waterNukes:this.waterNukes?!0:null,hostCheats:this.hostCheatsEnabled?{infiniteGold:this.hostCheatInfiniteGold||void 0,infiniteTroops:this.hostCheatInfiniteTroops||void 0,goldMultiplier:this.hostCheatGoldMultiplier===!0?this.hostCheatGoldMultiplierValue:null,startingGold:this.hostCheatStartingGold===!0&&this.hostCheatStartingGoldValue!==void 0?Math.round(this.hostCheatStartingGoldValue*1e6):null}:void 0}},bubbles:!0,composed:!0}))}toggleNameReveal(e){this.nameReveals=this.nameReveals.includes(e)?this.nameReveals.filter(t=>t!==e):[...this.nameReveals,e],this.putGameConfig()}async toggleGameStartTimer(){await this.putGameConfig(),console.log(`Starting private game with map: ${O[this.selectedMap]} ${this.useRandomMap?` (Randomly selected)`:``}`),this.leaveLobbyOnClose=!1,this.dispatchEvent(new CustomEvent(`toggle_game_start_timer`,{bubbles:!0,composed:!0}))}kickPlayer(e){this.dispatchEvent(new CustomEvent(`kick-player`,{detail:{target:e},bubbles:!0,composed:!0}))}async loadNationCount(){let e=this.selectedMap;try{let t=await this.mapLoader.getMapData(e).manifest();this.selectedMap===e&&(this.defaultNationCount=t.nations.length,this.nations=this.compactMap?Math.max(0,Math.floor(t.nations.length*.25)):t.nations.length)}catch(e){console.warn(`Failed to load nation count`,e)}}};g([k()],$.prototype,`selectedMap`,void 0),g([k()],$.prototype,`selectedDifficulty`,void 0),g([k()],$.prototype,`nations`,void 0),g([k()],$.prototype,`defaultNationCount`,void 0),g([k()],$.prototype,`gameMode`,void 0),g([k()],$.prototype,`teamCount`,void 0),g([k()],$.prototype,`lobbyPresets`,void 0),g([k()],$.prototype,`selectedPresetName`,void 0),g([k()],$.prototype,`bots`,void 0),g([k()],$.prototype,`spawnImmunity`,void 0),g([k()],$.prototype,`spawnImmunityDurationMinutes`,void 0),g([k()],$.prototype,`infiniteGold`,void 0),g([k()],$.prototype,`donateGold`,void 0),g([k()],$.prototype,`infiniteTroops`,void 0),g([k()],$.prototype,`donateTroops`,void 0),g([k()],$.prototype,`maxTimer`,void 0),g([k()],$.prototype,`maxTimerValue`,void 0),g([k()],$.prototype,`winThreshold`,void 0),g([k()],$.prototype,`winThresholdValue`,void 0),g([k()],$.prototype,`playerLimit`,void 0),g([k()],$.prototype,`playerLimitValue`,void 0),g([k()],$.prototype,`startDelayValue`,void 0),g([k()],$.prototype,`instantBuild`,void 0),g([k()],$.prototype,`randomSpawn`,void 0),g([k()],$.prototype,`compactMap`,void 0),g([k()],$.prototype,`goldMultiplier`,void 0),g([k()],$.prototype,`goldMultiplierValue`,void 0),g([k()],$.prototype,`startingGold`,void 0),g([k()],$.prototype,`startingGoldValue`,void 0),g([k()],$.prototype,`customAlliances`,void 0),g([k()],$.prototype,`customAllianceMinutes`,void 0),g([k()],$.prototype,`doomsdayClock`,void 0),g([k()],$.prototype,`doomsdayClockSpeed`,void 0),g([k()],$.prototype,`overtime`,void 0),g([k()],$.prototype,`overtimeStartMinutes`,void 0),g([k()],$.prototype,`anonymizeNames`,void 0),g([k()],$.prototype,`nameReveals`,void 0),g([k()],$.prototype,`whitelistEnabled`,void 0),g([k()],$.prototype,`allowedPublicIds`,void 0),g([k()],$.prototype,`waterNukes`,void 0),g([k()],$.prototype,`lobbyId`,void 0),g([k()],$.prototype,`lobbyUrlSuffix`,void 0),g([k()],$.prototype,`clients`,void 0),g([k()],$.prototype,`useRandomMap`,void 0),g([k()],$.prototype,`disabledUnits`,void 0),g([k()],$.prototype,`hostCheatsEnabled`,void 0),g([k()],$.prototype,`hostCheatInfiniteGold`,void 0),g([k()],$.prototype,`hostCheatInfiniteTroops`,void 0),g([k()],$.prototype,`hostCheatGoldMultiplier`,void 0),g([k()],$.prototype,`hostCheatGoldMultiplierValue`,void 0),g([k()],$.prototype,`hostCheatStartingGold`,void 0),g([k()],$.prototype,`hostCheatStartingGoldValue`,void 0),g([k()],$.prototype,`lobbyCreatorClientID`,void 0),g([k()],$.prototype,`lobbyStartAt`,void 0),g([k()],$.prototype,`serverTimeOffset`,void 0),g([k()],$.prototype,`canListPublicly`,void 0),g([k()],$.prototype,`publiclyListed`,void 0),g([k()],$.prototype,`showSubscriptionRequired`,void 0),g([k()],$.prototype,`showListLobbyDialog`,void 0),g([k()],$.prototype,`autoStartAt`,void 0),g([k()],$.prototype,`queued`,void 0),g([k()],$.prototype,`queuePriceHard`,void 0),g([k()],$.prototype,`queueRequestInFlight`,void 0),g([k()],$.prototype,`showQueueConfirm`,void 0),g([k()],$.prototype,`insufficientInfo`,void 0),g([v({attribute:!1})],$.prototype,`eventBus`,void 0),$=g([E(`host-lobby-modal`)],$);export{$ as HostLobbyModal};