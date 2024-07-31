import{n as a,t as f,G as x,x as y,D as L}from"./database-ByIzmupz.js";import"./feasibility-considerations-card-D7x72IoK.js";var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,b=(l,i,e,r)=>{for(var t=r>1?void 0:r?I(i,e):i,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(r?d(i,e,t):d(t))||t);return r&&t&&D(i,e,t),t};let h=class extends x{render(){return y`
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
        `}};b([a({type:String})],h.prototype,"name",2);b([a({type:String})],h.prototype,"imageUrl",2);b([a({type:String})],h.prototype,"description",2);h=b([f("reuse-option-card")],h);var M=Object.defineProperty,N=Object.getOwnPropertyDescriptor,C=(l,i,e,r)=>{for(var t=r>1?void 0:r?N(i,e):i,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(r?d(i,e,t):d(t))||t);return r&&t&&M(i,e,t),t};let v=class extends x{render(){return y`
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
        `}};C([a({type:String})],v.prototype,"name",2);C([a({type:String})],v.prototype,"imageUrl",2);C([a({type:String})],v.prototype,"description",2);v=C([f("material-card")],v);var B=Object.defineProperty,R=Object.getOwnPropertyDescriptor,u=(l,i,e,r)=>{for(var t=r>1?void 0:r?R(i,e):i,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(r?d(i,e,t):d(t))||t);return r&&t&&B(i,e,t),t};let g=class extends x{render(){return y`
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
        `}};u([a({type:String})],g.prototype,"projectId",2);u([a({type:String})],g.prototype,"name",2);u([a({type:String})],g.prototype,"description",2);u([a({type:String})],g.prototype,"imageUrl",2);u([a({type:String})],g.prototype,"componentId",2);g=u([f("project-example-card")],g);var T=Object.defineProperty,F=Object.getOwnPropertyDescriptor,p=(l,i,e,r)=>{for(var t=r>1?void 0:r?F(i,e):i,s=l.length-1,d;s>=0;s--)(d=l[s])&&(t=(r?d(i,e,t):d(t))||t);return r&&t&&T(i,e,t),t};let c=class extends x{render(){return y`
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
        `}};p([a({type:String})],c.prototype,"imageUrl",2);p([a({type:String})],c.prototype,"description",2);p([a({type:String})],c.prototype,"nrmLayer",2);p([a({type:String})],c.prototype,"uniclassCode",2);p([a({type:String})],c.prototype,"category",2);p([a({type:String})],c.prototype,"expectedLifespan",2);p([a({type:String})],c.prototype,"subCategory",2);p([a({type:String})],c.prototype,"length",2);p([a({type:String})],c.prototype,"width",2);p([a({type:String})],c.prototype,"height",2);p([a({type:String})],c.prototype,"mass",2);p([a({type:String})],c.prototype,"volume",2);c=p([f("component-details-card")],c);const m=new L;async function G(){const i=new URLSearchParams(window.location.search).get("id");if(!i)return;const e=await m.getComponent(i),r=document.getElementsByTagName("main-heading")[0];r.heading=e.get("component_name");const t=document.createElement("icon-badge");t.text=e.get("shearing_layer"),t.icon="house",r.appendChild(t);const s=document.getElementsByTagName("component-details-card")[0];s.imageUrl="",s.description=e.get("description_full"),s.nrmLayer=e.get("NRM1_layer_materials");const d=e.get("UniClass Ma Materials (from materials)");if(d){const o=await m.getUniclassMaterial(d);s.uniclassCode=o?.get("Code")}const _=e.get("category (from component_name)");if(_){const o=await m.getCategory(_);s.category=o?.get("Name")}s.expectedLifespan=e.get("design_life"),s.expectedLifespan&&(s.expectedLifespan+=" years"),s.subCategory="-",s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height"),s.mass=e.get("mass"),s.volume=e.get("volume");const w=document.getElementsByTagName("tags-list")[0],$=await m.getReuseConsiderations();w.tags=e.get("reuse_considerations")?.map(o=>$.find(n=>n.id===o)?.get("Name"));const S=document.getElementsByTagName("feasibility-considerations-card")[0];S.considerations=[{heading:"",description:e.get("Feasibility Consideration 1")},{heading:"",description:e.get("Feasibility Consideration 2")},{heading:"",description:e.get("Feasibility Consideration 3")},{heading:"",description:e.get("Feasibility Consideration 4")}];const O=document.getElementById("reuse-options"),P=await m.getReuseOptions();e.get("reuse_options")?.map(o=>P.find(n=>n.id===o))?.forEach(async o=>{const n=new h;n.name=o.get("Name"),n.imageUrl=o.get("reuse_option_image")?.at(0)?.url,n.description=o.get("reuse_option_description"),O.appendChild(n)});const U=document.getElementById("materials"),j=await m.getMaterials();e.get("materials (from component_materials)")?.map(o=>j.find(n=>n.id===o))?.forEach(async o=>{const n=new v;n.name=o.get("Name"),n.imageUrl="",n.description=o.get("description"),U.appendChild(n)});const E=document.getElementById("project-examples");(await m.getCaseStudies(e.get("component_name")))?.forEach(async o=>{const n=new g;n.projectId=o.id,n.name=o.get("title"),n.imageUrl=o.get("case_study_image")?.at(0)?.url,n.description=o.get("description"),n.componentId=e.id,E.appendChild(n)})}await G();
