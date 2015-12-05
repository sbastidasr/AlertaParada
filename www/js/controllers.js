angular.module('app.controllers', [])

.controller('indexCtrl', function($scope) {

})

.controller('seleccionarCtrl', function($scope, ToDoService) {
  $scope.todos =ToDoService;
})

.controller('mapaCtrl', function($scope, $ionicLoading, $stateParams, locationService,ToDoService) {


  var index = $stateParams.id;
  var posit = ToDoService[index];


  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");


    if (!$scope.map) {
      return;
    }
    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $ionicLoading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };

function setParada(){
    var parada = new google.maps.Marker({
      position: new google.maps.LatLng(posit.lat, posit.long),
      map: $scope.map,
      title: "Parada",
    });
}
//  setTimeout(function(){ $scope.centerOnMe(); }, 5000);
  setTimeout(function(){ setParada(); }, 5000);
//////a/sdasdasdasdasd
  /*

  google.maps.event.addDomListener(window, 'load', function() {

    var myLatlng = new google.maps.LatLng(57.3000, -120.4833);
 debugger;
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    });

    $scope.map = map;
    */
  });
