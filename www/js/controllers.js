angular.module('app.controllers', [])

.controller('indexCtrl', function($scope) {

})

.controller('seleccionarCtrl', function($scope, ToDoService) {
  $scope.todos =ToDoService;
})

.controller('mapaCtrl', function($scope, $ionicLoading, $stateParams, locationService,ToDoService) {

  var index = $stateParams.id;
  var posicionParada = ToDoService[index];
  var myLocation;

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  function init(){
    var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
    myLocation = new google.maps.Marker({
      position: new google.maps.LatLng(-0.1636095, -78.4926503),
      map: $scope.map,
      title: "My Location",
      icon: im
    });
  }
  ctr = function(){
    navigator.geolocation.getCurrentPosition(function(pos) {
      var latlng= new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      $scope.map.setCenter(latlng);
      var mypos = {
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      }
      var distance= getDistance(posicionParada, mypos);
       $scope.distance=distance;
        $scope.$apply()
      myLocation.setPosition( latlng);
    });
  }

  function setParada(){
    var parada = new google.maps.Marker({
      position: new google.maps.LatLng(posicionParada.lat, posicionParada.lng),
      map: $scope.map,
      title: "Parada",
    });
  }

  setTimeout(function(){
    init();
    setParada();
  }, 2000);

  function doWithInterval(){
    setTimeout(function(){
      ctr();
      doWithInterval()
    }, 5000);
  }
  doWithInterval();







  var rad = function(x) {
    return x * Math.PI / 180;
  };

  var getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter

  };

});
