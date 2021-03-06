(function () {

  'use strict';

  angular.module('home')
    .controller('HomeCtrl', [
      'bookService', 'navigationService',
      'tableHeaderService',
      function (bookService, navigationService, tableHeaderService) {

        var vm = this;

        vm.deleteBook = deleteBook;
        vm.editBook = editBook;
        vm.getFieldOrder = tableHeaderService.getFieldOrder;
        vm.getIsReverse = tableHeaderService.getIsReverse;

        init();

        function init () {
          bookService.getBooks()
            .success(function (data) {
              vm.books = data;
            });
        }

        function deleteBook (id) {
          bookService.deleteBook(id)
            .success(init);
        }

        function editBook (id) {
          navigationService.setActive('update', id)
        }

      }]);

})();