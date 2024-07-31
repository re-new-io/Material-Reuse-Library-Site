import{n as r,t as S,G as w,x as m,D as G}from"./database-ByIzmupz.js";import"./feasibility-considerations-card-D7x72IoK.js";var U=Object.defineProperty,H=Object.getOwnPropertyDescriptor,O=(o,a,d,e)=>{for(var t=e>1?void 0:e?H(a,d):a,i=o.length-1,s;i>=0;i--)(s=o[i])&&(t=(e?s(a,d,t):s(t))||t);return e&&t&&U(a,d,t),t};let T=class extends w{constructor(){super(...arguments),this.items=[]}render(){return m`
        <div class="card mb-5">
            <div class="card-header py-4 bg-brown text-bg-dark">
                <h2 class="fs-5 m-0">Project Team</h2>
            </div>
            <div class="card-body d-flex flex-column">
                <dl class="row row-cols-2 mt-2 mb-2">
                    ${this.items?.map(o=>m`<div class="mb-2">
                                <dt class="text-uppercase text-navy">
                                    ${o.heading}
                                </dt>
                                <dd>
                                    ${o.text}
                                </dd>
                            </div>`)}
                </dl>
            </div>
        </div>
        `}};O([r({type:Array})],T.prototype,"items",2);T=O([S("project-team-card")],T);var F=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,c=(o,a,d,e)=>{for(var t=e>1?void 0:e?Q(a,d):a,i=o.length-1,s;i>=0;i--)(s=o[i])&&(t=(e?s(a,d,t):s(t))||t);return e&&t&&F(a,d,t),t};let n=class extends w{renderRoadmapRow(o,a,d){return m`
        <div class="row roadmap__row">
            <div class="col-2 roadmap__circle">
            </div>
            <div class="col">
                <div class="card h-100">
                    <div class="card-header py-3 bg-primary text-bg-dark text-start">
                        <h2 class="fs-6 m-0">${o}</h2>
                    </div>
                    <div class="card-body d-flex flex-column small py-1">
                        <dl class="row row-cols-2 text-start mb-0">
                            ${a?.map(e=>m`
                                <div>
                                    <dt class="text-uppercase text-navy mb-0">
                                        ${e.heading}
                                    </dt>
                                    <dd class="pb-0">
                                        ${e.description}
                                    </dd>
                                </div>
                                `)}
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col pe-0">
                <div class="card h-100 border">
                    <div class="card-body d-flex flex-column text-start justify-content-center">
                        <p class="small m-0">
                            ${d}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `}renderSeparatorRow(){return m`
        <div class="row roadmap__row roadmap__row--seperator">
            <div class="col-12 roadmap__circle">
            </div>
        </div>
        `}render(){return m`
        <div class="d-flex flex-column">
            <h3 class="fs-6 text-uppercase">Roadmap</h3>
            <div class="container text-center">            
                ${this.renderRoadmapRow("Material Source/Donor Building",[{heading:"Location",description:this.materialSourceLocation||"-"},{heading:"Surveys",description:this.materialSourceSurveys||"-"}],this.materialSourceDescription)}

                ${this.renderSeparatorRow()}

                ${this.renderRoadmapRow("Material Removal",[{heading:"Tools & Equipment",description:this.materialRemovalToolsEquipment||"-"},{heading:"People Required",description:this.materialRemovalPeopleRequired||"-"}],this.materialRemovalDescription)}

                ${this.renderSeparatorRow()}

                ${this.renderRoadmapRow("Transportation",[{heading:"Type",description:this.transportationType||"-"},{heading:"Distance",description:this.transportationDistance?`${this.transportationDistance} km`:"-"}],this.transportationDescription)}

                ${this.renderSeparatorRow()}

                ${this.renderRoadmapRow("Testing",[{heading:"Number Tested",description:this.testingNumberTested||"-"},{heading:"Testing Method",description:this.testingNumberTested||"-"},{heading:"Material Grade",description:this.testingMaterialGrade||"-"}],this.testingDescription)}

                ${this.renderSeparatorRow()}

                ${this.renderRoadmapRow("Refurbishment/Remanufacture",[{heading:"Tools & Equipment",description:this.refurbishmentRemanufactureToolsEquipment||"-"},{heading:"Time To Refurbish",description:this.refurbishmentRemanufactureTimeToRefurbish||"-"}],this.refurbishmentRemanufactureDescription)}

                ${this.renderSeparatorRow()}

                ${this.renderRoadmapRow("Warranty & Certification",[{heading:"Code Compliance",description:this.warrantyCertificationCodeCompliance||"-"},{heading:"Insurance",description:this.warrantyCertificationInsurance||"-"}],this.warrantyCertificationDescription)}

                ${this.renderSeparatorRow()}

                ${this.renderRoadmapRow("Resale/Reuse",[{heading:"Seller",description:this.resaleReuseSeller||"-"},{heading:"Buyer",description:this.resaleReuseBuyer||"-"}],this.resaleReuseDescription)}
            </div>
        </div>
        `}};c([r({type:String})],n.prototype,"materialSourceLocation",2);c([r({type:String})],n.prototype,"materialSourceSurveys",2);c([r({type:String})],n.prototype,"materialSourceDescription",2);c([r({type:String})],n.prototype,"materialRemovalToolsEquipment",2);c([r({type:String})],n.prototype,"materialRemovalPeopleRequired",2);c([r({type:String})],n.prototype,"materialRemovalDescription",2);c([r({type:String})],n.prototype,"transportationType",2);c([r({type:String})],n.prototype,"transportationDistance",2);c([r({type:String})],n.prototype,"transportationDescription",2);c([r({type:String})],n.prototype,"testingNumberTested",2);c([r({type:String})],n.prototype,"testingTestingmethod",2);c([r({type:String})],n.prototype,"testingMaterialGrade",2);c([r({type:String})],n.prototype,"testingDescription",2);c([r({type:String})],n.prototype,"refurbishmentRemanufactureToolsEquipment",2);c([r({type:String})],n.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);c([r({type:String})],n.prototype,"refurbishmentRemanufactureDescription",2);c([r({type:String})],n.prototype,"warrantyCertificationCodeCompliance",2);c([r({type:String})],n.prototype,"warrantyCertificationInsurance",2);c([r({type:String})],n.prototype,"warrantyCertificationDescription",2);c([r({type:String})],n.prototype,"resaleReuseSeller",2);c([r({type:String})],n.prototype,"resaleReuseBuyer",2);c([r({type:String})],n.prototype,"resaleReuseDescription",2);n=c([S("road-map")],n);var W=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=(o,a,d,e)=>{for(var t=e>1?void 0:e?z(a,d):a,i=o.length-1,s;i>=0;i--)(s=o[i])&&(t=(e?s(a,d,t):s(t))||t);return e&&t&&W(a,d,t),t};let R=class extends w{render(){return m`
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
                    ${this.carbon||"-"}
                </dd>
                </div>
                <div>
                <dt class="text-uppercase text-navy">
                    Cost
                </dt>
                <dd>
                    ${this.cost||"-"}
                </dd>
                </div>
                <div>
                <dt class="text-uppercase text-navy">
                    Programme
                </dt>
                <dd>
                    ${this.programme||"-"}
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
                        <img src="https://placehold.co/500" class="img-fluid rounded" alt="...">
                    </dd>
                    </div>
                </dl>
            </div>
        </div>
        `}};x([r({type:String})],R.prototype,"carbon",2);x([r({type:String})],R.prototype,"cost",2);x([r({type:String})],R.prototype,"programme",2);R=x([S("impact-card")],R);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,y=(o,a,d,e)=>{for(var t=e>1?void 0:e?K(a,d):a,i=o.length-1,s;i>=0;i--)(s=o[i])&&(t=(e?s(a,d,t):s(t))||t);return e&&t&&J(a,d,t),t};let g=class extends w{render(){return m`
        <div class="card mb-5">
          <div class="card-header py-4 bg-secondary text-bg-dark">
            <h2 class="fs-5 m-0">Deconstruction</h2>
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
        `}};y([r({type:String})],g.prototype,"deconstructionMethod",2);y([r({type:String})],g.prototype,"storageType",2);y([r({type:String})],g.prototype,"storageDistance",2);y([r({type:String})],g.prototype,"storageProtectionNeeds",2);y([r({type:String})],g.prototype,"reclamationRate",2);y([r({type:String})],g.prototype,"quantityOfMaterial",2);y([r({type:String})],g.prototype,"marketExchangePlatform",2);g=y([S("deconstruction-card")],g);var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,b=(o,a,d,e)=>{for(var t=e>1?void 0:e?X(a,d):a,i=o.length-1,s;i>=0;i--)(s=o[i])&&(t=(e?s(a,d,t):s(t))||t);return e&&t&&V(a,d,t),t};let v=class extends w{render(){return m`
        <div class="card position-relative mb-4">
          <div class="card-header py-3 bg-primary text-bg-dark d-flex justify-content-end">
            <div class="w-75 ps-3">
              <h4 class="fs-5 m-0">${this.name}</h2>
                <p class="card-text">
                  ${[this.job,this.company].filter(o=>o).join(" | ")}
                </p>
            </div>
          </div>
          <img class="rounded-circle position-absolute top-0 start-0 mt-3 ms-3" src="${this.imageUrl||"/images/person.jpg"}" alt=""
            width="100" height="100" />
          <div class="card-body d-flex flex-column ">
            <p class="card-text mt-5">
              ${this.bio}
            </p>
          </div>
        </div>
        `}};b([r({type:String})],v.prototype,"name",2);b([r({type:String})],v.prototype,"job",2);b([r({type:String})],v.prototype,"company",2);b([r({type:String})],v.prototype,"imageUrl",2);b([r({type:String})],v.prototype,"bio",2);v=b([S("author-card")],v);const _=new G;async function Y(){const o=new URLSearchParams(window.location.search),a=o.get("id"),d=o.get("componentId");if(!a)return;const e=await _.getCaseStudy(a),t=document.getElementsByTagName("main-heading")[0];t.link=`/component/?id=${d}`,t.subHeading=[e.get("title"),e.get("project_name"),e.get("description")].filter(l=>l).join(" | ");const i=document.createElement("icon-badge");i.text=e.get("case_study_status"),i.icon="check-circle-fill",i.iconColour="#02B8B7",i.lightBackground=!0,t.appendChild(i);const s=document.createElement("icon-badge");s.text=e.get("case_study_value"),s.icon="currency-pound",s.iconColour="red",s.lightBackground=!0,t.appendChild(s);const C=document.getElementById("material-reuse-option-image"),D=e.get("case_study_image")?.at(0)?.url;D?C.src=D:C.classList.add("invisible");const B=document.getElementsByTagName("project-team-card")[0],E=await _.getCompanies(),M=await _.getCaseStudyProjectTeams(),q=e.get("case_study_project_team")?.map(l=>M.find(u=>u.id===l));B.items=q?.map(l=>({heading:l.get("role"),text:E.find(u=>u.id==l.get("company (from companies_page)"))?.get("organisation")}));const I=document.getElementsByTagName("tags-list").namedItem("Project Constraints"),N=await _.getCaseStudyProjectConstraints();I.tags=e.get("case_study_project_constraints")?.map(l=>N.find(u=>u.id===l).get("name"));const L=document.getElementsByTagName("tags-list").namedItem("Tags");L.tags=e.get("tags");const P=document.getElementsByTagName("feasibility-considerations-card")[0];P.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage <span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${e.get("RIBA_stage")}</span>`}],P.considerations=[{heading:e.get("feasibility_consideration_1"),description:e.get("solution_1")},{heading:e.get("feasibility_consideration_2"),description:e.get("solution_2")},{heading:e.get("feasibility_consideration_3"),description:e.get("solution_3")}];const p=document.getElementsByTagName("road-map")[0];p.materialSourceLocation=e.get("material_source_location"),p.materialSourceSurveys=e.get("material_source_surveys"),p.materialSourceLocation=e.get("material_source_description"),p.materialRemovalToolsEquipment=e.get("material_removal_tools&equipment"),p.materialRemovalPeopleRequired=e.get("material_removal_people"),p.materialRemovalDescription=e.get("material_removal_description"),p.transportationType=e.get("transportation_type"),p.transportationDistance=e.get("transportation_distance"),p.transportationDescription=e.get("transportation_description"),p.testingNumberTested=e.get("testing_number_tested"),p.testingTestingmethod=e.get("testing_method_title"),p.testingMaterialGrade=e.get("testing_material_grade"),p.testingDescription=e.get("testing_method_description"),p.refurbishmentRemanufactureToolsEquipment=e.get("refurbishment_remanufacture_tools_equipment"),p.refurbishmentRemanufactureTimeToRefurbish=e.get("refurbishment_remanufacture_time"),p.refurbishmentRemanufactureDescription=e.get("refurbishment_remanufacture_description"),p.warrantyCertificationCodeCompliance=e.get("warranty_certification_code_compliance"),p.warrantyCertificationInsurance=e.get("warranty_certification_insurance"),p.warrantyCertificationDescription=e.get("warranty_certification_description"),p.resaleReuseSeller=e.get("resale_reuse_seller"),p.resaleReuseBuyer=e.get("resale_reuse_buyer"),p.resaleReuseDescription=e.get("resale_reuse_description");const $=document.getElementsByTagName("impact-card")[0];$.carbon=e.get(""),$.cost=e.get(""),$.programme=e.get("");const h=document.getElementsByTagName("deconstruction-card")[0];h.deconstructionMethod=e.get("deconstruction_method"),h.storageType=e.get("storage_type"),h.storageProtectionNeeds=e.get("storage_protection_needs"),h.storageDistance=e.get("storage_distance_from_site"),h.reclamationRate=e.get("reclamation_rate"),h.quantityOfMaterial=e.get("quantity_of_material"),h.marketExchangePlatform=e.get("marketplace_exchange_platform");const f=document.getElementsByTagName("author-card")[0],j=e.get("authors")?.at(0);if(j){const l=await _.getCaseStudyAuthor(j);f.name=l.get("name"),f.job=l.get("role");const u=l.get("organisation");if(u){const A=await _.getCompany(u);f.company=A?.get("organisation")}f.imageUrl=l.get("profile image")?.at(0)?.url,f.bio=l.get("bio")}else f.classList.add("invisible")}await Y();
