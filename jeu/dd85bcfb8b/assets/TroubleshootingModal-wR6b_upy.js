import{Yi as e,_n as t,oi as n,os as r,pi as i,ri as a,si as o,sr as s,vn as c}from"./index-DOVkn8Nm.js";async function l(e){let t=navigator.userAgentData,n=s.os,r={engine:t?.brands?t.brands.map(e=>e.brand).join(`, `):navigator.userAgent,platform:navigator.platform,os:n,dpr:window.devicePixelRatio},i=`Canvas2D`,a=e.getContext(`webgl2`,{antialias:!0})??e.getContext(`webgl`,{antialias:!0});a&&(i=typeof WebGL2RenderingContext<`u`&&a instanceof WebGL2RenderingContext?`WebGL2`:`WebGL1`);let o={type:i};if(a){o.antialias=a.getContextAttributes()?.antialias??!1,o.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);let e=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);o.shaderHighp=e!==null&&e.precision>0;let t=a.getExtension(`WEBGL_debug_renderer_info`);if(t){let e=a.getParameter(t.UNMASKED_RENDERER_WEBGL);o.gpu={vendor:a.getParameter(t.UNMASKED_VENDOR_WEBGL),renderer:e,software:/swiftshader|llvmpipe|software/i.test(e)}}else o.gpu={unavailable:!0}}let c;if(`getBattery`in navigator)try{let e=await navigator.getBattery();c={charging:e.charging,level:Math.round(e.level*100)+`%`}}catch{c={unavailable:!0}}else c={unavailable:!0};return{browser:r,rendering:o,power:c}}var u=r(`images/InfoIcon.svg`),d=class extends c{constructor(...e){super(...e),this.routerName=`troubleshooting`,this.markdown=`Loading...`,this.loading=!0,this.initialized=!1}async loadDiagnostics(){let e=document.createElement(`canvas`);this.diagnostics=await l(e),this.loading=!1,this.initialized=!0}renderHeaderSlot(){return t({titleContent:i` <div
        class="w-full flex flex-col sm:flex-row justify-between gap-2"
      >
        <span
          class="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest break-words hyphens-auto"
        >
          <a
            class="hover:text-blue-200 text-blue-400 cursor-pointer"
            @click=${this.close}
            >${e(`main.help`)}</a
          >
          / ${e(`troubleshooting.title`)}
        </span>
        <o-button
          variant="primary"
          size="sm"
          translationKey="common.copy"
          @click=${this.copyDiagnostics}
        ></o-button>
      </div>`,onBack:()=>this.close(),ariaLabel:e(`common.back`)})}renderBody(){return this.loading?i``:i`
      <div class="px-1">
        ${this.section(``,i`${this.infoTip(e(`troubleshooting.hardware_acceleration_tip`),!0)}`)}
        ${this.section(e(`troubleshooting.environment`),i`
            ${this.row(e(`troubleshooting.browser`),this.diagnostics.browser.engine)}
            ${this.row(e(`troubleshooting.platform`),this.diagnostics.browser.platform)}
            ${this.row(e(`troubleshooting.os`),this.diagnostics.browser.os)}
            ${this.row(e(`troubleshooting.device_pixel_ratio`),this.diagnostics.browser.dpr)}
            ${this.infoTip(e(`troubleshooting.chromium_tip`))}
          `)}
        ${this.section(e(`troubleshooting.rendering`),i`
            ${this.row(e(`troubleshooting.renderer`),this.describeRenderer(this.diagnostics.rendering))}
            ${this.row(e(`troubleshooting.max_texture_size`),this.diagnostics.rendering.maxTextureSize??e(`troubleshooting.unknown`))}
            ${this.row(e(`troubleshooting.high_precision_shaders`),this.diagnostics.rendering.shaderHighp===!0?e(`troubleshooting.yes`):e(`troubleshooting.no`))}${this.row(e(`troubleshooting.gpu`),!this.diagnostics.rendering.gpu||this.diagnostics.rendering.gpu.unavailable?e(`troubleshooting.unavailable`):`${this.diagnostics.rendering.gpu.vendor} — ${this.diagnostics.rendering.gpu.renderer}`)}
            ${this.infoTip(e(`troubleshooting.gpu_tip`))}
          `)}
        ${this.section(e(`troubleshooting.power`),i`
            ${this.diagnostics.power.unavailable?this.row(e(`troubleshooting.battery`),e(`troubleshooting.unavailable`)):i`
                    ${this.row(e(`troubleshooting.charging`),this.diagnostics.power.charging?e(`troubleshooting.yes`):e(`troubleshooting.no`))}
                    ${this.row(e(`troubleshooting.battery_level`),this.diagnostics.power.level)}
                  `}
            ${this.infoTip(e(`troubleshooting.power_saving_tip`))}
          `)}
      </div>
    `}infoTip(e,t){return i`
      <div
        class="mt-2 ${t?`bg-orange-500/10`:`bg-white/10`} flex gap-2 text-white py-1 px-3 rounded-sm  border-1 ${t?`border-orange-400`:`border-white/40`}"
      >
        <img src="${u}" class="w-4" />
        ${e}
      </div>
    `}onOpen(){this.initialized||(this.initialized=!0,this.loadDiagnostics())}section(e,t){return i`
      <div class="px-4 py-3">
        <h4
          class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400"
        >
          ${e}
        </h4>
        <div class="space-y-1">${t}</div>
      </div>
    `}row(e,t){return i`
      <div class="flex justify-between gap-4 text-sm">
        <span class="text-slate-400">${e}</span>
        <span class="text-right text-white max-w-100">${t}</span>
      </div>
    `}async copyDiagnostics(){if(!this.diagnostics)return;let t="```json\n"+JSON.stringify(this.diagnostics,null,2)+"\n```";await navigator.clipboard.writeText(t),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:i`${e(`troubleshooting.copied_to_clipboard`)}`,type:`info`,duration:3e3}}))}describeRenderer(t){return t.gpu?.software?e(`troubleshooting.software_rendering`):t.type===`Canvas2D`?e(`troubleshooting.canvas_2d_no_gpu`):`${t.type}`}close(){let e=this.isOpen();this.unregisterEscapeHandler(),this.onClose(),this.inline?(this.style.pointerEvents=`none`,e&&window.showPage?.(`page-help`)):this.modalEl?.close()}};a([n({type:String})],d.prototype,`markdown`,void 0),a([n({type:Object})],d.prototype,`diagnostics`,void 0),a([n({type:Boolean})],d.prototype,`loading`,void 0),d=a([o(`troubleshooting-modal`)],d);export{d as TroubleshootingModal};