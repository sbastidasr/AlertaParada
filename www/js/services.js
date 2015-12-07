angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('ToDoService', [function(){
  var todos = [
    {name:"Calle D y Edmundo Carvajal",
    lat: -0.160173,
    lng: -78.492892},
    {name:"Prensa y Edmundo Carvajal",
    lat: -0.159786,
    lng: -78.487737},
    {name:"Prensa - La Y",
    lat: -0.164550,
    lng: -78.487050},
    {name:"Av. America- Plaza",
    lat: -0.174228,
    lng: -78.493018},
    {name:"Naciones Unidas- Quicentro",
    lat: -0.177099,
    lng: -78.479766},
    {name:"Shyris y Eloy Alfaro",
    lat: -0.189124,
    lng: -78.482959},
    {name:"12 de Octubre y Colon",
    lat: -0.203682,
    lng: -78.482800},
    {name:"12 de Octubre y Roca",
    lat: -0.208938,
    lng: -78.491580}
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
