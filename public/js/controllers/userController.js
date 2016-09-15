angular
  .module('FreeThink')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'TokenService', '$rootScope', "$state"];

function UsersController(User, TokenService, $rootScope, $state) {

  var self = this;
  // this.currentUser = {}

  this.userToken = TokenService.decodeToken();

  console.log("this is the userToken", this.userToken);
  console.log("userToken id is", this.userToken._id);
  // console.log(this.currentUser.ideas);

  this.getUser = function() {
    User.get({

      id: self.userToken.id

    }, function(res) {
      $rootScope.$applyAsync(function() {
        self.currentUser = res;

      });


    });

  }

  this.getUser();

}


angular
  .module('FreeThink')
  .controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['User', 'TokenService'];


function UsersIndexController(User, TokenService) {

  var self = this;

  this.currentUser = {}
  this.userToken = TokenService.decodeToken();

  this.all = User.query()


  User.get({

    id: self.userToken.id

  }, function(res) {
    self.currentUser = res;

  });

  this.befriend = function(friend) {

    var userConfig = {

      id: this.currentUser._id,
      friendId: friend._id

    }
    console.log(friend);
    console.log(userConfig);



    User.befriend(userConfig);
  }


}
