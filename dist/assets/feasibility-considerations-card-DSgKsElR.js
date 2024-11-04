import{n as l,t as g,G as m,x as o,o as y}from"./icon-badge-BCxSZBFt.js";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(t,e,a,r)=>{for(var s=r>1?void 0:r?v(e,a):e,i=t.length-1,d;i>=0;i--)(d=t[i])&&(s=(r?d(e,a,s):d(s))||s);return r&&s&&f(e,a,s),s};let p=class extends m{constructor(){super(...arguments),this.tags=[],this.lightBackground=!1}render(){return o`
        <h3 class="fs-6 text-uppercase">${this.heading}</h3>
        ${this.tags?.map(t=>o`<span class="badge rounded-pill fs-6 text-bg-${this.lightBackground?"light border border-primary":"dark"} mt-2 me-2">${t}</span>`)}
        `}};c([l({type:String})],p.prototype,"heading",2);c([l({type:Array})],p.prototype,"tags",2);c([l({type:Boolean})],p.prototype,"lightBackground",2);p=c([g("tags-list")],p);var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var s=r>1?void 0:r?b(e,a):e,i=t.length-1,d;i>=0;i--)(d=t[i])&&(s=(r?d(e,a,s):d(s))||s);return r&&s&&u(e,a,s),s};let n=class extends m{constructor(){super(...arguments),this.metaData=[],this.considerations=[]}render(){return o`
        <div class="card mb-5">
          <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">${this.heading}</h2>
          </div>
          <div class="card-body d-flex flex-column">
            ${this.metaData?.length>0?o`
              <dl class="row row-cols-1 mb-2">
              ${this.metaData?.map(t=>o`
                <div class="mt-2">
                  <dt class="fs-7 text-uppercase">
                    ${t.heading}
                  </dt>
                  <dd>
                    ${y(t.description)}
                  </dd>
                </div>
                `)}
              </dl>`:""}
            <dl class="row row-cols-2 mb-4">
              ${this.considerations?.filter(t=>t.description?.length>0).map(t=>o`
                <div class="mt-2">
                  <dt class="fs-7 text-uppercase text-primary">
                    ${t.heading}
                  </dt>
                  <dd>
                    ${t.description}
                  </dd>
                </div>
                `)}
            </dl>
            <slot></slot>       
          </div>
        </div>
        `}};h([l({type:String})],n.prototype,"heading",2);h([l({type:Array})],n.prototype,"metaData",2);h([l({type:Array})],n.prototype,"considerations",2);n=h([g("feasibility-considerations-card")],n);
