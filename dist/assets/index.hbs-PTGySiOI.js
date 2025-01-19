import{n as o,t as f,G as _,x as p,o as S,D as ee}from"./icon-badge-B-MoYZer.js";import"./feasibility-considerations-card-Dxj1s09e.js";var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,L=(i,a,e,r)=>{for(var t=r>1?void 0:r?se(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&te(a,e,t),t};let C=class extends _{render(){return p`
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
        `}};L([o({type:String})],C.prototype,"name",2);L([o({type:String})],C.prototype,"imageUrl",2);L([o({type:String})],C.prototype,"description",2);C=L([f("reuse-option-card")],C);var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,R=(i,a,e,r)=>{for(var t=r>1?void 0:r?re(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&ae(a,e,t),t};let $=class extends _{render(){return p`
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
        `}};R([o({type:String})],$.prototype,"name",2);R([o({type:String})],$.prototype,"imageUrl",2);R([o({type:String})],$.prototype,"description",2);$=R([f("component-variety-type-card")],$);var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,x=(i,a,e,r)=>{for(var t=r>1?void 0:r?ne(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&ie(a,e,t),t};let u=class extends _{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return p`
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
        `}};x([o({type:String})],u.prototype,"projectId",2);x([o({type:String})],u.prototype,"name",2);x([o({type:String})],u.prototype,"description",2);x([o({type:String})],u.prototype,"imageUrl",2);x([o({type:String})],u.prototype,"componentId",2);x([o({type:Boolean})],u.prototype,"includeUnapprovedData",2);u=x([f("project-example-card")],u);var de=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,m=(i,a,e,r)=>{for(var t=r>1?void 0:r?oe(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&de(a,e,t),t};let g=class extends _{constructor(){super(...arguments),this.isComponent=!0,this.uniclassCodes=[]}render(){return p`
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
        `}updated(){this._initMaterialsTagsLists()}async _initMaterialsTagsLists(){if(await this.updateComplete,this.materials){const i=this.shadowRoot?.querySelector('tags-list[name="Materials"]');i.tags=this.materials}}};m([o({type:Boolean})],g.prototype,"isComponent",2);m([o({type:String})],g.prototype,"imageUrl",2);m([o({type:String})],g.prototype,"description",2);m([o({type:String})],g.prototype,"disciplineLayer",2);m([o({type:String})],g.prototype,"europeanWasteCode",2);m([o({type:Array})],g.prototype,"uniclassCodes",2);m([o({type:String})],g.prototype,"designLife",2);m([o({type:String})],g.prototype,"length",2);m([o({type:String})],g.prototype,"width",2);m([o({type:String})],g.prototype,"height",2);m([o({type:String})],g.prototype,"mass",2);m([o({type:String})],g.prototype,"volume",2);m([o({type:String})],g.prototype,"density",2);m([o({type:String})],g.prototype,"materialStrength",2);m([o({type:Array})],g.prototype,"materials",2);g=m([f("component-material-details-card")],g);var ce=Object.defineProperty,le=Object.getOwnPropertyDescriptor,N=(i,a,e,r)=>{for(var t=r>1?void 0:r?le(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&ce(a,e,t),t};let D=class extends _{constructor(){super(...arguments),this.items=[]}render(){const i=this.items?.filter(a=>a);return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Cost and Availability</span><info-tooltip class="ms-auto" name="cost_availability" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            ${i?.length>0?p`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${i?.map(a=>p`
                <li class="mb-2">
                    ${S(a)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};N([o({type:String})],D.prototype,"description",2);N([o({type:Array})],D.prototype,"items",2);D=N([f("cost-availability-card")],D);var pe=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,J=(i,a,e,r)=>{for(var t=r>1?void 0:r?ge(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&pe(a,e,t),t};let I=class extends _{render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Environmental Impact</span><info-tooltip class="ms-auto" name="environmental_impact"></info-tooltip></h2>
            </div>
            <div class="card-body d-flex flex-column">
            <p>${this.description}</p>
            </div>
        </div>
        `}};J([o({type:String})],I.prototype,"description",2);I=J([f("environmental-impact-card")],I);var me=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,B=(i,a,e,r)=>{for(var t=r>1?void 0:r?ye(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&me(a,e,t),t};let j=class extends _{constructor(){super(...arguments),this.items=[],this.averageReclamationRate=""}render(){return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Reclamation Process</h2>
            </div>
             ${this.averageReclamationRate?p`
            <div class="card-body d-flex flex-column">
             <dl class="row row-cols-2 mb-1">
              <div class="mt-2">
                <dt class="fs-7 text-uppercase text-navy">
                  Average Reclamation Rate
                </dt>
                 <dd style="font-size: 1.5rem;"> <!-- Adjust the font size as needed -->
                  ${this.averageReclamationRate}
                </dd>
              </div>
             </dl>
            </div>
            `:""}

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
        `}};B([o({type:Array})],j.prototype,"items",2);B([o({type:String})],j.prototype,"averageReclamationRate",2);j=B([f("reclamation-process-card")],j);var he=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,Q=(i,a,e,r)=>{for(var t=r>1?void 0:r?ve(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&he(a,e,t),t};let T=class extends _{constructor(){super(...arguments),this.items=[]}render(){const i=this.items?.filter(a=>a);return p`
        <div class="card mb-5">
            <div class="card-header py-3 bg-secondary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">Key Features & Suitability</h2>
            </div>
            <div class="card-body d-flex flex-column">
            ${i?.length>0?p`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${i?.map(a=>p`
                <li class="mb-2">
                    ${S(a)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};Q([o({type:Array})],T.prototype,"items",2);T=Q([f("features-suitability-card")],T);var ue=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,O=(i,a,e,r)=>{for(var t=r>1?void 0:r?fe(a,e):a,n=i.length-1,s;n>=0;n--)(s=i[n])&&(t=(r?s(a,e,t):s(t))||t);return r&&t&&ue(a,e,t),t};let w=class extends _{render(){return p`
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
        `}};O([o({type:Array})],w.prototype,"collaborators",2);O([o({type:Array})],w.prototype,"companyLogos",2);O([o({type:String})],w.prototype,"textReferences",2);O([o({type:Array})],w.prototype,"onlineReferences",2);w=O([f("references-card")],w);const y=new ee;function _e(){const a=new URLSearchParams(window.location.search).get("id");a&&y.getComponent(a).then(e=>{const r=e.get("component_or_material")==="Component",t=document.getElementsByTagName("main-heading")[0];t.heading=e.get("component_name"),t.includeUnapprovedData=y.includeUnapprovedData;const n=document.createElement("icon-badge");n.text=r?"Component":"Material",n.icon="",n.iconClass="badge-icon--blue",n.classList.add("d-inline-block","me-2","mb-1"),t.appendChild(n);const s=document.getElementsByTagName("component-material-details-card")[0];s.isComponent=r,s.imageUrl=e.get("Image")?.at(0)?.url,s.description=e.get("description_full"),s.europeanWasteCode=e.get("european_waste_code")?.join(", "),s.uniclassCodes=[];const A=e.get("uniclass_ma_materials");if(A?.length>0){const l=A.map(d=>y.getUniclassMaterial(d,["Code"]));Promise.all(l).then(d=>{d.forEach(c=>{s.uniclassCodes=[...s.uniclassCodes,c?.get("Code")]})})}const K=e.get("uniclass_pr_products");if(K?.length>0){const l=K.map(d=>y.getUniclassProduct(d,["Code"]));Promise.all(l).then(d=>{d.forEach(c=>{s.uniclassCodes=[...s.uniclassCodes,c?.get("Code")]})})}const W=e.get("uniclass_ss_systems");if(W?.length>0){const l=W.map(d=>y.getUniclassSystem(d,["Code"]));Promise.all(l).then(d=>{d.forEach(c=>{s.uniclassCodes=[...s.uniclassCodes,c?.get("Code")]})})}s.designLife=e.get("design_life"),s.designLife&&(s.designLife+=" years");const G=e.get("discpline_layer");G&&y.getDisciplineLayer(G,["Name"]).then(l=>{s.disciplineLayer=l?.get("Name")}),s.length=e.get("length"),s.width=e.get("width"),s.height=e.get("height/thickness"),s.mass=e.get("mass"),s.volume=e.get("volume"),s.density=e.get("density"),s.materialStrength=e.get("material_grade"),y.getMaterials(["component_name"]).then(l=>{const d=e.get("materials")?.map(c=>l.find(v=>v.id===c)).filter(c=>c);s.materials=[],d?.forEach(c=>{s.materials=[...s.materials,c.get("component_name")],h.tags=[...h.tags,c.get("component_name")]})});const b=document.getElementsByTagName("references-card")[0];b.collaborators=[],e.get("references_people")?.forEach(l=>{y.getUserAuthor(l,["name"]).then(d=>{b.collaborators=[...b.collaborators,d.get("name")]})}),b.companyLogos=[],e.get("organisation_reference_people")?.forEach(l=>{y.getCompany(l,["image_company_logo"]).then(d=>{const c=d.get("image_company_logo");if(c&&c.length>0){const v=c[0].url;b.companyLogos=[...b.companyLogos,v]}})}),b.textReferences=e.get("references_text"),b.onlineReferences=[e.get("references_url"),e.get("references_url_2"),e.get("references_url_3"),e.get("references_url_4"),e.get("references_url_5")].filter(l=>l);const X=document.getElementsByTagName("tags-list").namedItem("Reuse Considerations");X.tags=e.get("reuse_considerations");const Y=document.getElementsByTagName("feasibility-considerations-card")[0];Y.considerations=[{heading:"Key Consideration 1",description:e.get("key_consideration_1")},{heading:"Key Consideration 2",description:e.get("key_consideration_2")},{heading:"Key Consideration 3",description:e.get("key_consideration_3")},{heading:"Key Consideration 4",description:e.get("key_consideration_4")}];const h=document.getElementsByTagName("tags-list").namedItem("Tags");h.tags=[];const H=e.get("category");H?.length>0&&H.forEach(l=>{y.getCategory(l,["Name"]).then(d=>{h.tags=[...h.tags,d?.get("Name")]})});const E=e.get("shearing_layer");E&&(h.tags=[...h.tags,...E],E.forEach(l=>{const d=document.createElement("icon-badge");d.text=l,d.icon="house",d.iconClass="badge-icon--secondary",d.classList.add("d-inline-block","me-2","mb-1"),t.appendChild(d)}));const q=document.getElementById("reuse-options");y.getReuseOptions(["Name","reuse_option_image","reuse_option_description"]).then(l=>{const d=e.get("reuse_options")?.map(c=>l.find(v=>v.id===c));d?.forEach(c=>{const v=new C;v.name=c.get("Name"),v.imageUrl=c.get("reuse_option_image")?.at(0)?.url,v.description=c.get("reuse_option_description"),q.appendChild(v),h.tags=[...h.tags,c.get("Name")]}),d?.length===0&&(q.innerText="")});const U=document.getElementById("component-variety-types"),Z=U.querySelector("h3");Z.innerText=r?"Parts":"Types",y.getComponentVarietyTypes(e.get("component_name"),["Name","type_description","type_image"]).then(l=>{l.forEach(d=>{const c=new $;c.name=d?.get("Name"),c.imageUrl=d?.get("type_image")?.at(0)?.url,c.description=d?.get("type_description"),U.appendChild(c),h.tags=[...h.tags,d?.get("Name")]}),l?.length===0&&(U.innerText="")});const z=document.getElementsByTagName("reclamation-process-card")[0];z.items=[{heading:e.get("reclamation_process_1_title"),description:e.get("reclamation_process_body_1")},{heading:e.get("reclamation_process_2_title"),description:e.get("reclamation_process_body_2")},{heading:e.get("reclamation_process_3_title"),description:e.get("reclamation_process_body_3")},{heading:e.get("reclamation_process_4_title"),description:e.get("reclamation_process_body_4")},{heading:e.get("reclamation_process_5_title"),description:e.get("reclamation_process_body_5")},{heading:e.get("reclamation_process_6_title"),description:e.get("reclamation_process_body_6")}];const F=e.get("average_reclamation_rate");F&&(z.averageReclamationRate=F+"%");const k=document.getElementsByTagName("features-suitability-card")[0];k.items=[e.get("key_features_1"),e.get("key_features_2"),e.get("key_features_3"),e.get("key_features_4"),e.get("key_features_5"),e.get("key_features_6")];const P=document.getElementsByTagName("cost-availability-card")[0];P.description=e.get("cost_availability_section_description"),P.items.push(e.get("cost_availability_1")),P.items.push(e.get("cost_availability_2")),P.items.push(e.get("cost_availability_3")),P.items.push(e.get("cost_availability_4"));const M=document.getElementsByTagName("environmental-impact-card")[0];M.description=e.get("environmental_impact");const V=document.getElementById("project-examples");y.getProjectExamples(e.get("component_name"),["title","project_example_image","description_short"]).then(l=>{l?.forEach(d=>{const c=new u;c.projectId=d.id,c.name=d.get("title"),c.imageUrl=d.get("project_example_image")?.at(0)?.url,c.description=d.get("description_short"),c.componentId=e.id,c.includeUnapprovedData=y.includeUnapprovedData,V.appendChild(c)}),l?.length===0&&(V.innerText="")})})}_e();
