!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t){const n=document.querySelector("#billingFirstName"),o=document.querySelector("#billingLastName"),i=document.querySelector("#billingPhoneNumber"),a=document.querySelector("#billingEmail"),r=document.querySelector("#billingAddress"),s=document.querySelector("#billingCity"),l=document.querySelector("#billingState"),c=document.querySelector("#billingSubmit"),d=document.querySelector("#shippingFee"),u=document.querySelector("#orderSummaryShipping"),m=document.querySelector("#orderSummaryTotal"),f=document.querySelector("#orderSummarySubTotal"),p=document.querySelector(".billing-shipment"),h=document.querySelector(".door-delivery"),y=document.querySelector(".dd-delivery-item-list.pickup"),v=document.querySelector("#deliveryRadio"),b=document.querySelector("#pickUpRadio"),T=document.querySelector("#payNow"),g=document.querySelector("#payNowMobile");let L=0,S=0,w=[],M=[],q={},H=0;p.innerHTML="";window.addEventListener("DOMContentLoaded",()=>{loader.classList.add("showLoader"),handleNavbarLoad.then(e=>{if(e){q.user=e,firebase.database().ref(`users/${e}`).once("value").then(e=>{const{email:t,lastName:c,firstName:d,phoneNumber:u,billingAddress:m}=e.val(),{address:f,city:p,state:h}=m;q.email=t,n.value=d,o.value=c,i.value=u,a.value=t,r.innerHTML=f,s.value=p,l.value=h}).then(()=>{fetch(`${getItemsInCartEndpoint}/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{const{status:t,data:n}=e;if("success"===t){let e=(e=>{switch(e){case 1:return 3e3;case 2:return 3500;case 3:return 4e3;case 4:return 4500;default:return 0}})(n.length);H=e,d.innerHTML=formatter.format(e),u.innerHTML=formatter.format(e),L+=e,(e=>new Promise((t,n)=>{let o=e.map(e=>new Promise(t=>fetch(`${singleProductEndpoint}/${e.item}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>t(e))));Promise.all(o).then(e=>{t(e)})}))(n).then(e=>{var t;n.map((e,t)=>{w.push(e.item),M.push(e.quantity)}),loader.classList.remove("showLoader"),t=n,e.map((e,n)=>{L+=e.data.price*t[n].quantity,S+=e.data.price*t[n].quantity}),m.innerHTML=formatter.format(L),f.innerHTML=formatter.format(S),e.map((e,t)=>{"success"===e.status&&((e,t)=>{const{status:n,data:o}=e,{name:i,description:a}=o,r=document.createElement("div");r.classList.add("billing-shipment-row");const s=document.createElement("p");s.innerHTML=`${t}x`;const l=document.createElement("p");l.innerHTML=i;const c=document.createElement("p");c.innerHTML=`Power: ${a.power}HP`;const d=document.createElement("p");d.innerHTML=`Size: ${a.size}`,r.append(s,l,c,d),p.append(r)})(e,n[t].quantity)})})}})}).catch(e=>{console.log(e)})}else window.location.href="../Homepage/index.html"}).catch(e=>{console.log(e)})});const N=e=>"billingFirstName"===e.id||"billingLastName"===e.id?!0===isValidText(e.value)||shakeInput(e):"billingPhoneNumber"===e.id?!0===isValidPhoneNumber(e.value)||shakeInput(e):"billingState"===e.id||"billingCity"===e.id||"billingAddress"===e.id?!0===inputIsNotEmpty(e.value)||shakeInput(e):void 0;c.addEventListener("click",()=>{if(N(n),N(o),N(billingAddress),N(s),N(l),N(i),N(n)&&N(o)&&N(billingAddress)&&N(s)&&N(l)&&N(i)){const e={firstName:n.value,lastName:o.value,email:a.value,phoneNumber:i.value,billingAddress:{address:billingAddress.value,city:s.value,state:l.value},user:USER_ID};fetch("https://peaceful-river-39598.herokuapp.com/api/v1/mandilas/auth/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{const{data:t,message:n,code:o,status:i}=e;"success"===i?(infoText.innerHTML="Your billing information has successfully been saved",infoToast.classList.add("showInfoToast"),setTimeout(()=>{infoToast.classList.remove("showInfoToast")},2e3)):(infoText.innerHTML="Your billing information could not be saved",infoToast.classList.add("showInfoToast"),setTimeout(()=>{infoToast.classList.remove("showInfoToast")},2e3))}).catch(e=>{console.log(e)})}});b.addEventListener("click",e=>{return t=e.target,console.log(t.checked),void(!0===t.checked&&(y.classList.add("show-pick-up"),h.classList.add("hide-delivery"),L-=H,u.innerHTML="NGN 0",m.innerHTML=formatter.format(L)));var t});v.addEventListener("click",e=>{!0===e.target.checked&&(y.classList.remove("show-pick-up"),h.classList.remove("hide-delivery"),L+=H,u.innerHTML=formatter.format(H),m.innerHTML=formatter.format(L))});const E=()=>{if(N(n),N(o),N(billingAddress),N(s),N(l),N(i),N(n)&&N(o)&&N(billingAddress)&&N(s)&&N(l)&&N(i)){T.innerHTML='<i class="fa fa-spinner fa-spin"></i>';let e={custom_fields:[{display_name:"Cart_Items",variable_name:"cart_items",value:w.join(",")},{display_name:"Quantity",variable_name:"quantity",value:M.join(",")},{display_name:"User",variable_name:"user",value:q}]},t=100*L;const n={email:q.email,amount:t,metadata:e};fetch(initiatePaymentEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{console.log(e);const{status:t,data:n}=e;"success"===t&&(window.location.href=n.redirect_url),"error"===t&&(T.innerHTML="Pay Now",infoText.innerHTML="An error occurred. Please try again",infoToast.classList.add("showInfoToast"),setTimeout(()=>{infoToast.classList.remove("showInfoToast")},2e3))})}else infoText.innerHTML="Kindly check your billing information",infoToast.classList.add("showInfoToast"),setTimeout(()=>{infoToast.classList.remove("showInfoToast")},2e3)};T.addEventListener("click",E),g.addEventListener("click",E)}});