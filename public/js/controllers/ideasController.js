angular
  .module('FreeThink')
  .controller('ideasController', ideasController);

ideasController.$inject = ['Idea'];

function ideasController(Idea) {

  this.all = Idea.query();

}

angular
  .module('FreeThink')
  .controller('ideasCreateController', ideasCreateController);

ideasCreateController.$inject = ['Idea', 'TokenService', "$state"];

function ideasCreateController(Idea, TokenService, $state) {

  var self = this;

  this.all = Idea.query();

  this.isCreating = false;

  this.new = {};

  this.create = function() {
    this.currentUser = TokenService.decodeToken();
    this.new.user = this.currentUser._id;
    console.log('ewldnibhj')
    Idea.save(this.new, function(idea) {
      self.all.push(this.new);
      self.isCreating = false;
      $state.go("profile");
    });
  }
}


angular
  .module("FreeThink")
  .controller("ideasShowController", ideasShowController);

ideasShowController.$inject = ["Idea", "$state"];

function ideasShowController(Idea, $state) {
  var self = this;
  this.selected = Idea.get($state.params);
  console.log(this.selected);

  this.isEditing = false;

  this.update = function() {
    this.selected.$update(function() {
      self.isEditing = false;
      $state.go('profile')
      console.log('I am Working');
    });
  }

  this.delete = function() {
    this.selected.$delete(function() {
      $state.go("profile");
    });
  }
}
