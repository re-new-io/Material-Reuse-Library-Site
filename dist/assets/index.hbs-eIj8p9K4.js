import{n as i,t as u,G as f,x as y}from"./main-YTSNKXdW.js";import{D as R}from"./database-_5CBS0OY.js";var N=Object.defineProperty,E=Object.getOwnPropertyDescriptor,g=(p,a,t,r)=>{for(var e=r>1?void 0:r?E(a,t):a,s=p.length-1,o;s>=0;s--)(o=p[s])&&(e=(r?o(a,t,e):o(e))||e);return r&&e&&N(a,t,e),e};let l=class extends f{render(){return y`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?y`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
              <hr>
              <h3 class="fs-6 text-uppercase">Type</h3>
              <dl class="row row-cols-2 row-cols-lg-3 mt-2 mb-4">
                <div>
                  <dt class="text-uppercase text-brown">
                    NRM Layer
                  </dt>
                  <dd>
                    ${this.nrmLayer||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Uniclass Code
                  </dt>
                  <dd>
                    ${this.uniclassCode||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Age
                  </dt>
                  <dd>
                    ${this.age||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Design Life
                  </dt>
                  <dd>
                    ${this.designLife||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Material Grade
                  </dt>
                  <dd>
                    ${this.materialGrade||"-"}
                  </dd>
                </div>
              </dl>
              <h3 class="fs-6 text-uppercase">Geometry</h3>
              <dl class="row row-cols-2 row-cols-lg-3 mt-2 mb-2">
                <div>
                  <dt class="text-uppercase text-brown">
                    Length
                  </dt>
                  <dd>
                    ${this.length||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Width
                  </dt>
                  <dd>
                    ${this.width||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Height
                  </dt>
                  <dd>
                    ${this.height||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Mass
                  </dt>
                  <dd>
                    ${this.mass||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-brown">
                    Volume
                  </dt>
                  <dd>
                    ${this.volume||"-"}
                  </dd>
                </div>
              </dl>
            </div>
        </div>
        `}};g([i({type:String})],l.prototype,"name",2);g([i({type:String})],l.prototype,"imageUrl",2);g([i({type:String})],l.prototype,"description",2);g([i({type:String})],l.prototype,"nrmLayer",2);g([i({type:String})],l.prototype,"uniclassCode",2);g([i({type:String})],l.prototype,"age",2);g([i({type:String})],l.prototype,"designLife",2);g([i({type:String})],l.prototype,"materialGrade",2);g([i({type:String})],l.prototype,"length",2);g([i({type:String})],l.prototype,"width",2);g([i({type:String})],l.prototype,"height",2);g([i({type:String})],l.prototype,"mass",2);g([i({type:String})],l.prototype,"volume",2);l=g([u("material-card")],l);var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,x=(p,a,t,r)=>{for(var e=r>1?void 0:r?M(a,t):a,s=p.length-1,o;s>=0;s--)(o=p[s])&&(e=(r?o(a,t,e):o(e))||e);return r&&e&&j(a,t,e),e};let h=class extends f{render(){return y`
        <div class="card mb-5">
            <a href="/material-reuse-option/?id=${this.materialReuseOptionId}" class="card-link h-100 d-flex flex-column">
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
        `}};x([i({type:String})],h.prototype,"materialReuseOptionId",2);x([i({type:String})],h.prototype,"name",2);x([i({type:String})],h.prototype,"description",2);x([i({type:String})],h.prototype,"imageUrl",2);h=x([u("material-reuse-option-card")],h);var G=Object.defineProperty,I=Object.getOwnPropertyDescriptor,m=(p,a,t,r)=>{for(var e=r>1?void 0:r?I(a,t):a,s=p.length-1,o;s>=0;s--)(o=p[s])&&(e=(r?o(a,t,e):o(e))||e);return r&&e&&G(a,t,e),e};let c=class extends f{render(){return y`
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
        `}};m([i({type:String})],c.prototype,"imageUrl",2);m([i({type:String})],c.prototype,"description",2);m([i({type:String})],c.prototype,"nrmLayer",2);m([i({type:String})],c.prototype,"uniclassCode",2);m([i({type:String})],c.prototype,"category",2);m([i({type:String})],c.prototype,"expectedLifespan",2);m([i({type:String})],c.prototype,"subCategory",2);m([i({type:String})],c.prototype,"length",2);m([i({type:String})],c.prototype,"width",2);m([i({type:String})],c.prototype,"height",2);m([i({type:String})],c.prototype,"mass",2);m([i({type:String})],c.prototype,"volume",2);c=m([u("component-details-card")],c);var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,$=(p,a,t,r)=>{for(var e=r>1?void 0:r?F(a,t):a,s=p.length-1,o;s>=0;s--)(o=p[s])&&(e=(r?o(a,t,e):o(e))||e);return r&&e&&B(a,t,e),e};let b=class extends f{constructor(){super(...arguments),this.considerations=[]}render(){return y`
        <h3 class="fs-6 text-uppercase">Reuse Considerations</h3>
        ${this.considerations?.map(p=>y`<span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${p}</span>`)}
        `}};$([i({type:Array})],b.prototype,"considerations",2);b=$([u("reuse-considerations-list")],b);var T=Object.defineProperty,A=Object.getOwnPropertyDescriptor,_=(p,a,t,r)=>{for(var e=r>1?void 0:r?A(a,t):a,s=p.length-1,o;s>=0;s--)(o=p[s])&&(e=(r?o(a,t,e):o(e))||e);return r&&e&&T(a,t,e),e};let w=class extends f{constructor(){super(...arguments),this.considerations=[]}render(){return y`
        <div class="card mb-5">
          <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0">Feasibility Considerations</h2>
          </div>
          <div class="card-body d-flex flex-column">     
            <dl class="row row-cols-2 mt-2 mb-4">
              ${this.considerations?.map(p=>y`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase text-primary">
                    ${p.heading}
                  </dt>
                  <dd>
                    ${p.description}
                  </dd>
                </div>
                `)}
            </dl>          
          </div>
        </div>
        `}};_([i({type:Array})],w.prototype,"considerations",2);w=_([u("feasibility-considerations-card")],w);const v=new R;async function H(){const a=new URLSearchParams(window.location.search).get("id");if(!a)return;const t=await v.getComponent(a),r=document.getElementsByTagName("main-heading")[0];r.heading=t.get("component_name");const e=document.createElement("shearing-layer-badge");e.shearingLayerName=t.get("shearing_layer (from component_name)"),r.appendChild(e);const s=document.getElementsByTagName("component-details-card")[0];s.imageUrl="",s.description=t.get("description_full"),s.nrmLayer=t.get("NRM1_layer_materials");const o=t.get("UniClass Ma Materials (from materials)");if(o){const d=await v.getUniclassMaterial(o);s.uniclassCode=d?.get("Code")}const C=t.get("category (from component_name)");if(C){const d=await v.getCategory(C);s.category=d?.get("Name")}s.expectedLifespan=t.get("design_life"),s.expectedLifespan&&(s.expectedLifespan+=" years"),s.subCategory="-",s.length=t.get("length"),s.width=t.get("width"),s.height=t.get("height"),s.mass=t.get("mass"),s.volume=t.get("volume");const S=document.getElementsByTagName("reuse-considerations-list")[0],L=await v.getReuseConsiderations();S.considerations=t.get("reuse_considerations")?.map(d=>L.find(n=>n.id===d)?.get("Name"));const O=document.getElementsByTagName("feasibility-considerations-card")[0];O.considerations=[{heading:"",description:t.get("Feasibility Consideration 1")},{heading:"",description:t.get("Feasibility Consideration 2")},{heading:"",description:t.get("Feasibility Consideration 3")},{heading:"",description:t.get("Feasibility Consideration 4")}];const P=document.getElementById("materials"),D=await v.getMaterials();t.get("materials (from component_materials)")?.map(d=>D.find(n=>n.id===d))?.forEach(async d=>{const n=new l;n.name=d.get("Name"),n.imageUrl="",n.description=d.get("description"),n.nrmLayer=d.get("NRM1_layer_materials"),n.uniclassCode=d.get("UniClass Ma Materials (from materials)"),n.age=d.get("Material Age"),n.designLife=d.get("Design Life"),n.materialGrade=d.get("Material Grade"),n.length=d.get("length"),n.width=d.get("width"),n.height=d.get("height"),n.mass=d.get("mass"),n.volume=d.get("volume"),P.appendChild(n)});const U=document.getElementById("material-reuse-options");(await v.getCaseStudies(t.get("component_name")))?.forEach(async d=>{const n=new h;n.materialReuseOptionId=d.id,n.name=d.get("title"),n.imageUrl=d.get("image")?.at(0)?.url,n.description=d.get("description"),U.appendChild(n)})}await H();
