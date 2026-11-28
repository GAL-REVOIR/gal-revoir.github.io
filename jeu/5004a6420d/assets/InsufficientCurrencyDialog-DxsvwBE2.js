import{di as e,gi as t,hi as n,mi as r,ra as i,vi as a,xi as o}from"./index-hx7tETuk.js";var s=class extends t{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let e=this.info;return e?o`<confirm-dialog
      .heading=${i(`store.insufficient_currency_title`,{currency:e.currency})}
      .message=${i(`store.insufficient_currency_body`,{amount:e.shortfall,currency:e.currency,item:e.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${e.canTopUp?`confirmOnly`:`none`}
      .confirmText=${e.canTopUp?i(`store.purchase_currency`,{currency:e.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:a}};e([r({attribute:!1})],s.prototype,`info`,void 0),s=e([n(`insufficient-currency-dialog`)],s);