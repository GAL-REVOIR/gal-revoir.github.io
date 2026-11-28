import{$i as e,_i as t,di as n,fi as r,mi as i,si as a,ui as o}from"./index-BHQpe8wU.js";var s=class extends r{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let n=this.info;return n?t`<confirm-dialog
      .heading=${e(`store.insufficient_currency_title`,{currency:n.currency})}
      .message=${e(`store.insufficient_currency_body`,{amount:n.shortfall,currency:n.currency,item:n.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${n.canTopUp?`confirmOnly`:`none`}
      .confirmText=${n.canTopUp?e(`store.purchase_currency`,{currency:n.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:i}};a([o({attribute:!1})],s.prototype,`info`,void 0),s=a([n(`insufficient-currency-dialog`)],s);