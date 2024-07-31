import{n as a,t as S,G as w,x as m,D as L}from"./database-DsAmLPVN.js";import"./feasibility-considerations-card-BPKcnTbu.js";var A=Object.defineProperty,G=Object.getOwnPropertyDescriptor,P=(i,r,o,e)=>{for(var t=e>1?void 0:e?G(r,o):r,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=(e?c(r,o,t):c(t))||t);return e&&t&&A(r,o,t),t};let T=class extends w{constructor(){super(...arguments),this.items=[]}render(){return m`
        <div class="card mb-5">
            <div class="card-header py-4 bg-brown text-bg-dark">
                <h2 class="fs-5 m-0">Project Team</h2>
            </div>
            <div class="card-body d-flex flex-column">
                <dl class="row row-cols-2 mt-2 mb-4">
                    ${this.items?.map(i=>m`<div>
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
        `}};P([a({type:Array})],T.prototype,"items",2);T=P([S("project-team-card")],T);var U=Object.defineProperty,H=Object.getOwnPropertyDescriptor,n=(i,r,o,e)=>{for(var t=e>1?void 0:e?H(r,o):r,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=(e?c(r,o,t):c(t))||t);return e&&t&&U(r,o,t),t};let s=class extends w{renderRoadmapRow(i,r,o){return m`
        <div class="row roadmap__row">
            <div class="col-2 roadmap__circle">
            </div>
            <div class="col">
                <div class="card h-100">
                    <div class="card-header py-3 bg-primary text-bg-dark">
                        <h2 class="fs-6 m-0">${i}</h2>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <dl class="row row-cols-2 small">
                            ${r?.map(e=>m`
                                <div>
                                    <dt class="text-uppercase">
                                        ${e.heading}
                                    </dt>
                                    <dd>
                                        ${e.description}
                                    </dd>
                                </div>
                                `)}
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col pe-0">
                <div class="card h-100">
                    <div class="card-body d-flex flex-column">
                        <p class="small m-0">
                            ${o}
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
        `}};n([a({type:String})],s.prototype,"materialSourceLocation",2);n([a({type:String})],s.prototype,"materialSourceSurveys",2);n([a({type:String})],s.prototype,"materialSourceDescription",2);n([a({type:String})],s.prototype,"materialRemovalToolsEquipment",2);n([a({type:String})],s.prototype,"materialRemovalPeopleRequired",2);n([a({type:String})],s.prototype,"materialRemovalDescription",2);n([a({type:String})],s.prototype,"transportationType",2);n([a({type:String})],s.prototype,"transportationDistance",2);n([a({type:String})],s.prototype,"transportationDescription",2);n([a({type:String})],s.prototype,"testingNumberTested",2);n([a({type:String})],s.prototype,"testingTestingmethod",2);n([a({type:String})],s.prototype,"testingMaterialGrade",2);n([a({type:String})],s.prototype,"testingDescription",2);n([a({type:String})],s.prototype,"refurbishmentRemanufactureToolsEquipment",2);n([a({type:String})],s.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);n([a({type:String})],s.prototype,"refurbishmentRemanufactureDescription",2);n([a({type:String})],s.prototype,"warrantyCertificationCodeCompliance",2);n([a({type:String})],s.prototype,"warrantyCertificationInsurance",2);n([a({type:String})],s.prototype,"warrantyCertificationDescription",2);n([a({type:String})],s.prototype,"resaleReuseSeller",2);n([a({type:String})],s.prototype,"resaleReuseBuyer",2);n([a({type:String})],s.prototype,"resaleReuseDescription",2);s=n([S("road-map")],s);var F=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,x=(i,r,o,e)=>{for(var t=e>1?void 0:e?Q(r,o):r,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=(e?c(r,o,t):c(t))||t);return e&&t&&F(r,o,t),t};let R=class extends w{render(){return m`
        <div class="card mb-5">
            <div class="card-header py-4 bg-navy text-bg-dark">
            <h2 class="fs-5 m-0">Impact</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mt-2 mb-4">
                <div>
                <dt class="text-uppercase text-navy">
                    Carbon
                </dt>
                <dd>
                    ${this.carbon}
                </dd>
                </div>
                <div>
                <dt class="text-uppercase text-navy">
                    Cost
                </dt>
                <dd>
                    ${this.cost}
                </dd>
                </div>
                <div>
                <dt class="text-uppercase text-navy">
                    Programme
                </dt>
                <dd>
                    ${this.programme}
                </dd>
                </div>
            </div>
            <div class="card-body d-flex flex-column">
                <dl class="row row-cols-1 mb-4">
                    <div>
                    <dt class="text-uppercase text-navy">
                        Material Pathways | % By Mass
                    </dt>
                    <dd>
                        <img src="https://placehold.co/500" class="img-fluid mb-5" alt="...">
                    </dd>
                    </div>
                </dl>
            </div>
        </div>
        `}};x([a({type:String})],R.prototype,"carbon",2);x([a({type:String})],R.prototype,"cost",2);x([a({type:String})],R.prototype,"programme",2);R=x([S("impact-card")],R);var W=Object.defineProperty,z=Object.getOwnPropertyDescriptor,y=(i,r,o,e)=>{for(var t=e>1?void 0:e?z(r,o):r,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=(e?c(r,o,t):c(t))||t);return e&&t&&W(r,o,t),t};let g=class extends w{render(){return m`
        <div class="card mb-5">
          <div class="card-header py-4 bg-secondary text-bg-dark">
            <h2 class="fs-5 m-0">Deconstruction</h2>
          </div>
          <div class="card-body d-flex flex-column">
            <dl class="row row-cols-2 mt-2 mb-4">
              <div>
                <dt class="text-uppercase text-navy">
                  Method
                </dt>
                <dd>
                  ${this.deconstructionMethod||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Storage Type
                </dt>
                <dd>
                ${this.storageType||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Storage Distance From Site
                </dt>
                <dd>
                ${this.storageDistance?`${this.storageDistance} km`:"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Storage Protection Needs
                </dt>
                <dd>
                ${this.storageProtectionNeeds||"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Reclamation Rate
                </dt>
                <dd>
                ${this.reclamationRate?`${this.reclamationRate}%`:"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Quantity Of Material
                </dt>
                <dd>
                ${this.quantityOfMaterial?`${this.quantityOfMaterial} kg`:"-"}
                </dd>
              </div>
              <div>
                <dt class="text-uppercase text-navy">
                  Marketplace/Exchange Platform
                </dt>
                <dd>
                ${this.marketExchangePlatform||"-"}
                </dd>
              </div>
          </div>
        </div>
        `}};y([a({type:String})],g.prototype,"deconstructionMethod",2);y([a({type:String})],g.prototype,"storageType",2);y([a({type:String})],g.prototype,"storageDistance",2);y([a({type:String})],g.prototype,"storageProtectionNeeds",2);y([a({type:String})],g.prototype,"reclamationRate",2);y([a({type:String})],g.prototype,"quantityOfMaterial",2);y([a({type:String})],g.prototype,"marketExchangePlatform",2);g=y([S("deconstruction-card")],g);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,b=(i,r,o,e)=>{for(var t=e>1?void 0:e?K(r,o):r,d=i.length-1,c;d>=0;d--)(c=i[d])&&(t=(e?c(r,o,t):c(t))||t);return e&&t&&J(r,o,t),t};let v=class extends w{render(){return m`
        <div class="card position-relative mb-4">
          <div class="card-header py-3 bg-primary text-bg-dark d-flex justify-content-end">
            <div class="w-75 ps-3">
              <h4 class="fs-5 m-0">${this.name}</h2>
                <p class="card-text">
                  ${[this.job,this.company].filter(i=>i).join(" | ")}
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
        `}};b([a({type:String})],v.prototype,"name",2);b([a({type:String})],v.prototype,"job",2);b([a({type:String})],v.prototype,"company",2);b([a({type:String})],v.prototype,"imageUrl",2);b([a({type:String})],v.prototype,"bio",2);v=b([S("author-card")],v);const _=new L;async function V(){const i=new URLSearchParams(window.location.search),r=i.get("id"),o=i.get("componentId");if(!r)return;const e=await _.getCaseStudy(r),t=document.getElementsByTagName("main-heading")[0];t.link=`/component/?id=${o}`,t.subHeading=[e.get("title"),e.get("project_name"),e.get("description")].filter(l=>l).join(" | ");const d=document.getElementById("material-reuse-option-image"),c=e.get("case_study_image")?.at(0)?.url;c?d.src=c:d.classList.add("invisible");const j=document.getElementsByTagName("project-team-card")[0],O=await _.getCompanies(),E=await _.getCaseStudyProjectTeams(),M=e.get("case_study_project_team")?.map(l=>E.find(u=>u.id===l));j.items=M?.map(l=>({heading:l.get("role"),text:O.find(u=>u.id==l.get("company (from companies_page)"))?.get("organisation")}));const q=document.getElementsByTagName("tags-list").namedItem("Project Constraints"),B=await _.getCaseStudyProjectConstraints();q.tags=e.get("case_study_project_constraints")?.map(l=>B.find(u=>u.id===l).get("name"));const I=document.getElementsByTagName("tags-list").namedItem("Tags");I.tags=e.get("tags");const D=document.getElementsByTagName("feasibility-considerations-card")[0];D.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage ${e.get("RIBA_stage")}`}],D.considerations=[{heading:e.get("feasibility_consideration_1"),description:e.get("solution_1")},{heading:e.get("feasibility_consideration_2"),description:e.get("solution_2")},{heading:e.get("feasibility_consideration_3"),description:e.get("solution_3")}];const p=document.getElementsByTagName("road-map")[0];p.materialSourceLocation=e.get("material_source_location"),p.materialSourceSurveys=e.get("material_source_surveys"),p.materialSourceLocation=e.get("material_source_description"),p.materialRemovalToolsEquipment=e.get("material_removal_tools&equipment"),p.materialRemovalPeopleRequired=e.get("material_removal_people"),p.materialRemovalDescription=e.get("material_removal_description"),p.transportationType=e.get("transportation_type"),p.transportationDistance=e.get("transportation_distance"),p.transportationDescription=e.get("transportation_description"),p.testingNumberTested=e.get("testing_number_tested"),p.testingTestingmethod=e.get("testing_method_title"),p.testingMaterialGrade=e.get("testing_material_grade"),p.testingDescription=e.get("testing_method_description"),p.refurbishmentRemanufactureToolsEquipment=e.get("refurbishment_remanufacture_tools_equipment"),p.refurbishmentRemanufactureTimeToRefurbish=e.get("refurbishment_remanufacture_time"),p.refurbishmentRemanufactureDescription=e.get("refurbishment_remanufacture_description"),p.warrantyCertificationCodeCompliance=e.get("warranty_certification_code_compliance"),p.warrantyCertificationInsurance=e.get("warranty_certification_insurance"),p.warrantyCertificationDescription=e.get("warranty_certification_description"),p.resaleReuseSeller=e.get("resale_reuse_seller"),p.resaleReuseBuyer=e.get("resale_reuse_buyer"),p.resaleReuseDescription=e.get("resale_reuse_description");const $=document.getElementsByTagName("impact-card")[0];$.carbon=e.get(""),$.cost=e.get(""),$.programme=e.get("");const h=document.getElementsByTagName("deconstruction-card")[0];h.deconstructionMethod=e.get("deconstruction_method"),h.storageType=e.get("storage_type"),h.storageProtectionNeeds=e.get("storage_protection_needs"),h.storageDistance=e.get("storage_distance_from_site"),h.reclamationRate=e.get("reclamation_rate"),h.quantityOfMaterial=e.get("quantity_of_material"),h.marketExchangePlatform=e.get("marketplace_exchange_platform");const f=document.getElementsByTagName("author-card")[0],C=e.get("authors")?.at(0);if(C){const l=await _.getCaseStudyAuthor(C);f.name=l.get("name"),f.job=l.get("role");const u=l.get("organisation");if(u){const N=await _.getCompany(u);f.company=N?.get("organisation")}f.imageUrl=l.get("profile image")?.at(0)?.url,f.bio=l.get("bio")}else f.classList.add("invisible")}await V();
