(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1ba26d"],{"70b6":function(t,e,n){},"8e6c":function(t,e,n){"use strict";var a=n("70b6"),i=n.n(a);i.a},ac6c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{selected:t.cellData.selected,inbetween:t.isInBetween,first_of_appointment:t.cell_data.first,last_of_appointment:t.cell_data.last,"is-an-hour":(t.index+1)%(60/t.calendarOptions.split_value)===0,"is-active":"popup-initiated"===t.status||"creating"===t.status},style:"height: "+t.calendarOptions.cell_height+"px",on:{mouseover:function(e){if(e.target!==e.currentTarget)return null;t.mouseMove(e)},mousedown:function(e){if(e.target!==e.currentTarget)return null;t.mouseDown()},mouseup:function(e){if(e.target!==e.currentTarget)return null;t.mouseUp()}}},[t.cell_data?n("div",{staticClass:"creator_block",style:"height: "+(t.distance-1)+"px"},[t.appointment_props.data?t._e():n("portal-target",{attrs:{name:"calendar-card","slot-props":t.appointment_props}}),t.appointment_props.data?n("portal-target",{staticClass:"calendar-card-details",attrs:{name:"calendar-card-details","slot-props":t.appointment_props}}):t._e(),"popup-initiated"===t.status?n("div",{ref:"popupRef",staticClass:"popup-parent"},[n("div",[n("kalendar-eventpopup",{attrs:{"appointment-props":t.appointment_props},on:{closePopup:function(e){t.clearPopups("popup-initiated")}}})],1)]):t._e()],1):t._e(),t.cell_data&&"created"===t.status?n("div",{staticClass:"created-appointment"},[t._t("default")],2):t._e()])},i=[],s=(n("34ef"),n("6b54"),n("a481"),n("a322")),r=n("c93e"),o=(n("d2ed"),n("70f2"),window.crypto||window.msCrypto),p={props:["creator","day","index","cellData"],inject:["calendarOptions"],components:{kalendarEventpopup:function(){return n.e("chunk-da60af6e").then(n.bind(null,"ad8c"))}},computed:{appointments:function(){return this.calendarOptions.existing_appointments},distance:function(){if(!this.cell_data)return!1;var t=this.appointments[this.cellData.appointment_id];return(t.end-t.start+1)*this.calendarOptions.cell_height},isInBetween:function(){var t=this.appointments[this.cellData.appointment_id],e=this.cellData.index;return t&&e>t["start"]&&e<t["end"]},cell_data:function(){var t=this.appointments,e=this.cellData.appointment_id;return!!e&&(t.hasOwnProperty(e)&&{first:parseInt(t[e]["start"])===this.cellData.index,last:parseInt(t[e]["end"])===this.cellData.index})},status:function(){if(this.appointment)return this.appointments[this.cellData.appointment_id]["status"]},appointment:function(){return this.appointments[this.cellData.appointment_id]},appointment_props:function(){var t;if(this.appointment){var e=this.appointment,n=e.start,a=e.end,i=(this.day.date_hours.length,this.day.date_hours[n]),o=this.day.date_hours[a+1];return o||(o=Object(r["a"])({},this.day.date_hours[this.day.date_hours.length-1]),o["value"]=new Date(this.day.date),o["value"].setHours(24,0,0)),Object(r["a"])({},this.appointment,(t={},Object(s["a"])(t,"start_value",i),Object(s["a"])(t,"end_value",o),t))}}},methods:{mouseDown:function(){if(!this.calendarOptions.read_only)if(this.clearPopups("popup-initiated"),this.calendarOptions.currently_working_on_date=this.day.date,this.cellData.appointment_id&&this.appointment)this.resetCreator();else{null!==this.creator.status&&this.resetCreator();var t={creating:!0,starting_cell_index:this.index,current_cell_index:this.index,appointment_id:this.generateUUID()};this.$emit("select",{index:this.index,payload:t})}},mouseMove:function(t){if(!this.calendarOptions.read_only&&(!this.creator||this.creator.creating)){var e=this.creator,n=e.starting_cell_index,a=e.creating,i=e.appointment_id,o=this.index,p=o;if(this.cellData.appointment_id&&!this.appointment&&(this.cellData.appointment_id=null),this.cellData.appointment_id&&i!==this.cellData.appointment_id)this.mouseUp();else if(o<n&&(p=this.appointments[i].end,n=o),a){var l,c=Object(r["a"])({},this.creator,(l={},Object(s["a"])(l,"current_cell_index",this.index),Object(s["a"])(l,"starting_cell_index",n),Object(s["a"])(l,"ending_cell_index",p),Object(s["a"])(l,"status","pending"),l));this.$emit("select",{payload:c,index:this.index})}}},mouseUp:function(){this.calendarOptions.read_only||this.creator.creating&&this.$emit("initiatePopup")},resetCreator:function(){this.$emit("reset")},generateUUID:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^o.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})},clearPopups:function(t){this.calendarOptions.currently_working_on_date=null;var e=this.calendarOptions.existing_appointments;for(var n in e)"popup-initiated"===e[n]["status"]&&this.$delete(e,n)}}},l=p,c=(n("8e6c"),n("2877")),d=Object(c["a"])(l,a,i,!1,null,null,null);d.options.__file="kalendar-cell.vue";e["default"]=d.exports},d2ed:function(t,e,n){var a=n("e785"),i=36e5;function s(t,e){var n=a(t,e)/i;return n>0?Math.floor(n):Math.ceil(n)}t.exports=s},e785:function(t,e,n){var a=n("c8d5");function i(t,e){var n=a(t),i=a(e);return n.getTime()-i.getTime()}t.exports=i}}]);
//# sourceMappingURL=chunk-1d1ba26d.a2ee4ffa.js.map