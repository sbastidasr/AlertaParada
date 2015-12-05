angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('ToDoService', [function(){
  var todos = [
    {name:"MiCasa - Edmundo Carvajal",
      lat: -0,
      long: -79},
      {name:"Ofelia - Av. Diego de Vasquez"},
      {name:"Otra Parada - Otra Calle"},
      {name:"Brasil - Brasil 535"}
    ];
    return todos;
  }])

  .service('locationService', function() {
    var locationList;

    var addLocation = function(newObj) {
      locationList=newObj;
    };

    var getLocations = function(){
      return locationList;
    };

    return {
      addLocation: addLocation,
      getLocations: getLocations
    };

  });
