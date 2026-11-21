import{Yi as e,ci as t,oi as n,pi as r,ri as i,si as a,ui as o}from"./index-CdogmdF1.js";var s=class extends t{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let t=this.info;return t?r`<confirm-dialog
      .heading=${e(`store.insufficient_currency_title`,{currency:t.currency})}
      .message=${e(`store.insufficient_currency_body`,{amount:t.shortfall,currency:t.currency,item:t.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${t.canTopUp?`confirmOnly`:`none`}
      .confirmText=${t.canTopUp?e(`store.purchase_currency`,{currency:t.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:o}};i([n({attribute:!1})],s.prototype,`info`,void 0),s=i([a(`insufficient-currency-dialog`)],s);