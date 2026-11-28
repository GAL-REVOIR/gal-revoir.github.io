import{Gn as e,li as t,ms as n,ra as r,xi as i,zt as a}from"./index-hx7tETuk.js";var o=(e,t=`account_modal.link_google`)=>i`
  <button
    @click=${e}
    class="w-full px-6 py-3 text-[#1f1f1f] bg-white hover:bg-[#f7f8f8] border border-[#dadce0] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    <img
      src=${n(`images/GoogleLogo.svg`)}
      alt=${r(`account_modal.google_alt`)}
      class="w-5 h-5"
    />
    <span class="font-bold tracking-wide">${r(t)}</span>
  </button>
`,s={google:`account_modal.link_google_success`,already_linked:`account_modal.link_google_already_linked`,steam:`account_modal.link_steam_success`,account_already_has_steam:`steam_link_modal.reason_account_already_has_steam`,steam_linked_elsewhere:`steam_link_modal.reason_steam_linked_elsewhere`,steam_has_progress:`steam_link_modal.reason_steam_has_progress`,error:`account_modal.link_google_error`,steam_error:`account_modal.link_steam_error`};async function c(){let n=()=>void t(r(`steam_link_modal.reason_steam_has_progress`)),i=await a();if(!i.ok){if(i.reason===`rate_limited`){t(r(`steam_link_modal.reason_rate_limited`,{seconds:i.retryAfterSeconds??0}));return}return n()}let o=i.conflict;if(o===null)return n();if(!o.discardable){t(r(o.block===`paid`?`steam_link_modal.reason_discard_blocked_paid`:`steam_link_modal.reason_discard_blocked`));return}await e(`steam-link-modal`).catch(()=>{});let s=document.querySelector(`steam-link-modal`);if(s===null||typeof s.openForConflict!=`function`)return console.warn(`offerSteamConflictDiscard: steam-link-modal unavailable`),n();await s.openForConflict(o.account)}function l(e){let n=typeof e?.link==`string`?e.link:void 0;if(n===void 0)return;let i=new URLSearchParams(window.location.hash.slice(1));i.delete(`link`);let a=i.toString();if(history.replaceState(null,``,a?`#${a}`:window.location.pathname+window.location.search),!Object.prototype.hasOwnProperty.call(s,n))return;if(n===`steam_has_progress`){c();return}let o=s[n];t(r(o))}export{o as n,l as t};