import{G as c,x as d,n as a,t as m}from"./main-BFjwW7uW.js";import"./icon-badge-Bk4A7JFt.js";var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,e=(p,r,i,n)=>{for(var o=n>1?void 0:n?g(r,i):r,s=p.length-1,l;s>=0;s--)(l=p[s])&&(o=(n?l(r,i,o):l(o))||o);return n&&o&&u(r,i,o),o};let t=class extends c{constructor(){super(...arguments),this.isComponent=!1,this.materials=[],this.includeUnapprovedData=!1}render(){return d`
        <div class="card mb-5" style="height:280px;">
            <a href="/component-material/?id=${this.componentMaterialId}${this.includeUnapprovedData?"&unapproved=1":null}" class="card-link h-100 d-flex flex-column">
            

                <div class="card-img-top card-img-top--lg card-img-top--gradient bg-primary-subtle d-flex flex-column" style="background-image: url('${this.imageUrl||"/images/placeholder.jpg"}')">
                <div class="d-flex">
                    <icon-badge text="${this.shearingLayer}" icon="house" class="icon-badge--sm"></icon-badge>
                    <span class="ms-auto badge rounded-pill text-bg-dark small">${this.numberOfMaterialReuseOptions}</span>
                </div>
                    <h5 class="card-title text-light mt-auto p-3">${this.componentName}</h5>
                </div>
                <div class="card-body d-flex flex-column">            
                    <p class="card-text text-truncate-3">${this.componentDescription||"No description available"}</p>
                    <div class="d-flex mt-auto flex-wrap">
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
        `}};e([a({type:Boolean})],t.prototype,"isComponent",2);e([a({type:String})],t.prototype,"componentMaterialId",2);e([a({type:String})],t.prototype,"componentName",2);e([a({type:String})],t.prototype,"componentDescription",2);e([a({type:String})],t.prototype,"imageUrl",2);e([a({type:String})],t.prototype,"shearingLayer",2);e([a({type:Number})],t.prototype,"numberOfMaterialReuseOptions",2);e([a({type:Array})],t.prototype,"materials",2);e([a({type:Boolean})],t.prototype,"includeUnapprovedData",2);t=e([m("component-material-card")],t);export{t as C};
