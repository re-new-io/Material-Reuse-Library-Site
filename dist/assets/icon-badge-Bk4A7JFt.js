import{T as p,w as g,n as a,t as $,G as _,x as y}from"./main-BFjwW7uW.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},d=s=>(...t)=>({_$litDirective$:s,values:t});class v{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class c extends v{constructor(t){if(super(t),this.it=p,t.type!==f.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===g)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}c.directiveName="unsafeHTML",c.resultType=1;const C=d(c);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends c{}h.directiveName="unsafeSVG",h.resultType=2;const T=d(h);var b=Object.defineProperty,E=Object.getOwnPropertyDescriptor,o=(s,t,e,n)=>{for(var r=n>1?void 0:n?E(t,e):t,l=s.length-1,u;l>=0;l--)(u=s[l])&&(r=(n?u(t,e,r):u(r))||r);return n&&r&&b(t,e,r),r};let i=class extends _{constructor(){super(...arguments),this.iconColour="currentColor",this.lightBackground=!1}render(){return this.text?y`
        <span class="badge ${this.lightBackground?"":"badge--icon"} rounded-pill ${this.lightBackground?"text-dark border border-dark":"text-bg-dark"}">
            <span class="${this.lightBackground?"":`badge-icon ${this.iconClass}`}">
                ${T(`
                    <svg class="bi" width="14" height="14" fill="${this.iconColour}">
                        <use xlink:href="/bootstrap-icons.svg#${this.icon}" />
                    </svg>
                `)}
            </span>
            <span class="align-middle">${this.text}</span>
        </span>
        `:""}};o([a({type:String})],i.prototype,"icon",2);o([a({type:String})],i.prototype,"iconColour",2);o([a({type:String})],i.prototype,"iconClass",2);o([a({type:String})],i.prototype,"text",2);o([a({type:Boolean})],i.prototype,"lightBackground",2);i=o([$("icon-badge")],i);export{C as o};
