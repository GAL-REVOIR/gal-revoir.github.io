import{di as e,gi as t,hi as n,mi as r,ra as i,xi as a}from"./index-hx7tETuk.js";import"./CapIcon-Dm-ai8vC.js";import"./PlutoniumIcon-82UaOhgZ.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends t{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let e=o(this.hard),t=o(this.soft);if(e===null&&t===null)return a``;let n=this.compact,r=n?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=n?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=n?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return a`
      <div class="${r}">
        ${e===null?``:a`<div
                class="flex items-center gap-1.5"
                title=${i(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${n?12:16}></plutonium-icon>
                <span class="${s}">${e}</span>
              </div>`}
        ${t===null?``:a`<div
                class="flex items-center gap-1.5"
                title=${i(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${n?14:20}
                  style=${n?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${t}</span>
              </div>`}
      </div>
    `}};e([r({attribute:!1})],s.prototype,`hard`,void 0),e([r({attribute:!1})],s.prototype,`soft`,void 0),e([r({type:Boolean})],s.prototype,`compact`,void 0),s=e([n(`currency-display`)],s);export{o as t};