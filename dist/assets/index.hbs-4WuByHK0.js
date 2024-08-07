import{n as r,t as S,G as x,x as m,o as H,D as U}from"./database-J8XC7L4R.js";import"./feasibility-considerations-card-M_-h2GFU.js";var F=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,B=(i,a,s,e)=>{for(var t=e>1?void 0:e?Q(a,s):a,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(e?n(a,s,t):n(t))||t);return e&&t&&F(a,s,t),t};let C=class extends x{constructor(){super(...arguments),this.items=[]}render(){return m`
        <div class="card mb-5">
            <div class="card-header py-4 bg-brown text-bg-dark">
                <h2 class="fs-5 m-0">Project Team</h2>
            </div>
            <div class="card-body d-flex flex-column">
                <dl class="row row-cols-2 mt-2 mb-2">
                    ${this.items?.map(i=>m`<div class="mb-2">
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
        `}};B([r({type:Array})],C.prototype,"items",2);C=B([S("project-team-card")],C);const O={textToHtml(i){return i&&(Array.isArray(i)&&(i=i.join("<br />")),H(i+""))}};var W=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(i,a,s,e)=>{for(var t=e>1?void 0:e?z(a,s):a,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(e?n(a,s,t):n(t))||t);return e&&t&&W(a,s,t),t};let d=class extends x{renderRoadmapRow(i,a,s){return a.filter(e=>e.description&&e.description!=="-").length===0&&!s?m``:m`
        <div class="row roadmap__row">
            <div class="col-2 roadmap__circle">
            </div>
            <div class="col-5">
                <div class="card h-100">
                    <div class="card-header py-3 bg-primary text-bg-dark text-start">
                        <h2 class="fs-6 m-0">${i}</h2>
                    </div>
                    <div class="card-body d-flex flex-column small py-1">
                        <dl class="row row-cols-2 text-start mb-0">
                            ${a?.map(e=>e.description&&e.description!=="-"?m`
                                <div>
                                    <dt class="text-uppercase text-navy mb-0">
                                        ${e.heading}
                                    </dt>
                                    <dd class="pb-0">
                                        ${O.textToHtml(e.description)}
                                    </dd>
                                </div>
                                `:"")}
                        </dl>
                    </div>
                </div>
            </div>
            ${s?m`
                <div class="col-5 pe-0">
                    <div class="card h-100 border">
                        <div class="card-body d-flex flex-column text-start justify-content-center">
                            <p class="small m-0">
                                ${O.textToHtml(s)}
                            </p>
                        </div>
                    </div>
                </div>
                `:""}
        </div>
        `}renderSeparatorRow(){return m`
        <div class="row roadmap__row roadmap__row--seperator">
            <div class="col-12 roadmap__circle">
            </div>
        </div>
        `}render(){const i=[this.renderRoadmapRow("Material Source/Donor Building",[{heading:"Location",description:this.materialSourceLocation||"-"},{heading:"Surveys",description:this.materialSourceSurveys||"-"}],this.materialSourceDescription),this.renderRoadmapRow("Material Removal",[{heading:"Tools & Equipment",description:this.materialRemovalToolsEquipment||"-"},{heading:"People Required",description:this.materialRemovalPeopleRequired||"-"}],this.materialRemovalDescription),this.renderRoadmapRow("Transportation",[{heading:"Type",description:this.transportationType||"-"},{heading:"Distance",description:this.transportationDistance?`${this.transportationDistance} km`:"-"}],this.transportationDescription),this.renderRoadmapRow("Testing",[{heading:"Number Tested",description:this.testingNumberTested||"-"},{heading:"Testing Method",description:this.testingTestingmethod||"-"},{heading:"Material Grade",description:this.testingMaterialGrade||"-"}],this.testingDescription),this.renderRoadmapRow("Refurbishment/Remanufacture",[{heading:"Tools & Equipment",description:this.refurbishmentRemanufactureToolsEquipment||"-"},{heading:"Time To Refurbish",description:this.refurbishmentRemanufactureTimeToRefurbish?`${this.refurbishmentRemanufactureTimeToRefurbish} days`:"-"}],this.refurbishmentRemanufactureDescription),this.renderRoadmapRow("Warranty & Certification",[{heading:"Code Compliance",description:this.warrantyCertificationCodeCompliance||"-"},{heading:"Insurance",description:this.warrantyCertificationInsurance||"-"}],this.warrantyCertificationDescription),this.renderRoadmapRow("Resale/Reuse",[{heading:"Seller",description:this.resaleReuseSeller||"-"},{heading:"Buyer",description:this.resaleReuseBuyer||"-"}],this.resaleReuseDescription)];return m`
        <div class="d-flex flex-column">
            <h3 class="fs-6 text-uppercase">Roadmap</h3>
            <div class="container text-center">
                ${i.filter(a=>a.values.length>0).map((a,s,e)=>m`
                    ${a}
                    ${s<e.length-1?this.renderSeparatorRow():""}
                    `)}
            </div>
        </div>
        `}};c([r({type:String})],d.prototype,"materialSourceLocation",2);c([r({type:String})],d.prototype,"materialSourceSurveys",2);c([r({type:String})],d.prototype,"materialSourceDescription",2);c([r({type:String})],d.prototype,"materialRemovalToolsEquipment",2);c([r({type:String})],d.prototype,"materialRemovalPeopleRequired",2);c([r({type:String})],d.prototype,"materialRemovalDescription",2);c([r({type:String})],d.prototype,"transportationType",2);c([r({type:String})],d.prototype,"transportationDistance",2);c([r({type:String})],d.prototype,"transportationDescription",2);c([r({type:String})],d.prototype,"testingNumberTested",2);c([r({type:String})],d.prototype,"testingTestingmethod",2);c([r({type:String})],d.prototype,"testingMaterialGrade",2);c([r({type:String})],d.prototype,"testingDescription",2);c([r({type:String})],d.prototype,"refurbishmentRemanufactureToolsEquipment",2);c([r({type:String})],d.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);c([r({type:String})],d.prototype,"refurbishmentRemanufactureDescription",2);c([r({type:String})],d.prototype,"warrantyCertificationCodeCompliance",2);c([r({type:String})],d.prototype,"warrantyCertificationInsurance",2);c([r({type:String})],d.prototype,"warrantyCertificationDescription",2);c([r({type:String})],d.prototype,"resaleReuseSeller",2);c([r({type:String})],d.prototype,"resaleReuseBuyer",2);c([r({type:String})],d.prototype,"resaleReuseDescription",2);d=c([S("road-map")],d);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,w=(i,a,s,e)=>{for(var t=e>1?void 0:e?K(a,s):a,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(e?n(a,s,t):n(t))||t);return e&&t&&J(a,s,t),t};let R=class extends x{render(){return m`
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
                        <img src="https://placehold.co/500x400?text=Material Flow Diagram" class="img-fluid rounded" alt="...">
                    </dd>
                    </div>
                </dl>
            </div>
        </div>
        `}};w([r({type:String})],R.prototype,"carbon",2);w([r({type:String})],R.prototype,"cost",2);w([r({type:String})],R.prototype,"programme",2);R=w([S("impact-card")],R);var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,y=(i,a,s,e)=>{for(var t=e>1?void 0:e?X(a,s):a,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(e?n(a,s,t):n(t))||t);return e&&t&&V(a,s,t),t};let g=class extends x{render(){return m`
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
        `}};y([r({type:String})],g.prototype,"deconstructionMethod",2);y([r({type:String})],g.prototype,"storageType",2);y([r({type:String})],g.prototype,"storageDistance",2);y([r({type:String})],g.prototype,"storageProtectionNeeds",2);y([r({type:String})],g.prototype,"reclamationRate",2);y([r({type:String})],g.prototype,"quantityOfMaterial",2);y([r({type:String})],g.prototype,"marketExchangePlatform",2);g=y([S("deconstruction-card")],g);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,b=(i,a,s,e)=>{for(var t=e>1?void 0:e?Z(a,s):a,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(e?n(a,s,t):n(t))||t);return e&&t&&Y(a,s,t),t};let v=class extends x{render(){return m`
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
        `}};b([r({type:String})],v.prototype,"name",2);b([r({type:String})],v.prototype,"job",2);b([r({type:String})],v.prototype,"company",2);b([r({type:String})],v.prototype,"imageUrl",2);b([r({type:String})],v.prototype,"bio",2);v=b([S("author-card")],v);const _=new U;async function k(){const i=new URLSearchParams(window.location.search),a=i.get("id"),s=i.get("componentId");if(!a)return;const e=await _.getCaseStudy(a),t=document.getElementsByTagName("main-heading")[0];t.link=`/component/?id=${s}`,t.subHeading=[e.get("title"),e.get("project_name"),e.get("description")].filter(l=>l).join(" | ");const o=document.createElement("icon-badge");o.text=e.get("case_study_status"),o.icon="check-circle-fill",o.iconColour="#02B8B7",o.lightBackground=!0,t.appendChild(o);const n=document.createElement("icon-badge");n.text=e.get("case_study_value"),n.icon="currency-pound",n.iconColour="red",n.lightBackground=!0,t.appendChild(n);const D=document.getElementById("project-image"),$=e.get("case_study_image")?.at(0)?.url;$?D.src=$:D.classList.add("invisible");const E=document.getElementsByTagName("project-team-card")[0],M=await _.getCompanies(),q=await _.getCaseStudyProjectTeams(),I=e.get("case_study_project_team")?.map(l=>q.find(u=>u.id===l));E.items=I?.map(l=>({heading:l.get("role"),text:M.find(u=>u.id==l.get("company (from companies_page)"))?.get("organisation")}));const N=document.getElementsByTagName("tags-list").namedItem("Project Constraints"),L=await _.getCaseStudyProjectConstraints();N.tags=e.get("case_study_project_constraints")?.map(l=>L.find(u=>u.id===l).get("name"));const A=document.getElementsByTagName("tags-list").namedItem("Tags");A.tags=e.get("tags");const P=document.getElementsByTagName("feasibility-considerations-card")[0];P.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage <span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${e.get("RIBA_stage")}</span>`}],P.considerations=[{heading:e.get("feasibility_consideration_1"),description:e.get("solution_1")},{heading:e.get("feasibility_consideration_2"),description:e.get("solution_2")},{heading:e.get("feasibility_consideration_3"),description:e.get("solution_3")}];const p=document.getElementsByTagName("road-map")[0];p.materialSourceLocation=e.get("material_source_location")||e.get("donor_building_location"),p.materialSourceSurveys=e.get("material_source_surveys")||e.get("donor_building_surveys"),p.materialSourceLocation=e.get("material_source_description")||e.get("donor_building_description"),p.materialRemovalToolsEquipment=e.get("material_removal_tools&equipment"),p.materialRemovalPeopleRequired=e.get("material_removal_people"),p.materialRemovalDescription=e.get("material_removal_description"),p.transportationType=e.get("transportation_type"),p.transportationDistance=e.get("transportation_distance"),p.transportationDescription=e.get("transportation_description"),p.testingNumberTested=e.get("testing_number_tested"),p.testingTestingmethod=e.get("testing_method_title"),p.testingMaterialGrade=e.get("testing_material_grade"),p.testingDescription=e.get("testing_method_description"),p.refurbishmentRemanufactureToolsEquipment=e.get("refurbishment_remanufacture_tools_equipment"),p.refurbishmentRemanufactureTimeToRefurbish=e.get("refurbishment_remanufacture_time"),p.refurbishmentRemanufactureDescription=e.get("refurbishment_remanufacture_description"),p.warrantyCertificationCodeCompliance=e.get("warranty_certification_code_compliance"),p.warrantyCertificationInsurance=e.get("warranty_certification_insurance"),p.warrantyCertificationDescription=e.get("warranty_certification_description"),p.resaleReuseSeller=e.get("resale_reuse_seller"),p.resaleReuseBuyer=e.get("resale_reuse_buyer"),p.resaleReuseDescription=e.get("resale_reuse_description");const T=document.getElementsByTagName("impact-card")[0];T.carbon=e.get(""),T.cost=e.get(""),T.programme=e.get("");const h=document.getElementsByTagName("deconstruction-card")[0];h.deconstructionMethod=e.get("deconstruction_method"),h.storageType=e.get("storage_type"),h.storageProtectionNeeds=e.get("storage_protection_needs"),h.storageDistance=e.get("storage_distance_from_site"),h.reclamationRate=e.get("reclamation_rate"),h.quantityOfMaterial=e.get("quantity_of_material"),h.marketExchangePlatform=e.get("marketplace_exchange_platform");const f=document.getElementsByTagName("author-card")[0],j=e.get("authors")?.at(0);if(j){const l=await _.getCaseStudyAuthor(j);f.name=l.get("name"),f.job=l.get("role");const u=l.get("organisation");if(u){const G=await _.getCompany(u);f.company=G?.get("organisation")}f.imageUrl=l.get("profile image")?.at(0)?.url,f.bio=l.get("bio")}else f.classList.add("invisible")}await k();
