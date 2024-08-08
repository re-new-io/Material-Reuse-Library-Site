import{n as a,t as x,G as T,x as g,o as z,D as J}from"./database-D7xsnz6_.js";import"./feasibility-considerations-card-CmIAoTQI.js";var K=Object.defineProperty,V=Object.getOwnPropertyDescriptor,I=(i,r,s,e)=>{for(var t=e>1?void 0:e?V(r,s):r,n=i.length-1,o;n>=0;n--)(o=i[n])&&(t=(e?o(r,s,t):o(t))||t);return e&&t&&K(r,s,t),t};let $=class extends T{constructor(){super(...arguments),this.items=[]}render(){return g`
        <div class="card mb-5">
            <div class="card-header py-4 bg-brown text-bg-dark">
                <h2 class="fs-5 m-0">Project Team</h2>
            </div>
            <div class="card-body d-flex flex-column">
                <dl class="row row-cols-2 mt-2 mb-2">
                    ${this.items?.map(i=>g`<div class="mb-2">
                                <dt class="text-uppercase text-navy">
                                    ${i.heading}
                                </dt>
                                <dd>
                                    ${i.text}
                                </dd>
                            </div>`)}
                </dl>
            </div>
        </div>
        `}};I([a({type:Array})],$.prototype,"items",2);$=I([x("project-team-card")],$);const M={textToHtml(i){return i&&(Array.isArray(i)&&(i=i.join("<br />")),z(i+""))}};var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,c=(i,r,s,e)=>{for(var t=e>1?void 0:e?Y(r,s):r,n=i.length-1,o;n>=0;n--)(o=i[n])&&(t=(e?o(r,s,t):o(t))||t);return e&&t&&X(r,s,t),t};let d=class extends T{renderRoadmapRow(i,r,s){return r.filter(e=>e.description&&e.description!=="-").length===0&&!s?g``:g`
        <div class="row roadmap__row">
            <div class="col-2 roadmap__circle">
            </div>
            <div class="col-10 row row-cols-1 row-cols-lg-2 pe-0">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-header py-3 bg-primary text-bg-dark text-start">
                            <h2 class="fs-6 m-0">${i}</h2>
                        </div>
                        <div class="card-body d-flex flex-column small py-1">
                            <dl class="row row-cols-1 row-cols-md-2 text-start mb-0">
                                ${r?.map(e=>e.description&&e.description!=="-"?g`
                                    <div>
                                        <dt class="text-uppercase text-navy mb-0">
                                            ${e.heading}
                                        </dt>
                                        <dd class="pb-0">
                                            ${M.textToHtml(e.description)}
                                        </dd>
                                    </div>
                                    `:"")}
                            </dl>
                        </div>
                    </div>
                </div>
                ${s?g`
                    <div class="col mt-2 mt-lg-0 pe-lg-0">
                        <div class="card h-100 border">
                            <div class="card-body d-flex flex-column text-start justify-content-center">
                                <p class="small m-0">
                                    ${M.textToHtml(s)}
                                </p>
                            </div>
                        </div>
                    </div>
                    `:""}
            </div>
        </div>
        `}renderSeparatorRow(){return g`
        <div class="row roadmap__row roadmap__row--seperator">
            <div class="col-12 roadmap__circle">
            </div>
        </div>
        `}render(){const i=[this.renderRoadmapRow("Material Source/Donor Building",[{heading:"Location",description:this.materialSourceLocation||"-"},{heading:"Surveys",description:this.materialSourceSurveys||"-"}],this.materialSourceDescription),this.renderRoadmapRow("Material Removal",[{heading:"Tools & Equipment",description:this.materialRemovalToolsEquipment||"-"},{heading:"People Required",description:this.materialRemovalPeopleRequired||"-"}],this.materialRemovalDescription),this.renderRoadmapRow("Transportation",[{heading:"Type",description:this.transportationType||"-"},{heading:"Distance",description:this.transportationDistance?`${this.transportationDistance} km`:"-"}],this.transportationDescription),this.renderRoadmapRow("Testing",[{heading:"Number Tested",description:this.testingNumberTested||"-"},{heading:"Testing Method",description:this.testingTestingmethod||"-"},{heading:"Material Grade",description:this.testingMaterialGrade||"-"}],this.testingDescription),this.renderRoadmapRow("Refurbishment/Remanufacture",[{heading:"Tools & Equipment",description:this.refurbishmentRemanufactureToolsEquipment||"-"},{heading:"Time To Refurbish",description:this.refurbishmentRemanufactureTimeToRefurbish?`${this.refurbishmentRemanufactureTimeToRefurbish} days`:"-"}],this.refurbishmentRemanufactureDescription),this.renderRoadmapRow("Warranty & Certification",[{heading:"Code Compliance",description:this.warrantyCertificationCodeCompliance||"-"},{heading:"Insurance",description:this.warrantyCertificationInsurance||"-"}],this.warrantyCertificationDescription),this.renderRoadmapRow("Resale/Reuse",[{heading:"Seller",description:this.resaleReuseSeller||"-"},{heading:"Buyer",description:this.resaleReuseBuyer||"-"}],this.resaleReuseDescription)];return g`
        <div class="d-flex flex-column">
            <h3 class="fs-6 text-uppercase">Roadmap</h3>
            <div class="container text-center">
                ${i.filter(r=>r.values.length>0).map((r,s,e)=>g`
                    ${r}
                    ${s<e.length-1?this.renderSeparatorRow():""}
                    `)}
            </div>
        </div>
        `}};c([a({type:String})],d.prototype,"materialSourceLocation",2);c([a({type:String})],d.prototype,"materialSourceSurveys",2);c([a({type:String})],d.prototype,"materialSourceDescription",2);c([a({type:String})],d.prototype,"materialRemovalToolsEquipment",2);c([a({type:String})],d.prototype,"materialRemovalPeopleRequired",2);c([a({type:String})],d.prototype,"materialRemovalDescription",2);c([a({type:String})],d.prototype,"transportationType",2);c([a({type:String})],d.prototype,"transportationDistance",2);c([a({type:String})],d.prototype,"transportationDescription",2);c([a({type:String})],d.prototype,"testingNumberTested",2);c([a({type:String})],d.prototype,"testingTestingmethod",2);c([a({type:String})],d.prototype,"testingMaterialGrade",2);c([a({type:String})],d.prototype,"testingDescription",2);c([a({type:String})],d.prototype,"refurbishmentRemanufactureToolsEquipment",2);c([a({type:String})],d.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);c([a({type:String})],d.prototype,"refurbishmentRemanufactureDescription",2);c([a({type:String})],d.prototype,"warrantyCertificationCodeCompliance",2);c([a({type:String})],d.prototype,"warrantyCertificationInsurance",2);c([a({type:String})],d.prototype,"warrantyCertificationDescription",2);c([a({type:String})],d.prototype,"resaleReuseSeller",2);c([a({type:String})],d.prototype,"resaleReuseBuyer",2);c([a({type:String})],d.prototype,"resaleReuseDescription",2);d=c([x("road-map")],d);var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,C=(i,r,s,e)=>{for(var t=e>1?void 0:e?k(r,s):r,n=i.length-1,o;n>=0;n--)(o=i[n])&&(t=(e?o(r,s,t):o(t))||t);return e&&t&&Z(r,s,t),t};let S=class extends T{render(){return g`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-5 m-0">Impact</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mt-2">
                <div>
                <dt class="text-uppercase text-navy">
                    Carbon
                </dt>
                <dd>
                    ${this.carbon?`${this.carbon} kg CO2e`:"-"}
                </dd>
                </div>
                <div>
                <dt class="text-uppercase text-navy">
                    Cost
                </dt>
                <dd>
                    ${this.cost?`£${this.cost.toLocaleString()}`:"-"}
                </dd>
                </div>
                <div>
                <dt class="text-uppercase text-navy">
                    Programme
                </dt>
                <dd>
                    ${this.programme?`+${this.programme} days`:"-"}
                </dd>
                </div>
            </div>
            <div class="card-body d-flex flex-column pt-0">
                <dl class="row row-cols-1">
                    <div>
                    <dt class="text-uppercase text-navy">
                        Material Pathways | % By Mass
                    </dt>
                    <dd>
                        <img src="https://placehold.co/500x400?text=Material Flow Diagram" class="img-fluid rounded" alt="...">
                    </dd>
                    </div>
                </dl>
            </div>
        </div>
        `}};C([a({type:String})],S.prototype,"carbon",2);C([a({type:Number})],S.prototype,"cost",2);C([a({type:String})],S.prototype,"programme",2);S=C([x("impact-card")],S);var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,h=(i,r,s,e)=>{for(var t=e>1?void 0:e?te(r,s):r,n=i.length-1,o;n>=0;n--)(o=i[n])&&(t=(e?o(r,s,t):o(t))||t);return e&&t&&ee(r,s,t),t};let y=class extends T{render(){return g`
        <div class="card mb-5">
          <div class="card-header py-4 bg-secondary text-bg-dark">
            <h2 class="fs-5 m-0">Deconstruction/Storage</h2>
          </div>
          <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mt-2 mb-4">
              <div>
                <dt class="text-uppercase text-brown">
                  Method
                </dt>
                <dd>
                  ${this.deconstructionMethod||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-brown">
                  Storage Type
                </dt>
                <dd>
                ${this.storageType||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-brown">
                  Storage Distance From Site
                </dt>
                <dd>
                ${this.storageDistance?`${this.storageDistance} km`:"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-brown">
                  Storage Protection Needs
                </dt>
                <dd>
                ${this.storageProtectionNeeds||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-brown">
                  Reclamation Rate
                </dt>
                <dd>
                ${this.reclamationRate?`${this.reclamationRate}%`:"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-brown">
                  Quantity Of Material
                </dt>
                <dd>
                ${this.quantityOfMaterial?`${this.quantityOfMaterial} kg`:"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-brown">
                  Marketplace/Exchange Platform
                </dt>
                <dd>
                ${this.marketExchangePlatform||"-"}
                </dd>
              </div>
          </div>
        </div>
        `}};h([a({type:String})],y.prototype,"deconstructionMethod",2);h([a({type:String})],y.prototype,"storageType",2);h([a({type:String})],y.prototype,"storageDistance",2);h([a({type:String})],y.prototype,"storageProtectionNeeds",2);h([a({type:String})],y.prototype,"reclamationRate",2);h([a({type:String})],y.prototype,"quantityOfMaterial",2);h([a({type:String})],y.prototype,"marketExchangePlatform",2);y=h([x("deconstruction-card")],y);var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,w=(i,r,s,e)=>{for(var t=e>1?void 0:e?re(r,s):r,n=i.length-1,o;n>=0;n--)(o=i[n])&&(t=(e?o(r,s,t):o(t))||t);return e&&t&&ae(r,s,t),t};let f=class extends T{render(){return g`
        <div class="card card--round-img-top-left mb-4">
          <div class="card-header position-relative py-3 bg-primary text-bg-dark d-flex">
            <img class="rounded-circle position-absolute" src="${this.imageUrl||"/images/person.jpg"}" alt="" width="100" height="100" />
            <div>
              <h4 class="fs-5 m-0">${this.name}</h4>
              <p class="card-text">
                ${[this.job,this.company].filter(i=>i).join(" | ")}
              </p>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text mt-3">
              ${this.bio}
            </p>
          </div>
        </div>
        `}};w([a({type:String})],f.prototype,"name",2);w([a({type:String})],f.prototype,"job",2);w([a({type:String})],f.prototype,"company",2);w([a({type:String})],f.prototype,"imageUrl",2);w([a({type:String})],f.prototype,"bio",2);f=w([x("author-card")],f);const u=new J;async function ie(){const i=new URLSearchParams(window.location.search),r=i.get("id"),s=i.get("componentId");if(!r||!s)return;const e=await u.getCaseStudy(r),t=await u.getComponent(s),n=document.getElementsByTagName("main-heading")[0];n.link=`/component/?id=${s}`,n.subHeading=[e.get("title"),e.get("project_name"),e.get("description")].filter(l=>l).join(" | ");const o=document.createElement("icon-badge");o.text=e.get("case_study_status"),o.icon="check-circle-fill",o.iconColour="#02B8B7",o.lightBackground=!0,n.appendChild(o);const R=document.createElement("icon-badge");R.text=e.get("case_study_value"),R.icon="currency-pound",R.iconColour="red",R.lightBackground=!0,n.appendChild(R);const P=document.getElementById("project-image"),j=e.get("case_study_image")?.at(0)?.url;j?P.src=j:P.classList.add("invisible");const N=document.getElementsByTagName("project-team-card")[0],q=await u.getCompanies(),L=await u.getCaseStudyProjectTeams(),A=e.get("case_study_project_team")?.map(l=>L.find(m=>m.id===l));N.items=A?.map(l=>({heading:l.get("role"),text:q.find(m=>m.id==l.get("company (from companies_page)"))?.get("organisation")}));const G=document.getElementsByTagName("tags-list").namedItem("Project Constraints");G.tags=e.get("category (from case_study_project_constraints)");const H=document.getElementsByTagName("tags-list").namedItem("Tags"),v=[],U=await u.getDisciplineLayers();v.push(...t.get("discpline_layer")?.map(l=>U.find(m=>m.id===l).get("Name")));const F=await u.getCategories();v.push(...t.get("category")?.map(l=>F.find(m=>m.id===l).get("Name")));const Q=await u.getComponentTypes();v.push(...t.get("component_type")?.map(l=>Q.find(m=>m.id===l).get("Name"))),v.push(e.get("storage_type")),v.push(e.get("marketplace_exchange_platform")),v.push(e.get("Building Age")),H.tags=v;const O=document.getElementsByTagName("feasibility-considerations-card")[0];O.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage <span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${e.get("RIBA_stage")}</span>`}],O.considerations=[{heading:e.get("feasibility_consideration_1"),description:e.get("solution_1")},{heading:e.get("feasibility_consideration_2"),description:e.get("solution_2")},{heading:e.get("feasibility_consideration_3"),description:e.get("solution_3")}];const p=document.getElementsByTagName("road-map")[0];p.materialSourceLocation=e.get("material_source_location")||e.get("donor_building_location"),p.materialSourceSurveys=e.get("material_source_surveys")||e.get("donor_building_surveys"),p.materialSourceLocation=e.get("material_source_description")||e.get("donor_building_description"),p.materialRemovalToolsEquipment=e.get("material_removal_tools&equipment"),p.materialRemovalPeopleRequired=e.get("material_removal_people"),p.materialRemovalDescription=e.get("material_removal_description"),p.transportationType=e.get("transportation_type"),p.transportationDistance=e.get("transportation_distance"),p.transportationDescription=e.get("transportation_description"),p.testingNumberTested=e.get("testing_number_tested"),p.testingTestingmethod=e.get("testing_method_title"),p.testingMaterialGrade=e.get("testing_material_grade"),p.testingDescription=e.get("testing_method_description"),p.refurbishmentRemanufactureToolsEquipment=e.get("refurbishment_remanufacture_tools_equipment"),p.refurbishmentRemanufactureTimeToRefurbish=e.get("refurbishment_remanufacture_time"),p.refurbishmentRemanufactureDescription=e.get("refurbishment_remanufacture_description"),p.warrantyCertificationCodeCompliance=e.get("warranty_certification_code_compliance"),p.warrantyCertificationInsurance=e.get("warranty_certification_insurance"),p.warrantyCertificationDescription=e.get("warranty_certification_description"),p.resaleReuseSeller=e.get("resale_reuse_seller"),p.resaleReuseBuyer=e.get("resale_reuse_buyer"),p.resaleReuseDescription=e.get("resale_reuse_description");const D=document.getElementsByTagName("impact-card")[0],B=e.get("impact_reuse_options_case_study");if(B){const l=await u.getImpactResueOption(B);D.carbon=l?.get("case_study_emissions"),D.cost=l?.get("reuse_cost_case_study"),D.programme=l?.get("programme_implications")}const _=document.getElementsByTagName("deconstruction-card")[0];_.deconstructionMethod=e.get("deconstruction_method"),_.storageType=e.get("storage_type"),_.storageProtectionNeeds=e.get("storage_protection_needs"),_.storageDistance=e.get("storage_distance_from_site"),_.reclamationRate=e.get("reclamation_rate"),_.quantityOfMaterial=e.get("quantity_of_material"),_.marketExchangePlatform=e.get("marketplace_exchange_platform");const b=document.getElementsByTagName("author-card")[0],E=e.get("authors")?.at(0);if(E){const l=await u.getCaseStudyAuthor(E);b.name=l.get("name"),b.job=l.get("role");const m=l.get("organisation");if(m){const W=await u.getCompany(m);b.company=W?.get("organisation")}b.imageUrl=l.get("profile image")?.at(0)?.url,b.bio=l.get("bio")}else b.classList.add("invisible")}await ie();
