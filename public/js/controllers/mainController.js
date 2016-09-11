angular
  .module("FreeThink")
  .controller("MainController", MainController);

  MainController.$inject = ['TokenService', '$state', '$rootScope'];

function MainController(TokenService, $state, $rootScope) {

  var self = this;
  this.currentuser = TokenService.decodeToken();
  this.errorMessage = null;

  this.logout = function() {
    TokenService.clearToken();
    $state.go('home');
  };

  $rootScope.$on('loggedIn', function(){
    self.currentuser = TokenService.decodeToken();
  });

  $rootScope.$on('unauthorized', function(){
    $state.go('login');
  });

  $rootScope.$on('$stateChangeStart', function(){
    self.errorMessage = null;
  });
}
