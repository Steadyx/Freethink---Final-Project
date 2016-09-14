angular
  .module('FreeThink')
  .factory('User', User);

User.$inject = ["$resource", "API_URL"];

function User($resource, API_URL) {

  return $resource(API_URL + "/users/:id", {
    id: '@id'
  }, {
    login: {
      method: "POST",
      url: API_URL + "/login"
    },
    register: {
      method: "POST",
      url: API_URL + "/register"
    }
  });
}
