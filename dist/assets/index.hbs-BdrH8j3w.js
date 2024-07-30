import{n as i,t as u,G as f,x as y}from"./main-YTSNKXdW.js";import{D as N}from"./database-5WQaj6rU.js";var E=Object.defineProperty,j=Object.getOwnPropertyDescriptor,g=(p,a,n,e)=>{for(var t=e>1?void 0:e?j(a,n):a,d=p.length-1,s;d>=0;d--)(s=p[d])&&(t=(e?s(a,n,t):s(t))||t);return e&&t&&E(a,n,t),t};let l=class extends f{render(){return y`
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
        `}};g([i({type:String})],l.prototype,"name",2);g([i({type:String})],l.prototype,"imageUrl",2);g([i({type:String})],l.prototype,"description",2);g([i({type:String})],l.prototype,"nrmLayer",2);g([i({type:String})],l.prototype,"uniclassCode",2);g([i({type:String})],l.prototype,"age",2);g([i({type:String})],l.prototype,"designLife",2);g([i({type:String})],l.prototype,"materialGrade",2);g([i({type:String})],l.prototype,"length",2);g([i({type:String})],l.prototype,"width",2);g([i({type:String})],l.prototype,"height",2);g([i({type:String})],l.prototype,"mass",2);g([i({type:String})],l.prototype,"volume",2);l=g([u("material-card")],l);var G=Object.defineProperty,T=Object.getOwnPropertyDescriptor,x=(p,a,n,e)=>{for(var t=e>1?void 0:e?T(a,n):a,d=p.length-1,s;d>=0;d--)(s=p[d])&&(t=(e?s(a,n,t):s(t))||t);return e&&t&&G(a,n,t),t};let h=class extends f{render(){return y`
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
        `}};x([i({type:String})],h.prototype,"materialReuseOptionId",2);x([i({type:String})],h.prototype,"name",2);x([i({type:String})],h.prototype,"description",2);x([i({type:String})],h.prototype,"imageUrl",2);h=x([u("material-reuse-option-card")],h);var B=Object.defineProperty,I=Object.getOwnPropertyDescriptor,m=(p,a,n,e)=>{for(var t=e>1?void 0:e?I(a,n):a,d=p.length-1,s;d>=0;d--)(s=p[d])&&(t=(e?s(a,n,t):s(t))||t);return e&&t&&B(a,n,t),t};let c=class extends f{render(){return y`
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
        `}};m([i({type:String})],c.prototype,"imageUrl",2);m([i({type:String})],c.prototype,"description",2);m([i({type:String})],c.prototype,"nrmLayer",2);m([i({type:String})],c.prototype,"uniclassCode",2);m([i({type:String})],c.prototype,"category",2);m([i({type:String})],c.prototype,"expectedLifespan",2);m([i({type:String})],c.prototype,"subCategory",2);m([i({type:String})],c.prototype,"length",2);m([i({type:String})],c.prototype,"width",2);m([i({type:String})],c.prototype,"height",2);m([i({type:String})],c.prototype,"mass",2);m([i({type:String})],c.prototype,"volume",2);c=m([u("component-details-card")],c);var M=Object.defineProperty,F=Object.getOwnPropertyDescriptor,C=(p,a,n,e)=>{for(var t=e>1?void 0:e?F(a,n):a,d=p.length-1,s;d>=0;d--)(s=p[d])&&(t=(e?s(a,n,t):s(t))||t);return e&&t&&M(a,n,t),t};let b=class extends f{constructor(){super(...arguments),this.considerations=[]}render(){return y`
        <h3 class="fs-6 text-uppercase">Reuse Considerations</h3>
        ${this.considerations.map(p=>y`<span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${p}</span>`)}
        `}};C([i({type:Array})],b.prototype,"considerations",2);b=C([u("reuse-considerations-list")],b);var A=Object.defineProperty,H=Object.getOwnPropertyDescriptor,$=(p,a,n,e)=>{for(var t=e>1?void 0:e?H(a,n):a,d=p.length-1,s;d>=0;d--)(s=p[d])&&(t=(e?s(a,n,t):s(t))||t);return e&&t&&A(a,n,t),t};let w=class extends f{constructor(){super(...arguments),this.considerations=[]}render(){return y`
        <div class="card mb-5">
          <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0">Feasibility Considerations</h2>
          </div>
          <div class="card-body d-flex flex-column">     
            <dl class="row row-cols-2 mt-2 mb-4">
              ${this.considerations.map(p=>y`
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
        `}};$([i({type:Array})],w.prototype,"considerations",2);w=$([u("feasibility-considerations-card")],w);const v=new N;async function V(){const a=new URLSearchParams(window.location.search).get("id");if(!a)return;const n=await v.getComponentTile(a),e=await v.getComponentPage(n.get("component_name")),t=document.getElementsByTagName("main-heading")[0];t.heading=e.get("component_name");const d=document.createElement("shearing-layer-badge");d.shearingLayerName=e.get("shearing_layer (from component_name)"),t.appendChild(d);const s=document.getElementsByTagName("component-details-card")[0];s.imageUrl="",s.description=e.get("description_full"),s.nrmLayer=e.get("NRM1_layer_materials"),s.uniclassCode=e.get("UniClass Ma Materials (from materials)");const _=e.get("category (from component_name)"),S=await v.getCategory(_);s.category=S?.get("Name"),s.expectedLifespan=e.get("design_life"),s.expectedLifespan&&(s.expectedLifespan+=" years"),s.subCategory="-",s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height"),s.mass=e.get("mass"),s.volume=e.get("volume");const L=document.getElementsByTagName("reuse-considerations-list")[0],O=await v.getReuseConsiderations();L.considerations=e.get("reuse_considerations").map(o=>O.find(r=>r.id===o)?.get("Name"));const P=document.getElementsByTagName("feasibility-considerations-card")[0];P.considerations=[{heading:"",description:e.get("Feasibility Consideration 1")},{heading:"",description:e.get("Feasibility Consideration 2")},{heading:"",description:e.get("Feasibility Consideration 3")},{heading:"",description:e.get("Feasibility Consideration 4")}];const D=document.getElementById("materials"),U=await v.getMaterials();e.get("materials (from component_materials)").map(o=>U.find(r=>r.id===o)).forEach(async o=>{const r=new l;r.name=o.get("Name"),r.imageUrl="",r.description=o.get("description"),r.nrmLayer=o.get("NRM1_layer_materials"),r.uniclassCode=o.get("UniClass Ma Materials (from materials)"),r.age=o.get("Material Age"),r.designLife=o.get("Design Life"),r.materialGrade=o.get("Material Grade"),r.length=o.get("length"),r.width=o.get("width"),r.height=o.get("height"),r.mass=o.get("mass"),r.volume=o.get("volume"),D.appendChild(r)});const R=document.getElementById("material-reuse-options");(await v.getCaseStudies(e.get("component_name"))).forEach(async o=>{const r=new h;r.materialReuseOptionId=o.id,r.name=o.get("title"),r.imageUrl=o.get("image")?.at(0)?.url,r.description=o.get("description"),R.appendChild(r)})}await V();
