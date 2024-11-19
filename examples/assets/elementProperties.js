import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as y,C as x,a as f,e as h,m as v,x as T,y as C,i as E,l as P,u as A,j as S,k as $}from"./index-DWS_wlqj.js";import{t as k}from"./index-D4Xi_JP9.js";import"./lit-html-paDGiEfB.js";y.init();const r=document.createElement("bim-viewport"),e=new x,I=e.get(f),n=I.create(),l=new h(e);l.setup();n.scene=l;const d=new v(e,r);n.renderer=d;const i=new T(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const L=e.get(C);L.create(n);const m=e.get(E);await m.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),M=await z.arrayBuffer(),V=new Uint8Array(M),u=await m.load(V);n.scene.three.add(u);const j=e.get(P);await j.process(u);const[t,b]=k.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(A);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const q=S.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return $`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${w} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${o} placeholder="Search Property" debounce="250"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),c=document.createElement("bim-grid");c.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:q,viewport:r}}};c.layout="main";document.body.append(c);
