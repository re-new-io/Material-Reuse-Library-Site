import{n as a,t as x,G as b,x as v,D as I}from"./database-XkeEppVX.js";import"./feasibility-considerations-card-BgLCPFgq.js";var N=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(g,d,e,r)=>{for(var t=r>1?void 0:r?E(d,e):d,i=g.length-1,n;i>=0;i--)(n=g[i])&&(t=(r?n(d,e,t):n(t))||t);return r&&t&&N(d,e,t),t};let _=class extends b{render(){return v`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?v`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};C([a({type:String})],_.prototype,"name",2);C([a({type:String})],_.prototype,"imageUrl",2);C([a({type:String})],_.prototype,"description",2);_=C([x("reuse-option-card")],_);var B=Object.defineProperty,M=Object.getOwnPropertyDescriptor,$=(g,d,e,r)=>{for(var t=r>1?void 0:r?M(d,e):d,i=g.length-1,n;i>=0;i--)(n=g[i])&&(t=(r?n(d,e,t):n(t))||t);return r&&t&&B(d,e,t),t};let f=class extends b{render(){return v`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?v`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
            </div>
        </div>
        `}};$([a({type:String})],f.prototype,"name",2);$([a({type:String})],f.prototype,"imageUrl",2);$([a({type:String})],f.prototype,"description",2);f=$([x("material-card")],f);var T=Object.defineProperty,R=Object.getOwnPropertyDescriptor,u=(g,d,e,r)=>{for(var t=r>1?void 0:r?R(d,e):d,i=g.length-1,n;i>=0;i--)(n=g[i])&&(t=(r?n(d,e,t):n(t))||t);return r&&t&&T(d,e,t),t};let y=class extends b{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return v`
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
        `}};u([a({type:String})],y.prototype,"projectId",2);u([a({type:String})],y.prototype,"name",2);u([a({type:String})],y.prototype,"description",2);u([a({type:String})],y.prototype,"imageUrl",2);u([a({type:String})],y.prototype,"componentId",2);u([a({type:Boolean})],y.prototype,"includeUnapprovedData",2);y=u([x("project-example-card")],y);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,l=(g,d,e,r)=>{for(var t=r>1?void 0:r?G(d,e):d,i=g.length-1,n;i>=0;i--)(n=g[i])&&(t=(r?n(d,e,t):n(t))||t);return r&&t&&F(d,e,t),t};let p=class extends b{render(){return v`
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
        `}};l([a({type:String})],p.prototype,"imageUrl",2);l([a({type:String})],p.prototype,"description",2);l([a({type:String})],p.prototype,"disciplineLayer",2);l([a({type:String})],p.prototype,"nrmLayer",2);l([a({type:String})],p.prototype,"category",2);l([a({type:String})],p.prototype,"uniclassCode",2);l([a({type:String})],p.prototype,"component",2);l([a({type:String})],p.prototype,"designLife",2);l([a({type:String})],p.prototype,"length",2);l([a({type:String})],p.prototype,"width",2);l([a({type:String})],p.prototype,"height",2);l([a({type:String})],p.prototype,"mass",2);l([a({type:String})],p.prototype,"volume",2);p=l([x("component-details-card")],p);const m=new I;function H(){const d=new URLSearchParams(window.location.search).get("id");d&&m.getComponent(d,["component_name","shearing_layer","description_full","NRM_1_layer","uniclass_ma_materials","category","design_life","discpline_layer","component_type","length","width","height/thickness","mass","volume","reuse_considerations","key_consideration_1","key_consideration_2","key_consideration_3","key_consideration_4","reuse_options","materials"]).then(e=>{const r=document.getElementsByTagName("main-heading")[0];r.heading=e.get("component_name"),r.includeUnapprovedData=m.includeUnapprovedData;const t=document.createElement("icon-badge");t.text=e.get("shearing_layer"),t.icon="house",r.appendChild(t);const i=document.getElementsByTagName("component-details-card")[0];i.imageUrl="",i.description=e.get("description_full"),i.nrmLayer=e.get("NRM_1_layer")?.join(", ");const n=e.get("uniclass_ma_materials");if(n?.length>0){const c=[],h=n.map(s=>m.getUniclassMaterial(s,["Code"]));Promise.all(h).then(s=>{s.forEach(o=>{c.push(o?.get("Code"))})}),i.uniclassCode=c.filter(s=>s).join(", ")}const w=e.get("category");w&&m.getCategory(w,["Name"]).then(c=>{i.category=c?.get("Name")}),i.designLife=e.get("design_life"),i.designLife&&(i.designLife+=" years");const S=e.get("discpline_layer");S&&m.getDisciplineLayer(S,["Name"]).then(c=>{i.disciplineLayer=c?.get("Name")});const U=e.get("component_type");U&&m.getComponentType(U,["Name"]).then(c=>{i.component=c?.get("Name")}),i.length=e.get("length"),i.width=e.get("width"),i.height=e.get("height/thickness"),i.mass=e.get("mass"),i.volume=e.get("volume");const D=document.getElementsByTagName("tags-list")[0];D.tags=e.get("reuse_considerations");const P=document.getElementsByTagName("feasibility-considerations-card")[0];P.considerations=[{heading:"Feasibility Consideration 1",description:e.get("key_consideration_1")},{heading:"Feasibility Consideration 2",description:e.get("key_consideration_2")},{heading:"Feasibility Consideration 3",description:e.get("key_consideration_3")},{heading:"Feasibility Consideration 4",description:e.get("key_consideration_4")}];const L=document.getElementById("reuse-options");m.getReuseOptions(["Name","reuse_option_image","reuse_option_description"]).then(c=>{e.get("reuse_options")?.map(s=>c.find(o=>o.id===s))?.forEach(s=>{const o=new _;o.name=s.get("Name"),o.imageUrl=s.get("reuse_option_image")?.at(0)?.url,o.description=s.get("reuse_option_description"),L.appendChild(o)})});const O=document.getElementById("materials");m.getMaterials(["component_name","Image","description_short"]).then(c=>{e.get("materials")?.map(s=>c.find(o=>o.id===s))?.forEach(s=>{const o=new f;o.name=s?.get("component_name"),o.imageUrl=s?.get("Image")?.at(0)?.url,o.description=s?.get("description_short"),O.appendChild(o)})});const j=document.getElementById("project-examples");m.getProjectExamples(e.get("component_name"),["title","project_example_image","description_short"]).then(c=>{c?.forEach(h=>{const s=new y;s.projectId=h.id,s.name=h.get("title"),s.imageUrl=h.get("project_example_image")?.at(0)?.url,s.description=h.get("description_short"),s.componentId=e.id,s.includeUnapprovedData=m.includeUnapprovedData,j.appendChild(s)})})})}H();
