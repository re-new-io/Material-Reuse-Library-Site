import{n,t as f,G as x,x as h,D as E}from"./database-BFQwuwAc.js";import"./feasibility-considerations-card-Bv6ss528.js";var N=Object.defineProperty,B=Object.getOwnPropertyDescriptor,_=(l,o,e,r)=>{for(var t=r>1?void 0:r?B(o,e):o,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(r?d(o,e,t):d(t))||t);return r&&t&&N(o,e,t),t};let v=class extends x{render(){return h`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?h`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};_([n({type:String})],v.prototype,"name",2);_([n({type:String})],v.prototype,"imageUrl",2);_([n({type:String})],v.prototype,"description",2);v=_([f("reuse-option-card")],v);var M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,b=(l,o,e,r)=>{for(var t=r>1?void 0:r?T(o,e):o,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(r?d(o,e,t):d(t))||t);return r&&t&&M(o,e,t),t};let u=class extends x{render(){return h`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?h`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
            </div>
        </div>
        `}};b([n({type:String})],u.prototype,"name",2);b([n({type:String})],u.prototype,"imageUrl",2);b([n({type:String})],u.prototype,"description",2);u=b([f("material-card")],u);var R=Object.defineProperty,F=Object.getOwnPropertyDescriptor,y=(l,o,e,r)=>{for(var t=r>1?void 0:r?F(o,e):o,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(r?d(o,e,t):d(t))||t);return r&&t&&R(o,e,t),t};let m=class extends x{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return h`
        <div class="card mb-5">
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
        `}};y([n({type:String})],m.prototype,"projectId",2);y([n({type:String})],m.prototype,"name",2);y([n({type:String})],m.prototype,"description",2);y([n({type:String})],m.prototype,"imageUrl",2);y([n({type:String})],m.prototype,"componentId",2);y([n({type:Boolean})],m.prototype,"includeUnapprovedData",2);m=y([f("project-example-card")],m);var G=Object.defineProperty,H=Object.getOwnPropertyDescriptor,p=(l,o,e,r)=>{for(var t=r>1?void 0:r?H(o,e):o,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(r?d(o,e,t):d(t))||t);return r&&t&&G(o,e,t),t};let c=class extends x{render(){return h`
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
                  Discipline/Layer
                </dt>
                <dd>
                  ${this.disciplineLayer||"-"}
                </dd>
              </div>
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
                  Category
                </dt>
                <dd>
                  ${this.category||"-"}
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
                  Component
                </dt>
                <dd>
                  ${this.component||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Design Life
                </dt>
                <dd>
                  ${this.designLife||"-"}
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
        `}};p([n({type:String})],c.prototype,"imageUrl",2);p([n({type:String})],c.prototype,"description",2);p([n({type:String})],c.prototype,"disciplineLayer",2);p([n({type:String})],c.prototype,"nrmLayer",2);p([n({type:String})],c.prototype,"category",2);p([n({type:String})],c.prototype,"uniclassCode",2);p([n({type:String})],c.prototype,"component",2);p([n({type:String})],c.prototype,"designLife",2);p([n({type:String})],c.prototype,"length",2);p([n({type:String})],c.prototype,"width",2);p([n({type:String})],c.prototype,"height",2);p([n({type:String})],c.prototype,"mass",2);p([n({type:String})],c.prototype,"volume",2);c=p([f("component-details-card")],c);const g=new E;async function V(){const o=new URLSearchParams(window.location.search).get("id");if(!o)return;const e=await g.getComponent(o),r=document.getElementsByTagName("main-heading")[0];r.heading=e.get("component_name"),r.includeUnapprovedData=g.includeUnapprovedData;const t=document.createElement("icon-badge");t.text=e.get("shearing_layer"),t.icon="house",r.appendChild(t);const i=document.getElementsByTagName("component-details-card")[0];i.imageUrl="",i.description=e.get("description_full"),i.nrmLayer=e.get("NRM1_layer")?.join(", ");const d=e.get("uniclass_ma_materials");if(d?.length>0){const s=[];for(const a of d){const I=await g.getUniclassMaterial(a);s.push(I?.get("Code"))}i.uniclassCode=s.filter(a=>a).join(", ")}const C=e.get("category");if(C){const s=await g.getCategory(C);i.category=s?.get("Name")}i.designLife=e.get("design_life"),i.designLife&&(i.designLife+=" years");const w=e.get("discpline_layer");if(w){const s=await g.getDisciplineLayer(w);i.disciplineLayer=s?.get("Name")}const $=e.get("component_type");if($){const s=await g.getComponentType($);i.component=s?.get("Name")}i.length=e.get("length"),i.width=e.get("width"),i.height=e.get("height/thickness"),i.mass=e.get("mass"),i.volume=e.get("volume");const S=document.getElementsByTagName("tags-list")[0];S.tags=e.get("reuse_considerations");const U=document.getElementsByTagName("feasibility-considerations-card")[0];U.considerations=[{heading:"Feasibility Consideration 1",description:e.get("key_consideration_1")},{heading:"Feasibility Consideration 2",description:e.get("key_consideration_2")},{heading:"Feasibility Consideration 3",description:e.get("key_consideration_3")},{heading:"Feasibility Consideration 4",description:e.get("key_consideration_4")}];const D=document.getElementById("reuse-options"),L=await g.getReuseOptions();e.get("reuse_options")?.map(s=>L.find(a=>a.id===s))?.forEach(s=>{const a=new v;a.name=s.get("Name"),a.imageUrl=s.get("reuse_option_image")?.at(0)?.url,a.description=s.get("reuse_option_description"),D.appendChild(a)});const O=document.getElementById("materials"),P=await g.getMaterials();e.get("materials")?.map(s=>P.find(a=>a.id===s))?.forEach(s=>{const a=new u;a.name=s?.get("component_name"),a.imageUrl=s?.get("Image")?.at(0)?.url,a.description=s?.get("description_short"),O.appendChild(a)});const j=document.getElementById("project-examples");(await g.getProjectExamples(e.get("component_name")))?.forEach(s=>{const a=new m;a.projectId=s.id,a.name=s.get("title"),a.imageUrl=s.get("project_example_image")?.at(0)?.url,a.description=s.get("description_short"),a.componentId=e.id,a.includeUnapprovedData=g.includeUnapprovedData,j.appendChild(a)})}await V();
