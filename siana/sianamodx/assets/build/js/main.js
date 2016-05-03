"use strict";

// $(function() {
//     console.log( "ready!" );
// });

function gMap() {
      var myLatlng = new google.maps.LatLng(51.62938,-0.120875);
      var mapOptions = {
         zoom: 16,
         center: myLatlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
   }
   var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);    
   var contentString = '<p><b>Adress:</b><br>22 Parkway, Southgate, N14 6QU London';
   var contentString2 = '<p><b>Adress:</b><br>22 Parkway, Southgate, N14 6QU London 2';
   
   
   var infowindow = new google.maps.InfoWindow({
      maxWidth: 220,
      content: contentString
   });
   var infowindow2 = new google.maps.InfoWindow({
      maxWidth: 220,
      content: contentString2
   });
   var image = '/assets/build/img/marker.png';
   var myLatLng = new google.maps.LatLng(51.62938,-0.120875);
   var myLatLng2 = new google.maps.LatLng(51.628864, -0.123525);
   var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
   });
   var beachMarker2 = new google.maps.Marker({
            position: myLatLng2,
            map: map,
            icon: image
   });
   google.maps.event.addListener(beachMarker, 'click', function() {
      infowindow.open(map,beachMarker);
      infowindow2.close(map,beachMarker2);
   });
   google.maps.event.addListener(beachMarker2, 'click', function() {
      infowindow2.open(map,beachMarker2);
      infowindow.close(map,beachMarker);
   });
};

function openMap() {
   var data = document.querySelector('#map-data');
   var mapId = document.getElementById('map_canvas');
   var state = data.dataset.state;

   if(state == '0') {
      data.textContent = "Скрыть";
      mapId.style.display = 'block';
      gMap();
      window.scrollTo(0, document.body.scrollHeight);
      data.setAttribute('data-state', '1');
   } else {
      data.textContent = "Где купить";
      mapId.style.display = 'none';
      data.setAttribute('data-state', '0');
   }
   return;
};

function openModal() {
   var data = document.querySelector('#modal');
   var state = data.dataset.state;
   var overlay = document.getElementById('overlay');
   var modal = document.getElementById('modal-form');

   if(state == '0') {
      data.setAttribute('data-state', '1');
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '0.3';
      modal.style.visibility = 'visible';
      modal.style.opacity = '1';
   } else {
      data.setAttribute('data-state', '0');
      overlay.style.visibility = 'hidden';
      overlay.style.opacity = '0';
      modal.style.visibility = 'hidden';
      modal.style.opacity = '1';
   }
   return;
};

function changeItem(item) {
   var firstItem = document.getElementById('item-first');
   var lastItem = document.getElementById('item-last');

   firstItem = firstItem.parentNode;
   lastItem = lastItem.parentNode

   if(item == 'first') {
      firstItem.classList.add("active");
      lastItem.classList.add("disable");
      lastItem.classList.remove("active");
      firstItem.classList.remove("disable");
   } else {
      lastItem.classList.add("active");
      firstItem.classList.add("disable");
      firstItem.classList.remove("active");
      lastItem.classList.remove("disable");
   };

};

function cloneVal(el) {
   var default_amount = document.getElementById("default_amount_"+ el.id).innerText;
   var total_amount = document.getElementById("total_amount_"+ el.id).innerText;

   return document.getElementById("product_price_" + el.id).value = el.value, document.getElementById("total_amount_"+ el.id).innerText = default_amount * el.value;
};

function cartCalculate(item) {
   var default_amount = document.getElementById("default_amount_"+ item.id).innerText;
   var total_amount = document.getElementById("total_amount_"+ item.id).innerText;
   
   return document.getElementById("total_amount_"+ item.id).innerText = default_amount * item.value;
};













