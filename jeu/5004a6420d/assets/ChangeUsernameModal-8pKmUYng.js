import{Ei as e,Es as t,Ra as n,Ti as r,ci as i,d as a,di as o,gi as s,hi as c,li as l,mi as u,pi as d,ra as f,ta as p,ui as m,vi as h,xi as g}from"./index-hx7tETuk.js";import{t as _}from"./ProfileMenuModal-CwhWHZY_.js";var v=class extends s{constructor(...e){super(...e),this.draft=``,this.busy=!1,this.error=``}createRenderRoot(){return this}willUpdate(e){e.has(`player`)&&(this.draft=this.player?.usernameBase??``,this.error=``,this.draft===``&&!this.player?.username&&this.seedFromPersona())}async seedFromPersona(){let e=r(await i.getUser().then(e=>e?.name??null).catch(()=>null));e!==null&&this.draft===``&&(this.player?.usernameBase||this.player?.username||(this.draft=e))}cooldownEnd(){let e=this.player.nextUsernameChangeAt;if(!e)return null;let t=new Date(e);return t.getTime()>Date.now()?t:null}isTemporary(){let e=this.player.usernameStatus;return(e===`premium`||e===`indefinite`)&&t(this.player.usernameBase)}formatDate(e){return e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}handleInput(t){this.draft=t.target.value;let n=this.draft.trim();if(n.length===0){this.error=``;return}let r=e(n);this.error=r.isValid?``:r.error??``}async handleSave(){if(this.busy)return;let t=this.draft.trim(),r=e(t);if(!r.isValid){this.error=r.error??``;return}let i=this.player.usernameBase,a=[f(`account_modal.username_confirm_body`)];i!=null&&(t.toLowerCase()===i.toLowerCase()&&a.push(f(`account_modal.username_confirm_case_only`)),this.player.usernameStatus===`claimed`&&a.push(f(`account_modal.username_confirm_abandon`,{name:i}))),await m(a.join(` `),{heading:f(`account_modal.username_confirm_heading`),variant:`warning`,confirmText:f(`account_modal.username_confirm_button`)})&&(this.busy=!0,await this.finishSave(t,await n(t),!1))}async finishSave(e,t,r){if(t.ok){r||await this.warnBareClaimUnavailable(e,t.data),p(f(`account_modal.username_saved`)),history.replaceState(history.state,``,window.location.pathname+window.location.search),window.location.reload();return}if(t.code===`bare_taken`&&!r){if(!await m(f(`account_modal.username_bare_taken_body`,{requested:t.base}),{heading:f(`account_modal.username_bare_taken_heading`),variant:`warning`,confirmText:f(`account_modal.username_bare_taken_confirm`)})){this.busy=!1;return}await this.finishSave(e,await n(e,{acceptSuffixed:!0}),!0);return}this.busy=!1,this.error=this.errorMessage(t)}async warnBareClaimUnavailable(e,t){if(t.bareClaim!==`unavailable`)return;let n=t.nextUsernameChangeAt;await l(n===null?f(`account_modal.username_bare_unavailable_no_date`,{requested:e,name:t.username}):f(`account_modal.username_bare_unavailable`,{requested:e,name:t.username,date:this.formatDate(new Date(n))}))}errorMessage(e){switch(e.code){case`profane`:return f(`account_modal.username_error_profane`);case`taken`:return f(`account_modal.username_error_taken`);case`bare_taken`:return f(`account_modal.username_error_taken`);case`cooldown`:return e.retryAfterSeconds===null?f(`account_modal.username_error_failed`):f(`account_modal.username_error_cooldown`,{days:Math.max(1,Math.ceil(e.retryAfterSeconds/86400))});case`invalid`:return e.message??f(`account_modal.username_error_failed`);default:return f(`account_modal.username_error_failed`)}}renderNotices(){if(this.isTemporary())return this.renderNotice(f(`account_modal.username_temporary_notice`));let e=this.player.usernameClaimExpiresAt;return this.player.usernameStatus===`claimed`&&e?this.renderNotice(f(`account_modal.username_grace_warning`,{name:this.player.usernameBase??``,date:this.formatDate(new Date(e))})):h}renderNotice(e){return g`
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
    `}renderCooldownPill(e){let t=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border shrink-0`;return e===null?g`<span
        class="${t} bg-green-500/10 border-green-500/30 text-green-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400"></span>
        ${f(`account_modal.username_change_ready`)}
      </span>`:g`<span
      class="${t} bg-amber-500/10 border-amber-500/30 text-amber-300"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
      ${f(`account_modal.username_locked_until`,{date:this.formatDate(e)})}
    </span>`}render(){if(!this.player||this.player.usernameStatus===void 0)return h;let e=this.cooldownEnd(),t=e!==null,n=this.draft.trim(),r=!t&&!this.busy&&n.length>=3&&this.error===``;return g`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <span
                class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
              >
                ${f(`account_modal.username_current_label`)}
              </span>
              ${this.player.username?g`<div
                      class="text-xl font-bold text-white leading-tight break-all"
                    >
                      ${a(this.player.username,`text-white`)}
                    </div>`:g`<div class="text-sm text-white/50">
                      ${f(`account_modal.username_not_set`)}
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
              ${f(`account_modal.username_new_label`)}
            </label>
            <input
              id="username-panel-input"
              type="text"
              .value=${this.draft}
              @input=${this.handleInput}
              @keydown=${e=>{e.key===`Enter`&&r&&this.handleSave()}}
              placeholder=${f(`account_modal.username_placeholder`)}
              maxlength=${20}
              ?disabled=${t||this.busy}
              class="w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 transition-all font-medium hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5 ${this.error?`border-red-500/50 focus:ring-red-500/40 focus:border-red-500/50`:`border-white/10 focus:ring-malibu-blue/50 focus:border-malibu-blue/50`}"
            />
            <div class="flex items-start justify-between gap-3 min-h-[1.25rem]">
              <span class="text-sm text-red-400">${this.error}</span>
              <span
                class="text-xs text-white/30 tabular-nums shrink-0 leading-5"
              >
                ${n.length}/${20}
              </span>
            </div>
            <o-button
              variant="primary"
              width="block"
              size="md"
              translationKey="account_modal.username_save"
              .disable=${!r}
              @click=${this.handleSave}
            ></o-button>
          </div>
        </div>
      </div>
    `}};o([u({attribute:!1})],v.prototype,`player`,void 0),o([d()],v.prototype,`draft`,void 0),o([d()],v.prototype,`busy`,void 0),o([d()],v.prototype,`error`,void 0),v=o([c(`username-panel`)],v);var y=class extends _{constructor(...e){super(...e),this.routerName=`change-username`,this.titleKey=`change_username_modal.title`}renderSignedIn(e){let t=e.player;return t.usernameStatus===void 0?g`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/60 text-sm">
              ${f(`change_username_modal.unavailable`)}
            </p>
          </div>
        </div>
      `:g`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <username-panel .player=${t}></username-panel>
        </div>
      </div>
    `}};y=o([c(`change-username-modal`)],y);export{y as ChangeUsernameModal};