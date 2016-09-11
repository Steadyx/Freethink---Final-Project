angular
  .module("FreeThink")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["User", "$state", "$rootScope"]

function RegisterController(User, $state, $rootScope) {

  this.user = {};

  this.submit = function() {
    User.register(this.user, function(res) {
      $rootScope.$broadcast("loggedIn")
      $state.go("home");
      console.log(res);
    });

  }

}
