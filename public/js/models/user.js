angular
  .module('FreeThink')
  .factory('User', User);

User.$inject = ["$resource", "API_URL", 'TokenService'];

function User($resource, API_URL, TokenService) {

  return $resource(
    API_URL + "/users/:id",
    {
      id: '@id',
      friendId: '@friendId'
    },
    {
      login: {
        method: "POST",
        url: API_URL + "/login"
      },
      register: {
        method: "POST",
        url: API_URL + "/register"
      },
      befriend: {
        method: "POST",
        url: API_URL + "/users/:id/befriend/:friendId"
      }
    });
}

/* User.befriend({ id: this.currentUser._id, friendId: friend._id }, function(user) {
  self.currentUser = user;
}) */

// User.friendShip = function(friend) {
//   var befriendConfig = {
//     id: this.currentUser._id,
//     friendId: friend._id
//   };
//
//   console.log('befriendConfig:', befriendConfig);
//   User.befriend(befriendConfig);
// }
