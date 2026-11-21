import{Yi as e,ci as t,oi as n,pi as r,ri as i,si as a}from"./index-DOVkn8Nm.js";import"./CapIcon-BmE4ZPmX.js";import"./PlutoniumIcon-DTFyTdZH.js";function o(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var s=class extends t{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let t=o(this.hard),n=o(this.soft);if(t===null&&n===null)return r``;let i=this.compact,a=i?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,s=i?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,c=i?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return r`
      <div class="${a}">
        ${t===null?``:r`<div
                class="flex items-center gap-1.5"
                title=${e(`cosmetics.hard`)}
              >
                <plutonium-icon .size=${i?12:16}></plutonium-icon>
                <span class="${s}">${t}</span>
              </div>`}
        ${n===null?``:r`<div
                class="flex items-center gap-1.5"
                title=${e(`cosmetics.soft`)}
              >
                <cap-icon
                  .size=${i?14:20}
                  style=${i?``:`margin-top:3px`}
                ></cap-icon>
                <span class="${c}">${n}</span>
              </div>`}
      </div>
    `}};i([n({attribute:!1})],s.prototype,`hard`,void 0),i([n({attribute:!1})],s.prototype,`soft`,void 0),i([n({type:Boolean})],s.prototype,`compact`,void 0),s=i([a(`currency-display`)],s);export{o as t};