import{Dr as e,Lr as t,_r as n,di as r,do as i,gi as a,hi as o,mi as s,ra as c,vi as l,xi as u}from"./index-hx7tETuk.js";import{a as d,c as f,i as p,r as m}from"./CosmeticPreview-D1-wZzpj.js";var h={common:`text-white/60`,uncommon:`text-green-400`,rare:`text-blue-400`,epic:`text-purple-300`,legendary:`text-orange-400`},g=class extends a{constructor(...e){super(...e),this.showAdFree=!1,this.perks=[],this.items=[]}createRenderRoot(){return this}render(){if(!this.artist&&!this.rarity&&!this.colorPalette&&!this.showAdFree&&this.usdValue===void 0&&this.perks.length===0&&this.items.length===0)return l;let e=m(this.aiDisclosed,this.artist),n=h[this.rarity??``]??`text-white/70`;return u`<div
      data-cosmetic-info
      class="group/cosmetic-info pointer-events-none absolute inset-x-2 top-2 z-10 flex justify-start"
      @click=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        aria-label="Show cosmetic details"
        class="pointer-events-auto flex h-7 w-7 cursor-help items-center justify-center rounded-full bg-black/55 text-xs font-black text-white/80 ring-1 ring-white/20 transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        ?
      </button>
      <div
        role="tooltip"
        class="pointer-events-none absolute left-0 top-9 hidden w-max max-w-full flex-col gap-0.5 whitespace-normal rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-left text-xs text-white shadow-xl group-hover/cosmetic-info:flex group-focus-within/cosmetic-info:flex"
      >
        ${this.rarity?u`<div
                class="font-bold uppercase tracking-wider ${n}"
              >
                ${c(`cosmetics.${this.rarity}`)}
              </div>`:l}
        ${this.showAdFree?u`<div class="font-bold text-green-400">
                ${c(`cosmetics.adfree`)}
              </div>`:l}
        ${this.usdValue===void 0?l:u`<div>
                ${c(`cosmetics.usd_value`,{usd:`$${this.usdValue.toFixed(2)}`})}
              </div>`}
        ${this.perks.map(e=>u`<div class="max-w-56">
              <span class="font-bold text-purple-300">${e.label}:</span>
              <span class="text-white/80">${e.info}</span>
            </div>`)}
        ${this.items.length>0?u`<div data-cosmetic-info-items class="max-w-56">
                <span class="font-bold text-purple-300"
                  >${c(`cosmetics.pack_includes`)}</span
                >
                <span class="text-white/80">${this.items.join(`, `)}</span>
              </div>`:l}
        ${this.colorPalette?u`<div>
                ${c(`cosmetics.color_label`)}
                ${t(`territory_patterns.color_palette`,this.colorPalette)}
              </div>`:l}
        ${this.artist?u`<div>
                ${c(`cosmetics.artist_label`)} ${this.artist}
              </div>`:l}
        ${e?u`<div class="text-white/70">
                ${c(e)}
              </div>`:l}
      </div>
    </div>`}};r([s({type:String})],g.prototype,`artist`,void 0),r([s({type:Boolean})],g.prototype,`aiDisclosed`,void 0),r([s({type:String})],g.prototype,`rarity`,void 0),r([s({type:String})],g.prototype,`colorPalette`,void 0),r([s({type:Boolean})],g.prototype,`showAdFree`,void 0),r([s({type:Number})],g.prototype,`usdValue`,void 0),r([s({type:Array})],g.prototype,`perks`,void 0),r([s({type:Array})],g.prototype,`items`,void 0),g=r([o(`cosmetic-info`)],g);function _(e){if(!e||e.cosmetic===null)return!1;let t=e.type;return t!==`flag`&&t!==`crown`&&t!==`subscription`&&t!==`pack`&&t!==`cosmeticPack`}var v=class extends a{createRenderRoot(){return this}isPreviewable(){return _(this.resolved)}onBubbleClick(e){e.stopPropagation(),e.preventDefault(),this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:this.resolved}))}render(){return this.isPreviewable()?u`<div
      data-cosmetic-preview-bubble
      class="group/preview-bubble absolute right-2 bottom-2 z-10"
      @click=${this.onBubbleClick}
    >
      <button
        type="button"
        aria-label=${c(`store.preview_cosmetic`)}
        title=${c(`store.preview_cosmetic`)}
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/60 text-cyan-300 ring-1 ring-cyan-400/40 shadow-md shadow-black/60 transition-all duration-150 hover:scale-110 hover:bg-cyan-950/80 hover:text-cyan-200 hover:ring-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
    </div>`:l}};r([s({attribute:!1})],v.prototype,`resolved`,void 0),v=r([o(`cosmetic-preview-bubble`)],v);var y,b=`cosmetic-card-styles`;if(!document.getElementById(b)){let e=document.createElement(`style`);e.id=b,e.textContent=`
    @keyframes cosmetic-card-legendary-pulse {
      0%, 100% { box-shadow: 0 0 15px rgba(251,146,60,0.8), 0 0 30px rgba(251,146,60,0.4); }
      50% { box-shadow: 0 0 25px rgba(251,146,60,0.9), 0 0 45px rgba(251,146,60,0.5); }
    }
    @keyframes cosmetic-card-shimmer {
      0% { left: -60%; }
      100% { left: 160%; }
    }
    @keyframes cosmetic-card-border-sweep {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes cosmetic-card-sparkle-0 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      40%, 60% { opacity: 1; transform: scale(1.2) rotate(20deg); }
    }
    @keyframes cosmetic-card-sparkle-1 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      30%, 55% { opacity: 1; transform: scale(1.1) rotate(-15deg); }
    }
    @keyframes cosmetic-card-sparkle-2 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      45%, 65% { opacity: 1; transform: scale(1.3) rotate(10deg); }
    }
    @keyframes cosmetic-card-sparkle-3 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      35%, 58% { opacity: 1; transform: scale(1) rotate(-20deg); }
    }

    [data-cosmetic-shell][data-cosmetic-rarity="common"] {
      background: linear-gradient(to top, rgba(80,80,80,0.55) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(255,255,255,0.15);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="uncommon"] {
      background: linear-gradient(to top, rgba(30,100,30,0.65) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(74,222,128,0.45);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="rare"] {
      background: linear-gradient(to top, rgba(20,60,160,0.7) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(96,165,250,0.5);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="epic"] {
      background: linear-gradient(to top, rgba(90,20,160,0.75) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(192,132,252,0.6);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="legendary"] {
      background: linear-gradient(to top, rgba(180,80,0,0.75) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(251,146,60,0.65);
    }

    cosmetic-card:hover { position: relative; z-index: 10; }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="common"] {
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="uncommon"] {
      transform: translateY(-4px);
      box-shadow: 0 0 12px rgba(74,222,128,0.6);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="rare"] {
      transform: translateY(-4px);
      box-shadow: 0 0 14px rgba(96,165,250,0.7);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="epic"] {
      transform: translateY(-4px);
      box-shadow: 0 0 14px rgba(192,132,252,0.85);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="legendary"] {
      transform: translateY(-6px) scale(1.12);
      animation: cosmetic-card-legendary-pulse 1.4s ease-in-out infinite;
    }

    [data-cosmetic-main], [data-cosmetic-action] {
      position: relative;
      z-index: 3;
    }
    [data-cosmetic-shimmer] {
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: 2;
      overflow: hidden;
      border-radius: 0.75rem;
      opacity: 0;
    }
    [data-cosmetic-shimmer]::after {
      content: "";
      pointer-events: none;
      position: absolute;
      top: 0;
      left: -60%;
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.45) 50%, transparent 100%);
      transform: skewX(-15deg);
    }
    [data-cosmetic-rarity="legendary"] [data-cosmetic-shimmer]::after {
      background: linear-gradient(90deg, transparent 0%, rgba(255,200,80,0.5) 50%, transparent 100%);
    }
    cosmetic-card:hover [data-cosmetic-shimmer] { opacity: 1; }
    cosmetic-card:hover [data-cosmetic-shimmer]::after {
      animation: cosmetic-card-shimmer 0.8s ease-in-out;
    }

    /* A gold conic gradient spinning about the card's centre, clipped to the
       card's rounded box. z-index:-1 puts it above the shell's own background
       but below the card content, so it reads as a full-card overlay sweeping
       around behind the preview and name. */
    [data-cosmetic-border-sweep] {
      pointer-events: none;
      position: absolute;
      inset: -2px;
      z-index: -1;
      display: block;
      border-radius: 0.85rem;
      overflow: hidden;
      opacity: 0;
    }
    [data-cosmetic-border-sweep]::after {
      content: "";
      position: absolute;
      inset: -100%;
      transform-origin: center;
      will-change: transform;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(255,200,80,0) 60deg,
        rgba(255,200,80,0.9) 120deg,
        rgba(255,200,80,1) 180deg,
        rgba(255,200,80,0.9) 240deg,
        rgba(255,200,80,0) 300deg,
        transparent 360deg
      );
    }
    cosmetic-card:hover [data-cosmetic-border-sweep] {
      opacity: 1;
    }
    cosmetic-card:hover [data-cosmetic-border-sweep]::after {
      animation: cosmetic-card-border-sweep 8s linear infinite;
    }

    [data-cosmetic-sparkle] {
      pointer-events: none;
      position: absolute;
      z-index: 11;
      display: block;
      color: rgba(255,220,100,0.9);
      font-size: 10px;
      line-height: 1;
      opacity: 0;
      text-shadow: 0 0 6px rgba(255,200,60,1);
    }
    cosmetic-card:hover [data-cosmetic-sparkle="0"] { animation: cosmetic-card-sparkle-0 1.6s ease-in-out infinite; }
    cosmetic-card:hover [data-cosmetic-sparkle="1"] { animation: cosmetic-card-sparkle-1 1.9s ease-in-out infinite 0.3s; }
    cosmetic-card:hover [data-cosmetic-sparkle="2"] { animation: cosmetic-card-sparkle-2 1.7s ease-in-out infinite 0.7s; }
    cosmetic-card:hover [data-cosmetic-sparkle="3"] { animation: cosmetic-card-sparkle-3 2s ease-in-out infinite 0.1s; }

    /* No prefers-reduced-motion opt-out: these animations are the legendary
       treatment, and suppressing them left the card with a frozen gold wash
       and invisible (opacity: 0) sparkles rather than a calmer effect. */

    /* A flash sale's item: the theme's accent (blue; orange under the
       Halloween theme, which overrides --color-aquarius), pulsing all the
       time (not only on hover), with a light running round the edge. Listed
       after the rarity rules so it wins over a legendary card's hover pulse. */
    @keyframes cosmetic-card-flash-pulse {
      0%, 100% { box-shadow: 0 0 0 2px var(--color-aquarius), 0 0 8px color-mix(in srgb, var(--color-aquarius) 40%, transparent); }
      50% { box-shadow: 0 0 0 2px var(--color-aquarius), 0 0 30px color-mix(in srgb, var(--color-aquarius) 90%, transparent); }
    }
    @keyframes cosmetic-card-flash-spin {
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    cosmetic-card [data-cosmetic-shell][data-cosmetic-flash],
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-flash] {
      border-color: var(--color-aquarius);
      animation: cosmetic-card-flash-pulse 1.8s ease-in-out infinite;
    }
    [data-cosmetic-flash-ring] {
      pointer-events: none;
      position: absolute;
      inset: -4px;
      z-index: 8;
      border-radius: 15px;
      padding: 3px;
      overflow: hidden;
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
    [data-cosmetic-flash-ring]::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 250%;
      aspect-ratio: 1;
      background: conic-gradient(from 0deg, transparent 0 55%, var(--color-aquarius) 72%, #fff 80%, var(--color-aquarius) 88%, transparent 100%);
      transform: translate(-50%, -50%);
      animation: cosmetic-card-flash-spin 2.6s linear infinite;
    }
    /* Unlike the legendary hover, a flash item glows all the time, so it
       calms to a steady outline rather than pulsing and spinning. */
    @media (prefers-reduced-motion: reduce) {
      cosmetic-card [data-cosmetic-shell][data-cosmetic-flash],
      cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-flash] {
        animation: none;
        box-shadow: 0 0 0 2px var(--color-aquarius), 0 0 14px color-mix(in srgb, var(--color-aquarius) 60%, transparent);
      }
      [data-cosmetic-flash-ring] { display: none; }
    }
  `,document.head.appendChild(e)}var x=class extends a{static{y=this}constructor(...e){super(...e),this.variants=[],this.activeVariantKey=null,this.state=`idle`,this.showSwatches=!0,this.interactive=!0,this.showNewBadge=!1,this.previewSize=`card`,this.actionContent=l,this.onHoverStart=()=>{d(this.activeResolved)===`legendary`&&(y.ensureBackdrop().style.background=`rgba(0,0,0,0.6)`)},this.onHoverEnd=()=>{y.backdrop!==null&&(y.backdrop.style.background=`rgba(0,0,0,0)`)}}get activeResolved(){return this.variants.find(e=>e.key===this.activeVariantKey)??this.resolved}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener(`mouseenter`,this.onHoverStart),this.addEventListener(`mouseleave`,this.onHoverEnd)}disconnectedCallback(){this.removeEventListener(`mouseenter`,this.onHoverStart),this.removeEventListener(`mouseleave`,this.onHoverEnd),this.onHoverEnd(),super.disconnectedCallback()}static{this.backdrop=null}static ensureBackdrop(){return y.backdrop??=(()=>{let e=document.createElement(`div`);return e.dataset.cosmeticBackdrop=``,e.style.cssText=`
        pointer-events: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0);
        z-index: 9;
        transition: background 0.3s ease;
      `,document.body.appendChild(e),e})(),y.backdrop}updated(){this.dataset.cosmeticState=this.state}rarityClass(e){switch(e){case`uncommon`:return`border-zinc-300/70`;case`rare`:return`border-violet-300/70`;case`epic`:return`border-fuchsia-300/70`;case`legendary`:return`border-amber-400/70`;default:return`border-white/20`}}rarityHoverClass(e){switch(e){case`uncommon`:return`hover:shadow-[0_14px_30px_rgba(74,222,128,0.22)]`;case`rare`:return`hover:shadow-[0_14px_30px_rgba(96,165,250,0.28)]`;case`epic`:return`hover:shadow-[0_14px_34px_rgba(232,121,249,0.32)]`;case`legendary`:return`hover:shadow-[0_16px_38px_rgba(251,191,36,0.38)]`;default:return`hover:shadow-[0_12px_26px_rgba(255,255,255,0.14)]`}}renderSwatches(){let e=this.variants.filter(e=>e.colorPalette!==null||e.type===`pattern`&&e.cosmetic!==null);if(!this.interactive||!this.showSwatches||e.length===0)return l;let n=this.activeResolved.key;return u`<div
      data-cosmetic-swatches
      class="flex flex-wrap items-center justify-center gap-1 w-full pt-2"
    >
      ${e.map(e=>{let r=e.colorPalette,i=r?.primaryColor??`#ffffff`,a=r?.secondaryColor??`#000000`,o=e.key===n,s=r?t(`territory_patterns.color_palette`,r.name):c(`territory_patterns.pattern.default`);return u`<button
          type="button"
          data-variant-key=${e.key}
          title=${s}
          aria-label=${s}
          aria-pressed=${o?`true`:`false`}
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-0 m-0 appearance-none cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1 transition-transform duration-150 hover:scale-110"
          @click=${t=>{t.stopPropagation(),this.onVariantActivate?.(e)}}
        >
          <span
            data-cosmetic-swatch-dot
            aria-hidden="true"
            class="h-5 w-5 rounded-full ${o?`scale-110 ring-2 ring-white`:``}"
            style="background-image: linear-gradient(135deg, ${i} 0 calc(50% - 0.5px), rgba(255,255,255,0.55) calc(50% - 0.5px) calc(50% + 0.5px), ${a} calc(50% + 0.5px) 100%);"
          ></span>
        </button>`})}
    </div>`}subscriptionPerks(){if(this.activeResolved.type!==`subscription`)return[];let e=this.activeResolved.cosmetic;if(e.requiresSteamLicence)return[];let t=[{label:c(`cosmetics.verified_name`),info:c(`cosmetics.verified_name_info`)}];return e.canCreatePublicLobbies&&t.push({label:c(`cosmetics.public_lobbies`),info:c(`cosmetics.public_lobbies_info`)}),t}renderSaleRibbon(e){if(e.relationship!==`purchasable`)return l;let t=n(e.cosmetic);if(t===null)return l;let r=this.showsNew(e)?`-right-[26px] top-2 sm:-right-[34px] sm:top-3`:`-right-[26px] top-3.5 sm:-right-[34px] sm:top-5`;return u`<span
      data-cosmetic-sale=${t.kind===`flash`?`flash`:`sale`}
      class="pointer-events-none absolute right-0 top-0 z-[5] h-16 w-16 overflow-hidden rounded-tr-lg sm:h-[88px] sm:w-[88px]"
    >
      <span
        class="absolute ${r} w-24 rotate-45 bg-aquarius py-0.5 text-center text-xs font-black tabular-nums text-deep-navy shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:w-[130px] sm:py-[3px] sm:text-[15px]"
        >${c(`store.sale_percent_off`,{percent:t.percentOff})}</span
      >
    </span>`}showsNew(t){return this.showNewBadge&&t.relationship===`purchasable`&&e(t.cosmetic)}renderNewBadge(e){if(!this.showsNew(e))return l;let t=`absolute rotate-45 border-y border-deep-navy/60 bg-cyber-yellow text-center font-black uppercase tracking-wide text-deep-navy shadow-[0_2px_6px_rgba(0,0,0,0.5)]`;return n(e.cosmetic)===null?u`<span
        data-cosmetic-new="outer"
        class="pointer-events-none absolute right-0 top-0 z-[5] h-16 w-16 overflow-hidden rounded-tr-lg sm:h-[88px] sm:w-[88px]"
      >
        <span
          class="${t} -right-[26px] top-3.5 w-24 py-0.5 text-xs sm:-right-[34px] sm:top-5 sm:w-[130px] sm:py-[3px] sm:text-[15px]"
          >${c(`store.new_badge`)}</span
        >
      </span>`:u`<span
      data-cosmetic-new="inner"
      class="pointer-events-none absolute right-0 top-0 z-[4] h-[88px] w-[88px] overflow-hidden rounded-tr-lg sm:h-[120px] sm:w-[120px]"
    >
      <span
        class="${t} -right-[21px] top-[19px] w-[120px] py-px text-[10px] sm:-right-[24px] sm:top-[30px] sm:w-[150px] sm:py-0.5 sm:text-xs"
        >${c(`store.new_badge`)}</span
      >
    </span>`}renderFlashTimer(e){let t=this.flashSale(e);return t===null?l:u`<div
      data-cosmetic-flash-timer
      class="pointer-events-none absolute inset-x-0 bottom-0 z-[3] rounded-b-lg bg-gradient-to-t from-deep-navy via-deep-navy/90 via-70% to-transparent pb-1.5 pt-6 text-center leading-none"
    >
      <div
        class="mb-0.5 text-[9px] font-black uppercase tracking-[0.14em] text-aquarius [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]"
      >
        ${c(`store.flash_ends_in`)}
      </div>
      <sale-countdown
        class="text-base font-black tabular-nums text-white"
        format="clock"
        .endsAt=${t.endsAt}
      ></sale-countdown>
    </div>`}flashSale(e){if(e.relationship!==`purchasable`)return null;let t=n(e.cosmetic);return t?.kind===`flash`?t:null}render(){let e=this.activeResolved,t=d(e),n=p(e),r=this.state===`focused`,a=this.state===`equipped`,o=this.flashSale(e)!==null,s=`${this.rarityClass(t)} ${a?`ring-2 ring-emerald-400/70 shadow-[0_0_24px_rgba(52,211,153,0.45)]`:``} ${this.rarityHoverClass(t)}`,m=e.cosmetic,h=m?.priceHard===void 0?void 0:m.priceHard/20,g=u`
      <div class="relative w-full flex-1 ${e.type===`subscription`?`h-auto`:`aspect-square`}">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white/5 p-2"
        >
          <cosmetic-preview
            .resolved=${e}
            size=${this.previewSize}
          ></cosmetic-preview>
        </div>
        ${this.renderSaleRibbon(e)} ${this.renderFlashTimer(e)}
        ${this.renderNewBadge(e)}
        ${a?u`<span
                data-cosmetic-equipped="true"
                class="absolute bottom-1 left-1 z-[4] rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-200/70"
                >✓ ${c(`inventory.equipped`)}</span
              >`:l}
      </div>
    `,_=u`<span
      data-cosmetic-name
      class="w-full capitalize  whitespace-normal break-words px-3 pt-3 text-center text-sm font-bold leading-tight text-white ${this.interactive?`cursor-pointer`:``}"
      @click=${()=>this.interactive&&this.onActivate?.(e)}
      >${n}</span
    >`;return u`<div
      data-cosmetic-shell
      data-cosmetic-state=${this.state}
      data-cosmetic-rarity=${t}
      ?data-cosmetic-flash=${o}
      class="relative flex h-full flex-col items-center overflow-visible rounded-xl border transition-all duration-200 ease-out hover:-translate-y-1 ${s}"
    >
      ${o?u`<span data-cosmetic-flash-ring aria-hidden="true"></span>`:l}
      ${t===`epic`||t===`legendary`?u`<span data-cosmetic-shimmer aria-hidden="true"></span>`:l}
      ${t===`legendary`?u`<span data-cosmetic-border-sweep aria-hidden="true"></span>
              <span
                data-cosmetic-sparkle="0"
                aria-hidden="true"
                style="top: 4px; left: 4px"
                >✦</span
              >
              <span
                data-cosmetic-sparkle="1"
                aria-hidden="true"
                style="top: 4px; right: 4px"
                >✦</span
              >
              <span
                data-cosmetic-sparkle="2"
                aria-hidden="true"
                style="bottom: 4px; left: 4px"
                >✦</span
              >
              <span
                data-cosmetic-sparkle="3"
                aria-hidden="true"
                style="bottom: 4px; right: 4px"
                >✦</span
              >`:l}
      ${_}
      <!-- The info bubble anchors to this wrapper, not the whole card, so it
           lands on the artwork's corner instead of over the name — and stays
           outside the card's own button, which may not nest a control.
           flex-1 down this chain hands any row-stretch slack (a taller
           sibling card, e.g. the custom-amount slider) to the artwork box,
           instead of pooling it as a void between artwork and buttons. -->
      <div class="relative w-full flex-1 flex flex-col">
        ${this.interactive?u`<button
                type="button"
                data-cosmetic-main
                aria-label=${n}
                aria-pressed=${a?`true`:l}
                aria-current=${r?`true`:l}
                class="group relative flex flex-1 flex-col items-center gap-2 w-full rounded-xl px-3 pb-3 pt-2 cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1"
                @click=${()=>this.onActivate?.(e)}
              >
                ${g}
              </button>`:u`<div
                data-cosmetic-main
                class="group relative flex flex-1 w-full flex-col items-center gap-2 rounded-xl px-3 pb-3 pt-2"
              >
                ${g}
              </div>`}
        ${this.interactive&&e.cosmetic!==null?u`<cosmetic-info
                  .artist=${m?.artist}
                  .aiDisclosed=${m?.aiDisclosed}
                  .rarity=${t}
                  .colorPalette=${e.colorPalette?.name}
                  .showAdFree=${e.relationship===`purchasable`&&!i()}
                  .usdValue=${h}
                  .perks=${this.subscriptionPerks()}
                  .items=${(e.packItems??[]).map(f)}
                ></cosmetic-info>
                <cosmetic-preview-bubble
                  .resolved=${e}
                ></cosmetic-preview-bubble>`:l}
      </div>
      ${this.renderSwatches()}
      ${this.actionContent===l?l:u`<div
              data-cosmetic-action
              class="mt-auto w-full px-3 pb-3 pt-2"
            >
              ${this.actionContent}
            </div>`}
    </div>`}};r([s({attribute:!1})],x.prototype,`resolved`,void 0),r([s({attribute:!1})],x.prototype,`variants`,void 0),r([s({type:String})],x.prototype,`activeVariantKey`,void 0),r([s({type:String})],x.prototype,`state`,void 0),r([s({type:Boolean})],x.prototype,`showSwatches`,void 0),r([s({type:Boolean})],x.prototype,`interactive`,void 0),r([s({type:Boolean})],x.prototype,`showNewBadge`,void 0),r([s({type:String})],x.prototype,`previewSize`,void 0),r([s({attribute:!1})],x.prototype,`onActivate`,void 0),r([s({attribute:!1})],x.prototype,`onVariantActivate`,void 0),r([s({attribute:!1})],x.prototype,`actionContent`,void 0),x=y=r([o(`cosmetic-card`)],x);export{_ as t};