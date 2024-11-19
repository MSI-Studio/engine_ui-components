import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as l,C as p,a as d,e as f,m as b,x as y,y as w,i as g,b as u,t as T,j as C,k as v}from"./index-DWS_wlqj.js";import{b as E}from"./index-Dv7vwF4x.js";import{t as L}from"./index-D4Xi_JP9.js";import"./lit-html-paDGiEfB.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const I=e.get(d),s=I.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new y(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const h=e.get(w);h.create(s);e.init();const x=e.get(g);await x.setup();const m=e.get(u);m.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[z,B]=L.classificationTree({components:e,classifications:[]}),i=e.get(T);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),B({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const F=C.create(()=>{const[t]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${z}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:F,viewport:n}}};a.layout="main";document.body.append(a);
