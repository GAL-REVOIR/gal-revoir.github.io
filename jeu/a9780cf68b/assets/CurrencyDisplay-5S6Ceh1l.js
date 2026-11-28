import{$i as e,_i as t,di as n,fi as r,si as i,ui as a}from"./index-BHQpe8wU.js";import"./CapIcon-DWYUmxOg.js";import"./PlutoniumIcon-TjVB4nmC.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends r{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let n=o(this.hard),r=o(this.soft);if(n===null&&r===null)return t``;let i=this.compact,a=i?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=i?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=i?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return t`
      <div class="${a}">
        ${n===null?``:t`<div
                class="flex items-center gap-1.5"
                title=${e(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${i?12:16}></plutonium-icon>
                <span class="${s}">${n}</span>
              </div>`}
        ${r===null?``:t`<div
                class="flex items-center gap-1.5"
                title=${e(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${i?14:20}
                  style=${i?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${r}</span>
              </div>`}
      </div>
    `}};i([a({attribute:!1})],s.prototype,`hard`,void 0),i([a({attribute:!1})],s.prototype,`soft`,void 0),i([a({type:Boolean})],s.prototype,`compact`,void 0),s=i([n(`currency-display`)],s);export{o as t};