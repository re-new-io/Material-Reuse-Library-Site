import{n as r,t as $,G as C,x as p,o as W,D as z}from"./database-XkeEppVX.js";import"./feasibility-considerations-card-BgLCPFgq.js";var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,A=(a,i,s,e)=>{for(var t=e>1?void 0:e?K(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(t=(e?l(i,s,t):l(t))||t);return e&&t&&J(i,s,t),t};let N=class extends C{constructor(){super(...arguments),this.items=[]}render(){return p`
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
        `}};A([r({type:Array})],N.prototype,"items",2);N=A([$("project-team-card")],N);const L={textToHtml(a){return a&&(Array.isArray(a)&&(a=a.join("<br />")),W(a+""))}};var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,n=(a,i,s,e)=>{for(var t=e>1?void 0:e?X(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(t=(e?l(i,s,t):l(t))||t);return e&&t&&V(i,s,t),t};let o=class extends C{renderRoadmapRow(a,i,s){return i.filter(e=>e.description&&e.description!=="-").length===0&&!s?p``:p`
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
                                ${i?.map(e=>e.description&&e.description!=="-"?p`
                                    <div>
                                        <dt class="text-uppercase text-navy mb-0">
                                            ${e.heading}
                                        </dt>
                                        <dd class="pb-0">
                                            ${L.textToHtml(e.description)}
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
                ${a.filter(i=>i.values.length>0).map((i,s,e)=>p`
                    ${i}
                    ${s<e.length-1?this.renderSeparatorRow():""}
                    `)}
            </div>
        </div>
        `}};n([r({type:String})],o.prototype,"materialSourceLocation",2);n([r({type:String})],o.prototype,"materialSourceSurveys",2);n([r({type:String})],o.prototype,"materialSourceDescription",2);n([r({type:String})],o.prototype,"materialRemovalToolsEquipment",2);n([r({type:String})],o.prototype,"materialRemovalPeopleRequired",2);n([r({type:String})],o.prototype,"materialRemovalDescription",2);n([r({type:String})],o.prototype,"transportationType",2);n([r({type:String})],o.prototype,"transportationDistance",2);n([r({type:String})],o.prototype,"transportationDescription",2);n([r({type:String})],o.prototype,"testingNumberTested",2);n([r({type:String})],o.prototype,"testingTestingmethod",2);n([r({type:String})],o.prototype,"testingMaterialGrade",2);n([r({type:String})],o.prototype,"testingDescription",2);n([r({type:String})],o.prototype,"refurbishmentRemanufactureToolsEquipment",2);n([r({type:String})],o.prototype,"refurbishmentRemanufactureTimeToRefurbish",2);n([r({type:String})],o.prototype,"refurbishmentRemanufactureDescription",2);n([r({type:String})],o.prototype,"warrantyCertificationCodeCompliance",2);n([r({type:String})],o.prototype,"warrantyCertificationInsurance",2);n([r({type:String})],o.prototype,"warrantyCertificationDescription",2);n([r({type:String})],o.prototype,"resaleReuseSeller",2);n([r({type:String})],o.prototype,"resaleReuseBuyer",2);n([r({type:String})],o.prototype,"resaleReuseDescription",2);o=n([$("road-map")],o);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,P=(a,i,s,e)=>{for(var t=e>1?void 0:e?Z(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(t=(e?l(i,s,t):l(t))||t);return e&&t&&Y(i,s,t),t};let D=class extends C{render(){return p`
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
        `}};P([r({type:String})],D.prototype,"carbon",2);P([r({type:Number})],D.prototype,"cost",2);P([r({type:String})],D.prototype,"programme",2);D=P([$("impact-card")],D);var k=Object.defineProperty,j=Object.getOwnPropertyDescriptor,h=(a,i,s,e)=>{for(var t=e>1?void 0:e?j(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(t=(e?l(i,s,t):l(t))||t);return e&&t&&k(i,s,t),t};let y=class extends C{render(){return p`
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
        `}};h([r({type:String})],y.prototype,"deconstructionMethod",2);h([r({type:String})],y.prototype,"storageType",2);h([r({type:String})],y.prototype,"storageDistance",2);h([r({type:String})],y.prototype,"storageProtectionNeeds",2);h([r({type:String})],y.prototype,"reclamationRate",2);h([r({type:String})],y.prototype,"quantityOfMaterial",2);h([r({type:String})],y.prototype,"marketExchangePlatform",2);y=h([$("deconstruction-card")],y);var E=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,w=(a,i,s,e)=>{for(var t=e>1?void 0:e?ee(i,s):i,c=a.length-1,l;c>=0;c--)(l=a[c])&&(t=(e?l(i,s,t):l(t))||t);return e&&t&&E(i,s,t),t};let f=class extends C{render(){return p`
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
        `}};w([r({type:String})],f.prototype,"name",2);w([r({type:String})],f.prototype,"job",2);w([r({type:String})],f.prototype,"company",2);w([r({type:String})],f.prototype,"imageUrl",2);w([r({type:String})],f.prototype,"bio",2);f=w([$("author-card")],f);const u=new z;function te(){const a=new URLSearchParams(window.location.search),i=a.get("id"),s=a.get("componentId");!i||!s||Promise.all([u.getProjectExample(i),u.getComponent(s,["discpline_layer","category","component_type"]),u.getCompanies(["organisation"]),u.getDisciplineLayers(["Name"]),u.getCategories(["Name"]),u.getComponentTypes(["Name"])]).then(([e,t,c,l,U,G])=>{const b=document.getElementsByTagName("main-heading")[0];b.link=`/component/?id=${s}`,b.includeUnapprovedData=u.includeUnapprovedData,b.subHeading=[e.get("title"),e.get("project_name"),e.get("description_short")].filter(g=>g).join(" | "),b.logoImage=e.get("image_company_logo (from companies_page)")?.at(0)?.url;const S=document.createElement("icon-badge");S.text=e.get("case_study_status"),S.icon="check-circle-fill",S.iconColour="#02B8B7",S.lightBackground=!0,b.appendChild(S);const T=document.createElement("icon-badge");T.text=e.get("case_study_value")?.toLocaleString(),T.icon="currency-pound",T.iconColour="red",T.lightBackground=!0,b.appendChild(T);const M=document.getElementById("project-image"),x=e.get("project_example_image")?.at(0)?.url;x?M.src=x:M.classList.add("invisible");const H=document.getElementsByTagName("project-team-card")[0];u.getProjectRoles(e.get("title")).then(g=>{H.items=g?.map(m=>({heading:m.get("role"),text:c.find(B=>B.id==m.get("company"))?.get("organisation")}))});const F=document.getElementsByTagName("tags-list").namedItem("Project Constraints");F.tags=e.get("project_constraints");const Q=document.getElementsByTagName("tags-list").namedItem("Tags"),v=[];v.push(...t.get("discpline_layer")?.map(g=>l.find(m=>m.id===g).get("Name"))),v.push(...t.get("category")?.map(g=>U.find(m=>m.id===g).get("Name"))),v.push(...t.get("component_type")?.map(g=>G.find(m=>m.id===g).get("Name"))),v.push(e.get("storage_type")),v.push(...e.get("marketplace_exchange_platform").filter(g=>g!=="No")),v.push(e.get("Building Age")),Q.tags=v;const I=document.getElementsByTagName("feasibility-considerations-card")[0];I.metaData=[{heading:"RIBA stage material reuse considerations started at",description:`RIBA Stage <span class="badge round-pill rounded-pill fs-6 text-bg-dark mt-2 me-2">${e.get("RIBA_stage")}</span>`}],I.considerations=[{heading:e.get("key_consideration_1"),description:e.get("solution_1")},{heading:e.get("key_consideration_2"),description:e.get("solution_2")},{heading:e.get("key_consideration_3"),description:e.get("solution_3")},{heading:e.get("key_consideration_4"),description:e.get("solution_4")}];const d=document.getElementsByTagName("road-map")[0];d.materialSourceLocation=e.get("material_source_location")||e.get("donor_building_location"),d.materialSourceSurveys=e.get("material_source_surveys")||e.get("donor_building_surveys"),d.materialSourceLocation=e.get("material_source_description")||e.get("donor_building_description"),d.materialRemovalToolsEquipment=e.get("material_removal_tools&equipment"),d.materialRemovalPeopleRequired=e.get("material_removal_people"),d.materialRemovalDescription=e.get("material_removal_description"),d.transportationType=e.get("transportation_type"),d.transportationDistance=e.get("transportation_distance"),d.transportationDescription=e.get("transportation_description"),d.testingNumberTested=e.get("testing_number_tested"),d.testingTestingmethod=e.get("testing_method_title"),d.testingMaterialGrade=e.get("testing_material_grade"),d.testingDescription=e.get("testing_method_description"),d.refurbishmentRemanufactureToolsEquipment=e.get("refurbishment_remanufacture_tools_equipment"),d.refurbishmentRemanufactureTimeToRefurbish=e.get("refurbishment_remanufacture_time"),d.refurbishmentRemanufactureDescription=e.get("refurbishment_remanufacture_description"),d.warrantyCertificationCodeCompliance=e.get("warranty_certification_code_compliance"),d.warrantyCertificationInsurance=e.get("warranty_certification_insurance"),d.warrantyCertificationDescription=e.get("warranty_certification_description"),d.resaleReuseSeller=e.get("resale_reuse_seller"),d.resaleReuseBuyer=e.get("resale_reuse_buyer"),d.resaleReuseDescription=e.get("resale_reuse_description");const O=document.getElementsByTagName("impact-card")[0];O.carbon=e.get("emissions"),O.cost=e.get("reuse_cost"),O.programme=e.get("programme_implications");const _=document.getElementsByTagName("deconstruction-card")[0];_.deconstructionMethod=e.get("deconstruction_method"),_.storageType=e.get("storage_type"),_.storageProtectionNeeds=e.get("storage_protection_needs"),_.storageDistance=e.get("storage_distance_from_site"),_.reclamationRate=e.get("reclamation_rate"),_.quantityOfMaterial=e.get("quantity_of_material"),_.marketExchangePlatform=e.get("marketplace_exchange_platform");const R=document.getElementsByTagName("author-card")[0],q=e.get("authors")?.at(0);q?u.getUserAuthor(q).then(g=>{R.name=g.get("name"),R.job=g.get("role");const m=g.get("organisation");m&&u.getCompany(m).then(B=>{R.company=B?.get("organisation")}),R.imageUrl=g.get("profile image")?.at(0)?.url,R.bio=g.get("bio")}):R.classList.add("invisible")})}te();
