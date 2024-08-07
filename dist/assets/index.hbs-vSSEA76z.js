import{n as a,t as f,G as x,x as y,D as I}from"./database-BccU47er.js";import"./feasibility-considerations-card-zy-1Ur4X.js";var D=Object.defineProperty,M=Object.getOwnPropertyDescriptor,b=(l,r,e,n)=>{for(var t=n>1?void 0:n?M(r,e):r,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(n?d(r,e,t):d(t))||t);return n&&t&&D(r,e,t),t};let h=class extends x{render(){return y`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?y`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
            </div>
        </div>
        `}};b([a({type:String})],h.prototype,"name",2);b([a({type:String})],h.prototype,"imageUrl",2);b([a({type:String})],h.prototype,"description",2);h=b([f("reuse-option-card")],h);var N=Object.defineProperty,B=Object.getOwnPropertyDescriptor,C=(l,r,e,n)=>{for(var t=n>1?void 0:n?B(r,e):r,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(n?d(r,e,t):d(t))||t);return n&&t&&N(r,e,t),t};let u=class extends x{render(){return y`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?y`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
            </div>
        </div>
        `}};C([a({type:String})],u.prototype,"name",2);C([a({type:String})],u.prototype,"imageUrl",2);C([a({type:String})],u.prototype,"description",2);u=C([f("material-card")],u);var R=Object.defineProperty,T=Object.getOwnPropertyDescriptor,v=(l,r,e,n)=>{for(var t=n>1?void 0:n?T(r,e):r,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(n?d(r,e,t):d(t))||t);return n&&t&&R(r,e,t),t};let g=class extends x{render(){return y`
        <div class="card mb-5">
            <a href="/project/?id=${this.projectId}&componentId=${this.componentId}" class="card-link h-100 d-flex flex-column">
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
        `}};v([a({type:String})],g.prototype,"projectId",2);v([a({type:String})],g.prototype,"name",2);v([a({type:String})],g.prototype,"description",2);v([a({type:String})],g.prototype,"imageUrl",2);v([a({type:String})],g.prototype,"componentId",2);g=v([f("project-example-card")],g);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,p=(l,r,e,n)=>{for(var t=n>1?void 0:n?G(r,e):r,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(n?d(r,e,t):d(t))||t);return n&&t&&F(r,e,t),t};let c=class extends x{render(){return y`
        <div class="card mb-5">
          <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-5 m-0">Component Details</h2>
          </div>
          <img src="${this.imageUrl}" alt="" />
          <div class="card-body d-flex flex-column">     
            <p class="card-text">
              ${this.description}
            </p>
            <hr>
            <h3 class="fs-6 text-uppercase">Type</h3>
            <dl class="row row-cols-2 mt-2 mb-4">
              <div>
                <dt class="text-uppercase text-navy">
                  NRM Layer
                </dt>
                <dd>
                  ${this.nrmLayer||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Uniclass Code
                </dt>
                <dd>
                  ${this.uniclassCode||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Category
                </dt>
                <dd>
                  ${this.category||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Expected Lifespan
                </dt>
                <dd>
                  ${this.expectedLifespan||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Subcategory
                </dt>
                <dd>
                  ${this.subCategory||"-"}
                </dd>
              </div>
            </dl>
            <h3 class="fs-6 text-uppercase">Geometry</h3>
            <dl class="row row-cols-2 mt-2 mb-2">
              <div>
                <dt class="text-uppercase text-navy">
                  Length
                </dt>
                <dd>
                  ${this.length||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Width
                </dt>
                <dd>
                  ${this.width||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Height
                </dt>
                <dd>
                  ${this.height||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Mass
                </dt>
                <dd>
                  ${this.mass||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Volume
                </dt>
                <dd>
                  ${this.volume||"-"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        `}};p([a({type:String})],c.prototype,"imageUrl",2);p([a({type:String})],c.prototype,"description",2);p([a({type:String})],c.prototype,"nrmLayer",2);p([a({type:String})],c.prototype,"uniclassCode",2);p([a({type:String})],c.prototype,"category",2);p([a({type:String})],c.prototype,"expectedLifespan",2);p([a({type:String})],c.prototype,"subCategory",2);p([a({type:String})],c.prototype,"length",2);p([a({type:String})],c.prototype,"width",2);p([a({type:String})],c.prototype,"height",2);p([a({type:String})],c.prototype,"mass",2);p([a({type:String})],c.prototype,"volume",2);c=p([f("component-details-card")],c);const m=new I;async function H(){const r=new URLSearchParams(window.location.search).get("id");if(!r)return;const e=await m.getComponent(r),n=document.getElementsByTagName("main-heading")[0];n.heading=e.get("component_name");const t=document.createElement("icon-badge");t.text=e.get("shearing_layer"),t.icon="house",n.appendChild(t);const s=document.getElementsByTagName("component-details-card")[0];s.imageUrl="",s.description=e.get("description_full"),s.nrmLayer=e.get("NRM1_layer_materials")?.join(", ");const d=e.get("UniClass Ma Materials (from materials)");if(d?.length>0){const o=[];for(const i of d){const L=await m.getUniclassMaterial(i);o.push(L?.get("Code"))}s.uniclassCode=o.filter(i=>i).join(", ")}const _=e.get("category (from component_name)");if(_){const o=await m.getCategory(_);s.category=o?.get("Name")}s.expectedLifespan=e.get("design_life"),s.expectedLifespan&&(s.expectedLifespan+=" years"),s.subCategory="-",s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height"),s.mass=e.get("mass"),s.volume=e.get("volume");const w=document.getElementsByTagName("tags-list")[0],$=await m.getReuseConsiderations();w.tags=e.get("reuse_considerations")?.map(o=>$.find(i=>i.id===o)?.get("Name"));const S=document.getElementsByTagName("feasibility-considerations-card")[0];S.considerations=[{heading:"",description:e.get("Feasibility Consideration 1")},{heading:"",description:e.get("Feasibility Consideration 2")},{heading:"",description:e.get("Feasibility Consideration 3")},{heading:"",description:e.get("Feasibility Consideration 4")}];const O=document.getElementById("reuse-options"),P=await m.getReuseOptions();e.get("reuse_options")?.map(o=>P.find(i=>i.id===o))?.forEach(o=>{const i=new h;i.name=o.get("Name"),i.imageUrl=o.get("reuse_option_image")?.at(0)?.url,i.description=o.get("reuse_option_description"),O.appendChild(i)});const j=document.getElementById("materials"),U=await m.getMaterials();e.get("materials (from component_materials)")?.map(o=>U.find(i=>i.id===o))?.forEach(o=>{const i=new u;i.name=o.get("Name"),i.imageUrl="",i.description=o.get("description"),j.appendChild(i)});const E=document.getElementById("project-examples");(await m.getCaseStudies(e.get("component_name")))?.forEach(o=>{const i=new g;i.projectId=o.id,i.name=o.get("title"),i.imageUrl=o.get("case_study_image")?.at(0)?.url,i.description=o.get("description"),i.componentId=e.id,E.appendChild(i)})}await H();
