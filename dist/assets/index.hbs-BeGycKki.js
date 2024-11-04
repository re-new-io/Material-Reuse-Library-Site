import{n as o,t as v,G as _,x as p,o as S,D as M}from"./icon-badge-Dw_Sbpr1.js";import"./feasibility-considerations-card-DfYJAwei.js";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,L=(a,i,e,r)=>{for(var t=r>1?void 0:r?te(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&ee(i,e,t),t};let C=class extends _{render(){return p`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?p`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};L([o({type:String})],C.prototype,"name",2);L([o({type:String})],C.prototype,"imageUrl",2);L([o({type:String})],C.prototype,"description",2);C=L([v("reuse-option-card")],C);var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,j=(a,i,e,r)=>{for(var t=r>1?void 0:r?ie(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&se(i,e,t),t};let $=class extends _{render(){return p`
        <div class="card position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-5 m-0">${this.name}</h2>
            </div>
            ${this.imageUrl?p`<img class="rounded-circle position-absolute top-0 end-0 mt-4 me-5" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
            <div class="card-body d-flex flex-column ">
              <p class="card-text w-75">
                ${this.description}
              </p>
            </div>
        </div>
        `}};j([o({type:String})],$.prototype,"name",2);j([o({type:String})],$.prototype,"imageUrl",2);j([o({type:String})],$.prototype,"description",2);$=j([v("component-variety-type-card")],$);var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,x=(a,i,e,r)=>{for(var t=r>1?void 0:r?ae(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&re(i,e,t),t};let u=class extends _{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return p`
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
        `}};x([o({type:String})],u.prototype,"projectId",2);x([o({type:String})],u.prototype,"name",2);x([o({type:String})],u.prototype,"description",2);x([o({type:String})],u.prototype,"imageUrl",2);x([o({type:String})],u.prototype,"componentId",2);x([o({type:Boolean})],u.prototype,"includeUnapprovedData",2);u=x([v("project-example-card")],u);var ne=Object.defineProperty,de=Object.getOwnPropertyDescriptor,m=(a,i,e,r)=>{for(var t=r>1?void 0:r?de(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&ne(i,e,t),t};let g=class extends _{constructor(){super(...arguments),this.isComponent=!0,this.uniclassCodes=[]}render(){return p`
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
                  ${this.uniclassCodes?S(this.uniclassCodes.join("<br />")):"-"}
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
              ${this.isComponent?"":p`
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
        `}updated(){this._initMaterialsTagsLists()}async _initMaterialsTagsLists(){if(await this.updateComplete,this.materials){const a=this.shadowRoot?.querySelector('tags-list[name="Materials"]');a.tags=this.materials}}};m([o({type:Boolean})],g.prototype,"isComponent",2);m([o({type:String})],g.prototype,"imageUrl",2);m([o({type:String})],g.prototype,"description",2);m([o({type:String})],g.prototype,"disciplineLayer",2);m([o({type:String})],g.prototype,"nrmLayer",2);m([o({type:Array})],g.prototype,"uniclassCodes",2);m([o({type:String})],g.prototype,"designLife",2);m([o({type:String})],g.prototype,"length",2);m([o({type:String})],g.prototype,"width",2);m([o({type:String})],g.prototype,"height",2);m([o({type:String})],g.prototype,"mass",2);m([o({type:String})],g.prototype,"volume",2);m([o({type:String})],g.prototype,"density",2);m([o({type:String})],g.prototype,"materialStrength",2);m([o({type:Array})],g.prototype,"materials",2);g=m([v("component-material-details-card")],g);var oe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,T=(a,i,e,r)=>{for(var t=r>1?void 0:r?ce(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&oe(i,e,t),t};let D=class extends _{constructor(){super(...arguments),this.items=[]}render(){const a=this.items?.filter(i=>i);return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-5 m-0 d-flex"><span class="pe-1">Cost and Availability</span><info-tooltip class="ms-auto" name="cost_availability" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            ${a?.length>0?p`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${a?.map(i=>p`
                <li class="mb-2">
                    ${S(i)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};T([o({type:String})],D.prototype,"description",2);T([o({type:Array})],D.prototype,"items",2);D=T([v("cost-availability-card")],D);var le=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,V=(a,i,e,r)=>{for(var t=r>1?void 0:r?pe(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&le(i,e,t),t};let U=class extends _{render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0 d-flex"><span class="pe-1">Environmental Impact</span><info-tooltip class="ms-auto" name="environmental_impact"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            </div>
        </div>
        `}};V([o({type:String})],U.prototype,"description",2);U=V([v("environmental-impact-card")],U);var ge=Object.defineProperty,me=Object.getOwnPropertyDescriptor,W=(a,i,e,r)=>{for(var t=r>1?void 0:r?me(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&ge(i,e,t),t};let I=class extends _{constructor(){super(...arguments),this.items=[]}render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-5 m-0 d-flex"><span class="pe-1">Reclamation Process</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mt-2 mb-4">
              ${this.items?.filter(a=>a.description?.length>0).map(a=>p`
                <div class="mt-2">
                  <dt class="fs-6 text-uppercase text-navy">
                    ${a.heading}
                  </dt>
                  <dd>
                    ${a.description}
                  </dd>
                </div>
                `)}
            </dl>
            </div>
        </div>
        `}};W([o({type:Array})],I.prototype,"items",2);I=W([v("reclamation-process-card")],I);var ye=Object.defineProperty,he=Object.getOwnPropertyDescriptor,z=(a,i,e,r)=>{for(var t=r>1?void 0:r?he(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&ye(i,e,t),t};let N=class extends _{constructor(){super(...arguments),this.items=[]}render(){const a=this.items?.filter(i=>i);return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-secondary text-bg-dark">
            <h2 class="fs-5 m-0">Key Features & Sustainability</h2>
            </div>
            <div class="card-body d-flex flex-column">
            ${a?.length>0?p`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${a?.map(i=>p`
                <li class="mb-2">
                    ${S(i)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};z([o({type:Array})],N.prototype,"items",2);N=z([v("features-sustainability-card")],N);var ue=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,O=(a,i,e,r)=>{for(var t=r>1?void 0:r?ve(i,e):i,n=a.length-1,s;n>=0;n--)(s=a[n])&&(t=(r?s(i,e,t):s(t))||t);return r&&t&&ue(i,e,t),t};let P=class extends _{render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-5 m-0">References</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-1 mt-2 mb-4">
              <div>
                <dt class="text-uppercase text-navy">
                  Collaborators
                </dt>
                <dd>
                  ${this.collaborators&&this.collaborators.length>0?this.collaborators.join(", "):"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Companies
                </dt>
                <dd>
                  ${this.companyLogos&&this.companyLogos.length>0?S(this.companyLogos.map(a=>`<img src="${a}" alt="" height="50" />`).join("")):"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Text References
                </dt>
                <dd>
                  ${this.textReferences??"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Online References
                </dt>
                <dd>
                  ${this.onlineReferences&&this.onlineReferences.length>0?S(this.onlineReferences.map(a=>`<a href="${a}">${a}</a>`).join("<br />")):"-"}
                </dd>
              </div>
            </dl>
            </div>
        </div>
        `}};O([o({type:Array})],P.prototype,"collaborators",2);O([o({type:Array})],P.prototype,"companyLogos",2);O([o({type:String})],P.prototype,"textReferences",2);O([o({type:Array})],P.prototype,"onlineReferences",2);P=O([v("references-card")],P);const y=new M;function _e(){const i=new URLSearchParams(window.location.search).get("id");i&&y.getComponent(i).then(e=>{const r=e.get("component_or_material")==="Component",t=document.getElementsByTagName("main-heading")[0];t.heading=e.get("component_name"),t.includeUnapprovedData=y.includeUnapprovedData;const n=document.createElement("icon-badge");n.text=r?"Component":"Material",n.icon="",n.iconClass="badge-icon--blue",n.classList.add("me-2"),t.appendChild(n);const s=document.getElementsByTagName("component-material-details-card")[0];s.isComponent=r,s.imageUrl=e.get("Image")?.at(0)?.url,s.description=e.get("description_full"),s.nrmLayer=e.get("NRM_1_layer")?.join(", "),s.uniclassCodes=[];const R=e.get("uniclass_ma_materials");if(R?.length>0){const l=R.map(c=>y.getUniclassMaterial(c,["Code"]));Promise.all(l).then(c=>{c.forEach(d=>{s.uniclassCodes=[...s.uniclassCodes,d?.get("Code")]})})}const B=e.get("uniclass_pr_products");if(B?.length>0){const l=B.map(c=>y.getUniclassProduct(c,["Code"]));Promise.all(l).then(c=>{c.forEach(d=>{s.uniclassCodes=[...s.uniclassCodes,d?.get("Code")]})})}const A=e.get("uniclass_ss_systems");if(A?.length>0){const l=A.map(c=>y.getUniclassSystem(c,["Code"]));Promise.all(l).then(c=>{c.forEach(d=>{s.uniclassCodes=[...s.uniclassCodes,d?.get("Code")]})})}s.designLife=e.get("design_life"),s.designLife&&(s.designLife+=" years");const K=e.get("discpline_layer");K&&y.getDisciplineLayer(K,["Name"]).then(l=>{s.disciplineLayer=l?.get("Name")}),s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height/thickness"),s.mass=e.get("mass"),s.volume=e.get("volume"),s.density=e.get("density"),s.materialStrength=e.get("material_grade"),y.getMaterials(["component_name"]).then(l=>{const c=e.get("materials")?.map(d=>l.find(b=>b.id===d));s.materials=[],c?.forEach(d=>{s.materials=[...s.materials,d.get("component_name")],h.tags=[...h.tags,d.get("component_name")]})});const f=document.getElementsByTagName("references-card")[0];f.collaborators=[],e.get("references_people")?.forEach(l=>{y.getUserAuthor(l,["name"]).then(c=>{f.collaborators=[...f.collaborators,c.get("name")]})}),f.companyLogos=[],e.get("organisation_reference_people")?.forEach(l=>{y.getCompany(l,["image_company_logo"]).then(c=>{f.companyLogos=[...f.companyLogos,c.get("image_company_logo")]})}),f.textReferences=e.get("references_text"),f.onlineReferences=[e.get("references_url"),e.get("references_url_2"),e.get("references_url_3"),e.get("references_url_4"),e.get("references_url_5")].filter(l=>l);const J=document.getElementsByTagName("tags-list").namedItem("Reuse Considerations");J.tags=e.get("reuse_considerations");const Q=document.getElementsByTagName("feasibility-considerations-card")[0];Q.considerations=[{heading:"Key Consideration 1",description:e.get("key_consideration_1")},{heading:"Key Consideration 2",description:e.get("key_consideration_2")},{heading:"Key Consideration 3",description:e.get("key_consideration_3")},{heading:"Key Consideration 4",description:e.get("key_consideration_4")}];const h=document.getElementsByTagName("tags-list").namedItem("Tags");h.tags=[];const G=e.get("category");G?.length>0&&G.forEach(l=>{y.getCategory(l,["Name"]).then(c=>{h.tags=[...h.tags,c?.get("Name")];const d=document.createElement("icon-badge");d.text=c?.get("Name"),d.icon="house",d.iconClass="badge-icon--secondary",d.classList.add("me-2"),t.appendChild(d)})});const H=e.get("shearing_layer");H&&(h.tags=[...h.tags,...H]);const q=document.getElementById("reuse-options");y.getReuseOptions(["Name","reuse_option_image","reuse_option_description"]).then(l=>{const c=e.get("reuse_options")?.map(d=>l.find(b=>b.id===d));c?.forEach(d=>{const b=new C;b.name=d.get("Name"),b.imageUrl=d.get("reuse_option_image")?.at(0)?.url,b.description=d.get("reuse_option_description"),q.appendChild(b),h.tags=[...h.tags,d.get("Name")]}),c?.length===0&&(q.innerText="")});const E=document.getElementById("component-variety-types"),X=E.querySelector("h3");X.innerText=r?"Parts":"Types",y.getComponentVarietyTypes(e.get("component_name"),["Name","type_description","type_image"]).then(l=>{l.forEach(c=>{const d=new $;d.name=c?.get("Name"),d.imageUrl=c?.get("type_image")?.at(0)?.url,d.description=c?.get("type_description"),E.appendChild(d),h.tags=[...h.tags,c?.get("Name")]}),l?.length===0&&(E.innerText="")});const Y=document.getElementsByTagName("reclamation-process-card")[0];Y.items=[{heading:e.get("reclamation_process_1_title"),description:e.get("reclamation_process_body_1")},{heading:e.get("reclamation_process_2_title"),description:e.get("reclamation_process_body_2")},{heading:e.get("reclamation_process_3_title"),description:e.get("reclamation_process_body_3")},{heading:e.get("reclamation_process_4_title"),description:e.get("reclamation_process_body_4")},{heading:e.get("reclamation_process_5_title"),description:e.get("reclamation_process_body_5")},{heading:e.get("reclamation_process_6_title"),description:e.get("reclamation_process_body_6")}];const Z=document.getElementsByTagName("features-sustainability-card")[0];Z.items=[e.get("key_features_1"),e.get("key_features_2"),e.get("key_features_3"),e.get("key_features_4"),e.get("key_features_5"),e.get("key_features_6")];const w=document.getElementsByTagName("cost-availability-card")[0];w.description=e.get("cost_availability_section_description"),w.items.push(e.get("cost_availability_1")),w.items.push(e.get("cost_availability_2")),w.items.push(e.get("cost_availability_3")),w.items.push(e.get("cost_availability_4"));const k=document.getElementsByTagName("environmental-impact-card")[0];k.description=e.get("environmental_impact");const F=document.getElementById("project-examples");y.getProjectExamples(e.get("component_name"),["title","project_example_image","description_short"]).then(l=>{l?.forEach(c=>{const d=new u;d.projectId=c.id,d.name=c.get("title"),d.imageUrl=c.get("project_example_image")?.at(0)?.url,d.description=c.get("description_short"),d.componentId=e.id,d.includeUnapprovedData=y.includeUnapprovedData,F.appendChild(d)}),l?.length===0&&(F.innerText="")})})}_e();
