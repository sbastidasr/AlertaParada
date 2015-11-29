angular.module('app.controllers', [])

.controller('indexCtrl', function($scope) {

})

.controller('seleccionarCtrl', function($scope) {
  $scope.todos = [
    {name:"Carvajal - Edmundo Carvajal"},
    {name:"Ofelia - Av. Diego de Vasquez"},
    {name:"Otra Parada - Otra Calle"},
    {name:"Brasil - Brasil 535"}
  ];
})

.controller('mapaCtrl', function($scope) {
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
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };

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
  });
*/
})
