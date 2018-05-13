webpackJsonp([1],[,,,,,,,,function(t,a,e){"use strict";a.a={name:"app",data:function(){return{drawer:null}}}},function(t,a,e){"use strict";var n=e(27),i=e.n(n);a.a={methods:{displayDetails:function(t){this.$router.push({name:"detail",params:{id:t}})},getCats:function(){return navigator.onLine?(this.saveCatsToCache(),this.$root.cat):JSON.parse(localStorage.getItem("cats"))},saveCatsToCache:function(){this.$root.$firebaseRefs.cat.orderByChild("created_at").once("value",function(t){var a=[];t.forEach(function(t){var e=t.val();e[".key"]=t.key,a.push(e)}),localStorage.setItem("cats",i()(a))})}},mounted:function(){this.saveCatsToCache()}}},function(t,a,e){"use strict";var n=e(33);e.n(n);a.a={data:function(){return{cat:null}},mounted:function(){var t=this;this.cat=Object(n.find)(this.$root.cat,function(a){return a[".key"]===t.$route.params.id})}}},function(t,a,e){"use strict";var n=e(38),i=e.n(n),r=e(12);a.a={mixins:[r.a],data:function(){return{catUrl:null,title:null}},mounted:function(){var t=this;this.$http.get("https://thecatapi.com/api/images/get?format=xml&results_per_page=1").then(function(a){var e=i()(a.body).root.children[0].children[0].children[0].children[0].content,n=new Image;n.onload=function(){t.catUrl=e},n.src=e})}}},function(t,a,e){"use strict";var n={methods:{postCat:function(t,a){this.$root.$firebaseRefs.cat.push({url:t,comment:a,info:"Posted by Charles on Tuesday",created_at:-1*(new Date).getTime()}).then(this.$router.go(-1))}}};a.a=n},function(t,a,e){"use strict";var n=e(14),i=e(12);a.a={mixins:[i.a],data:function(){return{mediaStream:null}},mounted:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(function(a){t.useMedia(a)}).catch(function(t){return console.error("getUserMedia() error:",t)})},methods:{dataURItoBlob:function(t){for(var a=atob(t.split(",")[1]),e=t.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(a.length),i=new Uint8Array(n),r=0;r<a.length;r++)i[r]=a.charCodeAt(r);return new Blob([n],{type:e})},useMedia:function(t){this.mediaStream=t,this.$refs.video.srcObject=t,this.$refs.video.play()},capture:function(){var t=this.mediaStream.getVideoTracks()[0],a=new window.ImageCapture(t),e=this;return a.grabFrame().then(function(t){console.log("bitmap :",t);var a=document.createElement("canvas");return a.getContext("2d").drawImage(t,0,0,t.width,t.height),a.toDataURL()}).then(function(t){return e.dataURItoBlob(t)}).then(function(t){n.a.storage.ref().child("images/picture-"+(new Date).getTime()).put(t).then(function(t){var a=t.metadata.fullPath;return n.a.storage.ref().child(a).getDownloadURL()}).then(function(t){e.postCat(t,"Hello")})})}},destroyed:function(){this.mediaStream.getTracks().map(function(t){return t.stop()})}}},function(t,a,e){"use strict";var n=e(45),i=e.n(n),r={apiKey:"AIzaSyBA_idIfrsdBYj8lKBNrQrWj8v5n5qzK34",authDomain:"vuechat-2dc89.firebaseapp.com",databaseURL:"https://vuechat-2dc89.firebaseio.com",projectId:"vuechat-2dc89",storageBucket:"vuechat-2dc89.appspot.com",messagingSenderId:"900855935344"};i.a.initializeApp(r),a.a={database:i.a.database(),storage:i.a.storage()}},,function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(17),i=(e.n(n),e(6)),r=e(20),s=e(23),o=e(56),c=e.n(o),l=e(57),u=e.n(l),d=e(14),v=e(58);i.a.use(v.a),i.a.use(u.a),i.a.use(c.a),i.a.config.productionTip=!1,new i.a({el:"#app",firebase:{cat:d.a.database.ref("cat").orderByChild("created_at")},router:s.a,template:"<App/>",components:{App:r.a}})},function(t,a){},,,function(t,a,e){"use strict";function n(t){e(21)}var i=e(8),r=e(22),s=e(2),o=n,c=s(i.a,r.a,!1,o,null,null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},[e("v-list-tile",{attrs:{to:"/"}},[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),e("v-list-tile",{attrs:{to:"/post"}},[e("v-list-tile-action",[e("v-icon",[t._v("contact_mail")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Post")])],1)],1)],1)],1),t._v(" "),e("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[e("v-toolbar-side-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-toolbar-title",[t._v("CropChat")])],1),t._v(" "),e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"justify-center":"","align-center":""}},[e("router-view")],1)],1)],1),t._v(" "),e("v-footer",{attrs:{color:"indigo",app:""}},[e("span",{staticClass:"white--text"},[t._v("© 2017")])])],1)},i=[],r={render:n,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";var n=e(6),i=e(24),r=e(25),s=e(31),o=e(36),c=e(43);n.a.use(i.a),a.a=new i.a({routes:[{path:"/",name:"home",component:r.a},{path:"/detail/:id",name:"detail",component:s.a},{path:"/post",name:"post",component:o.a},{path:"/camera",name:"camera",component:c.a}]})},,function(t,a,e){"use strict";function n(t){e(26)}var i=e(9),r=e(30),s=e(2),o=n,c=s(i.a,r.a,!1,o,"data-v-28c25d3d",null);a.a=c.exports},function(t,a){},,,,function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("div"),t._v(" "),e("div",t._l(t.getCats(),function(a){return e("div",{key:a.id,on:{click:function(e){t.displayDetails(a[".key"])}}},[e("div",{staticClass:"image-card__picture"},[e("img",{attrs:{src:a.url}})]),t._v(" "),e("div",[e("span",[t._v(t._s(a.comment))])])])}))]),t._v(" "),e("router-link",{attrs:{to:"/post"}},[e("v-icon",[t._v("add")])],1),t._v(" "),e("router-link",{staticClass:"take-picture-button",attrs:{to:"/camera"}},[e("v-icon",[t._v("camera")])],1)],1)},i=[],r={render:n,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function n(t){e(32)}var i=e(10),r=e(35),s=e(2),o=n,c=s(i.a,r.a,!1,o,"data-v-73dbb69a",null);a.a=c.exports},function(t,a){},,,function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.cat?e("div",{staticClass:"mdl-grid"},[e("div",{staticClass:"mdl-cell mdl-cell--8-col"},[e("div",{staticClass:"picture"},[e("img",{attrs:{src:t.cat.url}})]),t._v(" "),e("div",{staticClass:"info"},[e("span",[t._v(t._s(t.cat.info))])])]),t._v(" "),e("div",{staticClass:"mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"},[e("div",{staticClass:"comment"},[e("span",[t._v(t._s(t.cat.comment))])]),t._v(" "),e("div",{staticClass:"actions"},[e("router-link",{attrs:{to:"/post"}},[t._v("\n        ANSWER\n      ")])],1)])]):t._e()},i=[],r={render:n,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function n(t){e(37)}var i=e(11),r=e(42),s=e(2),o=n,c=s(i.a,r.a,!1,o,"data-v-1265aca6",null);a.a=c.exports},function(t,a){},,,,,function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",[e("div",[e("div",[e("div",[e("img",{attrs:{src:this.catUrl}})])])]),t._v(" "),e("div",[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"username",type:"text"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}}),t._v(" "),e("label",{attrs:{for:"username"}},[t._v("Describe me")])]),t._v(" "),e("div",{staticClass:"actions"},[e("a",{on:{click:function(a){t.postCat(t.catUrl,t.title)}}},[t._v("\n          POST A CAT\n        ")])])])])])},i=[],r={render:n,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function n(t){e(44)}var i=e(13),r=e(55),s=e(2),o=n,c=s(i.a,r.a,!1,o,"data-v-e39529aa",null);a.a=c.exports},function(t,a){},,,,,,,,,,,function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"camera-modal"},[e("video",{ref:"video",staticClass:"camera-stream"}),t._v(" "),e("div",{staticClass:"camera-modal-container"},[e("span",{staticClass:"take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored",on:{click:t.capture}},[e("i",{staticClass:"material-icons"},[t._v("camera")])])])])},i=[],r={render:n,staticRenderFns:i};a.a=r},,,,function(t,a){}],[16]);
//# sourceMappingURL=app.115c7110a963abfc2d4d.js.map