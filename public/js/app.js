angular
  .module('FreeThink', ['ui.router', 'ngResource', 'angular-jwt'])
  .constant('API_URL', 'http://localhost:3000/api')
  .config(setupInterceptor)
  .config(Router);

setupInterceptor.$inject = ['$httpProvider'];

function setupInterceptor($httpProvider) {
  return $httpProvider.interceptors.push('AuthInterceptor');
};

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html'
    })

  .state("login", {
    url: "/login",
    templateUrl: "/templates/login.html",
    controller: "LoginController as login"
  })

  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
  })

  .state('profile', {
    url: '/user',
    templateUrl: '/templates/profile.html',
  })
  $urlRouterProvider.otherwise("/home");

}