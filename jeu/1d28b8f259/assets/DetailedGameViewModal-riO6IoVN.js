import{Br as e,Dn as t,En as n,Fs as r,Gs as i,Hn as a,Jn as o,Kn as s,Ls as ee,Ni as c,Tn as te,Ui as ne,Un as re,Vn as ie,Wn as ae,Yi as l,Za as u,Zs as d,_n as oe,ai as f,hi as p,ki as m,kn as se,no as ce,pi as h,qn as le,ri as g,ro as ue,si as de,ui as _,vn as fe,xi as pe}from"./index-C4scEURh.js";import{t as v}from"./StyledSelect-Bo6ADAw1.js";import{t as y}from"./repeat-DbvlDUcB.js";var b=[`ffa`,`teams`,`hvn`],x=[`public`,`hosted`],S=[r,d,i],C=[`2`,`3`,`4`,`5`,`6`,`7`,`8`],me=[...S,...C],w={modes:[],sources:[],teamConfigs:[],hideEmpty:!1,minJoined:null,maxJoined:null,minCapacity:null,maxCapacity:null,minTeamSize:null,maxTeamSize:null},he={[r]:2,[d]:3,[i]:4};function T(e){let t=e.gameConfig,n=t?.maxPlayers??null,r=t?.playerTeams,i=e.publicGameType===`hosted`?`hosted`:`public`,a=e.numClients??0;if(t?.gameMode!==ee.Team)return{mode:`ffa`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};if(r===`Humans Vs Nations`)return{mode:`hvn`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};let o=null,s=null,c=null;if(typeof r==`number`)o=String(r),s=r,c=n!==null&&r>0?Math.floor(n/r):null;else if(typeof r==`string`){let e=he[r];e!==void 0&&(o=r,c=e,s=n===null?null:Math.floor(n/e))}return{mode:`teams`,source:i,joined:a,capacity:n,teamConfig:o,teamCount:s,teamSize:c}}function E(e){return e?Object.values(e).flat().filter(e=>e!==void 0):[]}function D(e,t,n){return t===null&&n===null?!0:!(e===null||t!==null&&e<t||n!==null&&e>n)}function ge(e,t){let n=T(e);return!(t.modes.length>0&&!t.modes.includes(n.mode)||t.sources.length>0&&!t.sources.includes(n.source)||t.teamConfigs.length>0&&(n.teamConfig===null||!t.teamConfigs.includes(n.teamConfig))||t.hideEmpty&&n.joined===0||!D(n.joined,t.minJoined,t.maxJoined)||!D(n.capacity,t.minCapacity,t.maxCapacity)||!D(n.teamSize,t.minTeamSize,t.maxTeamSize))}function _e(e,t){return e.startsAt===void 0&&t.startsAt===void 0?0:e.startsAt===void 0?1:t.startsAt===void 0?-1:e.startsAt-t.startsAt}function ve(e,t){return e.filter(e=>ge(e,t)).sort(_e)}function O(e){let t=u.currentPlayerId();return t===null?e:`${e}:${t}`}function k(){if(u.currentPlayerId()===null)return;let e=O(A);if(localStorage.getItem(e)!==null)return;let t=localStorage.getItem(A);if(t===null)return;let n=localStorage.getItem(j),r=O(j);try{localStorage.setItem(e,t),n!==null&&localStorage.setItem(r,n)}catch(t){throw localStorage.removeItem(e),n!==null&&localStorage.removeItem(r),t}localStorage.removeItem(A),n!==null&&localStorage.removeItem(j)}var A=`detailed-view-filter-profiles`,j=`detailed-view-default-filter-profile`,M=32;function N(e,t){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`))].filter(e=>t.includes(e)).sort((e,n)=>t.indexOf(e)-t.indexOf(n)):[]}function P(e){if(typeof e!=`number`||!Number.isFinite(e))return null;let t=Math.floor(e);return t<0?null:t}function F(e){if(typeof e!=`object`||!e)return{...w};let t=e;return{modes:N(t.modes,b),sources:N(t.sources,x),teamConfigs:N(t.teamConfigs,me),hideEmpty:t.hideEmpty===!0,minJoined:P(t.minJoined),maxJoined:P(t.maxJoined),minCapacity:P(t.minCapacity),maxCapacity:P(t.maxCapacity),minTeamSize:P(t.minTeamSize),maxTeamSize:P(t.maxTeamSize)}}function I(){return Object.create(null)}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(){let e;try{k();let t=localStorage.getItem(O(A));if(t===null)return I();e=JSON.parse(t)}catch(e){return console.warn(`Failed to read saved lobby filter profiles`,e),I()}if(typeof e!=`object`||!e||Array.isArray(e))return I();let t=I();for(let[n,r]of Object.entries(e))t[n]=F(r);return t}function z(e){try{localStorage.setItem(O(A),JSON.stringify(e))}catch(e){console.warn(`Failed to save lobby filter profiles`,e)}}function ye(e,t){let n=e.trim().slice(0,M),r=R();return n===``||!L(r,n)&&Object.keys(r).length>=20?r:(r[n]=F(t),z(r),r)}function be(e){let t=R();return L(t,e)?(delete t[e],z(t),B()===e&&H(``),t):t}function B(){try{return k(),localStorage.getItem(O(`detailed-view-default-filter-profile`))??``}catch(e){return console.warn(`Failed to read default lobby filter profile`,e),``}}function V(e){let t=B();return L(e,t)?t:``}function H(e){try{e===``?localStorage.removeItem(O(j)):localStorage.setItem(O(j),e)}catch(e){console.warn(`Failed to save default lobby filter profile`,e)}}var U=[`ffa`,`team`,`special`],W=6,G=`all`,K=`h-40`,xe=220,Se=`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors`,Ce=`bg-malibu-blue text-white border-malibu-blue`,we=`bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white`,q=`block text-sm font-bold uppercase tracking-widest text-white`,J=`block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5`,Y=`px-2 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs focus:outline-none focus:border-malibu-blue`,X=`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors`,Z=class extends fe{constructor(){super(),this.routerName=`detailed-view`,this.lobbies=null,this.filters={...w},this.showFilters=!1,this.profiles={},this.selectedProfile=``,this.defaultProfile=``,this.profileName=``,this.desktopUpdateState=null,this.viewerTrusted=!1,this.viewerSignedIn=!1,this.showTrustRequired=!1,this.desktopSessionState=null,this.serverTimeOffset=0,this.countdownTimer=null,this.lobbySocket=new se(e=>{this.lobbies=e,this.serverTimeOffset=pe(e.serverTime);for(let t of E(e.games))ae.ensure(t.gameConfig?.gameMap,()=>this.requestUpdate())}),this.appliedForAccount=void 0,this.onDesktopUpdateState=e=>{this.desktopUpdateState=e.detail},this.onUserMe=e=>{this.applyUserMe(e.detail)},this.onDesktopSessionState=e=>{this.desktopSessionState=e.detail},this.slotTops=new Map,this.id=`page-detailed-view`,this.activeTab=G}modalConfig(){return{tabs:[...U.map(e=>({key:e,label:l(`detailed_view.pane_${e}`)})),{key:G,label:l(`detailed_view.tab_all`)}]}}loadAccountProfiles(){this.profiles=R(),this.defaultProfile=V(this.profiles);let e=u.currentPlayerId();this.appliedForAccount!==e&&(this.appliedForAccount=e,this.filters={...w},this.selectedProfile=``,this.profileName=``,this.applyProfile(this.defaultProfile))}onOpen(){this.loadAccountProfiles(),this.lobbySocket.start(),this.countdownTimer??=window.setInterval(()=>this.requestUpdate(),1e3)}onClose(){this.lobbySocket.stop(),this.lobbies=null,this.countdownTimer!==null&&(clearInterval(this.countdownTimer),this.countdownTimer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.addEventListener(`userMeResponse`,this.onUserMe);let n=t();n!==null&&this.applyUserMe(n.response),ue()&&(this.desktopUpdateState=ce(),this.desktopSessionState=e()),document.addEventListener(`desktop-session-state`,this.onDesktopSessionState)}disconnectedCallback(){document.removeEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(`desktop-session-state`,this.onDesktopSessionState),this.onClose(),super.disconnectedCallback()}applyUserMe(e){this.viewerSignedIn=le(e),this.viewerTrusted=o(e),this.loadAccountProfiles(),p.isOnGamePortal()&&p.getUserProfile().then(e=>{e!==null&&(this.viewerSignedIn=!0)})}slotElements(){return Array.from(this.querySelectorAll(`[data-lobby-slot]`))}willUpdate(e){super.willUpdate(e),this.slotTops=new Map(this.slotElements().map(e=>[e.dataset.lobbySlot??``,e.getBoundingClientRect().top]))}updated(){if(!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)for(let e of this.slotElements()){let t=this.slotTops.get(e.dataset.lobbySlot??``);if(t===void 0)continue;let n=t-e.getBoundingClientRect().top;Math.abs(n)<1||(e.style.transition=`none`,e.style.transform=`translateY(${n}px)`,requestAnimationFrame(()=>{e.style.transition=`transform ${xe}ms ease-out`,e.style.transform=``}))}}createRenderRoot(){return this}renderHeaderSlot(){let e=this.activeFilterCount();return oe({title:l(`detailed_view.title`),onBack:()=>this.close(),ariaLabel:l(`common.back`),rightContent:h`<o-button
        variant=${this.showFilters?`primary`:`secondary`}
        size="sm"
        title=${e>0?l(`detailed_view.filters_with_count`,{count:e}):l(`detailed_view.filters`)}
        @click=${()=>this.showFilters=!this.showFilters}
      ></o-button>`})}renderBody(e){if(this.lobbies===null)return this.renderLoadingSpinner();let t=E(this.lobbies.games),n=ve(t,this.filters),r=(e,t)=>e.filter(e=>e.publicGameType===t);return h`
      <div class="custom-scrollbar p-4 lg:p-6 flex flex-col gap-4">
        ${this.showTrustRequired?s(this.viewerSignedIn,()=>this.showTrustRequired=!1):_}
        ${this.showFilters?this.renderFilterPanel():_}
        ${n.length===0?h`<p class="py-12 text-center text-sm text-white/50">
                ${l(`detailed_view.no_lobbies`)}
              </p>`:e===G?h`
                  <!-- One pane per scheduled bucket, cards stacked within it. -->
                  <div
                    class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start"
                  >
                    ${U.map(e=>this.renderPane(l(`detailed_view.pane_${e}`),r(n,e),r(t,e).length))}
                  </div>
                  ${this.renderHostedPane(r(n,`hosted`))}
                `:this.renderTypeTab(r(n,e),r(t,e).length)}
      </div>
    `}renderTypeTab(e,t){let n=Math.max(0,W-t);return e.length===0&&n===0?h`<p class="py-12 text-center text-sm text-white/50">
        ${l(`detailed_view.pane_empty`)}
      </p>`:h`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${this.renderSlots(e,n)}
      </div>
    `}paneHeading(e,t){return l(`detailed_view.pane_heading`,{name:e,count:t})}renderPane(e,t,n){let r=Math.max(0,W-n);return h`
      <section class="flex flex-col gap-2 min-w-0">
        <h3 class="${q}">
          ${this.paneHeading(e,t.length)}
        </h3>
        <div class="flex flex-col gap-4">
          ${t.length===0&&r===0?h`<p
                  class="py-6 text-center text-xs text-white/30 rounded-xl border border-dashed border-white/10"
                >
                  ${l(`detailed_view.pane_empty`)}
                </p>`:_}
          ${this.renderSlots(t,r)}
        </div>
      </section>
    `}renderSlots(e,t){return h`
      ${y(e,e=>e.gameID,e=>h`<div class="${K}" data-lobby-slot=${e.gameID}>
            ${this.renderCard(e)}
          </div>`)}
      ${Array.from({length:t},()=>this.renderSpawningSlot())}
    `}renderSpawningSlot(){return h`
      <div
        class="${K} flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-white/10"
      >
        <span
          class="w-8 h-8 border-[3px] border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        ></span>
        <span class="text-xs uppercase tracking-widest text-white/50">
          ${l(`detailed_view.spawning`)}
        </span>
      </div>
    `}renderHostedPane(e){return e.length===0?_:h`
      <section class="flex flex-col gap-2">
        <h3 class="${q}">
          ${this.paneHeading(l(`detailed_view.pane_hosted`),e.length)}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderSlots(e,0)}
        </div>
      </section>
    `}renderCard(e){let t=e.gameConfig;if(!t)return _;let r=e.startsAt??e.autoStartAt;return re({lobby:e,subtitle:m(t),timeDisplay:this.timeDisplay(e,r),timeDisplayUppercase:r===void 0,heightClass:`h-full`,blocked:n(this.desktopUpdateState,this.desktopSessionState),viewerTrusted:this.viewerTrusted,onClick:()=>this.join(e)})}timeDisplay(e,t){if(t===void 0)return e.publicGameType===`hosted`?l(`public_lobby.waiting_for_players`):l(`detailed_view.queue_position`,{position:((this.lobbies?.games[e.publicGameType]?.filter(e=>e.startsAt===void 0))?.findIndex(t=>t.gameID===e.gameID)??-1)+1});let n=c(t,this.serverTimeOffset);return n>0?ne(n):l(`public_lobby.starting_game`)}renderFilterPanel(){return h`
      <div
        class="flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(l(`detailed_view.mode`),b.map(e=>({value:e,label:l(`detailed_view.mode_${e}`),active:this.filters.modes.includes(e)})),e=>this.patchFilters({modes:Q(this.filters.modes,e)}))}
          ${this.renderChipGroup(l(`detailed_view.source`),x.map(e=>({value:e,label:l(`detailed_view.source_${e}`),active:this.filters.sources.includes(e)})),e=>this.patchFilters({sources:Q(this.filters.sources,e)}))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(l(`detailed_view.per_team`),S.map(e=>({value:e,label:l(`detailed_view.layout_${e.toLowerCase()}`),active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
          ${this.renderChipGroup(l(`detailed_view.team_count`),C.map(e=>({value:e,label:e,active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderRange(l(`detailed_view.joined_players`),`minJoined`,`maxJoined`)}
          ${this.renderRange(l(`detailed_view.capacity`),`minCapacity`,`maxCapacity`)}
          ${this.renderRange(l(`detailed_view.team_size`),`minTeamSize`,`maxTeamSize`)}
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
            ${l(`detailed_view.hide_empty`)}
          </label>
          <button @click=${()=>this.resetFilters()} class="${X}">
            ${l(`detailed_view.reset`)}
          </button>
        </div>

        ${this.renderProfiles()}
      </div>
    `}renderChipGroup(e,t,n){return h`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex flex-wrap gap-1.5">
          ${t.map(e=>h`<button
                @click=${()=>n(e.value)}
                aria-pressed=${e.active?`true`:`false`}
                class="${Se} ${e.active?Ce:we}"
              >
                ${e.label}
              </button>`)}
        </div>
      </div>
    `}renderRange(e,t,n){return h`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${l(`detailed_view.min`)}"
            placeholder=${l(`detailed_view.min`)}
            .value=${$(this.filters[t])}
            @change=${e=>this.setBound(t,e)}
          />
          <span class="text-xs text-white/30">–</span>
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${l(`detailed_view.max`)}"
            placeholder=${l(`detailed_view.max`)}
            .value=${$(this.filters[n])}
            @change=${e=>this.setBound(n,e)}
          />
        </div>
      </div>
    `}renderProfiles(){let e=Object.keys(this.profiles).sort((e,t)=>e.localeCompare(t));return h`
      <div class="pt-3 border-t border-white/10">
        <span class="${J}"
          >${l(`detailed_view.profiles`)}</span
        >
        <div class="flex flex-wrap items-center gap-2">
          ${v({options:[{value:``,label:l(`detailed_view.no_profile`)},...e.map(e=>({value:e,label:e}))],value:this.selectedProfile,onChange:e=>this.applyProfile(e),ariaLabel:l(`detailed_view.profiles`),className:`flex-1 min-w-[8rem]`})}
          <input
            type="text"
            maxlength="32"
            class="${Y} flex-1 min-w-[8rem]"
            placeholder=${l(`detailed_view.profile_name`)}
            aria-label=${l(`detailed_view.profile_name`)}
            .value=${this.profileName}
            @input=${e=>this.profileName=e.target.value}
          />
          <button @click=${()=>this.saveProfile()} class="${X}">
            ${l(`detailed_view.save_profile`)}
          </button>
          <button
            @click=${()=>this.deleteProfile()}
            ?disabled=${this.selectedProfile===``}
            class="${X} ${this.selectedProfile===``?`opacity-40 cursor-not-allowed`:``}"
          >
            ${l(`detailed_view.delete_profile`)}
          </button>
        </div>
        <span class="${J} mt-3"
          >${l(`detailed_view.default_profile`)}</span
        >
        ${v({options:[{value:``,label:l(`detailed_view.no_default_profile`)},...e.map(e=>({value:e,label:e}))],value:this.defaultProfile,onChange:e=>this.setDefaultProfile(e),ariaLabel:l(`detailed_view.default_profile`),className:`w-full sm:w-1/2`})}
      </div>
    `}activeFilterCount(){let e=this.filters,t=[e.minJoined,e.maxJoined,e.minCapacity,e.maxCapacity,e.minTeamSize,e.maxTeamSize];return+(e.modes.length>0)+ +(e.sources.length>0)+ +(e.teamConfigs.length>0)+ +!!e.hideEmpty+t.filter(e=>e!==null).length}toggleTeamConfig(e){this.patchFilters({teamConfigs:Q(this.filters.teamConfigs,e)})}patchFilters(e){this.filters={...this.filters,...e}}setBound(e,t){let n=t.target.value.trim();if(n===``){this.patchFilters({[e]:null});return}let r=Number(n);this.patchFilters({[e]:Number.isFinite(r)&&r>=0?Math.floor(r):null})}resetFilters(){this.filters={...w},this.selectedProfile=``}applyProfile(e){if(this.selectedProfile=e,e===``)return;let t=L(this.profiles,e)?this.profiles[e]:void 0;t&&(this.filters={...t},this.profileName=e)}saveProfile(){let e=this.profileName.trim();e!==``&&(this.profiles=ye(e,this.filters),this.selectedProfile=L(this.profiles,e)?e:this.selectedProfile)}deleteProfile(){this.selectedProfile!==``&&(this.profiles=be(this.selectedProfile),this.selectedProfile=``,this.defaultProfile=V(this.profiles))}setDefaultProfile(e){H(e),this.defaultProfile=V(this.profiles)}canPlay(){let e=document.querySelector(`username-input`);return e?e.canPlay():!0}blockedFromLobbyJoin(){return n(this.desktopUpdateState,this.desktopSessionState)?(te(!1),!0):!1}join(e){if(this.canPlay()&&!this.blockedFromLobbyJoin()){if(!a(e,this.viewerTrusted)){this.showTrustRequired=!0;return}if(this.close(),e.publicGameType===`hosted`){ie(`join-lobby-modal`,()=>document.querySelector(`join-lobby-modal`)?.open({lobbyId:e.gameID}));return}this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e.gameID,source:`public`,publicLobbyInfo:e},bubbles:!0,composed:!0}))}}};g([f()],Z.prototype,`lobbies`,void 0),g([f()],Z.prototype,`filters`,void 0),g([f()],Z.prototype,`showFilters`,void 0),g([f()],Z.prototype,`profiles`,void 0),g([f()],Z.prototype,`selectedProfile`,void 0),g([f()],Z.prototype,`defaultProfile`,void 0),g([f()],Z.prototype,`profileName`,void 0),g([f()],Z.prototype,`desktopUpdateState`,void 0),g([f()],Z.prototype,`viewerTrusted`,void 0),g([f()],Z.prototype,`viewerSignedIn`,void 0),g([f()],Z.prototype,`showTrustRequired`,void 0),g([f()],Z.prototype,`desktopSessionState`,void 0),Z=g([de(`detailed-view-modal`)],Z);function Q(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function $(e){return e===null?``:String(e)}export{Z as DetailedGameViewModal};