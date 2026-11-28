import{$i as e,Dn as t,Gn as n,Jn as r,Kn as i,Li as a,Ni as o,On as s,Ti as c,Un as ee,Vs as te,Wn as ne,Wr as re,Xn as ie,Yn as ae,Ys as l,_i as u,bn as oe,di as se,jn as d,kn as f,li as p,mi as m,oo as ce,qi as le,si as h,so as ue,tc as g,to as _,yi as v,yn as de,zs as y}from"./index-BHQpe8wU.js";import{t as b}from"./StyledSelect-Br8lpVdq.js";import{t as x}from"./repeat-DuAfc1u0.js";var S=[`ffa`,`teams`,`hvn`],C=[`public`,`hosted`],w=[y,g,l],T=[`2`,`3`,`4`,`5`,`6`,`7`,`8`],fe=[...w,...T],E={modes:[],sources:[],teamConfigs:[],hideEmpty:!1,minJoined:null,maxJoined:null,minCapacity:null,maxCapacity:null,minTeamSize:null,maxTeamSize:null},pe={[y]:2,[g]:3,[l]:4};function me(e){let t=e.gameConfig,n=t?.maxPlayers??null,r=t?.playerTeams,i=e.publicGameType===`hosted`?`hosted`:`public`,a=e.numClients??0;if(t?.gameMode!==te.Team)return{mode:`ffa`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};if(r===`Humans Vs Nations`)return{mode:`hvn`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};let o=null,s=null,c=null;if(typeof r==`number`)o=String(r),s=r,c=n!==null&&r>0?Math.floor(n/r):null;else if(typeof r==`string`){let e=pe[r];e!==void 0&&(o=r,c=e,s=n===null?null:Math.floor(n/e))}return{mode:`teams`,source:i,joined:a,capacity:n,teamConfig:o,teamCount:s,teamSize:c}}function D(e){return e?Object.values(e).flat().filter(e=>e!==void 0):[]}function O(e,t,n){return t===null&&n===null?!0:!(e===null||t!==null&&e<t||n!==null&&e>n)}function he(e,t){let n=me(e);return!(t.modes.length>0&&!t.modes.includes(n.mode)||t.sources.length>0&&!t.sources.includes(n.source)||t.teamConfigs.length>0&&(n.teamConfig===null||!t.teamConfigs.includes(n.teamConfig))||t.hideEmpty&&n.joined===0||!O(n.joined,t.minJoined,t.maxJoined)||!O(n.capacity,t.minCapacity,t.maxCapacity)||!O(n.teamSize,t.minTeamSize,t.maxTeamSize))}function ge(e,t){return e.startsAt===void 0&&t.startsAt===void 0?0:e.startsAt===void 0?1:t.startsAt===void 0?-1:e.startsAt-t.startsAt}function _e(e,t){return e.filter(e=>he(e,t)).sort(ge)}function k(e){let t=_.currentPlayerId();return t===null?e:`${e}:${t}`}function A(){if(_.currentPlayerId()===null)return;let e=k(j);if(localStorage.getItem(e)!==null)return;let t=localStorage.getItem(j);if(t===null)return;let n=localStorage.getItem(M),r=k(M);try{localStorage.setItem(e,t),n!==null&&localStorage.setItem(r,n)}catch(t){throw localStorage.removeItem(e),n!==null&&localStorage.removeItem(r),t}localStorage.removeItem(j),n!==null&&localStorage.removeItem(M)}var j=`detailed-view-filter-profiles`,M=`detailed-view-default-filter-profile`,ve=32;function N(e,t){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`))].filter(e=>t.includes(e)).sort((e,n)=>t.indexOf(e)-t.indexOf(n)):[]}function P(e){if(typeof e!=`number`||!Number.isFinite(e))return null;let t=Math.floor(e);return t<0?null:t}function F(e){if(typeof e!=`object`||!e)return{...E};let t=e;return{modes:N(t.modes,S),sources:N(t.sources,C),teamConfigs:N(t.teamConfigs,fe),hideEmpty:t.hideEmpty===!0,minJoined:P(t.minJoined),maxJoined:P(t.maxJoined),minCapacity:P(t.minCapacity),maxCapacity:P(t.maxCapacity),minTeamSize:P(t.minTeamSize),maxTeamSize:P(t.maxTeamSize)}}function I(){return Object.create(null)}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(){let e;try{A();let t=localStorage.getItem(k(j));if(t===null)return I();e=JSON.parse(t)}catch(e){return console.warn(`Failed to read saved lobby filter profiles`,e),I()}if(typeof e!=`object`||!e||Array.isArray(e))return I();let t=I();for(let[n,r]of Object.entries(e))t[n]=F(r);return t}function z(e){try{localStorage.setItem(k(j),JSON.stringify(e))}catch(e){console.warn(`Failed to save lobby filter profiles`,e)}}function ye(e,t){let n=e.trim().slice(0,ve),r=R();return n===``||!L(r,n)&&Object.keys(r).length>=20?r:(r[n]=F(t),z(r),r)}function be(e){let t=R();return L(t,e)?(delete t[e],z(t),B()===e&&H(``),t):t}function B(){try{return A(),localStorage.getItem(k(`detailed-view-default-filter-profile`))??``}catch(e){return console.warn(`Failed to read default lobby filter profile`,e),``}}function V(e){let t=B();return L(e,t)?t:``}function H(e){try{e===``?localStorage.removeItem(k(M)):localStorage.setItem(k(M),e)}catch(e){console.warn(`Failed to save default lobby filter profile`,e)}}var U=[`ffa`,`team`,`special`],W=6,G=`all`,K=`h-40`,xe=220,Se=`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors`,Ce=`bg-malibu-blue text-white border-malibu-blue`,we=`bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white`,q=`block text-sm font-bold uppercase tracking-widest text-white`,J=`block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5`,Y=`px-2 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs focus:outline-none focus:border-malibu-blue`,X=`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors`,Z=class extends oe{constructor(){super(),this.routerName=`detailed-view`,this.lobbies=null,this.filters={...E},this.showFilters=!1,this.profiles={},this.selectedProfile=``,this.defaultProfile=``,this.profileName=``,this.desktopUpdateState=null,this.viewerTrusted=!1,this.viewerSignedIn=!1,this.showTrustRequired=!1,this.desktopSessionState=null,this.serverTimeOffset=0,this.countdownTimer=null,this.lobbySocket=new d(e=>{this.lobbies=e,this.serverTimeOffset=c(e.serverTime);for(let t of D(e.games))i.ensure(t.gameConfig?.gameMap,()=>this.requestUpdate())}),this.appliedForAccount=void 0,this.onDesktopUpdateState=e=>{this.desktopUpdateState=e.detail},this.onUserMe=e=>{this.applyUserMe(e.detail)},this.onDesktopSessionState=e=>{this.desktopSessionState=e.detail},this.slotTops=new Map,this.id=`page-detailed-view`,this.activeTab=G}modalConfig(){return{tabs:[...U.map(t=>({key:t,label:e(`detailed_view.pane_${t}`)})),{key:G,label:e(`detailed_view.tab_all`)}]}}loadAccountProfiles(){this.profiles=R(),this.defaultProfile=V(this.profiles);let e=_.currentPlayerId();this.appliedForAccount!==e&&(this.appliedForAccount=e,this.filters={...E},this.selectedProfile=``,this.profileName=``,this.applyProfile(this.defaultProfile))}onOpen(){this.loadAccountProfiles(),this.lobbySocket.start(),this.countdownTimer??=window.setInterval(()=>this.requestUpdate(),1e3)}onClose(){this.lobbySocket.stop(),this.lobbies=null,this.countdownTimer!==null&&(clearInterval(this.countdownTimer),this.countdownTimer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.addEventListener(`userMeResponse`,this.onUserMe);let e=f();e!==null&&this.applyUserMe(e.response),ue()&&(this.desktopUpdateState=ce(),this.desktopSessionState=re()),document.addEventListener(`desktop-session-state`,this.onDesktopSessionState)}disconnectedCallback(){document.removeEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(`desktop-session-state`,this.onDesktopSessionState),this.onClose(),super.disconnectedCallback()}applyUserMe(e){this.viewerSignedIn=ae(e),this.viewerTrusted=ie(e),this.loadAccountProfiles(),v.isOnGamePortal()&&v.getUserProfile().then(e=>{e!==null&&(this.viewerSignedIn=!0)})}slotElements(){return Array.from(this.querySelectorAll(`[data-lobby-slot]`))}willUpdate(e){super.willUpdate(e),this.slotTops=new Map(this.slotElements().map(e=>[e.dataset.lobbySlot??``,e.getBoundingClientRect().top]))}updated(){if(!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)for(let e of this.slotElements()){let t=this.slotTops.get(e.dataset.lobbySlot??``);if(t===void 0)continue;let n=t-e.getBoundingClientRect().top;Math.abs(n)<1||(e.style.transition=`none`,e.style.transform=`translateY(${n}px)`,requestAnimationFrame(()=>{e.style.transition=`transform ${xe}ms ease-out`,e.style.transform=``}))}}createRenderRoot(){return this}renderHeaderSlot(){let t=this.activeFilterCount();return de({title:e(`detailed_view.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`),rightContent:u`<o-button
        variant=${this.showFilters?`primary`:`secondary`}
        size="sm"
        title=${t>0?e(`detailed_view.filters_with_count`,{count:t}):e(`detailed_view.filters`)}
        @click=${()=>this.showFilters=!this.showFilters}
      ></o-button>`})}renderBody(t){if(this.lobbies===null)return this.renderLoadingSpinner();let n=D(this.lobbies.games),i=_e(n,this.filters),a=(e,t)=>e.filter(e=>e.publicGameType===t);return u`
      <div class="custom-scrollbar p-4 lg:p-6 flex flex-col gap-4">
        ${this.showTrustRequired?r(this.viewerSignedIn,()=>this.showTrustRequired=!1):m}
        ${this.showFilters?this.renderFilterPanel():m}
        ${i.length===0?u`<p class="py-12 text-center text-sm text-white/50">
                ${e(`detailed_view.no_lobbies`)}
              </p>`:t===G?u`
                  <!-- One pane per scheduled bucket, cards stacked within it. -->
                  <div
                    class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start"
                  >
                    ${U.map(t=>this.renderPane(e(`detailed_view.pane_${t}`),a(i,t),a(n,t).length))}
                  </div>
                  ${this.renderHostedPane(a(i,`hosted`))}
                `:this.renderTypeTab(a(i,t),a(n,t).length)}
      </div>
    `}renderTypeTab(t,n){let r=Math.max(0,W-n);return t.length===0&&r===0?u`<p class="py-12 text-center text-sm text-white/50">
        ${e(`detailed_view.pane_empty`)}
      </p>`:u`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${this.renderSlots(t,r)}
      </div>
    `}paneHeading(t,n){return e(`detailed_view.pane_heading`,{name:t,count:n})}renderPane(t,n,r){let i=Math.max(0,W-r);return u`
      <section class="flex flex-col gap-2 min-w-0">
        <h3 class="${q}">
          ${this.paneHeading(t,n.length)}
        </h3>
        <div class="flex flex-col gap-4">
          ${n.length===0&&i===0?u`<p
                  class="py-6 text-center text-xs text-white/30 rounded-xl border border-dashed border-white/10"
                >
                  ${e(`detailed_view.pane_empty`)}
                </p>`:m}
          ${this.renderSlots(n,i)}
        </div>
      </section>
    `}renderSlots(e,t){return u`
      ${x(e,e=>e.gameID,e=>u`<div class="${K}" data-lobby-slot=${e.gameID}>
            ${this.renderCard(e)}
          </div>`)}
      ${Array.from({length:t},()=>this.renderSpawningSlot())}
    `}renderSpawningSlot(){return u`
      <div
        class="${K} flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-white/10"
      >
        <span
          class="w-8 h-8 border-[3px] border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        ></span>
        <span class="text-xs uppercase tracking-widest text-white/50">
          ${e(`detailed_view.spawning`)}
        </span>
      </div>
    `}renderHostedPane(t){return t.length===0?m:u`
      <section class="flex flex-col gap-2">
        <h3 class="${q}">
          ${this.paneHeading(e(`detailed_view.pane_hosted`),t.length)}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderSlots(t,0)}
        </div>
      </section>
    `}renderCard(e){let t=e.gameConfig;if(!t)return m;let r=e.startsAt??e.autoStartAt;return n({lobby:e,subtitle:o(t),timeDisplay:this.timeDisplay(e,r),timeDisplayUppercase:r===void 0,heightClass:`h-full`,blocked:s(this.desktopUpdateState,this.desktopSessionState),viewerTrusted:this.viewerTrusted,onClick:()=>this.join(e)})}timeDisplay(t,n){if(n===void 0)return t.publicGameType===`hosted`?e(`public_lobby.waiting_for_players`):e(`detailed_view.queue_position`,{position:((this.lobbies?.games[t.publicGameType]?.filter(e=>e.startsAt===void 0))?.findIndex(e=>e.gameID===t.gameID)??-1)+1});let r=a(n,this.serverTimeOffset);return r>0?le(r):e(`public_lobby.starting_game`)}renderFilterPanel(){return u`
      <div
        class="flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(e(`detailed_view.mode`),S.map(t=>({value:t,label:e(`detailed_view.mode_${t}`),active:this.filters.modes.includes(t)})),e=>this.patchFilters({modes:Q(this.filters.modes,e)}))}
          ${this.renderChipGroup(e(`detailed_view.source`),C.map(t=>({value:t,label:e(`detailed_view.source_${t}`),active:this.filters.sources.includes(t)})),e=>this.patchFilters({sources:Q(this.filters.sources,e)}))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(e(`detailed_view.per_team`),w.map(t=>({value:t,label:e(`detailed_view.layout_${t.toLowerCase()}`),active:this.filters.teamConfigs.includes(t)})),e=>this.toggleTeamConfig(e))}
          ${this.renderChipGroup(e(`detailed_view.team_count`),T.map(e=>({value:e,label:e,active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderRange(e(`detailed_view.joined_players`),`minJoined`,`maxJoined`)}
          ${this.renderRange(e(`detailed_view.capacity`),`minCapacity`,`maxCapacity`)}
          ${this.renderRange(e(`detailed_view.team_size`),`minTeamSize`,`maxTeamSize`)}
        </div>

        <div class="flex items-center justify-between gap-3 flex-wrap">
          <label
            class="flex items-center gap-2 text-xs text-white/70 cursor-pointer"
          >
            <input
              type="checkbox"
              class="w-4 h-4 accent-malibu-blue"
              .checked=${this.filters.hideEmpty}
              @change=${e=>this.patchFilters({hideEmpty:e.target.checked})}
            />
            ${e(`detailed_view.hide_empty`)}
          </label>
          <button @click=${()=>this.resetFilters()} class="${X}">
            ${e(`detailed_view.reset`)}
          </button>
        </div>

        ${this.renderProfiles()}
      </div>
    `}renderChipGroup(e,t,n){return u`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex flex-wrap gap-1.5">
          ${t.map(e=>u`<button
                @click=${()=>n(e.value)}
                aria-pressed=${e.active?`true`:`false`}
                class="${Se} ${e.active?Ce:we}"
              >
                ${e.label}
              </button>`)}
        </div>
      </div>
    `}renderRange(t,n,r){return u`
      <div>
        <span class="${J}">${t}</span>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${t} ${e(`detailed_view.min`)}"
            placeholder=${e(`detailed_view.min`)}
            .value=${$(this.filters[n])}
            @change=${e=>this.setBound(n,e)}
          />
          <span class="text-xs text-white/30">–</span>
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${t} ${e(`detailed_view.max`)}"
            placeholder=${e(`detailed_view.max`)}
            .value=${$(this.filters[r])}
            @change=${e=>this.setBound(r,e)}
          />
        </div>
      </div>
    `}renderProfiles(){let t=Object.keys(this.profiles).sort((e,t)=>e.localeCompare(t));return u`
      <div class="pt-3 border-t border-white/10">
        <span class="${J}"
          >${e(`detailed_view.profiles`)}</span
        >
        <div class="flex flex-wrap items-center gap-2">
          ${b({options:[{value:``,label:e(`detailed_view.no_profile`)},...t.map(e=>({value:e,label:e}))],value:this.selectedProfile,onChange:e=>this.applyProfile(e),ariaLabel:e(`detailed_view.profiles`),className:`flex-1 min-w-[8rem]`})}
          <input
            type="text"
            maxlength="32"
            class="${Y} flex-1 min-w-[8rem]"
            placeholder=${e(`detailed_view.profile_name`)}
            aria-label=${e(`detailed_view.profile_name`)}
            .value=${this.profileName}
            @input=${e=>this.profileName=e.target.value}
          />
          <button @click=${()=>this.saveProfile()} class="${X}">
            ${e(`detailed_view.save_profile`)}
          </button>
          <button
            @click=${()=>this.deleteProfile()}
            ?disabled=${this.selectedProfile===``}
            class="${X} ${this.selectedProfile===``?`opacity-40 cursor-not-allowed`:``}"
          >
            ${e(`detailed_view.delete_profile`)}
          </button>
        </div>
        <span class="${J} mt-3"
          >${e(`detailed_view.default_profile`)}</span
        >
        ${b({options:[{value:``,label:e(`detailed_view.no_default_profile`)},...t.map(e=>({value:e,label:e}))],value:this.defaultProfile,onChange:e=>this.setDefaultProfile(e),ariaLabel:e(`detailed_view.default_profile`),className:`w-full sm:w-1/2`})}
      </div>
    `}activeFilterCount(){let e=this.filters,t=[e.minJoined,e.maxJoined,e.minCapacity,e.maxCapacity,e.minTeamSize,e.maxTeamSize];return+(e.modes.length>0)+ +(e.sources.length>0)+ +(e.teamConfigs.length>0)+ +!!e.hideEmpty+t.filter(e=>e!==null).length}toggleTeamConfig(e){this.patchFilters({teamConfigs:Q(this.filters.teamConfigs,e)})}patchFilters(e){this.filters={...this.filters,...e}}setBound(e,t){let n=t.target.value.trim();if(n===``){this.patchFilters({[e]:null});return}let r=Number(n);this.patchFilters({[e]:Number.isFinite(r)&&r>=0?Math.floor(r):null})}resetFilters(){this.filters={...E},this.selectedProfile=``}applyProfile(e){if(this.selectedProfile=e,e===``)return;let t=L(this.profiles,e)?this.profiles[e]:void 0;t&&(this.filters={...t},this.profileName=e)}saveProfile(){let e=this.profileName.trim();e!==``&&(this.profiles=ye(e,this.filters),this.selectedProfile=L(this.profiles,e)?e:this.selectedProfile)}deleteProfile(){this.selectedProfile!==``&&(this.profiles=be(this.selectedProfile),this.selectedProfile=``,this.defaultProfile=V(this.profiles))}setDefaultProfile(e){H(e),this.defaultProfile=V(this.profiles)}canPlay(){let e=document.querySelector(`username-input`);return e?e.canPlay():!0}blockedFromLobbyJoin(){return s(this.desktopUpdateState,this.desktopSessionState)?(t(!1),!0):!1}join(e){if(this.canPlay()&&!this.blockedFromLobbyJoin()){if(!ne(e,this.viewerTrusted)){this.showTrustRequired=!0;return}if(this.close(),e.publicGameType===`hosted`){ee(`join-lobby-modal`,()=>document.querySelector(`join-lobby-modal`)?.open({lobbyId:e.gameID}));return}this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e.gameID,source:`public`,publicLobbyInfo:e},bubbles:!0,composed:!0,cancelable:!0}))}}};h([p()],Z.prototype,`lobbies`,void 0),h([p()],Z.prototype,`filters`,void 0),h([p()],Z.prototype,`showFilters`,void 0),h([p()],Z.prototype,`profiles`,void 0),h([p()],Z.prototype,`selectedProfile`,void 0),h([p()],Z.prototype,`defaultProfile`,void 0),h([p()],Z.prototype,`profileName`,void 0),h([p()],Z.prototype,`desktopUpdateState`,void 0),h([p()],Z.prototype,`viewerTrusted`,void 0),h([p()],Z.prototype,`viewerSignedIn`,void 0),h([p()],Z.prototype,`showTrustRequired`,void 0),h([p()],Z.prototype,`desktopSessionState`,void 0),Z=h([se(`detailed-view-modal`)],Z);function Q(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function $(e){return e===null?``:String(e)}export{Z as DetailedGameViewModal};