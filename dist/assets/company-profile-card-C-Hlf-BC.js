import{G as c,x as d,n as i,t as m}from"./main-BFjwW7uW.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,t=(n,a,p,l)=>{for(var r=l>1?void 0:l?h(a,p):a,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(l?o(a,p,r):o(r))||r);return l&&r&&g(a,p,r),r};let e=class extends c{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return d`
        <div class="card mb-5" style="height:280px;">
            <a href="/company-profile/?id=${this.companyId}${this.includeUnapprovedData?"&unapproved=1":""}" class="card-link text-reset h-100 d-flex flex-column">
                <div class="card-img-top card-img-top--lg card-img-top--gradient bg-primary-subtle d-flex flex-column" style="background-image: url('${this.imageUrl||"/images/placeholder.jpg"}')">
                    <div class="d-flex justify-content-between align-items-center m-2">
                        <h5 class="card-title text-light m-0">${this.name}</h5>
                        ${this.logoUrl?d`
                            <div class="rounded-circle d-flex align-items-center m-0 p-0 mt-4 justify-content-center bg-white" 
                                style="min-width: 70px; min-height: 70px; max-width: 70px; max-height: 70px; width: 70px; height: 70px;  border: 2px solid #dee2e6;">
                                <img src="${this.logoUrl}" alt="${this.name} logo" style="max-width: 70%; max-height: 70%;" />
                            </div>`:""}
                    </div>
                </div>
                <div class="card-body d-flex flex-column">
                    <p class="card-text mt-2 text-truncate-3">${this.description||"No description available"}</p>
                    ${this.serviceArea?d`
                    <div class="mt-auto">
                        <span class="badge rounded-pill text-bg-dark mt-0 me-2">Service area: ${this.serviceArea}</span>
                    </div>
                    `:""}
                </div>
            </a>
        </div>
        `}};t([i({type:String})],e.prototype,"companyId",2);t([i({type:String})],e.prototype,"name",2);t([i({type:String})],e.prototype,"imageUrl",2);t([i({type:String})],e.prototype,"description",2);t([i({type:String})],e.prototype,"logoUrl",2);t([i({type:String})],e.prototype,"serviceArea",2);t([i({type:Boolean})],e.prototype,"includeUnapprovedData",2);e=t([m("company-profile-card")],e);export{e as C};
