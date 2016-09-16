angular
  .module("FreeThink")
  .factory("Idea", Idea);

Idea.$inject = ["$resource", "API_URL"]

function Idea($resource, API_URL) {
  return $resource(API_URL + '/ideas/:id', {
    id: '@_id'
  }, {
    update: {
      method: "POST"
    }

  });
}
