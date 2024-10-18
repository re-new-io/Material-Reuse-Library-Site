import{n,t as f,G as x,x as y,D as N}from"./database-Cbyo7DPh.js";import"./feasibility-considerations-card-D7XolT6u.js";var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,_=(l,r,e,o)=>{for(var t=o>1?void 0:o?B(r,e):r,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(o?d(r,e,t):d(t))||t);return o&&t&&T(r,e,t),t};let h=class extends x{render(){return y`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?y`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};_([n({type:String})],h.prototype,"name",2);_([n({type:String})],h.prototype,"imageUrl",2);_([n({type:String})],h.prototype,"description",2);h=_([f("reuse-option-card")],h);var M=Object.defineProperty,R=Object.getOwnPropertyDescriptor,b=(l,r,e,o)=>{for(var t=o>1?void 0:o?R(r,e):r,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(o?d(r,e,t):d(t))||t);return o&&t&&M(r,e,t),t};let v=class extends x{render(){return y`
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
        `}};b([n({type:String})],v.prototype,"name",2);b([n({type:String})],v.prototype,"imageUrl",2);b([n({type:String})],v.prototype,"description",2);v=b([f("material-card")],v);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,u=(l,r,e,o)=>{for(var t=o>1?void 0:o?G(r,e):r,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(o?d(r,e,t):d(t))||t);return o&&t&&F(r,e,t),t};let m=class extends x{render(){return y`
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
        `}};u([n({type:String})],m.prototype,"projectId",2);u([n({type:String})],m.prototype,"name",2);u([n({type:String})],m.prototype,"description",2);u([n({type:String})],m.prototype,"imageUrl",2);u([n({type:String})],m.prototype,"componentId",2);m=u([f("project-example-card")],m);var H=Object.defineProperty,V=Object.getOwnPropertyDescriptor,p=(l,r,e,o)=>{for(var t=o>1?void 0:o?V(r,e):r,i=l.length-1,d;i>=0;i--)(d=l[i])&&(t=(o?d(r,e,t):d(t))||t);return o&&t&&H(r,e,t),t};let c=class extends x{render(){return y`
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
        `}};p([n({type:String})],c.prototype,"imageUrl",2);p([n({type:String})],c.prototype,"description",2);p([n({type:String})],c.prototype,"disciplineLayer",2);p([n({type:String})],c.prototype,"nrmLayer",2);p([n({type:String})],c.prototype,"category",2);p([n({type:String})],c.prototype,"uniclassCode",2);p([n({type:String})],c.prototype,"component",2);p([n({type:String})],c.prototype,"designLife",2);p([n({type:String})],c.prototype,"length",2);p([n({type:String})],c.prototype,"width",2);p([n({type:String})],c.prototype,"height",2);p([n({type:String})],c.prototype,"mass",2);p([n({type:String})],c.prototype,"volume",2);c=p([f("component-details-card")],c);const g=new N;async function W(){const r=new URLSearchParams(window.location.search).get("id");if(!r)return;const e=await g.getComponent(r),o=document.getElementsByTagName("main-heading")[0];o.heading=e.get("component_name");const t=document.createElement("icon-badge");t.text=e.get("shearing_layer"),t.icon="house",o.appendChild(t);const i=document.getElementsByTagName("component-details-card")[0];i.imageUrl="",i.description=e.get("description_full"),i.nrmLayer=e.get("NRM1_layer")?.join(", ");const d=e.get("uniclass_ma_materials");if(d?.length>0){const s=[];for(const a of d){const E=await g.getUniclassMaterial(a);s.push(E?.get("Code"))}i.uniclassCode=s.filter(a=>a).join(", ")}const w=e.get("category");if(w){const s=await g.getCategory(w);i.category=s?.get("Name")}i.designLife=e.get("design_life"),i.designLife&&(i.designLife+=" years");const $=e.get("discpline_layer");if($){const s=await g.getDisciplineLayer($);i.disciplineLayer=s?.get("Name")}const S=e.get("component_type");if(S){const s=await g.getComponentType(S);i.component=s?.get("Name")}i.length=e.get("length"),i.width=e.get("width"),i.height=e.get("height/thickness"),i.mass=e.get("mass"),i.volume=e.get("volume");const O=document.getElementsByTagName("tags-list")[0];O.tags=e.get("reuse_considerations");const P=document.getElementsByTagName("feasibility-considerations-card")[0];P.considerations=[{heading:"Feasibility Consideration 1",description:e.get("key_consideration_1")},{heading:"Feasibility Consideration 2",description:e.get("key_consideration_2")},{heading:"Feasibility Consideration 3",description:e.get("key_consideration_3")},{heading:"Feasibility Consideration 4",description:e.get("key_consideration_4")}];const j=document.getElementById("reuse-options"),I=await g.getReuseOptions();e.get("reuse_options")?.map(s=>I.find(a=>a.id===s))?.forEach(s=>{const a=new h;a.name=s.get("Name"),a.imageUrl=s.get("reuse_option_image")?.at(0)?.url,a.description=s.get("reuse_option_description"),j.appendChild(a)});const U=document.getElementById("materials"),L=await g.getMaterials();let C=e.get("materials (from component_materials)")?.map(s=>L.find(a=>a.id===s));C||(C=e.get("materials")?.map(s=>L.find(a=>a.id===s))),C?.forEach(s=>{const a=new v;a.name=s.get("component_name"),a.imageUrl=s.get("Image")?.at(0)?.url,a.description=s.get("description_short"),U.appendChild(a)});const D=document.getElementById("project-examples");(await g.getProjectExamples(e.get("component_name")))?.forEach(s=>{const a=new m;a.projectId=s.id,a.name=s.get("title"),a.imageUrl=s.get("project_example_image")?.at(0)?.url,a.description=s.get("description_short"),a.componentId=e.id,D.appendChild(a)})}await W();
