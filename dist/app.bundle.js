(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=[[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const a={};for(let e=1;e<=t;e+=1)for(let s=1;s<=t;s+=1)a[`${e},${s}`]=r(e,s,t,n);return a}function r(t,e,n,r){const a=[];return r.forEach((r=>{const s=t+r[0],o=e+r[1];s>=1&&s<=n&&o>=1&&o<=n&&a.push(`${s},${o}`)})),a}class a{constructor(){this.head=null,this.tail=null}newNode(t){return{value:t,next:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}}enqueue(t){return this.head?(this.tail.next=this.newNode(t),this.tail=this.tail.next,this.head):(this.head=this.newNode(t),this.tail=this.head,this.head)}dequeue(){if(this.isEmpty())return console.log("queue is empty, nothing to dequeue"),null;const t=this.head.value;return this.head=this.head.next,this.head||(this.tail=null),t}isEmpty(){return null===this.head}}function s(t,e,n){const r=function(t,e){const n={};Object.keys(t).forEach((t=>{n[t]={distance:null,predecessor:null}})),n[e].distance=0;const r=new a;for(r.enqueue(e);!r.isEmpty();){const e=r.dequeue();t[e].forEach((t=>{null===n[t].distance&&(n[t].predecessor=e,n[t].distance=n[e].distance+1,r.enqueue(t))}))}return n}(t,n),s=[e],{distance:o}=r[e];let i=e;for(;i!==n&&i;)i=r[i].predecessor,s.push(i);return i?{movesArr:s,distance:o}:(console.log("no path to end vertex"),null)}const o={};function i(t,e){o[t]=o[t]||[],o[t].push(e)}function d(t,e){o[t]&&o[t].forEach((t=>{t(e)}))}(()=>{const t={boardSize:null},e=document.querySelectorAll(".settings>div>input"),n=document.querySelector(".settings>button");function r(e){t.boardSize=parseInt(e.target.value,10),d("buildNewBoard",t.boardSize),n.disabled=!0}[...e].forEach((t=>{t.addEventListener("change",r)})),n.addEventListener("click",(function(){d("buildNewBoard",t.boardSize),n.disabled=!0})),i("knightPlaced",(function(){n.disabled=!1}))})();const l=t.p+"4636a7ecc8cc7235d502.svg",c=((()=>{const t={boardGraph:null,isSquareLight:!1,startVertex:null,endVertex:null,shortestPath:[]},e=document.querySelector(".board-frame");function r(n){t.startVertex?n.target.getAttribute("data-index")!==t.startVertex&&n.target.getAttribute("data-index")!==t.endVertex&&function(e){t.endVertex=e.target.getAttribute("data-index");const n=s(t.boardGraph,t.startVertex,t.endVertex);t.shortestPath&&function(){for(let e=1;e<=t.shortestPath.length-1;e+=1){const n=t.shortestPath[e],r=document.querySelector(`.board>div[data-index="${n}"]`);e===t.shortestPath.length-1?r.classList.remove("goal"):r.classList.remove("path"),r.innerText=""}}(),function(e){t.shortestPath=e.movesArr;for(let e=1;e<=t.shortestPath.length-1;e+=1){const n=t.shortestPath[e],r=document.querySelector(`.board>div[data-index="${n}"]`);e===t.shortestPath.length-1?r.classList.add("goal"):r.classList.add("path"),r.innerText=e}}(n),d("pathCalculated",t.shortestPath.length-1)}(n):function(n){var r;t.startVertex=n.target.getAttribute("data-index"),(r=n.target).classList.add("knighted"),r.style.backgroundImage=`url(${l})`,e.style.backgroundColor="#b76d68",d("knightPlaced")}(n)}i("buildNewBoard",(function(a){e.firstElementChild&&e.removeChild(e.firstElementChild);const s=document.createElement("div");s.classList.add("board"),s.classList.add("grid"),e.style.setProperty("--square-factor",a),e.style.backgroundColor="#426160";for(let e=a;e>=1;e-=1){for(let n=1;n<=a;n+=1){const a=document.createElement("div");a.classList.add((t.isSquareLight=!t.isSquareLight,t.isSquareLight?"light":"dark")),a.setAttribute("data-index",`${n},${e}`),a.addEventListener("click",r),s.appendChild(a)}t.isSquareLight=!t.isSquareLight}e.appendChild(s),t.boardGraph=n(a),t.startVertex=null,t.endVertex=null,t.shortestPath=null}))})(),(()=>{const t=document.querySelector(".inner-messages");i("buildNewBoard",(function(){[...t.children].forEach((e=>{t.removeChild(e)}));const e=document.createElement("p");e.innerText="Place a knight anywhere on the board.",t.appendChild(e)})),i("knightPlaced",(function(){[...t.children].forEach((e=>{t.removeChild(e)}));const e=document.createElement("p");e.innerText="Select an endpoint and watch the magic happen...",t.appendChild(e)})),i("pathCalculated",(function(e){[...t.children].forEach((e=>{t.removeChild(e)}));const n=e>1?"s":"",r=document.createElement("p"),a=document.createElement("p");r.innerText=`It takes at least ${e} move${n} for the knight to get from start to end.`,a.innerText="Try a different square, reset the current board or select a new board.",t.appendChild(r),t.appendChild(a)}))})(),new class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;this.graph=this.#t(t)}#t(t){return n(t)}getMoves(t,e){return s(this.graph,t,e)}});console.log(c.getMoves("1,1","1,2"))})();
//# sourceMappingURL=app.bundle.js.map