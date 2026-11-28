import{$n as e,An as t,Ci as n,Cn as r,Jn as i,Jr as a,Kn as o,Ks as ee,Li as s,Mn as c,Pn as te,Qn as ne,Sn as re,Vi as ie,Ws as l,Yn as ae,Zi as oe,Zn as se,ao as u,di as d,do as ce,ec as f,hi as le,jn as p,ki as ue,oc as m,pi as h,qn as de,ra as g,uo as fe,vi as _,xi as v}from"./index-hx7tETuk.js";import{t as y}from"./StyledSelect-CCcc3KU9.js";import{t as pe}from"./repeat-Cdz7c-a4.js";var b=[`ffa`,`teams`,`hvn`],x=[`public`,`hosted`],S=[l,m,f],C=[`2`,`3`,`4`,`5`,`6`,`7`,`8`],me=[...S,...C],w={modes:[],sources:[],teamConfigs:[],hideEmpty:!1,minJoined:null,maxJoined:null,minCapacity:null,maxCapacity:null,minTeamSize:null,maxTeamSize:null},T={[l]:2,[m]:3,[f]:4};function he(e){let t=e.gameConfig,n=t?.maxPlayers??null,r=t?.playerTeams,i=e.publicGameType===`hosted`?`hosted`:`public`,a=e.numClients??0;if(t?.gameMode!==ee.Team)return{mode:`ffa`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};if(r===`Humans Vs Nations`)return{mode:`hvn`,source:i,joined:a,capacity:n,teamConfig:null,teamCount:null,teamSize:null};let o=null,s=null,c=null;if(typeof r==`number`)o=String(r),s=r,c=n!==null&&r>0?Math.floor(n/r):null;else if(typeof r==`string`){let e=T[r];e!==void 0&&(o=r,c=e,s=n===null?null:Math.floor(n/e))}return{mode:`teams`,source:i,joined:a,capacity:n,teamConfig:o,teamCount:s,teamSize:c}}function E(e){return e?Object.values(e).flat().filter(e=>e!==void 0):[]}function D(e,t,n){return t===null&&n===null?!0:!(e===null||t!==null&&e<t||n!==null&&e>n)}function ge(e,t){let n=he(e);return!(t.modes.length>0&&!t.modes.includes(n.mode)||t.sources.length>0&&!t.sources.includes(n.source)||t.teamConfigs.length>0&&(n.teamConfig===null||!t.teamConfigs.includes(n.teamConfig))||t.hideEmpty&&n.joined===0||!D(n.joined,t.minJoined,t.maxJoined)||!D(n.capacity,t.minCapacity,t.maxCapacity)||!D(n.teamSize,t.minTeamSize,t.maxTeamSize))}function _e(e,t){return e.startsAt===void 0&&t.startsAt===void 0?0:e.startsAt===void 0?1:t.startsAt===void 0?-1:e.startsAt-t.startsAt}function ve(e,t){return e.filter(e=>ge(e,t)).sort(_e)}function O(e){let t=u.currentPlayerId();return t===null?e:`${e}:${t}`}function k(){if(u.currentPlayerId()===null)return;let e=O(A);if(localStorage.getItem(e)!==null)return;let t=localStorage.getItem(A);if(t===null)return;let n=localStorage.getItem(j),r=O(j);try{localStorage.setItem(e,t),n!==null&&localStorage.setItem(r,n)}catch(t){throw localStorage.removeItem(e),n!==null&&localStorage.removeItem(r),t}localStorage.removeItem(A),n!==null&&localStorage.removeItem(j)}var A=`detailed-view-filter-profiles`,j=`detailed-view-default-filter-profile`,ye=32;function M(e,t){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`))].filter(e=>t.includes(e)).sort((e,n)=>t.indexOf(e)-t.indexOf(n)):[]}function N(e){if(typeof e!=`number`||!Number.isFinite(e))return null;let t=Math.floor(e);return t<0?null:t}function P(e){if(typeof e!=`object`||!e)return{...w};let t=e;return{modes:M(t.modes,b),sources:M(t.sources,x),teamConfigs:M(t.teamConfigs,me),hideEmpty:t.hideEmpty===!0,minJoined:N(t.minJoined),maxJoined:N(t.maxJoined),minCapacity:N(t.minCapacity),maxCapacity:N(t.maxCapacity),minTeamSize:N(t.minTeamSize),maxTeamSize:N(t.maxTeamSize)}}function F(){return Object.create(null)}function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(){let e;try{k();let t=localStorage.getItem(O(A));if(t===null)return F();e=JSON.parse(t)}catch(e){return console.warn(`Failed to read saved lobby filter profiles`,e),F()}if(typeof e!=`object`||!e||Array.isArray(e))return F();let t=F();for(let[n,r]of Object.entries(e))t[n]=P(r);return t}function R(e){try{localStorage.setItem(O(A),JSON.stringify(e))}catch(e){console.warn(`Failed to save lobby filter profiles`,e)}}function be(e,t){let n=e.trim().slice(0,ye),r=L();return n===``||!I(r,n)&&Object.keys(r).length>=20?r:(r[n]=P(t),R(r),r)}function xe(e){let t=L();return I(t,e)?(delete t[e],R(t),z()===e&&V(``),t):t}function z(){try{return k(),localStorage.getItem(O(`detailed-view-default-filter-profile`))??``}catch(e){return console.warn(`Failed to read default lobby filter profile`,e),``}}function B(e){let t=z();return I(e,t)?t:``}function V(e){try{e===``?localStorage.removeItem(O(j)):localStorage.setItem(O(j),e)}catch(e){console.warn(`Failed to save default lobby filter profile`,e)}}var H=[`ffa`,`team`,`special`],U=6,W=`all`,G=`h-40`,K=220,Se=`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors`,Ce=`bg-malibu-blue text-white border-malibu-blue`,we=`bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white`,q=`block text-sm font-bold uppercase tracking-widest text-white`,J=`block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5`,Y=`px-2 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs focus:outline-none focus:border-malibu-blue`,X=`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors`,Z=class extends r{constructor(){super(),this.routerName=`detailed-view`,this.lobbies=null,this.filters={...w},this.showFilters=!1,this.profiles={},this.selectedProfile=``,this.defaultProfile=``,this.profileName=``,this.desktopUpdateState=null,this.viewerTrusted=!1,this.viewerSignedIn=!1,this.showTrustRequired=!1,this.desktopSessionState=null,this.serverTimeOffset=0,this.countdownTimer=null,this.lobbySocket=new te(e=>{this.lobbies=e,this.serverTimeOffset=ue(e.serverTime);for(let t of E(e.games))ae.ensure(t.gameConfig?.gameMap,()=>this.requestUpdate())}),this.appliedForAccount=void 0,this.onDesktopUpdateState=e=>{this.desktopUpdateState=e.detail},this.onUserMe=e=>{this.applyUserMe(e.detail)},this.onDesktopSessionState=e=>{this.desktopSessionState=e.detail},this.slotTops=new Map,this.id=`page-detailed-view`,this.activeTab=W}modalConfig(){return{tabs:[...H.map(e=>({key:e,label:g(`detailed_view.pane_${e}`)})),{key:W,label:g(`detailed_view.tab_all`)}]}}loadAccountProfiles(){this.profiles=L(),this.defaultProfile=B(this.profiles);let e=u.currentPlayerId();this.appliedForAccount!==e&&(this.appliedForAccount=e,this.filters={...w},this.selectedProfile=``,this.profileName=``,this.applyProfile(this.defaultProfile))}onOpen(){this.loadAccountProfiles(),this.lobbySocket.start(),this.countdownTimer??=window.setInterval(()=>this.requestUpdate(),1e3)}onClose(){this.lobbySocket.stop(),this.lobbies=null,this.countdownTimer!==null&&(clearInterval(this.countdownTimer),this.countdownTimer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.addEventListener(`userMeResponse`,this.onUserMe);let e=c();e!==null&&this.applyUserMe(e.response),ce()&&(this.desktopUpdateState=fe(),this.desktopSessionState=a()),document.addEventListener(`desktop-session-state`,this.onDesktopSessionState)}disconnectedCallback(){document.removeEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(`desktop-session-state`,this.onDesktopSessionState),this.onClose(),super.disconnectedCallback()}applyUserMe(t){this.viewerSignedIn=ne(t),this.viewerTrusted=e(t),this.loadAccountProfiles(),n.isOnGamePortal()&&n.getUserProfile().then(e=>{e!==null&&(this.viewerSignedIn=!0)})}slotElements(){return Array.from(this.querySelectorAll(`[data-lobby-slot]`))}willUpdate(e){super.willUpdate(e),this.slotTops=new Map(this.slotElements().map(e=>[e.dataset.lobbySlot??``,e.getBoundingClientRect().top]))}updated(){if(!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)for(let e of this.slotElements()){let t=this.slotTops.get(e.dataset.lobbySlot??``);if(t===void 0)continue;let n=t-e.getBoundingClientRect().top;Math.abs(n)<1||(e.style.transition=`none`,e.style.transform=`translateY(${n}px)`,requestAnimationFrame(()=>{e.style.transition=`transform ${K}ms ease-out`,e.style.transform=``}))}}createRenderRoot(){return this}renderHeaderSlot(){let e=this.activeFilterCount();return re({title:g(`detailed_view.title`),onBack:()=>this.close(),ariaLabel:g(`common.back`),rightContent:v`<o-button
        variant=${this.showFilters?`primary`:`secondary`}
        size="sm"
        title=${e>0?g(`detailed_view.filters_with_count`,{count:e}):g(`detailed_view.filters`)}
        @click=${()=>this.showFilters=!this.showFilters}
      ></o-button>`})}renderBody(e){if(this.lobbies===null)return this.renderLoadingSpinner();let t=E(this.lobbies.games),n=ve(t,this.filters),r=(e,t)=>e.filter(e=>e.publicGameType===t);return v`
      <div class="custom-scrollbar p-4 lg:p-6 flex flex-col gap-4">
        ${this.showTrustRequired?se(this.viewerSignedIn,()=>this.showTrustRequired=!1):_}
        ${this.showFilters?this.renderFilterPanel():_}
        ${n.length===0?v`<p class="py-12 text-center text-sm text-white/50">
                ${g(`detailed_view.no_lobbies`)}
              </p>`:e===W?v`
                  <!-- One pane per scheduled bucket, cards stacked within it. -->
                  <div
                    class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start"
                  >
                    ${H.map(e=>this.renderPane(g(`detailed_view.pane_${e}`),r(n,e),r(t,e).length))}
                  </div>
                  ${this.renderHostedPane(r(n,`hosted`))}
                `:this.renderTypeTab(r(n,e),r(t,e).length)}
      </div>
    `}renderTypeTab(e,t){let n=Math.max(0,U-t);return e.length===0&&n===0?v`<p class="py-12 text-center text-sm text-white/50">
        ${g(`detailed_view.pane_empty`)}
      </p>`:v`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${this.renderSlots(e,n)}
      </div>
    `}paneHeading(e,t){return g(`detailed_view.pane_heading`,{name:e,count:t})}renderPane(e,t,n){let r=Math.max(0,U-n);return v`
      <section class="flex flex-col gap-2 min-w-0">
        <h3 class="${q}">
          ${this.paneHeading(e,t.length)}
        </h3>
        <div class="flex flex-col gap-4">
          ${t.length===0&&r===0?v`<p
                  class="py-6 text-center text-xs text-white/30 rounded-xl border border-dashed border-white/10"
                >
                  ${g(`detailed_view.pane_empty`)}
                </p>`:_}
          ${this.renderSlots(t,r)}
        </div>
      </section>
    `}renderSlots(e,t){return v`
      ${pe(e,e=>e.gameID,e=>v`<div class="${G}" data-lobby-slot=${e.gameID}>
            ${this.renderCard(e)}
          </div>`)}
      ${Array.from({length:t},()=>this.renderSpawningSlot())}
    `}renderSpawningSlot(){return v`
      <div
        class="${G} flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-white/10"
      >
        <span
          class="w-8 h-8 border-[3px] border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        ></span>
        <span class="text-xs uppercase tracking-widest text-white/50">
          ${g(`detailed_view.spawning`)}
        </span>
      </div>
    `}renderHostedPane(e){return e.length===0?_:v`
      <section class="flex flex-col gap-2">
        <h3 class="${q}">
          ${this.paneHeading(g(`detailed_view.pane_hosted`),e.length)}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderSlots(e,0)}
        </div>
      </section>
    `}renderCard(e){let t=e.gameConfig;if(!t)return _;let n=e.startsAt??e.autoStartAt;return i({lobby:e,subtitle:s(t),timeDisplay:this.timeDisplay(e,n),timeDisplayUppercase:n===void 0,heightClass:`h-full`,blocked:p(this.desktopUpdateState,this.desktopSessionState),viewerTrusted:this.viewerTrusted,onClick:()=>this.join(e)})}timeDisplay(e,t){if(t===void 0)return e.publicGameType===`hosted`?g(`public_lobby.waiting_for_players`):g(`detailed_view.queue_position`,{position:((this.lobbies?.games[e.publicGameType]?.filter(e=>e.startsAt===void 0))?.findIndex(t=>t.gameID===e.gameID)??-1)+1});let n=ie(t,this.serverTimeOffset);return n>0?oe(n):g(`public_lobby.starting_game`)}renderFilterPanel(){return v`
      <div
        class="flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(g(`detailed_view.mode`),b.map(e=>({value:e,label:g(`detailed_view.mode_${e}`),active:this.filters.modes.includes(e)})),e=>this.patchFilters({modes:Q(this.filters.modes,e)}))}
          ${this.renderChipGroup(g(`detailed_view.source`),x.map(e=>({value:e,label:g(`detailed_view.source_${e}`),active:this.filters.sources.includes(e)})),e=>this.patchFilters({sources:Q(this.filters.sources,e)}))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(g(`detailed_view.per_team`),S.map(e=>({value:e,label:g(`detailed_view.layout_${e.toLowerCase()}`),active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
          ${this.renderChipGroup(g(`detailed_view.team_count`),C.map(e=>({value:e,label:e,active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderRange(g(`detailed_view.joined_players`),`minJoined`,`maxJoined`)}
          ${this.renderRange(g(`detailed_view.capacity`),`minCapacity`,`maxCapacity`)}
          ${this.renderRange(g(`detailed_view.team_size`),`minTeamSize`,`maxTeamSize`)}
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
            ${g(`detailed_view.hide_empty`)}
          </label>
          <button @click=${()=>this.resetFilters()} class="${X}">
            ${g(`detailed_view.reset`)}
          </button>
        </div>

        ${this.renderProfiles()}
      </div>
    `}renderChipGroup(e,t,n){return v`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex flex-wrap gap-1.5">
          ${t.map(e=>v`<button
                @click=${()=>n(e.value)}
                aria-pressed=${e.active?`true`:`false`}
                class="${Se} ${e.active?Ce:we}"
              >
                ${e.label}
              </button>`)}
        </div>
      </div>
    `}renderRange(e,t,n){return v`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${g(`detailed_view.min`)}"
            placeholder=${g(`detailed_view.min`)}
            .value=${$(this.filters[t])}
            @change=${e=>this.setBound(t,e)}
          />
          <span class="text-xs text-white/30">–</span>
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${g(`detailed_view.max`)}"
            placeholder=${g(`detailed_view.max`)}
            .value=${$(this.filters[n])}
            @change=${e=>this.setBound(n,e)}
          />
        </div>
      </div>
    `}renderProfiles(){let e=Object.keys(this.profiles).sort((e,t)=>e.localeCompare(t));return v`
      <div class="pt-3 border-t border-white/10">
        <span class="${J}"
          >${g(`detailed_view.profiles`)}</span
        >
        <div class="flex flex-wrap items-center gap-2">
          ${y({options:[{value:``,label:g(`detailed_view.no_profile`)},...e.map(e=>({value:e,label:e}))],value:this.selectedProfile,onChange:e=>this.applyProfile(e),ariaLabel:g(`detailed_view.profiles`),className:`flex-1 min-w-[8rem]`})}
          <input
            type="text"
            maxlength="32"
            class="${Y} flex-1 min-w-[8rem]"
            placeholder=${g(`detailed_view.profile_name`)}
            aria-label=${g(`detailed_view.profile_name`)}
            .value=${this.profileName}
            @input=${e=>this.profileName=e.target.value}
          />
          <button @click=${()=>this.saveProfile()} class="${X}">
            ${g(`detailed_view.save_profile`)}
          </button>
          <button
            @click=${()=>this.deleteProfile()}
            ?disabled=${this.selectedProfile===``}
            class="${X} ${this.selectedProfile===``?`opacity-40 cursor-not-allowed`:``}"
          >
            ${g(`detailed_view.delete_profile`)}
          </button>
        </div>
        <span class="${J} mt-3"
          >${g(`detailed_view.default_profile`)}</span
        >
        ${y({options:[{value:``,label:g(`detailed_view.no_default_profile`)},...e.map(e=>({value:e,label:e}))],value:this.defaultProfile,onChange:e=>this.setDefaultProfile(e),ariaLabel:g(`detailed_view.default_profile`),className:`w-full sm:w-1/2`})}
      </div>
    `}activeFilterCount(){let e=this.filters,t=[e.minJoined,e.maxJoined,e.minCapacity,e.maxCapacity,e.minTeamSize,e.maxTeamSize];return+(e.modes.length>0)+ +(e.sources.length>0)+ +(e.teamConfigs.length>0)+ +!!e.hideEmpty+t.filter(e=>e!==null).length}toggleTeamConfig(e){this.patchFilters({teamConfigs:Q(this.filters.teamConfigs,e)})}patchFilters(e){this.filters={...this.filters,...e}}setBound(e,t){let n=t.target.value.trim();if(n===``){this.patchFilters({[e]:null});return}let r=Number(n);this.patchFilters({[e]:Number.isFinite(r)&&r>=0?Math.floor(r):null})}resetFilters(){this.filters={...w},this.selectedProfile=``}applyProfile(e){if(this.selectedProfile=e,e===``)return;let t=I(this.profiles,e)?this.profiles[e]:void 0;t&&(this.filters={...t},this.profileName=e)}saveProfile(){let e=this.profileName.trim();e!==``&&(this.profiles=be(e,this.filters),this.selectedProfile=I(this.profiles,e)?e:this.selectedProfile)}deleteProfile(){this.selectedProfile!==``&&(this.profiles=xe(this.selectedProfile),this.selectedProfile=``,this.defaultProfile=B(this.profiles))}setDefaultProfile(e){V(e),this.defaultProfile=B(this.profiles)}canPlay(){let e=document.querySelector(`username-input`);return e?e.canPlay():!0}blockedFromLobbyJoin(){return p(this.desktopUpdateState,this.desktopSessionState)?(t(!1),!0):!1}join(e){if(this.canPlay()&&!this.blockedFromLobbyJoin()){if(!de(e,this.viewerTrusted)){this.showTrustRequired=!0;return}if(this.close(),e.publicGameType===`hosted`){o(`join-lobby-modal`,()=>document.querySelector(`join-lobby-modal`)?.open({lobbyId:e.gameID}));return}this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e.gameID,source:`public`,publicLobbyInfo:e},bubbles:!0,composed:!0,cancelable:!0}))}}};d([h()],Z.prototype,`lobbies`,void 0),d([h()],Z.prototype,`filters`,void 0),d([h()],Z.prototype,`showFilters`,void 0),d([h()],Z.prototype,`profiles`,void 0),d([h()],Z.prototype,`selectedProfile`,void 0),d([h()],Z.prototype,`defaultProfile`,void 0),d([h()],Z.prototype,`profileName`,void 0),d([h()],Z.prototype,`desktopUpdateState`,void 0),d([h()],Z.prototype,`viewerTrusted`,void 0),d([h()],Z.prototype,`viewerSignedIn`,void 0),d([h()],Z.prototype,`showTrustRequired`,void 0),d([h()],Z.prototype,`desktopSessionState`,void 0),Z=d([le(`detailed-view-modal`)],Z);function Q(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function $(e){return e===null?``:String(e)}export{Z as DetailedGameViewModal};