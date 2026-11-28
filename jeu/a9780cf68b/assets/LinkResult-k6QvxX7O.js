import{$i as e,Hn as t,It as n,_i as r,ai as i,us as a}from"./index-BHQpe8wU.js";var o=(t,n=`account_modal.link_google`)=>r`
  <button
    @click=${t}
    class="w-full px-6 py-3 text-[#1f1f1f] bg-white hover:bg-[#f7f8f8] border border-[#dadce0] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    <img
      src=${a(`images/GoogleLogo.svg`)}
      alt=${e(`account_modal.google_alt`)}
      class="w-5 h-5"
    />
    <span class="font-bold tracking-wide">${e(n)}</span>
  </button>
`,s={google:`account_modal.link_google_success`,already_linked:`account_modal.link_google_already_linked`,steam:`account_modal.link_steam_success`,account_already_has_steam:`steam_link_modal.reason_account_already_has_steam`,steam_linked_elsewhere:`steam_link_modal.reason_steam_linked_elsewhere`,steam_has_progress:`steam_link_modal.reason_steam_has_progress`,error:`account_modal.link_google_error`,steam_error:`account_modal.link_steam_error`};async function c(){let r=()=>void i(e(`steam_link_modal.reason_steam_has_progress`)),a=await n();if(!a.ok){if(a.reason===`rate_limited`){i(e(`steam_link_modal.reason_rate_limited`,{seconds:a.retryAfterSeconds??0}));return}return r()}let o=a.conflict;if(o===null)return r();if(!o.discardable){i(e(o.block===`paid`?`steam_link_modal.reason_discard_blocked_paid`:`steam_link_modal.reason_discard_blocked`));return}await t(`steam-link-modal`).catch(()=>{});let s=document.querySelector(`steam-link-modal`);if(s===null||typeof s.openForConflict!=`function`)return console.warn(`offerSteamConflictDiscard: steam-link-modal unavailable`),r();await s.openForConflict(o.account)}function l(t){let n=typeof t?.link==`string`?t.link:void 0;if(n===void 0)return;let r=new URLSearchParams(window.location.hash.slice(1));r.delete(`link`);let a=r.toString();if(history.replaceState(null,``,a?`#${a}`:window.location.pathname+window.location.search),!Object.prototype.hasOwnProperty.call(s,n))return;if(n===`steam_has_progress`){c();return}let o=s[n];i(e(o))}export{o as n,l as t};