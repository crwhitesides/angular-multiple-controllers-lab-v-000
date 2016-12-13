function StaffController() {
  var vm = this;
  vm.name = 'Christian Whitesides';
  vm.email = 'christian@test.com';
  vm.phone = '01234567891'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
