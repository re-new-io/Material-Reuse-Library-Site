import{n as r,t as S,G as T,x as m,o as Q,D as W}from"./database-BFQwuwAc.js";import"./feasibility-considerations-card-Bv6ss528.js";var z=Object.defineProperty,J=Object.getOwnPropertyDescriptor,M=(i,a,o,e)=>{for(var t=e>1?void 0:e?J(a,o):a,s=i.length-1,n;s>=0;s--)(n=i[s])&&(t=(e?n(a,o,t):n(t))||t);return e&&t&&z(a,o,t),t};let C=class extends T{constructor(){super(...arguments),this.items=[]}render(){return m`
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
        `}};M([r({type:Array})],C.prototype,"items",2);C=M([S("project-team-card")],C);const B={textToHtml(i){return i&&(Array.isArray(i)&&(i=i.join("<br />")),Q(i+""))}};var K=Object.defineProperty,V=Object.getOwnPropertyDescriptor,c=(i,a,o,e)=>{for(var t=e>1?void 0:e?V(a,o):a,s=i.length-1,n;s>=0;s--)(n=i[s])&&(t=(e?n(a,o,t):n(t))||t);return e&&t&&K(a,o,t),t};let d=class extends T{renderRoadmapRow(i,a,o){return a.filter(e=>e.description&&e.description!=="-").length===0&&!o?m``:m`
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
                                ${a?.map(e=>e.description&&e.description!=="-"?m`
                                    <div>
                                        <dt class="text-uppercase text-navy mb-0">
                                            ${e.heading}
                                        </dt>
                                        <dd class="pb-0">
                                            ${B.textToHtml(e.description)}
                                        </dd>
                                    </div>
                                    `:"")}
                            </dl>
                        </div>
                    </div>
                </div>
                ${o?m`
                    <div class="col mt-2 mt-lg-0 pe-lg-0">
                        <div class="card h-100 border">
                            <div class="card-body d-flex flex-column text-start justify-content-center">
                                <p class="small m-0">
                                    ${B.textToHtml(o)}
                                </p>
                            </div>
                        </div>
                    </div>
                    `:""}
            </div>
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
                ${i.filter(a=>a.values.length>0).map((a,o,e)=>m`
                    ${a}
                    ${o<e.length-1?this.renderSeparatorRow():""}
                    `)}
            </div>
        </div>
        `}};c([r({type:String})],d.prototype,"materialSourceLocation",2);c([r({type:String})],d.prototype,"materialSourceSurveys",2);c([r({type:String})],d.prototype,"materialSourceDescription",2);c([r({type:String})],d.prototype,"materialRemovalToolsEquipment",2);c([r({type:String})],d.prototype,"materialRemovalPeopleRequired",2);c([r({type:String})],d.prototype,"materialRemovalDescription",2);c([r({type:String})],d.prototype,"transportationType",2);c([r({type:String})],d.prototype,"transportationDistance",2);c([r({type:String})],d.prototype,"transportationDescription",2);c([r({type:String})],d.prototype,"testingNumberTested",2);c([r({type:String})],d.prototype,"testingTestingmethod",2);c([r({type:String})],d.prototype,"testingMaterialGrade",2);c([r({type:String})],d.prototype,"testingDescription",2);c([r({type:String})],d.prototype,"refurbishmentRemanufactureToolsEquipment",2);c([r({type:String})],d.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);c([r({type:String})],d.prototype,"refurbishmentRemanufactureDescription",2);c([r({type:String})],d.prototype,"warrantyCertificationCodeCompliance",2);c([r({type:String})],d.prototype,"warrantyCertificationInsurance",2);c([r({type:String})],d.prototype,"warrantyCertificationDescription",2);c([r({type:String})],d.prototype,"resaleReuseSeller",2);c([r({type:String})],d.prototype,"resaleReuseBuyer",2);c([r({type:String})],d.prototype,"resaleReuseDescription",2);d=c([S("road-map")],d);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,D=(i,a,o,e)=>{for(var t=e>1?void 0:e?Y(a,o):a,s=i.length-1,n;s>=0;s--)(n=i[s])&&(t=(e?n(a,o,t):n(t))||t);return e&&t&&X(a,o,t),t};let R=class extends T{render(){return m`
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
        `}};D([r({type:String})],R.prototype,"carbon",2);D([r({type:Number})],R.prototype,"cost",2);D([r({type:String})],R.prototype,"programme",2);R=D([S("impact-card")],R);var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,h=(i,a,o,e)=>{for(var t=e>1?void 0:e?k(a,o):a,s=i.length-1,n;s>=0;s--)(n=i[s])&&(t=(e?n(a,o,t):n(t))||t);return e&&t&&Z(a,o,t),t};let y=class extends T{render(){return m`
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
        `}};h([r({type:String})],y.prototype,"deconstructionMethod",2);h([r({type:String})],y.prototype,"storageType",2);h([r({type:String})],y.prototype,"storageDistance",2);h([r({type:String})],y.prototype,"storageProtectionNeeds",2);h([r({type:String})],y.prototype,"reclamationRate",2);h([r({type:String})],y.prototype,"quantityOfMaterial",2);h([r({type:String})],y.prototype,"marketExchangePlatform",2);y=h([S("deconstruction-card")],y);var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,x=(i,a,o,e)=>{for(var t=e>1?void 0:e?te(a,o):a,s=i.length-1,n;s>=0;s--)(n=i[s])&&(t=(e?n(a,o,t):n(t))||t);return e&&t&&ee(a,o,t),t};let _=class extends T{render(){return m`
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
        `}};x([r({type:String})],_.prototype,"name",2);x([r({type:String})],_.prototype,"job",2);x([r({type:String})],_.prototype,"company",2);x([r({type:String})],_.prototype,"imageUrl",2);x([r({type:String})],_.prototype,"bio",2);_=x([S("author-card")],_);const u=new W;async function re(){const i=new URLSearchParams(window.location.search),a=i.get("id"),o=i.get("componentId");if(!a||!o)return;const e=await u.getProjectExample(a),t=await u.getComponent(o),s=document.getElementsByTagName("main-heading")[0];s.link=`/component/?id=${o}`,s.includeUnapprovedData=u.includeUnapprovedData,s.subHeading=[e.get("title"),e.get("project_name"),e.get("description_short")].filter(l=>l).join(" | ");const n=document.createElement("icon-badge");n.text=e.get("case_study_status"),n.icon="check-circle-fill",n.iconColour="#02B8B7",n.lightBackground=!0,s.appendChild(n);const w=document.createElement("icon-badge");w.text=e.get("case_study_value")?.toLocaleString(),w.icon="currency-pound",w.iconColour="red",w.lightBackground=!0,s.appendChild(w);const P=document.getElementById("project-image"),j=e.get("project_example_image")?.at(0)?.url;j?P.src=j:P.classList.add("invisible");const N=document.getElementsByTagName("project-team-card")[0],q=await u.getCompanies(),I=await u.getProjectRoles(e.get("title"));N.items=I?.map(l=>({heading:l.get("role"),text:q.find(g=>g.id==l.get("company"))?.get("organisation")}));const L=document.getElementsByTagName("tags-list").namedItem("Project Constraints");L.tags=e.get("project_constraints");const A=document.getElementsByTagName("tags-list").namedItem("Tags"),v=[],U=await u.getDisciplineLayers();v.push(...t.get("discpline_layer")?.map(l=>U.find(g=>g.id===l).get("Name")));const G=await u.getCategories();v.push(...t.get("category")?.map(l=>G.find(g=>g.id===l).get("Name")));const H=await u.getComponentTypes();v.push(...t.get("component_type")?.map(l=>H.find(g=>g.id===l).get("Name"))),v.push(e.get("storage_type")),v.push(...e.get("marketplace_exchange_platform").filter(l=>l!=="No")),v.push(e.get("Building Age")),A.tags=v;const E=document.getElementsByTagName("feasibility-considerations-card")[0];E.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage <span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${e.get("RIBA_stage")}</span>`}],E.considerations=[{heading:e.get("key_consideration_1"),description:e.get("solution_1")},{heading:e.get("key_consideration_2"),description:e.get("solution_2")},{heading:e.get("key_consideration_3"),description:e.get("solution_3")},{heading:e.get("key_consideration_4"),description:e.get("solution_4")}];const p=document.getElementsByTagName("road-map")[0];p.materialSourceLocation=e.get("material_source_location")||e.get("donor_building_location"),p.materialSourceSurveys=e.get("material_source_surveys")||e.get("donor_building_surveys"),p.materialSourceLocation=e.get("material_source_description")||e.get("donor_building_description"),p.materialRemovalToolsEquipment=e.get("material_removal_tools&equipment"),p.materialRemovalPeopleRequired=e.get("material_removal_people"),p.materialRemovalDescription=e.get("material_removal_description"),p.transportationType=e.get("transportation_type"),p.transportationDistance=e.get("transportation_distance"),p.transportationDescription=e.get("transportation_description"),p.testingNumberTested=e.get("testing_number_tested"),p.testingTestingmethod=e.get("testing_method_title"),p.testingMaterialGrade=e.get("testing_material_grade"),p.testingDescription=e.get("testing_method_description"),p.refurbishmentRemanufactureToolsEquipment=e.get("refurbishment_remanufacture_tools_equipment"),p.refurbishmentRemanufactureTimeToRefurbish=e.get("refurbishment_remanufacture_time"),p.refurbishmentRemanufactureDescription=e.get("refurbishment_remanufacture_description"),p.warrantyCertificationCodeCompliance=e.get("warranty_certification_code_compliance"),p.warrantyCertificationInsurance=e.get("warranty_certification_insurance"),p.warrantyCertificationDescription=e.get("warranty_certification_description"),p.resaleReuseSeller=e.get("resale_reuse_seller"),p.resaleReuseBuyer=e.get("resale_reuse_buyer"),p.resaleReuseDescription=e.get("resale_reuse_description");const $=document.getElementsByTagName("impact-card")[0];$.carbon=e.get("emissions"),$.cost=e.get("reuse_cost"),$.programme=e.get("programme_implications");const f=document.getElementsByTagName("deconstruction-card")[0];f.deconstructionMethod=e.get("deconstruction_method"),f.storageType=e.get("storage_type"),f.storageProtectionNeeds=e.get("storage_protection_needs"),f.storageDistance=e.get("storage_distance_from_site"),f.reclamationRate=e.get("reclamation_rate"),f.quantityOfMaterial=e.get("quantity_of_material"),f.marketExchangePlatform=e.get("marketplace_exchange_platform");const b=document.getElementsByTagName("author-card")[0],O=e.get("authors")?.at(0);if(O){const l=await u.getUserAuthor(O);b.name=l.get("name"),b.job=l.get("role");const g=l.get("organisation");if(g){const F=await u.getCompany(g);b.company=F?.get("organisation")}b.imageUrl=l.get("profile image")?.at(0)?.url,b.bio=l.get("bio")}else b.classList.add("invisible")}await re();
