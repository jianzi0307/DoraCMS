webpackJsonp([56],{365:function(t,a,e){function s(t){e(726)}var n=e(9)(e(654),e(772),s,null,null);t.exports=n.exports},482:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(34),n=e.n(s),i=e(124),r=e.n(i);e(14),e(12);a.default={name:"Ads",props:{id:String},serverCacheKey:function(t){return"ads-item-"+t.id},data:function(){return{interval:5e3,ads:{data:[]}}},mounted:function(){var t=this,a=this.$store.getters["global/ads/getAdsList"];if(!r()(a)){var e=n()(a.data,function(a){return a._id===t.id});e.length>0&&(this.ads.data=e[0])}}}},518:function(t,a,e){a=t.exports=e(73)(!1),a.push([t.i,"",""])},521:function(t,a,e){var s=e(518);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(74)("679510a5",s,!0,{})},527:function(t,a,e){function s(t){e(521)}var n=e(9)(e(482),e(531),s,null,null);t.exports=n.exports},531:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.ads.data&&t.ads.data.items&&t.ads.data.items.length>0?e("div",{staticClass:"content-ads"},["1"==t.ads.data.type?e("div",{staticClass:"img-pannel"},[1==t.ads.data.items.length?e("div",[e("a",{attrs:{href:t.ads.data.items[0].link,target:"_blank"}},[e("img",{attrs:{src:t.ads.data.items[0].sImg,alt:t.ads.data.items[0].alt}})])]):e("div",[t.ads.data.carousel?e("div",[e("el-carousel",{attrs:{height:t.ads.data.height+"px"}},t._l(t.ads.data.items,function(a){return e("el-carousel-item",{key:a._id},[e("h3",[e("a",{attrs:{href:a.link,target:"_blank"}},[e("img",{attrs:{height:t.ads.data.height+"px",src:a.sImg,alt:a.alt}})])])])}))],1):e("div",[e("el-row",{attrs:{gutter:20}},t._l(t.ads.data.items,function(a,s){return e("el-col",{key:a._id,staticClass:"case-item",attrs:{xs:12,sm:8,md:6,lg:6,xl:6}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("div",{staticStyle:{padding:"14px 14px 5px","text-align":"center",cursor:"point"}},[e("a",{attrs:{href:a.link,target:"_blank"}},[e("img",{staticClass:"image",attrs:{src:a.sImg,alt:a.alt}})]),t._v(" "),e("span",{staticClass:"case-title"},[t._v(t._s(a.alt))])])])],1)}))],1)])]):t._e(),t._v(" "),"0"==t.ads.data.type?e("div",{staticClass:"text-pannel"},[e("ul",t._l(t.ads.data.items,function(a){return e("li",{key:a._id},[e("a",{attrs:{href:a.link,target:"_blank"}},[t._v(t._s(a.title))])])}))]):t._e()]):e("div",[t._v("\n         \n    ")])])},staticRenderFns:[]}},654:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(2),n=e.n(s),i=e(527),r=e.n(i),o=e(28),l=e.n(o),c=e(128),d=e(14);a.default={name:"case-item",mixins:[c.a],components:{AdsPannel:r.a},data:function(){return{cmsStar:1,stargazersUrl:"https://github.com/doramart/DoraCMS/stargazers"}},computed:n()({},e.i(d.a)({systemConfig:"global/footerConfigs/getSystemConfig"}),{currentCate:function(){var t=this;return(this.$store.getters["global/category/getHeaderNavList"].data||[]).find(function(a){return a._id===t.$route.params.typeId})||{}}}),methods:{getToStar:function(){window.open(this.stargazersUrl)}},mounted:function(){var t=this;l.a.get("https://api.github.com/repos/doramart/DoraCMS").then(function(a){t.cmsStar=a.data.stargazers_count}).catch(function(t){console.log(t)})},metaInfo:function(){var t=this.systemConfig.data[0],a=t.siteName,e=t.siteDiscription,s=t.siteKeywords;return{title:"案例 | "+a,meta:[{vmid:"description",name:"description",content:this.currentCate.comments||e},{vmid:"keywords",name:"keywords",content:this.currentCate.keywords||s}]}}}},686:function(t,a,e){a=t.exports=e(73)(!1),a.push([t.i,"",""])},726:function(t,a,e){var s=e(686);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(74)("1730efe0",s,!0,{})},772:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"contentContainer"},[e("div",{staticClass:"mainbody case-box"},[e("el-row",{attrs:{gutter:0}},[e("el-col",{attrs:{xs:1,sm:1,md:1,lg:1,xl:5}},[t._v("\n                 \n            ")]),t._v(" "),e("el-col",{attrs:{xs:22,sm:22,md:22,lg:22,xl:14}},[e("div",{staticClass:"case-list"},[e("h3",[t._v("\n                      这些站点在用DoraCMS：\n                      "),e("el-button-group",[e("el-button",{attrs:{size:"mini",type:"primary",plain:"",icon:"el-icon-star-on"},on:{click:t.getToStar}},[t._v("Star")]),t._v(" "),e("el-button",{staticStyle:{color:"#2D2F33"},attrs:{size:"mini",plain:""},on:{click:t.getToStar}},[t._v(t._s(t.cmsStar))])],1)],1),t._v(" "),e("AdsPannel",{attrs:{id:"BkxSmqcaAZ"}}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],1)]),t._v(" "),e("el-col",{attrs:{xs:1,sm:1,md:1,lg:1,xl:5}},[t._v("\n                 \n            ")])],1)],1)])},staticRenderFns:[]}}});