import{$i as e,_i as t,ai as n,bn as r,di as i,ni as a,si as o,yn as s}from"./index-BHQpe8wU.js";import"./Difficulties-BwlSgaQd.js";var c=class extends r{constructor(){super(),this.isAttemptingLogin=!1,this.retryInterval=void 0,this.loginGeneration=0,this.token=null,this.email=null,this.attemptCount=0}modalConfig(){return{maxWidth:`620px`}}renderHeaderSlot(){return s({title:e(`token_login_modal.title`),onBack:()=>this.close(),ariaLabel:e(`common.back`)})}renderBody(){return t`
      <div class="flex-1 flex flex-col gap-4 p-6">
        ${this.email?this.loginSuccess(this.email):this.loggingIn()}
      </div>
    `}loggingIn(){return t`
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full border border-blue-400/40 bg-blue-500/10 flex items-center justify-center"
        >
          <div
            class="w-6 h-6 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"
          ></div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg font-semibold text-white">${e(`token_login_modal.title`)}</p>
          <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-blue-400/80 animate-pulse"></div>
          </div>
        </div>
      </div>
    `}loginSuccess(n){return t`
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full border border-emerald-400/40 bg-emerald-500/10 flex items-center justify-center"
        >
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
        <p class="text-base text-white/90">${e(`token_login_modal.success`,{email:n})}</p>
      </div>
    `}openWithToken(e){this.token=e,this.open()}open(e){this.token&&super.open(e)}onOpen(){this.loginGeneration++,this.email=null,this.attemptCount=0,this.isAttemptingLogin=!1,clearInterval(this.retryInterval),clearTimeout(this.successTimeout),this.requestUpdate(),this.retryInterval=setInterval(()=>this.tryLogin(),3e3),this.tryLogin()}onClose(){this.loginGeneration++,this.token=null,clearInterval(this.retryInterval),clearTimeout(this.successTimeout),this.attemptCount=0,this.isAttemptingLogin=!1}async tryLogin(){let t=this.loginGeneration;if(!this.isAttemptingLogin){if(this.attemptCount>3){this.close(),n(e(`error_modal.login_failed`));return}if(this.attemptCount++,this.isAttemptingLogin=!0,this.token===null){this.close();return}try{let r=await a(this.token);if(t!==this.loginGeneration||r.status===`retry`)return;if(r.status===`failed`){clearInterval(this.retryInterval),this.close();let t={consumed:`error_modal.login_token_consumed`,expired:`error_modal.login_token_expired`,invalid:`error_modal.login_token_invalid`}[r.code];n(e(t));return}this.email=r.email,clearInterval(this.retryInterval),this.successTimeout=setTimeout(()=>{t===this.loginGeneration&&(this.close(),window.location.reload())},1e3),this.requestUpdate()}catch(e){t===this.loginGeneration&&console.error(e)}finally{t===this.loginGeneration&&(this.isAttemptingLogin=!1)}}}};c=o([i(`token-login`)],c);export{c as TokenLoginModal};