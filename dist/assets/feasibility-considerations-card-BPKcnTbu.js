import{n as p,t as m,G as g,x as l}from"./database-DsAmLPVN.js";var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(s,e,a,r)=>{for(var t=r>1?void 0:r?v(e,a):e,i=s.length-1,d;i>=0;i--)(d=s[i])&&(t=(r?d(e,a,t):d(t))||t);return r&&t&&y(e,a,t),t};let o=class extends g{constructor(){super(...arguments),this.tags=[],this.lightBackgrond=!1}render(){return l`
        <h3 class="fs-6 text-uppercase">${this.heading}</h3>
        ${this.tags?.map(s=>l`<span class="badge round-pill rounded-pill fs-6 text-bg-${this.lightBackgrond?"light border border-primary":"dark"} mt-2 me-2">${s}</span>`)}
        `}};c([p({type:String})],o.prototype,"heading",2);c([p({type:Array})],o.prototype,"tags",2);c([p({type:Boolean})],o.prototype,"lightBackgrond",2);o=c([m("tags-list")],o);var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(s,e,a,r)=>{for(var t=r>1?void 0:r?b(e,a):e,i=s.length-1,d;i>=0;i--)(d=s[i])&&(t=(r?d(e,a,t):d(t))||t);return r&&t&&f(e,a,t),t};let n=class extends g{constructor(){super(...arguments),this.metaData=[],this.considerations=[]}render(){return l`
        <div class="card mb-5">
          <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0">Feasibility Considerations</h2>
          </div>
          <div class="card-body d-flex flex-column">
            ${this.metaData?.length>0?l`
              <dl class="row row-cols-1 mt-2 mb-4">
              ${this.metaData?.map(s=>l`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase">
                    ${s.heading}
                  </dt>
                  <dd>
                    ${s.description}
                  </dd>
                </div>
                `)}
              </dl>`:""}
            <dl class="row row-cols-2 mt-2 mb-4">
              ${this.considerations?.map(s=>l`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase text-primary">
                    ${s.heading}
                  </dt>
                  <dd>
                    ${s.description}
                  </dd>
                </div>
                `)}
            </dl>         
          </div>
        </div>
        `}};h([p({type:Array})],n.prototype,"metaData",2);h([p({type:Array})],n.prototype,"considerations",2);n=h([m("feasibility-considerations-card")],n);
