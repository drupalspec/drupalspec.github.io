(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad062f70"],{"093b":function(t,e,n){},"1aae":function(t,e,n){"use strict";var a=n("093b"),i=n.n(a);i.a},2854:function(t,e,n){},"28a5":function(t,e,n){n("214f")("split",2,function(t,e,a){"use strict";var i=n("aae3"),s=a,r=[].push,o="split",l="length",c="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[l]||2!="ab"[o](/(?:ab)*/)[l]||4!="."[o](/(.?)(.?)/)[l]||"."[o](/()()/)[l]>1||""[o](/.?/)[l]){var d=void 0===/()??/.exec("")[1];a=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return s.call(n,t,e);var a,o,u,p,f,h=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),_=0,v=void 0===e?4294967295:e>>>0,y=new RegExp(t.source,m+"g");d||(a=new RegExp("^"+y.source+"$(?!\\s)",m));while(o=y.exec(n)){if(u=o.index+o[0][l],u>_&&(h.push(n.slice(_,o.index)),!d&&o[l]>1&&o[0].replace(a,function(){for(f=1;f<arguments[l]-2;f++)void 0===arguments[f]&&(o[f]=void 0)}),o[l]>1&&o.index<n[l]&&r.apply(h,o.slice(1)),p=o[0][l],_=u,h[l]>=v))break;y[c]===o.index&&y[c]++}return _===n[l]?!p&&y.test("")||h.push(""):h.push(n.slice(_)),h[l]>v?h.slice(0,v):h}}else"0"[o](void 0,0)[l]&&(a=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(n,i){var s=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,s,i):a.call(String(s),n,i)},a]})},"30d1":function(t,e,n){var a=n("0978");function i(t){return a(t).getTime()===a(new Date).getTime()}t.exports=i},4290:function(t,e,n){"use strict";var a=n("2854"),i=n.n(a);i.a},"6b8f":function(t,e,n){var a=n("c8d5");function i(t,e){var n=a(t),i=a(e);return n.getTime()<i.getTime()}t.exports=i},"9ad8":function(t,e,n){var a=n("c8d5");function i(t){var e=a(t),n=e.getDay();return 0===n||6===n}t.exports=i},f611:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar-wrap",style:"--space-between-cols: "+t.colsSpace},[n("div",{staticClass:"sticky-top"},[n("portal-target",{attrs:{name:"week-navigator-place"}}),n("ul",{staticClass:"days"},t._l(t.days||[],function(e,a){var i=e.date;return n("li",{key:a,staticClass:"day-indicator",class:{today:t._isToday(i),"is-before":t.isBefore(i)}},[n("portal-target",{attrs:{name:"number-date","slot-props":{date:i},slim:""}}),n("portal-target",{attrs:{name:"letters-date","slot-props":{date:i},slim:""}})],1)})),n("ul",{staticClass:"all-day"},[n("span",[t._v("All Day")]),t._l(t.days||[],function(e,a){return n("li",{key:a,class:{"all-today":t._isToday(e),"is-all-day":!1},style:"height:"+(t.calendarOptions.cell_height+5)+"px"})})],2)],1),t._e(),n("div",{staticClass:"blocks"},[n("div",{staticClass:"calendar-blocks"},[n("ul",{staticClass:"hours"},t._l(t.hours||[],function(e,a){return n("li",{key:a,staticClass:"hour-row-identifier",style:"height:"+t.hourHeight+"px"},[n("span",[t._v(t._s(t.formatDate(e,t.hour_format)))])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:"material_design"!==t.calendarOptions.style,expression:"calendarOptions.style !== 'material_design'"}],staticClass:"hour-indicator-line",style:"top:calc("+t.passedtime.percentage+"% - 5px)"},[n("span",{staticClass:"time-value"},[t._v(t._s(t.passedtime.value))]),n("span",{staticClass:"line"})]),t._l(t.days,function(e,a){return n("kalendar-days",{key:a,staticClass:"building-blocks",attrs:{day:e,appointments:t.appointments,"passed-time":t.passedtime.percentage},on:{updateAppointments:t.updateAppointments,deleteAppointment:t.deleteAppointment}})})],2)])])},i=[],s=(n("28a5"),n("70f2")),r=n.n(s),o=n("30d1"),l=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"kalendar-day",class:{"is-weekend":t.isWeekend,"is-today":t.isToday,creating:t.calendarOptions.currently_working_on_date===t.day.date},staticStyle:{position:"relative"},on:{mouseleave:t.clearCreatingLeftovers}},[t._l(t.day.date_hours,function(e,a){return n("kalendar-cell",{key:t.day.date+"_"+a,attrs:{creator:t.creator,day:t.day,index:a,"cell-data":e},on:{"update:cellData":function(t){e=t},select:t.updateCreator,reset:function(e){t.resetEvents()},initiatePopup:function(e){t.initiatePopup()}}})}),t.isToday?n("div",{ref:"nowIndicator",class:"material_design"===t.calendarOptions.style?"hour-indicator-line":"hour-indicator-tooltip",style:"top:calc("+t.passedTime+"% - 5px)"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"material_design"===t.calendarOptions.style,expression:"calendarOptions.style === 'material_design'"}],staticClass:"line"})]):t._e()],2)},d=[],u=n("a322"),p=n("c93e"),f=(n("ac6a"),n("9ad8")),h=n.n(f),m={props:["day","passedTime"],components:{kalendarCell:function(){return n.e("chunk-1d1ba26d").then(n.bind(null,"ac6c"))}},inject:["calendarOptions"],mounted:function(){this.scrollToNow&&this.isToday&&this.scrollView()},computed:{isWeekend:function(){return h()(this.day.date)},isToday:function(){return l()(this.day.date)},currentDay:function(){return this.calendarOptions.current_day},scrollToNow:function(){return this.calendarOptions.scrollToNow}},data:function(){return{creator:{creating:!1,starting_cell_index:null,current_cell_index:null,appointment_id:null,status:null}}},methods:{resetEvents:function(){(this.creator.creating||null!==this.creator.status)&&(this.creator={creating:!1,starting_cell_index:null,current_cell_index:null,appointment_id:null,status:null},this.calendarOptions.currently_working_on_date=null)},clearCreatingLeftovers:function(){var t=this.calendarOptions.existing_appointments;for(var e in t)"creating"===t[e]["status"]&&(this.resetEvents(),this.$delete(t,e))},updateCreator:function(t){var e=t.payload,n=t.index;t.event_type;this.creator=e,this.selectCell(n)},selectCell:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"creating";if(this.creator.creating){var a=this.creator,i=a.creating,s=a.appointment_id,r=a.ending_cell_index,o=a.current_cell_index,l=a.starting_cell_index,c=null==r?o:r,d={id:s,data:{start:l,end:c,status:n}};this.$emit("updateAppointments",d),i&&this.day.date_hours.forEach(function(t,n){var a=t.index>=l&&t.index<=c;a?e.day.date_hours[n]=Object(p["a"])({},t,Object(u["a"])({},"appointment_id",s)):t["appointment_id"]!==s||a||(e.day.date_hours[n]=Object(p["a"])({},t,Object(u["a"])({},"appointment_id",null)))})}},initiatePopup:function(){var t=this.creator,e=(t.creating,t.appointment_id),n=t.ending_cell_index,a=t.current_cell_index,i=t.starting_cell_index,s=null==n?a:n,r={id:e,data:{start:i,end:s,status:"popup-initiated"}};this.$emit("updateAppointments",r),this.creator=Object(p["a"])({},this.creator,Object(u["a"])({},"creating",!1))},scrollView:function(){var t=this.$refs.nowIndicator.offsetTop;console.log("Scrolling to now.",t),setTimeout(function(){window.scroll({top:t,left:0,behavior:"smooth"})},500)}},watch:{scrollToNow:function(t){t&&this.isToday&&this.scrollView()}}},_=m,v=(n("1aae"),n("2877")),y=Object(v["a"])(_,c,d,!1,null,null,null);y.options.__file="kalendar-day.vue";var g=y.exports,w=n("6b8f"),x=n.n(w),b={components:{KalendarDays:g},props:["days","hours"],inject:["calendarOptions"],created:function(){var t=this;setInterval(function(){return t.calendarOptions.now=new Date},6e4)},computed:{colsSpace:function(){return"flat_design"===this.calendarOptions.style?"5px":"0px"},hourHeight:function(){return this.calendarOptions.cell_height*(60/this.calendarOptions.split_value)},passedtime:function(){var t=r()(this.calendarOptions.now,"HH:mm"),e=t.split(":"),n=e[1],a=e[0],i=60*parseInt(n),s=3600*parseInt(a),o=i+s,l=o/864;return{percentage:l,value:t}},appointments:function(){return this.calendarOptions.existing_appointments},hour_format:function(){return this.calendarOptions.military_time?"HH:mm":"HH:00"}},methods:{formatDate:function(t,e){return r()(t,e)},_isToday:function(t){return l()(t)},updateAppointments:function(t){var e=t.id,n=t.data;this.$emit("update",{id:e,data:n})},deleteAppointment:function(t){this.$emit("delete",{id:t})},clearAppointments:function(){this.$emit("clear")},isBefore:function(t){return x()(t,this.calendarOptions.now)}}},O=b,k=(n("4290"),Object(v["a"])(O,a,i,!1,null,null,null));k.options.__file="kalendar-weekview.vue";e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-ad062f70.c3499f7b.js.map