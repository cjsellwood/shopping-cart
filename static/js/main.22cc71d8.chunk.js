(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c.n(n),r=c(16),s=c.n(r),j=(c(24),c(4)),m=c(18),u=c(10),l=(c(25),c(2)),d=(c(26),c.p+"static/media/logo.25994b6b.png"),o=function(){return Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"home-image",src:d,alt:"MetalMart"})}),Object(a.jsx)("h1",{children:"The destination for all your elemental metal needs"})]})},b=(c(27),function(e){var t=e.data.map((function(t){return Object(a.jsxs)(j.b,{to:{pathname:"/store/".concat(t.name)},className:"store-item",children:[Object(a.jsx)("div",{className:"product-image-container",children:Object(a.jsx)("img",{className:"product-image",src:t.src,alt:t.name})}),Object(a.jsxs)("div",{className:"product-details",children:[Object(a.jsx)("h2",{children:t.name}),Object(a.jsxs)("h2",{children:["$",e.formatPrice(t.price)]})]})]},t.number)}));return Object(a.jsxs)("div",{className:"store-container",children:[Object(a.jsx)("div",{}),t]})}),p=(c(33),function(e){var t=0,c=e.cart.map((function(c,n){return t+=c.quantity*c.price,Object(a.jsxs)(j.b,{to:{pathname:"/store/".concat(c.name)},className:"cart-item",children:[Object(a.jsx)("div",{className:"cart-image-container",children:Object(a.jsx)("img",{className:"cart-image",src:c.src,alt:c.name})}),Object(a.jsxs)("div",{className:"cart-details-container",children:[Object(a.jsx)("h1",{children:c.name}),Object(a.jsxs)("p",{children:[c.quantity," kg"]})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:["$",e.formatPrice(c.price*c.quantity)]})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{title:"Remove",type:"button","data-index":n,onClick:e.removeItem,className:"remove-button",children:"X"})})]},c.number)}));return Object(a.jsxs)("div",{className:"cart-container",children:[c,Object(a.jsxs)("div",{className:"total-container",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Total"}),Object(a.jsxs)("h2",{children:["$",e.formatPrice(t)]}),0===e.cart.length?null:Object(a.jsx)("button",{type:"button",children:"Checkout"})]})]})]})}),h=(c(34),function(e){return Object(a.jsx)("nav",{className:"Nav",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("img",{className:"logo",src:d,alt:"Logo"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(j.b,{to:"/store",children:"Store"})}),Object(a.jsx)("li",{children:Object(a.jsxs)(j.b,{to:"/cart",children:[Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",className:"cart-icon",children:Object(a.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})}),Object(a.jsx)("div",{className:"cart-quantity",children:Object(a.jsx)("p",{children:e.cart.length})})]})})]})})}),O=c.p+"static/media/Lithium.844a1ea0.jpg",x=c.p+"static/media/Magnesium.0ced9276.jpg",g=c.p+"static/media/Aluminium.ef7f3ba4.jpg",f=c.p+"static/media/Titanium.d26f0f4c.jpg",v=c.p+"static/media/Iron.a4bb1cf2.jpg",y=c.p+"static/media/Cobalt.0242e03a.jpg",N=c.p+"static/media/Nickel.b5d4ca46.jpg",q=c.p+"static/media/Copper.46ac55d1.jpg",w=(c.p,c.p+"static/media/Silver.c65116a3.jpg"),T=c.p+"static/media/Tin.f1a374dd.jpg",C=c.p+"static/media/Tungsten.b04799bd.jpg",k=c.p+"static/media/Platinum.284e97d4.jpg",A=c.p+"static/media/Gold.65ed9b63.jpg",P=[{name:"Lithium",number:3,price:81.4,quantity:0,src:O},{name:"Magnesium",number:12,price:2.32,quantity:0,src:x},{name:"Aluminium",number:13,price:1.79,quantity:0,src:g},{name:"Titanium",number:22,price:11.1,quantity:0,src:f},{name:"Iron",number:26,price:.424,quantity:0,src:v},{name:"Cobalt",number:27,price:32.8,quantity:0,src:y},{name:"Nickel",number:28,price:13.9,quantity:0,src:N},{name:"Copper",number:29,price:6,quantity:0,src:q},{name:"Zinc",number:30,price:2.55,quantity:0,src:A},{name:"Silver",number:47,price:521,quantity:0,src:w},{name:"Tin",number:50,price:18.7,quantity:0,src:T},{name:"Tungsten",number:74,price:35.3,quantity:0,src:C},{name:"Platinum",number:78,price:27800,quantity:0,src:k},{name:"Gold",number:79,price:44800,quantity:0,src:A},{name:"Lead",number:82,price:2,quantity:0,src:c.p+"static/media/Lead.c792e200.jpg"},{name:"Uranium",number:92,price:101,quantity:0,src:c.p+"static/media/Uranium.137460d0.jpg"}],S=(c(35),function(e){var t=Object(l.f)().pathname.split("/"),c=t[t.length-1],n=e.data.filter((function(e){return e.name===c}))[0],i=e.data.indexOf(n);return Object(a.jsxs)("div",{className:"product-container",children:[Object(a.jsx)("h1",{className:"product-name",children:n.name}),Object(a.jsx)("div",{className:"showcase-image-container",children:Object(a.jsx)("img",{className:"showcase-image",src:n.src,alt:n.name})}),Object(a.jsxs)("p",{className:"product-price",children:["$",e.formatPrice(n.price)," /kg"]}),Object(a.jsxs)("form",{className:"product-form","data-index":i,onSubmit:e.addToCart,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"number",name:"quantity",placeholder:"Enter Quantity",onChange:e.changeQuantity,value:0!==e.currentQuantity?e.currentQuantity:"",min:"0"}),Object(a.jsx)("label",{htmlFor:"quantity",children:"kg"})]}),Object(a.jsx)("button",{type:"submit",children:"Add To Cart"})]}),Object(a.jsxs)("p",{className:"product-number",children:[" Atomic Number: ",n.number]})]})});function L(){var e=Object(l.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var M=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(P),s=Object(u.a)(r,2),j=s[0],d=(s[1],Object(n.useState)(0)),O=Object(u.a)(d,2),x=O[0],g=O[1],f=function(e){for(var t=[],c=0;c<e.length;c++)t.push(Object(m.a)({},e[c]));return t},v=function(e){return Number(e.toFixed(2)).toLocaleString(void 0,{minimumFractionDigits:2})};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(L,{}),Object(a.jsx)(h,{cart:c}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,children:Object(a.jsx)(o,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/store",children:Object(a.jsx)(b,{data:j,formatPrice:v})}),Object(a.jsx)(l.a,{path:"/cart",children:Object(a.jsx)(p,{cart:c,formatPrice:v,removeItem:function(e){return function(e){e.preventDefault();var t=e.target.getAttribute("data-index"),a=f(c);a.splice(t,1),i(a)}(e)}})}),Object(a.jsx)(l.a,{path:"/store/:name",children:Object(a.jsx)(S,{currentQuantity:x,changeQuantity:function(e){return function(e){g(Number(e.target.value))}(e)},data:j,addToCart:function(e){return function(e){e.preventDefault();var t=x;if(g(0),!(t<=0)){var a=e.target.getAttribute("data-index"),n=j[a].name,r=f(c),s=r.filter((function(e){return e.name===n}))[0],m=r.indexOf(s);-1===m?(r.push(j[a]),r[r.length-1].quantity=t):r[m].quantity+=t,i(r)}}(e)},formatPrice:v})})]})]})},z=function(){return Object(a.jsx)(j.a,{children:Object(a.jsx)(M,{})})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.22cc71d8.chunk.js.map