const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PrestigeFlow-BW1k2qll.js","./index-hx7tETuk.js","./vendor-CreOc2dO.js","./rolldown-runtime-BpQH8Ho1.js","./index-D6USfwhn.css","./PlayerProfileModal-B0DLi_Nt.js","./Format-Dhp90E0J.js","./GameStatsModal-R985Ih_z.js","./ProgressionAccount-DwNKV48b.js","./CopyButton-DLJ7XbUb.js","./LeaderboardModal-CK6QzPBR.js","./LeaderboardTribeTable-C9hZH7p7.js","./OfstatsCredit-C5PEXX_5.js","./RewardClaims-Cqaev5MP.js","./CapIcon-Dm-ai8vC.js","./CosmeticPreview-D1-wZzpj.js","./PlutoniumIcon-82UaOhgZ.js","./CurrencyDisplay-BjVnYx0i.js","./ProfileShare-NSxC2e9v.js","./SignedOutNotice-AYT0IlUN.js","./MomentShare-BpRzQYG_.js","./Ceremony-ZG0SYbne.js"])))=>i.map(i=>d[i]);
import{$r as e,Ci as t,Cn as n,Do as r,H as i,Ii as ee,Kr as a,Mi as te,Na as ne,Nn as o,Oa as s,Oo as c,Sn as l,To as u,U as re,Xt as ie,Zr as ae,_ as d,ai as oe,b as se,ci as ce,co as f,di as p,do as m,ea as h,ei as g,f as _,g as v,gi as y,gr as b,h as x,hi as S,ii as le,ka as C,li as w,m as ue,mi as T,ms as E,p as de,pi as D,pr as fe,ra as O,ri as k,rn as A,ti as j,tn as M,ua as N,ui as P,v as F,vi as I,xi as L,y as R,ya as z}from"./index-hx7tETuk.js";import"./CopyButton-DLJ7XbUb.js";import"./CurrencyDisplay-BjVnYx0i.js";import"./Difficulties-CrJpsIsm.js";import"./RewardsPanel-CqQsKUJa.js";import{n as B,t as V}from"./LinkResult-Bkzxcam6.js";import"./GameStatsModal-R985Ih_z.js";import{c as pe,s as H,t as U}from"./PlayerProfileModal-B0DLi_Nt.js";var W=class extends y{constructor(...e){super(...e),this._data=null}createRenderRoot(){return this}get data(){return this._data}set data(e){this._data=e,this.requestUpdate()}get avatarUrl(){let e=this._data;return e?ee(e):null}get discordDisplayName(){return this._data?.username??``}render(){let e=`https://cdn.discordapp.com/embed/avatars/0.png`,t=this.avatarUrl??e;return L`
      <div class="flex items-center gap-2">
        ${this._data?L`
                <div class="p-[3px] rounded-full bg-gray-500">
                  <img
                    class="w-12 h-12 rounded-full block"
                    src="${t}"
                    alt="${O(`discord_user_header.avatar_alt`)}"
                    @error=${t=>{t.target.src=e}}
                  />
                </div>
              `:null}
        <span class="font-semibold text-white">${this.discordDisplayName}</span>
      </div>
    `}};p([D()],W.prototype,`_data`,void 0),p([T({attribute:!1})],W.prototype,`data`,null),W=p([S(`discord-user-header`)],W);var G=class extends y{constructor(...e){super(...e),this._data=null,this._avatarError=!1}createRenderRoot(){return this}get data(){return this._data}set data(e){this._data=e,this._avatarError=!1,this.requestUpdate()}render(){if(!this._data)return L``;let e=this._data.personaName?.trim()?this._data.personaName:O(`steam_user_header.default_name`),t=this._data.avatarUrl;return L`
      <div class="flex items-center gap-2">
        ${t&&!this._avatarError?L`
                <div class="p-[3px] rounded-full bg-gray-500">
                  <img
                    class="w-12 h-12 rounded-full block"
                    src="${t}"
                    alt="${O(`steam_user_header.avatar_alt`)}"
                    @error=${()=>{this._avatarError=!0}}
                  />
                </div>
              `:null}
        <span class="font-semibold text-white">${e}</span>
      </div>
    `}};p([D()],G.prototype,`_data`,void 0),p([D()],G.prototype,`_avatarError`,void 0),p([T({attribute:!1})],G.prototype,`data`,null),G=p([S(`steam-user-header`)],G);var K=class extends y{constructor(...e){super(...e),this.creator=void 0,this.draft=``,this.busy=!1,this.error=``,this.armed=null}createRenderRoot(){return this}willUpdate(e){if(e.has(`creator`)||e.has(`prefillCode`)){if(this.creator||this.prefillCode===void 0)this.draft=this.creator?``:this.prefillCode??``,this.error=``;else{let e=b(this.prefillCode);this.draft=e??this.prefillCode,this.error=e===null?O(`creator_code.errors.invalid`):``}this.armed=null}}cooldownEnd(){if(!this.creator)return null;let e=this.creator.canChangeAt;if(!e)return null;let t=new Date(e);return t.getTime()>Date.now()?t:null}daysUntil(e){return Math.max(1,Math.ceil((e.getTime()-Date.now())/864e5))}formatDate(e){return e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}handleInput(e){this.draft=e.target.value,this.armed=null;let t=this.draft.trim();if(t.length===0){this.error=``;return}this.error=b(t)===null?O(`creator_code.errors.invalid`):``}async handleSet(){if(this.busy||this.cooldownEnd()!==null)return;let e=b(this.draft);if(e===null){this.error=O(`creator_code.errors.invalid`);return}if(this.armed!==`set`){this.armed=`set`;return}this.armed=null,this.busy=!0;let t=await ne(e);if(t.ok){await this.refreshAfterChange(),this.busy=!1;return}this.busy=!1,this.error=this.errorMessage(t)}async handleUnsupport(){if(this.busy)return;if(this.armed!==`unsupport`){this.armed=`unsupport`;return}this.armed=null,this.busy=!0;let e=await N();if(e.ok){await this.refreshAfterChange(),this.busy=!1;return}this.busy=!1,this.error=O(e.code===`rate_limited`?`creator_code.errors.rate_limited`:`creator_code.errors.failed`)}async refreshAfterChange(){let e=await s();e!==!1&&this.dispatchEvent(new CustomEvent(`creator-changed`,{detail:{creator:e.player.creator??null},bubbles:!0,composed:!0}))}errorMessage(e){switch(e.code){case`invalid`:return O(`creator_code.errors.invalid`);case`not_found`:return O(`creator_code.errors.not_found`);case`self_referral`:return O(`creator_code.errors.self_referral`);case`rate_limited`:return O(`creator_code.errors.rate_limited`);case`cooldown`:return e.retryAfterSeconds===null?O(`creator_code.errors.cooldown`):O(`creator_code.cooldown_days`,{days:Math.max(1,Math.ceil(e.retryAfterSeconds/86400))});default:return O(`creator_code.errors.failed`)}}renderStatus(e,t){return L`
      <div class="flex flex-col gap-1">
        <div class="text-xl font-bold text-white leading-tight break-all">
          ${O(`creator_code.supporting`,{name:e.displayName,code:e.code})}
        </div>
        <div class="text-xs text-white/50">
          ${O(`creator_code.since`,{date:this.formatDate(new Date(e.sinceAt))})}
        </div>
        ${t?L`<div class="text-xs text-amber-300">
                ${O(`creator_code.cooldown_days`,{days:this.daysUntil(this.cooldownEnd())})}
              </div>`:I}
      </div>
    `}render(){if(this.creator===void 0)return I;let e=this.cooldownEnd()!==null,t=b(this.draft),n=!e&&!this.busy&&t!==null,r=this.armed===`set`,i=this.armed===`unsupport`;return L`
      <div
        class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <span
            class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
          >
            ${O(`creator_code.title`)}
          </span>
          ${this.creator?this.renderStatus(this.creator,e):I}
        </div>

        <div
          class="${this.creator?`border-t border-white/10 pt-4`:``} flex flex-col gap-2"
        >
          <label
            for="creator-code-panel-input"
            class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
          >
            ${O(`creator_code.input_label`)}
          </label>
          <input
            id="creator-code-panel-input"
            type="text"
            .value=${this.draft}
            @input=${this.handleInput}
            @keydown=${e=>{e.key===`Enter`&&n&&this.handleSet()}}
            placeholder=${O(`creator_code.input_placeholder`)}
            ?disabled=${e||this.busy}
            class="w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 transition-all font-medium hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5 ${this.error?`border-red-500/50 focus:ring-red-500/40 focus:border-red-500/50`:`border-white/10 focus:ring-malibu-blue/50 focus:border-malibu-blue/50`}"
          />
          <div class="text-sm text-red-400 min-h-[1.25rem]">${this.error}</div>
          <o-button
            variant=${r?`warning`:`primary`}
            width="block"
            size="md"
            translationKey=${r?`creator_code.confirm_lock`:this.creator?`creator_code.change`:`creator_code.support`}
            .disable=${!n}
            @click=${this.handleSet}
          ></o-button>
        </div>

        ${this.creator?L`<o-button
                variant=${i?`warning`:`danger`}
                width="block"
                size="md"
                translationKey=${i?`creator_code.confirm_unsupport`:`creator_code.unsupport`}
                .disable=${this.busy}
                @click=${this.handleUnsupport}
              ></o-button>`:I}
      </div>
    `}};p([T({attribute:!1})],K.prototype,`creator`,void 0),p([T({attribute:!1})],K.prototype,`prefillCode`,void 0),p([D()],K.prototype,`draft`,void 0),p([D()],K.prototype,`busy`,void 0),p([D()],K.prototype,`error`,void 0),p([D()],K.prototype,`armed`,void 0),K=p([S(`creator-code-panel`)],K);var q=20;function J(e){if(!/^https?:\/\//i.test(e))return e;let t;try{t=new URL(e)}catch{return e}let n=i(t.pathname);if(n!==null)return n;let r=new URLSearchParams(t.hash.replace(/^#/,``)).get(`publicID`);return r===null||r===``?e:r}var Y=class extends y{constructor(...e){super(...e),this.myPublicId=``,this.loading=!0,this.actionPending=!1,this.friends=[],this.friendsTotal=0,this.friendsPage=0,this.incoming=[],this.outgoing=[],this.addInput=``,this.requestsSeq=0,this.handleRequestsUpdated=e=>{let t=e.detail;t.seq<=this.requestsSeq||(this.requestsSeq=t.seq,this.incoming=t.incoming,this.outgoing=t.outgoing)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(_,this.handleRequestsUpdated),this.loadAll()}disconnectedCallback(){document.removeEventListener(_,this.handleRequestsUpdated),super.disconnectedCallback()}async loadAll(){this.loading=!0;try{let e=o(),t=d(),[n,r]=await Promise.all([x(),v(1,q)]);if(await this.resyncIfAccountChanged(e))return;n&&F(n,t),r&&(this.friends=r.results,this.friendsTotal=r.total,this.friendsPage=r.page)}finally{this.loading=!1}}async resyncIfAccountChanged(e){return e===o()?!1:(await this.loadAll(),!0)}async loadMore(){if(!this.actionPending){this.actionPending=!0;try{let e=await v(this.friendsPage+1,q);if(!e){h(O(`friends.load_failed`),`red`);return}this.friends=[...this.friends,...e.results],this.friendsPage=e.page,this.friendsTotal=e.total}finally{this.actionPending=!1}}}async refreshFriends(){let e=Math.max(1,this.friendsPage),t=[],n=this.friendsTotal,r=0;for(let i=1;i<=e;i++){let e=await v(i,q);if(!e)return;if(t.push(...e.results),n=e.total,r=e.page,e.results.length<q)break}this.friends=t,this.friendsTotal=n,this.friendsPage=r}async handleSend(){let e=J(this.addInput.trim()).trim().replace(/\s*#\s*/g,`.`);if(e){if(e===this.myPublicId){h(O(`friends.cannot_friend_self`),`red`);return}if(!this.actionPending){this.actionPending=!0;try{let t=await se(e);if(typeof t==`string`){h(O(this.errorKey(t)),`red`);return}if(this.addInput=``,t.status===`accepted`)h(O(`friends.request_auto_accepted`),`green`),await this.loadAll();else{h(O(`friends.request_sent`),`green`);let e=o(),t=d(),n=await x();if(await this.resyncIfAccountChanged(e))return;n&&F(n,t)}}finally{this.actionPending=!1}}}}async handleAccept(e){if(!this.actionPending){this.actionPending=!0;try{let t=o(),n=await de(e);if(await this.resyncIfAccountChanged(t))return;if(n!==!0){h(O(this.errorKey(n)),`red`);return}this.incoming=this.incoming.filter(t=>t.publicId!==e),F({incoming:this.incoming,outgoing:this.outgoing},d()),this.friends=[{publicId:e,createdAt:new Date().toISOString()},...this.friends],this.friendsTotal++,h(O(`friends.request_accepted`),`green`),await this.refreshFriends()}finally{this.actionPending=!1}}}async handleDenyOrWithdraw(e,t){if(!this.actionPending){this.actionPending=!0;try{let n=o(),r=await ue(e);if(await this.resyncIfAccountChanged(n))return;if(r!==!0){h(O(this.errorKey(r)),`red`);return}t===`incoming`?(this.incoming=this.incoming.filter(t=>t.publicId!==e),F({incoming:this.incoming,outgoing:this.outgoing},d()),h(O(`friends.request_denied`),`green`)):(this.outgoing=this.outgoing.filter(t=>t.publicId!==e),F({incoming:this.incoming,outgoing:this.outgoing},d()),h(O(`friends.request_withdrawn`),`green`))}finally{this.actionPending=!1}}}async handleRemove(e){if(!this.actionPending&&await P(O(`friends.confirm_remove`,{publicId:e}))){this.actionPending=!0;try{let t=await R(e);if(t!==!0){h(O(this.errorKey(t)),`red`);return}this.friends=this.friends.filter(t=>t.publicId!==e),this.friendsTotal=Math.max(0,this.friendsTotal-1),h(O(`friends.friend_removed`),`green`),await this.refreshFriends()}finally{this.actionPending=!1}}}errorKey(e){switch(e){case`not_found`:return`friends.error_not_found`;case`conflict`:return`friends.error_conflict`;case`bad_request`:return`friends.error_bad_request`;default:return`common.error_generic`}}formatDate(e){return new Date(e).toLocaleDateString()}render(){return this.loading?L`
        <div class="flex items-center justify-center p-12">
          <div
            class="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
          ></div>
        </div>
      `:L`
      <div class="flex flex-col gap-6">
        ${this.renderTeamInfo()} ${this.renderAddSection()}
        ${this.renderRequestsSection()} ${this.renderFriendsSection()}
      </div>
    `}renderTeamInfo(){return L`
      <div
        class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 flex items-center gap-3"
      >
        <span class="text-blue-400 text-lg shrink-0">🛡️</span>
        <p class="text-sm text-white/80">
          ${O(`friends.team_info`)}
        </p>
      </div>
    `}renderAddSection(){return L`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-blue-400">➕</span>
          ${O(`friends.add_friend`)}
        </h3>
        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            .value=${this.addInput}
            @input=${e=>this.addInput=J(e.target.value)}
            @keydown=${e=>{e.key===`Enter`&&this.handleSend()}}
            class="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-mono text-sm"
            placeholder=${O(`friends.public_id_placeholder`)}
            maxlength="200"
            ?disabled=${this.actionPending}
          />
          <button
            @click=${()=>void this.handleSend()}
            ?disabled=${this.actionPending||this.addInput.trim().length===0}
            class="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            ${O(`friends.send_request`)}
          </button>
        </div>
      </div>
    `}renderRequestsSection(){return this.incoming.length===0&&this.outgoing.length===0?``:L`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-blue-400">✉️</span>
          ${O(`friends.pending_requests`)}
        </h3>
        ${this.incoming.length>0?L`
                <div
                  class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
                >
                  ${O(`friends.incoming`)}
                </div>
                <div class="space-y-2 mb-4">
                  ${this.incoming.map(e=>this.renderRequestRow(e,`incoming`))}
                </div>
              `:``}
        ${this.outgoing.length>0?L`
                <div
                  class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
                >
                  ${O(`friends.outgoing`)}
                </div>
                <div class="space-y-2">
                  ${this.outgoing.map(e=>this.renderRequestRow(e,`outgoing`))}
                </div>
              `:``}
      </div>
    `}renderRequestRow(e,t){return L`
      <div
        class="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-3"
      >
        <div class="flex-1 min-w-0">
          ${H(this,e.username,e.publicId)}
          <div class="text-white/30 text-[10px] mt-0.5">
            ${this.formatDate(e.createdAt)}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${t===`incoming`?L`
                  <button
                    @click=${()=>void this.handleAccept(e.publicId)}
                    ?disabled=${this.actionPending}
                    class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${O(`friends.accept`)}
                  </button>
                  <button
                    @click=${()=>void this.handleDenyOrWithdraw(e.publicId,`incoming`)}
                    ?disabled=${this.actionPending}
                    class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${O(`friends.deny`)}
                  </button>
                `:L`
                  <button
                    @click=${()=>void this.handleDenyOrWithdraw(e.publicId,`outgoing`)}
                    ?disabled=${this.actionPending}
                    class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white/10 text-white/70 border border-white/10 hover:bg-white/20 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${O(`friends.withdraw`)}
                  </button>
                `}
        </div>
      </div>
    `}renderFriendsSection(){if(this.friendsTotal===0)return L`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-12 flex flex-col items-center justify-center text-center"
        >
          <div class="text-4xl mb-3">👥</div>
          <p class="text-white/60 text-sm">
            ${O(`friends.no_friends`)}
          </p>
        </div>
      `;let e=this.friends.length<this.friendsTotal;return L`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-blue-400">👥</span>
          ${O(`friends.your_friends`)}
          <span class="text-xs text-white/40 font-medium">
            (${this.friendsTotal})
          </span>
        </h3>
        <div class="space-y-2">
          ${this.friends.map(e=>L`
              <div
                class="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-3"
              >
                <div class="flex-1 min-w-0">
                  ${H(this,e.username,e.publicId)}
                  <div class="text-white/30 text-[10px] mt-0.5">
                    ${O(`friends.friends_since`,{date:this.formatDate(e.createdAt)})}
                  </div>
                </div>
                <button
                  @click=${()=>void this.handleRemove(e.publicId)}
                  ?disabled=${this.actionPending}
                  class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none shrink-0"
                >
                  ${O(`friends.remove`)}
                </button>
              </div>
            `)}
        </div>
        ${e?L`
                <div class="flex justify-center mt-4">
                  <button
                    @click=${()=>void this.loadMore()}
                    ?disabled=${this.actionPending}
                    class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/10 text-white/80 border border-white/10 hover:bg-white/20 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${O(`friends.load_more`)}
                  </button>
                </div>
              `:``}
      </div>
    `}};p([T({type:String})],Y.prototype,`myPublicId`,void 0),p([D()],Y.prototype,`loading`,void 0),p([D()],Y.prototype,`actionPending`,void 0),p([D()],Y.prototype,`friends`,void 0),p([D()],Y.prototype,`friendsTotal`,void 0),p([D()],Y.prototype,`friendsPage`,void 0),p([D()],Y.prototype,`incoming`,void 0),p([D()],Y.prototype,`outgoing`,void 0),p([D()],Y.prototype,`addInput`,void 0),Y=p([S(`friends-list`)],Y);var X=e=>L`
  <svg
    class=${e}
    viewBox="0 0 91.05 91.21"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M45.45,0C21.49,0,1.87,18.47,0,41.95l24.44,10.11c2.07-1.42,4.57-2.24,7.27-2.24,.24,0,.48,0,.72,.02l10.87-15.76c0-.07,0-.15,0-.22,0-9.48,7.72-17.2,17.2-17.2s17.2,7.72,17.2,17.2-7.72,17.2-17.2,17.2c-.13,0-.26,0-.39,0l-15.5,11.06c0,.2,.01,.41,.01,.61,0,7.12-5.79,12.91-12.91,12.91-6.25,0-11.47-4.46-12.66-10.37L1.57,58.03c5.41,19.14,23,33.18,43.88,33.18,25.19,0,45.6-20.42,45.6-45.6S70.63,0,45.45,0Z"
    />
    <path
      d="M28.58,69.2l-5.6-2.31c.99,2.07,2.71,3.8,4.99,4.75,4.93,2.05,10.61-.29,12.67-5.22,.99-2.39,1-5.02,.01-7.41-.98-2.39-2.84-4.26-5.23-5.25-2.37-.99-4.91-.95-7.14-.11l5.79,2.39c3.64,1.52,5.36,5.69,3.84,9.33-1.51,3.64-5.69,5.36-9.33,3.84Z"
    />
    <path
      d="M71.96,33.85c0-6.32-5.14-11.46-11.46-11.46s-11.46,5.14-11.46,11.46,5.14,11.46,11.46,11.46,11.46-5.14,11.46-11.46Zm-20.05-.02c0-4.75,3.86-8.61,8.61-8.61s8.61,3.85,8.61,8.61-3.85,8.61-8.61,8.61-8.61-3.85-8.61-8.61Z"
    />
  </svg>
`,me=(e,t=`account_modal.link_steam`)=>L`
  <button
    @click=${e}
    class="w-full px-6 py-3 text-white bg-[#1b2838] hover:bg-[#2a475e] border border-[#66c0f4]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66c0f4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    ${X(`w-5 h-5 shrink-0`)}
    <span class="font-bold tracking-wide">${O(t)}</span>
  </button>
`,he=[`email_exists`,`deleted`,`error`,`no_account`];function ge(e){let t=typeof e?.login==`string`?e.login:void 0;if(t===void 0)return;let n=new URLSearchParams(window.location.hash.slice(1));n.delete(`login`);let r=n.toString();return history.replaceState(null,``,r?`#${r}`:window.location.pathname+window.location.search),he.includes(t)?t:void 0}var _e={email_exists:`account_modal.login_email_exists`,deleted:`account_modal.login_deleted`,error:`account_modal.login_error`,no_account:`account_modal.login_no_account`},Z=null;function Q(){return Z??=fe(()=>import(`./PrestigeFlow-BW1k2qll.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url).catch(e=>{throw Z=null,e}),Z}var ve=0,$=class extends n{constructor(){super(),this.routerName=`account`,this.email=``,this.isLoadingUser=!1,this.openCount=0,this.loadPrestigeFlow=Q,this.progression=null,this.progressionFor=null,this.progressionLoad=0,this.requestedTab=null,this.portalUser=null,this.userMeResponse=null,this.statsTree=null,this.displayClanTag=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.handleTrackRewardsChanged=e=>{this.handleRewardsChanged(e),this.refreshUserMe().then(()=>this.requestUpdate())},this.handleRewardsChanged=e=>{this.userMeResponse&&(this.userMeResponse.player.rewards=e.detail.rewards,e.detail.currency&&(this.userMeResponse.player.currency=e.detail.currency),this.requestUpdate())},this.handleCreatorChanged=e=>{this.userMeResponse&&(this.userMeResponse.player.creator=e.detail.creator,this.prefillCreatorCode=void 0,this.requestUpdate())},this.handlePrestigeRequest=async()=>{if(!this.userMeResponse?.player?.progress)return;try{await this.loadPrestigeFlow()}catch(e){console.warn(`AccountModal: prestige flow failed to load`,e),await w(O(`prestige.load_failed`));return}let e=this.userMeResponse?.player?.progress;e&&this.querySelector(`prestige-flow`)?.open(e)},this.handlePrestiged=e=>{if(!this.userMeResponse)return;let t=this.userMeResponse.player;t.progress=e.detail.progress;let n=new Set((t.rewards??[]).map(e=>e.id)),r=e.detail.rewards.filter(e=>!n.has(e.id));r.length>0&&(t.rewards=[...t.rewards??[],...r]),this.dropProgression(),this.requestUpdate(),this.refreshUserMe()},this.handlePrestigeStale=async()=>{await w(await this.refreshUserMe()===!1?O(`prestige.stale_failed`):O(`prestige.stale`))},this.handleLinkSteam=async()=>{await g()||await w(O(`account_modal.link_steam_failed`))},this.handleLinkGoogle=async()=>{await e()||await w(O(`account_modal.link_google_failed`))},document.addEventListener(ie,e=>{A(e).length>0&&this.rereadProgression(),this.requestUpdate()}),document.addEventListener(`userMeResponse`,e=>{this.refreshPortalUser();let t=e;if(t.detail){let e=this.userMeResponse?.player?.publicId;this.userMeResponse=t.detail,this.prefetchPrestigeFlow(),this.userMeResponse?.player?.publicId!==e&&(this.resetPlayerData(),this.requestUpdate())}else this.resetPlayerData(),this.requestUpdate()})}refreshPortalUser(){t.isOnGamePortal()&&t.getUserProfile().then(e=>{this.portalUser=e,this.requestUpdate()})}hasAnyStats(){return this.statsTree?Object.keys(this.statsTree).length>0&&Object.values(this.statsTree).some(e=>e&&Object.keys(e).length>0):!1}renderHeaderSlot(){let e=!!this.userMeResponse?.user,n=this.userMeResponse?.player?.publicId??``;return l({title:O(`account_modal.title`),onBack:()=>this.close(),ariaLabel:O(`common.back`),rightContent:e&&!this.isLoadingUser&&n&&t.name()!==`poki`?L`
              <copy-button
                class="shrink-0"
                .copyText=${re(n)}
                .displayText=${O(`player_profile.share`)}
                .showVisibilityToggle=${!1}
              ></copy-button>
            `:void 0})}isLinkedAccount(){return u(this.userMeResponse?.user)||!!this.portalUser&&this.userMeResponse!==null}modalConfig(){return this.isLoadingUser||!this.isLinkedAccount()?{}:{tabs:[{key:`account`,label:O(`account_modal.tab_account`)},{key:`stats`,label:O(`account_modal.tab_stats`)},{key:`games`,label:O(`account_modal.tab_games`)},...this.hasProgress()?[{key:`progression`,label:O(`account_modal.tab_progression`)}]:[],{key:`friends`,label:O(`account_modal.tab_friends`)}]}}hasProgress(){let e=this.userMeResponse?.player;return!!e?.publicId&&!!e.progress}renderBody(e){return this.isLoadingUser?this.renderLoadingSpinner(O(`account_modal.fetching_account`)):this.isLinkedAccount()?L`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(e)}</div>
      </div>
      <prestige-flow
        .publicId=${this.userMeResponse?.player?.publicId??``}
        @prestiged=${this.handlePrestiged}
        @prestige-stale=${this.handlePrestigeStale}
      ></prestige-flow>
    `:L`<div class="custom-scrollbar mr-1">
        ${t.isOnGamePortal()?this.renderPortalSignIn():this.renderLoginOptions()}
      </div>`}renderTab(e){switch(e){case`stats`:return this.renderStatsTab();case`games`:return this.renderGamesTab();case`progression`:return this.renderProgressionTab();case`friends`:return this.renderFriendsTab();default:return this.renderAccountTab()}}renderEmailField(){return L`
      <input
        type="email"
        .value=${this.email}
        @input=${this.handleEmailInput}
        placeholder=${O(`account_modal.email_placeholder`)}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10"
      />
      <o-button
        variant="primary"
        width="block"
        size="md"
        translationKey="account_modal.get_magic_link"
        @click=${this.handleSubmit}
      ></o-button>
    `}renderFriendsTab(){return L`<friends-list
      .myPublicId=${this.userMeResponse?.player?.publicId??``}
      @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
    ></friends-list>`}openPlayerProfile(e){document.querySelector(`player-profile-modal`)?.openFromAccount(e)}returnToFriends(){this.open({tab:`friends`})}renderAccountTab(){return this.portalUser?this.renderPortalAccount(this.portalUser):L`
      <div class="flex flex-col gap-6">
        ${this.renderProfileCard(`compact`)}
        <div class="bg-white/5 rounded-xl border border-white/10 p-6">
          <div class="flex flex-col items-center gap-4">
            <div
              class="text-xs text-white/40 uppercase tracking-widest font-bold border-b border-white/5 pb-2 px-8"
            >
              ${O(`account_modal.connected_as`)}
            </div>
            <div class="flex items-center gap-8 justify-center flex-wrap">
              <discord-user-header
                .data=${this.userMeResponse?.user?.discord??null}
              ></discord-user-header>
              ${this.userMeResponse?.user?.steam?L`<steam-user-header
                      .data=${this.userMeResponse.user.steam}
                    ></steam-user-header>`:null}
              ${this.renderLoggedInAs()}
            </div>
          </div>
        </div>
        ${this.renderRewardsPanel()} ${this.renderCreatorCodePanel()}
        ${this.renderDesktopLinkGateAction()}
      </div>
    `}renderDesktopLinkGateAction(){return f()===null?I:L`
      <o-button
        variant="secondary"
        width="block"
        size="md"
        translationKey="account_modal.link_existing_account"
        @click=${this.handleShowLinkGate}
      ></o-button>
    `}handleShowLinkGate(){f()?.showLinkGate().catch(e=>{console.error(`AccountModal: showLinkGate failed`,e)})}renderPortalAccount(e){return L`
      <div class="flex flex-col gap-6">
        ${this.renderProfileCard(`compact`)}
        <div class="bg-white/5 rounded-xl border border-white/10 p-6">
          <div class="flex flex-col items-center gap-4">
            <div
              class="text-xs text-white/40 uppercase tracking-widest font-bold border-b border-white/5 pb-2 px-8"
            >
              ${O(`account_modal.connected_as`)}
            </div>
            <div class="flex flex-col items-center gap-3">
              ${e.profilePictureUrl===null?I:L`<img
                      src=${e.profilePictureUrl}
                      alt=${e.username}
                      class="w-16 h-16 rounded-full object-cover"
                      referrerpolicy="no-referrer"
                    />`}
              <div class="text-white text-lg font-medium">${e.username}</div>
              ${this.renderCurrency()}
            </div>
          </div>
        </div>
        ${this.renderRewardsPanel()}
      </div>
    `}renderPortalSignIn(){return L`
      <div class="flex items-center justify-center p-6 min-h-full">
        <div
          class="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/50 text-sm font-medium mb-6">
            ${O(`account_modal.sign_in_desc`)}
          </p>
          <o-button
            variant="primary"
            width="block"
            size="md"
            translationKey=${t.name()===`viverse`?`account_modal.sign_in_viverse`:`main.sign_in`}
            @click=${this.handlePortalSignIn}
          ></o-button>
        </div>
      </div>
    `}renderStatsTab(){return L`
      ${this.renderProfileCard(`full`)}
      ${this.hasAnyStats()?L`<player-stats-tree-view
              .statsTree=${this.statsTree}
            ></player-stats-tree-view>`:this.renderEmptyState(`📊`,O(`account_modal.no_stats`))}
    `}renderGamesTab(){let e=this.userMeResponse?.player?.publicId??``;return e?L`
      <player-game-history-view
        .publicId=${e}
        .cachedState=${this.gameHistoryCache?.publicId===e?this.gameHistoryCache:null}
        @history-updated=${e=>{this.gameHistoryCache=e.detail}}
        @view-stats=${e=>this.openGameStats(e.detail.gameId)}
        @view-game=${e=>void this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `:this.renderEmptyState(`🎮`,O(`account_modal.no_games`))}renderProgressionTab(){let e=this.userMeResponse?.player?.publicId;if(!e||!this.hasProgress())return this.renderAccountTab();if(this.progression===null)return this.renderLoadingSpinner(O(`common.loading`));let t=M(e,this.progression);return L`<profile-progression
      .progress=${t.progress}
      .confirmedLevel=${t.confirmedLevel}
      .provisional=${t.provisional}
      .publicId=${e}
      .popKey=${`account-${this.openCount}`}
      @rewards-changed=${this.handleTrackRewardsChanged}
    ></profile-progression>`}updated(e){super.updated(e),this.ensureProgression()}ensureProgression(){if(this.activeTab!==`progression`||this.isLoadingUser||!this.isOpen()||!this.hasProgress())return;let e=this.userMeResponse.player.publicId;if(this.progressionFor===e)return;this.progressionFor=e,this.progression=null;let t=++this.progressionLoad;U(e).then(e=>{t===this.progressionLoad&&(this.progression=e??this.userMeResponse?.player?.progress??null)})}dropProgression(){this.progressionLoad++,this.progressionFor=null,this.progression=null}rereadProgression(){let e=this.progressionFor;if(e===null||this.progression===null||!this.isConnected||!this.isOpen())return;let t=++this.progressionLoad;U(e).then(e=>{t!==this.progressionLoad||e===null||(this.progression=e)})}renderEmptyState(e,t){return L`
      <div
        class="bg-white/5 rounded-xl border border-white/10 p-12 flex flex-col items-center justify-center text-center"
      >
        <div class="text-4xl mb-3">${e}</div>
        <p class="text-white/60 text-sm">${t}</p>
      </div>
    `}renderRewardsPanel(){let e=this.userMeResponse?.player?.rewards??[];return e.length===0?``:L`<rewards-panel
      .rewards=${e}
      .signedIn=${r(this.userMeResponse??!1)||this.portalUser!==null}
      @rewards-changed=${this.handleRewardsChanged}
    ></rewards-panel>`}renderCreatorCodePanel(){return L`<creator-code-panel
      .creator=${this.userMeResponse?.player?.creator}
      .prefillCode=${this.prefillCreatorCode}
      @creator-changed=${this.handleCreatorChanged}
    ></creator-code-panel>`}renderProfileCard(e){let t=this.userMeResponse?.player,n=pe(t?.leaderboard?.ffa);if(t?.publicId&&!t.progress)return e===`full`&&n!==null?L`<ffa-rating-summary
            class="mb-4 block"
            .rating=${n}
          ></ffa-rating-summary>`:I;if(!t?.publicId||!t.progress)return I;let r=M(t.publicId,t.progress);return L`<profile-card
      class=${e===`full`?`mb-4 block`:`block`}
      .variant=${e}
      .username=${t.username??t.publicId}
      .clanTag=${this.displayClanTag}
      .progress=${r.progress}
      .provisional=${r.provisional}
      .ffaRating=${n}
      .openKey=${`account-${this.openCount}`}
      prestigeable
      @prestige-request=${this.handlePrestigeRequest}
    ></profile-card>`}prefetchPrestigeFlow(){this.userMeResponse?.player?.progress?.canPrestige&&this.loadPrestigeFlow().catch(e=>console.warn(`AccountModal: prestige flow failed to load`,e))}async refreshUserMe(){C();let e=await s();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}confirmBeforeClose(){return this.querySelector(`prestige-flow`)?.isOpen?!1:super.confirmBeforeClose()}renderCurrency(){let e=this.userMeResponse?.player?.currency;return e?L`
      <currency-display
        .hard=${e.hard}
        .soft=${e.soft}
      ></currency-display>
    `:L``}renderLoggedInAs(){let e=this.userMeResponse?.user;return e?.discord?L`
        <div class="flex flex-col items-center gap-3 w-full">
          ${this.renderCurrency()} ${this.renderGoogleLink()}
          ${this.renderSteamLink()}
        </div>
      `:e?.google?L`
        <div class="flex flex-col items-center gap-3 w-full">
          <div class="text-white text-lg font-medium">
            ${O(`account_modal.linked_account`,{account_name:e.google.email})}
          </div>
          ${this.renderCurrency()} ${this.renderSteamLink()}
        </div>
      `:e?.email?L`
        <div class="flex flex-col items-center gap-3 w-full">
          <div class="text-white text-lg font-medium">
            ${O(`account_modal.linked_account`,{account_name:e.email})}
          </div>
          ${this.renderCurrency()} ${this.renderGoogleLink()}
          ${this.renderSteamLink()}
        </div>
      `:e?.steam?L`
        <div class="flex flex-col items-center gap-3 w-full">
          ${this.renderCurrency()}
        </div>
      `:L``}renderGoogleLink(){let e=this.userMeResponse?.user?.google;if(e){let t=e.email?O(`account_modal.linked_to_google_email`,{email:e.email}):O(`account_modal.linked_to_google`);return L`
        <div class="flex items-center gap-2 text-white/70 text-sm">
          <img
            src=${E(`images/GoogleLogo.svg`)}
            alt=${O(`account_modal.google_alt`)}
            class="w-4 h-4"
          />
          <span>${t}</span>
        </div>
      `}return this.renderLinkGoogleButton()}renderLinkGoogleButton(){return this.userMeResponse?.user?.google?L``:B(this.handleLinkGoogle,m()?`account_modal.link_google_on_web`:`account_modal.link_google`)}renderSteamLink(){return m()?L``:this.userMeResponse?.user?.steam?L`
        <div class="flex flex-col items-center gap-1">
          <div class="flex items-center gap-2 text-white/70 text-sm">
            ${X(`w-4 h-4 shrink-0`)}
            <span>${O(`account_modal.linked_to_steam`)}</span>
          </div>
          <span class="text-white/40 text-xs text-center">
            ${O(`account_modal.link_steam_permanent`)}
          </span>
        </div>
      `:L`
      <div class="w-full flex flex-col gap-1">
        ${me(this.handleLinkSteam)}
        <span class="text-white/40 text-xs text-center">
          ${O(`account_modal.link_steam_permanent`)}
        </span>
      </div>
    `}async viewGame(e){this.close();let t=encodeURIComponent(e),n=te(c.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}}))}openGameStats(e){this.gamesScrollTop=this.modalEl?.getScrollTop()??0,document.querySelector(`game-stats-modal`)?.openFromAccount(e)}returnToGames(){this.restoreGamesScrollAfterOpen=!0,this.open({tab:`games`})}async restoreGamesScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`player-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gamesScrollTop)}finishLoadingUser(e){if(e!==this.openCount)return;this.isLoadingUser=!1,this.requestUpdate();let t=this.requestedTab;this.requestedTab=null,t!==null&&this.isOpen()&&this.setActiveTab(t),this.restoreGamesScrollAfterOpen&&(this.restoreGamesScrollAfterOpen=!1,this.restoreGamesScroll())}resetPlayerData(){this.statsTree=null,this.displayClanTag=null,this.dropProgression(),this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1}renderLoginError(){return this.loginError===void 0?L``:L`
      <div
        class="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
      >
        <span class="text-red-400 text-lg leading-none" aria-hidden="true">
          &#9888;
        </span>
        <p class="flex-1 text-sm text-red-200">
          ${O(_e[this.loginError])}
        </p>
        <button
          class="text-red-200/60 hover:text-red-200 text-lg leading-none"
          aria-label=${O(`common.close`)}
          @click=${()=>this.loginError=void 0}
        >
          &times;
        </button>
      </div>
    `}renderLoginOptions(){let e=m();return L`
      <div class="flex items-center justify-center p-6 min-h-full">
        <div
          class="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-8"
        >
          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-inner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </div>
            <p class="text-white/50 text-sm font-medium">
              ${O(`account_modal.sign_in_desc`)}
            </p>
            ${e?L`<p class="text-white/40 text-xs">
                    ${O(`account_modal.desktop_sign_in_desc`)}
                  </p>`:I}
            ${this.renderCurrency()}
          </div>

          ${this.renderLoginError()}

          <div class="space-y-6">
            <!-- Discord Login Button -->
            <button
              @click="${this.handleDiscordLogin}"
              class="w-full px-6 py-4 text-white bg-[#5865F2] hover:bg-[#4752C4] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865F2] transition-colors duration-200 flex items-center justify-center gap-3 group relative overflow-hidden shadow-lg hover:shadow-[#5865F2]/20"
            >
              <img
                src=${E(`images/DiscordLogo.svg`)}
                alt="Discord"
                class="w-6 h-6 relative z-10"
              />
              <span class="font-bold relative z-10 tracking-wide"
                >${e?O(`account_modal.desktop_login_discord`):O(`main.login_discord`)||O(`account_modal.link_discord`)}</span
              >
            </button>

            <!-- Google Login Button (Google brand guidelines: white surface,
                 dark text, the multicolor "G" mark) -->
            <button
              @click="${this.handleGoogleLogin}"
              class="w-full px-6 py-4 text-[#1f1f1f] bg-white hover:bg-[#f7f8f8] border border-[#dadce0] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transition-colors duration-200 flex items-center justify-center gap-3 group relative overflow-hidden shadow-lg"
            >
              <img
                src=${E(`images/GoogleLogo.svg`)}
                alt=${O(`account_modal.google_alt`)}
                class="w-6 h-6 relative z-10"
              />
              <span class="font-bold relative z-10 tracking-wide"
                >${O(e?`account_modal.desktop_login_google`:`main.login_google`)}</span
              >
            </button>

            <!-- Sign in through Steam. Hidden inside the desktop shell: the
                 player is already signed in there through the native Steam
                 ticket, so the button would be a no-op that looks like an
                 option. -->
            ${e?I:L`<button
                    @click="${this.handleSteamLogin}"
                    class="w-full px-6 py-4 text-white bg-[#1b2838] hover:bg-[#2a475e] border border-[#66c0f4]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66c0f4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
                  >
                    ${X(`w-6 h-6 shrink-0`)}
                    <span class="font-bold tracking-wide"
                      >${O(`main.login_steam`)}</span
                    >
                  </button>`}

            <!-- Divider -->
            <div class="flex items-center gap-4 py-2">
              <div class="h-px bg-white/10 flex-1"></div>
              <span
                class="text-[10px] uppercase tracking-widest text-white/30 font-bold"
              >
                ${O(`account_modal.or`)}
              </span>
              <div class="h-px bg-white/10 flex-1"></div>
            </div>

            <!-- Email Recovery -->
            <div class="space-y-3">${this.renderEmailField()}</div>
          </div>

          <!-- Not on Steam: the Steam ticket re-creates the session on reload. -->
          ${ce.isOnSteam()?I:L`<div
                  class="mt-8 text-center border-t border-white/10 pt-6"
                >
                  <button
                    @click="${this.handleLogout}"
                    class="text-[10px] font-bold text-white/20 hover:text-red-400 transition-colors uppercase tracking-widest pb-0.5"
                  >
                    ${O(`account_modal.clear_session`)}
                  </button>
                </div>`}
        </div>
      </div>
    `}handleEmailInput(e){let t=e.target;this.email=t.value}async handleSubmit(){if(!this.email){await w(O(`account_modal.enter_email_address`));return}await w(await le(this.email)?O(`account_modal.recovery_email_sent`,{email:this.email}):O(`account_modal.failed_to_send_recovery_email`))}async handlePortalSignIn(){await t.showAuthPrompt();let e=await t.getUserProfile();if(!e)return;C(),await k();let n=await s();n&&(this.userMeResponse=n,this.prefetchPrestigeFlow()),this.portalUser=e,this.requestUpdate()}handleDiscordLogin(){a()}handleGoogleLogin(){ae()}handleSteamLogin(){oe()}consumeCreatorCodeArg(e){let t=typeof e?.creatorCode==`string`?e.creatorCode:void 0;if(!t)return;let n=new URLSearchParams(window.location.hash.slice(1));n.delete(`creatorCode`);let r=n.toString();return history.replaceState(null,``,r?`#${r}`:window.location.pathname+window.location.search),t}onOpen(e){let t=this.openCount=++ve;this.dropProgression(),this.isLoadingUser=!0,this.requestedTab=typeof e?.tab==`string`?e.tab:null,V(e),this.loginError=ge(e),this.prefillCreatorCode=this.consumeCreatorCodeArg(e),this.refreshPortalUser(),s().then(e=>{e&&(this.userMeResponse=e,this.prefetchPrestigeFlow(),this.userMeResponse?.player?.publicId&&this.loadPlayerProfile(this.userMeResponse.player.publicId)),this.finishLoadingUser(t)}).catch(e=>{console.warn(`Failed to fetch user info in AccountModal.open():`,e),this.finishLoadingUser(t)}),this.requestUpdate()}onClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}async handleLogout(){await j(),this.close(),window.location.reload()}async loadPlayerProfile(e){try{let t=await z(e);if(!t){this.requestUpdate();return}this.statsTree=t.stats,this.displayClanTag=t.displayClanTag??null,this.requestUpdate()}catch(e){console.warn(`Failed to load player data:`,e),this.requestUpdate()}}};p([D()],$.prototype,`email`,void 0),p([D()],$.prototype,`isLoadingUser`,void 0),p([D()],$.prototype,`progression`,void 0),p([D()],$.prototype,`portalUser`,void 0),p([D()],$.prototype,`loginError`,void 0),p([D()],$.prototype,`prefillCreatorCode`,void 0),$=p([S(`account-modal`)],$);export{$ as AccountModal};