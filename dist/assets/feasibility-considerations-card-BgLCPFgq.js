import{n as p,t as m,G as g,x as l,o as y}from"./database-XkeEppVX.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,c=(t,e,a,r)=>{for(var s=r>1?void 0:r?f(e,a):e,i=t.length-1,d;i>=0;i--)(d=t[i])&&(s=(r?d(e,a,s):d(s))||s);return r&&s&&v(e,a,s),s};let o=class extends g{constructor(){super(...arguments),this.tags=[],this.lightBackground=!1}render(){return l`
        <h3 class="fs-6 text-uppercase">${this.heading}</h3>
        ${this.tags?.map(t=>l`<span class="badge round-pill rounded-pill fs-6 text-bg-${this.lightBackground?"light border border-primary":"dark"} mt-2 me-2">${t}</span>`)}
        `}};c([p({type:String})],o.prototype,"heading",2);c([p({type:Array})],o.prototype,"tags",2);c([p({type:Boolean})],o.prototype,"lightBackground",2);o=c([m("tags-list")],o);var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var s=r>1?void 0:r?b(e,a):e,i=t.length-1,d;i>=0;i--)(d=t[i])&&(s=(r?d(e,a,s):d(s))||s);return r&&s&&u(e,a,s),s};let n=class extends g{constructor(){super(...arguments),this.metaData=[],this.considerations=[]}render(){return l`
        <div class="card mb-5">
          <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0">Feasibility Considerations</h2>
          </div>
          <div class="card-body d-flex flex-column">
            ${this.metaData?.length>0?l`
              <dl class="row row-cols-1 mt-2 mb-4 ms-3">
              ${this.metaData?.map(t=>l`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase">
                    ${t.heading}
                  </dt>
                  <dd>
                    ${y(t.description)}
                  </dd>
                </div>
                `)}
              </dl>`:""}
            <dl class="row row-cols-2 mt-2 mb-4">
              ${this.considerations?.filter(t=>t.description?.length>0).map(t=>l`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase text-primary">
                    ${t.heading}
                  </dt>
                  <dd>
                    ${t.description}
                  </dd>
                </div>
                `)}
            </dl>         
          </div>
        </div>
        `}};h([p({type:Array})],n.prototype,"metaData",2);h([p({type:Array})],n.prototype,"considerations",2);n=h([m("feasibility-considerations-card")],n);
