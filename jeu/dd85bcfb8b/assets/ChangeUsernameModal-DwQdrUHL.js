import{Aa as e,Yi as t,_i as n,_s as r,ai as i,c as a,ci as o,ei as s,ni as c,oi as l,pi as u,qi as d,ri as f,si as p,ti as m,ui as h,vi as g}from"./index-DOVkn8Nm.js";import{t as _}from"./ProfileMenuModal-DSVLD8GY.js";var v=class extends o{constructor(...e){super(...e),this.draft=``,this.busy=!1,this.error=``}createRenderRoot(){return this}willUpdate(e){e.has(`player`)&&(this.draft=this.player?.usernameBase??``,this.error=``,this.draft===``&&!this.player?.username&&this.seedFromPersona())}async seedFromPersona(){let e=n(await s.getUser().then(e=>e?.name??null).catch(()=>null));e!==null&&this.draft===``&&(this.player?.usernameBase||this.player?.username||(this.draft=e))}cooldownEnd(){let e=this.player.nextUsernameChangeAt;if(!e)return null;let t=new Date(e);return t.getTime()>Date.now()?t:null}isTemporary(){let e=this.player.usernameStatus;return(e===`premium`||e===`indefinite`)&&r(this.player.usernameBase)}formatDate(e){return e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}handleInput(e){this.draft=e.target.value;let t=this.draft.trim();if(t.length===0){this.error=``;return}let n=g(t);this.error=n.isValid?``:n.error??``}async handleSave(){if(this.busy)return;let n=this.draft.trim(),r=g(n);if(!r.isValid){this.error=r.error??``;return}let i=this.player.usernameBase,a=[t(`account_modal.username_confirm_body`)];i!=null&&(n.toLowerCase()===i.toLowerCase()&&a.push(t(`account_modal.username_confirm_case_only`)),this.player.usernameStatus===`claimed`&&a.push(t(`account_modal.username_confirm_abandon`,{name:i}))),await c(a.join(` `),{heading:t(`account_modal.username_confirm_heading`),variant:`warning`,confirmText:t(`account_modal.username_confirm_button`)})&&(this.busy=!0,await this.finishSave(n,await e(n),!1))}async finishSave(n,r,i){if(r.ok){i||await this.warnBareClaimUnavailable(n,r.data),d(t(`account_modal.username_saved`)),history.replaceState(history.state,``,window.location.pathname+window.location.search),window.location.reload();return}if(r.code===`bare_taken`&&!i){if(!await c(t(`account_modal.username_bare_taken_body`,{requested:r.base}),{heading:t(`account_modal.username_bare_taken_heading`),variant:`warning`,confirmText:t(`account_modal.username_bare_taken_confirm`)})){this.busy=!1;return}await this.finishSave(n,await e(n,{acceptSuffixed:!0}),!0);return}this.busy=!1,this.error=this.errorMessage(r)}async warnBareClaimUnavailable(e,n){if(n.bareClaim!==`unavailable`)return;let r=n.nextUsernameChangeAt;await m(r===null?t(`account_modal.username_bare_unavailable_no_date`,{requested:e,name:n.username}):t(`account_modal.username_bare_unavailable`,{requested:e,name:n.username,date:this.formatDate(new Date(r))}))}errorMessage(e){switch(e.code){case`profane`:return t(`account_modal.username_error_profane`);case`taken`:return t(`account_modal.username_error_taken`);case`bare_taken`:return t(`account_modal.username_error_taken`);case`cooldown`:return e.retryAfterSeconds===null?t(`account_modal.username_error_failed`):t(`account_modal.username_error_cooldown`,{days:Math.max(1,Math.ceil(e.retryAfterSeconds/86400))});case`invalid`:return e.message??t(`account_modal.username_error_failed`);default:return t(`account_modal.username_error_failed`)}}renderNotices(){if(this.isTemporary())return this.renderNotice(t(`account_modal.username_temporary_notice`));let e=this.player.usernameClaimExpiresAt;return this.player.usernameStatus===`claimed`&&e?this.renderNotice(t(`account_modal.username_grace_warning`,{name:this.player.usernameBase??``,date:this.formatDate(new Date(e))})):h}renderNotice(e){return u`
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
    `}renderCooldownPill(e){let n=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border shrink-0`;return e===null?u`<span
        class="${n} bg-green-500/10 border-green-500/30 text-green-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span>
        ${t(`account_modal.username_change_ready`)}
      </span>`:u`<span
      class="${n} bg-amber-500/10 border-amber-500/30 text-amber-300"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      ${t(`account_modal.username_locked_until`,{date:this.formatDate(e)})}
    </span>`}render(){if(!this.player||this.player.usernameStatus===void 0)return h;let e=this.cooldownEnd(),n=e!==null,r=this.draft.trim(),i=!n&&!this.busy&&r.length>=3&&this.error===``;return u`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <span
                class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
              >
                ${t(`account_modal.username_current_label`)}
              </span>
              ${this.player.username?u`<div
                      class="text-xl font-bold text-white leading-tight break-all"
                    >
                      ${a(this.player.username,`text-white`)}
                    </div>`:u`<div class="text-sm text-white/50">
                      ${t(`account_modal.username_not_set`)}
                    </div>`}
            </div>
            ${this.renderCooldownPill(e)}
          </div>
          ${this.renderNotices()}

          <div class="border-t border-white/10 pt-4 flex flex-col gap-2">
            <label
              for="username-panel-input"
              class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
            >
              ${t(`account_modal.username_new_label`)}
            </label>
            <input
              id="username-panel-input"
              type="text"
              .value=${this.draft}
              @input=${this.handleInput}
              @keydown=${e=>{e.key===`Enter`&&i&&this.handleSave()}}
              placeholder=${t(`account_modal.username_placeholder`)}
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
              .disable=${!i}
              @click=${this.handleSave}
            ></o-button>
          </div>
        </div>
      </div>
    `}};f([l({attribute:!1})],v.prototype,`player`,void 0),f([i()],v.prototype,`draft`,void 0),f([i()],v.prototype,`busy`,void 0),f([i()],v.prototype,`error`,void 0),v=f([p(`username-panel`)],v);var y=class extends _{constructor(...e){super(...e),this.routerName=`change-username`,this.titleKey=`change_username_modal.title`}renderSignedIn(e){let n=e.player;return n.usernameStatus===void 0?u`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/60 text-sm">
              ${t(`change_username_modal.unavailable`)}
            </p>
          </div>
        </div>
      `:u`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <username-panel .player=${n}></username-panel>
        </div>
      </div>
    `}};y=f([p(`change-username-modal`)],y);export{y as ChangeUsernameModal};