import{n as e}from"./rolldown-runtime-BpQH8Ho1.js";import{$a as t,Cn as n,Ni as r,Qa as i,Qi as a,Sn as o,ao as s,di as c,do as ee,dr as te,fr as l,gi as u,hi as d,io as f,mi as p,mo as ne,oo as re,pi as m,po as h,qt as ie,ra as g,ro as _,so as ae,to as v,ui as oe,vi as y,xi as b}from"./index-hx7tETuk.js";import{n as se,r as ce,t as le}from"./MapLayerSettings-DErVXFKn.js";import{t as x}from"./render-settings-CPXrWPgl.js";import{t as ue}from"./KeyboardLayout-BJVsBE3n.js";import{n as de,t as S}from"./CuePlayer-DPpz4tTX.js";var C=[{nameKey:`graphics_setting.preset_default`,descKey:`graphics_setting.preset_default_desc`,overrides:{}},{nameKey:`graphics_setting.preset_night`,descKey:`graphics_setting.preset_night_desc`,overrides:{lighting:{ambient:.36}}},{nameKey:`graphics_setting.preset_evans_pick`,descKey:`graphics_setting.preset_evans_pick_desc`,overrides:{name:{hoverFadeAlpha:.4,hoverGlowWidth:8},structure:{classicIcons:!1},mapOverlay:{navalHighlight:!0,highlightFillBrighten:.68,highlightBrighten:.17,highlightThicken:3,territorySaturation:1,territoryAlpha:.54},terrain:{backgroundColor:`#131b25`,oceanColor:`#274963`,plainsColor:`#b3d080`,highlandColor:`#d6c69a`,mountainColor:`#fff5f5`},lighting:{ambient:.76,falloffPower:1}}},{nameKey:`graphics_setting.preset_colorblind`,descKey:`graphics_setting.preset_colorblind_desc`,overrides:{palette:`colorblind`,affiliation:{selfColor:`#0072b2`,allyColor:`#56b4e9`,enemyColor:`#d55e00`},mapOverlay:{friendlyTintColor:`#0072b2`,embargoTintColor:`#d55e00`,friendlyTintRatio:.85,embargoTintRatio:.85}}}].map(e=>({nameKey:e.nameKey,descKey:e.descKey,overrides:ne.parse(e.overrides)}));function w(e){return typeof e!=`object`||!e?JSON.stringify(e):Array.isArray(e)?`[${e.map(w).join(`,`)}]`:`{${Object.entries(e).filter(([,e])=>e!==void 0).sort(([e],[t])=>e<t?-1:1).map(([e,t])=>`${JSON.stringify(e)}:${w(t)}`).join(`,`)}}`}function fe(e){let t;try{t=JSON.parse(e)}catch{return null}let n=ne.safeParse(t);return!n.success||w(n.data)!==w(t)?null:n.data}function T(e){if(e.hasGraphicsPresets())return;let t=e.graphicsOverrides(),n=C.find(e=>e.nameKey===`graphics_setting.preset_colorblind`);t.palette===`colorblind`&&n!==void 0&&(t={...t,affiliation:{...n.overrides.affiliation,...t.affiliation},mapOverlay:{...n.overrides.mapOverlay,...t.mapOverlay}},e.setGraphicsOverrides(t));let r=Object.keys(t).length>0&&!C.some(e=>w(e.overrides)===w(t));e.setGraphicsPresets(r?{[g(`graphics_setting.preset_migrated_name`)]:t}:{})}var E=class extends u{constructor(...e){super(...e),this.label=`Setting`,this.description=``,this.action=``,this.defaultKey=``,this.value=``,this.display=``,this.easter=!1,this.allowModifiers=!1,this.listening=!1}createRenderRoot(){return this}render(){let e=this.value===``?``:this.value||this.defaultKey,t=this.value!==void 0&&this.value!==this.defaultKey,n=this.display||e;return b`
      <div
        class="flex flex-row items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-4 ${this.easter?`bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)] bg-[length:1400%_1400%] animate-rainbow-bg text-white hover:bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)]`:``}"
      >
        <div class="flex flex-col flex-1 min-w-0 mr-4">
          <label class="text-white font-bold text-base block mb-1"
            >${this.label}</label
          >
          <div class="text-white/50 text-sm leading-snug">
            ${this.description}
          </div>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <div
            class="relative h-12 min-w-[80px] px-4 flex items-center justify-center bg-black/60 border border-white/20 rounded-lg text-xl font-bold font-mono shadow-inner hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all cursor-pointer select-none text-white
            ${this.listening?`border-blue-500 text-blue-400 ring-2 ring-blue-500/50`:``}"
            role="button"
            aria-label="${g(`user_setting.press_a_key`)}"
            tabindex="0"
            @keydown=${this.handleKeydown}
            @click=${this.startListening}
            @blur=${this.handleBlur}
          >
            ${this.listening?`...`:this.displayKey(n)}
          </div>

          <div class="flex flex-col gap-1">
            <button
              class="text-[10px] font-bold uppercase tracking-wider bg-white/5 hover:bg-white/20 border border-white/10 px-3 py-1 rounded text-white/60 hover:text-white transition-colors ${t?``:`opacity-50 cursor-not-allowed pointer-events-none`}"
              @click=${this.resetToDefault}
              ?disabled=${!t}
            >
              ${g(`user_setting.reset`)}
            </button>
            <button
              class="text-[10px] font-bold uppercase tracking-wider bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 px-3 py-1 rounded text-white/60 hover:text-red-200 transition-colors"
              @click=${this.unbindKey}
            >
              ${g(`user_setting.unbind`)}
            </button>
          </div>
        </div>
      </div>
    `}displayKey(e){return!e||e===`Null`?g(`common.none`):r(e)}startListening(){this.listening=!0,this.requestUpdate()}handleKeydown(e){if(!this.listening)return;if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.listening=!1,this.requestUpdate();return}if(e.key===`Tab`)return;let t=e.code===`ShiftLeft`||e.code===`ShiftRight`||e.code===`ControlLeft`||e.code===`ControlRight`||e.code===`AltLeft`||e.code===`AltRight`||e.code===`MetaLeft`||e.code===`MetaRight`;if(t&&!this.allowModifiers)return;e.preventDefault();let n=t?e.code:e.shiftKey?`Shift+${e.code}`:e.code,r=t?e.code:e.shiftKey?`Shift+${e.key.toUpperCase()}`:e.key,i=this.value;this.value=n;let a=new CustomEvent(`change`,{detail:{action:this.action,value:n,key:r,prevValue:i},bubbles:!0,composed:!0});this.dispatchEvent(a),this.listening=!1,this.requestUpdate()}handleBlur(){this.listening=!1,this.requestUpdate()}resetToDefault(){this.value=this.defaultKey,this.dispatchEvent(new CustomEvent(`change`,{detail:{action:this.action,value:this.defaultKey},bubbles:!0,composed:!0}))}unbindKey(){this.value=`Null`,this.dispatchEvent(new CustomEvent(`change`,{detail:{action:this.action,value:`Null`,key:``},bubbles:!0,composed:!0})),this.requestUpdate()}};c([p()],E.prototype,`label`,void 0),c([p()],E.prototype,`description`,void 0),c([p({type:String,reflect:!0})],E.prototype,`action`,void 0),c([p({type:String})],E.prototype,`defaultKey`,void 0),c([p({type:String})],E.prototype,`value`,void 0),c([p({type:String})],E.prototype,`display`,void 0),c([p({type:Boolean})],E.prototype,`easter`,void 0),c([p({type:Boolean})],E.prototype,`allowModifiers`,void 0),E=c([d(`setting-keybind`)],E);var D=class extends u{constructor(...e){super(...e),this.label=`Setting`,this.description=``,this.value=0,this.min=0,this.max=100,this.easter=!1}createRenderRoot(){return this}handleInput(e){let t=e.target,n=Number(t.value);this.value=n,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:n},bubbles:!0,composed:!0}))}render(){return b`
      <div
        class="flex flex-row items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-4 ${this.easter?`bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)] bg-[length:1400%_1400%] animate-rainbow-bg text-white hover:bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)]`:``}"
      >
        <div class="flex flex-col flex-1 min-w-0 mr-4">
          <label
            class="text-white font-bold text-base block mb-1"
            for="setting-number-input"
            >${this.label}</label
          >
          <div class="text-white/50 text-sm leading-snug">
            ${this.description}
          </div>
        </div>
        <input
          type="number"
          id="setting-number-input"
          class="shrink-0 w-[100px] py-2 px-3 border border-white/20 rounded-lg bg-black/60 text-white font-mono text-center focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          .value=${String(this.value??0)}
          min=${this.min}
          max=${this.max}
          @input=${this.handleInput}
        />
      </div>
    `}};c([p()],D.prototype,`label`,void 0),c([p()],D.prototype,`description`,void 0),c([p({type:Number})],D.prototype,`value`,void 0),c([p({type:Number})],D.prototype,`min`,void 0),c([p({type:Number})],D.prototype,`max`,void 0),c([p({type:Boolean})],D.prototype,`easter`,void 0),D=c([d(`setting-number`)],D);var O=class extends u{constructor(...e){super(...e),this.label=`Setting`,this.description=``,this.options=[],this.value=``,this.disabled=!1}createRenderRoot(){return this}handleChange(e){let t=e.target,n=this.options.find(e=>String(e.value)===t.value)?.value??t.value;this.value=String(n),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:n},bubbles:!0,composed:!0}))}render(){return b`
      <div
        class="flex flex-col w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-3"
      >
        <div class="flex flex-col min-w-0">
          <label
            class="text-white font-bold text-base block mb-1"
            for="setting-select-input"
            >${this.label}</label
          >
          <div class="text-white/50 text-sm leading-snug">
            ${this.description}
          </div>
        </div>
        <div class="relative w-full">
          <select
            id="setting-select-input"
            class="w-full appearance-none py-2 pl-3 pr-9 border border-white/20 rounded-lg bg-black/40 text-white font-mono text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            .value=${String(this.value)}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          >
            ${this.options.map(e=>b`<option
                  value=${String(e.value)}
                  ?selected=${String(e.value)===String(this.value)}
                >
                  ${e.label}
                </option>`)}
          </select>
          <span
            class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
            aria-hidden="true"
          >
            <svg
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    `}};c([p()],O.prototype,`label`,void 0),c([p()],O.prototype,`description`,void 0),c([p({type:Array})],O.prototype,`options`,void 0),c([p({type:String})],O.prototype,`value`,void 0),c([p({type:Boolean})],O.prototype,`disabled`,void 0),O=c([d(`setting-select`)],O);var k=class extends u{constructor(...e){super(...e),this.label=`Setting`,this.description=``,this.value=0,this.min=0,this.max=100,this.step=1,this.easter=!1,this.unit=`%`}createRenderRoot(){return this}handleInput(e){let t=e.target;this.value=Number(t.value),this.updateSliderStyle(t),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value},bubbles:!0,composed:!0}))}stopNativeChange(e){e.stopPropagation()}updateSliderStyle(e){let t=(this.value-this.min)/(this.max-this.min)*100,n=Math.max(0,Math.min(100,t));e.style.setProperty(`--fill`,`${n}%`)}updated(e){if(!e.has(`value`)&&!e.has(`min`)&&!e.has(`max`))return;let t=this.renderRoot.querySelector(`input[type=range]`);t&&this.updateSliderStyle(t)}firstUpdated(){let e=this.renderRoot.querySelector(`input[type=range]`);e&&this.updateSliderStyle(e)}render(){return b`
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-3 sm:gap-4 ${this.easter?`bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)] bg-[length:1400%_1400%] animate-rainbow-bg text-white hover:bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)]`:``}"
      >
        <div class="flex flex-col flex-1 min-w-0 sm:mr-4">
          <label class="text-white font-bold text-base block mb-1"
            >${this.label}</label
          >
          <div class="text-white/50 text-sm leading-snug">
            ${this.description}
          </div>
        </div>

        <div
          class="flex flex-col items-start sm:items-end gap-2 shrink-0 sm:w-auto sm:w-[200px]"
        >
          <div class="flex items-center gap-2 w-full">
            <span
              class="text-white font-bold text-sm shrink-0 text-right min-w-[3ch]"
              >${this.formatValue?this.formatValue(this.value):`${this.value}${this.unit}`}</span
            >
            <input
              type="range"
              class="flex-1 w-auto appearance-none h-2 bg-transparent rounded outline-none 
              [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded [&::-webkit-slider-runnable-track]:bg-[image:linear-gradient(to_right,var(--color-malibu-blue)_0%,var(--color-malibu-blue)_var(--fill),rgba(255,255,255,0.1)_var(--fill),rgba(255,255,255,0.1)_100%)]
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-malibu-blue [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-mt-[6px] [&::-webkit-slider-thumb]:shadow-[var(--shadow-malibu-blue-ring-sm)] [&::-webkit-slider-thumb]:transition-all active:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:shadow-[var(--shadow-malibu-blue-ring-lg)]
              [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded [&::-moz-range-track]:bg-white/10
              [&::-moz-range-progress]:h-2 [&::-moz-range-progress]:rounded [&::-moz-range-progress]:bg-malibu-blue
              [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-malibu-blue [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-[var(--shadow-malibu-blue-ring-sm)] [&::-moz-range-thumb]:transition-all active:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:shadow-[var(--shadow-malibu-blue-ring-lg)]"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              .value=${String(this.value)}
              @input=${this.handleInput}
              @change=${this.stopNativeChange}
            />
          </div>
        </div>
      </div>
    `}};c([p()],k.prototype,`label`,void 0),c([p()],k.prototype,`description`,void 0),c([p({type:Number})],k.prototype,`value`,void 0),c([p({type:Number})],k.prototype,`min`,void 0),c([p({type:Number})],k.prototype,`max`,void 0),c([p({type:Number})],k.prototype,`step`,void 0),c([p({type:Boolean})],k.prototype,`easter`,void 0),c([p()],k.prototype,`unit`,void 0),c([p({attribute:!1})],k.prototype,`formatValue`,void 0),k=c([d(`setting-slider`)],k);var A=class extends u{constructor(...e){super(...e),this.label=`Setting`,this.description=``,this.id=``,this.checked=!1,this.easter=!1,this.disabled=!1}createRenderRoot(){return this}handleChange(e){let t=e.target;this.checked=t.checked}render(){let e=this.easter?`bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)] bg-[length:1400%_1400%] animate-rainbow-bg text-white hover:bg-[linear-gradient(270deg,#990033,#996600,#336600,#008080,#1c3f99,#5e0099,#990033)]`:``;return b`
      <label
        class="flex flex-row items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl transition-all gap-4 ${this.disabled?`opacity-50 cursor-not-allowed`:`hover:bg-white/10 cursor-pointer`} ${e}"
      >
        <div class="flex flex-col flex-1 min-w-0 mr-4">
          <div class="text-white font-bold text-base block mb-1">
            ${this.label}
          </div>
          <div class="text-white/50 text-sm leading-snug">
            ${this.description}
          </div>
        </div>

        <div class="relative inline-block w-[52px] h-[28px] shrink-0">
          <input
            type="checkbox"
            class="opacity-0 w-0 h-0 peer"
            id=${this.id}
            .checked=${this.checked}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span
            class="absolute inset-0 bg-black/60 border border-white/10 transition-all duration-300 rounded-full
            before:absolute before:content-[''] before:h-5 before:w-5 before:left-[3px] before:top-[3px]
            before:bg-white/40 before:transition-all before:duration-300 before:rounded-full before:shadow-sm hover:before:bg-white/60
            peer-checked:bg-blue-600 peer-checked:border-blue-500 peer-checked:before:translate-x-[24px] peer-checked:before:bg-white"
          ></span>
        </div>
      </label>
    `}};c([p()],A.prototype,`label`,void 0),c([p()],A.prototype,`description`,void 0),c([p()],A.prototype,`id`,void 0),c([p({type:Boolean,reflect:!0})],A.prototype,`checked`,void 0),c([p({type:Boolean})],A.prototype,`easter`,void 0),c([p({type:Boolean,reflect:!0})],A.prototype,`disabled`,void 0),A=c([d(`setting-toggle`)],A);var j=`custom`,M=class extends u{constructor(...e){super(...e),this.userSettings=new s,this.lastSelected=null,this.onSettingsChanged=()=>this.requestUpdate()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback();for(let e of[i,t])globalThis.addEventListener(`${f}:${e}`,this.onSettingsChanged)}disconnectedCallback(){for(let e of[i,t])globalThis.removeEventListener(`${f}:${e}`,this.onSettingsChanged);super.disconnectedCallback()}isActive(e){return w(this.userSettings.graphicsOverrides())===w(e)}overridesForValue(e){let t=e.indexOf(`:`);if(t===-1)return;let n=e.slice(0,t),r=e.slice(t+1);return n===`builtin`?C.find(e=>e.nameKey===r)?.overrides:this.userSettings.graphicsPresets()[r]}selectedValue(){let e=this.lastSelected===null?void 0:this.overridesForValue(this.lastSelected);if(e!==void 0&&this.isActive(e))return this.lastSelected;let t=C.find(e=>this.isActive(e.overrides));if(t!==void 0)return`builtin:${t.nameKey}`;let n=Object.entries(this.userSettings.graphicsPresets()).find(([,e])=>this.isActive(e));return n===void 0?j:`user:${n[0]}`}onSelect(e){let t=e.target.value,n=this.overridesForValue(t);n!==void 0&&(T(this.userSettings),this.lastSelected=t,this.userSettings.setGraphicsOverrides(n))}async onDelete(){let e=this.selectedValue();if(!e.startsWith(`user:`))return;let t=e.slice(5);if(!await oe(g(`graphics_setting.preset_delete_confirm`,{name:t})))return;let n={...this.userSettings.graphicsPresets()};delete n[t],this.userSettings.setGraphicsPresets(n)}render(){let e=this.selectedValue(),t=Object.keys(this.userSettings.graphicsPresets());return b`
      <div class="flex gap-2 items-center">
        <select
          @change=${this.onSelect}
          class="flex-1 min-w-0 px-2 py-1.5 bg-slate-900 border border-slate-500 rounded-sm text-sm text-white cursor-pointer"
        >
          ${e===j?b`<option value=${j} .selected=${!0} disabled>
                  ${g(`graphics_setting.preset_custom`)}
                </option>`:null}
          ${C.map(t=>b`<option
                value=${`builtin:${t.nameKey}`}
                .selected=${e===`builtin:${t.nameKey}`}
              >
                ${g(t.nameKey)}
              </option>`)}
          ${t.map(t=>b`<option
                value=${`user:${t}`}
                .selected=${e===`user:${t}`}
              >
                ${t}
              </option>`)}
        </select>
        ${e.startsWith(`user:`)?b`
                <button
                  class="px-2 py-1 text-slate-400 hover:text-white"
                  @click=${this.onDelete}
                >
                  ✕
                </button>
              `:null}
      </div>
    `}};c([m()],M.prototype,`lastSelected`,void 0),M=c([d(`graphics-preset-selector`)],M);var N=class extends u{constructor(...e){super(...e),this.userSettings=new s,this.presetName=``,this.importText=``,this.importError=!1,this.copiedJson=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),T(this.userSettings)}disconnectedCallback(){clearTimeout(this.copyResetTimer),super.disconnectedCallback()}onPresetNameInput(e){this.presetName=e.target.value}onSavePreset(){let e=this.presetName.trim();e&&(this.userSettings.setGraphicsPresets({...this.userSettings.graphicsPresets(),[e]:this.userSettings.graphicsOverrides()}),this.presetName=``)}async onCopyJson(){let e=JSON.stringify(this.userSettings.graphicsOverrides(),null,2);try{await navigator.clipboard.writeText(e)}catch{return}this.copiedJson=!0,clearTimeout(this.copyResetTimer),this.copyResetTimer=setTimeout(()=>this.copiedJson=!1,1500)}onImportTextInput(e){this.importText=e.target.value,this.importError=!1}onImportApply(){try{let e=fe(this.importText);if(e===null){this.importError=!0;return}this.userSettings.setGraphicsOverrides(e)}catch{this.importError=!0;return}this.importText=``}render(){return b`
      <div
        class="flex flex-col w-full p-4 bg-white/5 border border-white/10 rounded-xl gap-3"
      >
        <div class="flex gap-3 items-center w-full">
          <input
            type="text"
            id="graphics-preset-name"
            aria-label=${g(`graphics_setting.preset_name_placeholder`)}
            .value=${this.presetName}
            placeholder=${g(`graphics_setting.preset_name_placeholder`)}
            spellcheck="false"
            maxlength="40"
            @input=${this.onPresetNameInput}
            class="flex-1 min-w-0 px-2 py-1.5 bg-black/40 border border-white/20 rounded-lg text-sm text-white"
          />
          <button
            id="graphics-save-preset"
            class="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white disabled:opacity-50"
            ?disabled=${this.presetName.trim()===``}
            @click=${this.onSavePreset}
          >
            ${g(`graphics_setting.save_preset_label`)}
          </button>
        </div>
      </div>

      <button
        id="graphics-copy-json"
        class="flex flex-row items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-4 text-left"
        @click=${this.onCopyJson}
      >
        <div class="flex flex-col flex-1 min-w-0 mr-4">
          <div class="text-white font-bold text-base block mb-1">
            ${g(`graphics_setting.copy_json_label`)}
          </div>
          <div class="text-white/50 text-sm leading-snug">
            ${g(`graphics_setting.copy_json_desc`)}
          </div>
        </div>
        <div class="text-white/50 text-sm shrink-0">
          ${this.copiedJson?g(`common.copied`):``}
        </div>
      </button>

      <div
        class="flex flex-col w-full p-4 bg-white/5 border border-white/10 rounded-xl gap-2"
      >
        <div class="text-white font-bold text-base">
          ${g(`graphics_setting.import_json_label`)}
        </div>
        <div class="text-white/50 text-sm leading-snug">
          ${g(`graphics_setting.import_json_desc`)}
        </div>
        <textarea
          id="graphics-import-json"
          aria-label=${g(`graphics_setting.import_json_label`)}
          rows="3"
          .value=${this.importText}
          spellcheck="false"
          @input=${this.onImportTextInput}
          class="w-full px-2 py-1.5 bg-black/40 border ${this.importError?`border-red-500`:`border-white/20`} rounded-lg text-sm text-white font-mono"
        ></textarea>
        ${this.importError?b`<div id="graphics-import-error" class="text-sm text-red-400">
                ${g(`graphics_setting.import_json_invalid`)}
              </div>`:y}
        <button
          id="graphics-import-apply"
          class="self-start px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white disabled:opacity-50"
          ?disabled=${this.importText.trim()===``}
          @click=${this.onImportApply}
        >
          ${g(`graphics_setting.import_json_apply`)}
        </button>
      </div>
    `}};c([m()],N.prototype,`presetName`,void 0),c([m()],N.prototype,`importText`,void 0),c([m()],N.prototype,`importError`,void 0),c([m()],N.prototype,`copiedJson`,void 0),N=c([d(`graphics-preset-tools`)],N);var P=class extends u{constructor(...e){super(...e),this.label=`Setting`,this.description=``,this.value=`#000000`}createRenderRoot(){return this}handleInput(e){let t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent(`change`,{detail:{value:t.value},bubbles:!0,composed:!0}))}render(){return b`
      <div
        class="flex flex-row items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-4"
      >
        <div class="flex flex-col flex-1 min-w-0 mr-4">
          <div class="text-white font-bold text-base block mb-1">
            ${this.label}
          </div>
          <div class="text-white/50 text-sm leading-snug">
            ${this.description}
          </div>
        </div>
        <input
          type="color"
          aria-label=${this.label}
          .value=${this.value}
          @input=${this.handleInput}
          class="w-12 h-9 shrink-0 bg-transparent border border-white/20 rounded-lg cursor-pointer"
        />
      </div>
    `}};c([p()],P.prototype,`label`,void 0),c([p()],P.prototype,`description`,void 0),c([p()],P.prototype,`value`,void 0),P=c([d(`setting-color`)],P);var F,pe=0,me=1,he=.05,ge={everyone:`graphics_setting.cosmetics_show_from_everyone`,teammates:`graphics_setting.cosmetics_show_from_teammates`,self:`graphics_setting.cosmetics_show_from_self`,none:`graphics_setting.cosmetics_show_from_none`},_e=[{key:`territorySkins`,labelKey:`graphics_setting.cosmetics_territory_skins_label`,descKey:`graphics_setting.cosmetics_territory_skins_desc`},{key:`flags`,labelKey:`graphics_setting.cosmetics_flags_label`,descKey:`graphics_setting.cosmetics_flags_desc`},{key:`crowns`,labelKey:`graphics_setting.cosmetics_crowns_label`,descKey:`graphics_setting.cosmetics_crowns_desc`},{key:`transportShipTrail`,labelKey:`graphics_setting.cosmetics_transport_ship_trails_label`,descKey:`graphics_setting.cosmetics_transport_ship_trails_desc`},{key:`nukeTrail`,labelKey:`graphics_setting.cosmetics_nuke_trails_label`,descKey:`graphics_setting.cosmetics_nuke_trails_desc`},{key:`nukeExplosion`,labelKey:`graphics_setting.cosmetics_nuke_explosions_label`,descKey:`graphics_setting.cosmetics_nuke_explosions_desc`},{key:`structures`,labelKey:`graphics_setting.cosmetics_structures_label`,descKey:`graphics_setting.cosmetics_structures_desc`},{key:`warship`,labelKey:`graphics_setting.cosmetics_warships_label`,descKey:`graphics_setting.cosmetics_warships_desc`},{key:`train`,labelKey:`graphics_setting.cosmetics_trains_label`,descKey:`graphics_setting.cosmetics_trains_desc`},{key:`railroad`,labelKey:`graphics_setting.cosmetics_railroads_label`,descKey:`graphics_setting.cosmetics_railroads_desc`}],ve=.2,ye=1.5,be=.05,xe=0,Se=.05,Ce=.001,we=0,Te=1,Ee=.05,De=0,Oe=8,ke=.5,Ae=0,je=1,Me=.05,Ne=40,Pe=70,Fe=5,Ie=0,Le=1,Re=.01,ze=0,Be=1,Ve=.01,He=0,Ue=5,We=1,Ge=0,Ke=1,qe=.01,Je=0,Ye=1,Xe=.01,Ze=0,Qe=1,$e=.01,et=0,tt=1,nt=.01,rt=0,I=10,it=.1,at=.5,ot=3,st=.1,ct=0,lt=1,ut=.01,dt=0,ft=100,pt=5,L=0,R=10,mt=1,z=.2;function ht(e){return 1-e/R*(1-z)}function gt(e){let t=(1-e)/(1-z)*R;return Math.round(Math.min(R,Math.max(L,t)))}var B=0,V=10,_t=1,H=3,U=1;function vt(e){return H-e/V*(H-U)}function yt(e){let t=(H-e)/(H-U)*V;return Math.round(Math.min(V,Math.max(B,t)))}var bt=/^#?([0-9a-fA-F]{6})$/;function xt(e,t,n){let r=e=>Math.round(e*255).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}var St=xt(x.mapOverlay.staleNukeR,x.mapOverlay.staleNukeG,x.mapOverlay.staleNukeB);function W(e){return e.detail?.value}function G(e){let t=W(e);return typeof t==`number`&&Number.isFinite(t)?t:null}var K=F=class extends u{constructor(...e){super(...e),this.userSettings=new s,this.mapLayers=[],this.onGraphicsChange=()=>this.requestUpdate()}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),T(this.userSettings),globalThis.addEventListener(`${f}:${i}`,this.onGraphicsChange),globalThis.addEventListener(`${f}:${v}`,this.onGraphicsChange)}disconnectedCallback(){globalThis.removeEventListener(`${f}:${i}`,this.onGraphicsChange),globalThis.removeEventListener(`${f}:${v}`,this.onGraphicsChange),super.disconnectedCallback()}writeOverrides(e){this.userSettings.setGraphicsOverrides(e)}patchName(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,name:{...t.name,...e}}),this.requestUpdate()}patchStructure(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,structure:{...t.structure,...e}}),this.requestUpdate()}patchMapOverlay(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,mapOverlay:{...t.mapOverlay,...e}}),this.requestUpdate()}patchAltView(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,altView:{...t.altView,...e}}),this.requestUpdate()}patchRailroad(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,railroad:{...t.railroad,...e}}),this.requestUpdate()}patchTerrain(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,terrain:{...t.terrain,...e}}),this.requestUpdate()}patchLighting(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,lighting:{...t.lighting,...e}}),this.requestUpdate()}patchPassEnabled(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,passEnabled:{...t.passEnabled,...e}}),this.requestUpdate()}patchSmallPlayerGlow(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,smallPlayerGlow:{...t.smallPlayerGlow,...e}}),this.requestUpdate()}currentAmbientLevel(){return gt(this.userSettings.graphicsOverrides().lighting?.ambient??x.lighting.ambient)}onAmbientLevelChange(e){let t=G(e);t!==null&&this.patchLighting({ambient:ht(t)})}currentUnitGlow(){return yt(this.userSettings.graphicsOverrides().lighting?.falloffPower??x.lighting.falloffPower)}onUnitGlowChange(e){let t=G(e);t!==null&&this.patchLighting({falloffPower:vt(t)})}currentNameScale(){return this.userSettings.graphicsOverrides().name?.nameScaleFactor??x.name.nameScaleFactor}currentNameCull(){return this.userSettings.graphicsOverrides().name?.cullThreshold??x.name.cullThreshold}currentHoverFade(){return this.userSettings.graphicsOverrides().name?.hoverFadeAlpha??x.name.hoverFadeAlpha}currentHoverGlowWidth(){return this.userSettings.graphicsOverrides().name?.hoverGlowWidth??x.name.hoverGlowWidth}currentHoverGlowAlpha(){return this.userSettings.graphicsOverrides().name?.hoverGlowAlpha??x.name.hoverGlowAlpha}currentDarkNames(){return this.userSettings.graphicsOverrides().name?.darkNames??!x.name.fillUsePlayerColor}onNameScaleChange(e){let t=G(e);t!==null&&this.patchName({nameScaleFactor:t})}onNameCullChange(e){let t=G(e);t!==null&&this.patchName({cullThreshold:t})}onHoverFadeChange(e){let t=G(e);t!==null&&this.patchName({hoverFadeAlpha:t})}onHoverGlowWidthChange(e){let t=G(e);t!==null&&this.patchName({hoverGlowWidth:t})}onHoverGlowAlphaChange(e){let t=G(e);t!==null&&this.patchName({hoverGlowAlpha:t})}onToggleNamesColored(){this.patchName({darkNames:!this.currentDarkNames()})}currentIconSize(){return this.userSettings.graphicsOverrides().structure?.iconSize??x.structure.iconSize}onIconSizeChange(e){let t=G(e);t!==null&&this.patchStructure({iconSize:t})}currentClassicIcons(){return this.userSettings.graphicsOverrides().structure?.classicIcons??!0}onToggleClassicIcons(){this.patchStructure({classicIcons:!this.currentClassicIcons()})}currentClassicNumbers(){return this.userSettings.graphicsOverrides().structure?.classicNumbers??!0}onToggleClassicNumbers(){this.patchStructure({classicNumbers:!this.currentClassicNumbers()})}currentShowDots(){return this.userSettings.graphicsOverrides().structure?.showDots??!0}onToggleShowDots(){this.patchStructure({showDots:!this.currentShowDots()})}currentNavalHighlight(){return this.userSettings.graphicsOverrides().mapOverlay?.navalHighlight??x.mapOverlay.navalHighlight}onToggleNavalHighlight(){this.patchMapOverlay({navalHighlight:!this.currentNavalHighlight()})}currentClassicBotColors(){return this.userSettings.graphicsOverrides().classicBotColors??!1}onToggleClassicBotColors(){let e=this.userSettings.graphicsOverrides();this.writeOverrides({...e,classicBotColors:!this.currentClassicBotColors()}),this.requestUpdate()}currentHighlightFill(){return this.userSettings.graphicsOverrides().mapOverlay?.highlightFillBrighten??x.mapOverlay.highlightFillBrighten}currentHighlightBrighten(){return this.userSettings.graphicsOverrides().mapOverlay?.highlightBrighten??x.mapOverlay.highlightBrighten}currentHighlightThicken(){return this.userSettings.graphicsOverrides().mapOverlay?.highlightThicken??x.mapOverlay.highlightThicken}currentTerritorySat(){return this.userSettings.graphicsOverrides().mapOverlay?.territorySaturation??x.mapOverlay.territorySaturation}currentTerritoryAlpha(){return this.userSettings.graphicsOverrides().mapOverlay?.territoryAlpha??x.mapOverlay.territoryAlpha}currentAltViewFillAlpha(){return this.userSettings.graphicsOverrides().altView?.fillAlpha??x.altView.fillAlpha}currentCoordinateGridOpacity(){return this.userSettings.graphicsOverrides().mapOverlay?.coordinateGridOpacity??x.mapOverlay.coordinateGridOpacity}currentRailMinZoom(){return this.userSettings.graphicsOverrides().railroad?.railMinZoom??x.railroad.railMinZoom}currentRailThickness(){return this.userSettings.graphicsOverrides().railroad?.railThickness??x.railroad.railThickness}onHighlightFillChange(e){let t=G(e);t!==null&&this.patchMapOverlay({highlightFillBrighten:t})}onHighlightBrightenChange(e){let t=G(e);t!==null&&this.patchMapOverlay({highlightBrighten:t})}onHighlightThickenChange(e){let t=G(e);t!==null&&this.patchMapOverlay({highlightThicken:t})}onTerritorySatChange(e){let t=G(e);t!==null&&this.patchMapOverlay({territorySaturation:t})}onTerritoryAlphaChange(e){let t=G(e);t!==null&&this.patchMapOverlay({territoryAlpha:t})}onAltViewFillAlphaChange(e){let t=G(e);t!==null&&this.patchAltView({fillAlpha:t})}onCoordinateGridOpacityChange(e){let t=G(e);t!==null&&this.patchMapOverlay({coordinateGridOpacity:t})}onRailDrawDistanceChange(e){let t=G(e);t!==null&&this.patchRailroad({railMinZoom:I-t})}onRailThicknessChange(e){let t=G(e);t!==null&&this.patchRailroad({railThickness:t})}isLayerVisible(e){return le(this.userSettings.graphicsOverrides(),e)}layerName(e){let t=`map_layers.${e}`,n=g(t);return n===t?e:n}onToggleLayer(e){let t=this.userSettings.graphicsOverrides(),n={...t.mapLayerVisibility??{},[e]:!this.isLayerVisible(e)};this.writeOverrides({...t,mapLayerVisibility:n}),this.requestUpdate()}getLayerAlpha(e,t){return se(this.userSettings.graphicsOverrides(),e,t)}onLayerAlphaSliderChange(e,t){let n=G(t);if(n===null)return;let r=this.userSettings.graphicsOverrides(),i=r.mapLayerAlpha??{};this.writeOverrides({...r,mapLayerAlpha:{...i,[e]:n}}),this.requestUpdate()}currentBackgroundColor(){return this.userSettings.graphicsOverrides().terrain?.backgroundColor??x.terrain.backgroundColor}currentOceanColor(){return this.userSettings.graphicsOverrides().terrain?.oceanColor??x.terrain.oceanColor}currentSandColor(){return this.userSettings.graphicsOverrides().terrain?.sandColor??x.terrain.sandColor}currentPlainsColor(){return this.userSettings.graphicsOverrides().terrain?.plainsColor??x.terrain.plainsColor}currentHighlandColor(){return this.userSettings.graphicsOverrides().terrain?.highlandColor??x.terrain.highlandColor}currentMountainColor(){return this.userSettings.graphicsOverrides().terrain?.mountainColor??x.terrain.mountainColor}currentNukeColor(){return this.userSettings.graphicsOverrides().mapOverlay?.staleNukeColor??St}static normalizeHex(e){let t=W(e);if(typeof t!=`string`)return null;let n=bt.exec(t.trim());return n===null?null:`#${n[1].toLowerCase()}`}onBackgroundColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchTerrain({backgroundColor:t})}onOceanColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchTerrain({oceanColor:t})}onSandColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchTerrain({sandColor:t})}onPlainsColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchTerrain({plainsColor:t})}onHighlandColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchTerrain({highlandColor:t})}onMountainColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchTerrain({mountainColor:t})}onNukeColorChange(e){let t=F.normalizeHex(e);t!==null&&this.patchMapOverlay({staleNukeColor:t})}currentSpecialEffects(){return this.userSettings.graphicsOverrides().passEnabled?.fx??x.passEnabled.fx}onToggleSpecialEffects(){this.patchPassEnabled({fx:!this.currentSpecialEffects()})}currentFallout(){return this.userSettings.graphicsOverrides().passEnabled?.fallout??x.passEnabled.falloutBloom}onToggleFallout(){this.patchPassEnabled({fallout:!this.currentFallout()})}currentGlowStrength(){return this.userSettings.graphicsOverrides().smallPlayerGlow?.strength??x.smallPlayerGlow.strength}onGlowStrengthChange(e){let t=G(e);t!==null&&this.patchSmallPlayerGlow({strength:t/100})}currentCosmetics(){return this.userSettings.graphicsOverrides().cosmetics??{}}patchCosmetics(e){let t=this.userSettings.graphicsOverrides();this.writeOverrides({...t,cosmetics:{...t.cosmetics,...e}}),this.requestUpdate()}onCosmeticsShowFromChange(e){let t=W(e),n=h.find(e=>e===t);n!==void 0&&this.patchCosmetics({showFrom:n})}onToggleCosmeticCategory(e){this.patchCosmetics({[e]:this.currentCosmetics()[e]===!1})}onFlagOpacityChange(e){let t=G(e);t!==null&&this.patchCosmetics({flagOpacity:t})}onResetClick(){this.writeOverrides({}),this.requestUpdate()}static section(e){return b`<div
      class="text-white/60 text-xs font-semibold uppercase tracking-wider px-1 pt-3"
    >
      ${g(e)}
    </div>`}renderMapLayers(){if(this.mapLayers.length===0)return y;let e=this.userSettings.mapLayers();return b`
      <div data-map-layers>
        ${F.section(`graphics_setting.section_map_layers`)}
        ${this.mapLayers.map(t=>{let n=this.getLayerAlpha(t.id,t.alpha);return b`
            <div class="flex flex-col gap-2">
              <setting-toggle
                label=${this.layerName(t.id)}
                description=${`${t.placement===`land`?g(`graphics_setting.layer_placement_land`):g(`graphics_setting.layer_placement_water`)}${t.nukeable?` · ${g(`graphics_setting.layer_nukeable`)}`:``}`}
                id=${`map-layer-${t.id}-toggle`}
                .checked=${this.isLayerVisible(t.id)}
                ?disabled=${!e}
                @change=${()=>this.onToggleLayer(t.id)}
              ></setting-toggle>
              ${e&&this.isLayerVisible(t.id)?b`<setting-slider
                      label=${`${this.layerName(t.id)} — ${g(`graphics_setting.layer_alpha_label`)}`}
                      description=""
                      id=${`map-layer-${t.id}-alpha-slider`}
                      min=${ct}
                      max=${lt}
                      step=${ut}
                      unit=""
                      .formatValue=${e=>e.toFixed(2)}
                      .value=${n}
                      @change=${e=>this.onLayerAlphaSliderChange(t.id,e)}
                    ></setting-slider>`:y}
            </div>
          `})}
      </div>
    `}renderCosmetics(){let e=this.currentCosmetics(),t=e.showFrom??`everyone`;return b`
      <!-- 👑 Cosmetics -->
      ${F.section(`graphics_setting.section_cosmetics`)}
      <setting-select
        label=${g(`graphics_setting.cosmetics_show_from_label`)}
        description=${g(`graphics_setting.cosmetics_show_from_desc`)}
        id="cosmetics-show-from-select"
        .options=${h.map(e=>({value:e,label:g(ge[e])}))}
        .value=${t}
        @change=${this.onCosmeticsShowFromChange}
      ></setting-select>

      ${_e.map(({key:n,labelKey:r,descKey:i})=>b`
          <setting-toggle
            label=${g(r)}
            description=${g(i)}
            id=${`cosmetics-${n}-toggle`}
            .checked=${e[n]!==!1}
            ?disabled=${t===`self`||t===`none`}
            @change=${()=>this.onToggleCosmeticCategory(n)}
          ></setting-toggle>
        `)}

      <setting-slider
        label=${g(`graphics_setting.cosmetics_flag_opacity_label`)}
        description=${g(`graphics_setting.cosmetics_flag_opacity_desc`)}
        id="flag-opacity-slider"
        min=${pe}
        max=${me}
        step=${he}
        unit=""
        .formatValue=${e=>e.toFixed(2)}
        .value=${e.flagOpacity??x.name.flagAlpha}
        @change=${this.onFlagOpacityChange}
      ></setting-slider>
    `}render(){let e=e=>e.toFixed(2),t=e=>e.toFixed(3),n=e=>e.toFixed(1),r=e=>String(Math.round(e));return b`
      <!-- 💡 Lighting -->
      ${F.section(`graphics_setting.section_lighting`)}
      <setting-slider
        label=${g(`graphics_setting.lighting_ambient_label`)}
        description=${g(`graphics_setting.lighting_ambient_desc`)}
        id="ambient-light-slider"
        min=${L}
        max=${R}
        step=${mt}
        unit=""
        .formatValue=${r}
        .value=${this.currentAmbientLevel()}
        @change=${this.onAmbientLevelChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.lighting_unit_glow_label`)}
        description=${g(`graphics_setting.lighting_unit_glow_desc`)}
        id="unit-glow-slider"
        min=${B}
        max=${V}
        step=${_t}
        unit=""
        .formatValue=${r}
        .value=${this.currentUnitGlow()}
        @change=${this.onUnitGlowChange}
      ></setting-slider>

      <!-- 🏷️ Name labels -->
      ${F.section(`graphics_setting.section_name_labels`)}
      <setting-slider
        label=${g(`graphics_setting.name_scale_label`)}
        description=""
        id="name-scale-slider"
        min=${ve}
        max=${ye}
        step=${be}
        unit=""
        .formatValue=${e}
        .value=${this.currentNameScale()}
        @change=${this.onNameScaleChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.name_cull_label`)}
        description=${g(`graphics_setting.name_cull_desc`)}
        id="name-cull-slider"
        min=${xe}
        max=${Se}
        step=${Ce}
        unit=""
        .formatValue=${t}
        .value=${this.currentNameCull()}
        @change=${this.onNameCullChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.hover_fade_label`)}
        description=${g(`graphics_setting.hover_fade_desc`)}
        id="hover-fade-slider"
        min=${we}
        max=${Te}
        step=${Ee}
        unit=""
        .formatValue=${e}
        .value=${this.currentHoverFade()}
        @change=${this.onHoverFadeChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.hover_glow_width_label`)}
        description=${g(`graphics_setting.hover_glow_width_desc`)}
        id="hover-glow-width-slider"
        min=${De}
        max=${Oe}
        step=${ke}
        unit=""
        .formatValue=${n}
        .value=${this.currentHoverGlowWidth()}
        @change=${this.onHoverGlowWidthChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.hover_glow_alpha_label`)}
        description=${g(`graphics_setting.hover_glow_alpha_desc`)}
        id="hover-glow-alpha-slider"
        min=${Ae}
        max=${je}
        step=${Me}
        unit=""
        .formatValue=${e}
        .value=${this.currentHoverGlowAlpha()}
        @change=${this.onHoverGlowAlphaChange}
      ></setting-slider>

      <setting-toggle
        label=${g(`graphics_setting.colored_names_label`)}
        description=${g(`graphics_setting.colored_names_desc`)}
        id="colored-names-toggle"
        .checked=${!this.currentDarkNames()}
        @change=${this.onToggleNamesColored}
      ></setting-toggle>

      <!-- 🏰 Structure icons -->
      ${F.section(`graphics_setting.section_structure_icons`)}
      <setting-slider
        label=${g(`graphics_setting.icon_size_label`)}
        description=${g(`graphics_setting.icon_size_desc`)}
        id="icon-size-slider"
        min=${Ne}
        max=${Pe}
        step=${Fe}
        unit=""
        .formatValue=${r}
        .value=${this.currentIconSize()}
        @change=${this.onIconSizeChange}
      ></setting-slider>

      <setting-toggle
        label=${g(`graphics_setting.classic_icons_label`)}
        description=${g(`graphics_setting.classic_icons_desc`)}
        id="classic-icons-toggle"
        .checked=${this.currentClassicIcons()}
        @change=${this.onToggleClassicIcons}
      ></setting-toggle>

      <setting-toggle
        label=${g(`graphics_setting.classic_numbers_label`)}
        description=${g(`graphics_setting.classic_numbers_desc`)}
        id="classic-numbers-toggle"
        .checked=${this.currentClassicNumbers()}
        @change=${this.onToggleClassicNumbers}
      ></setting-toggle>

      <setting-toggle
        label=${g(`graphics_setting.structure_dots_label`)}
        description=${g(`graphics_setting.structure_dots_desc`)}
        id="structure-dots-toggle"
        .checked=${this.currentShowDots()}
        @change=${this.onToggleShowDots}
      ></setting-toggle>

      <!-- 🗺️ Map -->
      ${F.section(`graphics_setting.section_map`)}
      <setting-toggle
        label=${g(`graphics_setting.naval_hover_highlight_label`)}
        description=${g(`graphics_setting.naval_hover_highlight_desc`)}
        id="naval-highlight-toggle"
        .checked=${this.currentNavalHighlight()}
        @change=${this.onToggleNavalHighlight}
      ></setting-toggle>

      <setting-toggle
        label=${g(`graphics_setting.classic_bot_colors_label`)}
        description=${g(`graphics_setting.classic_bot_colors_desc`)}
        id="classic-bot-colors-toggle"
        .checked=${this.currentClassicBotColors()}
        @change=${this.onToggleClassicBotColors}
      ></setting-toggle>

      <setting-slider
        label=${g(`graphics_setting.highlight_fill_label`)}
        description=${g(`graphics_setting.highlight_fill_desc`)}
        id="highlight-fill-slider"
        min=${Ie}
        max=${Le}
        step=${Re}
        unit=""
        .formatValue=${e}
        .value=${this.currentHighlightFill()}
        @change=${this.onHighlightFillChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.highlight_brighten_label`)}
        description=${g(`graphics_setting.highlight_brighten_desc`)}
        id="highlight-brighten-slider"
        min=${ze}
        max=${Be}
        step=${Ve}
        unit=""
        .formatValue=${e}
        .value=${this.currentHighlightBrighten()}
        @change=${this.onHighlightBrightenChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.highlight_thicken_label`)}
        description=${g(`graphics_setting.highlight_thicken_desc`)}
        id="highlight-thicken-slider"
        min=${He}
        max=${Ue}
        step=${We}
        unit=""
        .formatValue=${r}
        .value=${this.currentHighlightThicken()}
        @change=${this.onHighlightThickenChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.territory_sat_label`)}
        description=${g(`graphics_setting.territory_sat_desc`)}
        id="territory-saturation-slider"
        min=${Ge}
        max=${Ke}
        step=${qe}
        unit=""
        .formatValue=${e}
        .value=${this.currentTerritorySat()}
        @change=${this.onTerritorySatChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.territory_alpha_label`)}
        description=${g(`graphics_setting.territory_alpha_desc`)}
        id="territory-alpha-slider"
        min=${Je}
        max=${Ye}
        step=${Xe}
        unit=""
        .formatValue=${e}
        .value=${this.currentTerritoryAlpha()}
        @change=${this.onTerritoryAlphaChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.alt_view_fill_alpha_label`)}
        description=${g(`graphics_setting.alt_view_fill_alpha_desc`)}
        id="alt-view-fill-alpha-slider"
        min=${Ze}
        max=${Qe}
        step=${$e}
        unit=""
        .formatValue=${e}
        .value=${this.currentAltViewFillAlpha()}
        @change=${this.onAltViewFillAlphaChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.coordinate_grid_opacity_label`)}
        description=${g(`graphics_setting.coordinate_grid_opacity_desc`)}
        id="coordinate-grid-opacity-slider"
        min=${et}
        max=${tt}
        step=${nt}
        unit=""
        .formatValue=${e}
        .value=${this.currentCoordinateGridOpacity()}
        @change=${this.onCoordinateGridOpacityChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.rail_distance_label`)}
        description=${g(`graphics_setting.rail_distance_desc`)}
        id="rail-distance-slider"
        min=${rt}
        max=${I}
        step=${it}
        unit=""
        .formatValue=${n}
        .value=${I-this.currentRailMinZoom()}
        @change=${this.onRailDrawDistanceChange}
      ></setting-slider>

      <setting-slider
        label=${g(`graphics_setting.rail_thickness_label`)}
        description=${g(`graphics_setting.rail_thickness_desc`)}
        id="rail-thickness-slider"
        min=${at}
        max=${ot}
        step=${st}
        unit=""
        .formatValue=${n}
        .value=${this.currentRailThickness()}
        @change=${this.onRailThicknessChange}
      ></setting-slider>

      ${this.renderMapLayers()}

      <!-- ⛰️ Terrain -->
      ${F.section(`graphics_setting.section_terrain`)}
      <setting-color
        label=${g(`graphics_setting.background_color_label`)}
        description=${g(`graphics_setting.background_color_desc`)}
        id="background-color-picker"
        .value=${this.currentBackgroundColor()}
        @change=${this.onBackgroundColorChange}
      ></setting-color>

      <setting-color
        label=${g(`graphics_setting.ocean_color_label`)}
        description=${g(`graphics_setting.ocean_color_desc`)}
        id="ocean-color-picker"
        .value=${this.currentOceanColor()}
        @change=${this.onOceanColorChange}
      ></setting-color>

      <setting-color
        label=${g(`graphics_setting.sand_color_label`)}
        description=${g(`graphics_setting.sand_color_desc`)}
        id="sand-color-picker"
        .value=${this.currentSandColor()}
        @change=${this.onSandColorChange}
      ></setting-color>

      <setting-color
        label=${g(`graphics_setting.plains_color_label`)}
        description=${g(`graphics_setting.plains_color_desc`)}
        id="plains-color-picker"
        .value=${this.currentPlainsColor()}
        @change=${this.onPlainsColorChange}
      ></setting-color>

      <setting-color
        label=${g(`graphics_setting.highland_color_label`)}
        description=${g(`graphics_setting.highland_color_desc`)}
        id="highland-color-picker"
        .value=${this.currentHighlandColor()}
        @change=${this.onHighlandColorChange}
      ></setting-color>

      <setting-color
        label=${g(`graphics_setting.mountain_color_label`)}
        description=${g(`graphics_setting.mountain_color_desc`)}
        id="mountain-color-picker"
        .value=${this.currentMountainColor()}
        @change=${this.onMountainColorChange}
      ></setting-color>

      <setting-color
        label=${g(`graphics_setting.nuke_color_label`)}
        description=${g(`graphics_setting.nuke_color_desc`)}
        id="nuke-color-picker"
        .value=${this.currentNukeColor()}
        @change=${this.onNukeColorChange}
      ></setting-color>

      <!-- ✨ Effects -->
      ${F.section(`graphics_setting.section_effects`)}
      <setting-toggle
        label=${g(`user_setting.special_effects_label`)}
        description=${g(`user_setting.special_effects_desc`)}
        id="special-effects-toggle"
        .checked=${this.currentSpecialEffects()}
        @change=${this.onToggleSpecialEffects}
      ></setting-toggle>

      <setting-toggle
        label=${g(`graphics_setting.fallout_label`)}
        description=${g(`graphics_setting.fallout_desc`)}
        id="fallout-toggle"
        .checked=${this.currentFallout()}
        @change=${this.onToggleFallout}
      ></setting-toggle>

      <setting-slider
        label=${g(`user_setting.highlight_glow_strength_label`)}
        description=${g(`user_setting.highlight_small_players_desc`)}
        id="glow-strength-slider"
        min=${dt}
        max=${ft}
        step=${pt}
        .value=${Math.round(this.currentGlowStrength()*100)}
        @change=${this.onGlowStrengthChange}
      ></setting-slider>

      ${this.renderCosmetics()}

      <button
        id="graphics-reset"
        class="flex flex-col items-start w-full p-4 mt-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-left"
        @click=${this.onResetClick}
      >
        <div class="text-white font-bold text-base block mb-1">
          ${g(`graphics_setting.reset_label`)}
        </div>
        <div class="text-white/50 text-sm leading-snug">
          ${g(`graphics_setting.reset_desc`)}
        </div>
      </button>
    `}};c([p({attribute:!1})],K.prototype,`mapLayers`,void 0),K=F=c([d(`graphics-advanced-settings`)],K);function q(e){return b`
    <setting-slider
      label=${g(`user_setting.hud_opacity_label`)}
      description=${g(`user_setting.hud_opacity_desc`)}
      id="hud-opacity-slider"
      .value=${e.hudOpacity()*100}
      @change=${t=>{let n=t.detail?.value;if(typeof n!=`number`||!Number.isFinite(n)){console.warn(`Slider event missing finite detail.value`);return}e.setHudOpacity(n/100),document.documentElement.style.setProperty(`--hud-opacity`,String(e.hudOpacity()))}}
    ></setting-slider>
  `}var J=class extends n{constructor(...e){super(...e),this.mapLayers=[],this.userSettings=new s}modalConfig(){return{sidePanel:!0}}renderHeaderSlot(){return b`
      <div
        class="flex items-center justify-between gap-3 p-3 border-b border-slate-600"
      >
        <h2 class="text-base font-semibold text-white">
          ${g(`user_setting.tab_graphics`)}
        </h2>
        <button
          type="button"
          class="flex items-center justify-center w-8 h-8 rounded-sm text-slate-400 hover:text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-blue-400"
          aria-label=${g(`common.close`)}
          @click=${()=>this.close()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    `}renderBody(){return this.isOpen()?b`
      <div class="graphics-settings-panel flex flex-col px-4 pb-4">
        ${q(this.userSettings)}
        <graphics-advanced-settings
          class="flex flex-col"
          .mapLayers=${this.mapLayers}
        ></graphics-advanced-settings>
        <div
          class="text-slate-400 text-xs font-semibold uppercase tracking-wider pt-4 pb-2"
        >
          ${g(`user_setting.graphics_preset_label`)}
        </div>
        <graphics-preset-selector></graphics-preset-selector>
        <graphics-preset-tools></graphics-preset-tools>
      </div>
    `:b``}onOpen(e){this.onReturn=typeof e?.onReturn==`function`?e.onReturn:void 0}onClose(e){let t=this.onReturn;this.onReturn=void 0,e?.silent||t?.()}};c([p({attribute:!1})],J.prototype,`mapLayers`,void 0),J=c([d(`graphics-settings-modal`)],J);function Y(){if(typeof window>`u`)return null;let e=window.openfrontDesktop?.display;return typeof e?.getPrefs!=`function`||typeof e?.setPrefs!=`function`?null:e}function Ct(e){if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.x==`number`&&typeof t.y==`number`&&typeof t.width==`number`&&typeof t.height==`number`}function wt(e){if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.id==`number`&&typeof t.label==`string`&&typeof t.primary==`boolean`&&typeof t.scaleFactor==`number`&&Ct(t.bounds)}function X(e){if(typeof e!=`object`||!e)return!1;let t=e;if(typeof t.activeDisplayId!=`number`||typeof t.preferredDisplayPresent!=`boolean`||!Array.isArray(t.displays)||!t.displays.every(wt)||typeof t.prefs!=`object`||t.prefs===null)return!1;let n=t.prefs;return n.mode!==`windowed`&&n.mode!==`borderless`||n.uiScale!==void 0&&(typeof n.uiScale!=`number`||!Number.isFinite(n.uiScale))?!1:n.displayId===null||typeof n.displayId==`number`}var Z=[.75,.9,1,1.1,1.25,1.5];function Tt(e){return Z.includes(e)?[...Z]:[...Z,e].sort((e,t)=>e-t)}var Et=2e3;function Dt(e){let{displays:t,prefs:n}=e,r=n.displayId??t.find(e=>e.primary)?.id??null;return r!==null&&t.some(e=>e.id===r)?r:e.activeDisplayId}var Ot=e({UserSettingModal:()=>$});function Q(){console.warn(`[display] bridge call failed`)}var kt=[`master`,`music`,`effects`,`alerts`,`ambience`,`interface`],At=[`effects`,`alerts`,`interface`],jt=1e4;function Mt(){return document.body.dataset.halloweenSeason!==void 0}var $=class extends n{constructor(...e){super(...e),this.keyboardLayout=new ue(this),this.routerName=`settings`,this.mapLayers=[],this.onLayerVisibilityChange=null,this.onLayerAlphaChange=null,this.userSettings=new s,this.defaultKeybinds=re(l.isMac),this.keySequence=[],this.graphicsAdvancedOpen=!1,this.showEasterEggSettings=!1,this.userKeybinds={},this.display=null,this.displayBusy=!1,this.displayUnsubscribe=null,this.displayRequestId=0,this.handleKeyboardDetected=()=>{this.requestUpdate()},this.onGraphicsChanged=()=>{ce(this.userSettings,this.mapLayers,this.onLayerVisibilityChange,this.onLayerAlphaChange)},this.onPerformanceOverlayChanged=()=>{this.requestUpdate()},this.handleEasterEggKey=e=>{if(!this.isModalOpen||this.showEasterEggSettings)return;let t=e.target;if(!(t instanceof Node)||!this.contains(t))return;let n=e.key.toLowerCase(),r=[...this.keySequence,n].slice(-4);this.keySequence=r,r.join(``)===`evan`&&(this.triggerEasterEgg(),this.keySequence=[])},this.lastSliderTickMs=0,this.previewing=new Set,this.handleDisplayModeChange=e=>{let t=e.detail?.value;t!==`windowed`&&t!==`borderless`||this.applyDisplayPatch({mode:t})},this.handleUiScaleChange=e=>{let t=Number(e.detail?.value),n=this.currentUiScale,r=n===void 0?Z:Tt(n);!Number.isFinite(t)||!r.includes(t)||this.applyDisplayPatch({uiScale:t})},this.handleDisplayMonitorChange=e=>{let t=e.detail?.value,n=typeof t==`number`?t:Number(t);if(!Number.isInteger(n))return;let r=this.display?.displays.find(e=>e.id===n);r!==void 0&&this.applyDisplayPatch({displayId:r.primary?null:r.id})}}connectedCallback(){super.connectedCallback(),this.inline||(this.routerName=void 0),this.loadKeybindsFromStorage(),window.addEventListener(te,this.handleKeyboardDetected),globalThis.addEventListener(`${f}:${i}`,this.onGraphicsChanged),globalThis.addEventListener(`${f}:${v}`,this.onGraphicsChanged),globalThis.addEventListener(`${f}:${_}`,this.onPerformanceOverlayChanged)}disconnectedCallback(){window.removeEventListener(te,this.handleKeyboardDetected),globalThis.removeEventListener(`${f}:${i}`,this.onGraphicsChanged),globalThis.removeEventListener(`${f}:${v}`,this.onGraphicsChanged),globalThis.removeEventListener(`${f}:${_}`,this.onPerformanceOverlayChanged),window.removeEventListener(`keydown`,this.handleEasterEggKey),this.leaveDisplayTab(),super.disconnectedCallback()}loadKeybindsFromStorage(){let e=this.userSettings.parsedUserKeybinds();if(Object.keys(e).length===0){this.userKeybinds={};return}let t={};for(let[n,r]of Object.entries(e))if(typeof r==`string`)t[n]={value:r,key:r};else if(typeof r==`object`&&r&&!Array.isArray(r)){let e=r.value??`Null`,i=Array.isArray(e)?e.find(e=>typeof e==`string`):e,a=r.key??i,o=Array.isArray(a)?a.find(e=>typeof e==`string`):a;typeof i==`string`&&typeof o==`string`&&(t[n]={value:i,key:o})}this.userKeybinds=t}handleKeybindChange(e){let{action:t,value:n,key:i,prevValue:a}=e.detail,o={...this.defaultKeybinds};for(let[e,t]of Object.entries(this.userKeybinds)){let n=t.value;n===`Null`?delete o[e]:o[e]=n}if(Object.entries(o).filter(([e])=>e!==t&&!ae(t,e,n)).map(([,e])=>e).includes(n)&&n!==`Null`){let e=r(i||n);window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:b`
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500 inline-block align-middle mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span class="font-medium">
                ${(()=>{let t=`__KEY__`,[n,r]=g(`user_setting.keybind_conflict_error`,{key:t}).split(t);return b`${n}<span
                      class="font-mono font-bold bg-white/10 px-1.5 py-0.5 rounded text-red-200 mx-1 border border-white/10"
                      >${e}</span
                    >${r||``}`})()}
              </span>
            `,color:`red`,duration:3e3}}));let o=this.renderRoot.querySelector(`setting-keybind[action="${t}"]`);o&&(o.value=a??this.defaultKeybinds[t]??``,o.requestUpdate());return}this.userKeybinds={...this.userKeybinds,[t]:{value:n,key:i}},this.userSettings.setKeybinds(this.userKeybinds)}getKeyValue(e){let t=this.userKeybinds[e];if(!t)return;let n=t.value;return n===`Null`?``:n||void 0}getKeyChar(e){let t=this.userKeybinds[e];return a(t,this.defaultKeybinds[e]||``,this.keyboardLayout.map)}performanceOverlayDescription(){let e=this.getKeyChar(`performanceOverlay`),t=g(`user_setting.performance_overlay_keybind_desc`);return e?g(`user_setting.performance_overlay_desc`,{description:t,key:e}):t}triggerEasterEgg(){console.log(`🪺 Setting~ unlocked by EVAN combo!`),this.showEasterEggSettings=!0;let e=document.createElement(`div`);e.className=`fixed top-10 left-1/2 p-4 px-6 bg-black/80 text-white text-xl rounded-xl animate-fadePop z-[9999]`,e.textContent=`🎉 You found a secret setting!`,document.body.appendChild(e),setTimeout(()=>{e.remove()},5e3)}toggleEmojis(){this.userSettings.toggleEmojis(),console.log(`🤡 Emojis:`,this.userSettings.emojis()?`ON`:`OFF`)}toggleAlertFrame(){this.userSettings.toggleAlertFrame(),console.log(`🚨 Alert frame:`,this.userSettings.alertFrame()?`ON`:`OFF`)}toggleCursorCostLabel(){this.userSettings.toggleCursorCostLabel(),console.log(`💰 Cursor build cost:`,this.userSettings.cursorCostLabel()?`ON`:`OFF`)}toggleSnapBuildPreview(){this.userSettings.toggleSnapBuildPreview(),console.log(`🧲 Snap build preview:`,this.userSettings.snapBuildPreview()?`ON`:`OFF`)}toggleBuildMultiplierCycle(){this.userSettings.toggleBuildMultiplierCycle(),!this.userSettings.buildMultiplierCycle()&&this.uiState&&(this.uiState.upgradeMultiplier=1)}toggleAnonymousNames(){this.userSettings.toggleRandomName(),console.log(`🙈 Anonymous Names:`,this.userSettings.anonymousNames()?`ON`:`OFF`)}toggleLobbyIdVisibility(){this.userSettings.toggleLobbyIdVisibility(),console.log(`👁️ Hidden Lobby IDs:`,this.userSettings.lobbyIdVisibility()?`OFF`:`ON`)}toggleLobbyStartAlerts(e){let t=e.target.checked;if(this.userSettings.setLobbyStartAlerts(t),t&&typeof Notification<`u`&&Notification.permission==="default")try{Notification.requestPermission().catch(e=>{console.warn(`Failed to request game-start notification permission`,e)})}catch(e){console.warn(`Failed to request game-start notification permission`,e)}this.requestUpdate()}toggleReplayViewer(e){this.userSettings.setReplayViewer(e.target.checked)}toggleSteamLobbyLinks(){this.userSettings.setSteamLobbyLinks(this.userSettings.steamLobbyLinks()===`steam`?`browser`:`steam`)}toggleLeftClickOpensMenu(){this.userSettings.toggleLeftClickOpenMenu(),console.log(`🖱️ Left Click Opens Menu:`,this.userSettings.leftClickOpensMenu()?`ON`:`OFF`),this.requestUpdate()}currentAttackRatio(){return this.uiState?.attackRatio??this.userSettings.attackRatio()}sliderAttackRatio(e){let t=e.detail?.value;if(typeof t==`number`){let e=t/100;this.userSettings.setAttackRatio(e),this.requestUpdate()}else console.warn(`Slider event missing detail.value`,e)}changeAttackRatioIncrement(e){let t=e.detail?.value,n=typeof t==`number`?t:parseInt(String(t),10);if(!Number.isFinite(n)){console.warn(`Select event missing detail.value`,e);return}this.userSettings.setAttackRatioIncrement(Math.round(n)),this.requestUpdate()}sliderNukeAllianceSafetyDuration(e){let t=e.detail?.value;if(typeof t!=`number`){console.warn(`Slider event missing detail.value`,e);return}this.userSettings.setNukeAllianceSafetyDuration(t),this.requestUpdate()}toggleGoToPlayer(){this.userSettings.toggleGoToPlayer(),console.log(`🔍 Go to player:`,this.userSettings.goToPlayer()?`ON`:`OFF`)}toggleHalloweenTheme(){this.userSettings.toggleHalloweenTheme(),document.body.classList.toggle(`halloween-theme`,Mt()&&this.userSettings.halloweenTheme())}togglePerformanceOverlay(){this.userSettings.togglePerformanceOverlay()}toggleMapLayers(){this.userSettings.toggleMapLayers()}toggleHelpMessages(){this.userSettings.toggleHelpMessages(),console.log(`Help messages:`,this.userSettings.helpMessages()?`ON`:`OFF`)}toggleAttackingTroopsOverlay(){this.userSettings.toggleAttackingTroopsOverlay(),console.log(`Attacking troops overlay:`,this.userSettings.attackingTroopsOverlay()?`ON`:`OFF`)}sliderAudio(e,t){let n=t.detail?.value;if(typeof n!=`number`){console.warn(`Slider event missing detail.value`,t);return}this.userSettings.setAudioVolume(e,n/100),this.playSliderTick(),this.requestUpdate()}resetAudio(){this.userSettings.resetAudio(),this.requestUpdate()}toggleMuteOnBlur(e){this.userSettings.setMuteOnBlur(e.target.checked),this.requestUpdate()}toggleAlertsWhenUnfocused(e){this.userSettings.setAlertsWhenUnfocused(e.target.checked),this.requestUpdate()}playSliderTick(){let e=Date.now();e-this.lastSliderTickMs<150||(this.lastSliderTickMs=e,de(`slider`))}async playTestCue(e){let t=S();if(t===null||this.previewing.has(e))return;this.previewing=new Set([...this.previewing,e]);let n;try{await Promise.race([t.previewCue(e),new Promise(e=>{n=setTimeout(e,jt)})])}catch(e){console.warn(`Failed to play audio preview`,e)}finally{n!==void 0&&clearTimeout(n);let t=new Set(this.previewing);t.delete(e),this.previewing=t}}renderTestButton(e,t){let n=!e.isAudible(`master`),r=n||!e.isAudible(t),i=n?`user_setting.audio_test_master_muted`:`user_setting.audio_test_muted`,a=this.previewing.has(t);return b`
      <button
        id="audio-${t}-test"
        class="self-end px-3 py-1 text-sm font-medium rounded-lg border border-white/10 text-white transition-colors ${r||a?`opacity-40 cursor-not-allowed`:`bg-white/5 hover:bg-white/15`}"
        ?disabled=${r||a}
        title=${r?g(i):``}
        @click=${()=>this.playTestCue(t)}
      >
        ${g(`user_setting.audio_test`)}
      </button>
    `}renderVolumeSlider(e){let t=S();return b`
      <div class="flex flex-col gap-2">
        <setting-slider
          label="${g(`user_setting.audio_${e}`)}"
          description="${g(`user_setting.audio_${e}_desc`)}"
          id="audio-${e}-slider"
          min="0"
          max="100"
          unit=""
          .value=${Math.round(this.userSettings.audioVolume(e)*100)}
          @change=${t=>this.sliderAudio(e,t)}
        ></setting-slider>
        ${t!==null&&At.includes(e)?b`<div class="flex justify-end">
                ${this.renderTestButton(t,e)}
              </div>`:``}
      </div>
    `}renderAudioSettings(){let e=this.userSettings.muteOnBlur();return b`
      ${kt.map(e=>this.renderVolumeSlider(e))}

      <setting-toggle
        label="${g(`user_setting.audio_mute_on_blur`)}"
        description="${g(`user_setting.audio_mute_on_blur_desc`)}"
        id="audio-mute-on-blur-toggle"
        .checked=${e}
        @change=${this.toggleMuteOnBlur}
      ></setting-toggle>

      <!-- Dependent on the row above: meaningless when nothing is muted. -->
      <div class="pl-6">
        <setting-toggle
          label="${g(`user_setting.audio_alerts_when_unfocused`)}"
          description="${g(`user_setting.audio_alerts_when_unfocused_desc`)}"
          id="audio-alerts-when-unfocused-toggle"
          .checked=${this.userSettings.alertsWhenUnfocused()}
          ?disabled=${!e}
          @change=${this.toggleAlertsWhenUnfocused}
        ></setting-toggle>
      </div>

      <div class="flex justify-end pt-2">
        <button
          id="audio-reset"
          class="px-3 py-1 text-sm font-medium rounded-lg border border-white/10 text-white bg-white/5 hover:bg-white/15 transition-colors"
          @click=${this.resetAudio}
        >
          ${g(`user_setting.audio_reset`)}
        </button>
      </div>
    `}modalConfig(){return{tabs:[{key:`gameplay`,label:g(`user_setting.tab_gameplay`)},{key:`graphics`,label:g(`user_setting.tab_graphics`)},...ee()&&Y()!==null?[{key:`display`,label:g(`user_setting.tab_display`)}]:[],{key:`audio`,label:g(`user_setting.tab_audio`)},...l.isTouch&&!l.hasKeyboard?[]:[{key:`keybinds`,label:g(`user_setting.tab_keybinds`)}]]}}renderHeaderSlot(){return o({title:g(`user_setting.title`),onBack:()=>this.close(),ariaLabel:g(`common.back`),showDivider:!0})}render(){return b`${super.render()}
    ${this.inline?y:b`<graphics-settings-modal
            .mapLayers=${this.mapLayers}
          ></graphics-settings-modal>`}`}isGraphicsPanelOpen(){return this.querySelector(`graphics-settings-modal`)?.isOpen()===!0}openGraphicsPanel(e){if(this.inline)return this.graphicsAdvancedOpen=!this.graphicsAdvancedOpen,!0;let t=this.querySelector(`graphics-settings-modal`);if(!t)return!1;if(t.isOpen())return!0;if(t.mapLayers=this.mapLayers,this.isOpen()){let e=this.onReturn;this.onReturn=void 0,this.close(),t.open({onReturn:()=>this.open({tab:`graphics`,onReturn:e})})}else t.open({onReturn:e});return!0}renderBody(e){let t;switch(e){case`keybinds`:t=this.renderKeybindSettings();break;case`audio`:t=this.renderAudioSettings();break;case`graphics`:t=this.renderGraphicsSettings();break;case`display`:t=this.renderDisplaySettings();break;default:t=this.renderGameplaySettings()}return b`
      <div class="flex flex-col gap-2 p-4 lg:p-[1.4rem]">${t}</div>
    `}updated(){this.syncDisplayControls()}onTabEnter(e){e===`display`?this.enterDisplayTab():this.leaveDisplayTab()}onClose(){this.graphicsAdvancedOpen=!1,this.querySelector(`graphics-settings-modal`)?.close({silent:!0}),this.leaveDisplayTab(),window.removeEventListener(`keydown`,this.handleEasterEggKey);let e=this.onReturn;this.onReturn=void 0,e?.()}enterDisplayTab(){let e=Y();if(e===null)return;this.leaveDisplayTab();let t=this.displayRequestId;if(this.readDisplaySnapshot(t),typeof e.subscribe==`function`)try{this.displayUnsubscribe=e.subscribe(e=>{X(e)&&(this.displayRequestId++,this.adoptDisplaySnapshot(e),this.settleDisplayWrite())})}catch{this.displayUnsubscribe=null,Q()}}leaveDisplayTab(){let e=this.displayUnsubscribe;this.displayUnsubscribe=null;try{e?.()}catch{Q()}this.clearDisplaySettleTimer(),this.displayBusy=!1,this.displayRequestId++}async readDisplaySnapshot(e){let t=Y();if(t!==null)try{let n=await t.getPrefs();if(e!==this.displayRequestId)return;this.adoptDisplaySnapshot(n)}catch{Q()}}adoptDisplaySnapshot(e){X(e)&&(this.display=e)}applyDisplayPatch(e){let t=Y();if(t===null||this.displayBusy)return;this.displayBusy=!0,this.displayRequestId++;let n=this.displayRequestId;this.clearDisplaySettleTimer(),this.displaySettleTimer=setTimeout(()=>{this.displaySettleTimer=void 0,this.displayBusy=!1,this.readDisplaySnapshot(n)},Et);let r;try{r=t.setPrefs(e)}catch{Q(),this.settleDisplayWrite();return}r.then(e=>{n===this.displayRequestId&&(this.adoptDisplaySnapshot(e),this.settleDisplayWrite())},()=>{Q(),n===this.displayRequestId&&this.settleDisplayWrite()})}settleDisplayWrite(){this.clearDisplaySettleTimer(),this.displayBusy=!1}syncDisplayControls(){let e=this.display;if(e===null||this.displayBusy||this.activeTab!==`display`)return;let t=this.querySelector(`#display-mode-select`);t&&t.value!==e.prefs.mode&&(t.value=e.prefs.mode);let n=this.querySelector(`#display-ui-scale-select`),r=e.prefs.uiScale;this.currentUiScale=r,n&&r!==void 0&&n.value!==String(r)&&(n.value=String(r));let i=this.querySelector(`#display-monitor-select`);if(i===null)return;let a=String(Dt(e));i.value!==a&&(i.value=a)}clearDisplaySettleTimer(){this.displaySettleTimer!==void 0&&(clearTimeout(this.displaySettleTimer),this.displaySettleTimer=void 0)}displayOptionLabel(e,t){let n=e.label.trim(),r=n===``?g(`user_setting.display_unnamed`,{index:t+1}):n;return e.primary?`${r} (${g(`user_setting.display_primary`)})`:r}renderDisplaySettings(){let e=this.display,t=l.isMac?null:b`
          <div
            id="display-f11-hint"
            class="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300/70 text-xs"
          >
            ${g(`user_setting.display_f11_hint`)}
          </div>
        `;if(e===null)return b`${t}`;let n=e.displays,r=Dt(e),i=e.prefs.uiScale;return b`
      ${t} ${e.preferredDisplayPresent?null:b`
          <div
            id="display-missing-note"
            class="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200/80 text-xs"
          >
            ${g(`user_setting.display_missing`)}
          </div>
        `}

      <setting-select
        id="display-mode-select"
        label=${g(`user_setting.display_mode_label`)}
        description=${g(`user_setting.display_mode_desc`)}
        .value=${e.prefs.mode}
        ?disabled=${this.displayBusy}
        .options=${[{value:`windowed`,label:g(`user_setting.display_mode_windowed`)},{value:`borderless`,label:g(`user_setting.display_mode_borderless`)}]}
        @change=${this.handleDisplayModeChange}
      ></setting-select>

      ${i===void 0?null:b`
              <setting-select
                id="display-ui-scale-select"
                label=${g(`user_setting.display_ui_scale_label`)}
                description=${g(`user_setting.display_ui_scale_desc`)}
                .value=${String(i)}
                ?disabled=${this.displayBusy}
                .options=${Tt(i).map(e=>({value:e,label:g(`user_setting.display_ui_scale_option`,{scale:e})}))}
                @change=${this.handleUiScaleChange}
              ></setting-select>
            `}
      ${n.length>1?b`
              <setting-select
                id="display-monitor-select"
                label=${g(`user_setting.display_monitor_label`)}
                description=${g(`user_setting.display_monitor_desc`)}
                .value=${String(r)}
                ?disabled=${this.displayBusy}
                .options=${n.map((e,t)=>({value:e.id,label:this.displayOptionLabel(e,t)}))}
                @change=${this.handleDisplayMonitorChange}
              ></setting-select>
            `:null}
    `}renderKeybindSettings(){return b`
      <div
        class="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300/70 text-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5 shrink-0 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        ${g(`user_setting.keybinds_hint`)}
      </div>

      <h2
        class="text-blue-200 text-xl font-bold mt-4 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.view_options`)}
      </h2>

      <setting-keybind
        action="toggleView"
        label=${g(`user_setting.toggle_view`)}
        description=${g(`user_setting.toggle_view_desc`)}
        defaultKey=${this.defaultKeybinds.toggleView}
        .value=${this.getKeyValue(`toggleView`)}
        .display=${this.getKeyChar(`toggleView`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="coordinateGrid"
        label=${g(`user_setting.coordinate_grid_label`)}
        description=${g(`user_setting.coordinate_grid_desc`)}
        defaultKey=${this.defaultKeybinds.coordinateGrid}
        .value=${this.getKeyValue(`coordinateGrid`)}
        .display=${this.getKeyChar(`coordinateGrid`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="altKey"
        .allowModifiers=${!0}
        label=${g(`user_setting.graphics_refresh_modifier`)}
        description=${g(`user_setting.graphics_refresh_modifier_desc`,{key:this.getKeyChar(`resetGfx`).toUpperCase()})}
        .defaultKey=${this.defaultKeybinds.altKey}
        .value=${this.getKeyValue(`altKey`)}
        .display=${this.getKeyChar(`altKey`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="resetGfx"
        label=${g(`help_modal.action_reset_gfx`)}
        description=${g(`user_setting.reset_gfx_desc`)}
        .defaultKey=${this.defaultKeybinds.resetGfx}
        .value=${this.getKeyValue(`resetGfx`)}
        .display=${this.getKeyChar(`resetGfx`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.build_controls`)}
      </h2>

      <setting-keybind
        action="preventStacking"
        label=${g(`user_setting.prevent_stacking`)}
        description=${g(`user_setting.prevent_stacking_desc`)}
        defaultKey=${this.defaultKeybinds.preventStacking}
        .value=${this.getKeyValue(`preventStacking`)}
        .display=${this.getKeyChar(`preventStacking`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildCity"
        label=${g(`user_setting.build_city`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildCity}
        .value=${this.getKeyValue(`buildCity`)}
        .display=${this.getKeyChar(`buildCity`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildFactory"
        label=${g(`user_setting.build_factory`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildFactory}
        .value=${this.getKeyValue(`buildFactory`)}
        .display=${this.getKeyChar(`buildFactory`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildPort"
        label=${g(`user_setting.build_port`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildPort}
        .value=${this.getKeyValue(`buildPort`)}
        .display=${this.getKeyChar(`buildPort`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildDefensePost"
        label=${g(`user_setting.build_defense_post`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildDefensePost}
        .value=${this.getKeyValue(`buildDefensePost`)}
        .display=${this.getKeyChar(`buildDefensePost`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildMissileSilo"
        label=${g(`user_setting.build_missile_silo`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildMissileSilo}
        .value=${this.getKeyValue(`buildMissileSilo`)}
        .display=${this.getKeyChar(`buildMissileSilo`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildSamLauncher"
        label=${g(`user_setting.build_sam_launcher`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildSamLauncher}
        .value=${this.getKeyValue(`buildSamLauncher`)}
        .display=${this.getKeyChar(`buildSamLauncher`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildWarship"
        label=${g(`user_setting.build_warship`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildWarship}
        .value=${this.getKeyValue(`buildWarship`)}
        .display=${this.getKeyChar(`buildWarship`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildAtomBomb"
        label=${g(`user_setting.build_atom_bomb`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildAtomBomb}
        .value=${this.getKeyValue(`buildAtomBomb`)}
        .display=${this.getKeyChar(`buildAtomBomb`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildHydrogenBomb"
        label=${g(`user_setting.build_hydrogen_bomb`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildHydrogenBomb}
        .value=${this.getKeyValue(`buildHydrogenBomb`)}
        .display=${this.getKeyChar(`buildHydrogenBomb`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildMIRV"
        label=${g(`user_setting.build_mirv`)}
        description=${g(`user_setting.build_hotkey_desc`)}
        defaultKey=${this.defaultKeybinds.buildMIRV}
        .value=${this.getKeyValue(`buildMIRV`)}
        .display=${this.getKeyChar(`buildMIRV`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="buildScrollModifier"
        .allowModifiers=${!0}
        label=${g(`user_setting.build_scroll_modifier`)}
        description=${g(`user_setting.build_scroll_modifier_desc`)}
        .defaultKey=${this.defaultKeybinds.buildScrollModifier}
        .value=${this.getKeyValue(`buildScrollModifier`)}
        .display=${this.getKeyChar(`buildScrollModifier`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.menu_shortcuts`)}
      </h2>

      <setting-keybind
        action="buildMenuModifier"
        .allowModifiers=${!0}
        label=${g(`user_setting.build_menu_modifier`)}
        description=${g(`user_setting.build_menu_modifier_desc`)}
        .defaultKey=${this.defaultKeybinds.buildMenuModifier}
        .value=${this.getKeyValue(`buildMenuModifier`)}
        .display=${this.getKeyChar(`buildMenuModifier`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="emojiMenuModifier"
        .allowModifiers=${!0}
        label=${g(`user_setting.emoji_menu_modifier`)}
        description=${g(`user_setting.emoji_menu_modifier_desc`)}
        .defaultKey=${this.defaultKeybinds.emojiMenuModifier}
        .value=${this.getKeyValue(`emojiMenuModifier`)}
        .display=${this.getKeyChar(`emojiMenuModifier`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="emojiMenu"
        label=${g(`user_setting.emoji_menu`)}
        description=${g(`user_setting.emoji_menu_desc`)}
        defaultKey=${this.defaultKeybinds.emojiMenu}
        .value=${this.getKeyValue(`emojiMenu`)}
        .display=${this.getKeyChar(`emojiMenu`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="quickChat"
        label=${g(`user_setting.quick_chat`)}
        description=${g(`user_setting.quick_chat_desc`)}
        defaultKey=${this.defaultKeybinds.quickChat}
        .value=${this.getKeyValue(`quickChat`)}
        .display=${this.getKeyChar(`quickChat`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="playerPanel"
        label=${g(`user_setting.player_panel`)}
        description=${g(`user_setting.player_panel_desc`)}
        defaultKey=${this.defaultKeybinds.playerPanel}
        .value=${this.getKeyValue(`playerPanel`)}
        .display=${this.getKeyChar(`playerPanel`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="pauseGame"
        label=${g(`user_setting.pause_game`)}
        description=${g(`user_setting.pause_game_desc`)}
        .defaultKey=${this.defaultKeybinds.pauseGame}
        .value=${this.getKeyValue(`pauseGame`)}
        .display=${this.getKeyChar(`pauseGame`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="gameSpeedUp"
        label=${g(`user_setting.game_speed_up`)}
        description=${g(`user_setting.game_speed_up_desc`)}
        .defaultKey=${this.defaultKeybinds.gameSpeedUp}
        .value=${this.getKeyValue(`gameSpeedUp`)}
        .display=${this.getKeyChar(`gameSpeedUp`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="gameSpeedDown"
        label=${g(`user_setting.game_speed_down`)}
        description=${g(`user_setting.game_speed_down_desc`)}
        .defaultKey=${this.defaultKeybinds.gameSpeedDown}
        .value=${this.getKeyValue(`gameSpeedDown`)}
        .display=${this.getKeyChar(`gameSpeedDown`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="performanceOverlay"
        label=${g(`user_setting.performance_overlay_label`)}
        description=${g(`user_setting.performance_overlay_keybind_desc`)}
        defaultKey=${this.defaultKeybinds.performanceOverlay}
        .value=${this.getKeyValue(`performanceOverlay`)}
        .display=${this.getKeyChar(`performanceOverlay`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.attack_ratio_controls`)}
      </h2>

      <setting-keybind
        action="attackRatioDown"
        label=${g(`user_setting.attack_ratio_down`)}
        description=${g(`user_setting.attack_ratio_down_desc`,{amount:this.userSettings.attackRatioIncrement()})}
        defaultKey=${this.defaultKeybinds.attackRatioDown}
        .value=${this.getKeyValue(`attackRatioDown`)}
        .display=${this.getKeyChar(`attackRatioDown`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="attackRatioUp"
        label=${g(`user_setting.attack_ratio_up`)}
        description=${g(`user_setting.attack_ratio_up_desc`,{amount:this.userSettings.attackRatioIncrement()})}
        defaultKey=${this.defaultKeybinds.attackRatioUp}
        .value=${this.getKeyValue(`attackRatioUp`)}
        .display=${this.getKeyChar(`attackRatioUp`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.attack_keybinds`)}
      </h2>

      <setting-keybind
        action="boatAttack"
        label=${g(`user_setting.boat_attack`)}
        description=${g(`user_setting.boat_attack_desc`)}
        defaultKey=${this.defaultKeybinds.boatAttack}
        .value=${this.getKeyValue(`boatAttack`)}
        .display=${this.getKeyChar(`boatAttack`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="groundAttack"
        label=${g(`user_setting.ground_attack`)}
        description=${g(`user_setting.ground_attack_desc`)}
        defaultKey=${this.defaultKeybinds.groundAttack}
        .value=${this.getKeyValue(`groundAttack`)}
        .display=${this.getKeyChar(`groundAttack`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="retaliateAttack"
        label=${g(`user_setting.retaliate_attack`)}
        description=${g(`user_setting.retaliate_attack_desc`)}
        defaultKey=${this.defaultKeybinds.retaliateAttack}
        .value=${this.getKeyValue(`retaliateAttack`)}
        .display=${this.getKeyChar(`retaliateAttack`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="swapDirection"
        label=${g(`user_setting.swap_direction`)}
        description=${g(`user_setting.swap_direction_desc`)}
        .defaultKey=${this.defaultKeybinds.swapDirection}
        .value=${this.getKeyValue(`swapDirection`)}
        .display=${this.getKeyChar(`swapDirection`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="boxSelectWarships"
        .allowModifiers=${!0}
        label=${g(`user_setting.box_select_warships`)}
        description=${g(`user_setting.box_select_warships_desc`)}
        .defaultKey=${this.defaultKeybinds.boxSelectWarships}
        .value=${this.getKeyValue(`boxSelectWarships`)}
        .display=${this.getKeyChar(`boxSelectWarships`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="selectAllWarships"
        label=${g(`user_setting.select_all_warships`)}
        description=${g(`user_setting.select_all_warships_desc`)}
        .defaultKey=${this.defaultKeybinds.selectAllWarships}
        .value=${this.getKeyValue(`selectAllWarships`)}
        .display=${this.getKeyChar(`selectAllWarships`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.ally_keybinds`)}
      </h2>

      <setting-keybind
        action="requestAlliance"
        label=${g(`user_setting.request_alliance`)}
        description=${g(`user_setting.request_alliance_desc`)}
        defaultKey=${this.defaultKeybinds.requestAlliance}
        .value=${this.getKeyValue(`requestAlliance`)}
        .display=${this.getKeyChar(`requestAlliance`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="breakAlliance"
        label=${g(`user_setting.break_alliance`)}
        description=${g(`user_setting.break_alliance_desc`)}
        defaultKey=${this.defaultKeybinds.breakAlliance}
        .value=${this.getKeyValue(`breakAlliance`)}
        .display=${this.getKeyChar(`breakAlliance`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="targetPlayer"
        label=${g(`user_setting.target_player`)}
        description=${g(`user_setting.target_player_desc`)}
        defaultKey=${this.defaultKeybinds.targetPlayer}
        .value=${this.getKeyValue(`targetPlayer`)}
        .display=${this.getKeyChar(`targetPlayer`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="donateTroops"
        label=${g(`user_setting.donate_troops`)}
        description=${g(`user_setting.donate_troops_desc`)}
        defaultKey=${this.defaultKeybinds.donateTroops}
        .value=${this.getKeyValue(`donateTroops`)}
        .display=${this.getKeyChar(`donateTroops`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="donateGold"
        label=${g(`user_setting.donate_gold`)}
        description=${g(`user_setting.donate_gold_desc`)}
        defaultKey=${this.defaultKeybinds.donateGold}
        .value=${this.getKeyValue(`donateGold`)}
        .display=${this.getKeyChar(`donateGold`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.zoom_controls`)}
      </h2>

      <setting-keybind
        action="zoomOut"
        label=${g(`user_setting.zoom_out`)}
        description=${g(`user_setting.zoom_out_desc`)}
        defaultKey=${this.defaultKeybinds.zoomOut}
        .value=${this.getKeyValue(`zoomOut`)}
        .display=${this.getKeyChar(`zoomOut`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="zoomOutMinus"
        label=${g(`user_setting.zoom_out`)}
        description=${g(`user_setting.zoom_out_desc`)}
        defaultKey=${this.defaultKeybinds.zoomOutMinus}
        .value=${this.getKeyValue(`zoomOutMinus`)}
        .display=${this.getKeyChar(`zoomOutMinus`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="zoomOutNumpad"
        label=${g(`user_setting.zoom_out`)}
        description=${g(`user_setting.zoom_out_desc`)}
        defaultKey=${this.defaultKeybinds.zoomOutNumpad}
        .value=${this.getKeyValue(`zoomOutNumpad`)}
        .display=${this.getKeyChar(`zoomOutNumpad`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="zoomIn"
        label=${g(`user_setting.zoom_in`)}
        description=${g(`user_setting.zoom_in_desc`)}
        defaultKey=${this.defaultKeybinds.zoomIn}
        .value=${this.getKeyValue(`zoomIn`)}
        .display=${this.getKeyChar(`zoomIn`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="zoomInEqual"
        label=${g(`user_setting.zoom_in`)}
        description=${g(`user_setting.zoom_in_desc`)}
        defaultKey=${this.defaultKeybinds.zoomInEqual}
        .value=${this.getKeyValue(`zoomInEqual`)}
        .display=${this.getKeyChar(`zoomInEqual`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="zoomInNumpad"
        label=${g(`user_setting.zoom_in`)}
        description=${g(`user_setting.zoom_in_desc`)}
        defaultKey=${this.defaultKeybinds.zoomInNumpad}
        .value=${this.getKeyValue(`zoomInNumpad`)}
        .display=${this.getKeyChar(`zoomInNumpad`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <h2
        class="text-blue-200 text-xl font-bold mt-8 mb-3 border-b border-white/10 pb-2"
      >
        ${g(`user_setting.camera_movement`)}
      </h2>

      <setting-keybind
        action="centerCamera"
        label=${g(`user_setting.center_camera`)}
        description=${g(`user_setting.center_camera_desc`)}
        defaultKey=${this.defaultKeybinds.centerCamera}
        .value=${this.getKeyValue(`centerCamera`)}
        .display=${this.getKeyChar(`centerCamera`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveUp"
        label=${g(`user_setting.move_up`)}
        description=${g(`user_setting.move_up_desc`)}
        defaultKey=${this.defaultKeybinds.moveUp}
        .value=${this.getKeyValue(`moveUp`)}
        .display=${this.getKeyChar(`moveUp`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveUpArrow"
        label=${g(`user_setting.move_up`)}
        description=${g(`user_setting.move_up_desc`)}
        defaultKey=${this.defaultKeybinds.moveUpArrow}
        .value=${this.getKeyValue(`moveUpArrow`)}
        .display=${this.getKeyChar(`moveUpArrow`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveLeft"
        label=${g(`user_setting.move_left`)}
        description=${g(`user_setting.move_left_desc`)}
        defaultKey=${this.defaultKeybinds.moveLeft}
        .value=${this.getKeyValue(`moveLeft`)}
        .display=${this.getKeyChar(`moveLeft`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveLeftArrow"
        label=${g(`user_setting.move_left`)}
        description=${g(`user_setting.move_left_desc`)}
        defaultKey=${this.defaultKeybinds.moveLeftArrow}
        .value=${this.getKeyValue(`moveLeftArrow`)}
        .display=${this.getKeyChar(`moveLeftArrow`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveDown"
        label=${g(`user_setting.move_down`)}
        description=${g(`user_setting.move_down_desc`)}
        defaultKey=${this.defaultKeybinds.moveDown}
        .value=${this.getKeyValue(`moveDown`)}
        .display=${this.getKeyChar(`moveDown`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveDownArrow"
        label=${g(`user_setting.move_down`)}
        description=${g(`user_setting.move_down_desc`)}
        defaultKey=${this.defaultKeybinds.moveDownArrow}
        .value=${this.getKeyValue(`moveDownArrow`)}
        .display=${this.getKeyChar(`moveDownArrow`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveRight"
        label=${g(`user_setting.move_right`)}
        description=${g(`user_setting.move_right_desc`)}
        defaultKey=${this.defaultKeybinds.moveRight}
        .value=${this.getKeyValue(`moveRight`)}
        .display=${this.getKeyChar(`moveRight`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>

      <setting-keybind
        action="moveRightArrow"
        label=${g(`user_setting.move_right`)}
        description=${g(`user_setting.move_right_desc`)}
        defaultKey=${this.defaultKeybinds.moveRightArrow}
        .value=${this.getKeyValue(`moveRightArrow`)}
        .display=${this.getKeyChar(`moveRightArrow`)}
        @change=${this.handleKeybindChange}
      ></setting-keybind>
    `}renderGraphicsSettings(){return b`
      ${q(this.userSettings)}
      <!-- 🎨 Graphics preset -->
      <div
        class="flex flex-col w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all gap-3"
      >
        <div class="flex flex-col min-w-0">
          <div class="text-white font-bold text-base block mb-1">
            ${g(`user_setting.graphics_preset_label`)}
          </div>
          <div class="text-white/50 text-sm leading-snug">
            ${g(`user_setting.graphics_preset_desc`)}
          </div>
        </div>
        <graphics-preset-selector></graphics-preset-selector>
      </div>

      <!-- 💾 Save / share the whole configuration. Top level, not inside
           Advanced: a player who never expands the fold should still find it. -->
      <graphics-preset-tools></graphics-preset-tools>

      <!-- 😊 Emojis -->
      <setting-toggle
        label="${g(`user_setting.emojis_label`)}"
        description="${g(`user_setting.emojis_desc`)}"
        id="emoji-toggle"
        .checked=${this.userSettings.emojis()}
        @change=${this.toggleEmojis}
      ></setting-toggle>

      <!-- 📱 Performance Overlay -->
      <setting-toggle
        label="${g(`user_setting.performance_overlay_label`)}"
        description="${this.performanceOverlayDescription()}"
        id="performance-overlay-toggle"
        .checked=${this.userSettings.performanceOverlay()}
        @change=${this.togglePerformanceOverlay}
      ></setting-toggle>

      <!-- 🗺️ Map Layers -->
      <setting-toggle
        label="${g(`user_setting.map_layers_label`)}"
        description="${g(`user_setting.map_layers_desc`)}"
        id="map-layers-toggle"
        .checked=${this.userSettings.mapLayers()}
        @change=${this.toggleMapLayers}
      ></setting-toggle>
      <button
        type="button"
        data-open-graphics-panel
        aria-expanded=${this.inline?String(this.graphicsAdvancedOpen):y}
        aria-controls=${this.inline?`graphics-advanced-inline`:y}
        class="w-full p-4 text-left text-white font-bold bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
        @click=${()=>this.openGraphicsPanel()}
      >
        <span class="block"
          >${g(`graphics_setting.advanced_label`)}</span
        >
        <span class="block text-white/50 text-sm font-normal mt-1">
          ${g(`graphics_setting.advanced_desc`)}
        </span>
      </button>
      ${this.inline&&this.graphicsAdvancedOpen?b`<graphics-advanced-settings
              id="graphics-advanced-inline"
              class="flex flex-col gap-2"
              .mapLayers=${this.mapLayers}
            ></graphics-advanced-settings>`:y}
    `}renderGameplaySettings(){return b`
      <!-- 🚨 Alert frame -->
      <setting-toggle
        label="${g(`user_setting.alert_frame_label`)}"
        description="${g(`user_setting.alert_frame_desc`)}"
        id="alert-frame-toggle"
        .checked=${this.userSettings.alertFrame()}
        @change=${this.toggleAlertFrame}
      ></setting-toggle>

      <!-- 💰 Cursor Price Pill -->
      <setting-toggle
        label="${g(`user_setting.cursor_cost_label_label`)}"
        description="${g(`user_setting.cursor_cost_label_desc`)}"
        id="cursor_cost_label-toggle"
        .checked=${this.userSettings.cursorCostLabel()}
        @change=${this.toggleCursorCostLabel}
      ></setting-toggle>

      <!-- 🧲 Snap Build Preview -->
      <setting-toggle
        label="${g(`user_setting.snap_build_preview_label`)}"
        description="${g(`user_setting.snap_build_preview_desc`)}"
        id="snap-build-preview-toggle"
        .checked=${this.userSettings.snapBuildPreview()}
        @change=${this.toggleSnapBuildPreview}
      ></setting-toggle>

      <!-- 🔢 Build Multiplier Cycle -->
      <setting-toggle
        label="${g(`user_setting.build_multiplier_cycle_label`)}"
        description="${g(`user_setting.build_multiplier_cycle_desc`)}"
        id="build-multiplier-cycle-toggle"
        .checked=${this.userSettings.buildMultiplierCycle()}
        @change=${this.toggleBuildMultiplierCycle}
      ></setting-toggle>

      <!-- 🖱️ Left Click Menu -->
      <setting-toggle
        label="${g(`user_setting.left_click_label`)}"
        description="${g(`user_setting.left_click_desc`)}"
        id="left-click-toggle"
        .checked=${this.userSettings.leftClickOpensMenu()}
        @change=${this.toggleLeftClickOpensMenu}
      ></setting-toggle>

      <setting-select
        id="random-name-style-select"
        label=${g(`user_setting.random_name_style_label`)}
        description=${g(`user_setting.random_name_style_desc`)}
        .options=${[{value:`tribe`,label:g(`user_setting.random_name_tribe`)},{value:`anon`,label:g(`user_setting.random_name_anon`)}]}
        .value=${this.userSettings.randomNameStyle()}
        @change=${e=>{let t=e.detail?.value;t!==void 0&&(this.userSettings.setRandomNameStyle(t===`tribe`?`tribe`:`anon`),this.requestUpdate())}}
      ></setting-select>

      <!-- 🙈 Anonymous Names -->
      <setting-toggle
        label="${g(`user_setting.anonymous_names_label`)}"
        description="${g(`user_setting.anonymous_names_desc`)}"
        id="anonymous-names-toggle"
        .checked=${this.userSettings.anonymousNames()}
        @change=${this.toggleAnonymousNames}
      ></setting-toggle>

      <!-- 👁️ Hidden Lobby IDs -->
      <setting-toggle
        label="${g(`user_setting.lobby_id_visibility_label`)}"
        description="${g(`user_setting.lobby_id_visibility_desc`)}"
        id="lobby-id-visibility-toggle"
        .checked=${!this.userSettings.lobbyIdVisibility()}
        @change=${this.toggleLobbyIdVisibility}
      ></setting-toggle>

      <!-- 🔔 Lobby start alerts -->
      <setting-toggle
        label="${g(`user_setting.lobby_start_alerts_label`)}"
        description="${g(`user_setting.lobby_start_alerts_desc`)}"
        id="lobby-start-alerts-toggle"
        .checked=${this.userSettings.lobbyStartAlerts()}
        @change=${this.toggleLobbyStartAlerts}
      ></setting-toggle>

      <!-- 🎬 New replay viewer (on by default) -->
      <setting-toggle
        label="${g(`user_setting.replay_viewer_label`)}"
        description="${g(`user_setting.replay_viewer_desc`)}"
        id="replay-viewer-toggle"
        .checked=${this.userSettings.replayViewer()}
        @change=${this.toggleReplayViewer}
      ></setting-toggle>

      ${ie()?b`<setting-toggle
              label="${g(`user_setting.steam_lobby_links_label`)}"
              description="${g(`user_setting.steam_lobby_links_desc`)}"
              id="steam-lobby-links-toggle"
              .checked=${this.userSettings.steamLobbyLinks()===`steam`}
              @change=${this.toggleSteamLobbyLinks}
            ></setting-toggle>`:null}

      <!-- 🔍 Go to player -->
      <setting-toggle
        label="${g(`user_setting.go_to_player_label`)}"
        description="${g(`user_setting.go_to_player_desc`)}"
        id="go-to-player-toggle"
        .checked=${this.userSettings.goToPlayer()}
        @change=${this.toggleGoToPlayer}
      ></setting-toggle>

      ${Mt()?b`<setting-toggle
              label="${g(`user_setting.halloween_theme_label`)}"
              description="${g(`user_setting.halloween_theme_desc`)}"
              id="halloween-theme-toggle"
              .checked=${this.userSettings.halloweenTheme()}
              @change=${this.toggleHalloweenTheme}
            ></setting-toggle>`:null}

      <!-- Help messages (moved here from the in-game menu) -->
      <setting-toggle
        label="${g(`user_setting.help_messages_label`)}"
        description="${g(`user_setting.help_messages_desc`)}"
        id="help-messages-toggle"
        .checked=${this.userSettings.helpMessages()}
        @change=${this.toggleHelpMessages}
      ></setting-toggle>

      <!-- Attacking troops overlay (moved here from the in-game menu) -->
      <setting-toggle
        label="${g(`user_setting.attacking_troops_overlay_label`)}"
        description="${g(`user_setting.attacking_troops_overlay_desc`)}"
        id="attacking-troops-overlay-toggle"
        .checked=${this.userSettings.attackingTroopsOverlay()}
        @change=${this.toggleAttackingTroopsOverlay}
      ></setting-toggle>

      <!-- ⚔️ Attack Ratio -->
      <setting-slider
        label="${g(`user_setting.attack_ratio_label`)}"
        description="${g(`user_setting.attack_ratio_desc`)}"
        id="attack-ratio-slider"
        min="1"
        max="100"
        .value=${Math.round(this.currentAttackRatio()*100)}
        @change=${this.sliderAttackRatio}
      ></setting-slider>

      <!-- ⚔️ Attack Ratio Increment -->
      <setting-select
        label=${g(`user_setting.attack_ratio_increment_label`)}
        description=${g(`user_setting.attack_ratio_increment_desc`)}
        .options=${[{value:1,label:`1%`},{value:2,label:`2%`},{value:5,label:`5%`},{value:10,label:`10%`},{value:20,label:`20%`}]}
        .value=${String(this.userSettings.attackRatioIncrement())}
        @change=${this.changeAttackRatioIncrement}
      ></setting-select>

      <setting-slider
        label="${g(`user_setting.nuke_alliance_safety_label`)}"
        description="${g(`user_setting.nuke_alliance_safety_desc`)}"
        min="0"
        max="30"
        .value=${this.userSettings.nukeAllianceSafetyDuration()}
        .formatValue=${e=>e>0?g(`user_setting.nuke_alliance_safety_duration`,{count:e,seconds:(e/10).toFixed(1)}):g(`user_setting.off`)}
        @change=${this.sliderNukeAllianceSafetyDuration}
      ></setting-slider>

      ${this.showEasterEggSettings?b`
              <setting-slider
                label="${g(`user_setting.easter_writing_speed_label`)}"
                description="${g(`user_setting.easter_writing_speed_desc`)}"
                min="0"
                max="100"
                value="40"
                easter="true"
                @change=${e=>{let t=e.detail?.value;t===void 0?console.warn(`Slider event missing detail.value`,e):console.log(`Changed:`,t)}}
              ></setting-slider>

              <setting-number
                label="${g(`user_setting.easter_bug_count_label`)}"
                description="${g(`user_setting.easter_bug_count_desc`)}"
                value="100"
                min="0"
                max="1000"
                easter="true"
                @change=${e=>{let t=e.detail?.value;t===void 0?console.warn(`Slider event missing detail.value`,e):console.log(`Changed:`,t)}}
              ></setting-number>
            `:null}
    `}onOpen(e){window.addEventListener(`keydown`,this.handleEasterEggKey),this.loadKeybindsFromStorage(),typeof e?.onReturn==`function`&&(this.onReturn=e.onReturn)}};c([m()],$.prototype,`keySequence`,void 0),c([m()],$.prototype,`graphicsAdvancedOpen`,void 0),c([m()],$.prototype,`showEasterEggSettings`,void 0),c([m()],$.prototype,`userKeybinds`,void 0),c([m()],$.prototype,`display`,void 0),c([m()],$.prototype,`displayBusy`,void 0),c([m()],$.prototype,`previewing`,void 0),$=c([d(`user-setting`)],$);export{T as n,Ot as t};