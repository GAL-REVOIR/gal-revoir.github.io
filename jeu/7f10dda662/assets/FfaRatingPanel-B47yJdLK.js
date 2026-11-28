import{Va as e,Vr as t,Zi as n,ai as r,ci as i,dn as a,fi as o,hi as s,li as c,ln as l,ui as u,us as d}from"./index-BZ-JOJvb.js";import{a as f,c as p,i as m,r as h,s as g}from"./OfstatsCredit-fAyieY7F.js";async function _(n,r){try{let i=await t();if(i===``)return{status:`unavailable`};let o=await fetch(`${e()}/users/@me/ffa_rating/${encodeURIComponent(n)}`,{headers:{Accept:`application/json`,Authorization:i},signal:a(r)});if(o.status===404)return{status:`pending`,notFound:!0};if(o.status===429)return{status:`pending`,rateLimited:!0};if(o.status===401||o.status===403)return{status:`unavailable`};if(!o.ok)return console.warn(`fetchMyFfaGameRating: unexpected status`,o.status),{status:`pending`};let s=d.safeParse(await o.json());return s.success?{status:`ok`,data:s.data}:(console.warn(`fetchMyFfaGameRating: Zod validation failed`,s.error),{status:`unavailable`})}catch(e){return r?.aborted||console.warn(`fetchMyFfaGameRating: request failed`,e),{status:`pending`}}}function v(e,t={}){return l(n=>(t.fetcher??_)(e,n),t)}var y=10;function b(e){if(e===null)return{kind:`hidden`};if(e.calibrating)return{kind:`calibrating`,calibrationGames:e.calibrationGames};let{ratingBefore:t,ratingAfter:n,uncertaintyAfter:r,tierBefore:i,tierAfter:a,expected:o,deltaResult:s,deltaPlace:c}=e;return e.revealed===!0&&n!==void 0&&r!==void 0&&a!==void 0?{kind:`revealed`,ratingAfter:n,uncertaintyAfter:r,tierAfter:a}:t===void 0||n===void 0||r===void 0||i===void 0||a===void 0||o===void 0||s===void 0||c===void 0?{kind:`hidden`}:{kind:`result`,result:{gameId:e.gameId,calibrating:e.calibrating,calibrationGames:e.calibrationGames,ratingBefore:t,ratingAfter:n,uncertaintyAfter:r,tierBefore:i,tierAfter:a,expected:o,deltaResult:s,deltaPlace:c}}}var x=`ffa-rating-panel-styles`,S=`
@keyframes ffa-tier-up-in {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: no-preference) {
  .ffa-tier-up {
    animation: ffa-tier-up-in 0.5s cubic-bezier(0.2, 1.4, 0.4, 1) 1 both;
  }
}
`;function C(){if(document.getElementById(x))return;let e=document.createElement(`style`);e.id=x,e.textContent=S,document.head.appendChild(e)}function w(e){let t=Math.round(e);return t>0?`text-green-400`:t<0?`text-red-400`:`text-white/50`}var T=class extends u{constructor(...e){super(...e),this.gameId=``,this.lobbyHumans=0,this.poll=(e,t)=>v(e,{signal:t}),this.view={kind:`hidden`},this.polledGameId=null,this.abort=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.abort?.abort(),this.abort=null,this.polledGameId=null}updated(){if(!this.isConnected||this.gameId===``||this.lobbyHumans<10||this.polledGameId===this.gameId)return;C(),this.abort?.abort();let e=new AbortController;this.abort=e,this.polledGameId=this.gameId,this.view={kind:`pending`},this.requestUpdate(),this.poll(this.gameId,e.signal).then(t=>this.settle(e,b(t)),()=>this.settle(e,{kind:`hidden`}))}settle(e,t){e.signal.aborted||(this.view=t,this.requestUpdate())}render(){let e=this.view;switch(e.kind){case`hidden`:return o;case`pending`:return this.section(`pending`,s`<p class="text-sm text-white/70">
            ${n(`ffa_rating.pending`)}
          </p>`);case`calibrating`:return this.section(`calibrating`,s`<ffa-tier-badge
              size="md"
              .calibrationGames=${e.calibrationGames}
            ></ffa-tier-badge>
            <ofstats-credit></ofstats-credit>`);case`revealed`:return this.section(`revealed`,s`<p data-ffa-calibration-complete class="text-sm text-white/70">
              ${n(`ffa_rating.calibration_complete`)}
            </p>
            <div class="flex items-center gap-2">
              <ffa-tier-badge
                size="md"
                .tier=${e.tierAfter}
              ></ffa-tier-badge>
              <span
                data-ffa-rating-after
                class="text-lg font-bold tabular-nums text-white"
                >${p(e.ratingAfter,e.uncertaintyAfter)}</span
              >
            </div>
            <ofstats-credit></ofstats-credit>`);case`result`:return this.section(`result`,this.renderResult(e.result))}}section(e,t){return s`<section
      data-ffa-rating-panel=${e}
      class="flex flex-col gap-1.5 mb-3 text-center items-center"
    >
      <h3 class="text-xs font-bold uppercase tracking-wide text-white/70">
        ${n(`ffa_rating.title`)}
      </h3>
      ${t}
    </section>`}renderResult(e){let t=e.ratingAfter-e.ratingBefore,r=m(e.tierBefore),i=m(e.tierAfter),a=r!==null&&i!==null&&i>r;return s`<div class="flex items-center gap-2">
        <ffa-tier-badge size="md" .tier=${e.tierAfter}></ffa-tier-badge>
        <span
          data-ffa-rating-after
          class="text-lg font-bold tabular-nums text-white"
          >${p(e.ratingAfter,e.uncertaintyAfter)}</span
        >
        <span
          data-ffa-rating-change
          class="text-sm font-bold tabular-nums ${w(t)}"
          >${g(t)}</span
        >
      </div>
      <span data-ffa-rating-expected class="text-xs text-white/70"
        >${n(`ffa_rating.expected`,{pct:f(e.expected)})}</span
      >
      <div class="flex gap-4 text-xs text-white/70">
        <div data-ffa-rating-result>
          ${n(`ffa_rating.result`)}
          <span class="font-bold tabular-nums ${w(e.deltaResult)}"
            >${g(e.deltaResult)}</span
          >
        </div>
        <div data-ffa-rating-placement>
          ${n(`ffa_rating.placement`)}
          <span class="font-bold tabular-nums ${w(e.deltaPlace)}"
            >${g(e.deltaPlace)}</span
          >
        </div>
      </div>
      ${a?s`<p
              data-ffa-tier-up
              class="ffa-tier-up text-sm font-bold text-yellow-400"
            >
              ${n(`ffa_rating.tier_up`,{tier:h(e.tierAfter)})}
            </p>`:o}
      <ofstats-credit></ofstats-credit>`}};r([i({type:String})],T.prototype,`gameId`,void 0),r([i({type:Number})],T.prototype,`lobbyHumans`,void 0),r([i({attribute:!1})],T.prototype,`poll`,void 0),T=r([c(`ffa-rating-panel`)],T);export{y as FFA_RATING_MIN_HUMANS,T as FfaRatingPanel,b as ffaRatingPanelView};