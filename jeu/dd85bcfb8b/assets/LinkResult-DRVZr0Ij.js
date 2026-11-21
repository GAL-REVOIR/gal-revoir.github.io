import{Bn as e,Pt as t,Yi as n,os as r,pi as i,ti as a}from"./index-DOVkn8Nm.js";var o=(e,t=`account_modal.link_google`)=>i`
  <button
    @click=${e}
    class="w-full px-6 py-3 text-[#1f1f1f] bg-white hover:bg-[#f7f8f8] border border-[#dadce0] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    <img
      src=${r(`images/GoogleLogo.svg`)}
      alt=${n(`account_modal.google_alt`)}
      class="w-5 h-5"
    />
    <span class="font-bold tracking-wide">${n(t)}</span>
  </button>
`,s={google:`account_modal.link_google_success`,already_linked:`account_modal.link_google_already_linked`,steam:`account_modal.link_steam_success`,account_already_has_steam:`steam_link_modal.reason_account_already_has_steam`,steam_linked_elsewhere:`steam_link_modal.reason_steam_linked_elsewhere`,steam_has_progress:`steam_link_modal.reason_steam_has_progress`,error:`account_modal.link_google_error`,steam_error:`account_modal.link_steam_error`};async function c(){let r=()=>void a(n(`steam_link_modal.reason_steam_has_progress`)),i=await t();if(!i.ok){if(i.reason===`rate_limited`){a(n(`steam_link_modal.reason_rate_limited`,{seconds:i.retryAfterSeconds??0}));return}return r()}let o=i.conflict;if(o===null)return r();if(!o.discardable){a(n(o.block===`paid`?`steam_link_modal.reason_discard_blocked_paid`:`steam_link_modal.reason_discard_blocked`));return}await e(`steam-link-modal`).catch(()=>{});let s=document.querySelector(`steam-link-modal`);if(s===null||typeof s.openForConflict!=`function`)return console.warn(`offerSteamConflictDiscard: steam-link-modal unavailable`),r();await s.openForConflict(o.account)}function l(e){let t=typeof e?.link==`string`?e.link:void 0;if(t===void 0)return;let r=new URLSearchParams(window.location.hash.slice(1));r.delete(`link`);let i=r.toString();if(history.replaceState(null,``,i?`#${i}`:window.location.pathname+window.location.search),!Object.prototype.hasOwnProperty.call(s,t))return;if(t===`steam_has_progress`){c();return}let o=s[t];a(n(o))}export{o as n,l as t};