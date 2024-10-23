import{n as r,t as $,G as C,x as p,o as W,D as z}from"./database-DtE2maMk.js";import"./feasibility-considerations-card-BewfwlfK.js";var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,A=(a,i,s,t)=>{for(var e=t>1?void 0:t?K(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(e=(t?l(i,s,e):l(e))||e);return t&&e&&J(i,s,e),e};let M=class extends C{constructor(){super(...arguments),this.items=[]}render(){return p`
        <div class="card mb-5">
            <div class="card-header py-4 bg-brown text-bg-dark">
                <h2 class="fs-5 m-0">Project Team</h2>
            </div>
            <div class="card-body d-flex flex-column">
                <dl class="row row-cols-2 mt-2 mb-2">
                    ${this.items?.map(a=>p`<div class="mb-2">
                                <dt class="text-uppercase text-navy">
                                    ${a.heading}
                                </dt>
                                <dd>
                                    ${a.text}
                                </dd>
                            </div>`)}
                </dl>
            </div>
        </div>
        `}};A([r({type:Array})],M.prototype,"items",2);M=A([$("project-team-card")],M);const L={textToHtml(a){return a&&(Array.isArray(a)&&(a=a.join("<br />")),W(a+""))}};var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,n=(a,i,s,t)=>{for(var e=t>1?void 0:t?X(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(e=(t?l(i,s,e):l(e))||e);return t&&e&&V(i,s,e),e};let o=class extends C{renderRoadmapRow(a,i,s){return i.filter(t=>t.description&&t.description!=="-").length===0&&!s?p``:p`
        <div class="row roadmap__row">
            <div class="col-2 roadmap__circle">
            </div>
            <div class="col-10 row row-cols-1 row-cols-lg-2 pe-0">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-header py-3 bg-primary text-bg-dark text-start">
                            <h2 class="fs-6 m-0">${a}</h2>
                        </div>
                        <div class="card-body d-flex flex-column small py-1">
                            <dl class="row row-cols-1 row-cols-md-2 text-start mb-0">
                                ${i?.map(t=>t.description&&t.description!=="-"?p`
                                    <div>
                                        <dt class="text-uppercase text-navy mb-0">
                                            ${t.heading}
                                        </dt>
                                        <dd class="pb-0">
                                            ${L.textToHtml(t.description)}
                                        </dd>
                                    </div>
                                    `:"")}
                            </dl>
                        </div>
                    </div>
                </div>
                ${s?p`
                    <div class="col mt-2 mt-lg-0 pe-lg-0">
                        <div class="card h-100 border">
                            <div class="card-body d-flex flex-column text-start justify-content-center">
                                <p class="small m-0">
                                    ${L.textToHtml(s)}
                                </p>
                            </div>
                        </div>
                    </div>
                    `:""}
            </div>
        </div>
        `}renderSeparatorRow(){return p`
        <div class="row roadmap__row roadmap__row--seperator">
            <div class="col-12 roadmap__circle">
            </div>
        </div>
        `}render(){const a=[this.renderRoadmapRow("Material Source/Donor Building",[{heading:"Location",description:this.materialSourceLocation||"-"},{heading:"Surveys",description:this.materialSourceSurveys||"-"}],this.materialSourceDescription),this.renderRoadmapRow("Material Removal",[{heading:"Tools & Equipment",description:this.materialRemovalToolsEquipment||"-"},{heading:"People Required",description:this.materialRemovalPeopleRequired||"-"}],this.materialRemovalDescription),this.renderRoadmapRow("Transportation",[{heading:"Type",description:this.transportationType||"-"},{heading:"Distance",description:this.transportationDistance?`${this.transportationDistance} km`:"-"}],this.transportationDescription),this.renderRoadmapRow("Testing",[{heading:"Number Tested",description:this.testingNumberTested||"-"},{heading:"Testing Method",description:this.testingTestingmethod||"-"},{heading:"Material Grade",description:this.testingMaterialGrade||"-"}],this.testingDescription),this.renderRoadmapRow("Refurbishment/Remanufacture",[{heading:"Tools & Equipment",description:this.refurbishmentRemanufactureToolsEquipment||"-"},{heading:"Time To Refurbish",description:this.refurbishmentRemanufactureTimeToRefurbish?`${this.refurbishmentRemanufactureTimeToRefurbish} days`:"-"}],this.refurbishmentRemanufactureDescription),this.renderRoadmapRow("Warranty & Certification",[{heading:"Code Compliance",description:this.warrantyCertificationCodeCompliance||"-"},{heading:"Insurance",description:this.warrantyCertificationInsurance||"-"}],this.warrantyCertificationDescription),this.renderRoadmapRow("Resale/Reuse",[{heading:"Seller",description:this.resaleReuseSeller||"-"},{heading:"Buyer",description:this.resaleReuseBuyer||"-"}],this.resaleReuseDescription)];return p`
        <div class="d-flex flex-column">
            <h3 class="fs-6 text-uppercase">Roadmap</h3>
            <div class="container text-center">
                ${a.filter(i=>i.values.length>0).map((i,s,t)=>p`
                    ${i}
                    ${s<t.length-1?this.renderSeparatorRow():""}
                    `)}
            </div>
        </div>
        `}};n([r({type:String})],o.prototype,"materialSourceLocation",2);n([r({type:String})],o.prototype,"materialSourceSurveys",2);n([r({type:String})],o.prototype,"materialSourceDescription",2);n([r({type:String})],o.prototype,"materialRemovalToolsEquipment",2);n([r({type:String})],o.prototype,"materialRemovalPeopleRequired",2);n([r({type:String})],o.prototype,"materialRemovalDescription",2);n([r({type:String})],o.prototype,"transportationType",2);n([r({type:String})],o.prototype,"transportationDistance",2);n([r({type:String})],o.prototype,"transportationDescription",2);n([r({type:String})],o.prototype,"testingNumberTested",2);n([r({type:String})],o.prototype,"testingTestingmethod",2);n([r({type:String})],o.prototype,"testingMaterialGrade",2);n([r({type:String})],o.prototype,"testingDescription",2);n([r({type:String})],o.prototype,"refurbishmentRemanufactureToolsEquipment",2);n([r({type:String})],o.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);n([r({type:String})],o.prototype,"refurbishmentRemanufactureDescription",2);n([r({type:String})],o.prototype,"warrantyCertificationCodeCompliance",2);n([r({type:String})],o.prototype,"warrantyCertificationInsurance",2);n([r({type:String})],o.prototype,"warrantyCertificationDescription",2);n([r({type:String})],o.prototype,"resaleReuseSeller",2);n([r({type:String})],o.prototype,"resaleReuseBuyer",2);n([r({type:String})],o.prototype,"resaleReuseDescription",2);o=n([$("road-map")],o);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,P=(a,i,s,t)=>{for(var e=t>1?void 0:t?Z(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(e=(t?l(i,s,e):l(e))||e);return t&&e&&Y(i,s,e),e};let D=class extends C{render(){return p`
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
        `}};P([r({type:String})],D.prototype,"carbon",2);P([r({type:Number})],D.prototype,"cost",2);P([r({type:String})],D.prototype,"programme",2);D=P([$("impact-card")],D);var k=Object.defineProperty,j=Object.getOwnPropertyDescriptor,h=(a,i,s,t)=>{for(var e=t>1?void 0:t?j(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(e=(t?l(i,s,e):l(e))||e);return t&&e&&k(i,s,e),e};let y=class extends C{render(){return p`
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
        `}};h([r({type:String})],y.prototype,"deconstructionMethod",2);h([r({type:String})],y.prototype,"storageType",2);h([r({type:String})],y.prototype,"storageDistance",2);h([r({type:String})],y.prototype,"storageProtectionNeeds",2);h([r({type:String})],y.prototype,"reclamationRate",2);h([r({type:String})],y.prototype,"quantityOfMaterial",2);h([r({type:String})],y.prototype,"marketExchangePlatform",2);y=h([$("deconstruction-card")],y);var E=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,R=(a,i,s,t)=>{for(var e=t>1?void 0:t?tt(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(e=(t?l(i,s,e):l(e))||e);return t&&e&&E(i,s,e),e};let _=class extends C{render(){return p`
        <div class="card card--round-img-top-left mb-4">
          <div class="card-header position-relative py-3 bg-primary text-bg-dark d-flex">
            <img class="rounded-circle position-absolute" src="${this.imageUrl||"/images/person.jpg"}" alt="" width="100" height="100" />
            <div>
              <h4 class="fs-5 m-0">${this.name}</h4>
              <p class="card-text">
                ${[this.job,this.company].filter(a=>a).join(" | ")}
              </p>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text mt-3">
              ${this.bio}
            </p>
          </div>
        </div>
        `}};R([r({type:String})],_.prototype,"name",2);R([r({type:String})],_.prototype,"job",2);R([r({type:String})],_.prototype,"company",2);R([r({type:String})],_.prototype,"imageUrl",2);R([r({type:String})],_.prototype,"bio",2);_=R([$("author-card")],_);const u=new z;function et(){const a=new URLSearchParams(window.location.search),i=a.get("id"),s=a.get("componentId");!i||!s||Promise.all([u.getProjectExample(i),u.getComponent(s),u.getCompanies(),u.getDisciplineLayers(),u.getCategories(),u.getComponentTypes()]).then(([t,e,c,l,U,G])=>{const w=document.getElementsByTagName("main-heading")[0];w.link=`/component/?id=${s}`,w.includeUnapprovedData=u.includeUnapprovedData,w.subHeading=[t.get("title"),t.get("project_name"),t.get("description_short")].filter(g=>g).join(" | ");const S=document.createElement("icon-badge");S.text=t.get("case_study_status"),S.icon="check-circle-fill",S.iconColour="#02B8B7",S.lightBackground=!0,w.appendChild(S);const T=document.createElement("icon-badge");T.text=t.get("case_study_value")?.toLocaleString(),T.icon="currency-pound",T.iconColour="red",T.lightBackground=!0,w.appendChild(T);const N=document.getElementById("project-image"),x=t.get("project_example_image")?.at(0)?.url;x?N.src=x:N.classList.add("invisible");const H=document.getElementsByTagName("project-team-card")[0];u.getProjectRoles(t.get("title")).then(g=>{H.items=g?.map(m=>({heading:m.get("role"),text:c.find(B=>B.id==m.get("company"))?.get("organisation")}))});const F=document.getElementsByTagName("tags-list").namedItem("Project Constraints");F.tags=t.get("project_constraints");const Q=document.getElementsByTagName("tags-list").namedItem("Tags"),v=[];v.push(...e.get("discpline_layer")?.map(g=>l.find(m=>m.id===g).get("Name"))),v.push(...e.get("category")?.map(g=>U.find(m=>m.id===g).get("Name"))),v.push(...e.get("component_type")?.map(g=>G.find(m=>m.id===g).get("Name"))),v.push(t.get("storage_type")),v.push(...t.get("marketplace_exchange_platform").filter(g=>g!=="No")),v.push(t.get("Building Age")),Q.tags=v;const q=document.getElementsByTagName("feasibility-considerations-card")[0];q.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage <span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${t.get("RIBA_stage")}</span>`}],q.considerations=[{heading:t.get("key_consideration_1"),description:t.get("solution_1")},{heading:t.get("key_consideration_2"),description:t.get("solution_2")},{heading:t.get("key_consideration_3"),description:t.get("solution_3")},{heading:t.get("key_consideration_4"),description:t.get("solution_4")}];const d=document.getElementsByTagName("road-map")[0];d.materialSourceLocation=t.get("material_source_location")||t.get("donor_building_location"),d.materialSourceSurveys=t.get("material_source_surveys")||t.get("donor_building_surveys"),d.materialSourceLocation=t.get("material_source_description")||t.get("donor_building_description"),d.materialRemovalToolsEquipment=t.get("material_removal_tools&equipment"),d.materialRemovalPeopleRequired=t.get("material_removal_people"),d.materialRemovalDescription=t.get("material_removal_description"),d.transportationType=t.get("transportation_type"),d.transportationDistance=t.get("transportation_distance"),d.transportationDescription=t.get("transportation_description"),d.testingNumberTested=t.get("testing_number_tested"),d.testingTestingmethod=t.get("testing_method_title"),d.testingMaterialGrade=t.get("testing_material_grade"),d.testingDescription=t.get("testing_method_description"),d.refurbishmentRemanufactureToolsEquipment=t.get("refurbishment_remanufacture_tools_equipment"),d.refurbishmentRemanufactureTimeToRefurbish=t.get("refurbishment_remanufacture_time"),d.refurbishmentRemanufactureDescription=t.get("refurbishment_remanufacture_description"),d.warrantyCertificationCodeCompliance=t.get("warranty_certification_code_compliance"),d.warrantyCertificationInsurance=t.get("warranty_certification_insurance"),d.warrantyCertificationDescription=t.get("warranty_certification_description"),d.resaleReuseSeller=t.get("resale_reuse_seller"),d.resaleReuseBuyer=t.get("resale_reuse_buyer"),d.resaleReuseDescription=t.get("resale_reuse_description");const O=document.getElementsByTagName("impact-card")[0];O.carbon=t.get("emissions"),O.cost=t.get("reuse_cost"),O.programme=t.get("programme_implications");const f=document.getElementsByTagName("deconstruction-card")[0];f.deconstructionMethod=t.get("deconstruction_method"),f.storageType=t.get("storage_type"),f.storageProtectionNeeds=t.get("storage_protection_needs"),f.storageDistance=t.get("storage_distance_from_site"),f.reclamationRate=t.get("reclamation_rate"),f.quantityOfMaterial=t.get("quantity_of_material"),f.marketExchangePlatform=t.get("marketplace_exchange_platform");const b=document.getElementsByTagName("author-card")[0],I=t.get("authors")?.at(0);I?u.getUserAuthor(I).then(g=>{b.name=g.get("name"),b.job=g.get("role");const m=g.get("organisation");m&&u.getCompany(m).then(B=>{b.company=B?.get("organisation")}),b.imageUrl=g.get("profile image")?.at(0)?.url,b.bio=g.get("bio")}):b.classList.add("invisible")})}et();
