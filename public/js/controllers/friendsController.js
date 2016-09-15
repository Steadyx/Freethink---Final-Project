angular
  .module('FreeThink')
  .controller('FriendsController', FriendsController);

FriendsController.$inject = ['User', '$rootScope', "$state"];
function FriendsController(User, $rootScope, $state) {

  this.selected = User.get($state.params);

}
