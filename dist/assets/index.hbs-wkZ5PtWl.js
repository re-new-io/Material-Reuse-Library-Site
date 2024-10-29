import{n as o,t as _,G as f,x as g,o as U,D as Y}from"./icon-badge-Dqw5MDS8.js";import"./feasibility-considerations-card-C6NS6L7q.js";var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,w=(r,i,e,a)=>{for(var t=a>1?void 0:a?k(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&Z(i,e,t),t};let x=class extends f{render(){return g`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?g`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};w([o({type:String})],x.prototype,"name",2);w([o({type:String})],x.prototype,"imageUrl",2);w([o({type:String})],x.prototype,"description",2);x=w([_("reuse-option-card")],x);var M=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,S=(r,i,e,a)=>{for(var t=a>1?void 0:a?ee(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&M(i,e,t),t};let C=class extends f{render(){return g`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?g`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
            </div>
        </div>
        `}};S([o({type:String})],C.prototype,"name",2);S([o({type:String})],C.prototype,"imageUrl",2);S([o({type:String})],C.prototype,"description",2);C=S([_("component-variety-type-card")],C);var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,b=(r,i,e,a)=>{for(var t=a>1?void 0:a?se(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&te(i,e,t),t};let h=class extends f{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return g`
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
        `}};b([o({type:String})],h.prototype,"projectId",2);b([o({type:String})],h.prototype,"name",2);b([o({type:String})],h.prototype,"description",2);b([o({type:String})],h.prototype,"imageUrl",2);b([o({type:String})],h.prototype,"componentId",2);b([o({type:Boolean})],h.prototype,"includeUnapprovedData",2);h=b([_("project-example-card")],h);var ie=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,m=(r,i,e,a)=>{for(var t=a>1?void 0:a?ae(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&ie(i,e,t),t};let p=class extends f{constructor(){super(...arguments),this.isComponent=!0,this.uniclassCodes=[]}render(){return g`
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
                  Design Life <info-tooltip name="design_life"></info-tooltip>
                </dt>
                <dd>
                  ${this.designLife||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Uniclass Code
                </dt>
                <dd>
                  ${this.uniclassCodes?U(this.uniclassCodes.join("<br />")):"-"}
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
            </dl>
            <h3 class="fs-6 text-uppercase">Geometry <info-tooltip name="geometry_component/material"></info-tooltip></h3>
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
              ${this.isComponent?"":g`
                <div>
                  <dt class="text-uppercase text-navy">
                    Density
                  </dt>
                  <dd>
                    ${this.density||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="text-uppercase text-navy">
                    Material Strength
                  </dt>
                  <dd>
                    ${this.materialStrength||"-"}
                  </dd>
                </div>
                `}
            </dl>
            <h3 class="fs-6 text-uppercase">Materials <info-tooltip name="materials"></info-tooltip></h3>
            <tags-list name="Materials"></tags-list>
          </div>
        </div>
        `}updated(){this._initMaterialsTagsLists()}async _initMaterialsTagsLists(){if(await this.updateComplete,this.materials){const r=this.shadowRoot?.querySelector('tags-list[name="Materials"]');r.tags=this.materials}}};m([o({type:Boolean})],p.prototype,"isComponent",2);m([o({type:String})],p.prototype,"imageUrl",2);m([o({type:String})],p.prototype,"description",2);m([o({type:String})],p.prototype,"disciplineLayer",2);m([o({type:String})],p.prototype,"nrmLayer",2);m([o({type:Array})],p.prototype,"uniclassCodes",2);m([o({type:String})],p.prototype,"designLife",2);m([o({type:String})],p.prototype,"length",2);m([o({type:String})],p.prototype,"width",2);m([o({type:String})],p.prototype,"height",2);m([o({type:String})],p.prototype,"mass",2);m([o({type:String})],p.prototype,"volume",2);m([o({type:String})],p.prototype,"density",2);m([o({type:String})],p.prototype,"materialStrength",2);m([o({type:Array})],p.prototype,"materials",2);p=m([_("component-material-details-card")],p);var re=Object.defineProperty,de=Object.getOwnPropertyDescriptor,E=(r,i,e,a)=>{for(var t=a>1?void 0:a?de(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&re(i,e,t),t};let P=class extends f{constructor(){super(...arguments),this.items=[]}render(){const r=this.items?.filter(i=>i);return g`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-5 m-0 d-flex"><span class="pe-1">Cost and Availability</span><info-tooltip class="ms-auto" name="cost_availability" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            ${r?.length>0?g`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${r?.map(i=>g`
                <li class="mb-2">
                    ${U(i)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};E([o({type:String})],P.prototype,"description",2);E([o({type:Array})],P.prototype,"items",2);P=E([_("cost-availability-card")],P);var ne=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,H=(r,i,e,a)=>{for(var t=a>1?void 0:a?oe(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&ne(i,e,t),t};let D=class extends f{render(){return g`
        <div class="card mb-5">
            <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0 d-flex"><span class="pe-1">Environmental Impact</span><info-tooltip class="ms-auto" name="environmental_impact"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            </div>
        </div>
        `}};H([o({type:String})],D.prototype,"description",2);D=H([_("environmental-impact-card")],D);var ce=Object.defineProperty,le=Object.getOwnPropertyDescriptor,q=(r,i,e,a)=>{for(var t=a>1?void 0:a?le(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&ce(i,e,t),t};let L=class extends f{constructor(){super(...arguments),this.items=[]}render(){return g`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-5 m-0 d-flex"><span class="pe-1">Reclamation Process</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mt-2 mb-4">
              ${this.items?.filter(r=>r.description?.length>0).map(r=>g`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase text-navy">
                    ${r.heading}
                  </dt>
                  <dd>
                    ${r.description}
                  </dd>
                </div>
                `)}
            </dl>
            </div>
        </div>
        `}};q([o({type:Array})],L.prototype,"items",2);L=q([_("reclamation-process-card")],L);var pe=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,F=(r,i,e,a)=>{for(var t=a>1?void 0:a?ge(i,e):i,d=r.length-1,s;d>=0;d--)(s=r[d])&&(t=(a?s(i,e,t):s(t))||t);return a&&t&&pe(i,e,t),t};let j=class extends f{constructor(){super(...arguments),this.items=[]}render(){const r=this.items?.filter(i=>i);return g`
        <div class="card mb-5">
            <div class="card-header py-3 bg-secondary text-bg-dark">
            <h2 class="fs-5 m-0">Key Features & Sustainability</h2>
            </div>
            <div class="card-body d-flex flex-column">
            ${r?.length>0?g`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${r?.map(i=>g`
                <li class="mb-2">
                    ${U(i)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};F([o({type:Array})],j.prototype,"items",2);j=F([_("features-sustainability-card")],j);const y=new Y;function me(){const i=new URLSearchParams(window.location.search).get("id");i&&y.getComponent(i).then(e=>{const a=e.get("component_or_material")==="Component",t=document.getElementsByTagName("main-heading")[0];t.heading=e.get("component_name"),t.includeUnapprovedData=y.includeUnapprovedData;const d=document.createElement("icon-badge");d.text=a?"Component":"Material",d.icon="",d.iconClass="badge-icon--blue",d.classList.add("me-2"),t.appendChild(d);const s=document.getElementsByTagName("component-material-details-card")[0];s.isComponent=a,s.imageUrl=e.get("Image")?.at(0)?.url,s.description=e.get("description_full"),s.nrmLayer=e.get("NRM_1_layer")?.join(", "),s.uniclassCodes=[];const I=e.get("uniclass_ma_materials");if(I?.length>0){const l=I.map(c=>y.getUniclassMaterial(c,["Code"]));Promise.all(l).then(c=>{c.forEach(n=>{s.uniclassCodes=[...s.uniclassCodes,n?.get("Code")]})})}const N=e.get("uniclass_pr_products");if(N?.length>0){const l=N.map(c=>y.getUniclassProduct(c,["Code"]));Promise.all(l).then(c=>{c.forEach(n=>{s.uniclassCodes=[...s.uniclassCodes,n?.get("Code")]})})}const T=e.get("uniclass_ss_systems");if(T?.length>0){const l=T.map(c=>y.getUniclassSystem(c,["Code"]));Promise.all(l).then(c=>{c.forEach(n=>{s.uniclassCodes=[...s.uniclassCodes,n?.get("Code")]})})}s.designLife=e.get("design_life"),s.designLife&&(s.designLife+=" years");const B=e.get("discpline_layer");B&&y.getDisciplineLayer(B,["Name"]).then(l=>{s.disciplineLayer=l?.get("Name")}),s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height/thickness"),s.mass=e.get("mass"),s.volume=e.get("volume"),s.density=e.get("density"),s.materialStrength=e.get("material_grade"),y.getMaterials(["component_name"]).then(l=>{const c=e.get("materials")?.map(n=>l.find(v=>v.id===n));s.materials=[],c?.forEach(n=>{s.materials=[...s.materials,n.get("component_name")],u.tags=[...u.tags,n.get("component_name")]})});const V=document.getElementsByTagName("tags-list").namedItem("Reuse Considerations");V.tags=e.get("reuse_considerations");const W=document.getElementsByTagName("feasibility-considerations-card")[0];W.considerations=[{heading:"Key Consideration 1",description:e.get("key_consideration_1")},{heading:"Key Consideration 2",description:e.get("key_consideration_2")},{heading:"Key Consideration 3",description:e.get("key_consideration_3")},{heading:"Key Consideration 4",description:e.get("key_consideration_4")}];const u=document.getElementsByTagName("tags-list").namedItem("Tags");u.tags=[];const A=e.get("category");A?.length>0&&A.forEach(l=>{y.getCategory(l,["Name"]).then(c=>{u.tags=[...u.tags,c?.get("Name")];const n=document.createElement("icon-badge");n.text=c?.get("Name"),n.icon="house",n.iconClass="badge-icon--secondary",n.classList.add("me-2"),t.appendChild(n)})});const R=e.get("shearing_layer");R&&(u.tags=[...u.tags,...R]);const K=document.getElementById("reuse-options");y.getReuseOptions(["Name","reuse_option_image","reuse_option_description"]).then(l=>{const c=e.get("reuse_options")?.map(n=>l.find(v=>v.id===n));c?.forEach(n=>{const v=new x;v.name=n.get("Name"),v.imageUrl=n.get("reuse_option_image")?.at(0)?.url,v.description=n.get("reuse_option_description"),K.appendChild(v),u.tags=[...u.tags,n.get("Name")]}),c?.length===0&&(K.innerText="")});const O=document.getElementById("component-variety-types"),z=O.querySelector("h3");z.innerText=a?"Parts":"Types",y.getComponentVarietyTypes(e.get("component_name"),["Name","type_description","type_image"]).then(l=>{l.forEach(c=>{const n=new C;n.name=c?.get("Name"),n.imageUrl=c?.get("type_image")?.at(0)?.url,n.description=c?.get("type_description"),O.appendChild(n),u.tags=[...u.tags,c?.get("Name")]}),l?.length===0&&(O.innerText="")});const J=document.getElementsByTagName("reclamation-process-card")[0];J.items=[{heading:e.get("reclamation_process_1_title"),description:e.get("reclamation_process_body_1")},{heading:e.get("reclamation_process_2_title"),description:e.get("reclamation_process_body_2")},{heading:e.get("reclamation_process_3_title"),description:e.get("reclamation_process_body_3")},{heading:e.get("reclamation_process_4_title"),description:e.get("reclamation_process_body_4")},{heading:e.get("reclamation_process_5_title"),description:e.get("reclamation_process_body_5")},{heading:e.get("reclamation_process_6_title"),description:e.get("reclamation_process_body_6")}];const Q=document.getElementsByTagName("features-sustainability-card")[0];Q.items=[e.get("key_features_1"),e.get("key_features_2"),e.get("key_features_3"),e.get("key_features_4"),e.get("key_features_5"),e.get("key_features_6")];const $=document.getElementsByTagName("cost-availability-card")[0];$.description=e.get("cost_availability_section_description"),$.items.push(e.get("cost_availability_1")),$.items.push(e.get("cost_availability_2")),$.items.push(e.get("cost_availability_3")),$.items.push(e.get("cost_availability_4"));const X=document.getElementsByTagName("environmental-impact-card")[0];X.description=e.get("environmental_impact");const G=document.getElementById("project-examples");y.getProjectExamples(e.get("component_name"),["title","project_example_image","description_short"]).then(l=>{l?.forEach(c=>{const n=new h;n.projectId=c.id,n.name=c.get("title"),n.imageUrl=c.get("project_example_image")?.at(0)?.url,n.description=c.get("description_short"),n.componentId=e.id,n.includeUnapprovedData=y.includeUnapprovedData,G.appendChild(n)}),l?.length===0&&(G.innerText="")})})}me();
