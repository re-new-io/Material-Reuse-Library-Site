import{n,t as f,G as _,x as d,i as J,D as M}from"./main-BFjwW7uW.js";import"./project-example-card-BNUFkzCC.js";import{o as x}from"./icon-badge-Bk4A7JFt.js";import"./tags-list-Bj3LNUkw.js";import"./square-image-card-MlDb2Qa3.js";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,N=(s,i,t,e)=>{for(var r=e>1?void 0:e?te(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&ee(i,t,r),r};let E=class extends _{render(){return d`
        <h3 class="text-center text-brown mb-3"></h3>
        <div class="card card--round-img-top-right position-relative mb-4">
            <div class="card-header py-3 bg-brown text-bg-dark">
              <h4 class="fs-4 fw-normal m-0">${this.name}</h2>
            </div>
            <div class="card-body">
              ${this.imageUrl?d`<img class="rounded-circle float-end" src="${this.imageUrl}" alt="" width="100" height="100" />`:""}
              <p class="card-text">
                ${this.description}
              </p>
            </div>
        </div>
        `}};N([n({type:String})],E.prototype,"name",2);N([n({type:String})],E.prototype,"imageUrl",2);N([n({type:String})],E.prototype,"description",2);E=N([f("component-variety-type-card")],E);var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,v=(s,i,t,e)=>{for(var r=e>1?void 0:e?ie(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&se(i,t,r),r};let h=class extends _{constructor(){super(...arguments),this.isComponent=!0,this.disciplineLayerIds=[],this.includeUnapprovedData=!1,this.uniclassCodes=[]}render(){return d`
        <div class="card mb-5">
          <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">${this.isComponent?"Component Details":"Material Details"}</h2>
          </div>
          <img src="${this.imageUrl}" alt="" style="width: 100% ;height: 300px;" />
          <div class="card-body d-flex flex-column">     
            <p class="card-text">
              ${this.description}
            </p>
            <hr>
            <h3 class="fs-6 mt-4 text-uppercase">COMPONENT OVERVIEW</h3>
            <dl class="row row-cols-2 mt-2 mb-4">
              <div>
                <dt class="fs-7 mt-1 text-uppercase text-navy">
                  Discipline/Layer
                </dt>
                <dd class="pb-2">
                  ${this._renderDisciplineLayerLinks()}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Design Life <info-tooltip class="ps-2" name="design_life"></info-tooltip>
                </dt>
                <dd class="pb-2">
                  ${this.designLife||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Uniclass Code
                </dt>
                <dd class="pb-2">
                  ${this.uniclassCodes?x(this.uniclassCodes.join("<br />")):"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  NRM Layer
                </dt>
                <dd class="pb-2">
                  ${this.nrmlayer||"-"}
                </dd>
              </div>              
            </dl>
            <h3 class="fs-6 text-uppercase">Geometry <info-tooltip name="geometry_component/material" class="ps-2"></info-tooltip></h3>
            <dl class="row row-cols-2 mt-2 mb-2">
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Length
                </dt>
                <dd class="pb-2">
                  ${this.length||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Width
                </dt>
                <dd class="pb-2">
                  ${this.width||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Height
                </dt>
                <dd class="pb-2">
                  ${this.height||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Mass
                </dt>
                <dd class="pb-2">
                  ${this.mass||"-"}
                </dd>
              </div>
              <div>
                <dt class="fs-7 text-uppercase text-navy">
                  Volume
                </dt>
                <dd class="pb-2">
                  ${this.volume||"-"}
                </dd>
              </div>
              ${this.isComponent?"":d`
                <div>
                  <dt class="fs-7 text-uppercase text-navy">
                    Density
                  </dt>
                  <dd class="pb-2">
                    ${this.density||"-"}
                  </dd>
                </div>
                <div>
                  <dt class="fs-7 text-uppercase text-navy">
                    Material Strength
                  </dt>
                  <dd class="pb-2">
                    ${this.materialStrength||"-"}
                  </dd>
                </div>
                `}
            </dl>
            
          </div>
        </div>
        `}_renderDisciplineLayerLinks(){return!this.disciplineLayer||!this.disciplineLayerIds||this.disciplineLayerIds.length===0?this.disciplineLayer||"-":this.disciplineLayer.split(", ").map((t,e)=>{const r=this.disciplineLayerIds[e];return r?d`
        <a href="/component-materials-library/?discipline=${r}${this.includeUnapprovedData?"&unapproved=1":""}" 
           class="text-primary text-decoration-underline">
          ${t}
        </a>
      `:d`${t}`}).map((t,e)=>e===0?t:d`, ${t}`)}};v([n({type:Boolean})],h.prototype,"isComponent",2);v([n({type:String})],h.prototype,"imageUrl",2);v([n({type:String})],h.prototype,"description",2);v([n({type:String})],h.prototype,"disciplineLayer",2);v([n({type:Array})],h.prototype,"disciplineLayerIds",2);v([n({type:Boolean})],h.prototype,"includeUnapprovedData",2);v([n({type:String})],h.prototype,"nrmlayer",2);v([n({type:Array})],h.prototype,"uniclassCodes",2);v([n({type:String})],h.prototype,"designLife",2);v([n({type:String})],h.prototype,"length",2);v([n({type:String})],h.prototype,"width",2);v([n({type:String})],h.prototype,"height",2);v([n({type:String})],h.prototype,"mass",2);v([n({type:String})],h.prototype,"volume",2);v([n({type:String})],h.prototype,"density",2);v([n({type:String})],h.prototype,"materialStrength",2);v([n({type:Array})],h.prototype,"materials",2);h=v([f("component-material-details-card")],h);var re=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,S=(s,i,t,e)=>{for(var r=e>1?void 0:e?ne(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&re(i,t,r),r};let b=class extends _{constructor(){super(...arguments),this.reclaimPercentage="0"}render(){const s=[this.consideration_1,this.consideration_2,this.consideration_3,this.consideration_4].filter(Boolean),i=s.length>0;return d`
        <div class="card mb-5">
          <div class="card-header py-3 bg-primary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">${this.heading}</h2>
          </div>
          <div class="card-body d-flex flex-column">
            ${i?d`
            <div class="considerations-section mt-3 mb-4">
              <div class="row g-3">
                ${s.map((t,e)=>d`
                  <div class="col-md-6">
                    <div class="consideration-item">
                      <div class="fw-bold mb-1">Consideration ${e+1}:</div>
                      <div>${t}</div>
                    </div>
                  </div>
                `)}
              </div>
            </div>
            `:""}
            
            <div class="row mb-3 g-1 align-items-center">
              <div class="col-md-4">
                <span class="fs-6 text-uppercase">Average % that can be reclaimed on site: </span>
              </div>
              <div class="col-md-3">
                <span class="fs-4 fw-bold">${this.reclaimPercentage}</span>
              </div> 
              <div class="col-md-5">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        `}};b.styles=[..._.styles,J`
        .consideration-item {
          height: 100%;
          margin-bottom: 1rem;
        }
      `];S([n({type:String})],b.prototype,"heading",2);S([n({type:String})],b.prototype,"consideration_1",2);S([n({type:String})],b.prototype,"consideration_2",2);S([n({type:String})],b.prototype,"consideration_3",2);S([n({type:String})],b.prototype,"consideration_4",2);S([n({type:String})],b.prototype,"reclaimPercentage",2);b=S([f("feasibility-considerations-card-components")],b);var oe=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,O=(s,i,t,e)=>{for(var r=e>1?void 0:e?ae(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&oe(i,t,r),r};let R=class extends _{render(){return d`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Cost and Availability</span><info-tooltip class="ms-auto" name="cost_availability" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <h3 class="fs-6 text-uppercase mb-3">Reclaimed</h3>
                        <p class="mb-5">${this.description_reclaimed}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <h3 class="fs-6 text-uppercase mb-3">New</h3>
                        <p class="mb-5">${this.description_new}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <p>${this.price_reclaimed}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <p>${this.price_new}</p>
                    </div>
                </div>
            </div>
        </div>
        `}};O([n({type:String})],R.prototype,"description_reclaimed",2);O([n({type:String})],R.prototype,"price_reclaimed",2);O([n({type:String})],R.prototype,"description_new",2);O([n({type:String})],R.prototype,"price_new",2);R=O([f("cost-availability-card")],R);var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,P=(s,i,t,e)=>{for(var r=e>1?void 0:e?de(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&ce(i,t,r),r};let T=class extends _{render(){return d`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Environmental Impact</span><info-tooltip class="ms-auto" name="environmental_impact" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <h3 class="fs-6 text-uppercase mb-3">Reclaimed</h3>
                        <p class="mb-5">${this.description_reclaimed}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <h3 class="fs-6 text-uppercase mb-3">New</h3>
                        <p class="mb-5">${this.description_new}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <h3 class="fs-6 text-uppercase mb-3">EPD Links</h3>
                        <p>${this.epd_reclaimed}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <h3 class="fs-6 text-uppercase mb-3">EPD Links</h3>
                        <p>${this.epd_new}</p>
                    </div>
                </div>
            </div>
        </div>
        `}};P([n({type:String})],T.prototype,"description_reclaimed",2);P([n({type:String})],T.prototype,"epd_reclaimed",2);P([n({type:String})],T.prototype,"description_new",2);P([n({type:String})],T.prototype,"epd_new",2);T=P([f("environmental-impact-card")],T);var le=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,V=(s,i,t,e)=>{for(var r=e>1?void 0:e?pe(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&le(i,t,r),r};let I=class extends _{constructor(){super(...arguments),this.items=[],this.averageReclamationRate=""}render(){return d`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex">
                <span class="pe-1">Reclamation Process</span>
              </h2>
            </div>
             ${this.averageReclamationRate?d`
            <div class="card-body d-flex flex-column" style="padding-bottom: 0.5rem;"> <!-- Adjust padding -->
             <dl class="row row-cols-2 mb-1">
              <div class="mt-2">
                <dt class="fs-7 text-uppercase text-navy">
                  Average Reclamation Rate
                </dt>
                 <dd style="font-size: 1.5rem; margin-bottom: 0;"> <!-- Adjust the font size as needed -->
                  ${this.averageReclamationRate}
                </dd>
              </div>
             </dl>
            </div>
            `:""}

            <div class="card-body d-flex flex-column" style="padding-top: 0;"> 
            <dl class="row row-cols-2 mb-4">
             
              ${this.items?.filter(s=>s.description?.length>0).map(s=>d`
                <div class="mt-2">
                  <dt class="fs-7 text-uppercase text-navy">
                    ${s.heading}
                  </dt>
                  <dd>
                    ${s.description}
                  </dd>
                </div>
                `)}
            </dl>
            </div>
        </div>
        `}};V([n({type:Array})],I.prototype,"items",2);V([n({type:String})],I.prototype,"averageReclamationRate",2);I=V([f("reclamation-process-card")],I);var ge=Object.defineProperty,me=Object.getOwnPropertyDescriptor,F=(s,i,t,e)=>{for(var r=e>1?void 0:e?me(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&ge(i,t,r),r};let q=class extends _{constructor(){super(...arguments),this.items=[]}render(){const s=this.items?.filter(i=>i);return d`
        <div class="card mb-5">
            <div class="card-header py-3 bg-secondary text-bg-dark">
            <h2 class="fs-4 fw-normal m-0">Key Features & Suitability</h2>
            </div>
            <div class="card-body d-flex flex-column">
            ${s?.length>0?d`
            <ul class="list-arrow-down row row-cols-2 mx-0 ps-0 mt-2 text-gray-100">
                ${s?.map(i=>d`
                <li class="mb-2">
                    ${x(i)}
                </li>
                `)}
            </ul>`:""}
            </div>
        </div>
        `}};F([n({type:Array})],q.prototype,"items",2);q=F([f("features-suitability-card")],q);var ye=Object.defineProperty,he=Object.getOwnPropertyDescriptor,$=(s,i,t,e)=>{for(var r=e>1?void 0:e?he(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&ye(i,t,r),r};let D=class extends _{render(){return d`
        <div class="card mb-5">
            <div class="card-header py-3 bg-navy text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Technical Design Considerations</span><info-tooltip class="ms-auto" name="technical_design_considerations" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <p class="mb-5">${this.t_1}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <p class="mb-5">${this.t_2}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <p>${this.t_3}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <p>${this.t_4}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <p>${this.t_5}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <p>${this.t_6}</p>
                    </div>
                </div>
            </div>
        </div>
        `}};$([n({type:String})],D.prototype,"t_1",2);$([n({type:String})],D.prototype,"t_2",2);$([n({type:String})],D.prototype,"t_3",2);$([n({type:String})],D.prototype,"t_4",2);$([n({type:String})],D.prototype,"t_5",2);$([n({type:String})],D.prototype,"t_6",2);D=$([f("technical-design-card")],D);var ve=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,A=(s,i,t,e)=>{for(var r=e>1?void 0:e?ue(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&ve(i,t,r),r};let L=class extends _{render(){return d`
        <div class="card mb-3">
            <div class="card-header py-3 bg-primary">
            <h2 class="fs-4 fw-normal m-0">References</h2>
            </div>
            <div class="card-body d-flex flex-column">
            <dl class="row row-cols-1 mt-2 mb-4">
              <div class="mb-3">
                <dt class="fs-6 text-uppercase">
                  Collaborators
                </dt>
                <dd class="mt-2">
                  ${this.collaborators&&this.collaborators.length>0?this.collaborators.join(", "):"-"}
                </dd>
              </div>
              <div class="mb-3">
                <dt class="fs-6 text-uppercase">
                  Companies
                </dt>
                <dd class="mt-2">
                  ${this.companyLogos&&this.companyLogos.length>0?x(this.companyLogos.map(s=>`<img src="${s}" alt="" height="50" />`).join("")):"-"}
                </dd>
              </div>
              <div class="mb-3">
                <dt class="fs-6 text-uppercase">
                  Text References
                </dt>
                <dd class="mt-2">
                  ${this.textReferences??"-"}
                </dd>
              </div>
              <div class="mb-5">
                <dt class="fs-6 text-uppercase">
                  Online References
                </dt>
                <dd class="mt-2">
                  ${this.onlineReferences&&this.onlineReferences.length>0?x(this.onlineReferences.map(s=>`<p class="mb-3"><a href="${s}">${s}</a>`).join("<br />")):"-"}
                </dd>
              </div>
            </dl>
            </div>
        </div>
        `}};A([n({type:Array})],L.prototype,"collaborators",2);A([n({type:Array})],L.prototype,"companyLogos",2);A([n({type:String})],L.prototype,"textReferences",2);A([n({type:Array})],L.prototype,"onlineReferences",2);L=A([f("references-card")],L);var _e=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,Z=(s,i,t,e)=>{for(var r=e>1?void 0:e?fe(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&_e(i,t,r),r};let j=class extends _{render(){return d`
        <div class="card mb-5">
            <div class="card-header py-3 bg-brown text-bg-dark">
            <h2 class="fs-4 fw-normal m-0 d-flex"><span class="pe-1">Risk</span><info-tooltip class="ms-auto" name="risk" transparentBackground="true"></info-tooltip></h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6 pe-3 border-end">
                        <h3 class="fs-6 text-uppercase mb-3">Reclaimed</h3>
                        <p class="mb-5">${this.description_reclaimed}</p>
                    </div>
                    <div class="col-6 ps-3">
                        <h3 class="fs-6 text-uppercase mb-3">New</h3>
                        <p class="mb-5">${this.description_new}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `}};Z([n({type:String})],j.prototype,"description_reclaimed",2);Z([n({type:String})],j.prototype,"description_new",2);j=Z([f("risk-card")],j);const z={textToHtml(s){return s&&(Array.isArray(s)&&(s=s.join("<br />")),x(s+""))}};var Ce=Object.defineProperty,be=Object.getOwnPropertyDescriptor,m=(s,i,t,e)=>{for(var r=e>1?void 0:e?be(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&Ce(i,t,r),r};let g=class extends _{constructor(){super(...arguments),this.expertFinderUrl="#",this.showExpertFinder=!0}formatValues(s){return s?String(s).split(",").map(i=>i.trim()).filter(i=>i.length>0):[]}firstUpdated(){setTimeout(()=>this.adjustVerticalLine(),0),window.addEventListener("resize",()=>this.adjustVerticalLine())}adjustVerticalLine(){const s=this.shadowRoot?.querySelector(".roadmap-container");if(!s)return;const i=s.querySelectorAll(".roadmap-step");if(i.length===0)return;const e=i[i.length-1].getBoundingClientRect().top,r=s.getBoundingClientRect().top,o=e-r,c=document.createElement("style");c.textContent=`
      :host .roadmap-container::before {
        height: ${o}px;
      }
    `;const y=this.shadowRoot?.querySelector("style[data-vertical-line]");y&&y.remove(),c.setAttribute("data-vertical-line",""),this.shadowRoot?.appendChild(c)}renderRoadmapStep(s,i,t,e=[]){return d`
    
        <div class="roadmap-step">
            <div class="roadmap-timeline">
                <div class="roadmap-circle"></div>
                
                <div class="horizontal-connector"></div>
                ${s==="Storage"?"":d`
                <div class="arrow-circle ${s==="Warranty & Insurance"?"warranty-arrow":""}">
                    <span class="arrow-down">⮟</span>
                </div>
              `}
            </div>
            <div class="roadmap-content">
                            <div class="roadmap-header">
                                <div class="roadmap-title">${s}</div>
                                 ${this.showExpertFinder?d`
                                      <a href="${this.expertFinderUrl}" class="roadmap-expert-btn">FIND AN EXPERT</a>
                                  `:""}
                            </div>
                            <div class="roadmap-body">
                                <div class="roadmap-description">
                                    ${z.textToHtml(i)}
                                </div>
                                <div class="roadmap-details">
                                    ${t?d`
                                        <div class="roadmap-detail">
                                            <div class="roadmap-detail-label">DONE BY:</div>
                                            ${this.formatValues(t).map(o=>d`<div class="roadmap-detail-value">${o}</div>`)}
                                        </div>
                                    `:""}
                                    ${e.map(o=>o.value?d`
                                        <div class="roadmap-detail">
                                            <div class="roadmap-detail-label">${o.label}:</div>
                                            ${this.formatValues(o.value).map(c=>d`<div class="roadmap-detail-value">${c}</div>`)}
                                        </div>
                                    `:"")}
                                </div>
                            </div>
                        </div>
                    </div>
                `}render(){return d`
        <div class="roadmap-container">
            ${this.assessmentDescription?this.renderRoadmapStep("Assessment",this.assessmentDescription||"",this.assessmentDoneBy,[]):""}
            
            ${this.deconstructionDescription?this.renderRoadmapStep("Deconstruction",this.deconstructionDescription||"",this.deconstructionDoneBy,[{label:"TOOLS & EQUIPMENT",value:this.deconstructionToolsEquipment||""},{label:"LABOUR",value:this.deconstructionLabour||""}]):""}
            
            ${this.sortingDescription?this.renderRoadmapStep("Sorting & Packaging",this.sortingDescription||"",this.sortingDoneBy,[{label:"TOOLS & EQUIPMENT",value:this.sortingToolsEquipment||""},{label:"MATERIAL",value:this.sortingMaterial||""}]):""}
            
            ${this.transportationDescription?this.renderRoadmapStep("Transportation",this.transportationDescription||"",this.transportationDoneBy,[{label:"TYPE OF TRANSPORT",value:this.transportationType||""}]):""}
            
            ${this.testingDescription?this.renderRoadmapStep("Testing",this.testingDescription||"",this.testingDoneBy,[{label:"TESTING METHOD",value:this.testingMethod||""},{label:"CODES & STANDARDS",value:this.testingCodes||""}]):""}
            ${this.cleaningDescription?this.renderRoadmapStep("Cleaning",this.cleaningDescription||"",this.cleaningDoneBy,[{label:"TOOLS & EQUIPMENT",value:this.cleaningToolsEquipment||""}]):""}
            ${this.refurbishmentDescription?this.renderRoadmapStep("Refurbishment/Remanufacture",this.refurbishmentDescription||"",this.refurbishmentDoneBy,[{label:"TOOLS & EQUIPMENT",value:this.refurbishmentToolsEquipment||""},{label:"TIME",value:this.refurbishmentTime||""}]):""}
            ${this.warrantyDescription?this.renderRoadmapStep("Warranty & Insurance",this.warrantyDescription||"",this.warrantyDoneBy,[]):""}
            ${this.storageDescription?this.renderRoadmapStep("Storage",this.storageDescription||"",this.storageDoneBy,[]):""}
        </div>
        `}};g.styles=[..._.styles];m([n({type:String})],g.prototype,"assessmentDescription",2);m([n({type:String})],g.prototype,"assessmentDoneBy",2);m([n({type:String})],g.prototype,"deconstructionDescription",2);m([n({type:String})],g.prototype,"deconstructionDoneBy",2);m([n({type:String})],g.prototype,"deconstructionToolsEquipment",2);m([n({type:String})],g.prototype,"deconstructionLabour",2);m([n({type:String})],g.prototype,"sortingDescription",2);m([n({type:String})],g.prototype,"sortingDoneBy",2);m([n({type:String})],g.prototype,"sortingToolsEquipment",2);m([n({type:String})],g.prototype,"sortingMaterial",2);m([n({type:String})],g.prototype,"transportationDescription",2);m([n({type:String})],g.prototype,"transportationDoneBy",2);m([n({type:String})],g.prototype,"transportationType",2);m([n({type:String})],g.prototype,"testingDescription",2);m([n({type:String})],g.prototype,"testingDoneBy",2);m([n({type:String})],g.prototype,"testingMethod",2);m([n({type:String})],g.prototype,"testingCodes",2);m([n({type:String})],g.prototype,"cleaningDescription",2);m([n({type:String})],g.prototype,"cleaningDoneBy",2);m([n({type:String})],g.prototype,"cleaningToolsEquipment",2);m([n({type:String})],g.prototype,"refurbishmentDescription",2);m([n({type:String})],g.prototype,"refurbishmentDoneBy",2);m([n({type:String})],g.prototype,"refurbishmentToolsEquipment",2);m([n({type:String})],g.prototype,"refurbishmentTime",2);m([n({type:String})],g.prototype,"warrantyDescription",2);m([n({type:String})],g.prototype,"warrantyDoneBy",2);m([n({type:String})],g.prototype,"storageDescription",2);m([n({type:String})],g.prototype,"storageDoneBy",2);m([n({type:String})],g.prototype,"expertFinderUrl",2);m([n({type:Boolean})],g.prototype,"showExpertFinder",2);g=m([f("road-map-design-component")],g);var we=Object.defineProperty,De=Object.getOwnPropertyDescriptor,w=(s,i,t,e)=>{for(var r=e>1?void 0:e?De(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&we(i,t,r),r};let C=class extends _{render(){return d`
            <div class="card shadow-sm" style="border: 1px solid #D9D9D9; border-radius: 8px; position: relative; font-size: 1rem; width: 150px; width: 100%;">
                <div class="position-absolute bg-white pb-1" style="right: -25px; top: 50%; transform: translateY(-50%) rotate(90deg); color: #4d4d4d; font-weight: bold; font-size: 6pt; text-transform: uppercase; padding: 7px;">
                     MODEL ${this.model_id} 
                </div>
                <div class="p-2">
                    <!-- Owner 1 - CLIENT -->
                    <div class="mb-2">
                    <span class="fs-7 ms-2">OWNER 1 - ${this.client}</span>
                        
                        <div class="text-center col">
                        <div class="d-flex justify-content-center align-items-center mb-1">
                            <svg width="20" height="12" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7081 2.19804C29.8823 2.19963 30.9413 2.94024 31.3888 4.07576C31.8379 5.20969 31.5891 6.51488 30.7577 7.38236C29.9263 8.25143 28.6762 8.50993 27.5915 8.03893C26.5067 7.56953 25.7997 6.46255 25.7997 5.23507C25.7997 4.42783 26.1062 3.65551 26.6509 3.08615C27.197 2.51524 27.9374 2.19646 28.7081 2.19804ZM17.4997 20C16.3694 20 12.4856 19.7082 10.5787 18.6758C9.56825 18.1318 9.51061 17.8638 9.51061 16.7996V16.8012C9.51061 13.8181 11.0338 11.0601 13.5052 9.56969C15.9766 8.07734 19.0229 8.07734 21.4942 9.56969C23.9656 11.0605 25.4888 13.8184 25.4888 16.8012C25.4888 17.8479 25.4311 18.1334 24.4207 18.6774C22.5137 19.7082 18.6299 20 17.4997 20ZM17.4997 0.00158591C18.9926 0.00158591 20.3367 0.940443 20.9087 2.38204C21.4791 3.82364 21.1635 5.48248 20.1091 6.58487C19.0532 7.68869 17.4663 8.01851 16.0874 7.42223C14.7098 6.82433 13.8102 5.41765 13.8102 3.85872C13.8102 1.72884 15.4622 0.00158591 17.4997 0.00158591ZM6.29129 17.808C7.13937 17.808 7.98744 17.7462 8.82791 17.6257C8.79301 17.3561 8.77633 17.0849 8.78088 16.8137C8.78088 14.622 9.53943 12.5049 10.917 10.8537C9.76854 9.54853 8.16645 8.7825 6.47038 8.73017C4.77574 8.67942 3.13267 9.34549 1.91462 10.5778C0.696374 11.81 0.0045441 13.5053 0 15.2783C0 16.0903 0.0424815 16.325 0.843533 16.7564C2.34247 17.5684 5.4024 17.8316 6.28092 17.7952L6.29129 17.808ZM28.7085 17.808C29.5975 17.8445 32.6591 17.5813 34.1459 16.7693C34.9772 16.3379 35 16.1143 35 15.2785C34.9924 13.5102 34.3021 11.8212 33.0884 10.5905C31.8732 9.35987 30.2362 8.69218 28.5447 8.73976C26.8546 8.78734 25.2525 9.54541 24.1023 10.8411C25.4799 12.4936 26.2385 14.6092 26.2385 16.8011C26.2415 17.0723 26.2263 17.3434 26.1914 17.613C27.0319 17.7336 27.88 17.7954 28.7281 17.7954L28.7085 17.808ZM6.29129 2.19804C7.46553 2.19804 8.52602 2.93707 8.97511 4.07259C9.42416 5.20653 9.17688 6.5133 8.3455 7.38236C7.51412 8.24985 6.2655 8.50993 5.17926 8.04052C4.09451 7.56949 3.38601 6.46255 3.38601 5.23503C3.38601 4.42938 3.69247 3.65706 4.23712 3.08769C4.78175 2.51679 5.52058 2.19804 6.29129 2.19804Z" fill="#C35C24"/>
                            </svg>
                            </div>
                            <div class="text-uppercase fw-bold" style="color: #C35C24; font-size: 0.4rem;">${this.clientAction}</div>
                            <svg width="8" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-1">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9978 0H0.0234375V12.5227L0 12.5227L5.98972 19L12 12.5227L11.9978 12.5227V0Z" fill="#02B8B7"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Owner 2 - CONTRACTOR -->
                    <div class="mb-2">
                    <span class="fs-7 ms-2" style="font-size: 0.5rem;">OWNER 2 - ${this.contractor}</span>
                        
                        <div class="text-center">
                        <div class="d-flex justify-content-center align-items-center mb-1">
                            <svg width="18" height="10" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7081 2.19804C29.8823 2.19963 30.9413 2.94024 31.3888 4.07576C31.8379 5.20969 31.5891 6.51488 30.7577 7.38236C29.9263 8.25143 28.6762 8.50993 27.5915 8.03893C26.5067 7.56953 25.7997 6.46255 25.7997 5.23507C25.7997 4.42783 26.1062 3.65551 26.6509 3.08615C27.197 2.51524 27.9374 2.19646 28.7081 2.19804ZM17.4997 20C16.3694 20 12.4856 19.7082 10.5787 18.6758C9.56825 18.1318 9.51061 17.8638 9.51061 16.7996V16.8012C9.51061 13.8181 11.0338 11.0601 13.5052 9.56969C15.9766 8.07734 19.0229 8.07734 21.4942 9.56969C23.9656 11.0605 25.4888 13.8184 25.4888 16.8012C25.4888 17.8479 25.4311 18.1334 24.4207 18.6774C22.5137 19.7082 18.6299 20 17.4997 20ZM17.4997 0.00158591C18.9926 0.00158591 20.3367 0.940443 20.9087 2.38204C21.4791 3.82364 21.1635 5.48248 20.1091 6.58487C19.0532 7.68869 17.4663 8.01851 16.0874 7.42223C14.7098 6.82433 13.8102 5.41765 13.8102 3.85872C13.8102 1.72884 15.4622 0.00158591 17.4997 0.00158591ZM6.29129 17.808C7.13937 17.808 7.98744 17.7462 8.82791 17.6257C8.79301 17.3561 8.77633 17.0849 8.78088 16.8137C8.78088 14.622 9.53943 12.5049 10.917 10.8537C9.76854 9.54853 8.16645 8.7825 6.47038 8.73017C4.77574 8.67942 3.13267 9.34549 1.91462 10.5778C0.696374 11.81 0.0045441 13.5053 0 15.2783C0 16.0903 0.0424815 16.325 0.843533 16.7564C2.34247 17.5684 5.4024 17.8316 6.28092 17.7952L6.29129 17.808ZM28.7085 17.808C29.5975 17.8445 32.6591 17.5813 34.1459 16.7693C34.9772 16.3379 35 16.1143 35 15.2785C34.9924 13.5102 34.3021 11.8212 33.0884 10.5905C31.8732 9.35987 30.2362 8.69218 28.5447 8.73976C26.8546 8.78734 25.2525 9.54541 24.1023 10.8411C25.4799 12.4936 26.2385 14.6092 26.2385 16.8011C26.2415 17.0723 26.2263 17.3434 26.1914 17.613C27.0319 17.7336 27.88 17.7954 28.7281 17.7954L28.7085 17.808ZM6.29129 2.19804C7.46553 2.19804 8.52602 2.93707 8.97511 4.07259C9.42416 5.20653 9.17688 6.5133 8.3455 7.38236C7.51412 8.24985 6.2655 8.50993 5.17926 8.04052C4.09451 7.56949 3.38601 6.46255 3.38601 5.23503C3.38601 4.42938 3.69247 3.65706 4.23712 3.08769C4.78175 2.51679 5.52058 2.19804 6.29129 2.19804Z" fill="#C35C24"/>
                            </svg>
                            </div>
                            ${this.newClient?d`
                            <div class="text-uppercase fw-bold" style="color: #C35C24; font-size: 0.4rem;">${this.contractorAction}</div>
                            <svg width="8" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-1">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9978 0H0.0234375V12.5227L0 12.5227L5.98972 19L12 12.5227L11.9978 12.5227V0Z" fill="#02B8B7"/>
                            </svg>
                        </div>
                    </div>
                    <div class="mb-2">
                    <span class="fs-7 ms-2" style="font-size: 0.5rem;">OWNER 2 - ${this.newClient}</span>
                        
                        <div class="text-center">
                        <div class="d-flex justify-content-center align-items-center mb-1">
                            <svg width="18" height="10" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7081 2.19804C29.8823 2.19963 30.9413 2.94024 31.3888 4.07576C31.8379 5.20969 31.5891 6.51488 30.7577 7.38236C29.9263 8.25143 28.6762 8.50993 27.5915 8.03893C26.5067 7.56953 25.7997 6.46255 25.7997 5.23507C25.7997 4.42783 26.1062 3.65551 26.6509 3.08615C27.197 2.51524 27.9374 2.19646 28.7081 2.19804ZM17.4997 20C16.3694 20 12.4856 19.7082 10.5787 18.6758C9.56825 18.1318 9.51061 17.8638 9.51061 16.7996V16.8012C9.51061 13.8181 11.0338 11.0601 13.5052 9.56969C15.9766 8.07734 19.0229 8.07734 21.4942 9.56969C23.9656 11.0605 25.4888 13.8184 25.4888 16.8012C25.4888 17.8479 25.4311 18.1334 24.4207 18.6774C22.5137 19.7082 18.6299 20 17.4997 20ZM17.4997 0.00158591C18.9926 0.00158591 20.3367 0.940443 20.9087 2.38204C21.4791 3.82364 21.1635 5.48248 20.1091 6.58487C19.0532 7.68869 17.4663 8.01851 16.0874 7.42223C14.7098 6.82433 13.8102 5.41765 13.8102 3.85872C13.8102 1.72884 15.4622 0.00158591 17.4997 0.00158591ZM6.29129 17.808C7.13937 17.808 7.98744 17.7462 8.82791 17.6257C8.79301 17.3561 8.77633 17.0849 8.78088 16.8137C8.78088 14.622 9.53943 12.5049 10.917 10.8537C9.76854 9.54853 8.16645 8.7825 6.47038 8.73017C4.77574 8.67942 3.13267 9.34549 1.91462 10.5778C0.696374 11.81 0.0045441 13.5053 0 15.2783C0 16.0903 0.0424815 16.325 0.843533 16.7564C2.34247 17.5684 5.4024 17.8316 6.28092 17.7952L6.29129 17.808ZM28.7085 17.808C29.5975 17.8445 32.6591 17.5813 34.1459 16.7693C34.9772 16.3379 35 16.1143 35 15.2785C34.9924 13.5102 34.3021 11.8212 33.0884 10.5905C31.8732 9.35987 30.2362 8.69218 28.5447 8.73976C26.8546 8.78734 25.2525 9.54541 24.1023 10.8411C25.4799 12.4936 26.2385 14.6092 26.2385 16.8011C26.2415 17.0723 26.2263 17.3434 26.1914 17.613C27.0319 17.7336 27.88 17.7954 28.7281 17.7954L28.7085 17.808ZM6.29129 2.19804C7.46553 2.19804 8.52602 2.93707 8.97511 4.07259C9.42416 5.20653 9.17688 6.5133 8.3455 7.38236C7.51412 8.24985 6.2655 8.50993 5.17926 8.04052C4.09451 7.56949 3.38601 6.46255 3.38601 5.23503C3.38601 4.42938 3.69247 3.65706 4.23712 3.08769C4.78175 2.51679 5.52058 2.19804 6.29129 2.19804Z" fill="#C35C24"/>
                            </svg>
                            </div>`:""}
                             ${this.newClient2?d`
                            <div class="text-uppercase fw-bold" style="color: #C35C24; font-size: 0.4rem;">${this.contractorAction2}</div>
                            <svg width="8" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-1">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9978 0H0.0234375V12.5227L0 12.5227L5.98972 19L12 12.5227L11.9978 12.5227V0Z" fill="#02B8B7"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Owner 3 - NEW CLIENT -->
                    <div>
                    <span class="fs-7 ms-2" style="font-size: 0.5rem;">OWNER 3 - ${this.newClient2}</span>
                        <div class="d-flex justify-content-center align-items-center mb-1">
                            <svg width="18" height="10" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7081 2.19804C29.8823 2.19963 30.9413 2.94024 31.3888 4.07576C31.8379 5.20969 31.5891 6.51488 30.7577 7.38236C29.9263 8.25143 28.6762 8.50993 27.5915 8.03893C26.5067 7.56953 25.7997 6.46255 25.7997 5.23507C25.7997 4.42783 26.1062 3.65551 26.6509 3.08615C27.197 2.51524 27.9374 2.19646 28.7081 2.19804ZM17.4997 20C16.3694 20 12.4856 19.7082 10.5787 18.6758C9.56825 18.1318 9.51061 17.8638 9.51061 16.7996V16.8012C9.51061 13.8181 11.0338 11.0601 13.5052 9.56969C15.9766 8.07734 19.0229 8.07734 21.4942 9.56969C23.9656 11.0605 25.4888 13.8184 25.4888 16.8012C25.4888 17.8479 25.4311 18.1334 24.4207 18.6774C22.5137 19.7082 18.6299 20 17.4997 20ZM17.4997 0.00158591C18.9926 0.00158591 20.3367 0.940443 20.9087 2.38204C21.4791 3.82364 21.1635 5.48248 20.1091 6.58487C19.0532 7.68869 17.4663 8.01851 16.0874 7.42223C14.7098 6.82433 13.8102 5.41765 13.8102 3.85872C13.8102 1.72884 15.4622 0.00158591 17.4997 0.00158591ZM6.29129 17.808C7.13937 17.808 7.98744 17.7462 8.82791 17.6257C8.79301 17.3561 8.77633 17.0849 8.78088 16.8137C8.78088 14.622 9.53943 12.5049 10.917 10.8537C9.76854 9.54853 8.16645 8.7825 6.47038 8.73017C4.77574 8.67942 3.13267 9.34549 1.91462 10.5778C0.696374 11.81 0.0045441 13.5053 0 15.2783C0 16.0903 0.0424815 16.325 0.843533 16.7564C2.34247 17.5684 5.4024 17.8316 6.28092 17.7952L6.29129 17.808ZM28.7085 17.808C29.5975 17.8445 32.6591 17.5813 34.1459 16.7693C34.9772 16.3379 35 16.1143 35 15.2785C34.9924 13.5102 34.3021 11.8212 33.0884 10.5905C31.8732 9.35987 30.2362 8.69218 28.5447 8.73976C26.8546 8.78734 25.2525 9.54541 24.1023 10.8411C25.4799 12.4936 26.2385 14.6092 26.2385 16.8011C26.2415 17.0723 26.2263 17.3434 26.1914 17.613C27.0319 17.7336 27.88 17.7954 28.7281 17.7954L28.7085 17.808ZM6.29129 2.19804C7.46553 2.19804 8.52602 2.93707 8.97511 4.07259C9.42416 5.20653 9.17688 6.5133 8.3455 7.38236C7.51412 8.24985 6.2655 8.50993 5.17926 8.04052C4.09451 7.56949 3.38601 6.46255 3.38601 5.23503C3.38601 4.42938 3.69247 3.65706 4.23712 3.08769C4.78175 2.51679 5.52058 2.19804 6.29129 2.19804Z" fill="#C35C24"/>
                            </svg>
                            
                        </div>
                         `:""}
                    </div>
                </div>
            </div>
        `}};w([n({type:String})],C.prototype,"model_id",2);w([n({type:String})],C.prototype,"client",2);w([n({type:String})],C.prototype,"clientAction",2);w([n({type:String})],C.prototype,"contractor",2);w([n({type:String})],C.prototype,"contractorAction",2);w([n({type:String})],C.prototype,"newClient",2);w([n({type:String})],C.prototype,"contractorAction2",2);w([n({type:String})],C.prototype,"newClient2",2);C=w([f("business-model")],C);var Se=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,p=(s,i,t,e)=>{for(var r=e>1?void 0:e?$e(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&Se(i,t,r),r};let l=class extends _{constructor(){super(...arguments),this.technicalDesignDescription="fsaf",this.model_id=["1","2","3","4","5","6"],this.client=["1","2","3","4","5","6"],this.clientAction=["1","2","3","4","5","6"],this.contractor=["1","2","3","4","5","6"],this.contractorAction=["1","2","3","4","5","6"],this.newClient=["1","2","3","4","5","6"],this.contractorAction2=["1","2","3","4","5","6"],this.showBusinessModel=!0,this.expertFinderUrl="#",this.showExpertFinder=!0}formatValues(s){return s?String(s).split(",").map(i=>i.trim()).filter(i=>i.length>0):[]}firstUpdated(){setTimeout(()=>this.adjustVerticalLine(),0),window.addEventListener("resize",()=>this.adjustVerticalLine())}adjustVerticalLine(){const s=this.shadowRoot?.querySelector(".roadmap-container");if(!s)return;const i=s.querySelectorAll(".roadmap-step");if(i.length===0)return;const e=i[i.length-1].getBoundingClientRect().top,r=s.getBoundingClientRect().top,o=e-r,c=document.createElement("style");c.textContent=`
      :host .roadmap-container::before {
        height: ${o}px;
      }
    `;const y=this.shadowRoot?.querySelector("style[data-vertical-line]");y&&y.remove(),c.setAttribute("data-vertical-line",""),this.shadowRoot?.appendChild(c)}renderRoadmapStep(s,i,t,e=[]){return d`
    <div class="roadmap-step">
            <div class="roadmap-timeline">
                <div class="roadmap-circle"></div>
                
                <div class="horizontal-connector"></div>
                ${s==="Certification & Code Compliance"?"":d`
                <div class="arrow-circle ${s==="Technical Design Considerations For Reuse"?"warranty-arrow":""}">
                    <span class="arrow-down">⮟</span>
                </div>
              `}
            </div>
            <div class="roadmap-content">
                <div class="roadmap-header">
                    <div class="roadmap-title">${s}</div>
                </div>
                <div class="roadmap-body">
                    <div class="roadmap-description">
                        ${z.textToHtml(i)}
                    </div>
                    <div class="roadmap-details">
                        ${t?d`
                            <div class="roadmap-detail">
                                <div class="roadmap-detail-label">KEY STAKEHOLDERS:</div>
                                ${this.formatValues(t).map(o=>d`<div class="roadmap-detail-value">${o}</div>`)}
                            </div>
                        `:""}
                        ${e.map(o=>o.value?d`
                            <div class="roadmap-detail">
                                <div class="roadmap-detail-label">${o.label}:</div>
                                ${this.formatValues(o.value).map(c=>d`<div class="roadmap-detail-value">${c}</div>`)}
                            </div>
                        `:"")}
                    </div>
                </div>
            </div>
        </div>
    `}render(){return d`
        <div class="roadmap-container">
            ${this.earlyMeetingDescription?this.renderRoadmapStep("Early Enabling Meetings",this.earlyMeetingDescription||"",this.earlyMeetingDoneBy,[]):""}
            
            ${this.enablingSurveysDescription?this.renderRoadmapStep("Enabling Surveys & Reports",this.enablingSurveysDescription||"",this.enablingSurveysDoneBy,[{label:"SURVERY & REPORT TITLES",value:this.enablingSurveysTitles||""}]):""}
            
            ${this.qualityDescription?this.renderRoadmapStep("Quality Comparison",this.qualityDescription||"",this.qualityDoneBy,[]):""}
            
            ${this.impactDescription?this.renderRoadmapStep("Impact Assessment",this.impactDescription||"",this.impactDoneBy,[{label:"TOOLS & DATABASES",value:this.impactTools||""}]):""}
            
            ${this.securingReuseDescription?this.renderRoadmapStep("Secure Reuse In Design: Enabling Reports & Specifications",this.securingReuseDescription||"",this.securingReuseDoneBy,[{label:"REPORT TYPES",value:this.securingReuseType||""}]):""}
            ${this.technicalDesignDoneBy?this.renderRoadmapStep("Technical Design Considerations For Reuse","",this.technicalDesignDoneBy,[]):""}
            ${this.reservationDescription?this.renderRoadmapStep("Reservation",this.reservationDescription||"",this.reservationDoneBy,[{label:"TOOLS & EQUIPMENT",value:this.reservationTiming||""}]):""}
            ${this.ownershipdescription?d`
                  <div class="roadmap-step">
                    <div class="roadmap-timeline">
                      <div class="roadmap-circle"></div>
                      <div class="horizontal-connector"></div>
                      <div class="arrow-circle">
                        <span class="arrow-down">⮟</span>
                      </div>
                    </div>
                    <div class="roadmap-content">
                      <div class="roadmap-header">
                        <div class="roadmap-title">Ownership & Business Models</div>
                      </div>
                      <div class="roadmap-body">
                              <div class="row mt-3">
                                ${Array(Math.min(this.client?.length||0)).fill(0).map((s,i)=>d`
                                  <div class="col-md-4 mb-3">
                                    <business-model
                                      model_id="${this.model_id?.[i]||""}"
                                      client="${this.client?.[i]||""}"
                                      clientAction="${this.clientAction?.[i]||"123"}"
                                      contractor="${this.contractor?.[i]||"123"}"
                                      contractorAction="${this.contractorAction?.[i]||""}"
                                      newClient="${this.newClient?.[i]||""}"
                                      contractorAction2="${this.contractorAction2?.[i]||""}"
                                      newClient2="${this.newClient2?.[i]||""}">
                                    </business-model>
                                  </div>
                                `)}
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `:""}
            ${this.certificationDescription?this.renderRoadmapStep("Certification & Code Compliance",this.certificationDescription||"",this.certificationeDoneBy,[{label:"CODES",value:this.certificationCodes||""},{label:"INSURANCE",value:this.certificationInsurance||""},{label:"CERTIFICATION",value:this.certificationCertification||""}]):""}
        </div>
        `}};l.styles=[..._.styles];p([n({type:String})],l.prototype,"earlyMeetingDescription",2);p([n({type:String})],l.prototype,"earlyMeetingDoneBy",2);p([n({type:String})],l.prototype,"enablingSurveysDescription",2);p([n({type:String})],l.prototype,"enablingSurveysDoneBy",2);p([n({type:String})],l.prototype,"enablingSurveysTitles",2);p([n({type:String})],l.prototype,"qualityDescription",2);p([n({type:String})],l.prototype,"qualityDoneBy",2);p([n({type:String})],l.prototype,"impactDescription",2);p([n({type:String})],l.prototype,"impactDoneBy",2);p([n({type:String})],l.prototype,"impactTools",2);p([n({type:String})],l.prototype,"securingReuseDescription",2);p([n({type:String})],l.prototype,"securingReuseDoneBy",2);p([n({type:String})],l.prototype,"securingReuseType",2);p([n({type:String})],l.prototype,"technicalDesignDescription",2);p([n({type:String})],l.prototype,"technicalDesignDoneBy",2);p([n({type:String})],l.prototype,"reservationDescription",2);p([n({type:String})],l.prototype,"reservationDoneBy",2);p([n({type:String})],l.prototype,"reservationTiming",2);p([n({type:String})],l.prototype,"ownershipdescription",2);p([n({type:String})],l.prototype,"ownershipDoneBy",2);p([n({type:String})],l.prototype,"certificationDescription",2);p([n({type:String})],l.prototype,"certificationeDoneBy",2);p([n({type:String})],l.prototype,"certificationCodes",2);p([n({type:String})],l.prototype,"certificationInsurance",2);p([n({type:String})],l.prototype,"certificationCertification",2);p([n({type:Array})],l.prototype,"model_id",2);p([n({type:Array})],l.prototype,"client",2);p([n({type:Array})],l.prototype,"clientAction",2);p([n({type:Array})],l.prototype,"contractor",2);p([n({type:Array})],l.prototype,"contractorAction",2);p([n({type:Array})],l.prototype,"newClient",2);p([n({type:Array})],l.prototype,"contractorAction2",2);p([n({type:Array})],l.prototype,"newClient2",2);p([n({type:Boolean})],l.prototype,"showBusinessModel",2);p([n({type:String})],l.prototype,"expertFinderUrl",2);p([n({type:Boolean})],l.prototype,"showExpertFinder",2);l=p([f("road-map-contractor-component")],l);var xe=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,W=(s,i,t,e)=>{for(var r=e>1?void 0:e?Ee(i,t):i,a=s.length-1,o;a>=0;a--)(o=s[a])&&(r=(e?o(i,t,r):o(r))||r);return e&&r&&xe(i,t,r),r};let H=class extends _{render(){return d`
        <div class="card mb-5">
            <div class="card-header py-4 bg-secondary text-white">
                <h2 class="fs-4 fw-normal m-0">Design Guides & Codes</h2>
            </div>
            <div class="card-body p-4">
            <div class="mb-5">
              <h3 class="fs-6 text-uppercase mb-3">Document</h3>
                  ${this.document?d`
                      <div>${this.document}</div>
                  `:d`
                      <p class="text-muted">No Document available.</p>
                  `}
            </div>
            <div class="mb-5">
             <h3 class="fs-6 text-uppercase mb-3">ONLINE REFERENCES</h3>
                ${this.document?d`
                      <dd class="mt-2">
                        ${this.onlineReferences&&this.onlineReferences.length>0?x(this.onlineReferences.map(s=>`<p class="mb-3"><a href="${s}">${s}</a>`).join("<br />")):"-"}
                      </dd>
                `:d`
                    <p class="text-muted">No online references available.</p>
                `}
            </div>
            </div>
        </div>
        `}};W([n({type:String})],H.prototype,"document",2);H=W([f("design-codes-card")],H);const u=new M;function Re(){const i=new URLSearchParams(window.location.search).get("id");if(!i)return;function t(){const e=document.getElementById("userTypeToggle");return e&&e.checked}u.getComponent(i).then(e=>{const r=e.get("component_or_material")==="Component";Te(e,r),Le(e,r),Be(e),Oe(e),Pe(e),Ae(e),Ie(e,r),je(e),Ne(e),Ue(e),qe(e,i),t()?k(e):G(e),t()?Y():Q(e)}).catch(e=>{console.error("Error fetching content:",e)}),t()?K(i):X(i)}function Te(s,i){const t=document.getElementsByTagName("main-heading")[0];t.heading=s.get("material/component_name"),t.includeUnapprovedData=u.includeUnapprovedData,t.querySelectorAll("icon-badge").forEach(o=>o.remove());const r=document.createElement("icon-badge");r.text=i?"Component":"Material",r.icon="",r.iconClass="badge-icon--blue",r.classList.add("d-inline-block","me-2","mb-1"),t.appendChild(r);const a=s.get("shearing_layer");a&&a.forEach(o=>{const c=document.createElement("icon-badge");c.text=o,c.icon="house",c.iconClass="badge-icon--secondary",c.classList.add("d-inline-block","me-2","mb-1"),t.appendChild(c)})}function Le(s,i){const t=document.getElementsByTagName("component-material-details-card")[0];t.isComponent=i,t.imageUrl=s.get("Image")?.at(0)?.url,t.description=s.get("description_full"),t.nrmlayer=s.get("element_code (from NRM 1)")?.join(", "),t.uniclassCodes=[];const e=s.get("uniclass_ma_materials");if(e?.length>0){const o=e.map(c=>u.getUniclassMaterial(c,["Code"]));Promise.all(o).then(c=>{c.forEach(y=>{t.uniclassCodes=[...t.uniclassCodes,y?.get("Code")]})})}const r=s.get("uniclass_pr_products");if(r?.length>0){const o=r.map(c=>u.getUniclassProduct(c,["Code"]));Promise.all(o).then(c=>{c.forEach(y=>{t.uniclassCodes=[...t.uniclassCodes,y?.get("Code")]})})}t.designLife=s.get("design_life"),t.designLife&&(t.designLife+=" years");const a=s.get("discpline_layer");if(a&&a.length>0){const o=a.map(c=>u.getDisciplineLayer(c,["Name"]));Promise.all(o).then(c=>{const y=c.filter(B=>B!==null);if(y.length>0){const B=y.map(U=>U?.get("Name")).filter(U=>U).join(", ");t.disciplineLayer=B,t.disciplineLayerIds=a,t.includeUnapprovedData=u.includeUnapprovedData}}).catch(c=>{console.error("Error fetching discipline layers:",c)})}t.length=s.get("length"),t.width=s.get("width"),t.height=s.get("height/thickness"),t.mass=s.get("mass"),t.volume=s.get("volume"),t.density=s.get("density"),t.materialStrength=s.get("material_grade"),u.getMaterials(["material/component_name"]).then(o=>{const c=s.get("materials")?.map(y=>o.find(B=>B.id===y)).filter(y=>y);t.materials=[],c?.forEach(y=>{t.materials=[...t.materials,y.get("materials/component_name")]})})}function Be(s){const i=document.getElementsByTagName("references-card")[0];i.collaborators=[],s.get("references_people")?.forEach(r=>{u.getUserAuthor(r,["name"]).then(a=>{i.collaborators=[...i.collaborators,a.get("name")]})}),i.companyLogos=[],s.get("organisation_reference_people")?.forEach(r=>{u.getCompany(r,["image_company_logo"]).then(a=>{const o=a.get("image_company_logo");if(o&&o.length>0){const c=o[0].url;i.companyLogos=[...i.companyLogos,c]}})}),i.textReferences=s.get("references_text"),i.onlineReferences=[s.get("references_url"),s.get("references_url_2"),s.get("references_url_3"),s.get("references_url_4"),s.get("references_url_5")].filter(r=>r)}function Oe(s){const i=document.getElementsByTagName("design-codes-card")[0];i.document=s.get("design_guides_&_codes"),i.onlineReferences=[s.get("design_guides_&_codes_links_1"),s.get("design_guides_&_codes_links_2"),s.get("design_guides_&_codes_links_3"),s.get("design_guides_&_codes_links_4"),s.get("design_guides_&_codes_links_5"),s.get("design_guides_&_codes_links_6")].filter(t=>t)}function Pe(s){const i=document.getElementsByTagName("tags-list").namedItem("Tags");i.tags=[];const t=s.get("category");t?.length>0&&t.forEach(r=>{u.getCategory(r,["Name"]).then(a=>{i.tags=[...i.tags,a?.get("Name")]})});const e=s.get("shearing_layer");e&&(i.tags=[...i.tags,...e])}function Ae(s){const i=document.getElementById("reuse-options");u.getReuseOptions(["Name","reuse_option_image","reuse_option_description"]).then(t=>{const e=s.get("reuse_options")?.map(a=>t.find(o=>o.id===a));i.innerHTML='<h3 class="fs-6 text-uppercase mb-3">Reuse Options</h3><div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id="reuse-options-container"></div>';const r=document.getElementById("reuse-options-container");e?.length>0&&r?e.forEach(a=>{const o=document.createElement("div");o.className="col";const c=document.createElement("square-image-card");c.square_title=a.get("Name"),c.imageUrl=a.get("reuse_option_image")?.at(0)?.url,c.linkUrl="#",o.appendChild(c),r.appendChild(o);const y=document.getElementsByTagName("tags-list").namedItem("Tags");y&&(y.tags=[...y.tags,a.get("Name")])}):r&&(i.innerHTML="")})}function Ie(s,i){const t=document.getElementById("component-variety-container");t.innerHTML='<h3 class="fs-6 text-uppercase mb-3">'+(i?"Parts":"Types")+"</h3>",u.getComponentVarietyTypes(s.get("material/component_name"),["Name","type_description","type_image"]).then(e=>{e.forEach(r=>{const a=new E;a.name=r?.get("Name"),a.imageUrl=r?.get("type_image")?.at(0)?.url,a.description=r?.get("type_description"),t.appendChild(a);const o=document.getElementsByTagName("tags-list").namedItem("Tags");o&&(o.tags=[...o.tags,r?.get("Name")])}),e?.length===0&&(t.innerHTML="")})}function je(s){const i=document.getElementsByTagName("cost-availability-card")[0];i.description_reclaimed=s.get("cost_availability_description_reclaimed"),i.description_new=s.get("cost_availability_description_new"),i.price_reclaimed=s.get("cost_availability_reclaimed_price"),i.price_new=s.get("cost_availability_new_price")}function Ne(s){const i=document.getElementsByTagName("environmental-impact-card")[0];i.description_reclaimed=s.get("environmental_impact_reclaimed_description"),i.epd_reclaimed=s.get("environmental_impact_reclaimed_epd"),i.description_new=s.get("environmental_impact_new_description"),i.epd_new=s.get("environmental_impact_new_epd")}function Ue(s){const i=document.getElementsByTagName("risk-card")[0];i.description_reclaimed=s.get("risk_description_reclaimed"),i.description_new=s.get("risk_description_new")}function qe(s,i){const t=document.getElementById("project-examples-container");if(t){const e=s.get("project_examples");let r=[];typeof e=="string"?r=e.split(",").map(a=>a.trim()).filter(a=>a.length>0):Array.isArray(e)&&(r=e.filter(a=>typeof a=="string"&&a.trim().length>0)),r.length>0?(t.innerHTML="",Promise.all(r.map(a=>u.getProjectExample(a,["project_title","project_example_image","description_short"]))).then(a=>{const o=a.filter(c=>c!==null);o.length>0?o.forEach(c=>{const y=document.createElement("project-example-card");y.projectId=c.id,y.name=c.get("project_title"),y.description=c.get("description_short"),y.imageUrl=c.get("project_example_image")?.[0]?.url||"",y.componentId=i,y.includeUnapprovedData=u.includeUnapprovedData,t.appendChild(y)}):t.innerHTML='<div class="text-center p-4">No project examples found for this component/material.</div>'}).catch(a=>{console.error("Error fetching project examples:",a),t.innerHTML='<div class="text-center p-4">Error loading project examples.</div>'})):t.innerHTML='<div class="text-center p-4">No project examples available for this component/material.</div>'}}function k(s){const i=document.getElementById("key-considerations-container");if(i){i.innerHTML="";let t=document.querySelector('tags-list[name="Reuse Considerations"]');t||(t=document.createElement("tags-list"),t.setAttribute("name","Reuse Considerations"),t.setAttribute("heading","Reuse Considerations:"));let e=document.querySelector("feasibility-considerations-card-components");e||(e=document.createElement("feasibility-considerations-card-components")),e.heading="Key Considerations",t.tags=s.get("reuse_considerations");const r=s.get("reclamation_rate");r&&(e.reclaimPercentage=`${Number(r)*100}%`),i.appendChild(e),e.appendChild(t)}}function G(s){const i=document.getElementById("key-considerations-container");if(i){i.innerHTML="";const t=document.createElement("tags-list");t.setAttribute("name","Reuse Considerations"),t.setAttribute("heading","Reuse Considerations:");const e=document.createElement("feasibility-considerations-card-components");if(e.heading="Key Considerations for Success",e.consideration_1=s.get("key_consideration_1"),console.log("key_consideration_1",e.consideration_1),e.consideration_2=s.get("key_consideration_2"),e.consideration_3=s.get("key_consideration_3"),e.consideration_4=s.get("key_consideration_4"),t&&(t.tags=s.get("reuse_considerations"),t.style.display=""),e){const r=s.get("reclamation_rate");r&&(e.reclaimPercentage=`${Number(r)*100}%`),e.style.display=""}i.appendChild(e),e.appendChild(t)}}function Q(s){const i=document.getElementById("technical-design-container");if(i){i.innerHTML="";const e=document.createElement("technical-design-card");e.t_1=s.get("technical_design_consideration_1"),e.t_2=s.get("technical_design_consideration_2"),e.t_3=s.get("technical_design_consideration_3"),e.t_4=s.get("technical_design_consideration_4"),e.t_5=s.get("technical_design_consideration_5"),e.t_6=s.get("technical_design_consideration_6"),i.appendChild(e)}const t=document.getElementById("designer-technical-considerations");t&&t.remove()}function Y(){const s=document.getElementById("technical-design-container");s&&(s.innerHTML="")}function K(s){const i=document.getElementById("roadmap-container");if(i){const t=document.createElement("road-map-design-component");i.innerHTML="",u.getComponent(s).then(e=>{t.assessmentDescription=e.get("assessment_description"),t.assessmentDoneBy=e.get("assessment_done_by"),t.deconstructionDescription=e.get("deconstruction_description"),t.deconstructionDoneBy=e.get("deconstruction_done_by"),t.deconstructionToolsEquipment=e.get("deconstruction_tools_&_equipment"),t.deconstructionLabour=e.get("deconstruction_labour"),t.sortingDescription=e.get("sorting_&_packaging_description"),t.sortingDoneBy=e.get("sorting_&_packaging_done_by"),t.sortingMaterial=e.get("sorting_&_packaging_material"),t.sortingToolsEquipment=e.get("sorting_&_packaging_tools_&_equipment"),t.transportationDescription=e.get("transport_description"),t.transportationDoneBy=e.get("transport_done_by"),t.transportationType=e.get("transport_type"),t.testingDescription=e.get("testing_description"),t.testingDoneBy=e.get("testing_done_by"),t.testingMethod=e.get("testing_methods"),t.testingCodes=e.get("testing_codes/standards_tested_to"),t.cleaningDescription=e.get("cleaning_description"),t.cleaningDoneBy=e.get("cleaning_done_by"),t.cleaningToolsEquipment=e.get("cleaning_tools_&_equipment"),t.refurbishmentDescription=e.get("refurbishment_remanufacture_description"),t.refurbishmentDoneBy=e.get("refurbishment_remanufacture_done_by"),t.refurbishmentToolsEquipment=e.get("refurbishment_remanufacture_tools_&_equipment"),t.refurbishmentTime=e.get("refurbishment_remanufacture_time"),t.warrantyDescription=e.get("warranty_&_insurance_description"),t.storageDescription=e.get("storage_description"),i.appendChild(t)}).catch(e=>{console.error("Error configuring roadmap:",e)})}}function X(s){const i=document.getElementById("roadmap-container");if(i){const t=document.createElement("road-map-contractor-component");i.innerHTML="",u.getComponent(s).then(e=>{t.earlyMeetingDescription=e.get("early_enabling_meeting_description"),t.earlyMeetingDoneBy=e.get("early_enabling_meeting_key_stakeholders"),t.enablingSurveysDescription=e.get("enabling_surveys_&_reports_description"),t.enablingSurveysDoneBy=e.get("enabling_surveys_&_reports_key_stakeholders"),t.enablingSurveysTitles=e.get("enabling_surveys_&_reports_titles"),t.qualityDescription=e.get("quantity_comparison_description"),t.qualityDoneBy=e.get("quantity_comparison_key_stakeholders"),t.impactDescription=e.get("impact_assessment_description"),t.impactDoneBy=e.get("impact_assessment_key_stakeholders"),t.impactTools=e.get("impact_assessment_tools_&_databases"),t.securingReuseDescription=e.get("enabling_reports_&_specifications_description"),t.securingReuseDoneBy=e.get("enabling_reports_&_specifications_key_stakeholders"),t.securingReuseType=e.get("enabling_reports_&_specifications_report_type"),t.technicalDesignDescription=e.get("technical_design_consideration_description"),t.technicalDesignDoneBy=e.get("technical_design_consideration_key_stakeholders"),t.reservationDescription=e.get("reservation_description"),t.reservationDoneBy=e.get("reservation_key_stakeholders"),t.reservationTiming=e.get("reservation_timing"),t.ownershipdescription=e.get("cleaning_done_by"),t.ownershipDoneBy=e.get("cleaning_tools_&_equipment"),t.certificationDescription=e.get("certification_&_code_compliance_description"),t.certificationeDoneBy=e.get("certification_&_code_compliance_key_stakeholders"),t.certificationCodes=e.get("certification_&_code_compliance_codes"),t.certificationInsurance=e.get("certification_&_code_compliance_insurance"),t.certificationCertification=e.get("certification_&_code_compliance_certification"),t.client=e.get("business_model_stakeholder_1"),console.log("client",t.client),t.clientAction=e.get("business_model_action_1"),console.log("clientAction",t.clientAction),t.contractor=e.get("business_model_stakeholder_2"),console.log("contractor",t.contractor),t.contractorAction=e.get("business_model_action_2"),console.log("contractorAction",t.contractorAction),t.newClient=e.get("business_model_stakeholder_3"),console.log("newClient",t.newClient),t.contractorAction2=e.get("business_model_action_3"),console.log("contractorAction2",t.contractorAction2),t.newClient=e.get("business_model_stakeholder_4"),console.log("newClient",t.newClient),i.appendChild(t)}).catch(e=>{console.error("Error configuring roadmap:",e)})}}Re();document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("userTypeToggle"),i=document.querySelector(".user-role-label");s&&i?s.addEventListener("change",()=>{i.textContent=s.checked?"CONTRACTOR":"DESIGNER";const t=new URLSearchParams(window.location.search).get("id");t&&u.getComponent(t).then(e=>{s.checked?(k(e),Y(),K(t)):(G(e),Q(e),X(t))}).catch(e=>{console.error("Error reloading role-specific sections:",e)})}):console.error("User toggle elements not found in the DOM")});
