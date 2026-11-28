const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RewardTrack-Busdnj3p.js","./index-BHQpe8wU.js","./vendor-CreOc2dO.js","./rolldown-runtime-BpQH8Ho1.js","./index-C4jrL9Nv.css","./CapIcon-DWYUmxOg.js","./PlutoniumIcon-TjVB4nmC.js"])))=>i.map(i=>d[i]);
import{$ as e,$i as t,B as n,C as r,Cn as i,Ct as a,E as o,Ei as s,Fi as c,Hs as l,J as ee,K as te,Ms as ne,Oi as re,Q as ie,Qt as ae,Rs as oe,Sn as se,Ss as ce,St as le,Ta as u,Vs as ue,Wa as de,Wi as fe,X as pe,Xi as d,Xs as me,Xt as he,Y as ge,Z as _e,Zt as ve,_a as ye,_i as f,_r as be,_t as xe,aa as Se,ac as Ce,ai as we,at as Te,b as Ee,bn as De,bt as Oe,c as ke,ci as Ae,di as p,dt as je,ea as Me,en as Ne,et as Pe,fi as m,ft as Fe,gi as Ie,gt as Le,hr as Re,ht as ze,ir as Be,it as Ve,ji as He,js as Ue,k as We,kr as Ge,li as h,lt as g,mi as _,mt as Ke,nt as qe,on as Je,ot as Ye,pi as v,ps as Xe,pt as Ze,q as Qe,qi as $e,qt as et,ri as tt,rt as nt,s as rt,si as y,sn as it,st as at,tn as ot,tt as st,ui as b,ur as ct,us as x,ut as lt,v as ut,va as dt,vt as ft,wa as pt,wo as S,x as mt,xn as C,xt as ht,yn as w,yt as gt,z as _t}from"./index-BHQpe8wU.js";import"./CopyButton-Dm6FsCUa.js";import{a as vt,c as yt,o as bt,s as xt}from"./OfstatsCredit-C8Z9L052.js";import{t as St}from"./Format-Dhp90E0J.js";import"./CapIcon-DWYUmxOg.js";import"./PlutoniumIcon-TjVB4nmC.js";import{t as T}from"./CurrencyDisplay-5S6Ceh1l.js";import"./LeaderboardTribeTable-BGCtQ6Up.js";import{t as Ct}from"./RewardClaims-Bb7CD36I.js";import{c as wt,l as Tt}from"./CosmeticPreview-DtAVOsm6.js";import{n as Et,r as Dt,t as E}from"./GameStatsModal-DR-4QkVq.js";import{n as Ot,r as kt}from"./LeaderboardModal-DXdOPPIa.js";import{t as At}from"./SignedOutNotice-CnnYfYii.js";import"./ProfileShare-DLU2tRZr.js";function jt(e){return e.mode===ue.FFA||e.mode===void 0&&(e.playerTeams===null||e.playerTeams===void 0)}function Mt(e){if(e.rankedType&&e.rankedType!==`unranked`)return t(`clan_modal.history_type_ranked`,{ranked:e.rankedType});if(jt(e))return t(`clan_modal.history_type_ffa`);let n=e.playerTeams;return n===`Humans Vs Nations`?t(`clan_modal.history_type_hvn`):n===`Duos`||n===`Trios`||n===`Quads`?t(`clan_modal.history_type_${n.toLowerCase()}`):n&&/^\d+$/.test(n)?t(`clan_modal.history_type_n_teams`,{count:Number(n)}):t(`clan_modal.history_type_team`)}var Nt=x(`images/LeaderboardIconRegularWhite.svg`),Pt=x(`images/ReplayRegularIconWhite.svg`),Ft=x(`images/LinkIconWhite.svg`),It=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`public`,labelKey:`account_modal.games_type_public`},{key:`private`,labelKey:`account_modal.games_type_private`},{key:`singleplayer`,labelKey:`account_modal.games_type_singleplayer`}],Lt=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],D=class extends m{constructor(...e){super(...e),this.publicId=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.typeFilter=`all`,this.modeFilter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncToPublicId()}syncToPublicId(){this.cachedState&&this.cachedState.publicId===this.publicId?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.typeFilter=this.cachedState.typeFilter,this.modeFilter=this.cachedState.modeFilter,this.appendFailed=!1,this.loadState=`ok`):this.publicId&&(this.typeFilter=`all`,this.modeFilter=`all`,this.reload())}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}willUpdate(e){let t=e.get(`publicId`);e.has(`publicId`)&&t!==void 0&&t!==this.publicId&&this.syncToPublicId()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setTypeFilter(e){e!==this.typeFilter&&(this.typeFilter=e,this.reload())}setModeFilter(e){e!==this.modeFilter&&(this.modeFilter=e,this.reload())}async load({append:e}){if(!this.publicId)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=e?this.nextCursor??void 0:void 0,r=await ye(this.publicId,{filter:this.modeFilter===`all`?void 0:this.modeFilter,type:this.typeFilter===`all`?void 0:this.typeFilter,cursor:n});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in r){e?this.appendFailed=!0:(this.loadState=`failed`,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...r.results]:r.results,this.nextCursor=r.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{publicId:this.publicId,typeFilter:this.typeFilter,modeFilter:this.modeFilter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}watchReplay(e){this.dispatchEvent(new CustomEvent(`view-game`,{detail:{gameId:e},bubbles:!0,composed:!0}))}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let n=`${S.shareOrigin()}${S.gamePath(e)}`;try{await s(n),d(t(`common.copied`),`green`)}catch{d(t(`common.failed_copy`),`red`)}}render(){return f`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return f`
      <div class="space-y-2">
        ${this.renderFilterRow(It,this.typeFilter,e=>this.setTypeFilter(e))}
        ${this.renderFilterRow(Lt,this.modeFilter,e=>this.setModeFilter(e))}
      </div>
    `}renderFilterRow(e,n,r){return f`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e.map(e=>{let i=n===e.key;return f`
            <button
              type="button"
              role="tab"
              aria-selected=${i}
              @click=${()=>r(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${i?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${t(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?C():this.loadState===`failed`?f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${t(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${t(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${t(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=Dt(this.games),this.groupedFor=this.games),f`
      <div class="space-y-5">
        ${this.grouped.map(e=>f`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5 pointer-events-none"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${Et(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?f`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${t(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?f`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${t(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${t(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:f`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?C():``}
      </div>
    `}renderGameRow(e){let n=null;if(e.map)try{n=Be.getMapData(e.map).webpPath}catch{n=null}let r=e.map?c(e.map)??e.map:null;return f`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${n?f`<div
                class="relative w-full aspect-[30/15] overflow-hidden bg-surface"
              >
                <img
                  src=${n}
                  alt=${r??``}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                ${r?f`<div
                        class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                      >
                        ${r}
                      </div>`:``}
                <div class="absolute top-2 left-2">
                  ${this.renderResultBadge(e)}
                </div>
                <div
                  class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                >
                  ${E(e.start)}
                </div>
              </div>`:``}
        <div
          class=${n?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${t(`game_list.stats`)}
              aria-label=${t(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Nt}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${t(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${t(`common.click_to_copy`)}
              aria-label=${t(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Ft}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${t(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${t(`clan_modal.history_watch_replay`)}
              aria-label=${t(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Pt}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${t(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-2 justify-items-center text-center border-b border-white/5"
        >
          ${this.renderField(t(`account_modal.games_clan_tag`),e.clanTag??`—`)}
          ${this.renderField(t(`account_modal.username_title`),e.username)}
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(t(`clan_modal.history_game_type`),Mt(e))}
          ${n?``:this.renderField(t(`clan_modal.history_map`),r??`—`)}
          ${this.renderField(t(`clan_modal.history_players`),e.totalPlayers===null?`—`:`${e.totalPlayers}`)}
          ${this.renderField(t(`clan_modal.history_duration`),$e(e.durationSeconds))}
          ${e.ffaRating?this.renderFfaRatingField(e.ffaRating):``}
        </div>
      </div>
    `}renderField(e,t){return f`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderFfaRatingField(e){let n=e.after-e.before,r=Math.round(n),i=r>0?`text-green-400`:r<0?`text-red-400`:`text-white/50`;return f`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${t(`ffa_rating.title`)}
        </div>
        <span
          data-ffa-rating-change
          class="text-sm font-bold tabular-nums ${i}"
          title=${`${t(`ffa_rating.result`)} ${xt(e.deltaResult)} · ${t(`ffa_rating.placement`)} ${xt(e.deltaPlace)}`}
          >${xt(n)}</span
        >
        <span data-ffa-rating-expected class="block text-[10px] text-white/50"
          >${t(`ffa_rating.expected`,{pct:vt(e.expected)})}</span
        >
      </div>
    `}renderResultBadge(e){let n,r;return e.result===`victory`?(n=t(`clan_modal.history_result_victory`),r=`text-white bg-green-600 border-green-500`):e.result===`defeat`?(n=t(`clan_modal.history_result_defeat`),r=`text-white bg-red-600 border-red-500`):(n=t(`account_modal.games_result_incomplete`),r=`text-white bg-gray-500 border-gray-400`),f`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${r}"
      >${n}</span
    >`}};y([b()],D.prototype,`publicId`,void 0),y([b({type:Object})],D.prototype,`cachedState`,void 0),y([h()],D.prototype,`games`,void 0),y([h()],D.prototype,`nextCursor`,void 0),y([h()],D.prototype,`loading`,void 0),y([h()],D.prototype,`loadingMore`,void 0),y([h()],D.prototype,`loadState`,void 0),y([h()],D.prototype,`appendFailed`,void 0),y([h()],D.prototype,`typeFilter`,void 0),y([h()],D.prototype,`modeFilter`,void 0),D=y([p(`player-game-history-view`)],D);var Rt={city:1,port:2,fact:3,defp:4,silo:5,saml:6},zt=Object.keys(Rt).sort((e,t)=>Rt[e]-Rt[t]),Bt={city:`unit_type.city`,defp:`unit_type.defense_post`,fact:`unit_type.factory`,port:`unit_type.port`,saml:`unit_type.sam_launcher`,silo:`unit_type.missile_silo`,wshp:`unit_type.warship`,abomb:`unit_type.atom_bomb`,hbomb:`unit_type.hydrogen_bomb`,mirv:`unit_type.mirv`,mirvw:`player_stats_table.unit.mirvw`,trade:`player_stats_table.unit.trade`,trans:`player_stats_table.unit.trans`};function O(e,n,r,i){return f`
    <div class="w-full">
      <div
        class="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2"
      >
        ${t(e)}
      </div>
      <div class="overflow-x-auto rounded-lg border border-white/5 bg-black/20">
        <table class="w-full table-fixed text-sm text-gray-300">
          <thead>
            <tr class="bg-white/5">
              ${i===void 0?_:f`<th
                      class="px-4 py-2 text-left font-semibold text-gray-400"
                    >
                      ${t(i)}
                    </th>`}
              ${n.map(e=>f`
                  <th class="px-3 py-2 text-center font-semibold text-gray-400">
                    ${t(e)}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${r.map(e=>f`
                <tr class="hover:bg-white/5 transition-colors">
                  ${e.label===void 0?_:f`<td
                          class="px-4 py-2 text-left font-medium text-white/80"
                        >
                          ${t(e.label)}
                        </td>`}
                  ${e.values.map(e=>f`
                      <td class="px-3 py-2 text-center text-white/60">
                        ${St(e)}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </div>
  `}var Vt=[`player_stats_table.built`,`player_stats_table.destroyed`,`player_stats_table.captured`,`player_stats_table.lost`],Ht=class extends m{createRenderRoot(){return this}render(){let e=this.stats,t=(e,t)=>e?.[t]??0n,n=(e,n)=>Array.from({length:n},(n,r)=>t(e,r));return f`
      <div class="grid grid-cols-1 gap-6 w-full">
        ${O(`player_stats_table.building_stats`,Vt,zt.map(t=>({label:Bt[t],values:n(e?.units?.[t],4)})),`player_stats_table.building`)}
        ${O(`player_stats_table.warship_stats`,Vt,[{values:n(e?.units?.wshp,4)}])}
        ${O(`player_stats_table.ship_arrivals`,[`player_stats_table.sent`,`player_stats_table.arrived`,`player_stats_table.captured`,`player_stats_table.destroyed`],Ue.map(t=>({label:Bt[t],values:n(e?.boats?.[t],4)})),`player_stats_table.ship_type`)}
        <!-- Launched and Landed count missiles this player fired; Intercepted
        counts incoming missiles their SAMs shot down (bombIntercept credits
        the SAM owner), so the last column is defensive. -->
        ${O(`player_stats_table.nuke_stats`,[`player_stats_table.launched`,`player_stats_table.landed`,`player_stats_table.intercepted`],ne.map(t=>({label:Bt[t],values:n(e?.bombs?.[t],3)})),`player_stats_table.weapon`)}
        ${O(`player_stats_table.attack_stats`,[`player_stats_table.sent`,`player_stats_table.incoming`,`player_stats_table.cancelled`],[{values:n(e?.attacks,3)}])}
        ${O(`player_stats_table.gold_stats`,[`player_stats_table.workers`,`player_stats_table.war`,`player_stats_table.trade`,`player_stats_table.piracy`,`player_stats_table.trains`,`player_stats_table.trains_external`],[{values:n(e?.gold,6)}])}
        ${O(`player_stats_table.diplomacy_stats`,[`player_stats_table.betrayals`],[{values:[e?.betrayals??0n]}])}
      </div>
    `}};y([b({type:Object})],Ht.prototype,`stats`,void 0),Ht=y([p(`player-stats-table`)],Ht);var Ut={cities:`player_stats_tree.stats_cities_per_game`,ports:`player_stats_tree.stats_ports_per_game`,factories:`player_stats_tree.stats_factories_per_game`,defensePosts:`player_stats_tree.stats_defense_posts_per_game`,transports:`player_stats_tree.stats_transports_sent_per_game`,landings:`player_stats_tree.stats_transports_landed_per_game`,tradeArrived:`player_stats_tree.stats_trade_arrived_per_game`,tradeCaptured:`player_stats_tree.stats_trade_captured_per_game`,outgoing:`player_stats_tree.stats_troops_sent_per_game`,incoming:`player_stats_tree.stats_troops_incoming_per_game`,nukes:`player_stats_tree.stats_nukes_launched_per_game`,warships:`player_stats_tree.stats_warships_built_per_game`,tradeGold:`player_stats_tree.stats_trade_gold_per_game`,piracyGold:`player_stats_tree.stats_piracy_gold_per_game`,trainGold:`player_stats_tree.stats_train_gold_per_game`,othersTrainGold:`player_stats_tree.stats_others_train_gold_per_game`},Wt={cities:`player_stats_table.built`,ports:`player_stats_table.built`,factories:`player_stats_table.built`,defensePosts:`player_stats_table.built`,transports:`player_stats_tree.stats_transports_sent_short`,landings:`player_stats_tree.stats_transports_landed_short`,tradeArrived:`player_stats_tree.stats_trade_arrived_short`,tradeCaptured:`player_stats_tree.stats_trade_captured_short`,outgoing:`player_stats_tree.stats_outgoing_short`,incoming:`player_stats_table.incoming`,nukes:`player_stats_table.launched`,warships:`player_stats_table.built`,tradeGold:`player_stats_table.trade`,piracyGold:`player_stats_table.piracy`,trainGold:`player_stats_table.trains`,othersTrainGold:`player_stats_table.trains_external`},Gt=[{heading:`player_stats_tree.stats_group_buildings`,keys:[`cities`,`ports`,`factories`,`defensePosts`]},{heading:`player_stats_tree.stats_group_naval`,keys:[`transports`,`landings`,`tradeArrived`,`tradeCaptured`]},{heading:`player_stats_tree.stats_group_combat`,keys:[`outgoing`,`incoming`,`nukes`,`warships`]},{heading:`player_stats_tree.stats_group_gold`,keys:[`tradeGold`,`piracyGold`,`trainGold`,`othersTrainGold`]}],Kt={city:`images/CityIconWhite.svg`,port:`images/PortIcon.svg`,factory:`images/FactoryIconWhite.svg`,defensePost:`images/ShieldIconWhite.svg`,transport:`images/BoatIconWhite.svg`,tradeShip:`images/TradeShipIconWhite.svg`,troop:`images/SoldierIcon.svg`,nuke:`images/NukeIconWhite.svg`,warship:`images/DestroyerIconWhite.svg`,gold:`images/GoldCoinIcon.svg`},qt=new Set([`troop`]),Jt=`ml-1 inline-block h-[1em] w-[1em] object-contain`,Yt={city:1.1,port:1.11,factory:1.1,warship:1.1,tradeShip:.5,gold:.9,nuke:.9},Xt={cities:`city`,ports:`port`,factories:`factory`,defensePosts:`defensePost`,transports:`transport`,landings:`transport`,tradeArrived:`tradeShip`,tradeCaptured:`tradeShip`,outgoing:`troop`,incoming:`troop`,nukes:`nuke`,warships:`warship`,tradeGold:`gold`,piracyGold:`gold`,trainGold:`gold`,othersTrainGold:`gold`},Zt=`text-emerald-300 border-emerald-400/20`,Qt=`text-blue-300 border-blue-400/20`,$t=`text-rose-300 border-rose-400/20`,en=`text-amber-300 border-amber-400/20`,tn={cities:Zt,ports:Zt,factories:Zt,defensePosts:Zt,transports:Qt,landings:Qt,tradeArrived:Qt,tradeCaptured:Qt,outgoing:$t,incoming:$t,nukes:$t,warships:$t,tradeGold:en,piracyGold:en,trainGold:en,othersTrainGold:en};function k(e,t){if(t<=0n)return`—`;let n=Number(e)/Number(t);return n>=1e3?St(n):n>=10?Math.round(n).toString():n.toFixed(1)}function nn(e){let t=e.total,n=e.stats,r=n?.attacks?.[0]??0n,i=n?.attacks?.[1]??0n,a=n?.gold?.[2]??0n,o=n?.gold?.[3]??0n,s=n?.gold?.[4]??0n,c=n?.gold?.[5]??0n,l=n?.units?.city?.[0]??0n,ee=n?.units?.port?.[0]??0n,te=n?.units?.fact?.[0]??0n,ne=n?.units?.defp?.[0]??0n,re=n?.units?.wshp?.[0]??0n,ie=(n?.bombs?.abomb?.[0]??0n)+(n?.bombs?.hbomb?.[0]??0n)+(n?.bombs?.mirv?.[0]??0n),ae=n?.boats?.trans?.[0]??0n,oe=n?.boats?.trans?.[1]??0n,se=n?.boats?.trade?.[1]??0n,ce=n?.boats?.trade?.[2]??0n,le=e.recentGames??[],u=e.recent?.games??le.length,ue=e.recent?.wins??le.filter(e=>e.won).length;return{winRate:t>0n?`${(Number(e.wins)/Number(t)*100).toFixed(1)}%`:`—`,recentWinRate:u>0?`${(ue/u*100).toFixed(1)}%`:`—`,played:St(t),wins:St(e.wins),losses:St(e.losses),metrics:[{key:`cities`,value:k(l,t)},{key:`ports`,value:k(ee,t)},{key:`factories`,value:k(te,t)},{key:`defensePosts`,value:k(ne,t)},{key:`transports`,value:k(ae,t)},{key:`landings`,value:k(oe,t)},{key:`tradeArrived`,value:k(se,t)},{key:`tradeCaptured`,value:k(ce,t)},{key:`outgoing`,value:k(r,t)},{key:`incoming`,value:k(i,t)},{key:`nukes`,value:k(ie,t)},{key:`warships`,value:k(re,t)},{key:`tradeGold`,value:k(a,t)},{key:`piracyGold`,value:k(o,t)},{key:`trainGold`,value:k(s,t)},{key:`othersTrainGold`,value:k(c,t)}]}}var rn=class extends m{createRenderRoot(){return this}renderMetric(e,n){let r=Wt[e],i=t(Ut[e]),a=Xt[e],o=`transform:scale(${Yt[a]??1})${qt.has(a)?`;filter:invert(1)`:``}`;return f`
      <div
        data-stat=${e}
        title=${i}
        class="min-w-0 rounded-xl border bg-white/5 px-3 py-3 text-center ${tn[e]}"
      >
        <div
          data-label
          aria-hidden="true"
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${t(r)}
        </div>
        <span class="sr-only">${i}</span>
        <div
          class="mt-1 truncate text-2xl font-black leading-none tabular-nums"
        >
          ${n}<img
            data-unit
            src=${x(Kt[a])}
            style=${o}
            alt=""
            aria-hidden="true"
            class="${Jt} align-[-0.1em]"
          /><span data-per-game class="ml-1 text-xs font-semibold text-white/35"
            >${t(`player_stats_tree.stats_per_game_suffix`)}</span
          >
        </div>
      </div>
    `}render(){if(!this.leaf)return f``;let e=nn(this.leaf),n=new Map(e.metrics.map(e=>[e.key,e.value])),r=this.leaf.recent?.games??this.leaf.recentGames?.length??0,i=this.leaf.total>100n&&r>0,a=[{key:`played`,label:`player_stats_tree.stats_played`,value:e.played,tone:`text-blue-300`},{key:`victories`,label:`player_stats_tree.stats_victories`,value:e.wins,tone:`text-emerald-300`},{key:`losses`,label:`player_stats_tree.stats_losses`,value:e.losses,tone:`text-rose-300`}];return f`
      <section
        class="space-y-3"
        aria-label=${t(`player_stats_tree.stats_summary`)}
      >
        <div
          data-win-rate
          class="relative overflow-hidden rounded-xl border border-malibu-blue/25 bg-gradient-to-br from-malibu-blue/15 via-white/5 to-transparent px-4 py-3"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full bg-aquarius/10 blur-2xl"
          ></div>
          <div
            class="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(17rem,20rem)] sm:items-center"
          >
            <!-- Flex, not a 2-col grid: the halves of a grid would each take
            50% of this flexible column, so the two rates drift apart as the
            viewport widens. Flex sizes them to content and keeps the gap
            fixed. -->
            <div class="flex flex-wrap items-start gap-x-8 gap-y-3">
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                >
                  ${t(`player_stats_tree.stats_win_rate`)}
                </div>
                <div
                  class="mt-1 text-3xl font-black leading-none tabular-nums text-emerald-300"
                >
                  ${e.winRate}
                </div>
              </div>
              ${i?f`
                      <div data-last-100>
                        <div
                          class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                        >
                          ${t(`player_stats_tree.stats_last_100`)}
                        </div>
                        <div
                          class="mt-1 text-3xl font-black leading-none tabular-nums text-cyan-300"
                        >
                          ${e.recentWinRate}
                        </div>
                      </div>
                    `:_}
            </div>
            <div
              data-record-group
              class="grid grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-inner shadow-black/20"
            >
              ${a.map((e,n)=>f`
                  <div
                    data-record-stat=${e.key}
                    class="min-w-0 px-2 py-3 text-center ${n===0?``:`border-l border-white/10`}"
                  >
                    <div
                      class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
                      title=${t(e.label)}
                    >
                      ${t(e.label)}
                    </div>
                    <div
                      class="mt-1 truncate text-xl font-black leading-none tabular-nums ${e.tone}"
                    >
                      ${e.value}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <div class="space-y-3">
          ${Gt.map(e=>f`
              <div data-metric-group=${e.heading}>
                <div
                  class="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/45"
                >
                  ${t(e.heading)}
                </div>
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  ${e.keys.map(e=>this.renderMetric(e,n.get(e)??`—`))}
                </div>
              </div>
            `)}
        </div>
      </section>
    `}};y([b({attribute:!1})],rn.prototype,`leaf`,void 0),rn=y([p(`player-stats-summary`)],rn);var an=new Set,on=new Set([3]),A=`all`,sn=[l.Public,l.Private,`Ranked`,l.Singleplayer],j=class extends m{constructor(...e){super(...e),this.selectedType=A,this.selectedMode=A,this.selectedDifficulty=A,this.selectedRankedType=A}get typeNode(){if(!(this.selectedType===A||this.selectedType===`Ranked`))return this.statsTree?.[this.selectedType]}get availableTypes(){return this.statsTree?sn.filter(e=>e===`Ranked`?Object.keys(this.statsTree?.Ranked??{}).length>0:Object.keys(this.statsTree?.[e]??{}).length>0):[]}get availableModes(){return this.typeNode?Xe.filter(e=>this.typeNode?.[e]):[]}get availableRankedTypes(){return this.statsTree?.Ranked?Object.keys(this.statsTree.Ranked).filter(e=>Object.values(me).includes(e)):[]}get availableDifficulties(){if(!this.typeNode||this.selectedType===l.Public)return[];let e=this.selectedMode===A?this.availableModes:[this.selectedMode];return Object.values(oe).filter(t=>e.some(e=>this.typeNode?.[e]?.[t]))}labelForMode(e){return e===ue.FFA?t(`game_mode.ffa`):e===ue.Team?t(`game_mode.teams`):t(`game_mode.hvn`)}labelForType(e){return e===A?t(`player_stats_tree.all`):e===`Ranked`?t(`player_stats_tree.ranked`):e===l.Public?t(`player_stats_tree.public`):e===l.Private?t(`player_stats_tree.private`):t(`player_stats_tree.solo`)}renderFilterRow(e){return f`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e}
      </div>
    `}renderFilterTab(e,t,n,r){return f`
      <button
        type="button"
        role="tab"
        aria-selected=${t}
        title=${r??_}
        @click=${n}
        class="grow basis-20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
      >
        ${e}
      </button>
    `}labelForRankedType(e){switch(e){case me.OneVOne:return t(`player_stats_tree.ranked_1v1`);case me.TwoVTwo:return t(`player_stats_tree.ranked_2v2`);case me.FreeForAll:return t(`player_stats_tree.ranked_ffa`);case me.ClanWars:return t(`player_stats_tree.ranked_clanwars`)}}createRenderRoot(){return this}getSelectedLeaf(){let e;if(e=this.selectedType===A?this.mergeLeaves(this.availableTypes.flatMap(e=>e===`Ranked`?this.getRankedLeaves(A):this.getGameTypeLeaves(e,A,A))):this.selectedType===`Ranked`?this.mergeLeaves(this.getRankedLeaves(this.selectedRankedType)):this.mergeLeaves(this.getGameTypeLeaves(this.selectedType,this.selectedMode,this.selectedType===l.Public?A:this.selectedDifficulty)),!e)return null;let t=this.getSelectedRecentStats();return t?{...e,recent:t}:e}getSelectedRecentStats(){let e=this.statsTree?.recent;if(!e)return;if(this.selectedType===A)return e.all;if(this.selectedType===`Ranked`){let t=e.Ranked;return t?this.selectedRankedType===A?t.all:t[this.selectedRankedType]:void 0}let t=e[this.selectedType];if(!t)return;if(this.selectedMode===A)return this.selectedType===l.Public||this.selectedDifficulty===A?t.all:t[this.selectedDifficulty];let n=t[this.selectedMode];if(n)return this.selectedType===l.Public||this.selectedDifficulty===A?n.all:n[this.selectedDifficulty]}getGameTypeLeaves(e,t,n){let r=this.statsTree?.[e];return r?(t===A?Xe.filter(e=>r[e]):[t]).flatMap(e=>{let t=r[e];return t?(n===A?Object.keys(t).filter(Ce):[n]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}):[]}getRankedLeaves(e){let t=this.statsTree?.Ranked;return t?(e===A?this.availableRankedTypes:[e]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}mergeLeaves(e){let t=this.reduceLeaves(e);if(t===null)return null;let n=e.length===1?e[0].recent:void 0;return n===void 0?t:{...t,recent:n}}reduceLeaves(e){return e.reduce((e,t)=>e?{wins:e.wins+t.wins,losses:e.losses+t.losses,total:e.total+t.total,stats:this.mergeStats(e.stats,t.stats),recentGames:this.mergeRecentGames(e.recentGames,t.recentGames)}:{wins:t.wins,losses:t.losses,total:t.total,stats:this.cloneStats(t.stats),recentGames:this.mergeRecentGames(void 0,t.recentGames)},null)}mergeRecentGames(e,t){if(!e&&!t)return;let n=new Map;for(let r of[...e??[],...t??[]])n.set(r.gameId,r);return[...n.values()].sort((e,t)=>e.gameId===t.gameId?0:e.gameId>t.gameId?-1:1).slice(0,100)}syncSelection(){let e=this.availableTypes;if(this.selectedType!==A&&!e.includes(this.selectedType)&&(this.selectedType=A),this.selectedType===A)return;if(this.selectedType===`Ranked`){let e=this.availableRankedTypes;this.selectedRankedType!==A&&!e.includes(this.selectedRankedType)&&(this.selectedRankedType=A);return}let t=this.availableModes;this.selectedMode!==A&&!t.includes(this.selectedMode)&&(this.selectedMode=A);let n=this.availableDifficulties;this.selectedDifficulty!==A&&!n.includes(this.selectedDifficulty)&&(this.selectedDifficulty=A)}willUpdate(e){e.has(`statsTree`)&&(this.selectedType=A,this.selectedMode=A,this.selectedDifficulty=A,this.selectedRankedType=A),(e.has(`statsTree`)||e.has(`selectedType`)||e.has(`selectedMode`)||e.has(`selectedDifficulty`)||e.has(`selectedRankedType`))&&this.syncSelection()}setGameType(e){this.selectedType!==e&&(this.selectedType=e,this.requestUpdate())}setMode(e){this.selectedMode!==e&&(this.selectedMode=e,this.requestUpdate())}setRankedType(e){this.selectedRankedType!==e&&(this.selectedRankedType=e,this.requestUpdate())}setDifficulty(e){this.selectedDifficulty!==e&&(this.selectedDifficulty=e,this.requestUpdate())}mergeStats(e,t){if(!(!e&&!t))return e?t?{attacks:this.mergeStatArrays(e.attacks,t.attacks,on),betrayals:this.mergeStatValue(e.betrayals,t.betrayals),killedAt:this.mergeStatValue(e.killedAt,t.killedAt),conquests:this.mergeStatArrays(e.conquests,t.conquests),boats:this.mergeStatRecord(e.boats,t.boats),bombs:this.mergeStatRecord(e.bombs,t.bombs),gold:this.mergeStatArrays(e.gold,t.gold),units:this.mergeStatRecord(e.units,t.units)}:this.cloneStats(e):this.cloneStats(t)}mergeStatValue(e,t){if(!(e===void 0&&t===void 0))return(e??0n)+(t??0n)}mergeStatArrays(e,t,n=an){if(!e&&!t)return;let r=Math.max(e?.length??0,t?.length??0),i=[];for(let a=0;a<r;a+=1){let r=e?.[a]??0n,o=t?.[a]??0n;i[a]=n.has(a)?r>o?r:o:r+o}return i}mergeStatRecord(e,t){if(!e&&!t)return;let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=this.mergeStatArrays(e?.[r],t?.[r]);i&&(n[r]=i)}),Object.keys(n).length?n:void 0}cloneStats(e){if(e)return{attacks:e.attacks?[...e.attacks]:void 0,betrayals:e.betrayals,killedAt:e.killedAt,conquests:e.conquests?[...e.conquests]:void 0,boats:e.boats?{...e.boats}:void 0,bombs:e.bombs?{...e.bombs}:void 0,gold:e.gold?[...e.gold]:void 0,units:e.units?{...e.units}:void 0}}render(){let e=this.availableTypes,n=this.availableModes,r=this.availableDifficulties,i=this.availableRankedTypes,a=this.getSelectedLeaf();return f`
      <div class="flex flex-col gap-4">
        <!-- Filters: a type row, then a context-dependent second row (ranked
             type / mode / difficulty), styled like the game-history tab. -->
        <div class="space-y-2">
          ${this.renderFilterRow([this.renderFilterTab(this.labelForType(A),this.selectedType===A,()=>this.setGameType(A)),...e.map(e=>this.renderFilterTab(this.labelForType(e),this.selectedType===e,()=>this.setGameType(e)))])}
          ${this.selectedType===`Ranked`&&i.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(A),this.selectedRankedType===A,()=>this.setRankedType(A)),...i.map(e=>this.renderFilterTab(this.labelForRankedType(e)??``,this.selectedRankedType===e,()=>this.setRankedType(e)))]):_}
          ${n.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(A),this.selectedMode===A,()=>this.setMode(A),t(`player_stats_tree.mode`)),...n.map(e=>this.renderFilterTab(this.labelForMode(e),this.selectedMode===e,()=>this.setMode(e),t(`player_stats_tree.mode`)))]):_}
          ${r.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(A),this.selectedDifficulty===A,()=>this.setDifficulty(A),t(`difficulty.difficulty`)),...r.map(e=>this.renderFilterTab(t(`difficulty.${e.toLowerCase()}`),this.selectedDifficulty===e,()=>this.setDifficulty(e),t(`difficulty.difficulty`)))]):_}
        </div>

        ${a?f`
                <div class="border-t border-white/10">
                  <div class="py-3">
                    <player-stats-summary .leaf=${a}></player-stats-summary>
                  </div>

                  <div class="border-t border-white/10 pt-6">
                    <player-stats-table
                      .stats=${a?.stats??null}
                    ></player-stats-table>
                  </div>
                </div>
              `:f`
                <div
                  class="py-12 text-center text-white/30 italic border border-white/5 rounded-xl bg-white/5"
                >
                  ${t(`player_stats_tree.no_stats`)}
                </div>
              `}
      </div>
    `}};y([b({type:Object})],j.prototype,`statsTree`,void 0),y([h()],j.prototype,`selectedType`,void 0),y([h()],j.prototype,`selectedMode`,void 0),y([h()],j.prototype,`selectedDifficulty`,void 0),y([h()],j.prototype,`selectedRankedType`,void 0),j=y([p(`player-stats-tree-view`)],j);function cn(e){return e===void 0?null:e.elo!==void 0&&e.uncertainty!==void 0&&e.tier!==void 0?{kind:`rated`,rating:e.elo,uncertainty:e.uncertainty,tier:e.tier,...e.peak===void 0?{}:{peak:e.peak}}:e.calibrationGames===void 0?null:{kind:`calibrating`,calibrationGames:e.calibrationGames}}function ln(e){return e==null?null:{kind:`rated`,rating:e.rating,uncertainty:e.uncertainty,tier:e.tier,peak:e.peak}}var un=class extends m{constructor(...e){super(...e),this.rating=null}createRenderRoot(){return this}render(){let e=this.rating;return e===null?_:f`<div
      data-ffa-rating-summary=${e.kind}
      class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-white sm:justify-start"
    >
      <span class="text-xs font-bold uppercase tracking-wide text-white/70"
        >${t(`ffa_rating.title`)}</span
      >
      ${e.kind===`rated`?f`<ffa-tier-badge
                size="md"
                .tier=${e.tier}
              ></ffa-tier-badge>
              <span
                data-ffa-rating-value
                class="text-lg font-bold tabular-nums text-white"
                >${yt(e.rating,e.uncertainty)}</span
              >
              ${e.peak===void 0?_:f`<span
                      data-ffa-rating-peak
                      class="text-xs tabular-nums text-white/60"
                      >${t(`ffa_rating.peak`,{rating:bt(e.peak)})}</span
                    >`}`:f`<ffa-tier-badge
              size="md"
              .calibrationGames=${e.calibrationGames}
            ></ffa-tier-badge>`}
      <ofstats-credit></ofstats-credit>
    </div>`}};y([b({attribute:!1})],un.prototype,`rating`,void 0),un=y([p(`ffa-rating-summary`)],un);var dn=`font-bold text-blue-300 truncate hover:underline`;function fn(e,t){e.dispatchEvent(new CustomEvent(`view-profile`,{detail:{publicId:t},bubbles:!0,composed:!0}))}function M(e,t,n,r=``){return f`<player-name
    class=${r}
    .username=${t}
    .publicId=${n}
    .nameClass=${dn}
    .onNameClick=${()=>fn(e,n)}
  ></player-name>`}var pn=10,mn=90,hn=110,gn=`profile-card-pulse-fade`,_n=`profile-card-gold-ring`,vn=0,yn=[];function bn(){try{return window.self!==window.top}catch{return!0}}function xn(){return!se()&&document.visibilityState!==`hidden`&&!bn()}var N=class extends m{constructor(...e){super(...e),this.patternId=`profile-card-hex-${vn++}`,this.variant=`full`,this.username=``,this.clanTag=null,this.progress=null,this.prestigeable=!1,this.provisional=!1,this.ffaRating=null,this.openKey=void 0,this.intro=!1,this.pulse=null,this.introDecided=!1,this.pulseMeasured=!1,this.onVisibilityChange=()=>{document.visibilityState===`hidden`&&this.stopPulse()},this.onPulseEnd=e=>{let t=this.pulse?.kind===`gold`?_n:gn;e.animationName===t&&this.stopPulse()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),Cn()}disconnectedCallback(){super.disconnectedCallback(),this.stopPulse()}get compact(){return this.variant===`compact`}willUpdate(e){if(super.willUpdate(e),this.introDecided||this.compact||this.progress===null)return;this.introDecided=!0;let t=this.openKey;if(t!==void 0){if(yn.includes(t))return;yn.push(t),yn.length>8&&yn.shift()}this.intro=xn()}updated(e){super.updated(e),!(!this.intro||this.pulseMeasured)&&(this.pulseMeasured=!0,this.startPulse())}async startPulse(){let e=this.querySelector(`[data-profile-card="full"]`);if(e===null)return;let t=e.querySelector(`level-badge`);if(await t?.updateComplete,!this.isConnected||!this.intro)return;let n=e.getBoundingClientRect();if(n.width===0||n.height===0)return;let r=e.offsetWidth>0?e.offsetWidth/n.width:1,i=n.width*r,a=n.height*r,o=t?.getBoundingClientRect(),s=o&&o.width>0?o:n,c=(s.left+s.width/2-n.left)*r,l=(s.top+s.height/2-n.top)*r,ee=Math.max(Math.hypot(c,l),Math.hypot(i-c,l),Math.hypot(c,a-l),Math.hypot(i-c,a-l)),te=this.progress?.legend?`gold`:`blue`;this.pulse={kind:te,cx:Math.round(c),cy:Math.round(l),reach:Math.round(ee+(te===`gold`?hn:mn))},document.addEventListener(`visibilitychange`,this.onVisibilityChange)}stopPulse(){document.removeEventListener(`visibilitychange`,this.onVisibilityChange),this.pulse=null}renderLevelLine(e){let n=this.compact?`text-sm tracking-wider`:`text-lg tracking-widest sm:text-xl`,r=o(e.prestige);return e.legend?f`<div
        data-profile-level-line
        class="bg-gradient-to-r from-yellow-300 via-fuchsia-300 to-yellow-300 bg-clip-text font-black uppercase text-transparent ${n}"
      >
        ${t(`progression.legend`)}
        <span class="text-white/40">·</span>
        ${t(`progression.prestige`,{prestige:r})}
      </div>`:f`<div
      data-profile-level-line
      class="font-black uppercase text-white ${n}"
    >
      ${r>0?f`<span class="text-yellow-300"
                >${t(`progression.prestige`,{prestige:r})}</span
              >
              <span class="text-white/30">·</span>`:_}
      ${t(`progression.level`,{level:e.level})}
    </div>`}renderProvisional(){return this.provisional?f`<div
      data-profile-provisional
      class="mt-0.5 text-xs font-semibold text-amber-200/80"
    >
      ${t(`progression.provisional_label`)}
    </div>`:_}renderBar(e){return f`<div
      data-xp-bar
      class="relative w-full overflow-hidden rounded-sm bg-white/15 ${this.compact?`h-2`:`h-3`}"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round(e*100)}
    >
      <div
        data-xp-bar-fill
        class="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
        style="width: ${e*100}%"
      ></div>
      ${Array.from({length:pn-1},(e,t)=>f`<span
            aria-hidden="true"
            class="absolute top-0 h-full w-[2px] -translate-x-1/2 bg-[#0b1424]"
            style="left: ${(t+1)*100/pn}%"
          ></span>`)}
    </div>`}renderXp(e){let{xpInLevel:n,xpForNext:r}=e,i=n!==void 0&&r!==void 0,a=e.legend?1:We(n??0,r??0),o=this.compact?_:f`<div data-profile-lifetime class="truncate">
          <span
            class="text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
            >${t(`profile_card.lifetime_xp`)}</span
          >
          <span class="ml-1 font-black tabular-nums text-yellow-300"
            >${ut(e.lifetimeXp)}</span
          >
        </div>`;return f`<div class=${this.compact?`mt-1.5`:`mt-3`}>
      ${i?this.renderBar(a):_}
      <div
        class="mt-1 flex items-baseline justify-between gap-3 text-xs ${this.compact?`justify-end`:``}"
      >
        ${o}
        ${i?f`<div
                data-profile-xp
                class="shrink-0 font-semibold tabular-nums text-white/55"
              >
                ${Ee(n,e.legend?0:r)}
              </div>`:_}
      </div>
    </div>`}renderCompactXp(e){let{xpInLevel:t,xpForNext:n}=e;if(t===void 0||n===void 0)return _;let r=e.legend?1:We(t,n);return f`<div class="w-full shrink-0 sm:w-64">
      <div
        data-profile-xp
        class="mb-1.5 text-right text-xs font-semibold tabular-nums text-white/60"
      >
        ${Ee(t,e.legend?0:n)}
      </div>
      ${this.renderBar(r)}
    </div>`}canPrestige(e){return this.prestigeable&&e.canPrestige===!0}renderPrestigeButton(){return f`<button
      type="button"
      data-profile-prestige
      class="profile-prestige-button rounded-xl border border-yellow-300/70 bg-gradient-to-b from-yellow-300 to-amber-500 px-6 py-2.5 text-sm font-black uppercase tracking-widest text-zinc-900 transition-transform hover:-translate-y-0.5"
      @click=${()=>this.dispatchEvent(new CustomEvent(`prestige-request`,{bubbles:!0,composed:!0}))}
    >
      ${t(`prestige.button`)}
    </button>`}renderPattern(e,t,n){return f`<svg
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 h-full w-full ${n.className}"
      style=${n.style??_}
    >
      <defs>
        <pattern
          id=${e}
          width="60"
          height="103.92"
          patternUnits="userSpaceOnUse"
        >
          ${t}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#${e})"></rect>
    </svg>`}hexPath(e,t,n){return Ie`<path
      d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z M30 69.28 L30 103.92"
      fill="none"
      stroke=${e}
      stroke-opacity=${t}
      stroke-width=${n}
    ></path>`}renderBackground(e){return this.renderPattern(this.patternId,e?this.hexPath(`#facc15`,.075,1.5):this.hexPath(`#2dd4bf`,.07,1.5),{className:``})}renderPulse(e){let t=e.kind===`gold`?Ie`${this.hexPath(`#f59e0b`,.25,6)}${this.hexPath(`#fde68a`,.8,1.8)}`:this.hexPath(`#7dd3fc`,.75,2),n=this.renderPattern(`${this.patternId}-pulse`,t,{className:`profile-card-pulse profile-card-pulse-${e.kind}`,style:`--cx: ${e.cx}px; --cy: ${e.cy}px; --reach: ${e.reach}px`});return f`<div
      data-profile-pulse=${e.kind}
      class="pointer-events-none absolute inset-0"
      @animationend=${this.onPulseEnd}
    >
      ${n}
    </div>`}renderBadge(e,t){return f`<div class="relative grid shrink-0 place-items-center">
      <div
        aria-hidden="true"
        class="absolute rounded-full ${this.compact?`-inset-4`:`-inset-8`}"
        style="background: radial-gradient(circle, ${t}55 0%, transparent 70%)"
      ></div>
      <level-badge
        class="relative"
        .level=${e.level}
        .prestige=${e.prestige}
        .legend=${e.legend}
        .size=${this.compact?64:120}
      ></level-badge>
    </div>`}render(){let e=this.progress;if(e===null)return _;let n=mt(e.prestige,e.legend),r=this.clanTag===null?_:f`<span
            data-profile-clan
            class="font-black tracking-wider text-aquarius ${this.compact?`shrink-0 text-sm`:`block text-sm`}"
            >[${this.clanTag}]</span
          >`,{base:i,discriminator:a}=rt(this.username),o=a===null?i:`${i}#${a}`,s=f`<span
      data-profile-name
      class="truncate font-black leading-tight ${this.compact?`text-2xl`:`block text-3xl sm:text-4xl`}"
      title=${o}
      >${ke(this.username,``)}</span
    >`;if(this.compact)return f`<section
        data-profile-card="compact"
        class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1424] to-[#132644] px-5 py-4 text-white"
      >
        ${this.renderBackground(!1)}
        <div
          class="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <div class="flex min-w-0 flex-1 items-center gap-4">
            ${this.renderBadge(e,n)}
            <div class="min-w-0">
              <div class="flex min-w-0 items-baseline gap-2">
                ${r} ${s}
              </div>
              <div class="mt-0.5">${this.renderLevelLine(e)}</div>
              ${this.renderProvisional()}
            </div>
          </div>
          ${this.canPrestige(e)?f`<div class="flex shrink-0 justify-end">
                  ${this.renderPrestigeButton()}
                </div>`:this.renderCompactXp(e)}
        </div>
      </section>`;let c=e.legend;return f`<section
      data-profile-card="full"
      ?data-profile-legend=${c}
      class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1424] to-[#132644] p-5 text-white sm:p-6 ${c?`profile-card-legend`:``} ${this.intro?`profile-card-intro`:``}"
    >
      ${this.renderBackground(c)}
      ${this.pulse===null?_:this.renderPulse(this.pulse)}
      <div
        class="relative flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
      >
        ${this.renderBadge(e,n)}
        <div class="w-full min-w-0 flex-1 text-center sm:text-left">
          ${r} ${s} ${this.renderLevelLine(e)}
          ${this.renderProvisional()} ${this.renderXp(e)}
          ${this.ffaRating===null?_:f`<ffa-rating-summary
                  class="mt-4 block"
                  .rating=${this.ffaRating}
                ></ffa-rating-summary>`}
          ${this.canPrestige(e)?f`<div
                  class="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
                >
                  <span class="text-sm text-yellow-100/80"
                    >${t(`prestige.ready`)}</span
                  >
                  ${this.renderPrestigeButton()}
                </div>`:_}
        </div>
      </div>
    </section>`}};y([b({type:String})],N.prototype,`variant`,void 0),y([b({type:String})],N.prototype,`username`,void 0),y([b({attribute:!1})],N.prototype,`clanTag`,void 0),y([b({attribute:!1})],N.prototype,`progress`,void 0),y([b({type:Boolean})],N.prototype,`prestigeable`,void 0),y([b({type:Boolean})],N.prototype,`provisional`,void 0),y([b({attribute:!1})],N.prototype,`ffaRating`,void 0),y([b({attribute:!1})],N.prototype,`openKey`,void 0),y([h()],N.prototype,`intro`,void 0),y([h()],N.prototype,`pulse`,void 0),N=y([p(`profile-card`)],N);var Sn=`profile-card-styles`;function Cn(){if(document.getElementById(Sn))return;let e=document.createElement(`style`);e.id=Sn,e.textContent=En,document.head.appendChild(e)}var wn=`radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-wave1) - var(--band)),
    rgba(0, 0, 0, 0.35) calc(var(--pc-wave1) - var(--band) * 0.55),
    #000 calc(var(--pc-wave1) - var(--band) * 0.1),
    transparent calc(var(--pc-wave1) + var(--band) * 0.2)),
  radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-wave2) - var(--band) * 0.8),
    rgba(0, 0, 0, 0.45) calc(var(--pc-wave2) - var(--band) * 0.15),
    transparent calc(var(--pc-wave2) + var(--band) * 0.15))`,Tn=`radial-gradient(circle at var(--cx) var(--cy),
    transparent calc(var(--pc-gold) - var(--band)),
    rgba(0, 0, 0, 0.28) calc(var(--pc-gold) - var(--band) * 0.55),
    rgba(0, 0, 0, 0.7) calc(var(--pc-gold) - var(--band) * 0.12),
    transparent calc(var(--pc-gold) + var(--band) * 0.18))`,En=`
@property --pc-wave1 { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --pc-wave2 { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --pc-gold { syntax: "<length>"; inherits: false; initial-value: 0px; }

/* Opening: the badge settles in, the XP bar fills, one sheen crosses. */
.profile-card-intro level-badge {
  animation: profile-card-badge-in 520ms cubic-bezier(0.2, 0.9, 0.3, 1.25) 100ms both;
}
@keyframes profile-card-badge-in {
  from { opacity: 0; transform: scale(0.7); }
}
.profile-card-intro [data-xp-bar-fill] {
  transform-origin: left center;
  animation: profile-card-bar-in 900ms cubic-bezier(0.2, 0.8, 0.2, 1) 250ms both;
}
@keyframes profile-card-bar-in {
  from { transform: scaleX(0); }
}
.profile-card-intro::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.1) 47%,
    rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0.1) 53%, transparent 65%);
  transform: translateX(-100%);
  animation: profile-card-sheen 1100ms ease-out 450ms both;
}
@keyframes profile-card-sheen {
  to { transform: translateX(100%); }
}

/* The pulse layers. */
.profile-card-pulse-blue {
  --band: ${mn}px;
  filter: drop-shadow(0 0 4px #38bdf8);
  -webkit-mask-image: ${wn};
  mask-image: ${wn};
  animation:
    profile-card-wave1 1700ms cubic-bezier(0.3, 0.55, 0.45, 1) 150ms both,
    profile-card-wave2 1700ms cubic-bezier(0.3, 0.55, 0.45, 1) 560ms both,
    ${gn} 2400ms linear both;
}
@keyframes profile-card-wave1 {
  from { --pc-wave1: 0px; }
  to { --pc-wave1: var(--reach); }
}
@keyframes profile-card-wave2 {
  from { --pc-wave2: 0px; }
  to { --pc-wave2: var(--reach); }
}
@keyframes ${gn} {
  0%, 70% { opacity: 1; }
  100% { opacity: 0; }
}
.profile-card-pulse-gold {
  --band: ${hn}px;
  -webkit-mask-image: ${Tn};
  mask-image: ${Tn};
  animation: ${_n} 3600ms cubic-bezier(0.33, 0.5, 0.5, 1) 300ms 8 both;
}
@keyframes ${_n} {
  0% { --pc-gold: 0px; opacity: 0; }
  6% { opacity: 1; }
  70% { opacity: 1; }
  100% { --pc-gold: var(--reach); opacity: 0; }
}

/* A Legend's full card: a thin gold edge and a gold-tinted pattern. */
.profile-card-legend {
  border-color: rgba(250, 204, 21, 0.38);
  box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.12), 0 0 28px rgba(250, 204, 21, 0.1),
    inset 0 0 40px rgba(250, 204, 21, 0.05);
  background-image: linear-gradient(135deg, rgba(250, 204, 21, 0.06), transparent 45%),
    linear-gradient(to bottom right, #0b1424, #132644);
}
/* Its Legend line shimmers once as the card opens. */
.profile-card-legend.profile-card-intro [data-profile-level-line] {
  background-size: 200% 100%;
  animation: profile-card-line-shimmer 2.4s ease-in-out both;
}
@keyframes profile-card-line-shimmer {
  from { background-position: 100% 0; }
  to { background-position: -100% 0; }
}

/* The Prestige button glows on and off: the glow is its own layer, and only
   that layer's opacity animates. */
.profile-prestige-button {
  position: relative;
  box-shadow: 0 0 8px rgba(250, 204, 21, 0.45);
}
.profile-prestige-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 22px rgba(250, 204, 21, 0.9);
  opacity: 0;
  pointer-events: none;
  animation: profile-prestige-glow 1.8s ease-in-out infinite;
}
@keyframes profile-prestige-glow {
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .profile-card-intro level-badge,
  .profile-card-intro [data-xp-bar-fill],
  .profile-card-legend.profile-card-intro [data-profile-level-line],
  .profile-prestige-button::before {
    animation: none;
  }
  .profile-card-intro::after,
  .profile-card-pulse {
    display: none;
  }
}
`;function Dn(e,t){for(let n of e)if(n.cosmetic!==null&&(n.type===`effect`?`effect:${n.key.split(`:`).slice(2).join(`:`)}`:n.key)===t)return n;return null}function On(e){return e.split(`_`).filter(e=>e.length>0).map(e=>e[0].toUpperCase()+e.substring(1)).join(` `)}function kn(e){return e?f`<img
      src=${e}
      alt=""
      class="h-full w-full object-contain"
      draggable="false"
    />`:f`<svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    aria-hidden="true"
  >
    <path
      fill="var(--tier)"
      d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"
    />
  </svg>`}function An(e){let t=e.cosmetic??null;return t===null?null:{name:On(t.name),typeLabel:``,preview:kn(t.url)}}async function jn(e){if((e.cosmetic??null)===null)return null;let t=null;try{t=Dn(Ge(await be(),!1,null),e.flareName)}catch(e){console.warn(`describeFlareCosmetic: catalog unavailable`,e)}return t===null?An(e):{name:wt(t),typeLabel:Tt(t),preview:f`<cosmetic-preview
      class="block h-full w-full"
      .resolved=${t}
      size="card"
    ></cosmetic-preview>`}}var Mn=`rounded-xl border border-white/10 bg-white/5 px-5 py-[18px] mb-4 last:mb-0`,Nn=`text-xs font-bold uppercase tracking-[0.12em] text-white/45`;function Pn(e){let t=new Date(e);return Number.isNaN(t.getTime())?null:t.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function Fn(e){let t=new Map;for(let n of e.prestigeHistory??[])t.has(n.rank)||t.set(n.rank,n.at);let n=[];for(let r=1;r<=o(e.prestige);r++)n.push({rank:r,at:t.get(r)??null});return n}function In(e){let t=o(e.prestige),n=new Map;for(let r of e.milestones??[]){if(!Number.isInteger(r.level)||r.level<1||!Number.isInteger(r.prestige)||r.prestige<0||r.prestige>t)continue;let e=n.get(r.prestige);e===void 0&&(e=new Map,n.set(r.prestige,e)),e.has(r.level)||e.set(r.level,r.at)}let i=(e,t)=>e-t,a=n.get(t)??new Map,s=[{prestige:t,current:!0,slots:[...new Set([...r,...a.keys()])].sort(i).map(t=>{let n=a.get(t)??null;return{level:t,reached:n!==null||e.level>=t,at:n}})}],c=[...n.keys()].filter(e=>e<t).sort((e,t)=>t-e);for(let e of c){let t=n.get(e);s.push({prestige:e,current:!1,slots:[...t.keys()].sort(i).map(e=>({level:e,reached:!0,at:t.get(e)}))})}return s}var Ln=55,Rn=380,zn=2500,Bn=null;function Vn(){return Bn??=ct(()=>import(`./RewardTrack-Busdnj3p.js`),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).catch(e=>{throw Bn=null,e}),Bn}var Hn;function Un(e,t){return e===!1||e.player.publicId!==t?{rewards:null,rewardsFrom:null}:{rewards:e.player.rewards??[],rewardsFrom:e.player.progress??null}}var P=class extends m{constructor(...e){super(...e),this.progress=null,this.publicId=null,this.confirmedLevel=null,this.provisional=!1,this.popKey=void 0,this.loadConfig=Je,this.loadUserMe=pt,this.claim=Se,this.alert=we,this.describeCosmetic=jn,this.loadTrackModule=Vn,this.ready=!1,this.track=null,this.claiming=!1,this.loadedFor=void 0,this.loadToken=0,this.claimToken=0,this.popDecided=!1,this.popping=!1,this.popTimer=null,this.onUserMe=e=>{let t=e.detail,n=this.track;!n?.rewards||t===!1||!t?.player||t.player.publicId===this.publicId&&(this.track={...n,...Un(t,this.publicId)})},this.onScored=e=>{let t=this.track;if(!t?.rewards||Ne(e).length===0||(t.rewardsFrom?.lifetimeXp??0)>=ot(e))return;let n=this.publicId;this.loadOwnAccount(n).then(e=>{this.track!==t||e===!1||(this.track={...t,...Un(e,n)})})}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),Gn(),document.addEventListener(`userMeResponse`,this.onUserMe),document.addEventListener(et,this.onScored),this.claiming&&=!1}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(et,this.onScored),this.claimToken++,this.popTimer!==null&&clearTimeout(this.popTimer),this.popTimer=null,this.endPop()}willUpdate(e){super.willUpdate(e),this.progress!==null&&this.publicId!==this.loadedFor&&(this.loadedFor=this.publicId,this.loadTrack(this.publicId))}async loadTrack(e){let t=++this.loadToken;this.ready=!1,this.track=null;let n=setTimeout(()=>{t===this.loadToken&&(this.ready=!0)},zn),[r,i,a]=await Promise.all([this.loadConfig().catch(()=>!1),this.loadOwnAccount(e),this.loadTrackModule().catch(e=>(console.warn(`ProfileProgression: reward track failed to load`,e),null))]);clearTimeout(n),t===this.loadToken&&(this.track=a!==null&&r!==!1&&a.trackHasRewards(r)?{config:r,...Un(i,e),model:a.rewardTrackModel}:null,this.ready=!0)}trackConfirmedLevel(e){let t=this.track?.rewardsFrom,n=this.confirmedLevel;return!t||t.prestige!==e.prestige?n:t.level<(n??e.level)?t.level:n}async loadOwnAccount(e){if(e===null)return!1;let t=await this.loadUserMe().catch(()=>!1);return t===!1||t.player.publicId!==e?t:(u(),this.loadUserMe().catch(()=>!1))}async claimAll(){let e=this.track,n=this.progress;if(this.claiming||e===null||n===null)return;let r=e.rewards;if(r===null)return;let i=new Set(e.model(n,e.config,r,this.trackConfirmedLevel(n)).claim?.ids??[]),a=r.filter(e=>i.has(e.id));if(a.length===0)return;let o=this.claimToken;this.claiming=!0;try{let n=await Ct(a,{claim:this.claim,stopped:()=>o!==this.claimToken}),i=n.currency,s=new Set(n.claimedIds),c=new Map(n.held.map(e=>[e.id,e.held])),l=n.creditedIds.length<n.claimedIds.length||c.size>0;if(o!==this.claimToken){this.loadedFor=void 0;return}if(s.size>0||c.size>0){let t=r.filter(e=>!s.has(e.id)).map(e=>{let t=c.get(e.id);return t===void 0?e:{...e,held:t}});if(l){let e=await this.loadUserMe().catch(()=>!1);e!==!1&&(t=e.player.rewards??[],i=e.player.currency??i)}this.track===e&&(this.track={...e,rewards:t}),this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:{currency:i,rewards:t},bubbles:!0,composed:!0}))}n.failed&&await this.alert(t(`account_modal.claim_failed`))}finally{o===this.claimToken&&(this.claiming=!1)}}updated(e){super.updated(e),!(!this.ready||this.progress===null)&&(this.popDecided||(this.popDecided=!0,this.startPop()),this.popping&&this.orderPop())}startPop(){let e=this.popKey;if(e!==void 0){if(e===Hn)return;Hn=e}se()||(this.popping=!0,this.classList.add(`pp-anim`),this.popTimer=setTimeout(()=>{this.popTimer=null,this.endPop()},1240))}endPop(){this.popping=!1,this.classList.remove(`pp-anim`)}async orderPop(){let e=this.querySelector(`reward-track`);if(e!==null&&await e.updateComplete,!this.popping)return;let t=[...this.querySelectorAll(`[data-pp]`)];t.forEach((e,t)=>e.style.setProperty(`--i`,String(Math.min(t,12))));let n=this.querySelector(`[data-next-milestone]`),r=n===null?0:Math.min(t.indexOf(n),12);this.style.setProperty(`--ring-delay`,`${Math.max(0,r)*Ln+Rn}ms`)}render(){let e=this.progress;if(e===null||!this.ready)return _;let t=this.track;return f`
      ${t===null?_:f`<reward-track
              .progress=${e}
              .config=${t.config}
              .rewards=${t.rewards}
              .confirmedLevel=${this.trackConfirmedLevel(e)}
              .provisional=${this.provisional}
              .claiming=${this.claiming}
              .describeCosmetic=${this.describeCosmetic}
              @claim-all=${()=>void this.claimAll()}
            ></reward-track>`}
      ${this.renderHistory(e)}
      ${this.renderMilestones(this.confirmedLevel===null?e:{...e,level:this.confirmedLevel})}
    `}renderHistory(e){let n=Fn(e);return f`
      <section class=${Mn} data-prestige-history>
        <h3 class="mb-3.5 ${Nn}">
          ${t(`player_profile.prestige_history`)}
        </h3>
        ${n.length===0?f`<p class="text-sm text-white/50" data-no-prestige data-pp>
                ${t(`player_profile.no_prestige`)}
              </p>`:f`<div class="flex flex-wrap gap-3">
                ${n.map(e=>this.renderPrestigeTile(e))}
              </div>`}
      </section>
    `}renderPrestigeTile(e){let n=e.at===null?null:Pn(e.at);return f`
      <div
        class="flex flex-[1_1_150px] items-center gap-2.5 rounded-[10px] border border-white/[0.06] bg-black/20 px-3.5 py-2.5"
        data-prestige-tile=${e.rank}
        data-pp
      >
        <level-badge
          .level=${1}
          .prestige=${e.rank}
          .size=${36}
        ></level-badge>
        <div class="min-w-0">
          <div class="font-bold text-white">
            ${t(`progression.prestige`,{prestige:e.rank})}
          </div>
          ${n===null?_:f`<div class="text-xs text-white/50" data-date>${n}</div>`}
        </div>
      </div>
    `}renderMilestones(e){return f`
      <section class=${Mn} data-milestones>
        <h3 class="mb-3.5 ${Nn}">
          ${t(`player_profile.milestones`)}
        </h3>
        ${In(e).map(t=>this.renderRun(t,e.legend))}
      </section>
    `}runLabel(e,n){return e.current&&n?t(`player_profile.legend_run`,{prestige:e.prestige}):e.current?e.prestige===0?t(`player_profile.current_run`):t(`player_profile.current_run_prestige`,{prestige:e.prestige}):e.prestige===0?t(`player_profile.first_run`):t(`progression.prestige`,{prestige:e.prestige})}renderRun(e,t){let n=e.current?e.slots.find(e=>!e.reached):void 0;return f`
      <div
        class="mb-4 last:mb-0"
        data-milestone-run=${e.prestige}
        ?data-current-run=${e.current}
      >
        <h4 class="mb-2.5 mt-1 text-sm font-bold text-white" data-pp>
          ${this.runLabel(e,t)}
        </h4>
        <div class="flex flex-wrap gap-2.5">
          ${e.slots.map(r=>this.renderSlot(e.prestige,r,e.current&&t&&r.level===100,r===n))}
        </div>
      </div>
    `}renderSlot(e,n,r,i){let a=n.at===null?null:Pn(n.at),o=n.reached?a:t(`player_profile.milestone_not_yet`);return f`
      <div
        class="flex w-[78px] flex-col items-center gap-1.5 ${n.reached?``:`opacity-30`}"
        data-milestone=${n.level}
        ?data-reached=${n.reached}
        ?data-next-milestone=${i}
        data-pp
      >
        <level-badge
          .level=${n.level}
          .prestige=${e}
          .legend=${r}
          .size=${40}
        ></level-badge>
        ${o===null?_:f`<div
                class="text-center text-[11px] text-white/55"
                data-caption
              >
                ${o}
              </div>`}
      </div>
    `}};y([b({attribute:!1})],P.prototype,`progress`,void 0),y([b({attribute:!1})],P.prototype,`publicId`,void 0),y([b({attribute:!1})],P.prototype,`confirmedLevel`,void 0),y([b({type:Boolean})],P.prototype,`provisional`,void 0),y([b({attribute:!1})],P.prototype,`popKey`,void 0),y([h()],P.prototype,`ready`,void 0),y([h()],P.prototype,`track`,void 0),y([h()],P.prototype,`claiming`,void 0),P=y([p(`profile-progression`)],P);var Wn=`profile-progression-styles`;function Gn(){if(document.getElementById(Wn))return;let e=document.createElement(`style`);e.id=Wn,e.textContent=Kn,document.head.appendChild(e)}var Kn=`
profile-progression.pp-anim [data-pp] {
  animation: pp-pop ${Rn}ms cubic-bezier(0.2, 0.9, 0.3, 1.3) both;
  animation-delay: calc(var(--i, 0) * ${Ln}ms);
}
@keyframes pp-pop {
  from { opacity: 0; transform: translateY(8px) scale(0.8); }
}
profile-progression [data-next-milestone] { opacity: 0.6; }
profile-progression [data-next-milestone] level-badge {
  border-radius: 9999px;
  outline: 2px dashed rgba(250, 204, 21, 0.6);
  outline-offset: 3px;
  animation: pp-breathe 2.4s ease-in-out var(--ring-delay, 0ms) infinite;
}
@keyframes pp-breathe {
  0%, 100% { outline-color: rgba(250, 204, 21, 0.25); }
  50% { outline-color: rgba(250, 204, 21, 0.85); }
}
@media (prefers-reduced-motion: reduce) {
  profile-progression.pp-anim [data-pp],
  profile-progression [data-next-milestone] level-badge { animation: none; }
}
`,qn={0:`pl-1.5`,1:`pl-5`,2:`pl-9`};function Jn(e){switch(e){case`duos`:return t(`clan_modal.history_type_duos`);case`trios`:return t(`clan_modal.history_type_trios`);case`quads`:return t(`clan_modal.history_type_quads`);case`1v1`:return t(`clan_modal.stats_1v1`);default:return t(`clan_modal.stats_team_count`,{count:e})}}function Yn(e){return e.wins>0||e.losses>0}var F=class extends m{constructor(...e){super(...e),this.expandedTotal=!1,this.expandedTeam=!1,this.expandedRanked=!1,this.toggleTotal=()=>{this.expandedTotal=!this.expandedTotal},this.toggleTeam=()=>{this.expandedTeam=!this.expandedTeam},this.toggleRanked=()=>{this.expandedRanked=!this.expandedRanked}}createRenderRoot(){return this}get teamSubKeys(){return a.filter(e=>Yn(this.stats[e]))}get rankedSubKeys(){return le.filter(e=>Yn(this.stats[e]))}setAllExpanded(e){this.expandedTotal=e,this.expandedTeam=e,this.expandedRanked=e}renderRow(e,n,r,i){let a=ur(e,n.wins,n.losses),o=!!i&&!i.disabled,s=f`
      <span
        class="w-3 h-3 shrink-0 flex items-center justify-center text-white/40 transition-transform duration-150
          ${i?.expanded?`rotate-90`:``}"
        aria-hidden="true"
      >
        ${o?f`<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-2.5 h-2.5"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>`:``}
      </span>
    `,c=`${qn[r]} pr-1.5 py-0.5`;if(!i||i.disabled)return f`
        <div class="flex items-center gap-2 ${c}">
          ${s}
          <div class="flex-1 min-w-0">${a}</div>
        </div>
      `;let l=t(i.expanded?`clan_modal.stats_collapse`:`clan_modal.stats_expand`);return f`
      <button
        type="button"
        class="w-full flex items-center gap-2 ${c} text-left rounded-md transition-colors cursor-pointer
          hover:bg-white/10 focus-visible:bg-white/10 focus:outline-none
          ${i.expanded?`bg-white/5`:``}"
        @click=${i.onToggle}
        title=${l}
        aria-expanded=${i.expanded}
      >
        ${s}
        <div class="flex-1 min-w-0">${a}</div>
      </button>
    `}render(){if(!this.stats)return f``;let e=this.teamSubKeys,n=this.rankedSubKeys;return f`
      <div class="space-y-0">
        ${this.renderRow(t(`clan_modal.stats_total`),this.stats.total,0,{expanded:this.expandedTotal,onToggle:this.toggleTotal,disabled:!1})}
        ${this.expandedTotal?f`
                ${this.renderRow(t(`clan_modal.history_type_ffa`),this.stats.ffa,1)}
                ${this.renderRow(t(`clan_modal.stats_team`),this.stats.team,1,{expanded:this.expandedTeam,onToggle:this.toggleTeam,disabled:e.length===0})}
                ${this.expandedTeam?f`${e.map(e=>this.renderRow(Jn(e),this.stats[e],2))}`:``}
                ${this.renderRow(t(`clan_modal.stats_hvn`),this.stats.hvn,1)}
                ${this.renderRow(t(`clan_modal.stats_ranked`),this.stats.ranked,1,{expanded:this.expandedRanked,onToggle:this.toggleRanked,disabled:n.length===0})}
                ${this.expandedRanked?f`${n.map(e=>this.renderRow(Jn(e),this.stats[e],2))}`:``}
              `:``}
      </div>
    `}};y([b({type:Object})],F.prototype,`stats`,void 0),y([h()],F.prototype,`expandedTotal`,void 0),y([h()],F.prototype,`expandedTeam`,void 0),y([h()],F.prototype,`expandedRanked`,void 0),F=y([p(`clan-stats-breakdown`)],F);function Xn(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID();let e=crypto.getRandomValues(new Uint8Array(16));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function Zn(e){return e==="default"?`asc`:`desc`}var Qn=new Map;function I(e){let t=Qn.get(e);return t||(t=new Date(e).toLocaleDateString(),Qn.set(e,t)),t}function $n(e){return t(`clan_modal.role_${e}`)}function er(e){return e===`leader`?f`<span class="text-sm">👑</span>`:e===`officer`?f`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 text-purple-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>`:f`<svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-4 h-4 text-white/40"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>`}function tr(e,t){return f`
    <div class="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
      <div
        class="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1"
      >
        ${e}
      </div>
      <div class="text-white font-bold text-sm truncate">${t}</div>
    </div>
  `}function nr(e,t,n){return f`
    <div class="flex items-center gap-1">
      <button
        @click=${()=>n(1)}
        ?disabled=${e<=1}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &lt;&lt;
      </button>
      <button
        @click=${()=>n(Math.max(1,e-1))}
        ?disabled=${e<=1}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &lt;
      </button>
      <span class="text-xs text-white/50 font-medium px-1">
        ${e} / ${t}
      </span>
      <button
        @click=${()=>n(Math.min(t,e+1))}
        ?disabled=${e>=t}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e>=t?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &gt;
      </button>
      <button
        @click=${()=>n(t)}
        ?disabled=${e>=t}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e>=t?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &gt;&gt;
      </button>
    </div>
  `}function rr(e,t,n){return f`
    <div
      class="flex items-center justify-center gap-1 pt-4 border-t border-white/10"
    >
      ${nr(e,t,n)}
    </div>
  `}function L(e,n,r=`clan_modal.search_members_placeholder`,i){let a=f`
    <div class="relative w-full sm:flex-1 sm:min-w-0">
      <input
        type="text"
        .value=${n}
        @input=${e}
        class="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
        placeholder="${t(r)}"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </div>
  `;return i?f`
    <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
      ${a}${i}
    </div>
  `:f`<div class="mb-3">${a}</div>`}var ir=[{value:`default`,labelKey:`clan_modal.sort_default`},{value:`winsTotal`,labelKey:`clan_modal.sort_total_wins`},{value:`lossesTotal`,labelKey:`clan_modal.sort_total_losses`},{value:`winsFfa`,labelKey:`clan_modal.sort_ffa_wins`},{value:`lossesFfa`,labelKey:`clan_modal.sort_ffa_losses`},{value:`winsTeam`,labelKey:`clan_modal.sort_team_wins`},{value:`lossesTeam`,labelKey:`clan_modal.sort_team_losses`},{value:`winsHvn`,labelKey:`clan_modal.sort_hvn_wins`},{value:`lossesHvn`,labelKey:`clan_modal.sort_hvn_losses`},{value:`winsRanked`,labelKey:`clan_modal.sort_ranked_wins`},{value:`lossesRanked`,labelKey:`clan_modal.sort_ranked_losses`},{value:`wins1v1`,labelKey:`clan_modal.sort_1v1_wins`},{value:`losses1v1`,labelKey:`clan_modal.sort_1v1_losses`},{value:`eloContributed`,labelKey:`clan_modal.sort_elo_contributed`}];function ar(e){return f`
    <span
      class="flex flex-col items-start justify-center gap-[3px] w-4 h-4"
      aria-hidden="true"
    >
      ${(e===`asc`?[`w-1.5`,`w-2.5`,`w-3.5`]:[`w-3.5`,`w-2.5`,`w-1.5`]).map(e=>f`<span class="${e} h-[2px] bg-current rounded-sm"></span>`)}
    </span>
  `}function or(){return f`<span
    data-chevron
    class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
    aria-hidden="true"
  >
    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
        clip-rule="evenodd"
      />
    </svg>
  </span>`}function sr(e,n,r,i){let a=t(n===`asc`?`clan_modal.sort_order_asc`:`clan_modal.sort_order_desc`);return f`
    <div class="flex items-center gap-2 shrink-0">
      <label
        class="text-[10px] font-bold text-white/40 uppercase tracking-wider hidden sm:inline"
      >
        ${t(`clan_modal.sort_by`)}
      </label>
      <div class="relative flex-1 sm:flex-none">
        <select
          aria-label=${t(`clan_modal.sort_by`)}
          @change=${e=>r(e.target.value)}
          class="w-full h-10 appearance-none pl-3 pr-9 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
        >
          ${ir.map(n=>f`
              <option
                value=${n.value}
                ?selected=${n.value===e}
                class="bg-neutral-900"
              >
                ${t(n.labelKey)}
              </option>
            `)}
        </select>
        ${or()}
      </div>
      <button
        type="button"
        @click=${i}
        title=${a}
        aria-label=${a}
        class="h-10 w-10 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all"
      >
        ${ar(n)}
      </button>
    </div>
  `}var cr=[10,25,50];function lr(e,n,r,i,a){let o=Math.ceil(n/r);return n<=cr[0]?``:f`
    <div
      class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10"
    >
      <div class="flex items-center gap-2">
        <span
          class="text-[10px] font-bold text-white/40 uppercase tracking-wider"
        >
          ${t(`clan_modal.per_page`)}
        </span>
        ${cr.map(e=>f`
            <button
              @click=${()=>a(e)}
              class="px-2 py-1 text-xs font-bold rounded-lg transition-all
                ${r===e?`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`:`text-white/40 hover:text-white/70 border border-transparent`}"
            >
              ${e}
            </button>
          `)}
      </div>
      ${nr(e,o,i)}
    </div>
  `}function ur(e,t,n){let r=t+n,i=r>0,a=i?Math.round(t/r*100):0,o=i?t/r*100:0,s=i?100-o:0,c=i?a>=50?`text-green-400`:`text-red-400/90`:`text-white/25`;return f`
    <div class="flex items-center gap-2">
      <span
        class="text-[10px] font-bold uppercase tracking-wider text-white/50 w-14 shrink-0 truncate"
        title=${e}
      >
        ${e}
      </span>
      <div
        class="relative flex-1 h-5 rounded-md overflow-hidden bg-white/5"
        role="img"
        aria-label="${t} wins, ${n} losses"
      >
        <div class="absolute inset-0 flex">
          ${t>0?f`<div
                  class="bg-malibu-blue h-full"
                  style="width:${o}%"
                ></div>`:``}
          ${n>0?f`<div
                  class="bg-red-500 h-full"
                  style="width:${s}%"
                ></div>`:``}
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-[11px] font-bold text-white tabular-nums whitespace-nowrap pointer-events-none"
        >
          <span>${t>0?`${t}W`:``}</span>
          <span>${n>0?`${n}L`:``}</span>
        </div>
      </div>
      <span
        class="text-xs font-bold shrink-0 tabular-nums w-9 text-right ${c}"
      >
        ${i?`${a}%`:`—`}
      </span>
    </div>
  `}function dr(e){return e?f`
    <div class="mt-1.5">
      <clan-stats-breakdown .stats=${e}></clan-stats-breakdown>
    </div>
  `:``}function fr(e){return e.some(Ot)}function pr(e){return e==null?``:f`<span
    data-elo-contributed
    class="text-xs font-bold tabular-nums whitespace-nowrap ${e>0?`text-green-400`:e<0?`text-red-400`:`text-white/50`}"
    title=${t(`clan_modal.elo_contributed_tooltip`)}
    >${t(`clan_modal.elo_contributed`,{elo:e>0?`+${e}`:`${e}`})}</span
  >`}function mr(e,n,r,i=!1){let a=e.publicId===n;return f`
    <div
      class="flex flex-col py-2.5 px-3 rounded-xl border
        ${a?`bg-malibu-blue/10 border-malibu-blue/20`:`bg-white/5 border-white/10`}"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
            ${a?`bg-malibu-blue/20 text-aquarius`:`bg-white/10 text-white/50`}"
        >
          ${er(e.role)}
        </div>
        <div class="flex-1 min-w-0 flex flex-col">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0 flex items-center gap-2">
              ${kt(e,Ot(e),i)}
              ${M(r,e.username,e.publicId,`min-w-0`)}
            </div>
            <div class="flex items-center gap-2 shrink-0">
              ${pr(e.eloContributed)}
              <span
                class="text-white/30 text-[10px] text-right whitespace-nowrap"
                >${t(`clan_modal.joined_date`,{date:I(e.joinedAt)})}</span
              >
            </div>
          </div>
        </div>
      </div>
      ${dr(e.stats)}
    </div>
  `}function hr(e,t){if(!t)return e;let n=t.toLowerCase();return e.filter(e=>e.publicId.toLowerCase().includes(n)||e.role.toLowerCase().includes(n)||(e.username?.toLowerCase().includes(n)??!1))}function gr(e,t){if(!t)return e;let n=t.toLowerCase();return e.filter(e=>e.publicId.toLowerCase().includes(n)||(e.username?.toLowerCase().includes(n)??!1))}function _r(e,n=Date.now()){if(!e)return null;let r=new Date(e).getTime()-n;if(!(r>0))return null;let i=Math.ceil(r/6e4),a=Math.floor(i/60);return a>=24?t(`clan_modal.boost_remaining_days`,{days:Math.floor(a/24),hours:a%24}):t(`clan_modal.boost_remaining`,{hours:a,minutes:i%60})}var R=class extends m{constructor(...e){super(...e),this.clanTag=``,this.bans=[],this.bansTotal=0,this.bansPage=1,this.bansLimit=20,this.memberActionPending=!1,this.loading=!1,this.memberSearch=``,this.memberSearchDebounce=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadBans(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),super.disconnectedCallback()}async loadBans(e,n=!0){n?this.loading=!0:this.memberActionPending=!0;try{let n=await Pe(this.clanTag,e);if(!n){d(t(`clan_modal.error_failed`),`red`);return}if(n.results.length===0&&e>1){await this.loadBans(1,!1);return}this.bans=n.results,this.bansTotal=n.total,this.bansLimit=n.limit,this.bansPage=n.page}finally{n?this.loading=!1:this.memberActionPending=!1}}async handleUnban(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await gt(this.clanTag,e);if(n!==!0){d(t(n.error),`red`);return}this.bans=this.bans.filter(t=>t.publicId!==e),this.bansTotal--,d(t(`clan_modal.member_unbanned`),`green`),this.bans.length===0&&this.bansPage>1&&await this.loadBans(this.bansPage-1,!1)}finally{this.memberActionPending=!1}}}onSearchInput(e){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearch=e.target.value,this.requestUpdate()},200)}render(){if(this.loading)return C();let e=Math.ceil(this.bansTotal/this.bansLimit),n=this.memberSearch?this.bans.filter(e=>{let t=this.memberSearch.toLowerCase();return e.publicId.toLowerCase().includes(t)||(e.username?.toLowerCase().includes(t)??!1)}):this.bans;return f`
      <div>
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
        >
          ${t(`clan_modal.banned_players_count`,{count:this.bansTotal})}
        </div>
        ${L(e=>this.onSearchInput(e),this.memberSearch,`clan_modal.search_members_placeholder`)}
        ${n.length===0?f`<div
                class="flex flex-col items-center justify-center p-12 text-center"
              >
                <p class="text-white/40 text-sm">
                  ${t(`clan_modal.no_bans`)}
                </p>
              </div>`:f`
                <div class="space-y-3">
                  ${n.map(e=>f`
                      <div
                        class="bg-white/5 rounded-xl border border-white/10 p-4 space-y-2"
                      >
                        <div class="flex items-center gap-2">
                          <div
                            class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          </div>
                          ${M(this,e.username,e.publicId)}
                          <span class="text-white/30 text-xs shrink-0"
                            >${t(`clan_modal.banned_by_label`)}</span
                          >
                          ${M(this,e.bannedByUsername,e.bannedBy)}
                          <span class="text-white/30 text-xs shrink-0"
                            >${I(e.createdAt)}</span
                          >
                          <div class="flex-1"></div>
                          <button
                            @click=${()=>this.handleUnban(e.publicId)}
                            ?disabled=${this.memberActionPending}
                            class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none shrink-0"
                          >
                            ${t(`clan_modal.unban`)}
                          </button>
                        </div>
                        ${e.reason?f`<div class="text-white/50 text-xs pl-10">
                                ${t(`clan_modal.ban_reason`,{reason:e.reason})}
                              </div>`:``}
                      </div>
                    `)}
                </div>
                ${e>1?rr(this.bansPage,e,e=>this.loadBans(e,!1)):``}
              `}
      </div>
    `}};y([b()],R.prototype,`clanTag`,void 0),y([h()],R.prototype,`bans`,void 0),y([h()],R.prototype,`bansTotal`,void 0),y([h()],R.prototype,`bansPage`,void 0),y([h()],R.prototype,`bansLimit`,void 0),y([h()],R.prototype,`memberActionPending`,void 0),y([h()],R.prototype,`loading`,void 0),R=y([p(`clan-bans-view`)],R);var z=class extends m{constructor(...e){super(...e),this.pending=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display=`block`}onClick(){this.dispatchEvent(new CustomEvent(`clan-select`,{detail:{tag:this.clan.tag,source:this.source},bubbles:!0,composed:!0}))}renderBadge(){let e=`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0`;return this.clanRole?f`<span class="${e} ${this.clanRole===`leader`?`bg-amber-500/20 text-amber-400 border border-amber-500/30`:`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`}"
        >${$n(this.clanRole)}</span
      >`:this.pending?f`<span
        class="${e} bg-amber-500/20 text-amber-400 border border-amber-500/30"
        >${t(`clan_modal.request_pending`)}</span
      >`:this.clan.isOpen?f`<span
        class="${e} bg-green-500/20 text-green-400 border border-green-500/30"
        >${t(`clan_modal.open`)}</span
      >`:f`<span
      class="${e} bg-red-500/20 text-red-400 border border-red-500/30"
      >${t(`clan_modal.invite_only`)}</span
    >`}render(){let e=this.clan;return f`
      <button
        @click=${()=>this.onClick()}
        class="w-full text-left bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br ${e.isOpen?`from-malibu-blue/20 to-aquarius/20`:`from-amber-500/20 to-orange-500/20`} flex items-center justify-center border border-white/10 shrink-0"
          >
            <span class="text-white font-bold text-sm">${e.tag}</span>
          </div>
          <div class="flex-1 min-w-0">
            <span class="text-white font-bold truncate block"
              >${e.name}</span
            >
            <div
              class="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-white/40"
            >
              <span
                >${t(`clan_modal.member_count`,{count:e.memberCount??0})}</span
              >
              <!-- Balances ride along on the clan payload — no extra request.
                   Renders nothing when the API reported neither. -->
              <currency-display
                compact
                .hard=${e.hardBalance??null}
                .soft=${e.softBalance??null}
              ></currency-display>
            </div>
          </div>
          ${this.clan.boosted?f`<span
                  data-boosted
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 bg-malibu-blue/15 text-aquarius border border-malibu-blue/40 shadow-malibu-blue-pill"
                  >${t(`clan_modal.boosted`)}</span
                >`:``}
          ${this.renderBadge()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};y([b({type:Object})],z.prototype,`clan`,void 0),y([b()],z.prototype,`clanRole`,void 0),y([b({type:Boolean})],z.prototype,`pending`,void 0),y([b()],z.prototype,`source`,void 0),z=y([p(`clan-card`)],z);var vr=[{value:`random`,labelKey:`clan_modal.sort_browse_random`},{value:`memberCount`,labelKey:`clan_modal.sort_browse_members`},{value:`winScore`,labelKey:`clan_modal.sort_browse_win_score`},{value:`winScoreLow`,labelKey:`clan_modal.sort_browse_win_score_low`},{value:`createdAt`,labelKey:`clan_modal.sort_browse_oldest`},{value:`softBalance`,labelKey:`clan_modal.sort_browse_richest`},{value:`name`,labelKey:`clan_modal.sort_browse_name`}],yr=[{value:`all`,labelKey:`clan_modal.filter_browse_all`},{value:`open`,labelKey:`clan_modal.filter_browse_open`},{value:`inviteOnly`,labelKey:`clan_modal.filter_browse_invite_only`}],br=`w-full h-full min-h-10 appearance-none pl-3 pr-9 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm`,B=class extends m{constructor(...e){super(...e),this.myClanRoles=new Map,this.myPendingRequests=[],this.cachedState=null,this.searchQuery=``,this.browseData=null,this.browsePage=1,this.browseSort=`random`,this.browseFilter=`all`,this.loading=!1,this.errorMsg=``,this.searchDebounce=null,this.pinnedBucket=void 0,this.asyncGeneration=0}createRenderRoot(){return this}emitState(){this.dispatchEvent(new CustomEvent(`browse-updated`,{detail:{data:this.browseData,page:this.browsePage,query:this.searchQuery,sort:this.browseSort,filter:this.browseFilter},bubbles:!0,composed:!0}))}async loadBrowse(){let e=++this.asyncGeneration;this.loading=!0,this.errorMsg=``;try{let t=await je(this.searchQuery||void 0,this.browsePage,void 0,this.browseSort,this.pinnedBucket,this.browseFilter);if(e!==this.asyncGeneration)return;if(t===!1)throw Error(`fetch failed`);this.browseData=t,this.pinnedBucket=t.bucket,this.emitState()}catch{if(e!==this.asyncGeneration)return;this.errorMsg=t(`clan_modal.error_loading`)}finally{e===this.asyncGeneration&&(this.loading=!1)}}onSearchInput(e){this.searchQuery=e.target.value,this.searchDebounce&&clearTimeout(this.searchDebounce),this.searchDebounce=setTimeout(()=>{this.browsePage=1,this.pinnedBucket=void 0,this.loadBrowse()},400)}onSortChange(e){this.browseSort=e,this.browsePage=1,this.pinnedBucket=void 0,this.loadBrowse()}onFilterChange(e){this.browseFilter=e,this.browsePage=1,this.pinnedBucket=void 0,this.loadBrowse()}connectedCallback(){super.connectedCallback(),this.cachedState?.data?(this.browseData=this.cachedState.data,this.browsePage=this.cachedState.page,this.searchQuery=this.cachedState.query,this.browseSort=this.cachedState.sort,this.browseFilter=this.cachedState.filter,this.pinnedBucket=this.cachedState.data.bucket):this.loadBrowse()}disconnectedCallback(){this.searchDebounce&&clearTimeout(this.searchDebounce),super.disconnectedCallback()}render(){if(this.loading&&!this.browseData)return C();let e=this.browseData?Math.ceil(this.browseData.total/this.browseData.limit):0,n=new Set(this.myPendingRequests.map(e=>e.tag)),r=(this.browseData?.results??[]).filter(e=>!this.myClanRoles.has(e.tag)),i=(this.browseData?.boostedBlock??[]).filter(e=>!this.myClanRoles.has(e.tag)),a=this.searchQuery.length>=2,o=a&&this.browseSort===`random`?`name`:this.browseSort,s=a?vr.filter(e=>e.value!==`random`):vr;return f`
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row gap-2">
          <div class="relative flex-1">
            <input
              type="text"
              .value=${this.searchQuery}
              @input=${e=>this.onSearchInput(e)}
              class="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
              placeholder="${t(`clan_modal.search_placeholder`)}"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <label
              class="text-[10px] font-bold text-white/40 uppercase tracking-wider hidden sm:inline"
            >
              ${t(`clan_modal.sort_by`)}
            </label>
            <div class="relative flex-1 sm:flex-none h-full">
              <select
                data-browse-sort
                aria-label=${t(`clan_modal.sort_by`)}
                @change=${e=>this.onSortChange(e.target.value)}
                class=${br}
              >
                ${s.map(e=>f`
                    <option
                      value=${e.value}
                      .selected=${e.value===o}
                      class="bg-neutral-900"
                    >
                      ${t(e.labelKey)}
                    </option>
                  `)}
              </select>
              ${or()}
            </div>
            <div class="relative flex-1 sm:flex-none h-full">
              <select
                data-browse-filter
                aria-label=${t(`clan_modal.filter_browse_label`)}
                @change=${e=>this.onFilterChange(e.target.value)}
                class=${br}
              >
                ${yr.map(e=>f`
                    <option
                      value=${e.value}
                      .selected=${e.value===this.browseFilter}
                      class="bg-neutral-900"
                    >
                      ${t(e.labelKey)}
                    </option>
                  `)}
              </select>
              ${or()}
            </div>
          </div>
        </div>

        ${this.errorMsg?f`<p class="text-red-400 text-sm text-center py-4">
                ${this.errorMsg}
              </p>`:``}
        ${i.length>0?f`<section
                data-boosted-block
                class="space-y-3 rounded-2xl border border-malibu-blue/50 bg-malibu-blue/5 shadow-malibu-blue p-3"
              >
                <h3
                  class="text-[10px] font-bold text-aquarius uppercase tracking-wider px-1"
                >
                  ${t(`clan_modal.boosted_clans`)}
                </h3>
                ${i.map(e=>f`<clan-card
                      .clan=${e}
                      source="boosted"
                      ?pending=${n.has(e.tag)}
                    ></clan-card>`)}
              </section>`:``}

        <div class="space-y-3">
          ${r.length===0&&this.browseData?f`<p class="text-white/40 text-sm text-center py-8">
                  ${t(`clan_modal.no_results`)}
                </p>`:r.map(e=>f`<clan-card
                      .clan=${e}
                      ?pending=${n.has(e.tag)}
                    ></clan-card>`)}
        </div>

        ${e>1?f`
                <div class="flex items-center justify-center gap-2 pt-2">
                  <button
                    @click=${()=>{this.browsePage=Math.max(1,this.browsePage-1),this.loadBrowse()}}
                    ?disabled=${this.browsePage<=1}
                    class="px-2 py-1 text-xs font-bold rounded-lg transition-all ${this.browsePage<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
                  >
                    &lt;
                  </button>
                  <span class="text-xs text-white/50 font-medium">
                    ${this.browsePage} / ${e}
                  </span>
                  <button
                    @click=${()=>{this.browsePage=Math.min(e,this.browsePage+1),this.loadBrowse()}}
                    ?disabled=${this.browsePage>=e}
                    class="px-2 py-1 text-xs font-bold rounded-lg transition-all ${this.browsePage>=e?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
                  >
                    &gt;
                  </button>
                </div>
              `:``}
      </div>
    `}};y([b({type:Object})],B.prototype,`myClanRoles`,void 0),y([b({type:Array})],B.prototype,`myPendingRequests`,void 0),y([b({type:Object})],B.prototype,`cachedState`,void 0),y([h()],B.prototype,`searchQuery`,void 0),y([h()],B.prototype,`browseData`,void 0),y([h()],B.prototype,`browsePage`,void 0),y([h()],B.prototype,`browseSort`,void 0),y([h()],B.prototype,`browseFilter`,void 0),y([h()],B.prototype,`loading`,void 0),y([h()],B.prototype,`errorMsg`,void 0),B=y([p(`clan-browse-view`)],B);var xr=3600*1e3,Sr=24*xr;function Cr(e){return e>=Sr&&e%Sr===0?t(`clan_modal.boost_days`,{days:e/Sr}):wr(e)}function wr(e){return t(`clan_modal.boost_hours`,{hours:Math.round(e/xr*10)/10})}var V=class extends m{constructor(...e){super(...e),this.clanTag=``,this.status=null,this.loadFailed=!1,this.selectedTier=null,this.submitting=!1,this.serverError=null,this.tierLocked=!1,this.idempotencyKey=Xn(),this.portal=null,this.previouslyFocused=null,this.onKeydown=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.cancel())}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.previouslyFocused=document.activeElement instanceof HTMLElement?document.activeElement:null,this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeydown,!0),this.loadStatus()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this.onKeydown,!0),this.portal&&=(v(f``,this.portal),this.portal.remove(),null),this.previouslyFocused?.isConnected&&this.previouslyFocused.focus(),this.previouslyFocused=null}focusDialog(){this.updateComplete.then(()=>{(this.portal?.querySelector(`[role="radio"][aria-checked="true"]`)??this.portal?.querySelector(`[role="dialog"]`))?.focus()})}async loadStatus(){let e=await st(this.clanTag);if(this.isConnected){if(e===!1){this.loadFailed=!0,this.focusDialog();return}this.status=e,this.selectedTier=e.tiers[0]?.tier??null,this.focusDialog()}}tier(){return this.status?.tiers.find(e=>e.tier===this.selectedTier)??null}currencyLabel(e){return t(e===`hard`?`cosmetics.hard`:`cosmetics.soft`)}clanBalance(e){return this.status?BigInt(e===`hard`?this.status.hardBalance:this.status.softBalance):0n}blocker(){let e=this.status,n=this.tier();if(!e||!n)return null;let r=e.eligibility;return r.memberCount<r.minMembers?t(`clan_modal.boost_error_not_enough_members`,{min:r.minMembers}):r.recentlyActive?n.currency===`soft`&&e.softLimit.usedMs+n.durationMs>e.softLimit.capMs?t(`clan_modal.boost_error_daily_limit`):BigInt(n.price)>this.clanBalance(n.currency)?t(`clan_modal.boost_error_insufficient_balance`,{currency:this.currencyLabel(n.currency)}):null:t(`clan_modal.boost_error_not_recently_active`)}canSubmit(){return!this.submitting&&this.tier()!==null&&this.blocker()===null}selectTier(e){this.submitting||this.tierLocked||e===this.selectedTier||(this.selectedTier=e,this.serverError=null)}onTierKeydown(e){let t=e.key===`ArrowRight`||e.key===`ArrowDown`?1:e.key===`ArrowLeft`||e.key===`ArrowUp`?-1:0,n=this.status?.tiers??[];if(t===0||n.length===0)return;e.preventDefault();let r=n[(n.findIndex(e=>e.tier===this.selectedTier)+t+n.length)%n.length];this.selectTier(r.tier),this.updateComplete.then(()=>this.portal?.querySelector(`[data-tier="${this.selectedTier}"]`)?.focus())}cancel(){this.submitting||this.dispatchEvent(new CustomEvent(`cancel`))}async submit(){let e=this.tier();if(!(!this.canSubmit()||!e)){this.submitting=!0,this.serverError=null;try{let n=await ge(this.clanTag,e.tier,this.idempotencyKey);if(`error`in n){n.error===`clan_modal.error_network`&&(this.tierLocked=!0),this.serverError=t(n.error,{currency:this.currencyLabel(e.currency),min:this.status?.eligibility.minMembers??0});return}this.dispatchEvent(new CustomEvent(`boosted`,{detail:{endsAt:n.endsAt}}))}finally{this.submitting=!1}}}render(){return this.portal&&v(this.renderOverlay(),this.portal),f``}renderTier(e){let n=e.tier===this.selectedTier;return f`
      <button
        type="button"
        role="radio"
        aria-checked=${n}
        tabindex=${n?0:-1}
        data-tier=${e.tier}
        ?disabled=${this.submitting||this.tierLocked&&!n}
        @click=${()=>this.selectTier(e.tier)}
        class="flex-1 flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all ${n?`bg-malibu-blue/15 border-aquarius/70 ring-2 ring-malibu-blue/40 text-white`:`bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white`} disabled:opacity-50 disabled:pointer-events-none"
      >
        <span class="text-xs font-bold uppercase tracking-wider">
          ${t(`clan_modal.boost_tier_${e.tier}`)}
        </span>
        <span class="text-[11px]">${Cr(e.durationMs)}</span>
        <span class="flex items-center gap-1 text-sm font-bold">
          ${this.currencyIcon(e.currency)}
          ${T(e.price)}
        </span>
      </button>
    `}currencyIcon(e){return e===`hard`?f`<plutonium-icon .size=${14}></plutonium-icon>`:f`<cap-icon .size=${16}></cap-icon>`}balanceLabel(e){return t(`clan_modal.boost_clan_balance`,{balance:`${T(this.clanBalance(e).toString())} ${this.currencyLabel(e)}`})}renderLimitMeter(e){let{usedMs:n,capMs:r}=e.softLimit,i=r>0?Math.min(100,n/r*100):0,a=t(`clan_modal.boost_limit_used`,{used:wr(n),cap:wr(r)});return f`<span
      data-limit-meter
      title=${a}
      aria-label=${a}
      class="flex items-center gap-2 text-white/50"
    >
      <cap-icon .size=${14}></cap-icon>
      <span class="w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <span
          data-limit-fill
          class="block h-full rounded-full bg-aquarius"
          style="width: ${i}%"
        ></span>
      </span>
      ${t(`clan_modal.boost_limit_short`,{used:Math.round(n/xr*10)/10,cap:Math.round(r/xr*10)/10})}
    </span>`}renderBody(){if(this.loadFailed)return f`<p class="text-red-400 text-sm" role="alert">
        ${t(`clan_modal.boost_error_failed`)}
      </p>`;let e=this.status;if(!e)return f`<p class="text-white/40 text-sm">…</p>`;let n=this.tier(),r=_r(e.boostEndsAt),i=this.serverError??this.blocker();return f`
      <div
        role="radiogroup"
        aria-label=${t(`clan_modal.boost_tier_label`)}
        @keydown=${e=>this.onTierKeydown(e)}
        class="flex gap-2 mb-4"
      >
        ${e.tiers.map(e=>this.renderTier(e))}
      </div>

      <div class="flex items-center justify-between gap-3 text-xs">
        ${n?f`<span
                data-clan-balance
                title=${this.balanceLabel(n.currency)}
                aria-label=${this.balanceLabel(n.currency)}
                class="flex items-center gap-1.5 font-bold text-white/80"
              >
                ${this.currencyIcon(n.currency)}
                ${T(this.clanBalance(n.currency).toString())}
              </span>`:f`<span></span>`}
        ${this.renderLimitMeter(e)}
      </div>

      ${r?f`<p
              data-boost-running
              class="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-malibu-blue/15 text-aquarius border border-malibu-blue/40"
            >
              ${t(`clan_modal.boost_time_left`,{remaining:r})}
            </p>`:``}
      ${i?f`<p class="text-red-400 text-xs mt-3" role="alert">${i}</p>`:``}

      <p class="mt-3 text-[11px] text-white/40">
        ${t(`clan_modal.boost_final`)}
      </p>
    `}renderOverlay(){return f`
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="clan-boost-dialog-title"
        tabindex="-1"
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80 focus:outline-none"
        @click=${e=>{e.target===e.currentTarget&&this.cancel()}}
      >
        <!-- A section, not a div: the Halloween theme restyles
             [role="dialog"] > div (translucent purple, orange border), and
             this panel keeps its own look like the donate dialog. -->
        <section
          data-boost-panel
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-malibu-blue/50 bg-surface shadow-2xl"
        >
          <h2
            id="clan-boost-dialog-title"
            class="text-lg font-bold text-white mb-1"
          >
            ${t(`clan_modal.boost_title`,{tag:this.clanTag})}
          </h2>
          <p class="text-white/50 text-xs mb-4">
            ${t(`clan_modal.boost_subtitle`)}
          </p>

          ${this.renderBody()}

          <div class="flex gap-3 mt-5">
            <button
              type="button"
              @click=${()=>this.cancel()}
              ?disabled=${this.submitting}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              ${t(`common.cancel`)}
            </button>
            <button
              type="button"
              data-action="buy-boost"
              @click=${()=>void this.submit()}
              ?disabled=${!this.canSubmit()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all disabled:opacity-50 disabled:pointer-events-none border-0 bg-malibu-blue hover:bg-aquarius"
            >
              ${t(this.submitting?`clan_modal.boost_submitting`:`clan_modal.boost_confirm`)}
            </button>
          </div>
        </section>
      </div>
    `}};y([b()],V.prototype,`clanTag`,void 0),y([h()],V.prototype,`status`,void 0),y([h()],V.prototype,`loadFailed`,void 0),y([h()],V.prototype,`selectedTier`,void 0),y([h()],V.prototype,`submitting`,void 0),y([h()],V.prototype,`serverError`,void 0),y([h()],V.prototype,`tierLocked`,void 0),V=y([p(`clan-boost-dialog`)],V);function Tr(e){return BigInt(Math.trunc(e))}var H=class extends m{constructor(...e){super(...e),this.clanTag=``,this.currencyType=`soft`,this.amountInput=``,this.balances=null,this.submitting=!1,this.serverError=null,this.payouts=`unknown`,this.idempotencyKey=Xn(),this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),this.loadBalances(),this.loadPayoutsStatus()}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(v(f``,this.portal),this.portal.remove(),null)}async loadBalances(){let e=await pt();this.isConnected&&(!e||!e.player.currency||(this.balances=e.player.currency))}async loadPayoutsStatus(){if(!this.clanTag)return;let e=await Ye(this.clanTag,{limit:1});if(this.isConnected){if(`error`in e){e.error===`unavailable`&&(this.payouts=`off`);return}this.payouts=e.status.enabled?`on`:`off`}}currencyLabel(e=this.currencyType){return t(e===`hard`?`cosmetics.hard`:`cosmetics.soft`)}parsedAmount(){let e=this.amountInput.trim();if(!/^\d+$/.test(e))return null;let t=BigInt(e);return t>0n?t:null}exceedsBalance(e){return this.balances?e>Tr(this.balances[this.currencyType]):!1}validationError(){if(this.amountInput.trim()===``)return null;let e=this.parsedAmount();return e===null?t(`clan_modal.donate_invalid_amount`):this.exceedsBalance(e)?t(`clan_modal.donate_insufficient`,{currency:this.currencyLabel()}):null}canSubmit(){let e=this.parsedAmount();return!this.submitting&&e!==null&&!this.exceedsBalance(e)}selectCurrency(e){this.submitting||e===this.currencyType||(this.currencyType=e,this.serverError=null)}onAmountInput(e){this.amountInput=e.target.value,this.serverError=null}cancel(){this.submitting||this.dispatchEvent(new CustomEvent(`cancel`))}async submit(){let n=this.parsedAmount();if(!(!this.canSubmit()||n===null)){this.submitting=!0,this.serverError=null;try{let r=await e(this.clanTag,this.currencyType,n.toString(),this.idempotencyKey);if(r!==!0){this.serverError=t(r.error,{currency:this.currencyLabel()});return}this.dispatchEvent(new CustomEvent(`donated`,{detail:{currencyType:this.currencyType,amount:n.toString()}}))}finally{this.submitting=!1}}}render(){return this.portal&&v(this.renderOverlay(),this.portal),f``}renderCurrencyOption(e){let n=this.currencyType===e,r=this.balances?T(this.balances[e]):null,i=e===`hard`?`bg-green-500/15 border-green-400/70 ring-2 ring-green-400/40 text-white`:`bg-amber-500/15 border-amber-400/70 ring-2 ring-amber-400/40 text-white`;return f`
      <button
        type="button"
        role="radio"
        aria-checked=${n}
        data-currency=${e}
        ?disabled=${this.submitting}
        @click=${()=>this.selectCurrency(e)}
        class="relative flex-1 flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all ${n?i:`bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white`} disabled:opacity-50 disabled:pointer-events-none"
      >
        ${n?f`<span
                data-check
                class="absolute top-1.5 right-1.5 w-4 h-4 rounded-full ${e===`hard`?`bg-green-400`:`bg-amber-400`} text-black flex items-center justify-center"
              >
                <svg
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>`:``}
        <span
          class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
        >
          ${e===`hard`?f`<plutonium-icon .size=${14}></plutonium-icon>`:f`<cap-icon .size=${16}></cap-icon>`}
          ${this.currencyLabel(e)}
        </span>
        <span class="text-[11px] text-white/50">
          ${r===null?`…`:t(`clan_modal.donate_your_balance`,{balance:r})}
        </span>
      </button>
    `}renderOverlay(){let e=this.currencyType===`hard`,n=this.validationError(),r=this.serverError??n,i=this.canSubmit();return f`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.cancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border ${e?`border-red-500/50`:`border-amber-500/50`} bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-1">
            ${t(`clan_modal.donate_title`,{tag:this.clanTag})}
          </h2>
          <p class="text-white/50 text-xs mb-4">
            ${t(`clan_modal.donate_subtitle`)}
          </p>

          <div role="radiogroup" class="flex gap-2 mb-4">
            ${this.renderCurrencyOption(`soft`)}
            ${this.renderCurrencyOption(`hard`)}
          </div>

          <label
            class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
            for="clan-donate-amount"
            >${t(`clan_modal.donate_amount`)}</label
          >
          <input
            id="clan-donate-amount"
            type="text"
            inputmode="numeric"
            autocomplete="off"
            placeholder="0"
            .value=${this.amountInput}
            ?disabled=${this.submitting}
            @input=${e=>this.onAmountInput(e)}
            @keydown=${e=>{e.key===`Enter`&&this.submit()}}
            class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm disabled:opacity-50"
          />
          ${r?f`<p class="text-red-400 text-xs mt-2" role="alert">
                  ${r}
                </p>`:``}

          <div
            class="mt-4 rounded-xl border p-3 text-xs ${e?`border-red-500/40 bg-red-500/10 text-red-300`:`border-amber-500/30 bg-amber-500/10 text-amber-300`}"
          >
            <p class="font-bold">
              ${t(e&&this.payouts!==`off`?`clan_modal.donate_irreversible_payouts`:`clan_modal.donate_irreversible`)}
            </p>
            ${e?f`<p class="mt-1">
                    ${t({on:`clan_modal.donate_irreversible_hard_payouts`,off:`clan_modal.donate_irreversible_hard`,unknown:`clan_modal.donate_irreversible_hard_neutral`}[this.payouts])}
                  </p>`:``}
          </div>

          <div class="flex gap-3 mt-5">
            <button
              type="button"
              @click=${()=>this.cancel()}
              ?disabled=${this.submitting}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              ${t(`common.cancel`)}
            </button>
            <button
              type="button"
              data-action="donate"
              @click=${()=>void this.submit()}
              ?disabled=${!i}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all disabled:opacity-50 disabled:pointer-events-none border-0 ${e?`bg-red-600 hover:bg-red-700`:`bg-amber-600 hover:bg-amber-700`}"
            >
              ${t(this.submitting?`clan_modal.donate_submitting`:`clan_modal.donate`)}
            </button>
          </div>
        </div>
      </div>
    `}};y([b()],H.prototype,`clanTag`,void 0),y([h()],H.prototype,`currencyType`,void 0),y([h()],H.prototype,`amountInput`,void 0),y([h()],H.prototype,`balances`,void 0),y([h()],H.prototype,`submitting`,void 0),y([h()],H.prototype,`serverError`,void 0),y([h()],H.prototype,`payouts`,void 0),H=y([p(`clan-donate-dialog`)],H);var U=class extends m{constructor(...e){super(...e),this.clanTag=``,this.joinSource=void 0,this.myPublicId=null,this.myClanRoles=new Map,this.myPendingRequests=[],this.cachedDetail=null,this.detailTab=`overview`,this.cachedClan=null,this.selectedClan=null,this.discordMeta=null,this.myRole=null,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.memberSort=`default`,this.memberOrder=`asc`,this.pendingRequestCount=0,this.loading=!1,this.actionPending=!1,this.allStatsExpanded=!1,this.membersLoadInFlight=!1,this.memberSearch=``,this.donateOpen=!1,this.boostOpen=!1,this.memberSearchDebounce=null,this.memberLoadSeq=0,this.asyncGeneration=0,this.boostTicker=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.boostTicker=setInterval(()=>{this.selectedClan?.boostEndsAt&&this.requestUpdate()},6e4),this.cachedDetail&&this.cachedDetail.tag===this.clanTag?this.restoreFromCache(this.cachedDetail):this.clanTag&&this.loadDetail()}restoreFromCache(e){this.selectedClan=this.cachedClan,this.members=e.members,this.membersTotal=e.membersTotal,this.pendingRequestCount=e.pendingRequestCount,this.memberPage=1;let t=this.myClanRoles.get(this.clanTag);this.myRole=t??null,this.discordMeta=null,this.cachedClan?.discordUrl&&this.loadDiscordMeta(this.cachedClan.discordUrl,this.clanTag,this.asyncGeneration)}async loadDiscordMeta(e,t,n){let r=await Fe(e);n!==this.asyncGeneration||this.clanTag!==t||(this.discordMeta=r)}disconnectedCallback(){this.boostTicker&&clearInterval(this.boostTicker),this.boostTicker=null,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}updated(){this.allStatsExpanded&&this.querySelectorAll(`clan-stats-breakdown`).forEach(e=>e.setAllExpanded(!0))}async loadDetail(){let e=++this.asyncGeneration;this.memberLoadSeq++,this.loading=!0,this.myRole=null,this.pendingRequestCount=0,this.memberSearch=``;let n=this.detailTab===`members`&&this.myClanRoles.has(this.clanTag),r=qe(this.clanTag);n&&this.loadInitialMembers();let i=await r;if(e===this.asyncGeneration){if(this.loading=!1,!i){d(t(`clan_modal.failed_to_load_clan`),`red`),this.dispatchEvent(new CustomEvent(`navigate-back`,{bubbles:!0,composed:!0}));return}this.selectedClan=i,this.discordMeta=null,i.discordUrl&&this.loadDiscordMeta(i.discordUrl,this.clanTag,e),this.memberPage=1,n||(this.members=[],this.membersTotal=0),this.myRole=this.myClanRoles.get(this.clanTag)??null,this.dispatchEvent(new CustomEvent(`detail-loaded`,{detail:{clan:i,myRole:this.myRole,members:this.members,membersTotal:this.membersTotal,pendingRequestCount:this.pendingRequestCount},bubbles:!0,composed:!0}))}}async loadInitialMembers(){if(this.membersLoadInFlight||!this.clanTag||!this.myClanRoles.has(this.clanTag)||this.members.length>0)return;let e=this.clanTag;this.membersLoadInFlight=!0;try{let t=await g(e,1,this.membersPerPage,this.memberSort,this.memberOrder);if(e!==this.clanTag||!t)return;this.members=t.results,this.membersTotal=t.total,this.pendingRequestCount=t.pendingRequests??0,this.memberPage=1,this.dispatchEvent(new CustomEvent(`members-loaded`,{detail:{members:this.members,membersTotal:this.membersTotal,pendingRequestCount:this.pendingRequestCount},bubbles:!0,composed:!0}))}finally{this.membersLoadInFlight=!1}}willUpdate(e){(e.has(`detailTab`)||e.has(`selectedClan`))&&this.detailTab===`members`&&this.selectedClan&&this.members.length===0&&this.myClanRoles.has(this.clanTag)&&this.loadInitialMembers()}async loadMemberPage(e,t=this.memberSearch){if(!this.selectedClan)return;let n=++this.memberLoadSeq,r=t?await g(this.selectedClan.tag,e,this.membersPerPage,this.memberSort,this.memberOrder,t):await g(this.selectedClan.tag,e,this.membersPerPage,this.memberSort,this.memberOrder);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)&&r){if(r.results.length===0&&e>1){await this.loadMemberPage(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=e,this.pendingRequestCount=r.pendingRequests??0,!t&&this.selectedClan.memberCount!==r.total&&(this.selectedClan={...this.selectedClan,memberCount:r.total})}}onSortChange(e){e!==this.memberSort&&(this.memberSort=e,this.memberOrder=Zn(e),this.loadMemberPage(1))}onOrderToggle(){this.memberOrder=this.memberOrder===`asc`?`desc`:`asc`,this.loadMemberPage(1)}async handleJoin(){if(!(!this.selectedClan||this.actionPending)){this.actionPending=!0;try{let e=await Ze(this.selectedClan.tag,this.joinSource);if(`error`in e){e.error===`clan_modal.sign_in_for_clans`&&window.showPage?.(`page-account`),d(e.reason?t(e.error,{reason:e.reason}):t(e.error),`red`);return}u(),e.status===`joined`?(this.myRole=`member`,await this.loadMemberPage(1),this.dispatchEvent(new CustomEvent(`clan-joined`,{detail:{tag:this.selectedClan.tag},bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent(`request-sent`,{detail:{tag:this.selectedClan.tag,name:this.selectedClan.name},bubbles:!0,composed:!0})),d(t(`clan_modal.join_request_sent`),`green`))}finally{this.actionPending=!1}}}async handleLeave(){if(!(!this.selectedClan||this.actionPending)){this.actionPending=!0;try{let e=await ze(this.selectedClan.tag);if(e!==!0){d(t(e.error),`red`);return}u(),this.dispatchEvent(new CustomEvent(`clan-left`,{detail:{tag:this.selectedClan.tag},bubbles:!0,composed:!0})),d(t(`clan_modal.left_clan`),`green`)}finally{this.actionPending=!1}}}async handleDonated(e){this.donateOpen=!1;let n=this.selectedClan;if(!n)return;let{currencyType:r,amount:i}=e.detail;d(t(`clan_modal.donate_success`,{amount:BigInt(i).toLocaleString(),currency:t(r===`hard`?`cosmetics.hard`:`cosmetics.soft`),tag:n.tag}),`green`),Re();let a=this.asyncGeneration,o=await qe(n.tag);!o||a!==this.asyncGeneration||this.clanTag!==n.tag||this.applyRefreshedClan(o)}async handleBoosted(e){this.boostOpen=!1;let n=this.selectedClan;if(!n)return;d(t(`clan_modal.boost_success`,{tag:n.tag,remaining:_r(e.detail.endsAt)??``}),`green`);let r=this.asyncGeneration,i=await qe(n.tag);!i||r!==this.asyncGeneration||this.clanTag!==n.tag||this.applyRefreshedClan(i)}applyRefreshedClan(e){this.selectedClan=e,this.dispatchEvent(new CustomEvent(`clan-refreshed`,{detail:{clan:e},bubbles:!0,composed:!0}))}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMemberPage(1,t)},200))}render(){if(this.loading)return C();let e=this.selectedClan;if(!e)return``;let n=this.myRole!==null,r=this.myRole===`leader`,i=this.myRole===`officer`,a=r||i,o=this.myPendingRequests.some(t=>t.tag===e.tag);if(this.detailTab===`members`)return n?this.membersLoadInFlight&&this.members.length===0?C():f`
        <div class="space-y-6">
          ${a&&this.pendingRequestCount>0?this.renderRequestsButton():``}
          ${this.renderMembersList()}
        </div>
      `:f`
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/40 text-sm">
              ${t(`clan_modal.members_visible_to_members`)}
            </p>
          </div>
        `;let s=_r(e.boostEndsAt),c=f`
      ${s?f`<div
              data-boost-left
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-malibu-blue/15 text-aquarius border border-malibu-blue/40 shadow-malibu-blue-pill"
            >
              ${t(`clan_modal.boost_time_left`,{remaining:s})}
            </div>`:``}
      <div
        data-clan-actions
        class="grid grid-cols-2 gap-3 [&>:last-child:nth-child(odd)]:col-span-2"
      >
        ${this.renderActionButtons(n,r,i,o,e)}
      </div>
      ${this.donateOpen&&n?f`<clan-donate-dialog
              .clanTag=${e.tag}
              @donated=${e=>void this.handleDonated(e)}
              @cancel=${()=>this.donateOpen=!1}
            ></clan-donate-dialog>`:``}
      ${this.boostOpen&&(r||i)?f`<clan-boost-dialog
              .clanTag=${e.tag}
              @boosted=${e=>void this.handleBoosted(e)}
              @cancel=${()=>this.boostOpen=!1}
            ></clan-boost-dialog>`:``}
    `;return e.discordUrl?f`
        <div class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-5 items-start">
            <div class="sm:col-span-3 flex flex-col gap-4">
              ${this.renderDescriptionCard(e)}
              <div class="grid grid-cols-2 gap-4">
                ${this.renderStatTiles(e)}
              </div>
            </div>
            <div class="sm:col-span-2">
              ${this.renderDiscordCard(e.discordUrl)}
            </div>
          </div>
          ${c}
        </div>
      `:f`
      <div class="space-y-6">
        ${this.renderDescriptionCard(e)}
        <div class="grid grid-cols-2 gap-3">${this.renderStatTiles(e)}</div>
        ${c}
      </div>
    `}renderRequestsButton(){return f`
      <button
        @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-requests`,{bubbles:!0,composed:!0}))}
        class="w-full flex items-center justify-between bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <div class="text-left">
            <span class="text-amber-400 text-sm font-bold">
              ${t(`clan_modal.join_requests`)}
            </span>
            <span class="text-amber-400/60 text-xs block">
              ${t(`clan_modal.pending_requests_count`,{count:this.pendingRequestCount})}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span
            class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            ${this.pendingRequestCount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-amber-400/40 group-hover:text-amber-400/70 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}toggleAllStats(){this.allStatsExpanded=!this.allStatsExpanded;let e=this.allStatsExpanded;this.querySelectorAll(`clan-stats-breakdown`).forEach(t=>t.setAllExpanded(e))}renderMembersList(){let e=hr(this.members,this.memberSearch),n=fr(e),r=t(this.allStatsExpanded?`common.collapse_all`:`common.expand_all`);return f`
      <div class="bg-white/5 rounded-xl border border-white/10 p-5 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${t(`clan_modal.members`)}
          </h3>
          <button
            type="button"
            @click=${()=>this.toggleAllStats()}
            class="text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
            title=${r}
            aria-pressed=${this.allStatsExpanded}
          >
            ${r}
          </button>
        </div>
        ${L(e=>this.onSearchInput(e),this.memberSearch,void 0,sr(this.memberSort,this.memberOrder,e=>this.onSortChange(e),()=>this.onOrderToggle()))}
        <div class="space-y-2">
          ${e.map(e=>mr(e,this.myPublicId,this,n))}
        </div>
        ${lr(this.memberPage,this.membersTotal,this.membersPerPage,e=>this.loadMemberPage(e),e=>{this.membersPerPage=e,this.loadMemberPage(1)})}
      </div>
    `}renderDescriptionCard(e){return f`
      <div class="bg-white/5 rounded-xl border border-white/10 p-5">
        <p class="text-white/70 text-sm">
          ${e.description||t(`clan_modal.no_description`)}
        </p>
      </div>
    `}renderStatTiles(e){return f`
      ${tr(t(`clan_modal.members`),`${e.memberCount??0}`)}
      ${tr(t(`clan_modal.status`),e.isOpen?t(`clan_modal.open`):t(`clan_modal.invite_only`))}
    `}renderDiscordCard(e){let n=this.discordMeta,r=n?.valid===!0,i=n?.serverName??t(`clan_modal.discord_default_name`),a=n?.valid===!1,o=r?n?.bannerUrl??null:null,s=r?n?.description??null:null,c=r&&(typeof n?.onlineCount==`number`||typeof n?.memberCount==`number`);return f`
      <div
        class="h-full flex flex-col rounded-xl border border-[#5865F2]/25 bg-[#5865F2]/10 overflow-hidden"
      >
        ${o?f`<div
                class="relative w-full aspect-video max-h-56 overflow-hidden"
              >
                <img
                  src=${o}
                  alt=""
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                ></div>
              </div>`:``}
        <div class="p-5 flex flex-col flex-1">
          ${o?``:f`<div class="flex items-center gap-2 mb-4">
                  <svg
                    class="w-5 h-5 text-[#5865F2]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                    />
                  </svg>
                  <h3
                    class="text-sm font-bold text-white/60 uppercase tracking-wider"
                  >
                    ${t(`clan_modal.discord_section_title`)}
                  </h3>
                </div>`}
          <div class="flex items-center gap-3.5">
            ${n?.iconUrl?f`<img
                    src=${n.iconUrl}
                    alt=""
                    class="w-12 h-12 rounded-2xl shrink-0 object-cover ring-1 ring-white/10"
                  />`:f`<div
                    class="w-12 h-12 rounded-2xl bg-[#5865F2] flex items-center justify-center shrink-0 text-white text-lg font-bold"
                  >
                    ${i.charAt(0).toUpperCase()}
                  </div>`}
            <div class="min-w-0 flex-1">
              <div class="text-white text-sm font-bold truncate">
                ${i}
              </div>
              ${c?f`<div
                      class="flex items-center gap-1.5 mt-1 text-white/50 text-xs"
                    >
                      <span
                        class="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"
                      ></span>
                      ${t(`clan_modal.discord_online_members`,{online:n?.onlineCount??0,members:n?.memberCount??0})}
                    </div>`:``}
            </div>
          </div>
          ${s?f`<p
                  class="mt-3 text-white/50 text-xs leading-relaxed line-clamp-2"
                >
                  ${s}
                </p>`:``}
          <!-- Grows when the card is stretched taller than its content,
               pinning the button to the bottom (aligned with Manage). -->
          <div class="flex-1"></div>
          ${a?f`<p class="text-amber-400/80 text-xs mt-4">
                  ${t(`clan_modal.discord_invite_unavailable`)}
                </p>`:f`<a
                  href=${e}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white uppercase tracking-wider bg-[#5865F2] hover:bg-[#4752c4] active:bg-[#3c45a5] rounded-xl transition-all shadow-lg shadow-[#5865F2]/20"
                >
                  ${t(`clan_modal.open_discord`)}
                  <svg
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>`}
        </div>
      </div>
    `}renderActionButtons(e,n,r,i,a){let o=[];return!e&&this.myPublicId===null?o.push(f`
        <button
          @click=${()=>window.showPage?.(`page-account`)}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all"
        >
          ${t(`clan_modal.sign_in_to_join`)}
        </button>
      `):!e&&i?o.push(f`
        <button
          disabled
          class="w-full px-4 py-3 text-sm font-bold text-white/40 uppercase tracking-wider bg-white/5 rounded-xl border border-white/10 cursor-not-allowed"
        >
          ${t(`clan_modal.request_pending`)}
        </button>
      `):!e&&a.isOpen?o.push(f`
        <button
          @click=${()=>this.handleJoin()}
          ?disabled=${this.actionPending}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          ${t(`clan_modal.join_clan`)}
        </button>
      `):!e&&!a.isOpen&&o.push(f`
        <button
          @click=${()=>this.handleJoin()}
          ?disabled=${this.actionPending}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r bg-origin-border from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg hover:shadow-amber-900/40 border border-white/5 disabled:opacity-50 disabled:pointer-events-none"
        >
          ${t(`clan_modal.request_invite`)}
        </button>
      `),e&&o.push(f`
        <button
          @click=${()=>this.donateOpen=!0}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r bg-origin-border from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg hover:shadow-amber-900/40 border border-white/5"
        >
          ${t(`clan_modal.donate`)}
        </button>
      `),(n||r)&&(o.push(f`
        <button
          data-action="boost"
          @click=${()=>this.boostOpen=!0}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all"
        >
          ${t(`clan_modal.boost`)}
        </button>
      `),o.push(f`
        <button
          @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-manage`,{bubbles:!0,composed:!0}))}
          class="w-full px-4 py-3 text-sm font-bold text-white uppercase tracking-wider bg-white/10 hover:bg-white/15 rounded-xl transition-all border border-white/10"
        >
          ${t(`clan_modal.manage_clan`)}
        </button>
      `)),e&&!n&&o.push(f`
        <button
          @click=${()=>this.handleLeave()}
          ?disabled=${this.actionPending}
          class="w-full px-4 py-3 text-sm font-bold text-white/70 uppercase tracking-wider bg-red-600/30 hover:bg-red-600/50 rounded-xl transition-all border border-red-500/30 disabled:opacity-50 disabled:pointer-events-none"
        >
          ${t(`clan_modal.leave_clan`)}
        </button>
      `),o}};y([b()],U.prototype,`clanTag`,void 0),y([b()],U.prototype,`joinSource`,void 0),y([b()],U.prototype,`myPublicId`,void 0),y([b({type:Object})],U.prototype,`myClanRoles`,void 0),y([b({type:Array})],U.prototype,`myPendingRequests`,void 0),y([b({type:Object})],U.prototype,`cachedDetail`,void 0),y([b()],U.prototype,`detailTab`,void 0),y([b({type:Object})],U.prototype,`cachedClan`,void 0),y([h()],U.prototype,`selectedClan`,void 0),y([h()],U.prototype,`discordMeta`,void 0),y([h()],U.prototype,`myRole`,void 0),y([h()],U.prototype,`members`,void 0),y([h()],U.prototype,`membersTotal`,void 0),y([h()],U.prototype,`memberPage`,void 0),y([h()],U.prototype,`membersPerPage`,void 0),y([h()],U.prototype,`memberSort`,void 0),y([h()],U.prototype,`memberOrder`,void 0),y([h()],U.prototype,`pendingRequestCount`,void 0),y([h()],U.prototype,`loading`,void 0),y([h()],U.prototype,`actionPending`,void 0),y([h()],U.prototype,`allStatsExpanded`,void 0),y([h()],U.prototype,`membersLoadInFlight`,void 0),y([h()],U.prototype,`memberSearch`,void 0),y([h()],U.prototype,`donateOpen`,void 0),y([h()],U.prototype,`boostOpen`,void 0),U=y([p(`clan-detail-view`)],U);function W(e){return T(e.toString())??`0`}function Er(e){let t=BigInt(e.clanDailyCap)-BigInt(e.clanSentToday);return t>0n?t:0n}function Dr(e,n=Date.now()){if(!e.enabled)return t(`clan_modal.clan_fund_sending_off`);if(e.frozen)return e.frozenReason?t(`clan_modal.clan_fund_frozen_reason`,{reason:e.frozenReason}):t(`clan_modal.clan_fund_frozen`);if(e.leaderEligibleAt&&new Date(e.leaderEligibleAt).getTime()>n)return t(`clan_modal.clan_fund_leader_wait`,{date:E(e.leaderEligibleAt)});if(BigInt(e.hardBalance)<=0n)return t(`clan_modal.clan_fund_empty`);if(Er(e)<=0n){let r=e.capResetsAt?new Date(e.capResetsAt).getTime()-n:0;return t(`clan_modal.clan_fund_cap_reached`,{hours:Math.max(1,Math.ceil(r/36e5))})}return null}function Or(e,n=Date.now()){return Dr(e,n)??(e.canSend?null:t(`clan_modal.clan_fund_cant_send`))}function kr(e,t,n={}){return f`<span
    class="inline-flex items-center gap-1 text-sm font-bold tabular-nums ${n.struck?`line-through text-white/30`:`text-white/70`}"
    ><plutonium-icon .size=${14}></plutonium-icon>${t}${W(e)}</span
  >`}function Ar(e,n,r){return n===null?f`<span class="text-white/40 italic"
        >${t(`clan_modal.donations_deleted_player`)}</span
      >`:f`<span class="min-w-0 inline-flex"
        >${M(e,r,n)}</span
      >`}var jr=`name`;function Mr(e,t){let n=e.indexOf(jr);if(n<0)return f`<span>${e}</span>${t}`;let r=e.slice(0,n).trim(),i=e.slice(n+6).trim();return f`${r?f`<span>${r}</span>`:``}${t}${i?f`<span>${i}</span>`:``}`}function Nr(e,n){if(n.kind===`reversal`)return f`
      <div
        data-transfer-id=${n.id}
        data-kind="reversal"
        class="flex items-center gap-3 py-2.5 px-3 rounded-xl border bg-red-500/5 border-red-500/20"
      >
        <div class="flex-1 min-w-0 flex flex-col gap-0.5">
          <div
            class="flex flex-wrap items-center gap-1.5 text-sm text-white/70"
          >
            ${Mr(t(`clan_modal.payout_reversal`,{name:jr}),Ar(e,n.recipient,n.recipientUsername))}
          </div>
          <span class="text-white/30 text-[10px] whitespace-nowrap">
            ${E(n.createdAt)}${n.reversesCreatedAt?f` ·
                  ${t(`clan_modal.payout_original`,{date:E(n.reversesCreatedAt)})}`:``}
          </span>
        </div>
        <div class="shrink-0 flex flex-col items-end">
          ${kr(n.amount,`+`)}
          <span class="text-[10px] text-white/30"
            >${t(`clan_modal.payout_returned`)}</span
          >
        </div>
      </div>
    `;let r=n.reversedAt!==null;return f`
    <div
      data-transfer-id=${n.id}
      data-kind="transfer"
      ?data-reversed=${r}
      class="flex items-center gap-3 py-2.5 px-3 rounded-xl border bg-white/5 border-white/10"
    >
      <div class="flex-1 min-w-0 flex flex-col gap-0.5">
        <div class="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
          ${Ar(e,n.sender,n.senderUsername)}
          <span class="text-white/30" aria-hidden="true">→</span>
          ${Ar(e,n.recipient,n.recipientUsername)}
          ${r?f`<span
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20"
                  >${t(`clan_modal.payout_reversed`)}</span
                >`:``}
        </div>
        <span class="text-white/30 text-[10px] whitespace-nowrap"
          >${E(n.createdAt)}</span
        >
      </div>
      <div class="shrink-0">
        ${kr(n.amount,`−`,{struck:r})}
      </div>
    </div>
  `}var Pr=[{key:`recent`,labelKey:`clan_modal.donations_recent`},{key:`top`,labelKey:`clan_modal.donations_top`},{key:`payouts`,labelKey:`clan_modal.donations_payouts`}],Fr=[{key:`all`,labelKey:`clan_modal.donations_filter_all`},{key:`soft`,labelKey:`cosmetics.soft`,icon:f`<cap-icon .size=${14}></cap-icon>`},{key:`hard`,labelKey:`cosmetics.hard`,icon:f`<plutonium-icon .size=${14}></plutonium-icon>`}],Ir=[{key:`all`,labelKey:`clan_modal.donations_period_all`},{key:`month`,labelKey:`clan_modal.donations_period_month`},{key:`week`,labelKey:`clan_modal.donations_period_week`}],Lr={1:{icon:`👑`,badge:`bg-yellow-400/10 ring-1 ring-yellow-400/30`,row:`bg-yellow-400/[0.06] border-yellow-400/25`},2:{icon:`🥈`,badge:`bg-slate-400/10 ring-1 ring-slate-400/30`,row:`bg-slate-300/[0.05] border-slate-300/20`},3:{icon:`🥉`,badge:`bg-amber-600/10 ring-1 ring-amber-600/30`,row:`bg-amber-600/[0.06] border-amber-600/25`}},G=class extends m{constructor(...e){super(...e),this.clanTag=``,this.initialMode=`recent`,this.mode=`recent`,this.donations=[],this.donors=[],this.payouts=[],this.payoutStatus=null,this.payoutsAvailable=!1,this.total=0,this.page=1,this.perPage=10,this.filter=`all`,this.period=`all`,this.leaderTotal=0n,this.loading=!1,this.loadState=`ok`,this.asyncGeneration=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.mode=this.initialMode,this.mode===`payouts`&&(this.payoutsAvailable=!0),this.clanTag&&(this.load(),this.mode!==`payouts`&&this.probePayouts())}async probePayouts(){let e=await Ye(this.clanTag,{limit:1});!this.isConnected||`error`in e||(this.payoutStatus=e.status,this.payoutsAvailable=this.payoutsAvailable||e.status.enabled||e.total>0)}async load(){if(!this.clanTag)return;let e=++this.asyncGeneration;if(this.loading=!0,this.loadState=`ok`,this.mode===`payouts`){let t=await Ye(this.clanTag,{page:this.page,limit:this.perPage});if(e!==this.asyncGeneration)return;if(`error`in t){this.applyResult({error:t.error===`forbidden`?`forbidden`:`failed`},()=>{});return}this.payoutStatus=t.status,this.applyResult(t,e=>this.payouts=e)}else if(this.mode===`top`){let t=await nt(this.clanTag,{currencyType:this.filter===`hard`?`hard`:`soft`,period:this.period,page:this.page,limit:this.perPage});if(e!==this.asyncGeneration)return;this.applyResult(t,e=>{this.donors=e,this.page===1&&(this.leaderTotal=BigInt(e[0]?.total??0))})}else{let t=await Ve(this.clanTag,{page:this.page,limit:this.perPage,currencyType:this.filter===`all`?void 0:this.filter});if(e!==this.asyncGeneration)return;this.applyResult(t,e=>this.donations=e)}}applyResult(e,t){if(this.loading=!1,this.donations=[],this.donors=[],this.payouts=[],`error`in e){this.loadState=e.error,this.total=0;return}t(e.results),this.total=e.total}setMode(e){e!==this.mode&&(this.mode=e,e===`top`&&this.filter===`all`&&(this.filter=`soft`),this.page=1,this.load())}setFilter(e){e!==this.filter&&(this.filter=e,this.page=1,this.load())}setPeriod(e){e!==this.period&&(this.period=e,this.page=1,this.load())}setPage(e){e!==this.page&&(this.page=e,this.load())}setPerPage(e){e!==this.perPage&&(this.perPage=e,this.page=1,this.load())}render(){if(this.loadState===`forbidden`)return f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${t(`clan_modal.donations_members_only`)}
          </p>
        </div>
      `;let e=this.mode===`top`,n=this.payoutsAvailable?Pr:Pr.filter(e=>e.key!==`payouts`);return f`<div class="space-y-3">
      ${this.renderTabs(n,this.mode,e=>this.setMode(e),`mode`)}
      ${this.mode===`payouts`?this.renderPayoutsHeader():this.renderFilters(e)}
      ${this.renderBody()}
    </div>`}renderPayoutsHeader(){return this.payoutStatus?.frozen?f`<div
        role="status"
        data-payouts-frozen
        class="bg-amber-500/10 rounded-xl border border-amber-500/20 p-3 text-amber-300 text-xs"
      >
        ${t(`clan_modal.clan_fund_frozen`)}
      </div>`:f`<p class="text-white/40 text-xs">
      ${t(`clan_modal.payouts_explainer`)}
    </p>`}renderFilters(e){return f`
      <div class="flex flex-wrap items-center justify-between gap-2">
        ${this.renderTabs(e?Fr.filter(e=>e.key!==`all`):Fr,this.filter,e=>this.setFilter(e),`currency`,!0)}
        ${e?this.renderTabs(Ir,this.period,e=>this.setPeriod(e),`period`,!0):null}
      </div>
    `}renderTabs(e,n,r,i,a=!1){return f`
      <div
        role="tablist"
        data-tabs=${i}
        class="${a?`inline-flex`:`flex`} gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e.map(e=>{let i=n===e.key;return f`
            <button
              type="button"
              role="tab"
              aria-selected=${i}
              data-tab=${e.key}
              @click=${()=>r(e.key)}
              class="${a?``:`flex-1`} inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${i?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${e.icon??null}${t(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){if(this.loading)return C();if(this.loadState===`failed`)return f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${t(`clan_modal.donations_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${t(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `;let e=this.mode===`top`;return(this.mode===`payouts`?this.payouts:e?this.donors:this.donations).length===0?f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${t(this.mode===`payouts`?`clan_modal.payouts_empty`:e?`clan_modal.donations_top_empty`:`clan_modal.donations_empty`)}
          </p>
        </div>
      `:f`
      <div class="space-y-2">
        ${this.mode===`payouts`?this.payouts.map(e=>Nr(this,e)):e?this.donors.map(e=>this.renderDonorRow(e)):this.donations.map(e=>this.renderRow(e))}
      </div>
      ${lr(this.page,this.total,this.perPage,e=>this.setPage(e),e=>this.setPerPage(e))}
    `}renderRow(e){let n=e.currencyType===`hard`;return f`
      <div
        data-donation-id=${e.id}
        class="flex items-center gap-3 py-2.5 px-3 rounded-xl border bg-white/5 border-white/10"
      >
        <div class="flex-1 min-w-0 flex flex-col">
          ${e.createdBy===null?f`<span class="text-sm text-white/40 italic"
                  >${t(`clan_modal.donations_deleted_player`)}</span
                >`:f`<div class="min-w-0">
                  ${M(this,e.createdByUsername,e.createdBy)}
                </div>`}
          <span class="text-white/30 text-[10px] whitespace-nowrap"
            >${E(e.createdAt)}</span
          >
        </div>
        <currency-display
          class="shrink-0"
          .hard=${n?e.amount:null}
          .soft=${n?null:e.amount}
        ></currency-display>
      </div>
    `}renderDonorRow(e){let n=this.filter===`hard`,r=Lr[e.rank],i=BigInt(e.total),a=this.leaderTotal>0n?Math.min(100,Number(i*1000n/this.leaderTotal)/10):0;return f`
      <div
        data-donor-id=${e.playerId}
        data-rank=${e.rank}
        class="flex items-center gap-3 py-2.5 px-3 rounded-xl border ${r?.row??`bg-white/5 border-white/10`}"
      >
        <span
          class="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg font-bold tabular-nums ${r?`text-lg ${r.badge}`:`text-sm text-white/40 bg-white/5`}"
          >${r?.icon??e.rank}</span
        >
        <div class="flex-1 min-w-0 flex flex-col gap-1">
          <div class="flex items-baseline justify-between gap-3 min-w-0">
            <div class="min-w-0">
              ${M(this,e.username,e.playerId)}
            </div>
            <currency-display
              class="shrink-0"
              .hard=${n?e.total:null}
              .soft=${n?null:e.total}
            ></currency-display>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
              <div
                data-share
                class="h-full rounded-full ${n?`bg-green-400/60`:`bg-amber-600/70`}"
                style="width: ${a}%"
              ></div>
            </div>
            <span class="shrink-0 text-white/30 text-[10px] whitespace-nowrap"
              >${t(`clan_modal.donations_count`,{count:e.donations})}</span
            >
          </div>
        </div>
      </div>
    `}};y([b()],G.prototype,`clanTag`,void 0),y([b()],G.prototype,`initialMode`,void 0),y([h()],G.prototype,`mode`,void 0),y([h()],G.prototype,`donations`,void 0),y([h()],G.prototype,`donors`,void 0),y([h()],G.prototype,`payouts`,void 0),y([h()],G.prototype,`payoutStatus`,void 0),y([h()],G.prototype,`payoutsAvailable`,void 0),y([h()],G.prototype,`total`,void 0),y([h()],G.prototype,`page`,void 0),y([h()],G.prototype,`perPage`,void 0),y([h()],G.prototype,`filter`,void 0),y([h()],G.prototype,`period`,void 0),y([h()],G.prototype,`loading`,void 0),y([h()],G.prototype,`loadState`,void 0),G=y([p(`clan-donations-view`)],G);var Rr=3,zr=5*6e4,K=class extends m{constructor(...e){super(...e),this.clanTag=``,this.myRole=null,this.status=null,this.recent=[],this.visible=!1,this.capTimer=null,this.capRetries=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.load()}willUpdate(){this.style.display=this.visible&&this.status?`block`:`none`}disconnectedCallback(){this.clearCapTimer(),super.disconnectedCallback()}clearCapTimer(){this.capTimer&&clearTimeout(this.capTimer),this.capTimer=null}nextBackoff(){let e=1e3*(1<<Math.min(this.capRetries,9));return this.capRetries++,Math.min(e,zr)}async load(e=!1){if(!this.clanTag)return;let t=await Ye(this.clanTag,{limit:Rr});if(this.isConnected){if(`error`in t){e&&this.setCapTimer(this.nextBackoff());return}this.status=t.status,this.recent=t.results,this.visible=t.status.enabled||t.total>0,this.scheduleCapReload(t.status)}}reloadTimes(e){if(!e.enabled)return[];let t=[];return e.capResetsAt&&Er(e)<=0n&&t.push(new Date(e.capResetsAt).getTime()),this.myRole===`leader`&&!e.canSend&&!e.frozen&&e.leaderEligibleAt&&t.push(new Date(e.leaderEligibleAt).getTime()),t.filter(e=>!Number.isNaN(e))}scheduleCapReload(e){this.clearCapTimer();let t=this.reloadTimes(e);if(t.length===0){this.capRetries=0;return}let n=Math.min(...t)-Date.now();if(n<=0){this.setCapTimer(this.nextBackoff());return}this.capRetries=0,this.setCapTimer(Math.min(n+1e3,24*36e5))}setCapTimer(e){this.clearCapTimer(),this.capTimer=setTimeout(()=>{this.capTimer=null,this.load(!0)},e)}emit(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}render(){let e=this.status;if(!this.visible||!e)return f``;let n=BigInt(e.clanDailyCap),r=BigInt(e.clanSentToday),i=n>0n?Math.min(100,Number(r*1000n/n)/10):0,a=this.myRole===`leader`,o=a?Or(e):Dr(e);return f`
      <div
        data-clan-fund-card
        class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4"
      >
        <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
          ${t(`clan_modal.clan_fund`)}
        </h3>

        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <plutonium-icon .size=${24}></plutonium-icon>
              <span
                data-fund-balance
                class="text-3xl font-bold text-white tabular-nums"
                >${W(e.hardBalance)}</span
              >
            </div>
            <p class="text-white/40 text-xs mt-1">
              ${t(`clan_modal.clan_fund_balance_label`)}
            </p>
          </div>
          <div class="flex-1 min-w-[180px] max-w-xs">
            <div class="flex justify-between text-xs text-white/50 mb-1.5">
              <span>${t(`clan_modal.clan_fund_sent_today`)}</span>
              <span data-sent-today class="tabular-nums"
                >${W(r)} / ${W(n)}</span
              >
            </div>
            <div class="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                class="h-full rounded-full ${i>=100?`bg-amber-400/70`:`bg-white/40`}"
                style="width: ${i}%"
              ></div>
            </div>
          </div>
        </div>

        ${o?f`<div
                data-fund-notice
                role="status"
                class="bg-amber-500/10 rounded-xl border border-amber-500/20 p-3 text-amber-300 text-sm"
              >
                ${o}
              </div>`:``}
        ${a?f`<button
                type="button"
                data-action="open-send-funds"
                ?disabled=${!e.canSend||o!==null}
                @click=${()=>this.emit(`navigate-send-funds`)}
                class="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-white/10 hover:bg-white/15 rounded-xl transition-all border border-white/10 disabled:opacity-40 disabled:pointer-events-none"
              >
                <plutonium-icon .size=${16}></plutonium-icon>
                ${t(`clan_modal.send_funds`)}
              </button>`:f`<p class="text-white/40 text-xs">
                ${t(`clan_modal.clan_fund_officer_note`)}
              </p>`}

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span
              class="text-[10px] font-bold text-white/40 uppercase tracking-wider"
              >${t(`clan_modal.clan_fund_recent`)}</span
            >
            <button
              type="button"
              data-action="view-payouts"
              @click=${()=>this.emit(`navigate-payouts`)}
              class="text-xs text-aquarius hover:underline"
            >
              ${t(`clan_modal.clan_fund_view_log`)}
            </button>
          </div>
          ${this.recent.length===0?f`<p class="text-white/30 text-xs">
                  ${t(`clan_modal.clan_fund_no_payouts`)}
                </p>`:this.recent.map(e=>Nr(this,e))}
        </div>
      </div>
    `}};y([b()],K.prototype,`clanTag`,void 0),y([b()],K.prototype,`myRole`,void 0),y([h()],K.prototype,`status`,void 0),y([h()],K.prototype,`recent`,void 0),y([h()],K.prototype,`visible`,void 0),K=y([p(`clan-fund-card`)],K);var Br=[100n,500n,1000n],Vr=1440*60*1e3,Hr=(...e)=>e.reduce((e,t)=>e<t?e:t),Ur=`clanFundSendKey:`,Wr=new Map,Gr={get(e){try{let t=sessionStorage.getItem(Ur+e);if(t)return t}catch{}return Wr.get(e)},set(e,t){Wr.set(e,t);try{sessionStorage.setItem(Ur+e,t)}catch{}},delete(e){Wr.delete(e);try{sessionStorage.removeItem(Ur+e)}catch{}}};function Kr(e,t){Gr.get(e)===t&&Gr.delete(e)}var q=class extends m{constructor(...e){super(...e),this.clanTag=``,this.myPublicId=null,this.status=null,this.statusReloading=!1,this.limitsFailed=!1,this.statusFailed=!1,this.members=[],this.eligibility=new Map,this.membersTotal=0,this.membersFailed=null,this.membersLoading=!1,this.memberPage=1,this.memberSearch=``,this.loading=!0,this.recipient=null,this.amountInput=``,this.confirming=!1,this.submitting=!1,this.serverError=null,this.membersPerPage=10,this.idempotencyKey=``,this.searchDebounce=null,this.loadSeq=0,this.statusSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.idempotencyKey=Gr.get(this.clanTag)??Xn(),this.loadStatus(),this.loadMembers(1)}disconnectedCallback(){this.searchDebounce&&clearTimeout(this.searchDebounce),this.loadSeq++,super.disconnectedCallback()}async loadStatus(){let e=++this.statusSeq;this.statusFailed=!1,this.statusReloading=!0;let t=await Ye(this.clanTag,{limit:1});if(e===this.statusSeq&&(this.statusReloading=!1,this.isConnected)){if(`error`in t){this.status=null,this.statusFailed=!0;return}this.status=t.status}}async loadMembers(e,t=this.memberSearch){let n=++this.loadSeq;this.membersFailed=null,this.membersLoading=!0;let r=await g(this.clanTag,e,this.membersPerPage,`default`,void 0,t||void 0);if(n!==this.loadSeq)return;if(!r){this.membersFailed={page:e,search:t},this.members=[],this.membersLoading=!1,this.loading=!1;return}let i=r.results.filter(e=>e.publicId!==this.myPublicId);if(i.length===0&&r.results.length>0){let e=Math.ceil(r.total/this.membersPerPage),n=r.page<e?r.page+1:r.page>1?r.page-1:null;if(n!==null){this.loadMembers(n,t);return}}let a=i.map(e=>e.publicId);this.recipient&&!a.includes(this.recipient.publicId)&&a.push(this.recipient.publicId);let o=await Te(this.clanTag,a);if(n!==this.loadSeq)return;this.members=i,this.membersTotal=r.total,this.memberPage=r.page,this.limitsFailed=o===!1&&a.length>0;let s=new Map((o||[]).map(e=>[e.publicId,e])),c=this.recipient?this.eligibility.get(this.recipient.publicId):void 0;c&&!s.has(c.publicId)&&s.set(c.publicId,c),this.eligibility=s,this.recipient&&s.get(this.recipient.publicId)?.eligible===!1&&(this.recipient=null),this.membersLoading=!1,this.loading=!1}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.searchDebounce&&clearTimeout(this.searchDebounce),this.searchDebounce=setTimeout(()=>{this.searchDebounce=null,this.loadMembers(1,t)},200))}memberName(e){return e.username??e.publicId}eligibilityOf(e){return this.eligibility.get(e.publicId)??null}selectable(e){return this.eligibilityOf(e)?.eligible??!0}maxAmount(){if(!this.status)return null;let e=[BigInt(this.status.hardBalance),Er(this.status)],t=this.recipient?this.eligibilityOf(this.recipient):null;e.push(BigInt(t?t.leftToday:this.status.recipientDailyCap));let n=Hr(...e);return n>0n?n:0n}parsedAmount(){let e=this.amountInput.trim();if(!/^\d+$/.test(e))return null;let t=BigInt(e);return t>0n?t:null}amountError(){if(this.amountInput.trim()===``)return null;let e=this.parsedAmount();if(e===null)return t(`clan_modal.donate_invalid_amount`);let n=this.maxAmount();return n!==null&&e>n?t(`clan_modal.send_funds_over_max`,{amount:W(n)}):null}canSend(){return!this.submitting&&!this.statusReloading&&this.recipient!==null&&this.selectable(this.recipient)&&this.parsedAmount()!==null&&this.amountError()===null&&this.status!==null&&this.status.enabled&&this.status.canSend&&Or(this.status)===null}pick(e){this.submitting||!this.selectable(e)||(this.recipient=e,this.serverError=null)}async send(){let e=this.parsedAmount(),n=this.recipient;if(!this.canSend()||e===null||n===null)return;this.submitting=!0,this.serverError=null;let r=this.clanTag,i=this.idempotencyKey;Gr.set(r,i);try{let a=await xe(r,n.publicId,e.toString(),i);if((a===!0||a.outcome!==`unknown`)&&Kr(r,i),!this.isConnected)return;if(a!==!0){this.serverError=t(a.error),a.outcome===`earlier_send`&&(this.idempotencyKey=Xn()),this.loadStatus(),this.loadMembers(this.memberPage);return}d(t(`clan_modal.send_funds_success`,{amount:W(e),name:this.memberName(n)}),`green`),this.dispatchEvent(new CustomEvent(`funds-sent`,{bubbles:!0,composed:!0}))}finally{this.submitting=!1}}render(){if(this.loading)return C();let e=this.status,n=e?Or(e):null,r=Math.ceil(this.membersTotal/this.membersPerPage);return f`
      <div class="space-y-6">
        ${e?this.renderSummary(e):``}
        ${this.statusFailed?this.renderLoadError(`status`,`clan_modal.clan_fund_load_failed`,()=>void this.loadStatus()):``}
        ${n?f`<div
                role="status"
                class="bg-amber-500/10 rounded-xl border border-amber-500/20 p-3 text-amber-300 text-sm"
              >
                ${n}
              </div>`:``}

        <div class="space-y-3">
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${t(`clan_modal.send_funds_step_member`)}
          </h3>
          ${L(e=>this.onSearchInput(e),this.memberSearch)}
          ${this.limitsFailed&&!this.membersFailed?this.renderLoadError(`limits`,`clan_modal.send_funds_limits_failed`,()=>void this.loadMembers(this.memberPage)):``}
          <div role="radiogroup" class="space-y-2">
            ${this.membersFailed?this.renderLoadError(`members`,`clan_modal.send_funds_members_failed`,()=>{let e=this.membersFailed;e&&this.loadMembers(e.page,e.search)}):this.members.length===0?this.membersLoading?C():f`<p class="text-white/40 text-sm text-center py-4">
                        ${t(`clan_modal.send_funds_no_members`)}
                      </p>`:this.members.map(e=>this.renderMember(e))}
          </div>
          ${r>1?rr(this.memberPage,r,e=>this.loadMembers(e)):``}
        </div>

        ${this.renderAmount()}

        <div
          class="bg-red-500/10 rounded-xl border border-red-500/30 p-4 text-red-300 text-sm"
        >
          ${t(`clan_modal.send_funds_warning`,{tag:this.clanTag})}
        </div>

        ${this.serverError?f`<p class="text-red-400 text-sm" role="alert">
                ${this.serverError}
              </p>`:``}

        <button
          type="button"
          data-action="send"
          ?disabled=${!this.canSend()}
          @click=${()=>this.confirming=!0}
          class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider rounded-xl transition-all border bg-red-600 hover:bg-red-700 border-white/5 disabled:bg-white/5 disabled:border-white/10 disabled:text-white/30 disabled:pointer-events-none"
        >
          ${this.sendLabel()}
        </button>
      </div>
      ${this.renderConfirm()}
    `}renderLoadError(e,n,r){return f`<div
      data-load-error=${e}
      role=${e===`limits`?`status`:`alert`}
      class="flex items-center justify-between gap-3 bg-red-500/10 rounded-xl border border-red-500/30 p-3 text-red-300 text-sm"
    >
      <span>${t(n)}</span>
      <button
        type="button"
        data-action="retry"
        @click=${r}
        class="shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10"
      >
        ${t(`clan_modal.retry`)}
      </button>
    </div>`}sendLabel(){if(this.submitting)return t(`clan_modal.send_funds_submitting`);let e=this.parsedAmount();return this.recipient?e===null?t(`clan_modal.send_funds_enter_amount`):t(`clan_modal.send_funds_send_to`,{amount:W(e),name:this.memberName(this.recipient)}):t(`clan_modal.send_funds_pick_member`)}renderSummary(e){let n=(e,t,n)=>f`
      <div
        class="flex-1 min-w-[120px] bg-white/5 rounded-xl border border-white/10 p-3"
      >
        <div
          class="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1"
        >
          ${e}
        </div>
        <div
          data-summary=${n}
          class="flex items-center gap-1.5 text-white font-bold tabular-nums"
        >
          <plutonium-icon .size=${14}></plutonium-icon>${t}
        </div>
      </div>
    `;return f`<div class="flex flex-wrap gap-2">
      ${n(t(`clan_modal.send_funds_stat_fund`),W(e.hardBalance),`fund`)}
      ${n(t(`clan_modal.send_funds_stat_clan_left`),W(Er(e)),`clan-left`)}
      ${n(t(`clan_modal.send_funds_stat_member_max`),W(e.recipientDailyCap),`member-max`)}
    </div>`}reasonText(e){switch(e.reason){case`too_recent`:{let n=e.eligibleAt?new Date(e.eligibleAt).getTime()-Date.now():0;return t(`clan_modal.send_funds_reason_too_recent`,{days:Math.max(1,Math.ceil(n/Vr))})}case`recipient_cap`:return t(`clan_modal.send_funds_reason_cap`);case`not_eligible`:case`self`:case`not_member`:return t(`clan_modal.send_funds_reason_not_eligible`);default:return null}}renderMember(e){let n=this.eligibilityOf(e),r=this.selectable(e),i=this.recipient?.publicId===e.publicId,a=n?this.reasonText(n):null;return f`
      <div
        data-member=${e.publicId}
        ?data-ineligible=${!r}
        class="relative w-full flex items-center gap-3 py-2.5 px-3 rounded-xl border transition-all text-left ${i?`bg-white/10 border-white/30`:r?`bg-white/5 border-white/10 hover:bg-white/10`:`bg-white/[0.02] border-white/5 opacity-50`}"
      >
        <button
          type="button"
          role="radio"
          aria-checked=${i}
          aria-disabled=${!r}
          aria-labelledby=${`send-target-${e.publicId}`}
          ?disabled=${!r||this.submitting}
          @click=${()=>this.pick(e)}
          class="absolute inset-0 w-full h-full rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 ${r?`cursor-pointer`:`cursor-not-allowed`}"
        ></button>
        <div
          class="relative pointer-events-none w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-xs font-bold shrink-0"
        >
          ${er(e.role)}
        </div>
        <div
          id=${`send-target-${e.publicId}`}
          class="relative pointer-events-none flex-1 min-w-0 flex flex-col"
        >
          <span class="pointer-events-auto inline-flex max-w-full min-w-0">
            ${M(this,e.username,e.publicId)}
          </span>
          <span
            class="text-[10px] ${a?`text-amber-300/80`:`text-white/30`}"
            >${a??t(`clan_modal.joined_date`,{date:I(e.joinedAt)})}</span
          >
        </div>
        <span
          class="relative pointer-events-none text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${e.role===`officer`?`bg-purple-500/20 text-purple-400 border border-purple-500/30`:`bg-white/10 text-white/40 border border-white/10`}"
          >${$n(e.role)}</span
        >
        ${i?f`<svg
                xmlns="http://www.w3.org/2000/svg"
                class="relative pointer-events-none w-5 h-5 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>`:``}
      </div>
    `}renderAmount(){let e=this.maxAmount(),n=this.amountError(),r=(t,n,r)=>f`<button
        type="button"
        data-quick=${r}
        ?disabled=${this.submitting||e===null||t<=0n||t>e}
        @click=${()=>{this.amountInput=t.toString(),this.serverError=null}}
        class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
      >
        ${n}
      </button>`;return f`
      <div class="space-y-3">
        <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
          <label for="clan-send-funds-amount"
            >${t(`clan_modal.send_funds_step_amount`)}</label
          >
        </h3>
        <div class="relative">
          <plutonium-icon
            class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            .size=${18}
          ></plutonium-icon>
          <input
            id="clan-send-funds-amount"
            type="text"
            inputmode="numeric"
            autocomplete="off"
            placeholder="0"
            .value=${this.amountInput}
            ?disabled=${this.submitting}
            @input=${e=>{this.amountInput=e.target.value,this.serverError=null}}
            class="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-lg font-bold tabular-nums placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-50"
          />
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex flex-wrap gap-1.5">
            ${Br.map(e=>r(e,W(e),e.toString()))}
            ${r(e??0n,t(`clan_modal.send_funds_max`),`max`)}
          </div>
          ${this.recipient&&e!==null?f`<span data-amount-hint class="text-xs text-white/40"
                  >${t(`clan_modal.send_funds_amount_hint`,{amount:W(e),name:this.memberName(this.recipient)})}</span
                >`:``}
        </div>
        ${n?f`<p class="text-red-400 text-xs" role="alert">${n}</p>`:``}
      </div>
    `}renderConfirm(){let e=this.parsedAmount();return!this.confirming||!this.recipient||e===null?``:f`<confirm-dialog
      .message=${t(`clan_modal.send_funds_confirm_message`,{amount:W(e),name:this.memberName(this.recipient),tag:this.clanTag})}
      variant="warning"
      .confirmText=${t(`clan_modal.send_funds_confirm`)}
      ?disabled=${this.submitting}
      @confirm=${()=>{this.confirming=!1,this.send()}}
      @cancel=${()=>this.confirming=!1}
    ></confirm-dialog>`}};y([b()],q.prototype,`clanTag`,void 0),y([b()],q.prototype,`myPublicId`,void 0),y([h()],q.prototype,`status`,void 0),y([h()],q.prototype,`statusReloading`,void 0),y([h()],q.prototype,`limitsFailed`,void 0),y([h()],q.prototype,`statusFailed`,void 0),y([h()],q.prototype,`members`,void 0),y([h()],q.prototype,`eligibility`,void 0),y([h()],q.prototype,`membersTotal`,void 0),y([h()],q.prototype,`membersFailed`,void 0),y([h()],q.prototype,`membersLoading`,void 0),y([h()],q.prototype,`memberPage`,void 0),y([h()],q.prototype,`memberSearch`,void 0),y([h()],q.prototype,`loading`,void 0),y([h()],q.prototype,`recipient`,void 0),y([h()],q.prototype,`amountInput`,void 0),y([h()],q.prototype,`confirming`,void 0),y([h()],q.prototype,`submitting`,void 0),y([h()],q.prototype,`serverError`,void 0),q=y([p(`clan-send-funds-view`)],q);var qr=x(`images/LeaderboardIconRegularWhite.svg`),Jr=x(`images/ReplayRegularIconWhite.svg`),Yr=x(`images/LinkIconWhite.svg`),Xr=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],J=class extends m{constructor(...e){super(...e),this.clanTag=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.filter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.cachedState&&this.cachedState.tag===this.clanTag?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.filter=this.cachedState.filter):this.clanTag&&this.reload()}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setFilter(e){e!==this.filter&&(this.filter=e,this.reload())}async load({append:e}){if(!this.clanTag)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=this.filter===`all`?void 0:this.filter,r=e?this.nextCursor??void 0:void 0,i=await at(this.clanTag,{filter:n,cursor:r});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in i){e?this.appendFailed=!0:(this.loadState=i.error,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...i.results]:i.results,this.nextCursor=i.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{tag:this.clanTag,filter:this.filter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}async watchReplay(e){try{let t=encodeURIComponent(e),n=re(S.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}})),this.dispatchEvent(new CustomEvent(`close-clan-modal`,{bubbles:!0,composed:!0}))}catch{d(t(`clan_modal.error_failed`),`red`)}}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let n=`${S.shareOrigin()}${S.gamePath(e)}`;try{await s(n),d(t(`common.copied`),`green`)}catch{d(t(`common.failed_copy`),`red`)}}render(){return this.loadState===`forbidden`?f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${t(`clan_modal.history_members_only`)}
          </p>
        </div>
      `:f`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return f`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${Xr.map(e=>{let n=this.filter===e.key;return f`
            <button
              type="button"
              role="tab"
              aria-selected=${n}
              @click=${()=>this.setFilter(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${n?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${t(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?C():this.loadState===`failed`?f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${t(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${t(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?f`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${t(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=Dt(this.games),this.groupedFor=this.games),f`
      <div class="space-y-5">
        ${this.grouped.map(e=>f`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5 pointer-events-none"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${Et(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?f`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${t(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?f`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${t(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${t(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:f`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?C():``}
      </div>
    `}renderGameRow(e){let n=null;if(e.map)try{n=Be.getMapData(e.map).webpPath}catch{n=null}let r=e.map?c(e.map)??e.map:null,i=[],a=[];for(let t of e.clanPlayers)(t.won?i:a).push(t);return f`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${n?f`<div
                class="relative w-full aspect-[30/11] overflow-hidden bg-surface"
              >
                <img
                  src=${n}
                  alt=${r??``}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                ${r?f`<div
                        class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                      >
                        ${r}
                      </div>`:``}
                <div class="absolute top-2 left-2">
                  ${this.renderResultBadge(e,i)}
                </div>
                <div
                  class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
                >
                  ${E(e.start)}
                </div>
              </div>`:``}
        <div
          class=${n?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${t(`game_list.stats`)}
              aria-label=${t(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${qr}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${t(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${t(`common.click_to_copy`)}
              aria-label=${t(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Yr}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${t(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${t(`clan_modal.history_watch_replay`)}
              aria-label=${t(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Jr}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${t(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(t(`clan_modal.history_game_type`),Mt(e))}
          ${n?``:this.renderField(t(`clan_modal.history_map`),r??`—`)}
          ${this.renderPlayersField(e)}
          ${this.renderField(t(`clan_modal.history_duration`),$e(e.durationSeconds))}
        </div>
        ${this.renderPlayerLists(e,i,a)}
      </div>
    `}renderField(e,t){return f`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderResultBadge(e,n){let r=e.result;if(!r)return f``;let i=e.clanPlayers.length,a=n.length,o=(jt(e)||e.rankedType!==void 0&&e.rankedType!==`unranked`)&&i>1&&a>0&&a<i,s,c;return o?(s=t(`clan_modal.history_result_partial`,{wins:a,total:i}),c=`text-white bg-amber-500 border-amber-400`):r===`victory`?(s=t(`clan_modal.history_result_victory`),c=`text-white bg-green-600 border-green-500`):(s=t(`clan_modal.history_result_defeat`),c=`text-white bg-red-600 border-red-500`),f`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${c}"
      >${s}</span
    >`}renderPlayerLists(e,n,r){return e.clanPlayers.length===0?``:f`
      ${n.length>0?this.renderPlayerSection(t(`clan_modal.history_clan_winners`),n,`text-green-400`,`winners`):``}
      ${r.length>0?this.renderPlayerSection(t(`clan_modal.history_clan_members`),r,`text-white/40`,`losers`):``}
    `}renderPlayerSection(e,t,n,r){return f`
      <div
        class="px-4 py-2 border-t border-white/5 text-xs text-white/60 flex flex-wrap items-center gap-x-1 gap-y-1"
        data-player-section=${r}
      >
        <span
          class="text-[10px] font-bold uppercase tracking-wider mr-1 ${n}"
          >${e}:</span
        >
        ${t.map((e,t)=>t===0?this.renderClanPlayerName(e):f`<span
                class="inline-flex items-center gap-x-1 min-w-0 max-w-full"
              >
                <span
                  class="text-white text-2xl leading-none select-none"
                  aria-hidden="true"
                  data-name-separator
                  >&middot;</span
                >${this.renderClanPlayerName(e)}
              </span>`)}
      </div>
    `}renderClanPlayerName(e){return f`
      <span class="inline-flex items-center gap-1 min-w-0 max-w-full">
        <button
          type="button"
          class="font-bold text-blue-300 truncate hover:underline"
          title=${t(`player_profile.view`)}
          @click=${()=>fn(this,e.publicId)}
        >
          ${e.username}
        </button>
        ${e.verified===!0?te():_}
      </span>
    `}renderPlayersField(e){let n=e.rankedType!==void 0&&e.rankedType!==`unranked`,r=e.totalPlayers??null;return n?this.renderField(t(`clan_modal.history_players`),r===null?`—`:`${r}`):this.renderField(t(`clan_modal.history_clan_players`),r===null?`${e.clanPlayers.length}`:t(`clan_modal.history_clan_players_value`,{clanCount:e.clanPlayers.length,total:r}))}};y([b()],J.prototype,`clanTag`,void 0),y([b({type:Object})],J.prototype,`cachedState`,void 0),y([h()],J.prototype,`games`,void 0),y([h()],J.prototype,`nextCursor`,void 0),y([h()],J.prototype,`loading`,void 0),y([h()],J.prototype,`loadingMore`,void 0),y([h()],J.prototype,`loadState`,void 0),y([h()],J.prototype,`appendFailed`,void 0),y([h()],J.prototype,`filter`,void 0),J=y([p(`clan-game-history-view`)],J);var Y=class extends m{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.myPublicId=null,this.myRole=null,this.manageName=``,this.manageDescription=``,this.manageDiscordUrl=``,this.manageIsOpen=!0,this.saving=!1,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.memberSort=`default`,this.memberOrder=`asc`,this.memberActionPending=!1,this.loading=!1,this.confirmAction=null,this.confirmTargetId=null,this.pendingRequestCount=0,this.actionPending=!1,this.memberSearch=``,this.memberSearchDebounce=null,this.memberLoadSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.selectedClan&&(this.manageName=this.selectedClan.name,this.manageDescription=this.selectedClan.description??``,this.manageDiscordUrl=this.selectedClan.discordUrl??``,this.manageIsOpen=this.selectedClan.isOpen??!0),this.loadMembers(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}async loadMembers(e,t=this.memberSearch){let n=++this.memberLoadSeq;this.members.length===0&&(this.loading=!0);let r=t?await g(this.clanTag,e,this.membersPerPage,this.memberSort,this.memberOrder,t):await g(this.clanTag,e,this.membersPerPage,this.memberSort,this.memberOrder);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)){if(!r){this.loading=!1;return}if(r.results.length===0&&e>1){await this.loadMembers(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=e,this.pendingRequestCount=r.pendingRequests??0,!t&&this.selectedClan&&this.selectedClan.memberCount!==r.total&&this.dispatchEvent(new CustomEvent(`clan-updated`,{detail:{memberCount:r.total},bubbles:!0,composed:!0})),this.loading=!1}}async handleSaveSettings(){let e=this.selectedClan;if(!e)return;let n={};if(this.manageName!==e.name&&(n.name=this.manageName),(this.manageDescription??``)!==(e.description??``)&&(n.description=this.manageDescription),(this.manageDiscordUrl??``)!==(e.discordUrl??``)&&(n.discordUrl=this.manageDiscordUrl),this.manageIsOpen!==(e.isOpen??!0)&&(n.isOpen=this.manageIsOpen),Object.keys(n).length===0)return;this.saving=!0;let r=await Oe(this.clanTag,n);if(`error`in r){d(t(r.error),`red`),this.saving=!1;return}this.dispatchEvent(new CustomEvent(`clan-updated`,{detail:{name:r.name,description:r.description,discordUrl:r.discordUrl,isOpen:r.isOpen},bubbles:!0,composed:!0})),this.saving=!1,d(t(`clan_modal.settings_saved`),`green`),this.dispatchEvent(new CustomEvent(`navigate-detail`,{bubbles:!0,composed:!0}))}async handlePromote(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await Le(this.clanTag,e);if(n!==!0){d(t(n.error),`red`);return}await this.loadMembers(this.memberPage),d(t(`clan_modal.member_promoted`),`green`)}finally{this.memberActionPending=!1}}}async handleDemote(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await pe(this.clanTag,e);if(n!==!0){d(t(n.error),`red`);return}await this.loadMembers(this.memberPage),d(t(`clan_modal.member_demoted`),`green`)}finally{this.memberActionPending=!1}}}async handleKick(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await Ke(this.clanTag,e);if(n!==!0){d(t(n.error),`red`);return}await this.loadMembers(this.memberPage),d(t(`clan_modal.member_kicked`),`green`)}finally{this.memberActionPending=!1}}}async handleBan(e,n){if(!this.memberActionPending){this.memberActionPending=!0;try{let r=await ee(this.clanTag,e,n.trim().slice(0,200)||void 0);if(r!==!0){d(t(r.error),`red`);return}await this.loadMembers(this.memberPage),d(t(`clan_modal.member_banned`),`green`)}finally{this.memberActionPending=!1}}}async handleDisband(){if(!this.actionPending){this.actionPending=!0;try{let e=await ie(this.clanTag);if(e!==!0){d(t(e.error),`red`);return}u(),this.dispatchEvent(new CustomEvent(`clan-disbanded`,{detail:{tag:this.clanTag},bubbles:!0,composed:!0})),d(t(`clan_modal.clan_disbanded`),`green`)}finally{this.actionPending=!1}}}clearConfirm(){this.confirmAction=null,this.confirmTargetId=null}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMembers(1,t)},200))}onSortChange(e){e!==this.memberSort&&(this.memberSort=e,this.memberOrder=Zn(e),this.loadMembers(1))}onOrderToggle(){this.memberOrder=this.memberOrder===`asc`?`desc`:`asc`,this.loadMembers(1)}render(){if(this.loading)return C();let e=this.selectedClan;return e?f`${this.renderManageContent(e)}${this.renderConfirmOverlay()}`:``}renderConfirmOverlay(){return this.confirmAction?this.confirmAction===`disband`?f`<confirm-dialog
        .message=${t(`clan_modal.confirm_disband`,{tag:this.selectedClan?.tag??``,name:this.selectedClan?.name??``})}
        variant="danger"
        ?disabled=${this.actionPending}
        @confirm=${()=>{this.clearConfirm(),this.handleDisband()}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:this.confirmAction===`kick`&&this.confirmTargetId?f`<confirm-dialog
        .message=${t(`clan_modal.confirm_kick`)}
        variant="warning"
        ?disabled=${this.memberActionPending}
        @confirm=${()=>{let e=this.confirmTargetId;this.clearConfirm(),this.handleKick(e)}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:this.confirmAction===`ban`&&this.confirmTargetId?f`<confirm-dialog
        .message=${t(`clan_modal.confirm_ban`)}
        variant="warning"
        textareaPlaceholder=${t(`clan_modal.ban_reason_prompt`)}
        ?disabled=${this.memberActionPending}
        @confirm=${e=>{let t=this.confirmTargetId,n=e.detail.text;this.clearConfirm(),this.handleBan(t,n)}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:``:``}renderManageContent(e){return f`
      <div class="space-y-6">
        <!-- Edit Settings -->
        <div
          class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5"
        >
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${t(`clan_modal.clan_settings`)}
          </h3>
          <div>
            <label
              class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
              >${t(`clan_modal.clan_name`)}</label
            >
            <input
              type="text"
              .value=${this.manageName}
              @input=${e=>this.manageName=e.target.value}
              maxlength="35"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
            />
          </div>
          <div>
            <label
              class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
              >${t(`clan_modal.description`)}</label
            >
            <textarea
              .value=${this.manageDescription}
              @input=${e=>this.manageDescription=e.target.value}
              maxlength="200"
              rows="3"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm resize-none"
            ></textarea>
          </div>
          ${this.myRole===`leader`?f`
                  <div>
                    <label
                      class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
                      >${t(`clan_modal.discord_url_label`)}</label
                    >
                    <input
                      type="url"
                      .value=${this.manageDiscordUrl}
                      @input=${e=>this.manageDiscordUrl=e.target.value}
                      placeholder="https://discord.gg/..."
                      maxlength="255"
                      class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
                    />
                    <p class="text-white/40 text-xs mt-2">
                      ${t(`clan_modal.discord_url_hint`)}
                    </p>
                  </div>
                `:``}
          <div class="flex items-center justify-between">
            <div>
              <div class="text-white text-sm font-bold">
                ${t(`clan_modal.open_clan`)}
              </div>
              <div class="text-white/40 text-xs">
                ${t(`clan_modal.open_clan_desc`)}
              </div>
            </div>
            <button
              role="switch"
              aria-checked="${this.manageIsOpen}"
              aria-label="${t(`clan_modal.open_clan`)}"
              @click=${()=>this.manageIsOpen=!this.manageIsOpen}
              class="relative w-12 h-7 rounded-full transition-all ${this.manageIsOpen?`bg-malibu-blue`:`bg-white/20`}"
            >
              <div
                class="absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-all ${this.manageIsOpen?`left-6`:`left-1`}"
              ></div>
            </button>
          </div>
          <button
            @click=${()=>this.handleSaveSettings()}
            ?disabled=${this.saving}
            class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all disabled:opacity-50"
          >
            ${this.saving?t(`clan_modal.saving`):t(`clan_modal.save_changes`)}
          </button>
        </div>

        <clan-fund-card
          .clanTag=${this.clanTag}
          .myRole=${this.myRole}
        ></clan-fund-card>

        <!-- Member Management -->
        <div
          class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4"
        >
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${t(`clan_modal.members`)} (${e.memberCount??0})
          </h3>
          ${L(e=>this.onSearchInput(e),this.memberSearch,void 0,sr(this.memberSort,this.memberOrder,e=>this.onSortChange(e),()=>this.onOrderToggle()))}
          ${f`
              <div class="space-y-2">
                ${hr(this.members,this.memberSearch).map(e=>this.renderManageMemberRow(e))}
              </div>
              ${lr(this.memberPage,this.membersTotal,this.membersPerPage,e=>this.loadMembers(e),e=>{this.membersPerPage=e,this.loadMembers(1)})}
            `}
        </div>

        <!-- Danger Zone -->
        <div
          class="bg-red-500/5 rounded-2xl border border-red-500/20 p-6 space-y-4"
        >
          <h3
            class="text-sm font-bold text-red-400/80 uppercase tracking-wider"
          >
            ${t(`clan_modal.danger_zone`)}
          </h3>
          <button
            @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-bans`,{bubbles:!0,composed:!0}))}
            class="w-full px-6 py-3 text-sm font-bold text-red-400 uppercase tracking-wider bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all border border-red-500/30"
          >
            ${t(`clan_modal.banned_players`)}
          </button>
          ${this.myRole===`leader`?f`
                  <button
                    @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-transfer`,{bubbles:!0,composed:!0}))}
                    class="w-full px-6 py-3 text-sm font-bold text-amber-400 uppercase tracking-wider bg-amber-600/20 hover:bg-amber-600/30 rounded-xl transition-all border border-amber-500/30"
                  >
                    ${t(`clan_modal.transfer_leadership`)}
                  </button>
                  <button
                    @click=${()=>{this.confirmAction=`disband`,this.confirmTargetId=null}}
                    ?disabled=${this.confirmAction===`disband`}
                    class="w-full px-6 py-3 text-sm font-bold text-red-400 uppercase tracking-wider bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all border border-red-500/30 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${t(`clan_modal.disband_clan`)}
                  </button>
                `:``}
        </div>
      </div>
    `}renderManageMemberRow(e){let n=e.role===`leader`,r=e.publicId===this.myPublicId,i=!r&&!n&&(this.myRole===`leader`||this.myRole===`officer`&&e.role===`member`),a=!r&&this.myRole===`leader`&&e.role===`member`,o=!r&&this.myRole===`leader`&&e.role===`officer`;return f`
      <div
        class="flex flex-col py-2.5 px-3 rounded-xl border
        ${r?`bg-malibu-blue/10 border-malibu-blue/20`:`bg-white/5 border-white/10`}"
      >
        <div class="flex items-center flex-wrap gap-1.5">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
          ${r?`bg-malibu-blue/20 text-aquarius`:`bg-white/10 text-white/50`}"
          >
            ${er(e.role)}
          </div>
          ${M(this,e.username,e.publicId)}
          <span class="text-white/30 text-[10px] whitespace-nowrap">
            ${t(`clan_modal.joined_date`,{date:I(e.joinedAt)})}
          </span>
          <div class="flex items-center gap-1.5 ml-auto flex-wrap justify-end">
            ${a?f`<button
                    @click=${()=>this.handlePromote(e.publicId)}
                    ?disabled=${this.memberActionPending}
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400/70 border border-purple-500/20 hover:bg-purple-500/20 hover:text-purple-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${t(`clan_modal.promote`)}
                  </button>`:``}
            ${o?f`<button
                    @click=${()=>this.handleDemote(e.publicId)}
                    ?disabled=${this.memberActionPending}
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${t(`clan_modal.demote`)}
                  </button>`:``}
            ${i?f`
                    <button
                      @click=${()=>{this.confirmAction=`kick`,this.confirmTargetId=e.publicId}}
                      ?disabled=${this.memberActionPending||this.confirmAction!==null}
                      class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/70 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      ${t(`clan_modal.kick`)}
                    </button>
                    <button
                      @click=${()=>{this.confirmAction=`ban`,this.confirmTargetId=e.publicId}}
                      ?disabled=${this.memberActionPending||this.confirmAction!==null}
                      class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/70 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      ${t(`clan_modal.ban`)}
                    </button>
                  `:``}
          </div>
        </div>
      </div>
    `}};y([b()],Y.prototype,`clanTag`,void 0),y([b({type:Object})],Y.prototype,`selectedClan`,void 0),y([b()],Y.prototype,`myPublicId`,void 0),y([b()],Y.prototype,`myRole`,void 0),y([h()],Y.prototype,`manageName`,void 0),y([h()],Y.prototype,`manageDescription`,void 0),y([h()],Y.prototype,`manageDiscordUrl`,void 0),y([h()],Y.prototype,`manageIsOpen`,void 0),y([h()],Y.prototype,`saving`,void 0),y([h()],Y.prototype,`members`,void 0),y([h()],Y.prototype,`membersTotal`,void 0),y([h()],Y.prototype,`memberPage`,void 0),y([h()],Y.prototype,`membersPerPage`,void 0),y([h()],Y.prototype,`memberSort`,void 0),y([h()],Y.prototype,`memberOrder`,void 0),y([h()],Y.prototype,`memberActionPending`,void 0),y([h()],Y.prototype,`loading`,void 0),y([h()],Y.prototype,`confirmAction`,void 0),y([h()],Y.prototype,`confirmTargetId`,void 0),y([h()],Y.prototype,`pendingRequestCount`,void 0),y([h()],Y.prototype,`actionPending`,void 0),y([h()],Y.prototype,`memberSearch`,void 0),Y=y([p(`clan-manage-view`)],Y);function Zr(){let e=de();return e===`localhost`?`http://clanmap.localhost:8787`:`https://clanmap.${e}`}var Qr=class extends m{constructor(...e){super(...e),this.full=!1,this.loading=!0,this.pageReady=!1,this.onMessage=async e=>{let t=Zr();if(e.origin!==t||!this.frame||e.source!==this.frame.contentWindow)return;if(e.data?.type===`clanmap:loaded`){this.loading=!1;return}if(e.data?.type!==`clanmap:ready`)return;this.pageReady=!0,this.sendLanguage();let n=await tt();if(!n)return;let r=this.frame?.contentWindow;r&&r.postMessage({type:`clanmap:auth`,jwt:n.jwt},t)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`message`,this.onMessage)}disconnectedCallback(){window.removeEventListener(`message`,this.onMessage),super.disconnectedCallback()}sendLanguage(){this.frame?.contentWindow?.postMessage({type:`clanmap:lang`,lang:He(),rtl:fe(),strings:Me(`clan_map.`)},Zr())}updated(){this.pageReady&&this.sendLanguage()}render(){return f`<div class="relative w-full h-full">
      <iframe
        src=${Zr()+(this.full?`/?full=1`:`/`)}
        title=${t(`clan_modal.map_frame_title`)}
        allow="fullscreen"
        allowfullscreen
        class="block w-full h-full border-0 bg-[#3c3c3c]"
      ></iframe>
      ${this.loading?f`<div
              role="status"
              aria-label=${t(`clan_modal.map_loading`)}
              class="absolute inset-0 flex items-center justify-center bg-[#3c3c3c]"
            >
              <div
                class="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"
              ></div>
            </div>`:``}
    </div>`}};y([Ae(`iframe`)],Qr.prototype,`frame`,void 0),y([b({type:Boolean})],Qr.prototype,`full`,void 0),y([h()],Qr.prototype,`loading`,void 0),Qr=y([p(`clan-map-view`)],Qr);var $r=class extends m{constructor(...e){super(...e),this.myPendingRequests=[],this.actionPending=!1}createRenderRoot(){return this}async handleWithdrawRequest(e){if(!this.actionPending){this.actionPending=!0;try{let n=await ht(e);if(n!==!0){d(t(n.error),`red`);return}u(),d(t(`clan_modal.join_request_cancelled`),`green`),this.dispatchEvent(new CustomEvent(`request-withdrawn`,{detail:{tag:e},bubbles:!0,composed:!0}))}finally{this.actionPending=!1}}}render(){return f`
      <div>
        ${this.myPendingRequests.length===0?f`<p class="text-white/40 text-sm text-center py-8">
                ${t(`clan_modal.no_pending_applications`)}
              </p>`:f`
                <div class="space-y-3">
                  ${this.myPendingRequests.map(e=>f`
                      <div
                        class="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 p-4"
                      >
                        <div
                          class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0"
                        >
                          <span class="text-amber-400 font-bold text-xs"
                            >${e.tag}</span
                          >
                        </div>
                        <div class="flex-1 min-w-0">
                          <span
                            class="text-white font-bold text-sm truncate block"
                            >${e.name}</span
                          >
                          <span class="text-white/30 text-xs">
                            ${t(`clan_modal.applied`)}
                            ${I(e.createdAt)}
                          </span>
                        </div>
                        <button
                          @click=${()=>this.handleWithdrawRequest(e.tag)}
                          ?disabled=${this.actionPending}
                          class="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/20 hover:bg-red-500/25 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                          ${t(`clan_modal.cancel_request`)}
                        </button>
                      </div>
                    `)}
                </div>
              `}
      </div>
    `}};y([b({type:Array})],$r.prototype,`myPendingRequests`,void 0),y([h()],$r.prototype,`actionPending`,void 0),$r=y([p(`clan-my-requests-view`)],$r);var X=class extends m{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.requests=[],this.requestsTotal=0,this.requestsPage=1,this.requestsLimit=20,this.memberActionPending=!1,this.loading=!1,this.memberSearch=``,this.memberSearchDebounce=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadRequests(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),super.disconnectedCallback()}async loadRequests(e,n=!0){n?this.loading=!0:this.memberActionPending=!0;try{let r=await lt(this.clanTag,e);if(!r){n&&d(t(`clan_modal.failed_to_load_requests`),`red`);return}this.requests=r.results,this.requestsTotal=r.total,this.requestsLimit=r.limit,this.requestsPage=e}finally{n?this.loading=!1:this.memberActionPending=!1}}async handleApprove(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await Qe(this.clanTag,e);if(n!==!0){d(t(n.error),`red`);return}this.requests=this.requests.filter(t=>t.publicId!==e),this.requestsTotal--,this.dispatchEvent(new CustomEvent(`request-approved`,{detail:{publicId:e},bubbles:!0,composed:!0})),d(t(`clan_modal.request_approved`),`green`)}finally{this.memberActionPending=!1}}}async handleDeny(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await _e(this.clanTag,e);if(n!==!0){d(t(n.error),`red`);return}this.requests=this.requests.filter(t=>t.publicId!==e),this.requestsTotal--,this.dispatchEvent(new CustomEvent(`request-denied`,{detail:{publicId:e},bubbles:!0,composed:!0})),d(t(`clan_modal.request_denied`),`green`)}finally{this.memberActionPending=!1}}}onSearchInput(e){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearch=e.target.value,this.requestUpdate()},200)}render(){if(this.loading)return C();let e=Math.ceil(this.requestsTotal/this.requestsLimit),n=gr(this.requests,this.memberSearch);return f`
      <div>
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
        >
          ${t(`clan_modal.pending_requests_count`,{count:this.requestsTotal})}
        </div>
        ${L(e=>this.onSearchInput(e),this.memberSearch,`clan_modal.search_requests_placeholder`)}
        ${n.length===0?f`<div
                class="flex flex-col items-center justify-center p-12 text-center"
              >
                <p class="text-white/40 text-sm">
                  ${t(`clan_modal.no_requests`)}
                </p>
              </div>`:f`
                <div class="space-y-3">
                  ${n.map(e=>f`
                      <div
                        class="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 p-4"
                      >
                        <div class="flex-1 min-w-0">
                          ${M(this,e.username,e.publicId)}
                          <span class="text-white/30 text-[10px]">
                            ${t(`clan_modal.requested_on`,{tag:this.selectedClan?.tag??this.clanTag,date:I(e.createdAt)})}
                          </span>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                          <button
                            @click=${()=>this.handleApprove(e.publicId)}
                            ?disabled=${this.memberActionPending}
                            class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                          >
                            ${t(`clan_modal.approve`)}
                          </button>
                          <button
                            @click=${()=>this.handleDeny(e.publicId)}
                            ?disabled=${this.memberActionPending}
                            class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                          >
                            ${t(`clan_modal.deny`)}
                          </button>
                        </div>
                      </div>
                    `)}
                </div>
              `}
        ${e>1?rr(this.requestsPage,e,e=>this.loadRequests(e,!1)):``}
      </div>
    `}};y([b()],X.prototype,`clanTag`,void 0),y([b({type:Object})],X.prototype,`selectedClan`,void 0),y([h()],X.prototype,`requests`,void 0),y([h()],X.prototype,`requestsTotal`,void 0),y([h()],X.prototype,`requestsPage`,void 0),y([h()],X.prototype,`requestsLimit`,void 0),y([h()],X.prototype,`memberActionPending`,void 0),y([h()],X.prototype,`loading`,void 0),X=y([p(`clan-requests-view`)],X);var Z=class extends m{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.transferTarget=null,this.actionPending=!1,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.loading=!1,this.errorMsg=``,this.confirmAction=null,this.memberSearch=``,this.memberSearchDebounce=null,this.memberLoadSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadMembers(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}async loadMembers(e,t=this.memberSearch){let n=++this.memberLoadSeq;this.members.length===0&&(this.loading=!0);let r=t?await g(this.clanTag,e,this.membersPerPage,`default`,void 0,t):await g(this.clanTag,e,this.membersPerPage);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)){if(!r){this.loading=!1;return}if(r.results.length===0&&e>1){await this.loadMembers(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=r.page,this.transferTarget=null,this.loading=!1}}async handleTransfer(){if(!(!this.transferTarget||this.actionPending)){this.actionPending=!0,this.errorMsg=``;try{let e=await ft(this.clanTag,this.transferTarget);if(e!==!0){d(t(e.error),`red`),this.errorMsg=t(e.error);return}u(),this.dispatchEvent(new CustomEvent(`leadership-transferred`,{detail:{tag:this.clanTag},bubbles:!0,composed:!0})),d(t(`clan_modal.leadership_transferred`),`green`)}finally{this.actionPending=!1}}}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMembers(1,t)},200))}render(){if(this.loading)return C();let e=this.members.filter(e=>e.role!==`leader`),t=Math.ceil(this.membersTotal/this.membersPerPage);return f`
      ${this.renderContent(e,t)}
      ${this.renderConfirmOverlay()}
    `}renderConfirmOverlay(){return this.confirmAction!==`transfer`||!this.transferTarget?``:f`<confirm-dialog
      .message=${t(`clan_modal.confirm_transfer`,{name:this.transferTarget})}
      variant="warning"
      ?disabled=${this.actionPending}
      @confirm=${()=>{this.confirmAction=null,this.handleTransfer()}}
      @cancel=${()=>{this.confirmAction=null}}
    ></confirm-dialog>`}renderContent(e,n){return f`
      <div class="space-y-6">
        ${this.errorMsg?f`<p class="text-red-400 text-sm">${this.errorMsg}</p>`:``}

        <div class="bg-amber-500/10 rounded-xl border border-amber-500/20 p-4">
          <p class="text-amber-400/80 text-sm">
            ${t(`clan_modal.transfer_warning`)}
          </p>
        </div>

        ${L(e=>this.onSearchInput(e),this.memberSearch)}

        <div class="space-y-2">
          ${hr(e,this.memberSearch).map(e=>f`
              <div
                class="relative w-full flex items-center gap-3 py-2.5 px-3 rounded-xl border transition-all text-left
                      ${this.transferTarget===e.publicId?`bg-amber-500/10 border-amber-500/20`:`bg-white/5 border-white/10 hover:bg-white/10`}"
              >
                <button
                  type="button"
                  @click=${()=>this.transferTarget=e.publicId}
                  aria-pressed=${this.transferTarget===e.publicId}
                  aria-labelledby=${`transfer-target-${e.publicId}`}
                  class="absolute inset-0 w-full h-full rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                ></button>
                <div
                  class="relative pointer-events-none w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-xs font-bold shrink-0"
                >
                  ${er(e.role)}
                </div>
                <div
                  id=${`transfer-target-${e.publicId}`}
                  class="relative pointer-events-none flex-1 min-w-0"
                >
                  <span
                    class="pointer-events-auto inline-flex max-w-full min-w-0"
                  >
                    ${M(this,e.username,e.publicId)}
                  </span>
                </div>
                <span
                  class="relative pointer-events-none text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0
                        ${e.role===`officer`?`bg-purple-500/20 text-purple-400 border border-purple-500/30`:`bg-white/10 text-white/40 border border-white/10`}"
                >
                  ${$n(e.role)}
                </span>
                ${this.transferTarget===e.publicId?f`<svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="relative pointer-events-none w-5 h-5 text-amber-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>`:``}
              </div>
            `)}
        </div>

        ${n>1?rr(this.memberPage,n,e=>this.loadMembers(e)):``}

        <button
          @click=${()=>this.confirmAction=`transfer`}
          class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider rounded-xl transition-all border disabled:opacity-50 disabled:pointer-events-none
                ${this.transferTarget&&!this.actionPending?`bg-gradient-to-r bg-origin-border from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-amber-900/40 border-white/5`:`bg-white/5 border-white/10 text-white/30 cursor-not-allowed`}"
          ?disabled=${!this.transferTarget||this.actionPending}
        >
          ${this.transferTarget?t(`clan_modal.confirm_transfer`,{name:this.transferTarget}):t(`clan_modal.select_new_leader`)}
        </button>
      </div>
    `}};y([b()],Z.prototype,`clanTag`,void 0),y([b({type:Object})],Z.prototype,`selectedClan`,void 0),y([h()],Z.prototype,`transferTarget`,void 0),y([h()],Z.prototype,`actionPending`,void 0),y([h()],Z.prototype,`members`,void 0),y([h()],Z.prototype,`membersTotal`,void 0),y([h()],Z.prototype,`memberPage`,void 0),y([h()],Z.prototype,`membersPerPage`,void 0),y([h()],Z.prototype,`loading`,void 0),y([h()],Z.prototype,`errorMsg`,void 0),y([h()],Z.prototype,`confirmAction`,void 0),y([h()],Z.prototype,`memberSearch`,void 0),Z=y([p(`clan-transfer-view`)],Z);var ei=[`map`,`my-clans`,`browse`];function ti(e){return ei.includes(e)}var Q=class extends De{constructor(){super(),this.routerName=`clan`,this.view=`list`,this.donationsInitialMode=`recent`,this.loading=!1,this.signedOut=!1,this.myClans=[],this.myPendingRequests=[],this.selectedClanTag=``,this.selectedClan=null,this.myRole=null,this.myPublicId=null,this.myClanRoles=new Map,this.browseCache=null,this.detailCache=null,this.gameHistoryCache=null,this.gameHistoryScrollTop=0,this.preserveStateForModalHandoff=!1,this.returningFromModalHandoff=!1,this.profileOpenedFromTab=`members`,this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.previousListTab=`my-clans`,this.mapReturnTab=`my-clans`,this.joinSource=void 0,this.mapPage=null,this.activeTab=`my-clans`}willUpdate(e){super.willUpdate(e),e.get(`view`)===`send-funds`&&this.view!==`send-funds`&&(this.detailCache=null,u())}get onListView(){return this.view===`list`&&!this.selectedClanTag}get onDetailView(){return this.view===`detail`&&!!this.selectedClanTag}modalConfig(){return{tabs:this.onListView?[{key:`map`,label:t(`clan_modal.tab_map_alpha`)},{key:`my-clans`,label:t(`clan_modal.my_clans`)},{key:`browse`,label:t(`clan_modal.browse`)}]:this.onDetailView?[{key:`overview`,label:t(`clan_modal.tab_overview`)},{key:`members`,label:t(`clan_modal.members`)},{key:`game-history`,label:t(`clan_modal.tab_game_history`)},{key:`donations`,label:t(`clan_modal.tab_donations`)}]:[]}}renderHeaderSlot(){return this.onListView?w({title:t(`clan_modal.title`),onBack:()=>this.close(),ariaLabel:t(`common.back`)}):this.renderSubViewHeader()}renderBody(){return f`<div class=${this.onListView&&this.activeTab===`map`?`h-full`:`p-4 lg:p-[1.4rem]`}>
      ${this.renderInner()}
    </div>`}onTabEnter(e){if(ti(e)){this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.detailCache=null,this.gameHistoryCache=null,(e===`my-clans`||e===`browse`)&&(this.mapReturnTab=e),e===`my-clans`&&this.loadMyClans();return}this.donationsInitialMode=`recent`}tagPill(e){return f`<span
      class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/50 border border-white/10"
      >[${e}]</span
    >`}clanBalances(e){return f`<div class="flex items-center gap-3">
      <currency-display
        .hard=${e.hardBalance??null}
        .soft=${e.softBalance??null}
      ></currency-display>
      ${this.tagPill(e.tag)}
    </div>`}backToProfile(){let e=this.openedFromProfile;if(e===null)return!1;let t=this.openedFromProfileOrigin;return this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.close(),document.querySelector(`player-profile-modal`)?.returnFromClan(e,t),!0}renderSubViewHeader(){let e=this.selectedClan,n=t(`common.back`);return this.view===`my-requests`?w({title:t(`clan_modal.pending_applications`),onBack:()=>this.view=`list`,ariaLabel:n}):this.view===`manage`?w({title:t(`clan_modal.manage_clan`),onBack:()=>this.view=`detail`,ariaLabel:n,rightContent:e?this.tagPill(e.tag):void 0}):this.view===`transfer`?w({title:t(`clan_modal.transfer_leadership`),onBack:()=>this.view=`manage`,ariaLabel:n}):this.view===`send-funds`?w({title:t(`clan_modal.send_funds`),onBack:()=>this.view=`manage`,ariaLabel:n,rightContent:e?this.tagPill(e.tag):void 0}):this.view===`requests`?w({title:t(`clan_modal.join_requests`),onBack:()=>this.view=`detail`,ariaLabel:n}):this.view===`bans`?w({title:t(`clan_modal.banned_players`),onBack:()=>this.view=`manage`,ariaLabel:n}):w({title:e?.name??t(`clan_modal.title`),onBack:()=>{this.backToProfile()||(this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,i.syncArgs(`clan`,{clan:null,tag:null}),this.gameHistoryCache=null,this.setActiveTab(this.previousListTab))},ariaLabel:n,rightContent:e?this.clanBalances(e):void 0})}onOpen(e){if(this.returningFromModalHandoff){this.returningFromModalHandoff=!1;return}this.openedFromProfile=null,this.openedFromProfileOrigin=null;let t=typeof e?.clan==`string`?e.clan.trim():typeof e?.tag==`string`?e.tag.trim():``;t&&this.openDetail(t.toUpperCase()),this.loadMyClans()}onClose(){this.preserveStateForModalHandoff||(this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.activeTab=`my-clans`,this.previousListTab=`my-clans`,this.mapReturnTab=`my-clans`,this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.browseCache=null,this.detailCache=null,this.gameHistoryCache=null,this.gameHistoryScrollTop=0,this.returningFromModalHandoff=!1)}async loadMyClans(){this.loading=!0;try{let e=await pt();if(!this.isModalOpen)return;if(!e||Object.keys(e.user).length===0){this.signedOut=!0,this.myPublicId=null,this.myPendingRequests=[],this.myClanRoles=new Map,this.myClans=[];return}this.signedOut=!1,this.myPublicId=e.player.publicId,this.myPendingRequests=e.player.clanRequests??[];let t=new Map,n=[];for(let r of e.player.clans??[])t.set(r.tag,r.role),n.push({tag:r.tag,name:r.name,description:``,isOpen:!1,memberCount:r.memberCount,softBalance:r.softBalance,hardBalance:r.hardBalance});this.myClanRoles=t,this.myClans=n}finally{this.loading=!1}}renderInner(){return this.loading?this.renderLoadingSpinner():this.view===`my-requests`?f`<clan-my-requests-view
        .myPendingRequests=${this.myPendingRequests}
        @navigate-back=${()=>this.view=`list`}
        @request-withdrawn=${e=>{this.myPendingRequests=this.myPendingRequests.filter(t=>t.tag!==e.detail.tag),this.myPendingRequests.length===0&&(this.view=`list`)}}
      ></clan-my-requests-view>`:this.selectedClanTag?this.view===`manage`?f`<clan-manage-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          .myPublicId=${this.myPublicId}
          .myRole=${this.myRole}
          @navigate-detail=${()=>this.view=`detail`}
          @navigate-bans=${()=>this.view=`bans`}
          @navigate-transfer=${()=>this.view=`transfer`}
          @navigate-send-funds=${()=>this.view=`send-funds`}
          @navigate-payouts=${()=>{this.view=`detail`,this.setActiveTab(`donations`),this.donationsInitialMode=`payouts`}}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @clan-updated=${e=>{this.selectedClan&&={...this.selectedClan,...e.detail},this.detailCache=null,u()}}
          @clan-disbanded=${e=>{let t=new Map(this.myClanRoles);t.delete(e.detail.tag),this.myClanRoles=t,this.myClans=this.myClans.filter(t=>t.tag!==e.detail.tag),this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,!this.backToProfile()&&(this.view=`list`,this.setActiveTab(this.previousListTab))}}
        ></clan-manage-view>`:this.view===`transfer`?f`<clan-transfer-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          @navigate-back=${()=>this.view=`manage`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @leadership-transferred=${()=>{this.loadMyClans().then(()=>this.openDetail(this.selectedClanTag))}}
        ></clan-transfer-view>`:this.view===`send-funds`?f`<clan-send-funds-view
          .clanTag=${this.selectedClanTag}
          .myPublicId=${this.myPublicId}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @funds-sent=${()=>this.view=`manage`}
        ></clan-send-funds-view>`:this.view===`requests`?f`<clan-requests-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          @navigate-back=${()=>this.view=`detail`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @request-approved=${()=>{this.selectedClan&&={...this.selectedClan,memberCount:(this.selectedClan.memberCount??0)+1},this.detailCache=null}}
        ></clan-requests-view>`:this.view===`bans`?f`<clan-bans-view
          .clanTag=${this.selectedClanTag}
          @navigate-back=${()=>this.view=`manage`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        ></clan-bans-view>`:this.activeTab===`donations`?f`<clan-donations-view
          .clanTag=${this.selectedClanTag}
          .initialMode=${this.donationsInitialMode}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        ></clan-donations-view>`:this.activeTab===`game-history`?f`<clan-game-history-view
          .clanTag=${this.selectedClanTag}
          .cachedState=${this.gameHistoryCache?.tag===this.selectedClanTag?this.gameHistoryCache:null}
          @history-updated=${e=>{this.gameHistoryCache=e.detail}}
          @view-stats=${e=>this.openGameStats(e.detail.gameId)}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @close-clan-modal=${()=>this.close()}
        ></clan-game-history-view>`:f`<clan-detail-view
        .clanTag=${this.selectedClanTag}
        .joinSource=${this.joinSource}
        .cachedClan=${this.selectedClan}
        .myPublicId=${this.myPublicId}
        .myClanRoles=${this.myClanRoles}
        .myPendingRequests=${this.myPendingRequests}
        .detailTab=${this.activeTab===`members`?`members`:`overview`}
        .cachedDetail=${this.detailCache?.tag===this.selectedClanTag?this.detailCache:null}
        @navigate-back=${()=>{this.backToProfile()||(this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,this.gameHistoryCache=null,this.setActiveTab(this.previousListTab))}}
        @detail-loaded=${e=>{this.selectedClan=e.detail.clan,this.myRole=e.detail.myRole,this.detailCache={tag:e.detail.clan.tag,members:e.detail.members,membersTotal:e.detail.membersTotal,pendingRequestCount:e.detail.pendingRequestCount}}}
        @members-loaded=${e=>{!this.detailCache||this.detailCache.tag!==this.selectedClanTag||(this.detailCache={...this.detailCache,members:e.detail.members,membersTotal:e.detail.membersTotal,pendingRequestCount:e.detail.pendingRequestCount})}}
        @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        @navigate-manage=${()=>this.view=`manage`}
        @navigate-requests=${()=>this.view=`requests`}
        @clan-refreshed=${e=>{this.selectedClan=e.detail.clan,this.myClans=this.myClans.map(t=>t.tag===e.detail.clan.tag?{...t,softBalance:e.detail.clan.softBalance,hardBalance:e.detail.clan.hardBalance}:t)}}
        @clan-joined=${e=>{this.myClanRoles=new Map([...this.myClanRoles,[e.detail.tag,`member`]]),this.detailCache=null,this.openDetail(e.detail.tag)}}
        @clan-left=${e=>{let t=new Map(this.myClanRoles);t.delete(e.detail.tag),this.myClanRoles=t,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,!this.backToProfile()&&(this.view=`list`,this.setActiveTab(this.previousListTab))}}
        @request-sent=${e=>{this.myPendingRequests=[...this.myPendingRequests,{tag:e.detail.tag,name:e.detail.name,createdAt:new Date().toISOString()}]}}
      ></clan-detail-view>`:this.activeTab===`map`?f``:f`
      ${this.activeTab===`my-clans`?this.renderMyClans():f`<clan-browse-view
              .myClanRoles=${this.myClanRoles}
              .myPendingRequests=${this.myPendingRequests}
              .cachedState=${this.browseCache}
              @browse-updated=${e=>{this.browseCache=e.detail}}
              @clan-select=${e=>this.openDetail(e.detail.tag,e.detail.source)}
            ></clan-browse-view>`}
    `}updated(e){super.updated(e),this.syncMapPage()}disconnectedCallback(){this.removeMapPage(),super.disconnectedCallback()}syncMapPage(){if(!this.isModalOpen||!this.onListView||this.activeTab!==`map`){this.removeMapPage();return}this.mapPage||(this.mapPage=document.createElement(`div`),document.body.appendChild(this.mapPage)),v(this.renderMapPage(),this.mapPage)}removeMapPage(){this.mapPage&&=(v(_,this.mapPage),this.mapPage.remove(),null)}renderMapPage(){return f`<div
      data-clan-map-page
      class="fixed inset-0 z-[9999] bg-[#3c3c3c]"
    >
      <clan-map-view full class="block w-full h-full"></clan-map-view>
      <button
        data-clan-map-back
        type="button"
        class="absolute top-3 left-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151a21]/90 border border-white/10 backdrop-blur text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1b212a] cursor-pointer"
        aria-label=${t(`clan_modal.map_back`)}
        @click=${()=>this.setActiveTab(this.mapReturnTab)}
      >
        <span aria-hidden="true">←</span>${t(`clan_modal.title`)}
      </button>
    </div>`}openDetail(e,t){this.joinSource=t,this.selectedClanTag!==e&&(this.gameHistoryCache=null),ti(this.activeTab)&&(this.previousListTab=this.activeTab),this.selectedClanTag=e,this.view=`detail`,i.syncArgs(`clan`,{clan:e,tag:null}),this.setActiveTab(`overview`)}openGameStats(e){let t=document.querySelector(`game-stats-modal`);if(t){this.gameHistoryScrollTop=this.modalEl?.getScrollTop()??0,this.preserveStateForModalHandoff=!0;try{t.openFromClan(e)}finally{this.preserveStateForModalHandoff=!1}}}openPlayerProfile(e){let t=document.querySelector(`player-profile-modal`);if(t){this.profileOpenedFromTab=this.activeTab===`game-history`||this.activeTab===`donations`?this.activeTab:`members`,this.profileOpenedFromTab===`game-history`&&(this.gameHistoryScrollTop=this.modalEl?.getScrollTop()??0),this.preserveStateForModalHandoff=!0;try{t.openFromClan(e)}finally{this.preserveStateForModalHandoff=!1}}}returnFromPlayerProfile(){if(!this.selectedClanTag){this.open({});return}if(this.view!==`detail`){this.returningFromModalHandoff=!0,this.open({clan:this.selectedClanTag});return}this.profileOpenedFromTab===`game-history`?this.returnToGameHistory():this.returnToDetailTab(this.profileOpenedFromTab)}openFromProfile(e,t,n){this.open({clan:e}),this.openedFromProfile=t,this.openedFromProfileOrigin=n}returnToDetailTab(e){let t=this.selectedClanTag;t&&(this.returningFromModalHandoff=!0,this.open({clan:t,tab:e}))}returnToGameHistory(){let e=this.selectedClanTag;e&&(this.returningFromModalHandoff=!0,this.open({clan:e,tab:`game-history`}),this.restoreGameHistoryScroll())}async restoreGameHistoryScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`clan-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gameHistoryScrollTop)}renderMyClans(){if(this.signedOut)return At(()=>{this.close(),window.showPage?.(`page-account`)},t(`clan_modal.sign_in_for_clans`));let e=this.myClans.length>0,n=this.myPendingRequests.length>0;return!e&&!n?f`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <p class="text-white/40 text-sm mb-4">
            ${t(`clan_modal.no_clans`)}
          </p>
          <button
            @click=${()=>this.setActiveTab(`browse`)}
            class="px-6 py-2 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
          >
            ${t(`clan_modal.browse`)}
          </button>
        </div>
      `:f`
      <div class="space-y-3">
        ${n?this.renderPendingRequestsButton():``}
        ${this.myClans.map(e=>f`
            <clan-card
              .clan=${e}
              .clanRole=${this.myClanRoles.get(e.tag)}
              @clan-select=${e=>this.openDetail(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `}renderPendingRequestsButton(){let e=this.myPendingRequests.length;return f`
      <button
        @click=${()=>this.view=`my-requests`}
        class="w-full flex items-center justify-between bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-left">
            <span class="text-amber-400 text-sm font-bold">
              ${t(`clan_modal.pending_applications`)}
            </span>
            <span class="text-amber-400/60 text-xs block">
              ${t(`clan_modal.pending_requests_count`,{count:e})}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span
            class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            ${e}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-amber-400/40 group-hover:text-amber-400/70 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};y([h()],Q.prototype,`view`,void 0),y([h()],Q.prototype,`donationsInitialMode`,void 0),y([h()],Q.prototype,`loading`,void 0),y([h()],Q.prototype,`signedOut`,void 0),y([h()],Q.prototype,`myClans`,void 0),y([h()],Q.prototype,`myPendingRequests`,void 0),y([h()],Q.prototype,`selectedClanTag`,void 0),y([h()],Q.prototype,`selectedClan`,void 0),y([h()],Q.prototype,`myRole`,void 0),y([h()],Q.prototype,`myClanRoles`,void 0),Q=y([p(`clan-modal`)],Q);async function ni(e){try{let t=await it(e),n=t===!1?null:t;if(n===null){let t=await pt();if(t===!1||t.player.publicId!==e)return null;n=t.player.progress??null}return n!==null&&ve(e,n),n}catch{return null}}var ri=0,$=class extends De{constructor(...e){super(...e),this.routerName=`profile`,this.publicId=null,this.username=null,this.statsTree=null,this.clans=[],this.displayClanTag=null,this.ffaRating=null,this.progress=null,this.loading=!1,this.openedLink=null,this.openedFrom=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.loadGeneration=0,this.wantsProgressionTab=!1,this.openCount=0,this.progressRead=0,this.handleProvisionalChanged=e=>{Ne(e).length>0&&this.rereadProgress(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),document.addEventListener(et,this.handleProvisionalChanged)}disconnectedCallback(){document.removeEventListener(et,this.handleProvisionalChanged),super.disconnectedCallback()}rereadProgress(){let e=this.publicId;if(e===null||this.progress===null||!this.isConnected||!this.isOpen()||!he(e))return;let t=this.loadGeneration,n=++this.progressRead;ni(e).then(r=>{t!==this.loadGeneration||n!==this.progressRead||r===null||this.publicId!==e||(this.progress=r)})}progressView(){return this.progress===null?null:ae(this.publicId,this.progress)}modalConfig(){return{maxWidth:`960px`,tabs:[{key:`stats`,label:t(`account_modal.tab_stats`)},{key:`games`,label:t(`account_modal.tab_games`)},{key:`clans`,label:t(`account_modal.tab_clans`)},...this.progress===null?[]:[{key:`progression`,label:t(`account_modal.tab_progression`)}]]}}renderHeaderSlot(){return w({title:t(`player_profile.title`),titleContent:this.username?f`<span
            class="text-white text-xl lg:text-2xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
          >
            ${ke(this.username)}
            ${ce(this.username)?te(`w-5 h-5`):_}
          </span>`:void 0,onBack:()=>this.back(),ariaLabel:t(`common.back`),rightContent:this.publicId?f`
            <player-name
              class="shrink-0"
              .publicId=${this.publicId}
              .copyText=${n(this.publicId)}
            ></player-name>
          `:void 0})}renderBody(e){return f`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(e)}</div>
      </div>
    `}renderTab(e){switch(e){case`games`:return this.renderGames();case`clans`:return this.renderClans();case`progression`:return this.renderProgression();default:return this.renderProfile()}}renderClans(){return this.loading?this.renderLoadingSpinner(t(`player_profile.loading`)):this.profileLoaded()?this.clans.length===0?f`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🛡️</span>
          <p class="text-white/40 text-sm">
            ${t(`player_profile.no_clans`)}
          </p>
        </div>
      `:f`
      <div class="space-y-3">
        ${this.clans.map(e=>f`
            <clan-card
              .clan=${{tag:e.tag,name:e.name,description:``,isOpen:!1,memberCount:e.memberCount,softBalance:e.softBalance,hardBalance:e.hardBalance}}
              .clanRole=${e.role}
              @clan-select=${e=>this.openClan(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `:this.renderNotFound()}openClan(e){let t=this.publicId;t!==null&&document.querySelector(`clan-modal`)?.openFromProfile(e,t,this.openedFrom)}returnFromClan(e,t){this.open({publicID:e,tab:`clans`}),this.openedFrom=t}renderGames(){let e=this.publicId;return e?f`
      <player-game-history-view
        .publicId=${e}
        .cachedState=${this.gameHistoryCache?.publicId===e?this.gameHistoryCache:null}
        @history-updated=${e=>{this.gameHistoryCache=e.detail}}
        @view-stats=${e=>this.openGameStats(e.detail.gameId)}
        @view-game=${e=>this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `:f`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🎮</span>
          <p class="text-white/40 text-sm">
            ${t(`account_modal.no_games`)}
          </p>
        </div>
      `}renderProfile(){if(this.loading)return this.renderLoadingSpinner(t(`player_profile.loading`));let e=this.publicId;if(!this.profileLoaded()||e===null)return this.renderNotFound();let r=this.progressView();return f`
      ${r===null?this.ffaRating===null?_:f`<ffa-rating-summary
                class="mb-4 block"
                .rating=${this.ffaRating}
              ></ffa-rating-summary>`:f`<profile-card
              class="mb-4 block"
              .username=${this.username??this.publicId??``}
              .clanTag=${this.displayClanTag}
              .progress=${r.progress}
              .provisional=${r.provisional}
              .ffaRating=${this.ffaRating}
              .openKey=${`profile-${this.openCount}`}
            ></profile-card>`}
      <profile-share
        class="mb-[18px] block"
        .url=${n(e)}
        .name=${this.username??e}
      ></profile-share>
      <player-stats-tree-view
        .statsTree=${this.statsTree}
      ></player-stats-tree-view>
    `}renderProgression(){let e=this.progressView();return e===null?this.renderProfile():f`<profile-progression
      .progress=${e.progress}
      .confirmedLevel=${e.confirmedLevel}
      .provisional=${e.provisional}
      .publicId=${this.publicId}
      .popKey=${`profile-${this.openCount}`}
    ></profile-progression>`}profileLoaded(){return!!this.publicId&&!!this.statsTree}renderNotFound(){return f`
      <div
        class="mx-auto flex max-w-2xl flex-col items-center px-6 py-12 text-center"
        data-not-found
      >
        <div
          class="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="8" r="4" />
            <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 3 .8" />
            <path d="M17 14.5a2.5 2.5 0 1 1 3.2 2.4c-.7.2-1.2.8-1.2 1.6" />
            <path d="M19 21h.01" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-white">
          ${t(`player_profile.not_found_title`)}
        </h2>
        <p class="mt-2 max-w-md text-sm text-white/60">
          ${t(`player_profile.not_found_body`)}
        </p>
        ${this.openedLink===null?_:f`<p
                class="mt-3 break-all font-mono text-xs text-white/35"
                data-opened-link
              >
                ${this.openedLink}
              </p>`}
        <!-- Side by side where there's room, stacked on a phone. -->
        <div
          class="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          data-not-found-actions
        >
          <o-button
            variant="primary"
            size="md"
            translationKey="player_profile.play"
            data-action="play"
            @click=${()=>this.goHome()}
          ></o-button>
          <o-button
            variant="secondary"
            size="md"
            translationKey="player_profile.view_leaderboard"
            data-action="leaderboard"
            @click=${()=>this.openLeaderboard()}
          ></o-button>
        </div>
      </div>
    `}goHome(){this.close()}openLeaderboard(){this.close(),document.querySelector(`leaderboard-modal`)?.open()}open(e){let t=this.isOpen(),n=this.publicId;super.open(e),t&&this.isOpen()&&this.publicId!==n&&i.syncOpened(this.routerName,e)}onOpen(e){let t=typeof e?.publicID==`string`&&e.publicID.length>0?e.publicID:null;if(this.restoreGamesScrollAfterOpen&&t!==null&&t===this.publicId){this.restoreGamesScrollAfterOpen=!1,this.restoreGamesScroll();return}this.wantsProgressionTab=typeof e?.tab==`string`?e.tab===`progression`:this.activeTab===`progression`,(this.wantsProgressionTab||this.activeTab===`progression`)&&(this.activeTab=`stats`),this.openedFrom=null,this.openCount=++ri,this.publicId=t,this.username=null,this.statsTree=null,this.clans=[],this.displayClanTag=null,this.ffaRating=null,this.progress=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.openedLink=t!==null&&i.isPathRouted(`profile`)&&_t(window.location.pathname)===t?`${window.location.host}${window.location.pathname}`:null,this.loading=t!==null,t!==null&&this.loadProfile(t)}async loadProfile(e){let t=++this.loadGeneration,n=()=>t===this.loadGeneration&&this.publicId===e,r=++this.progressRead;ni(e).then(e=>{if(!n()||r!==this.progressRead)return;this.progress=e;let t=this.wantsProgressionTab;this.wantsProgressionTab=!1,t&&e!==null&&this.activeTab===`stats`&&this.isOpen()&&this.setActiveTab(`progression`)});let i=await dt(e);n()&&(this.loading=!1,this.statsTree=i===!1?null:i.stats,this.username=i===!1?null:i.username??null,this.clans=i===!1?[]:i.clans??[],this.displayClanTag=i===!1?null:i.displayClanTag??null,this.ffaRating=i===!1?null:ln(i.ffaRating))}onClose(){}openGameStats(e){this.gamesScrollTop=this.modalEl?.getScrollTop()??0,document.querySelector(`game-stats-modal`)?.openFromProfile(e,this.publicId??void 0)}viewGame(e){this.close();let t=encodeURIComponent(e),n=re(S.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}}))}returnToGames(){this.restoreGamesScrollAfterOpen=!0,this.open({publicID:this.publicId??void 0,tab:`games`})}async restoreGamesScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`player-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gamesScrollTop)}openFromClan(e){this.open({publicID:e}),this.openedFrom=`clan`}openFromLeaderboard(e){this.open({publicID:e}),this.openedFrom=`leaderboard`}openFromAccount(e){this.open({publicID:e}),this.openedFrom=`account`}back(){let e=this.openedFrom;this.close(),e===`clan`?document.querySelector(`clan-modal`)?.returnFromPlayerProfile():e===`leaderboard`?document.querySelector(`leaderboard-modal`)?.open():e===`account`&&document.querySelector(`account-modal`)?.returnToFriends()}};y([h()],$.prototype,`publicId`,void 0),y([h()],$.prototype,`username`,void 0),y([h()],$.prototype,`statsTree`,void 0),y([h()],$.prototype,`clans`,void 0),y([h()],$.prototype,`displayClanTag`,void 0),y([h()],$.prototype,`ffaRating`,void 0),y([h()],$.prototype,`progress`,void 0),y([h()],$.prototype,`loading`,void 0),y([h()],$.prototype,`openedLink`,void 0),$=y([p(`player-profile-modal`)],$);export{$ as PlayerProfileModal,jn as a,cn as c,Nn as i,Q as n,An as o,n as playerProfileUrl,Mn as r,M as s,ni as t};