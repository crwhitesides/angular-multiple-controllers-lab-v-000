function ContactController() {
  var vm = this;
  vm.name = 'Debbie Parson';
  vm.email = 'debbie@test.com';
  vm.phone = '01234567891'

  vm.changeName = function() {
    vm.name = 'Babes';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
