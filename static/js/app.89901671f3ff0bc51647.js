webpackJsonp([1],{"+PUI":function(t,s){},"/mwE":function(t,s){},0:function(t,s){},"1WCb":function(t,s){},"9DFp":function(t,s){},BXs9:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("MVMM"),i=e("aA9S"),n=e.n(i),r={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]};var l=e("Z0/y")(r,o,!1,function(t){e("1WCb")},"data-v-9a857ff6",null).exports,c={data:function(){return{classMap:[],detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},props:{seller:{type:Object,required:!0}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},components:{star:l}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n  \t  \t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n  \t  \t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var d={name:"App",data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),a=decodeURIComponent(e[0]),i=decodeURIComponent(e[1]);t[a]=i}),t).id}};var t,s},created:function(){var t=this;this.$http.get("/api/seller?id="+this.seller.id).then(function(s){0===s.data.errno?t.seller=n()({},t.seller,s.data.data):console.log("no data")})},components:{"v-header":e("Z0/y")(c,v,!1,function(t){e("iyil")},"data-v-4ab9eb97",null).exports}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-b-1px"},[e("div",{staticClass:"item-tab"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"item-tab"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"item-tab"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var u=e("Z0/y")(d,p,!1,function(t){e("+PUI")},"data-v-6536f8b1",null).exports,h=e("zO6J"),f=e("3M9e"),_={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:a.a.set(this.food,"count",1),this.$emit("add-to-cart",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count)+"\n\t")]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]};var m=e("Z0/y")(_,C,!1,function(t){e("q7mC")},"data-v-77850168",null).exports,g={data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.el.getBoundingClientRect(),i=a.left-32,n=-(window.innerHeight-a.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+i+"px,0,0)",r.style.transform="translate3d("+i+"px,0,0)"}}},enter:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webKitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webKitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)}},props:{selectFoods:{type:Array,default:function(){return[{price:10,count:2}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,derault:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new f.a(t.$refs.listContent,{click:!0})}),s}},components:{cartcontrol:m}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{"high-light":t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{"high-light":t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v("\n\t\t\t\t\t\t"+t._s(t.totalCount)+"\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"price",class:{"high-light":t.totalCount>0}},[t._v("\n\t\t\t\t\t"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n\t\t\t\t\t"+t._s(this.payDesc)+"\n\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty"},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{"add-to-cart":t.drop}})],1)])}))])])])],1)},staticRenderFns:[]};var y=e("Z0/y")(g,w,!1,function(t){e("9DFp")},"data-v-953cf2b6",null).exports,b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var x=e("Z0/y")({},b,!1,function(t){e("kPfh")},null,null).exports,T={data:function(){return{sType:this.selectType,oContent:this.onlyContent}},props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},nagetives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&(this.sType=t,this.$emit("ratingtype-select",t))},toggleContent:function(t){t._constructed&&(this.oContent=!this.oContent,this.$emit("content-toggle",this.oContent))}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-b-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.nagetives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var $=e("Z0/y")(T,k,!1,function(t){e("/mwE")},"data-v-42641f06",null).exports;function S(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in e)if(new RegExp("("+a+")").test(s)){var i=e[a]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?i:P(i))}return s}function P(t){return("00"+t).substr(t.length)}var F={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.selectType=0,this.onlyContent=!1,this.showFlag=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new f.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(this.$emit("add-to-cart",t.target),a.a.set(this.food,"count",1))},addToCart:function(t){event._constructed&&this.$emit("add-to-cart",t)},changeSelectType:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleOnlyContent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){return S(new Date(t),"yyyy-MM-dd hh:mm")}},components:{cartcontrol:m,split:x,ratingselect:$}},E={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food},on:{"add-to-cart":t.addToCart}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count=== 0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("\n\t\t\t\t   \t加入购物车\n\t\t\t\t")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{"ratingtype-select":t.changeSelectType,"content-toggle":t.toggleOnlyContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n\t\t        \t\t\t\t"+t._s(s.text)+"\n\t\t        \t\t\t")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var N=e("Z0/y")(F,E,!1,function(t){e("sVHF")},"data-v-2ae0f352",null).exports,M={data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},props:{seller:{type:Object}},computed:{currenIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$http.get("/api/goods").then(function(s){0===s.data.errno?(t.goods=s.data.data,t.$nextTick(function(){t.initScroll(),t.calculateHeight()})):console.log("no data")})},methods:{initScroll:function(){var t=this;this.$refs.menuWrapper,this.$refs.menuWrapper;this.menuScroll=new f.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new f.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t,s){if(event._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},addToCart:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())}},components:{shopcart:y,cartcontrol:m,food:N}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",class:{current:t.currenIndex===a},on:{click:function(s){t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-b-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n\t\t\t\t\t")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-b-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{"add-to-cart":t.addToCart}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{"add-to-cart":t.addToCart}})],1)},staticRenderFns:[]};var D=e("Z0/y")(M,R,!1,function(t){e("PnwX")},"data-v-0fafa984",null).exports,H={props:{seller:{type:Object}},data:function(){return{ratings:[],showFlag:!1,selectType:0,onlyContent:!0}},filters:{formatDate:function(t){return S(new Date(t),"yyyy-MM-dd hh:mm")}},methods:{changeSelectType:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},toggleOnlyContent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){0===s.data.errno?(t.ratings=s.data.data,t.$nextTick(function(){t.scroll=new f.a(t.$refs.ratings,{click:!0})})):console.log("no data")})},components:{star:l,split:x,ratingselect:$}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("綜合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{"ratingtype-select":t.changeSelectType,"content-toggle":t.toggleOnlyContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-b-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n      \t\t\t\t\t"+t._s(t._f("formatDate")(s.rateTime))+"\n      \t\t\t\t")])])])}))])],1)])},staticRenderFns:[]};var W=e("Z0/y")(H,O,!1,function(t){e("BXs9")},"data-v-6d2eb570",null).exports,Z=e("3cXf"),B=e.n(Z);var j={data:function(){var t,s,e,a;return{favorite:(t=this.seller.id,s="favorite",e=!1,(a=window.localStorage.__seller__)&&(a=JSON.parse(a)[t])&&a[s]||e)}},props:{seller:{type:Object}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},watch:{seller:function(){this._initScroll(),this._initPics()}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll(),t._initPics()})},components:{star:l,split:x},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},methods:{toggleFavorite:function(t){var s,e,a,i;t._constructed&&(this.favorite=!this.favorite,s=this.seller.id,e="favorite",a=this.favorite,(i=window.localStorage.__seller__)?(i=JSON.parse(i))[s]||(i[s]={}):(i={})[s]={},i[s][e]=a,window.localStorage.__seller__=B()(i))},_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new f.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new f.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}}},z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-b-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n  \t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n  \t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n  \t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"support-item border-b-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]};var X=e("Z0/y")(j,z,!1,function(t){e("eMfb")},"data-v-2c35a8e1",null).exports;a.a.use(h.a);var A=[{path:"/",redirect:"goods"},{path:"/goods",component:D},{path:"/ratings",component:W},{path:"/seller",component:X}],I=new h.a({linkActiveClass:"active",routes:A}),L=e("LyPZ");e("S0XV");a.a.config.productionTip=!1,a.a.use(L.a),new a.a({el:"#app",router:I,components:{App:u},template:"<App/>"})},PnwX:function(t,s){},S0XV:function(t,s){},eMfb:function(t,s){},iyil:function(t,s){},kPfh:function(t,s){},q7mC:function(t,s){},sVHF:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.89901671f3ff0bc51647.js.map