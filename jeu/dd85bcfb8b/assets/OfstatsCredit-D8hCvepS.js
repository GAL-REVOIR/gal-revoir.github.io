import{Yi as e,ci as t,oi as n,os as r,pi as i,ri as a,si as o,ui as s}from"./index-DOVkn8Nm.js";var c=[`iron`,`bronze`,`silver`,`gold`,`platinum`,`diamond`,`master`,`grandmaster`],l={iron:`ffa_rating.tier.iron`,bronze:`ffa_rating.tier.bronze`,silver:`ffa_rating.tier.silver`,gold:`ffa_rating.tier.gold`,platinum:`ffa_rating.tier.platinum`,diamond:`ffa_rating.tier.diamond`,master:`ffa_rating.tier.master`,grandmaster:`ffa_rating.tier.grandmaster`},u={III:0,II:1,I:2},d=c.slice(0,7),f=[`I`,`II`,`III`];function p(e){if(e===`Grandmaster`)return{base:`grandmaster`,division:null};let t=e.split(` `);if(t.length!==2||!f.includes(t[1]))return null;let n=d.find(e=>e[0].toUpperCase()+e.slice(1)===t[0]);return n===void 0?null:{base:n,division:t[1]}}function m(t){let n=e(l[t.base]);return t.division===null?n:`${n} ${t.division}`}function h(e){let t=p(e);return t===null?e:m(t)}function g(e){let t=p(e);if(t===null)return null;let n=c.indexOf(t.base);return t.division===null?n*3:n*3+u[t.division]}function _(e){return String(Math.round(e))}function v(e,t){return`${_(e)} ± ${_(t)}`}function y(e){let t=Math.round(e);return t===0?`0`:t>0?`+${t}`:String(t)}function b(e){return(e*100).toFixed(1)}var x={sm:`text-[10px] px-1.5 py-0.5`,md:`text-xs px-2 py-0.5`,lg:`text-sm px-3 py-1`},S={sm:20,md:24,lg:48},C={sm:`text-xs`,md:`text-sm`};function w(e,t){return t===`lg`?`images/ffa-tiers/detailed/${e.division===null?e.base:`${e.base}-${e.division.toLowerCase()}`}.svg`:`images/ffa-tiers/compact/${e.base}.svg`}var T=class extends t{constructor(...e){super(...e),this.size=`sm`}createRenderRoot(){return this}render(){if(this.tier){let e=p(this.tier);if(e===null)return i`<span
          data-ffa-tier="unknown"
          title=${this.tier}
          class="inline-flex align-middle"
          ><span
            class="rounded-full font-bold tracking-wide whitespace-nowrap bg-white/10 text-white/70 ${x[this.size]}"
            >${this.tier}</span
          ></span
        >`;let t=m(e);return i`<span
        data-ffa-tier=${e.base}
        title=${t}
        class="inline-flex align-middle"
        >${this.renderTier(e,t)}</span
      >`}if(this.calibrationGames!==void 0){let t=Math.min(10,Math.max(0,Math.round(this.calibrationGames)));return i`<span
        data-ffa-calibrating
        title=${e(`ffa_rating.calibrating`,{n:t})}
        class="inline-flex align-middle"
        >${this.renderCalibrating(t)}</span
      >`}return s}renderTier(e,t){let n=this.size,a=S[n],o=r(w(e,n));if(n===`lg`)return i`<img
        data-ffa-tier-img
        src=${o}
        alt=${t}
        width=${a}
        height=${a}
        decoding="async"
        draggable="false"
        class="block shrink-0"
      />`;let c=n===`sm`;return i`<span class="inline-flex items-center gap-1.5 whitespace-nowrap"
      ><img
        data-ffa-tier-img
        src=${o}
        alt=""
        width=${a}
        height=${a}
        decoding="async"
        draggable="false"
        class="block shrink-0"
      /><span
        data-ffa-tier-label
        class="${c?`sr-only sm:not-sr-only`:``} font-bold uppercase tracking-wide text-white ${C[n]}"
        >${t}</span
      >${c&&e.division!==null?i`<span
              data-ffa-division
              aria-hidden="true"
              class="sm:hidden font-bold text-white ${C[n]}"
              >${e.division}</span
            >`:s}</span
    >`}renderCalibrating(t){return i`<span
      class="rounded-full border border-dashed border-white/40 text-white/70 font-bold tracking-wide whitespace-nowrap ${x[this.size]}"
      >${e(`ffa_rating.calibrating`,{n:t})}</span
    >`}};a([n({type:String})],T.prototype,`tier`,void 0),a([n({type:String})],T.prototype,`size`,void 0),a([n({type:Number})],T.prototype,`calibrationGames`,void 0),T=a([o(`ffa-tier-badge`)],T);var E=`https://ofstats.io/leaderboard/how-it-works`,D=class extends t{createRenderRoot(){return this}render(){return i`<a
      data-ofstats-credit
      href=${E}
      target="_blank"
      rel="noopener noreferrer"
      class="text-xs font-medium text-malibu-blue no-underline transition-colors duration-200 hover:text-aquarius"
      >${e(`ffa_rating.credit`)}</a
    >`}};D=a([o(`ofstats-credit`)],D);export{b as a,v as c,g as i,p as l,l as n,_ as o,h as r,y as s,c as t};