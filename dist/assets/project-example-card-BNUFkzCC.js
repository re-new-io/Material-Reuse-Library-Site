import{G as d,x as c,n as o,t as m}from"./main-BFjwW7uW.js";var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,r=(i,a,l,n)=>{for(var e=n>1?void 0:n?g(a,l):a,p=i.length-1,s;p>=0;p--)(s=i[p])&&(e=(n?s(a,l,e):s(e))||e);return n&&e&&u(a,l,e),e};let t=class extends d{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return c`
        <div class="card mb-5" style="height:280px;">
            <a href="/project/?id=${this.projectId}&componentId=${this.componentId}${this.includeUnapprovedData?"&unapproved=1":null}" class="card-link h-100 d-flex flex-column">
              <div class="card-img-top card-img-top--lg card-img-top--gradient bg-primary-subtle d-flex flex-column" style="background-image: url('${this.imageUrl}')">
                <h5 class="card-title text-light mt-auto">${this.name}</h5>
              </div>
              <div class="card-body d-flex flex-column">            
                <p class="card-text">${this.description}</p>
                <div class="d-flex mt-auto">
                  <div class="ms-auto align-content-end">
                    <!--<button class="btn btn-sm btn-round-icon btn-dark" type="button">
                      <svg class="bi" width="10" height="10" fill="currentColor">
                        <use xlink:href="/bootstrap-icons.svg#share" />
                      </svg>
                    </button>-->
                  </div>
                </div>
              </div>
            </a>
        </div>
        `}};r([o({type:String})],t.prototype,"projectId",2);r([o({type:String})],t.prototype,"name",2);r([o({type:String})],t.prototype,"description",2);r([o({type:String})],t.prototype,"imageUrl",2);r([o({type:String})],t.prototype,"componentId",2);r([o({type:Boolean})],t.prototype,"includeUnapprovedData",2);t=r([m("project-example-card")],t);export{t as P};
