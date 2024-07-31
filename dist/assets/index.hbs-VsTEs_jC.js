import{n as e,t as x,G as f,x as u,D as O}from"./database-DsAmLPVN.js";import"./shearing-layer-badge-CaQ_mhwi.js";import"./feasibility-considerations-card-BPKcnTbu.js";var U=Object.defineProperty,P=Object.getOwnPropertyDescriptor,c=(m,r,t,n)=>{for(var s=n>1?void 0:n?P(r,t):r,i=m.length-1,p;i>=0;i--)(p=m[i])&&(s=(n?p(r,t,s):p(s))||s);return n&&s&&U(r,t,s),s};let o=class extends f{render(){return u`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?u`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
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
        `}};c([e({type:String})],o.prototype,"name",2);c([e({type:String})],o.prototype,"imageUrl",2);c([e({type:String})],o.prototype,"description",2);c([e({type:String})],o.prototype,"nrmLayer",2);c([e({type:String})],o.prototype,"uniclassCode",2);c([e({type:String})],o.prototype,"age",2);c([e({type:String})],o.prototype,"designLife",2);c([e({type:String})],o.prototype,"materialGrade",2);c([e({type:String})],o.prototype,"length",2);c([e({type:String})],o.prototype,"width",2);c([e({type:String})],o.prototype,"height",2);c([e({type:String})],o.prototype,"mass",2);c([e({type:String})],o.prototype,"volume",2);o=c([x("material-card")],o);var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,v=(m,r,t,n)=>{for(var s=n>1?void 0:n?I(r,t):r,i=m.length-1,p;i>=0;i--)(p=m[i])&&(s=(n?p(r,t,s):p(s))||s);return n&&s&&D(r,t,s),s};let y=class extends f{render(){return u`
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
        `}};v([e({type:String})],y.prototype,"materialReuseOptionId",2);v([e({type:String})],y.prototype,"name",2);v([e({type:String})],y.prototype,"description",2);v([e({type:String})],y.prototype,"imageUrl",2);v([e({type:String})],y.prototype,"componentId",2);y=v([x("material-reuse-option-card")],y);var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,g=(m,r,t,n)=>{for(var s=n>1?void 0:n?R(r,t):r,i=m.length-1,p;i>=0;i--)(p=m[i])&&(s=(n?p(r,t,s):p(s))||s);return n&&s&&N(r,t,s),s};let l=class extends f{render(){return u`
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
        `}};g([e({type:String})],l.prototype,"imageUrl",2);g([e({type:String})],l.prototype,"description",2);g([e({type:String})],l.prototype,"nrmLayer",2);g([e({type:String})],l.prototype,"uniclassCode",2);g([e({type:String})],l.prototype,"category",2);g([e({type:String})],l.prototype,"expectedLifespan",2);g([e({type:String})],l.prototype,"subCategory",2);g([e({type:String})],l.prototype,"length",2);g([e({type:String})],l.prototype,"width",2);g([e({type:String})],l.prototype,"height",2);g([e({type:String})],l.prototype,"mass",2);g([e({type:String})],l.prototype,"volume",2);l=g([x("component-details-card")],l);const h=new O;async function E(){const r=new URLSearchParams(window.location.search).get("id");if(!r)return;const t=await h.getComponent(r),n=document.getElementsByTagName("main-heading")[0];n.heading=t.get("component_name");const s=document.createElement("shearing-layer-badge");s.shearingLayerName=t.get("shearing_layer"),n.appendChild(s);const i=document.getElementsByTagName("component-details-card")[0];i.imageUrl="",i.description=t.get("description_full"),i.nrmLayer=t.get("NRM1_layer_materials");const p=t.get("UniClass Ma Materials (from materials)");if(p){const a=await h.getUniclassMaterial(p);i.uniclassCode=a?.get("Code")}const b=t.get("category (from component_name)");if(b){const a=await h.getCategory(b);i.category=a?.get("Name")}i.expectedLifespan=t.get("design_life"),i.expectedLifespan&&(i.expectedLifespan+=" years"),i.subCategory="-",i.length=t.get("length"),i.width=t.get("width"),i.height=t.get("height"),i.mass=t.get("mass"),i.volume=t.get("volume");const w=document.getElementsByTagName("tags-list")[0],C=await h.getReuseConsiderations();w.tags=t.get("reuse_considerations")?.map(a=>C.find(d=>d.id===a)?.get("Name"));const $=document.getElementsByTagName("feasibility-considerations-card")[0];$.considerations=[{heading:"",description:t.get("Feasibility Consideration 1")},{heading:"",description:t.get("Feasibility Consideration 2")},{heading:"",description:t.get("Feasibility Consideration 3")},{heading:"",description:t.get("Feasibility Consideration 4")}];const S=document.getElementById("materials"),_=await h.getMaterials();t.get("materials (from component_materials)")?.map(a=>_.find(d=>d.id===a))?.forEach(async a=>{const d=new o;d.name=a.get("Name"),d.imageUrl="",d.description=a.get("description"),d.nrmLayer=a.get("NRM1_layer_materials"),d.uniclassCode=a.get("UniClass Ma Materials (from materials)"),d.age=a.get("Material Age"),d.designLife=a.get("Design Life"),d.materialGrade=a.get("Material Grade"),d.length=a.get("length"),d.width=a.get("width"),d.height=a.get("height"),d.mass=a.get("mass"),d.volume=a.get("volume"),S.appendChild(d)});const L=document.getElementById("material-reuse-options");(await h.getCaseStudies(t.get("component_name")))?.forEach(async a=>{const d=new y;d.materialReuseOptionId=a.id,d.name=a.get("title"),d.imageUrl=a.get("case_study_image")?.at(0)?.url,d.description=a.get("description"),d.componentId=t.id,L.appendChild(d)})}await E();
