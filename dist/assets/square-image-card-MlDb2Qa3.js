import{i as c,n as a,G as b,x as p,t as g}from"./main-BFjwW7uW.js";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,r=(n,i,l,o)=>{for(var t=o>1?void 0:o?u(i,l):i,s=n.length-1,d;s>=0;s--)(d=n[s])&&(t=(o?d(i,l,t):d(t))||t);return o&&t&&h(i,l,t),t};let e=class extends b{constructor(){super(...arguments),this.includeUnapprovedData=!1}render(){return p`
      <div class="square-card">
        <a href="${this.linkUrl||"#"}" class="card-link">
          <div 
            class="card-background" 
            style="background-image: url('${this.imageUrl||"/images/placeholder.jpg"}')">
          </div>
          <div class="card-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">${this.square_title||"Title"}</h3>
            ${this.subtitle?p`<p class="card-subtitle">${this.subtitle}</p>`:""}
          </div>
        </a>
      </div>
    `}};e.styles=[c`
      :host {
        display: block;
        max-width: 100%; /* Adjust as needed */
      }

      .square-card {
        position: relative;
        width: 100%;
        padding-top: 100%; /* Creates a perfect square based on width */
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 4px 4px 0px #00000040;
        margin-bottom: 1rem;
      }
      
      .card-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-decoration: none;
        color: white;
        display: block;
      }
      
      .card-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease;
      }
      
      .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
        transition: opacity 0.3s ease;
      }
      
      .card-content {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.75rem;
        width: 100%;
        box-sizing: border-box;
      }
      
      .card-title {
        font-size: 0.8rem;
        font-weight: 500;
        margin: 0;
        color: white;
        /* Handle text wrapping properly */
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        /* Limit to 2 lines and add ellipsis if longer */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .card-subtitle {
        font-size: 0.75rem;
        margin: 0.25rem 0 0 0;
        opacity: 0.9;
        color: white;
        /* Handle text wrapping properly */
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        /* Limit to 2 lines and add ellipsis if longer */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      /* Hover effects */
      .card-link:hover .card-background {
        transform: scale(1.05);
      }
      
      .card-link:hover .card-overlay {
        opacity: 0.95;
      }
    `];r([a({type:String})],e.prototype,"linkUrl",2);r([a({type:String})],e.prototype,"imageUrl",2);r([a({type:String})],e.prototype,"square_title",2);r([a({type:String})],e.prototype,"subtitle",2);r([a({type:Boolean})],e.prototype,"includeUnapprovedData",2);e=r([g("square-image-card")],e);export{e as S};
