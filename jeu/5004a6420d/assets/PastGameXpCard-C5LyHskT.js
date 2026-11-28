import{A as e,C as t,D as n,F as r,L as i,P as a,S as o,V as s,bi as c,di as l,gi as u,hi as d,j as f,mi as p,ra as m,vi as h,x as g,xi as _,z as v}from"./index-hx7tETuk.js";var y=[`#bef264`,`#bef264`],b=30,x=class extends u{constructor(...e){super(...e),this.view={kind:`hidden`},this.gameType=null}createRenderRoot(){return this}frame(e,t){return _`<section
      data-past-xp
      data-past-xp-state=${t}
      class="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-4 py-3.5 text-left text-white sm:px-[18px]"
      aria-live="polite"
    >
      ${e}
    </section>`}heading(e=``){return _`<div
      class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/55 ${e}"
    >
      ${m(`progression.xp_heading`)}
    </div>`}renderNote(e,t,n,r){return this.frame(_`<div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        ${this.heading(`flex-none`)}
        <div
          class="flex min-w-0 flex-[1_1_240px] items-center gap-2 text-sm ${r}"
        >
          ${e}
          <span data-past-xp-note>${t}</span>
        </div>
      </div>`,n)}renderCalculating(){return this.renderNote(_`<span
        class="size-4 flex-none animate-spin rounded-full border-2 border-white/30 border-t-white/85"
        aria-hidden="true"
      ></span>`,m(`progression.calculating`),`calculating`,`text-white/70`)}circledIcon(e){return _`<svg
      viewBox="0 0 18 18"
      class="size-[18px] flex-none ${e===`info`?`text-white/40`:`text-white/30`}"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8" stroke-width="1.5" />
      ${e===`info`?c`<path d="M9 8v5" stroke-width="1.8" stroke-linecap="round" />
            <circle
              cx="9"
              cy="5.3"
              r="1.05"
              fill="currentColor"
              stroke="none"
            />`:c`<path d="M5.5 9h7" stroke-width="1.8" stroke-linecap="round" />`}
    </svg>`}signed(e){return m(e<0?`progression.xp_minus`:`progression.xp_plus`,{xp:g(Math.abs(e))})}badge(e,t,n=!1){return _`<level-badge
      class="inline-block align-middle"
      .level=${e}
      .prestige=${t}
      .legend=${n}
      .size=${b}
    ></level-badge>`}renderLevel(e){let{before:n,after:r}=e,o=a(e);if(o.length===0)return _`<div
        data-past-xp-level=${r.level}
        class="flex flex-none items-center gap-2"
      >
        ${this.badge(r.level,r.prestige,r.legend)}
        <div class="leading-tight">
          <div class="text-[15px] font-extrabold">
            ${r.legend?m(`progression.legend`):m(`progression.level`,{level:r.level})}
          </div>
          <div class="text-xs tabular-nums text-white/55">
            ${t(r.xpInLevel,r.xpForNext)}
          </div>
        </div>
      </div>`;let s=o[o.length-1],c=i(e),l=o.some(e=>f(e.level));return _`<div
      data-past-xp-levelup=${s.level}
      class="flex flex-none flex-wrap items-center gap-2"
    >
      ${this.badge(n.level,n.prestige)}
      <span class="text-base font-bold text-white/45" aria-hidden="true"
        >→</span
      >
      <span
        data-past-xp-new-badge
        class="inline-grid place-items-center rounded-full ${l?`shadow-[0_0_14px_rgba(250,204,21,0.55)]`:``}"
      >
        ${this.badge(s.level,s.prestige,c&&s.level>=100)}
      </span>
      <span class="ml-1 text-[15px] font-extrabold tabular-nums">
        ${m(`progression.level_change`,{from:n.level,to:s.level})}
      </span>
      ${l?_`<span
              data-past-xp-milestone
              class="ml-1 rounded-full border border-yellow-400/45 bg-yellow-400/10 px-2 py-[3px] text-[10px] font-extrabold uppercase tracking-[0.14em] text-yellow-300"
            >
              ${m(`progression.milestone_chip`)}
            </span>`:h}
    </div>`}renderMultipliers(e){return _`${r(e.breakdown).map(e=>{let t=e.permille<1e3,n=e.key===`subscriber`?v(e.permille)?.colors??y:y;return _`<div
        data-past-xp-multiplier=${e.key}
        data-xp-tier=${e.key===`subscriber`?v(e.permille)?.tier??h:h}
        class="mt-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[13px] leading-relaxed"
      >
        <span
          class="font-extrabold uppercase italic tracking-[0.04em] ${t?`text-sky-300`:`bg-clip-text text-transparent`}"
          style=${t?h:`background-image: linear-gradient(90deg, ${n[0]}, ${n[1]})`}
          >${o(e.key,e.permille)}</span
        >
        ${e.amount===null?h:_`<span
                data-past-xp-multiplier-amount
                class="font-extrabold tabular-nums ${t?`text-sky-300`:``}"
                style=${t?h:`color: ${n[1]}`}
                >${this.signed(e.amount)}</span
              >`}
      </div>`})}`}renderResult(e){let t=s(e.breakdown);return this.frame(_`
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2.5">
          <div class="min-w-0 flex-auto">
            ${this.heading()}
            <div
              data-past-xp-total
              class="mt-0.5 text-2xl font-black leading-tight tabular-nums text-yellow-300 [text-shadow:0_0_10px_rgba(250,204,21,0.35)]"
            >
              ${m(`progression.xp_total`,{xp:g(e.breakdown.total)})}
            </div>
          </div>
          ${this.renderLevel(e)}
        </div>
        ${t.length>0?_`<div
                data-past-xp-lines
                class="mt-3 grid grid-cols-1 gap-x-7 gap-y-1 border-t border-white/[0.08] pt-2.5 sm:grid-cols-3"
              >
                ${t.map(e=>_`<div
                      data-past-xp-line=${e.key}
                      class="flex justify-between gap-3 text-[13px] leading-relaxed"
                    >
                      <span class="min-w-0 text-white/70"
                        >${m(n[e.key])}</span
                      >
                      <span class="font-bold tabular-nums text-yellow-300"
                        >${this.signed(e.amount)}</span
                      >
                    </div>`)}
              </div>`:h}
        ${this.renderMultipliers(e)}
        ${e.breakdown.leftEarly?_`<p
                data-past-xp-left-early
                class="m-0 mt-2 text-xs text-amber-300"
              >
                ${m(`progression.left_early`)}
              </p>`:h}
      `,`result`)}render(){let t=this.view;switch(t.kind){case`hidden`:return h;case`calculating`:return this.renderCalculating();case`result`:return t.data.eligible?this.renderResult(t.data):t.data.reason===`before_progression`?this.renderNote(this.circledIcon(`dash`),m(e(t.data.reason)),`before_levels`,`text-white/55`):this.renderNote(this.circledIcon(`info`),m(e(t.data.reason,this.gameType)),`ineligible`,`text-white/70`)}}};l([p({attribute:!1})],x.prototype,`view`,void 0),l([p({attribute:!1})],x.prototype,`gameType`,void 0),x=l([d(`past-game-xp-card`)],x);export{x as PastGameXpCard};