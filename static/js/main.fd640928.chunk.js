(this["webpackJsonppdf-sign"]=this["webpackJsonppdf-sign"]||[]).push([[0],{104:function(e,n){},105:function(e,n){},106:function(e,n){},107:function(e,n){},108:function(e,n){},123:function(e,n,t){"use strict";t.r(n);var i=t(6),r=t(5),o=t.n(r),c=t(27),s=t.n(c),l=(t(78),t(14)),a=t.n(l),d=t(23),u=t(13),j=(t(79),t(18)),b=t(72),f="hsl(218,49%,66%)";function x(e){var n=e.onLoaded,t={container:{textAlign:"center",border:"1px solid rgb(208, 227, 239)",padding:20,marginTop:12,color:f,fontSize:18,fontWeight:600,borderRadius:4,userSelect:"none",outline:0}},o=Object(r.useCallback)((function(e){n(e)}),[]),c=Object(b.a)({onDrop:o}),s=c.getRootProps,l=c.getInputProps,a=c.isDragActive;return Object(i.jsxs)("div",Object(j.a)(Object(j.a)({},s()),{},{style:t.container,children:[Object(i.jsx)("input",Object(j.a)({},l())),a?Object(i.jsx)("p",{children:"Drop a PDF here"}):Object(i.jsx)("p",{children:"Drag a PDF here"})]}))}var g=t(25),h=t(53);t(69);function O(e){return new Promise((function(n){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result;n(e)}}))}function p(e){var n=e.title,t=e.onClick,o=e.inverted,c=e.fullWidth,s=e.customFillColor,l=e.customWhiteColor,a=e.style,d=e.noHover,b=e.id,x=e.marginRight,g=function(){var e=Object(r.useState)(!1),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(r.useCallback)((function(){return i(!0)}),[]),c=Object(r.useCallback)((function(){return i(!1)}),[]),s=Object(r.useRef)();return[Object(r.useCallback)((function(e){s.current&&(s.current.removeEventListener("mouseenter",o),s.current.removeEventListener("mouseleave",c)),s.current=e,s.current&&(s.current.addEventListener("mouseenter",o),s.current.addEventListener("mouseleave",c))}),[o,c]),t]}(),h=Object(u.a)(g,2),O=h[0],p=h[1],v=s||f,m=l||"#FFF",y=null,C=v,k=v,w=m;o&&(y=v,C=null,k=m,w=v);var F={container:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:c?"100%":null,backgroundColor:p&&!d?C:y,color:p&&!d?w:k,borderRadius:4,padding:"6px 8px",border:"1px solid ".concat(v),cursor:"pointer",userSelect:"none",boxSizing:"border-box",marginRight:x}};return Object(i.jsx)("div",{id:b,ref:O,style:Object(j.a)(Object(j.a)({},F.container),a),onClick:t,children:n})}function v(e){var n=e.totalPages,t=e.pageNum,r=e.setPageNum,o={container:{marginTop:8},inlineFlex:{display:"flex",justifyContent:"center",alignItems:"center"},pageInfo:{padding:8,color:f,fontSize:14}};return Object(i.jsx)("div",{style:o.container,children:Object(i.jsxs)("div",{style:o.inlineFlex,children:[Object(i.jsx)(p,{title:"<",onClick:function(){return r(t-1)}}),Object(i.jsxs)("div",{style:o.pageInfo,children:["Page: ",t+1,"/",n]}),Object(i.jsx)(p,{title:">",onClick:function(){return r(t+1)}})]})})}var m=t(24);function y(){return function(){var e="object"===typeof window;function n(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var t=Object(r.useState)(n),i=Object(u.a)(t,2),o=i[0],c=i[1];return Object(r.useEffect)((function(){if(!e)return!1;function t(){c(n())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),o}().width<600}function C(e){var n=e.onClose,t=e.children,r=e.isVisible,o=e.style,c=e.positionTop,s=y(),l={container:{position:s?"fixed":"absolute",backgroundColor:"#FFF",border:"1px solid ".concat(f),borderRadius:4,top:c||(s?60:150),left:"50%",transform:"translateX(-50%)",width:"94%",fontFamily:"Open Sans",zIndex:1e4,boxShadow:"0 0px 14px hsla(0, 0%, 0%, 0.2)"},background:{position:"fixed",width:"100%",height:"100%",top:0,left:0,backgroundColor:"#00000033",zIndex:5e3}};return r?Object(i.jsxs)("div",{style:l.outer,children:[Object(i.jsx)("div",{style:l.background,onClick:n}),Object(i.jsx)("div",{style:Object(j.a)(Object(j.a)({},l.container),o),children:t})]}):null}function k(e){var n=e.isVisible,t=e.body,r=e.onClose,o=e.title,c=e.noPadding,s=e.backgroundColor,l=e.positionTop,a=e.style;if(!n)return null;var d={header:{backgroundColor:f,color:"#FFF",padding:8,fontSize:14,display:"flex",justifyContent:"space-between",alignItems:"center"},body:{padding:c?0:14,backgroundColor:s||"#FFF"},xIcon:{cursor:"pointer"}};return Object(i.jsx)(C,{onClose:r,isVisible:n,positionTop:l,style:a,children:Object(i.jsxs)("div",{style:d.container,children:[Object(i.jsxs)("div",{style:d.header,children:[Object(i.jsx)("div",{children:o}),Object(i.jsx)(m.b,{color:"#FFF",size:16,style:d.xIcon,className:"dialogClose",onClick:r})]}),Object(i.jsx)("div",{style:d.body,children:t})]})})}var w=t(70),F=t.n(w);function S(e){var n=e.onCancel,t=e.onConfirm,r=e.confirmTitle,o=void 0===r?"Confirm":r,c=e.leftBlock,s=e.hideCancel,l=e.disabled,a={actions:{display:"flex",justifyContent:"space-between"},cancel:{marginRight:8}};return Object(i.jsxs)("div",{style:a.actions,children:[Object(i.jsx)("div",{children:c}),Object(i.jsxs)("div",{children:[s?null:Object(i.jsx)(p,{title:"Cancel",style:a.cancel,onClick:n}),Object(i.jsx)(p,{title:o,inverted:!0,onClick:t,disabled:l})]})]})}function P(e){var n=e.onConfirm,t=e.onClose,o=Object(r.useRef)(null),c={sigContainer:{display:"flex",justifyContent:"center"},sigBlock:{display:"inline-block",border:"1px solid ".concat(f)},instructions:{textAlign:"center",color:f,marginTop:8}};return Object(i.jsx)(k,{isVisible:!0,title:"Add signature",body:Object(i.jsxs)("div",{style:c.container,children:[Object(i.jsx)("div",{style:c.sigContainer,children:Object(i.jsx)("div",{style:c.sigBlock,children:Object(i.jsx)(F.a,{velocityFilterWeight:1,ref:o,canvasProps:{width:"600",height:200,className:"sigCanvas"}})})}),Object(i.jsx)("div",{style:c.instructions,children:"Draw your signature above"}),Object(i.jsx)(S,{onCancel:t,onConfirm:function(){var e=o.current.toDataURL();n(e)}})]})})}function L(){var e={container:{backgroundColor:f,color:"#FFF",padding:12,fontWeight:600}};return Object(i.jsx)("div",{style:e.container,children:Object(i.jsx)("div",{children:"Open PDF Sign"})})}var R=t(71),D=t.n(R);function I(e){var n=e.url,t=e.onEnd,r=e.onSet,o=e.onCancel,c={container:{position:"absolute",zIndex:1e5,border:"2px solid ".concat(f)},controls:{position:"absolute",right:0,display:"inline-block",backgroundColor:f},smallButton:{display:"inline-block",cursor:"pointer",padding:4}};return Object(i.jsx)(D.a,{onStop:t,children:Object(i.jsxs)("div",{style:c.container,children:[Object(i.jsxs)("div",{style:c.controls,children:[Object(i.jsx)("div",{style:c.smallButton,onClick:r,children:Object(i.jsx)(m.a,{color:"#53c171"})}),Object(i.jsx)("div",{style:c.smallButton,onClick:o,children:Object(i.jsx)(m.b,{color:"#ef6565"})})]}),Object(i.jsx)("img",{src:n,width:200,style:c.img,draggable:!1})]})})}g.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(g.c.version,"/pdf.worker.js");var B=function(){var e={container:{maxWidth:900,margin:"0 auto"},sigBlock:{display:"inline-block",border:"1px solid #000"},documentBlock:{maxWidth:800,margin:"20px auto",marginTop:8,border:"1px solid #999"},controls:{maxWidth:800,margin:"0 auto"}},n=Object(r.useState)(null),t=Object(u.a)(n,2),o=t[0],c=t[1],s=Object(r.useState)(null),l=Object(u.a)(s,2),j=l[0],b=l[1],f=Object(r.useState)(null),m=Object(u.a)(f,2),y=m[0],C=m[1],k=Object(r.useState)(!1),w=Object(u.a)(k,2),F=w[0],S=w[1],R=Object(r.useState)(0),D=Object(u.a)(R,2),B=D[0],W=D[1],E=Object(r.useState)(0),T=Object(u.a)(E,2),z=T[0],A=T[1],N=Object(r.useState)(null),H=Object(u.a)(N,2),V=H[0],U=H[1],J=Object(r.useRef)(null);return Object(i.jsxs)("div",{children:[Object(i.jsx)(L,{}),Object(i.jsxs)("div",{style:e.container,children:[F?Object(i.jsx)(P,{onClose:function(){return S(!1)},onConfirm:function(e){b(e),S(!1)}}):null,o?null:Object(i.jsx)(x,{onLoaded:function(){var e=Object(d.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n[0]);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),o?Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{pageNum:B,setPageNum:W,totalPages:z}),Object(i.jsxs)("div",{style:e.controls,children:[j?null:Object(i.jsx)(p,{marginRight:8,title:"Add signature",onClick:function(){return S(!0)}}),o?Object(i.jsx)(p,{marginRight:8,inverted:!0,title:"Download",onClick:function(){!function(e,n){var t=document.createElement("a");t.download=n,t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}(o,"file.pdf")}}):null]}),Object(i.jsxs)("div",{ref:J,style:e.documentBlock,children:[j?Object(i.jsx)(I,{url:j,onCancel:function(){b(null)},onSet:Object(d.a)(a.a.mark((function e(){var n,t,i,r,s,l,d,u,f,x,g,p,v,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=V.originalHeight,t=V.originalWidth,i=J.current.clientHeight-(y.y-y.offsetY+64-J.current.offsetTop),r=y.x-160-y.offsetX-J.current.offsetLeft,s=i*n/J.current.clientHeight,l=r*t/J.current.clientWidth,e.next=7,h.PDFDocument.load(o);case 7:return d=e.sent,u=d.getPages(),f=u[B],e.next=12,d.embedPng(j);case 12:return x=e.sent,g=x.scale(.25),f.drawImage(x,{x:l,y:s,width:g.width,height:g.height}),e.next=17,d.save();case 17:return p=e.sent,v=new Blob([new Uint8Array(p)]),e.next=21,O(v);case 21:m=e.sent,c(m),C(null),b(null);case 25:case"end":return e.stop()}}),e)}))),onEnd:function(){var e=Object(d.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}):null,Object(i.jsx)(g.a,{file:o,onLoadSuccess:function(e){A(e.numPages)},children:Object(i.jsx)(g.b,{pageNumber:B+1,width:800,height:1200,onLoadSuccess:function(e){U(e)}})})]})]}):null]})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,124)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),o(e),c(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),W()},78:function(e,n,t){},79:function(e,n,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.fd640928.chunk.js.map