import{$i as e,Pa as t,Si as n,Zi as r,_i as i,ai as a,c as o,di as s,fi as c,ii as l,li as u,mi as d,oi as f,si as p,ui as m,xi as h,xs as g}from"./index-BHQpe8wU.js";import{t as _}from"./ProfileMenuModal-CohfdGx-.js";var v=class extends c{constructor(...e){super(...e),this.draft=``,this.busy=!1,this.error=``}createRenderRoot(){return this}willUpdate(e){e.has(`player`)&&(this.draft=this.player?.usernameBase??``,this.error=``,this.draft===``&&!this.player?.username&&this.seedFromPersona())}async seedFromPersona(){let e=h(await l.getUser().then(e=>e?.name??null).catch(()=>null));e!==null&&this.draft===``&&(this.player?.usernameBase||this.player?.username||(this.draft=e))}cooldownEnd(){let e=this.player.nextUsernameChangeAt;if(!e)return null;let t=new Date(e);return t.getTime()>Date.now()?t:null}isTemporary(){let e=this.player.usernameStatus;return(e===`premium`||e===`indefinite`)&&g(this.player.usernameBase)}formatDate(e){return e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}handleInput(e){this.draft=e.target.value;let t=this.draft.trim();if(t.length===0){this.error=``;return}let r=n(t);this.error=r.isValid?``:r.error??``}async handleSave(){if(this.busy)return;let r=this.draft.trim(),i=n(r);if(!i.isValid){this.error=i.error??``;return}let a=this.player.usernameBase,o=[e(`account_modal.username_confirm_body`)];a!=null&&(r.toLowerCase()===a.toLowerCase()&&o.push(e(`account_modal.username_confirm_case_only`)),this.player.usernameStatus===`claimed`&&o.push(e(`account_modal.username_confirm_abandon`,{name:a}))),await f(o.join(` `),{heading:e(`account_modal.username_confirm_heading`),variant:`warning`,confirmText:e(`account_modal.username_confirm_button`)})&&(this.busy=!0,await this.finishSave(r,await t(r),!1))}async finishSave(n,i,a){if(i.ok){a||await this.warnBareClaimUnavailable(n,i.data),r(e(`account_modal.username_saved`)),history.replaceState(history.state,``,window.location.pathname+window.location.search),window.location.reload();return}if(i.code===`bare_taken`&&!a){if(!await f(e(`account_modal.username_bare_taken_body`,{requested:i.base}),{heading:e(`account_modal.username_bare_taken_heading`),variant:`warning`,confirmText:e(`account_modal.username_bare_taken_confirm`)})){this.busy=!1;return}await this.finishSave(n,await t(n,{acceptSuffixed:!0}),!0);return}this.busy=!1,this.error=this.errorMessage(i)}async warnBareClaimUnavailable(t,n){if(n.bareClaim!==`unavailable`)return;let r=n.nextUsernameChangeAt;await a(r===null?e(`account_modal.username_bare_unavailable_no_date`,{requested:t,name:n.username}):e(`account_modal.username_bare_unavailable`,{requested:t,name:n.username,date:this.formatDate(new Date(r))}))}errorMessage(t){switch(t.code){case`profane`:return e(`account_modal.username_error_profane`);case`taken`:return e(`account_modal.username_error_taken`);case`bare_taken`:return e(`account_modal.username_error_taken`);case`cooldown`:return t.retryAfterSeconds===null?e(`account_modal.username_error_failed`):e(`account_modal.username_error_cooldown`,{days:Math.max(1,Math.ceil(t.retryAfterSeconds/86400))});case`invalid`:return t.message??e(`account_modal.username_error_failed`);default:return e(`account_modal.username_error_failed`)}}renderNotices(){if(this.isTemporary())return this.renderNotice(e(`account_modal.username_temporary_notice`));let t=this.player.usernameClaimExpiresAt;return this.player.usernameStatus===`claimed`&&t?this.renderNotice(e(`account_modal.username_grace_warning`,{name:this.player.usernameBase??``,date:this.formatDate(new Date(t))})):d}renderNotice(e){return i`
      <div
        class="flex items-start gap-2.5 px-3 py-2.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-200 text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <path
            d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>${e}</span>
      </div>
    `}renderCooldownPill(t){let n=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border shrink-0`;return t===null?i`<span
        class="${n} bg-green-500/10 border-green-500/30 text-green-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span>
        ${e(`account_modal.username_change_ready`)}
      </span>`:i`<span
      class="${n} bg-amber-500/10 border-amber-500/30 text-amber-300"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      ${e(`account_modal.username_locked_until`,{date:this.formatDate(t)})}
    </span>`}render(){if(!this.player||this.player.usernameStatus===void 0)return d;let t=this.cooldownEnd(),n=t!==null,r=this.draft.trim(),a=!n&&!this.busy&&r.length>=3&&this.error===``;return i`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <span
                class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
              >
                ${e(`account_modal.username_current_label`)}
              </span>
              ${this.player.username?i`<div
                      class="text-xl font-bold text-white leading-tight break-all"
                    >
                      ${o(this.player.username,`text-white`)}
                    </div>`:i`<div class="text-sm text-white/50">
                      ${e(`account_modal.username_not_set`)}
                    </div>`}
            </div>
            ${this.renderCooldownPill(t)}
          </div>
          ${this.renderNotices()}

          <div class="border-t border-white/10 pt-4 flex flex-col gap-2">
            <label
              for="username-panel-input"
              class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
            >
              ${e(`account_modal.username_new_label`)}
            </label>
            <input
              id="username-panel-input"
              type="text"
              .value=${this.draft}
              @input=${this.handleInput}
              @keydown=${e=>{e.key===`Enter`&&a&&this.handleSave()}}
              placeholder=${e(`account_modal.username_placeholder`)}
              maxlength=${20}
              ?disabled=${n||this.busy}
              class="w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 transition-all font-medium hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5 ${this.error?`border-red-500/50 focus:ring-red-500/40 focus:border-red-500/50`:`border-white/10 focus:ring-malibu-blue/50 focus:border-malibu-blue/50`}"
            />
            <div class="flex items-start justify-between gap-3 min-h-[1.25rem]">
              <span class="text-sm text-red-400">${this.error}</span>
              <span
                class="text-xs text-white/30 tabular-nums shrink-0 leading-5"
              >
                ${r.length}/${20}
              </span>
            </div>
            <o-button
              variant="primary"
              width="block"
              size="md"
              translationKey="account_modal.username_save"
              .disable=${!a}
              @click=${this.handleSave}
            ></o-button>
          </div>
        </div>
      </div>
    `}};p([m({attribute:!1})],v.prototype,`player`,void 0),p([u()],v.prototype,`draft`,void 0),p([u()],v.prototype,`busy`,void 0),p([u()],v.prototype,`error`,void 0),v=p([s(`username-panel`)],v);var y=class extends _{constructor(...e){super(...e),this.routerName=`change-username`,this.titleKey=`change_username_modal.title`}renderSignedIn(t){let n=t.player;return n.usernameStatus===void 0?i`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/60 text-sm">
              ${e(`change_username_modal.unavailable`)}
            </p>
          </div>
        </div>
      `:i`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <username-panel .player=${n}></username-panel>
        </div>
      </div>
    `}};y=p([s(`change-username-modal`)],y);export{y as ChangeUsernameModal};