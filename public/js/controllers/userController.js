angular
  .module('FreeThink')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'TokenService'];

function UsersController(User, TokenService) {
  var self = this;
  this.currentUser = {}

  this.userToken = TokenService.decodeToken();

  console.log("this is the userToken", this.userToken);
  console.log("userToken id is", this.userToken._id);

  // this.all = User.query();
  //
  // console.log(this.all);
  this.getUser = function() {
    User.get({
      id: self.userToken._id
    }, function(res) {
      self.currentUser = res;
    });
  }
  this.getUser();
}
