import{b as x,a as y}from"./7u9jXdQm.js";import{c as o,o as a,a as b,p as i,B as L,y as l,m as u,q as O,E as f,t as P,Q as g,F as v,n as M,b as d,z as k}from"./B7uKOA-z.js";var C={name:"ChevronRightIcon",extends:x};function N(e,n,t,s,m,r){return a(),o("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[b("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}C.render=N;var R=function(n){var t=n.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},S={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},U=L.extend({name:"breadcrumb",theme:R,classes:S}),A={name:"BaseBreadcrumb",extends:y,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:U,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},I={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:y,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,s=n.url,m=typeof window<"u"?window.location.pathname:"";return t===m||s===m?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(s){return n.onClick(s)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},E=["href","target","aria-current"];function V(e,n,t,s,m,r){return r.visible()?(a(),o("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(a(),u(f(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),o("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),u(f(t.templates.itemicon),{key:0,item:t.item,class:O(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),o("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):l("",!0),t.item.label?(a(),o("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),P(r.label()),17)):l("",!0)],16,E))],16)):l("",!0)}I.render=V;var w={name:"Breadcrumb",extends:A,inheritAttrs:!1,components:{BreadcrumbItem:I,ChevronRightIcon:C}};function z(e,n,t,s,m,r){var p=g("BreadcrumbItem"),B=g("ChevronRightIcon");return a(),o("nav",i({class:e.cx("root")},e.ptmi("root")),[b("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),u(p,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(a(!0),o(v,null,M(e.model,function(h,c){return a(),o(v,{key:h.label+"_"+c},[e.home||c!==0?(a(),o("li",i({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[k(e.$slots,"separator",{},function(){return[d(B,i({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):l("",!0),d(p,{item:h,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}w.render=z;const D={class:"grid grid-cols-1 p-[16px]"},F={class:"max-w-[1600px] mx-auto w-full flex flex-col lg:gap-4 gap-2"},Z={__name:"page-container",props:{breadcrumb:{type:Array,default:()=>[]}},setup(e){return(n,t)=>{const s=w;return a(),o("div",D,[b("div",F,[d(s,{model:e.breadcrumb,class:"text-[12px] lg:text-[14px] bg-transparent"},null,8,["model"]),k(n.$slots,"default")])])}}};export{Z as _,C as s};
