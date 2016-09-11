angular
  .module('FreeThink')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User'];

function UsersController(User) {

  this.all = User.query();

}
