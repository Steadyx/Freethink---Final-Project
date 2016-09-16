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
    templateUrl: "/templates/authentication/login.html",
    controller: "LoginController as login"
  })

  .state('register', {
    url: '/register',
    templateUrl: '/templates/authentication/register.html',
    controller: 'RegisterController as register'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: '/templates/profile.html',
    controller: 'UsersController as user'
  })
  .state('users', {
    url: '/users',
    templateUrl: '/templates/users.html',
    controller: 'UsersIndexController as users'
  })
  .state('ideas', {
    url: '/ideas',
    templateUrl: '/templates/ideas/ideas.html',
    controller: 'ideasController as ideas'
  })
  .state('ideasCreate', {
    url: '/ideas/new',
    templateUrl: '/templates/ideas/ideasCreate.html',
    controller: 'ideasCreateController as ideasCreate'
  })
  .state('ideasShow', {
    url: '/ideas/:id',
    templateUrl: '/templates/ideas/ideaShow.html',
    controller: 'ideasShowController as ideas'
  })
  .state('friend', {
    url: '/friends/:id',
    templateUrl: '/templates/friendProfile.html',
    controller: 'FriendsController as friends'
  });

  $urlRouterProvider.otherwise("/home");

}
