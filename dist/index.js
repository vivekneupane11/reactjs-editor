"use strict";var e=require("react"),t=require("react-from-dom"),n=require("zustand"),a=require("xpath-range");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e),l=o(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('header{background-color:#333;color:#fff;color:gold;padding:2rem;text-align:center}.blog-post{margin:0 auto;max-width:800px;padding:1rem}.heading{font-size:58px}.post-title{font-size:2.7rem;line-height:1.2}.post-meta{color:#888}.post-content{margin-top:1rem}ul{list-style:none;margin:0;padding:0}.comments-section{border-top:1px solid #ccc;margin:2rem auto;max-width:800px;padding:1rem}.comment{margin-bottom:1rem}.comment-author{font-weight:700}.left-right{float:left;margin:2% 2.5% 1rem 0;padding:1rem;width:45%}.top-bottom{clear:both;margin-bottom:1rem;margin-top:1rem}.blog-quote{background-color:#333;border-left:4px solid #333;margin:1rem 0;padding:10px}.card-with-shadow{background-color:#333;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin-bottom:2rem;margin-top:2rem;padding:15px}.floating-toolbar{align-items:center;background:#333;border:1px solid gold;border-radius:12px;box-shadow:0 54px 55px rgba(0,0,0,.25),0 -12px 30px rgba(0,0,0,.12),0 4px 6px rgba(0,0,0,.12),0 12px 13px rgba(0,0,0,.17),0 -3px 5px rgba(0,0,0,.09);display:flex;overflow:hidden}.floating-toolbar span{cursor:pointer;font-size:28px;padding:1px 18px;position:relative;transition:all .2s ease-in-out}.floating-toolbar span:hover{background:#000;color:gold}.floating-toolbar-close{align-items:center;background:#333;border-radius:100%;color:gold;cursor:pointer;display:flex;height:30px;justify-content:center;position:absolute;right:-15px;top:-15px;transition:all .2s ease;width:30px}.floating-toolbar-close:hover{scale:1.1}.modal-container{align-items:center;backdrop-filter:blur(4px);background:rgba(0,0,0,.5);display:flex;height:100vh;justify-content:center;position:fixed;top:0;width:100vw;z-index:100}.modal-content{aspect-ratio:1;background:rgba(0,0,0,.8);border-radius:20px;box-shadow:0 4px 8px rgba(0,0,0,.7);flex-direction:column;padding:10px;width:40%}.container,.modal-content{align-items:center;display:flex;justify-content:center;margin:auto}.container{flex-wrap:wrap;width:70%}.color-container{align-items:center;display:flex;flex-direction:column;margin:30px}.color-box{background:rgba(0,0,0,.8);border-radius:100%;box-shadow:0 4px 8px rgba(0,0,0,.7);cursor:pointer;height:38px;transition:all .3s ease;width:38px}.color-box:hover{scale:1.2}.color-name{color:gray}.btn-submit{background:#000;border:1px solid gold;border-radius:9px;color:#fff;cursor:pointer;font-family:Times New Roman,Times,serif;font-size:22px;margin-bottom:20px;outline:none;padding:14px 36px;transition:all .3s ease}.btn-submit:hover{background:gold;color:#000}.modal-content h1{color:gold}.comment{border:1px dashed gold;border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.1);cursor:pointer;margin:0 2px;overflow:hidden;padding:6px 12px 6px 32px;position:relative}.hover-card{background:#000;background:linear-gradient(180deg,#333,#000);border:30px solid trasparent;border-radius:20px;box-shadow:0 4px 8px rgba(0,0,0,.7);color:#f1f1f1;font-style:italic;left:50%;max-height:300px;max-width:450px;overflow-y:scroll;padding:15px 20px;position:fixed;top:-300px;transform:translate(-50%,-50%);transition:all 1s ease;transition-delay:.5s;width:100%;z-index:100}.comment:hover>.hover-card{top:30%;transition-delay:0s}.hover-title{border-bottom:.2px solid gold;color:gold;display:block;font-weight:900;margin-bottom:16px;text-transform:uppercase;width:100%}.comment:before{color:"#fff";content:"  💬  ";height:100%;left:0;padding:0 6px;position:absolute;width:100%}.text-shadow{font-weight:"bolder";text-shadow:.1px .1px #000}.highlight .bold{font-family:Times New Roman,Times,serif}.bold{font-weight:700;letter-spacing:1}.highlight{border-radius:4px;padding:4px}.notes-input{background-color:hsla(0,0%,100%,.02);border:none;border-radius:12px;color:#fff;font-size:18px;height:60%;outline:none;padding:12px;width:90%}.gold{background:gold}.red{background:red}.white{background:#fff;color:#000}.blue{background:blue}.green{background:green}.purple{background:purple}.orange{background:orange}.grey{background:grey}::-moz-selection{background:gold;color:#000}::selection{background:gold;color:#000}.notes-wrapper{display:none}.notice-info-mobile-users{color:gold;display:block;font-size:28px;padding:30px;text-align:center}.final-cta{font-weight:700;text-shadow:2px 2px gold}@media (min-width:1024px){.notes-wrapper{display:block}.notice-info-mobile-users{display:none}}.containers{display:flex;flex-direction:column;margin:0 auto;max-width:800px;padding:20px}.heading{animation:fadeInDown .6s ease-out forwards;font-size:30px;margin-bottom:20px;opacity:0;text-align:center;transform:translateY(-20px)}.list-container{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-between}.list{border-radius:5px;border-radius:12px;list-style-type:none;padding:10}.list-left{flex:1;margin-right:10px}.list-right{flex:1;margin-left:10px}.list-item{box-shadow:0 0 10px rgba(0,0,0,.3);font-size:18px;margin:5px;padding:10px;transform:translateY(20px)}.image-container,.list-item{animation:fadeInUp .6s ease-out forwards;opacity:0}.image-container{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:10%;transform:translateY(100px)}.image-column{flex-basis:calc(90.33% - 10px);margin:20px auto}.image-column img{border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.3);height:auto;width:100%}@media screen and (max-width:768px){.image-column{flex-basis:calc(90% - 10px)}}@keyframes fadeInDown{to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}');const i=n.create((e=>({openComment:!1,toggleCommentModal:()=>e((e=>({openComment:!e.openComment})))}))),s=l.default('\n<main>\n<header>\n<p class="heading">Select Text To Add Comments, Highlight text ..</p>\n</header>\n<div class="blog-post">\n<p class="post-title">Why Nepal is the Best Place to Visit</p>\n<p class="post-meta">Author Name | Publication Date</p>\n<div class="post-content">\n    <p>\n        Nepal, a small landlocked country nestled in the lap of the Himalayas, is a paradise for travelers and adventure seekers alike. Here are some compelling reasons why Nepal should be at the top of your travel bucket list:\n    </p>\n    \x3c!-- Different Paragraph Styles --\x3e\n    <p class="left-right">\n        Nepal\'s diverse landscapes and cultures make it a unique destination. From the lush green valleys of Pokhara to the arid mountain deserts of Upper Mustang.\n    </p>\n\n    <p class="blog-quote">\n        "The mountains are calling, and I must go." - John Muir. This famous quote perfectly captures the allure of Nepal\'s majestic peaks, drawing adventurers from all corners of the globe.\n    </p>\n\n    <ul>\n        <li><strong>Breathtaking Himalayan Landscapes:</strong> Nepal is home to eight of the world\'s fourteen highest peaks, including Mount Everest, the highest of them all. The stunning Himalayan landscapes offer awe-inspiring views and fantastic trekking opportunities.</li>\n        <li><strong>Rich Cultural Heritage:</strong> Nepal is steeped in history and culture. The ancient cities of Kathmandu, Bhaktapur, and Patan are UNESCO World Heritage sites, featuring beautiful temples, palaces, and shrines that showcase the country\'s unique architecture and traditions.</li>\n        <li><strong>Spiritual and Peaceful Environment:</strong> The serene atmosphere and numerous monasteries and stupas in Nepal create a perfect environment for spiritual exploration and meditation.</li>\n        <div class="card-with-shadow">\n    <p>\n        Planning a trip to Nepal? Don\'t forget to visit Chitwan National Park, where you can spot various wildlife species and have a thrilling encounter with the endangered one-horned rhinoceros.\n    </p>\n</div>\n        <li><strong>Adventure Sports:</strong> For adrenaline junkies, Nepal offers a range of adventure sports, including trekking, mountaineering, white-water rafting, paragliding, and jungle safaris.</li>\n        <li><strong>Warm Hospitality:</strong> Nepalese people are known for their warm hospitality and friendliness towards visitors. You\'ll feel welcome and at home throughout your journey.</li>\n        <li><strong>Delicious Nepali Cuisine:</strong> Don\'t miss the opportunity to savor authentic Nepali dishes like momo, dal bhat, and Newari delicacies.</li>\n        <li><strong>Diverse Flora and Fauna:</strong> Nepal\'s rich biodiversity is a haven for nature lovers. National parks and wildlife reserves are home to a wide range of flora and fauna, including the elusive Bengal tiger and the one-horned rhinoceros.</li>\n    </ul>\n    <p>\n        Whether you\'re an adventure enthusiast, a culture buff, a nature lover, or seeking spiritual rejuvenation, Nepal offers something for everyone. So, pack your bags and embark on a journey to discover the wonders of this enchanting Himalayan nation.\n    </p>\n\n  \n\n\n\n    <p class="top-bottom">\n        To experience Nepal\'s spirituality, head to Boudhanath Stupa, one of the largest stupas in the world. The sight of pilgrims circling the stupa in a clockwise direction is a mesmerizing display of devotion and faith.\n    </p>\n</div>\n</div>\n<div class="comments-section">\n<h3>Comments</h3>\n<div class="comment">\n    <p class="comment-author">John Doe</p>\n    <p class="comment-content">This sounds amazing! Nepal is now on my travel list.</p>\n</div>\n</div>\n</main>'),d=n.create((e=>({dom:{...s},setDom:t=>e((e=>({dom:t})))}))),c=n.create((e=>({open:!1,toggleModal:()=>e((e=>({open:!e.open})))}))),p={name:"",value:""},m=n.create((e=>({type:{...p},config:{xPath:"",selectedText:""},changeType:({name:t,value:n})=>e((e=>({type:{...e.type,name:t,value:n}}))),changeConfig:({xPath:t,selectedText:n})=>e((e=>({config:{...e.config,xPath:t,selectedText:n}})))})));const u=e=>{let t=[];if(e?.props?.children?.length>0&&"string"!=typeof e?.props?.children){const n=e?.props?.children.map((e=>e.type?u(e):e));t=[...n]}const n={...e?.props}||{};n.key=Date.now()+"."+Math.random(1e3);let a=e?.type?.toLowerCase();return r.default.createElement(a,n,t.length>0?t:null)};function g(){const e=d((e=>e.dom)),t=d((e=>e.setDom)),n=m((e=>e.type)),a=m((e=>e.changeType)),o=m((e=>e.config)),r=m((e=>e.changeConfig)),l=c((e=>e.toggleModal));function i(e,t){let a=t;if(t||(a=o.xPath,a.reverse()),e?.props?.children.length){let t=a.pop(),s=(r=t,l=r?.replace(/[^0-9]/g,""),l),d=null;const c=e?.props?.children.filter(((a,r)=>{if(!a?.type&&a?.includes(o.selectedText)){d=r,console.log("yes here it is",a,n);const t=a.split(o.selectedText);let l={type:"span",props:{children:[t[0],{type:"span",props:{children:"comment"===n.name?[o.selectedText,{type:"section",props:{className:"hover-card",children:[{type:"span",props:{className:"hover-title",children:[o.selectedText]}},n.value]}}]:[o.selectedText],className:`text-shadow ${n.name} ${n.value?n.value:""} `}},t[1]]}},i=e?.props?.children;i[d]=l,Object.assign(e?.props?.children,i)}return t?.startsWith(a.type,[])}));Object.assign(e?.props?.children,[]),i(c[s-1],a)}var r,l;return e}return{addBold:()=>{if("bold"===n.name&&o.selectedText&&o.xPath){let n=i(e,"");const o=Object.create(n);t(o),r({xPath:"",selectedText:""}),a({name:"",value:""})}},addComment:()=>{if("comment"===n.name&&o.selectedText&&o.xPath){let n=i(e,"");const o=Object.create(n);t(o),r({xPath:"",selectedText:""}),a({name:"",value:""})}},addHighlight:()=>{if("highlight"===n.name&&n.value&&o.selectedText&&o.xPath){let n=i(e,"");const o=Object.create(n);t(o),r({xPath:"",selectedText:""}),a({name:"",value:""}),l((e=>!e))}}}}function h(){const[t,n]=e.useState(""),a=m((e=>e.changeType)),o=m((e=>e.type)),l=i((e=>e.toggleCommentModal)),{addComment:s}=g();e.useEffect((()=>{o.name&&o.value&&(s(),l())}),[o.name,o.value,s,l]);return r.default.createElement("section",{className:"modal-container"},r.default.createElement("div",{className:"modal-content"},r.default.createElement("h1",null,"Add Your Notes"),r.default.createElement("textarea",{onChange:e=>{e.preventDefault(),n(e.target.value)},className:"notes-input",placeholder:"Enter your Notes"}),r.default.createElement("button",{onClick:()=>{a({name:"comment",value:t})},className:"btn-submit"},"Add Note")))}const f=[{name:"red",color:"red"},{name:"gold",color:"gold"},{name:"white",color:"white"},{name:"blue",color:"blue"},{name:"green",color:"green"},{name:"purple",color:"purple"},{name:"orange",color:"orange"},{name:"grey",color:"grey"},{name:"pink",color:"pink"}];function x(){const t=m((e=>e.changeType)),n=m((e=>e.type)),{addHighlight:a}=g();c((e=>e.toggleModal)),e.useEffect((()=>{n.name&&n.value&&a()}),[n.value,a,n.name]);return r.default.createElement("section",{className:"modal-container"},r.default.createElement("div",{className:"modal-content"},r.default.createElement("h1",null,"Pick your color"),r.default.createElement("div",{className:"container"},f.map((e=>r.default.createElement("span",{className:"color-container",key:e.name},r.default.createElement("div",{className:"color-box",onClick:()=>{return n=e.name,void t({name:"highlight",value:n});var n},style:{backgroundColor:`${e.name}`,scale:n.value===e.name?"1.3":"1"}}),r.default.createElement("span",{className:"color-name"},e.name)))))))}function b({x:t,y:n}){const[a,o]=e.useState(!0),l=m((e=>e.changeType)),{addBold:s}=g(),d=c((e=>e.toggleModal)),p=i((e=>e.toggleCommentModal)),u=m((e=>e.type)),h=m((e=>e.config)),f=({name:e,value:t})=>{l({name:e,value:t}),"bold"!==e&&("comment"===e?p():d())};return e.useEffect((()=>{"bold"===u.name&&h.selectedText&&s()}),[u.name,s]),e.useEffect((()=>{o(!0)}),[t]),r.default.createElement(r.default.Fragment,null,a&&t?r.default.createElement("section",{style:{left:t-100+"px",top:`${n+10}px`,position:"absolute"}},r.default.createElement("div",{className:"floating-toolbar"},r.default.createElement("span",{onClick:()=>f({name:"bold"})},"B"),r.default.createElement("span",{onClick:()=>f({name:"highlight"})},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"}))),r.default.createElement("span",{onClick:()=>f({name:"comment"})},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",height:"20px",width:"20px"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})))),r.default.createElement("span",{onClick:()=>o(!a),className:"floating-toolbar-close"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"27px",width:"27px",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},r.default.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})))):null)}module.exports=t=>{const n=c((e=>e.open)),o=i((e=>e.openComment)),s=d((e=>e.setDom)),p=d((e=>e.dom)),g=u(p),{editorRef:f,mousePoint:v}=function(){const[t,n]=e.useState({x:0,y:0}),o=m((e=>e.changeConfig)),r=e.useRef(),l=e.useCallback((e=>{if(!r.current.contains(e.target))return;let t=document.getSelection().toString();if(!t)return;n({x:e.pageX,y:e.pageY});const l=a.fromRange(document.getSelection().getRangeAt(0),r.current).start.split("/").filter((e=>e)),[i,...s]=l;o({xPath:s,selectedText:t})}),[o]);return e.useEffect((()=>(document.addEventListener("mouseup",l),()=>{document.removeEventListener("mouseup",l)})),[l]),{editorRef:r,mousePoint:t}}();return e.useEffect((()=>{if(!p){const e=l.default(t.htmlContent);s({...e})}}),[p,s,t]),r.default.createElement(r.default.Fragment,null,n&&r.default.createElement(x,null),o&&r.default.createElement(h,null),p&&r.default.createElement("div",{className:"notes-wrapper",ref:f},g),r.default.createElement(b,{x:v.x,y:v.y}),r.default.createElement("p",null,"Not available for mobile"))};
