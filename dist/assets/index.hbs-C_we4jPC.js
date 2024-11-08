import{n as o,t as v,G as f,x as p,o as S,D as M}from"./icon-badge-DB_35qvH.js";import"./feasibility-considerations-card-Ck-IrCk1.js";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,j=(i,r,e,a)=>{for(var t=a>1?void 0:a?te(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&ee(r,e,t),t};let C=class extends f{render(){return p`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-secondary text-bg-dark">
              <h4 class="fs-4 fw-normal m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?p`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};j([o({type:String})],C.prototype,"name",2);j([o({type:String})],C.prototype,"imageUrl",2);j([o({type:String})],C.prototype,"description",2);C=j([v("reuse-option-card")],C);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,L=(i,r,e,a)=>{for(var t=a>1?void 0:a?re(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&se(r,e,t),t};let $=class extends f{render(){return p`
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-4 fw-normal m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?p`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};L([o({type:String})],$.prototype,"name",2);L([o({type:String})],$.prototype,"imageUrl",2);L([o({type:String})],$.prototype,"description",2);$=L([v("component-variety-type-card")],$);var ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,x=(i,r,e,a)=>{for(var t=a>1?void 0:a?ie(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&ae(r,e,t),t};let u=class extends f{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return p`
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
        `}};x([o({type:String})],u.prototype,"projectId",2);x([o({type:String})],u.prototype,"name",2);x([o({type:String})],u.prototype,"description",2);x([o({type:String})],u.prototype,"imageUrl",2);x([o({type:String})],u.prototype,"componentId",2);x([o({type:Boolean})],u.prototype,"includeUnapprovedData",2);u=x([v("project-example-card")],u);var ne=Object.defineProperty,de=Object.getOwnPropertyDescriptor,m=(i,r,e,a)=>{for(var t=a>1?void 0:a?de(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&ne(r,e,t),t};let g=class extends f{constructor(){super(...arguments),this.isComponent=!0,this.uniclassCodes=[]}render(){return p`
        <div class="card mb-5">
          <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">Component Details</h2>
          </div>
          <img src="${this.imageUrl}" alt="" />
          <div class="card-body d-flex flex-column">     
            <p class="card-text">
              ${this.description}
            </p>
            <hr>
            <h3 class="fs-5 text-uppercase">Type</h3>
            <dl class="row row-cols-2 mt-2 mb-4">
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Discipline/Layer
                </dt>
                <dd>
                  ${this.disciplineLayer||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Design Life <info-tooltip name="design_life"></info-tooltip>
                </dt>
                <dd>
                  ${this.designLife||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Uniclass Code
                </dt>
                <dd>
                  ${this.uniclassCodes?S(this.uniclassCodes.join("<br />")):"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  European Waste Code
                </dt>
                <dd>
                  ${this.europeanWasteCode||"-"}
                </dd>
              </div>              
            </dl>
            <h3 class="fs-5 text-uppercase">Geometry <info-tooltip name="geometry_component/material"></info-tooltip></h3>
            <dl class="row row-cols-2 mt-2 mb-2">
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Length
                </dt>
                <dd>
                  ${this.length||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Width
                </dt>
                <dd>
                  ${this.width||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Height
                </dt>
                <dd>
                  ${this.height||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Mass
                </dt>
                <dd>
                  ${this.mass||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Volume
                </dt>
                <dd>
                  ${this.volume||"-"}
                </dd>
              </div>
              ${this.isComponent?"":p`
                <div>
                  <dt class="fs-7 text-uppercase text-navy">
                    Density
                  </dt>
                  <dd>
                    ${this.density||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="fs-7 text-uppercase text-navy">
                    Material Strength
                  </dt>
                  <dd>
                    ${this.materialStrength||"-"}
                  </dd>
                </div>
                `}
            </dl>
            <h3 class="fs-5 text-uppercase">Materials <info-tooltip name="materials"></info-tooltip></h3>
            <tags-list name="Materials"></tags-list>
          </div>
        </div>
        `}updated(){this._initMaterialsTagsLists()}async _initMaterialsTagsLists(){if(await this.updateComplete,this.materials){const i=this.shadowRoot?.querySelector('tags-list[name="Materials"]');i.tags=this.materials}}};m([o({type:Boolean})],g.prototype,"isComponent",2);m([o({type:String})],g.prototype,"imageUrl",2);m([o({type:String})],g.prototype,"description",2);m([o({type:String})],g.prototype,"disciplineLayer",2);m([o({type:String})],g.prototype,"europeanWasteCode",2);m([o({type:Array})],g.prototype,"uniclassCodes",2);m([o({type:String})],g.prototype,"designLife",2);m([o({type:String})],g.prototype,"length",2);m([o({type:String})],g.prototype,"width",2);m([o({type:String})],g.prototype,"height",2);m([o({type:String})],g.prototype,"mass",2);m([o({type:String})],g.prototype,"volume",2);m([o({type:String})],g.prototype,"density",2);m([o({type:String})],g.prototype,"materialStrength",2);m([o({type:Array})],g.prototype,"materials",2);g=m([v("component-material-details-card")],g);var oe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,B=(i,r,e,a)=>{for(var t=a>1?void 0:a?ce(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&oe(r,e,t),t};let D=class extends f{constructor(){super(...arguments),this.items=[]}render(){const i=this.items?.filter(r=>r);return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Cost and Availability</span><info-tooltip class="ms-auto" name="cost_availability" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            ${i?.length>0?p`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${i?.map(r=>p`
                <li class="mb-2">
                    ${S(r)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};B([o({type:String})],D.prototype,"description",2);B([o({type:Array})],D.prototype,"items",2);D=B([v("cost-availability-card")],D);var le=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,F=(i,r,e,a)=>{for(var t=a>1?void 0:a?pe(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&le(r,e,t),t};let I=class extends f{render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Environmental Impact</span><info-tooltip class="ms-auto" name="environmental_impact"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            </div>
        </div>
        `}};F([o({type:String})],I.prototype,"description",2);I=F([v("environmental-impact-card")],I);var ge=Object.defineProperty,me=Object.getOwnPropertyDescriptor,V=(i,r,e,a)=>{for(var t=a>1?void 0:a?me(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&ge(r,e,t),t};let T=class extends f{constructor(){super(...arguments),this.items=[]}render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Reclamation Process</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mb-4">
              ${this.items?.filter(i=>i.description?.length>0).map(i=>p`
                <div class="mt-2">
                  <dt class="fs-7 text-uppercase text-navy">
                    ${i.heading}
                  </dt>
                  <dd>
                    ${i.description}
                  </dd>
                </div>
                `)}
            </dl>
            </div>
        </div>
        `}};V([o({type:Array})],T.prototype,"items",2);T=V([v("reclamation-process-card")],T);var ye=Object.defineProperty,he=Object.getOwnPropertyDescriptor,z=(i,r,e,a)=>{for(var t=a>1?void 0:a?he(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&ye(r,e,t),t};let N=class extends f{constructor(){super(...arguments),this.items=[]}render(){const i=this.items?.filter(r=>r);return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-secondary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">Key Features & Suitability</h2>
            </div>
            <div class="card-body d-flex flex-column">
            ${i?.length>0?p`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${i?.map(r=>p`
                <li class="mb-2">
                    ${S(r)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};z([o({type:Array})],N.prototype,"items",2);N=z([v("features-suitability-card")],N);var ue=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,O=(i,r,e,a)=>{for(var t=a>1?void 0:a?ve(r,e):r,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(a?s(r,e,t):s(t))||t);return a&&t&&ue(r,e,t),t};let w=class extends f{render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">References</h2>
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
                  ${this.companyLogos&&this.companyLogos.length>0?S(this.companyLogos.map(i=>`<img src="${i}" alt="" height="50" />`).join("")):"-"}
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
                  ${this.onlineReferences&&this.onlineReferences.length>0?S(this.onlineReferences.map(i=>`<a href="${i}">${i}</a>`).join("<br />")):"-"}
                </dd>
              </div>
            </dl>
            </div>
        </div>
        `}};O([o({type:Array})],w.prototype,"collaborators",2);O([o({type:Array})],w.prototype,"companyLogos",2);O([o({type:String})],w.prototype,"textReferences",2);O([o({type:Array})],w.prototype,"onlineReferences",2);w=O([v("references-card")],w);const y=new M;function fe(){const r=new URLSearchParams(window.location.search).get("id");r&&y.getComponent(r).then(e=>{const a=e.get("component_or_material")==="Component",t=document.getElementsByTagName("main-heading")[0];t.heading=e.get("component_name"),t.includeUnapprovedData=y.includeUnapprovedData;const n=document.createElement("icon-badge");n.text=a?"Component":"Material",n.icon="",n.iconClass="badge-icon--blue",n.classList.add("d-inline-block","me-2","mb-1"),t.appendChild(n);const s=document.getElementsByTagName("component-material-details-card")[0];s.isComponent=a,s.imageUrl=e.get("Image")?.at(0)?.url,s.description=e.get("description_full"),s.europeanWasteCode=e.get("european_waste_code")?.join(", "),s.uniclassCodes=[];const R=e.get("uniclass_ma_materials");if(R?.length>0){const l=R.map(d=>y.getUniclassMaterial(d,["Code"]));Promise.all(l).then(d=>{d.forEach(c=>{s.uniclassCodes=[...s.uniclassCodes,c?.get("Code")]})})}const A=e.get("uniclass_pr_products");if(A?.length>0){const l=A.map(d=>y.getUniclassProduct(d,["Code"]));Promise.all(l).then(d=>{d.forEach(c=>{s.uniclassCodes=[...s.uniclassCodes,c?.get("Code")]})})}const K=e.get("uniclass_ss_systems");if(K?.length>0){const l=K.map(d=>y.getUniclassSystem(d,["Code"]));Promise.all(l).then(d=>{d.forEach(c=>{s.uniclassCodes=[...s.uniclassCodes,c?.get("Code")]})})}s.designLife=e.get("design_life"),s.designLife&&(s.designLife+=" years");const W=e.get("discpline_layer");W&&y.getDisciplineLayer(W,["Name"]).then(l=>{s.disciplineLayer=l?.get("Name")}),s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height/thickness"),s.mass=e.get("mass"),s.volume=e.get("volume"),s.density=e.get("density"),s.materialStrength=e.get("material_grade"),y.getMaterials(["component_name"]).then(l=>{const d=e.get("materials")?.map(c=>l.find(b=>b.id===c)).filter(c=>c);s.materials=[],d?.forEach(c=>{s.materials=[...s.materials,c.get("component_name")],h.tags=[...h.tags,c.get("component_name")]})});const _=document.getElementsByTagName("references-card")[0];_.collaborators=[],e.get("references_people")?.forEach(l=>{y.getUserAuthor(l,["name"]).then(d=>{_.collaborators=[..._.collaborators,d.get("name")]})}),_.companyLogos=[],e.get("organisation_reference_people")?.forEach(l=>{y.getCompany(l,["image_company_logo"]).then(d=>{_.companyLogos=[..._.companyLogos,d.get("image_company_logo")]})}),_.textReferences=e.get("references_text"),_.onlineReferences=[e.get("references_url"),e.get("references_url_2"),e.get("references_url_3"),e.get("references_url_4"),e.get("references_url_5")].filter(l=>l);const J=document.getElementsByTagName("tags-list").namedItem("Reuse Considerations");J.tags=e.get("reuse_considerations");const Q=document.getElementsByTagName("feasibility-considerations-card")[0];Q.considerations=[{heading:"Key Consideration 1",description:e.get("key_consideration_1")},{heading:"Key Consideration 2",description:e.get("key_consideration_2")},{heading:"Key Consideration 3",description:e.get("key_consideration_3")},{heading:"Key Consideration 4",description:e.get("key_consideration_4")}];const h=document.getElementsByTagName("tags-list").namedItem("Tags");h.tags=[];const G=e.get("category");G?.length>0&&G.forEach(l=>{y.getCategory(l,["Name"]).then(d=>{h.tags=[...h.tags,d?.get("Name")]})});const E=e.get("shearing_layer");E&&(h.tags=[...h.tags,...E],E.forEach(l=>{const d=document.createElement("icon-badge");d.text=l,d.icon="house",d.iconClass="badge-icon--secondary",d.classList.add("d-inline-block","me-2","mb-1"),t.appendChild(d)}));const H=document.getElementById("reuse-options");y.getReuseOptions(["Name","reuse_option_image","reuse_option_description"]).then(l=>{const d=e.get("reuse_options")?.map(c=>l.find(b=>b.id===c));d?.forEach(c=>{const b=new C;b.name=c.get("Name"),b.imageUrl=c.get("reuse_option_image")?.at(0)?.url,b.description=c.get("reuse_option_description"),H.appendChild(b),h.tags=[...h.tags,c.get("Name")]}),d?.length===0&&(H.innerText="")});const U=document.getElementById("component-variety-types"),X=U.querySelector("h3");X.innerText=a?"Parts":"Types",y.getComponentVarietyTypes(e.get("component_name"),["Name","type_description","type_image"]).then(l=>{l.forEach(d=>{const c=new $;c.name=d?.get("Name"),c.imageUrl=d?.get("type_image")?.at(0)?.url,c.description=d?.get("type_description"),U.appendChild(c),h.tags=[...h.tags,d?.get("Name")]}),l?.length===0&&(U.innerText="")});const Y=document.getElementsByTagName("reclamation-process-card")[0];Y.items=[{heading:e.get("reclamation_process_1_title"),description:e.get("reclamation_process_body_1")},{heading:e.get("reclamation_process_2_title"),description:e.get("reclamation_process_body_2")},{heading:e.get("reclamation_process_3_title"),description:e.get("reclamation_process_body_3")},{heading:e.get("reclamation_process_4_title"),description:e.get("reclamation_process_body_4")},{heading:e.get("reclamation_process_5_title"),description:e.get("reclamation_process_body_5")},{heading:e.get("reclamation_process_6_title"),description:e.get("reclamation_process_body_6")}];const Z=document.getElementsByTagName("features-suitability-card")[0];Z.items=[e.get("key_features_1"),e.get("key_features_2"),e.get("key_features_3"),e.get("key_features_4"),e.get("key_features_5"),e.get("key_features_6")];const P=document.getElementsByTagName("cost-availability-card")[0];P.description=e.get("cost_availability_section_description"),P.items.push(e.get("cost_availability_1")),P.items.push(e.get("cost_availability_2")),P.items.push(e.get("cost_availability_3")),P.items.push(e.get("cost_availability_4"));const k=document.getElementsByTagName("environmental-impact-card")[0];k.description=e.get("environmental_impact");const q=document.getElementById("project-examples");y.getProjectExamples(e.get("component_name"),["title","project_example_image","description_short"]).then(l=>{l?.forEach(d=>{const c=new u;c.projectId=d.id,c.name=d.get("title"),c.imageUrl=d.get("project_example_image")?.at(0)?.url,c.description=d.get("description_short"),c.componentId=e.id,c.includeUnapprovedData=y.includeUnapprovedData,q.appendChild(c)}),l?.length===0&&(q.innerText="")})})}fe();
