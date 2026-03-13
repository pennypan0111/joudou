import{c,o as r,a as u,F as y,n as I,_ as E,B as T,z as h,p as l,A as D,y as V,C as L,D as Y,m as g,w as f,E as P,q as F,G as N,H as tt,I as K,J as et,K as B,L as nt,M as z,N as R,O as at,P as C,r as S,b,u as p,t as $,d as st}from"./mNWHopJL.js";import{s as it,_ as rt}from"./DqOcRRyr.js";import{U as O}from"./CyVJCFbh.js";import{a as x,b as ot,R as W,s as ct}from"./C5DXJg6e.js";const lt={class:"grid gap-4"},ut=["src"],dt={class:"grid grid-cols-3 gap-4"},bt=["onClick"],pt=["src"],ft={__name:"swap-image",props:{data:{type:Array,default:()=>[]}},setup(e){const t=e,n=a=>{[t.data[0],t.data[a]]=[t.data[a],t.data[0]]};return(a,i)=>(r(),c("div",lt,[u("div",null,[u("img",{src:e.data[0],class:"w-full h-auto object-cover"},null,8,ut)]),u("div",dt,[(r(!0),c(y,null,I(e.data.slice(1),(s,o)=>(r(),c("div",{key:o,class:"cursor-pointer hover:opacity-80 transition",onClick:d=>n(o+1)},[u("img",{src:s,class:"w-full h-full object-cover"},null,8,pt)],8,bt))),128))])]))}},ht={};function vt(e,t){return r(),c("div",null,"introduce")}const gt=E(ht,[["render",vt]]),mt={};function $t(e,t){return r(),c("div",null,"delivery")}const yt=E(mt,[["render",$t]]);var Tt=function(t){var n=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(n("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(n("tabs.tablist.border.color"),`;
    border-width: `).concat(n("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabs.nav.button.background"),`;
    color: `).concat(n("tabs.nav.button.color"),`;
    width: `).concat(n("tabs.nav.button.width"),`;
    transition: color `).concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    box-shadow: `).concat(n("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.nav.button.focus.ring.width")," ").concat(n("tabs.nav.button.focus.ring.style")," ").concat(n("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(n("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}


.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(n("tabs.tab.background"),`;
    border-width: `).concat(n("tabs.tab.border.width"),`;
    border-color: `).concat(n("tabs.tab.border.color"),`;
    color: `).concat(n("tabs.tab.color"),`;
    padding: `).concat(n("tabs.tab.padding"),`;
    font-weight: `).concat(n("tabs.tab.font.weight"),`;
    transition: background `).concat(n("tabs.transition.duration"),", border-color ").concat(n("tabs.transition.duration"),", color ").concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    margin: `).concat(n("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tab.focus.ring.width")," ").concat(n("tabs.tab.focus.ring.style")," ").concat(n("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(n("tabs.tab.hover.background"),`;
    border-color: `).concat(n("tabs.tab.hover.border.color"),`;
    color: `).concat(n("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(n("tabs.tab.active.background"),`;
    border-color: `).concat(n("tabs.tab.active.border.color"),`;
    color: `).concat(n("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(n("tabs.tabpanel.background"),`;
    color: `).concat(n("tabs.tabpanel.color"),`;
    padding: `).concat(n("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(n("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tabpanel.focus.ring.width")," ").concat(n("tabs.tabpanel.focus.ring.style")," ").concat(n("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(n("tabs.active.bar.bottom"),`;
    height: `).concat(n("tabs.active.bar.height"),`;
    background: `).concat(n("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},xt={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},_t=T.extend({name:"tabs",theme:Tt,classes:xt}),wt={name:"BaseTabs",extends:x,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:_t,provide:function(){return{$pcTabs:this,$parentInstance:this}}},H={name:"Tabs",extends:wt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||O()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||O()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function kt(e,t,n,a,i,s){return r(),c("div",l({class:e.cx("root")},e.ptmi("root")),[h(e.$slots,"default")],16)}H.render=kt;var Bt={root:"p-tabpanels"},Ct=T.extend({name:"tabpanels",classes:Bt}),Lt={name:"BaseTabPanels",extends:x,props:{},style:Ct,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},j={name:"TabPanels",extends:Lt,inheritAttrs:!1};function Pt(e,t,n,a,i,s){return r(),c("div",l({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[h(e.$slots,"default")],16)}j.render=Pt;var At={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},Nt=T.extend({name:"tabpanel",classes:At}),St={name:"BaseTabPanel",extends:x,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Nt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},U={name:"TabPanel",extends:St,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return D((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return l(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function It(e,t,n,a,i,s){var o,d;return s.$pcTabs?(r(),c(y,{key:1},[e.asChild?h(e.$slots,"default",{key:1,class:F(e.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs}):(r(),c(y,{key:0},[!((o=s.$pcTabs)!==null&&o!==void 0&&o.lazy)||s.active?L((r(),g(P(e.as),l({key:0,class:e.cx("root")},s.attrs),{default:f(function(){return[h(e.$slots,"default")]}),_:3},16,["class"])),[[Y,(d=s.$pcTabs)!==null&&d!==void 0&&d.lazy?!0:s.active]]):V("",!0)],64))],64)):h(e.$slots,"default",{key:0})}U.render=It;var M={name:"ChevronLeftIcon",extends:ot};function Vt(e,t,n,a,i,s){return r(),c("svg",l({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[u("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}M.render=Vt;var Kt={root:"p-tablist",content:function(t){var n=t.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},zt=T.extend({name:"tablist",classes:Kt}),Ot={name:"BaseTabList",extends:x,props:{},style:zt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},q={name:"TabList",extends:Ot,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),a=N(t)-n,i=Math.abs(t.scrollLeft),s=a*.8,o=i-s,d=Math.max(o,0);t.scrollLeft=z(t)?-1*d:d},onNextButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),a=N(t)-n,i=Math.abs(t.scrollLeft),s=a*.8,o=i+s,d=t.scrollWidth-a,v=Math.min(o,d);t.scrollLeft=z(t)?-1*v:v},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,a=t.inkbar,i=t.tabs,s=K(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(a.style.height=et(s)+"px",a.style.top=B(s).top-B(i).top+"px"):(a.style.width=nt(s)+"px",a.style.left=B(s).left-B(i).left+"px")},updateButtonState:function(){var t=this.$refs,n=t.list,a=t.content,i=a.scrollTop,s=a.scrollWidth,o=a.scrollHeight,d=a.offsetWidth,v=a.offsetHeight,_=Math.abs(a.scrollLeft),w=[N(a),tt(a)],k=w[0],A=w[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=v&&parseInt(i)!==o-A):(this.isPrevButtonEnabled=_!==0,this.isNextButtonEnabled=n.offsetWidth>=d&&parseInt(_)!==s-k)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevButton,a=t.nextButton,i=0;return this.showNavigators&&(i=((n==null?void 0:n.offsetWidth)||0)+((a==null?void 0:a.offsetWidth)||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:M,ChevronRightIcon:it},directives:{ripple:W}},Et=["aria-label","tabindex"],Dt=["aria-orientation"],Ft=["aria-label","tabindex"];function Rt(e,t,n,a,i,s){var o=R("ripple");return r(),c("div",l({ref:"list",class:e.cx("root")},e.ptmi("root")),[s.showNavigators&&i.isPrevButtonEnabled?L((r(),c("button",l({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":s.prevButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return s.onPrevButtonClick&&s.onPrevButtonClick.apply(s,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),g(P(s.templates.previcon||"ChevronLeftIcon"),l({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Et)),[[o]]):V("",!0),u("div",l({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},e.ptm("content")),[u("div",l({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":s.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[h(e.$slots,"default"),u("span",l({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Dt)],16),s.showNavigators&&i.isNextButtonEnabled?L((r(),c("button",l({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":s.nextButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return s.onNextButtonClick&&s.onNextButtonClick.apply(s,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),g(P(s.templates.nexticon||"ChevronRightIcon"),l({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Ft)),[[o]]):V("",!0)],16)}q.render=Rt;var Wt={root:function(t){var n=t.instance,a=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":a.disabled}]}},Ht=T.extend({name:"tab",classes:Wt}),jt={name:"BaseTab",extends:x,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ht,provide:function(){return{$pcTab:this,$parentInstance:this}}},G={name:"Tab",extends:jt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.nextElementSibling;return a?C(a,"data-p-disabled")||C(a,"data-pc-section")==="inkbar"?this.findNextTab(a):K(a,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.previousElementSibling;return a?C(a,"data-p-disabled")||C(a,"data-pc-section")==="inkbar"?this.findPrevTab(a):K(a,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){at(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return D((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return l(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:W}};function Ut(e,t,n,a,i,s){var o=R("ripple");return e.asChild?h(e.$slots,"default",{key:1,class:F(e.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):L((r(),g(P(e.as),l({key:0,class:e.cx("root"),onClick:s.onClick},s.attrs),{default:f(function(){return[h(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[o]])}G.render=Ut;const Mt={class:"grid lg:grid-cols-2 grid-cols-1 gap-8"},qt={class:"flex flex-col gap-4"},Gt={class:"lg:text-[24px] text-[18px]"},Jt={class:"text-[18px] text-gray"},Zt={class:"text-[40px] text-primary"},ee={__name:"index",setup(e){const t=S(["https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg","https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg","https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg","https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg"]),n=S({title:"揪豆麻的 | 招牌麻辣臭豆腐",describe:"生活已經夠忙碌，享受美食可以簡單一點!不用備料、不用久等，只要短短 10 分，就能輕鬆把美味端上桌，濃郁湯頭、香嫩豆腐，一次滿足，讓你在家也能輕鬆享受，像現煮一樣的滿足與幸福。",notice:["師傅純手工現做，每批數量有限請把握訂購。","年節期間物流量大，恕無法指定到貨日期與時間，敬請見諒。","商品圖僅供參考，請以實物為準。","如需客服協助→請加入LINE好友@849szhed（請加@）"],price:190}),a=S([{title:"商品介紹",value:"0"},{title:"運送方式",value:"1"}]);return(i,s)=>{const o=ft,d=ct,v=G,_=q,w=gt,k=U,A=yt,J=j,Z=H,Q=rt;return r(),g(Q,null,{default:f(()=>[u("div",Mt,[b(o,{data:p(t)},null,8,["data"]),u("div",qt,[u("h2",Gt,$(p(n).title),1),u("div",Jt,$(p(n).describe),1),u("div",null,[(r(!0),c(y,null,I(p(n).notice,(m,X)=>(r(),c("ul",{key:X,class:"text-[18px] text-gray list-disc pl-4"},[u("li",null,$(m),1)]))),128))]),u("div",Zt,"NT "+$(p(n).price),1),b(d,{label:"立即購買",class:"text-[20px]"})])]),b(Z,{value:p(a)[0].value},{default:f(()=>[b(_,null,{default:f(()=>[(r(!0),c(y,null,I(p(a),m=>(r(),g(v,{key:m.title,value:m.value,class:"text-[18px]"},{default:f(()=>[st($(m.title),1)]),_:2},1032,["value"]))),128))]),_:1}),b(J,null,{default:f(()=>[b(k,{value:p(a)[0].value},{default:f(()=>[b(w)]),_:1},8,["value"]),b(k,{value:p(a)[1].value},{default:f(()=>[b(A)]),_:1},8,["value"])]),_:1})]),_:1},8,["value"])]),_:1})}}};export{ee as default};
