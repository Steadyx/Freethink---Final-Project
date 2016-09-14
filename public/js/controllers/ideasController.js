angular
  .module('FreeThink')
  .controller('ideasController', ideasController);

ideasController.$inject = ['Idea'];

function ideasController(User) {

  this.all = User.query();

}

angular
  .module('FreeThink')
  .controller('ideasCreateController', ideasCreateController);

function ideasCreateController(Idea) {

  var self = this;

  // this.all = Idea.query();

  this.isCreating = false;

  this.new = {};

  this.create = function() {
    console.log('ewldnibhj')
    Idea.save(this.new, function(idea) {
      console.log('lmkenwed');
      self.all.push(idea);
      self.isCreating = false;
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
    });
  }

  this.delete = function() {
    this.selected.$delete(function() {
      $state.go("profile");
    });
  }
}
