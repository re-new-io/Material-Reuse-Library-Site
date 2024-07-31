import{n as s,t as f,G as x,x as y,D as j}from"./database-DbnznD3V.js";import"./shearing-layer-badge-QJlQTp0E.js";import"./feasibility-considerations-card-B4z1o-Yy.js";var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,b=(l,i,e,r)=>{for(var t=r>1?void 0:r?I(i,e):i,a=l.length-1,o;a>=0;a--)(o=l[a])&&(t=(r?o(i,e,t):o(t))||t);return r&&t&&D(i,e,t),t};let h=class extends x{render(){return y`
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
        `}};b([s({type:String})],h.prototype,"name",2);b([s({type:String})],h.prototype,"imageUrl",2);b([s({type:String})],h.prototype,"description",2);h=b([f("reuse-option-card")],h);var M=Object.defineProperty,N=Object.getOwnPropertyDescriptor,C=(l,i,e,r)=>{for(var t=r>1?void 0:r?N(i,e):i,a=l.length-1,o;a>=0;a--)(o=l[a])&&(t=(r?o(i,e,t):o(t))||t);return r&&t&&M(i,e,t),t};let u=class extends x{render(){return y`
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
        `}};C([s({type:String})],u.prototype,"name",2);C([s({type:String})],u.prototype,"imageUrl",2);C([s({type:String})],u.prototype,"description",2);u=C([f("material-card")],u);var R=Object.defineProperty,B=Object.getOwnPropertyDescriptor,v=(l,i,e,r)=>{for(var t=r>1?void 0:r?B(i,e):i,a=l.length-1,o;a>=0;a--)(o=l[a])&&(t=(r?o(i,e,t):o(t))||t);return r&&t&&R(i,e,t),t};let g=class extends x{render(){return y`
        <div class="card mb-5">
            <a href="/material-reuse-option/?id=${this.materialReuseOptionId}&componentId=${this.componentId}" class="card-link h-100 d-flex flex-column">
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
        `}};v([s({type:String})],g.prototype,"materialReuseOptionId",2);v([s({type:String})],g.prototype,"name",2);v([s({type:String})],g.prototype,"description",2);v([s({type:String})],g.prototype,"imageUrl",2);v([s({type:String})],g.prototype,"componentId",2);g=v([f("project-example-card")],g);var T=Object.defineProperty,F=Object.getOwnPropertyDescriptor,c=(l,i,e,r)=>{for(var t=r>1?void 0:r?F(i,e):i,a=l.length-1,o;a>=0;a--)(o=l[a])&&(t=(r?o(i,e,t):o(t))||t);return r&&t&&T(i,e,t),t};let p=class extends x{render(){return y`
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
        `}};c([s({type:String})],p.prototype,"imageUrl",2);c([s({type:String})],p.prototype,"description",2);c([s({type:String})],p.prototype,"nrmLayer",2);c([s({type:String})],p.prototype,"uniclassCode",2);c([s({type:String})],p.prototype,"category",2);c([s({type:String})],p.prototype,"expectedLifespan",2);c([s({type:String})],p.prototype,"subCategory",2);c([s({type:String})],p.prototype,"length",2);c([s({type:String})],p.prototype,"width",2);c([s({type:String})],p.prototype,"height",2);c([s({type:String})],p.prototype,"mass",2);c([s({type:String})],p.prototype,"volume",2);p=c([f("component-details-card")],p);const m=new j;async function G(){const i=new URLSearchParams(window.location.search).get("id");if(!i)return;const e=await m.getComponent(i),r=document.getElementsByTagName("main-heading")[0];r.heading=e.get("component_name");const t=document.createElement("shearing-layer-badge");t.shearingLayerName=e.get("shearing_layer"),r.appendChild(t);const a=document.getElementsByTagName("component-details-card")[0];a.imageUrl="",a.description=e.get("description_full"),a.nrmLayer=e.get("NRM1_layer_materials");const o=e.get("UniClass Ma Materials (from materials)");if(o){const d=await m.getUniclassMaterial(o);a.uniclassCode=d?.get("Code")}const _=e.get("category (from component_name)");if(_){const d=await m.getCategory(_);a.category=d?.get("Name")}a.expectedLifespan=e.get("design_life"),a.expectedLifespan&&(a.expectedLifespan+=" years"),a.subCategory="-",a.length=e.get("length"),a.width=e.get("width"),a.height=e.get("height"),a.mass=e.get("mass"),a.volume=e.get("volume");const w=document.getElementsByTagName("tags-list")[0],$=await m.getReuseConsiderations();w.tags=e.get("reuse_considerations")?.map(d=>$.find(n=>n.id===d)?.get("Name"));const S=document.getElementsByTagName("feasibility-considerations-card")[0];S.considerations=[{heading:"",description:e.get("Feasibility Consideration 1")},{heading:"",description:e.get("Feasibility Consideration 2")},{heading:"",description:e.get("Feasibility Consideration 3")},{heading:"",description:e.get("Feasibility Consideration 4")}];const O=document.getElementById("reuse-options"),P=await m.getReuseOptions();e.get("reuse_options")?.map(d=>P.find(n=>n.id===d))?.forEach(async d=>{const n=new h;n.name=d.get("Name"),n.imageUrl=d.get("reuse_option_image")?.at(0)?.url,n.description=d.get("reuse_option_description"),O.appendChild(n)});const U=document.getElementById("materials"),E=await m.getMaterials();e.get("materials (from component_materials)")?.map(d=>E.find(n=>n.id===d))?.forEach(async d=>{const n=new u;n.name=d.get("Name"),n.imageUrl="",n.description=d.get("description"),U.appendChild(n)});const L=document.getElementById("project-examples");(await m.getCaseStudies(e.get("component_name")))?.forEach(async d=>{const n=new g;n.materialReuseOptionId=d.id,n.name=d.get("title"),n.imageUrl=d.get("case_study_image")?.at(0)?.url,n.description=d.get("description"),n.componentId=e.id,L.appendChild(n)})}await G();
