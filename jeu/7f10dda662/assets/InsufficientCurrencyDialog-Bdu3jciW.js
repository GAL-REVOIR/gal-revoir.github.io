import{Zi as e,ai as t,ci as n,fi as r,hi as i,li as a,ui as o}from"./index-BZ-JOJvb.js";var s=class extends o{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let t=this.info;return t?i`<confirm-dialog
      .heading=${e(`store.insufficient_currency_title`,{currency:t.currency})}
      .message=${e(`store.insufficient_currency_body`,{amount:t.shortfall,currency:t.currency,item:t.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${t.canTopUp?`confirmOnly`:`none`}
      .confirmText=${t.canTopUp?e(`store.purchase_currency`,{currency:t.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:r}};t([n({attribute:!1})],s.prototype,`info`,void 0),s=t([a(`insufficient-currency-dialog`)],s);