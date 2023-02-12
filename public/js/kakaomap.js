// https://apis.map.kakao.com/web/guide/

var markerPosition = new kakao.maps.LatLng(37.521222, 126.983762); // 마커가 표시될 위치입니다
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
  center: markerPosition, // 지도의 중심좌표
  draggable: false, // 지도 이동, 확대축소 막기
  level: 6 // 지도의 확대 레벨: 숫자가 클수록 스케일도 크다
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
  
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition, 
  // image: markerImage // 마커이미지 커스텀 미사용 시 제거
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
  // window.location = 'https://google.com';
  window.open('https://place.map.kakao.com/17556513', '_blank');
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
// var iwContent = '<div style="padding:5px; text-align:center; font-size: 0.8em;"><a href="https://place.map.kakao.com/17556513">용산가족공원</a></div>', 
//   iwPosition = markerPosition; //인포윈도우 표시 위치입니다

// // 인포윈도우를 생성합니다
// var infowindow = new kakao.maps.InfoWindow({
//   position : iwPosition, 
//   content : iwContent 
// });
  
// // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
// infowindow.open(map, marker); 

// 지도를 표시하는 div 크기를 변경하는 함수입니다
function resizeMap() {
  var mapContainer = document.getElementById('map');
  mapContainer.style.width = '650px';
  mapContainer.style.height = '650px'; 
}

function relayout() {    
  // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
  // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
  // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
  map.relayout();
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
  map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
  map.setLevel(map.getLevel() + 1);
}