angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('index', {
      url: '/',
      templateUrl: 'templates/index.html',
      controller: 'indexCtrl'
    })

    .state('seleccionar', {
      url: '/seleccionar',
      templateUrl: 'templates/seleccionar.html',
      controller: 'seleccionarCtrl'
    })

    .state('mapa', {
      url: '/mapa/:id',
      templateUrl: 'templates/mapa.html',
      controller: 'mapaCtrl'
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
