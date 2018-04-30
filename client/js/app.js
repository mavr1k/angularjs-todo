angular.module('todoApp', [])
  .controller('todoAppController', function ($scope) {
    var self = this;
    self.todos = [{
      done: false,
      description: 'Wash my dog'
    }];
    self.toAdd = {
      done: false,
      description: ''
    };
    self.adding = false;
    self.toggleCheckbox = function (todo) {
      todo.done = !todo.done;
    }
    self.isEditable = function () {
      return self.todos[self.todos.length - 1].description ? true : false;
    }
    self.addNew = function () {
      if (self.toAdd.description) {
        self.todos.push(Object.assign({}, self.toAdd));
        self.toAdd.description = '';
        self.edding = false;
      }
    }
    self.deleteChecked = function () {
      self.todos = self.todos.filter(el => !el.done);
    }
    self.selectAll = function () {
      self.todos.forEach(el => el.done = true);
    }
  });
