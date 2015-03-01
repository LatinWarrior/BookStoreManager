﻿(function() {
    'use strict';
    var controllerId = 'bookEditor';

    angular.module('app').controller(controllerId, ['$scope', 'common', 'datacontext', bookEditor]);

    function bookEditor($scope, common, model, datacontext) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.bookmarks = new model.Book();
        vm.books = [];
        vm.saveNewBook = saveNewBook;
        vm.getBook = getBook;
        vm.getAllBooks = getAllBooks;
        vm.deleteBook = deleteBook;

        activate();

        function activate() {
            var promises = [getAllBooks()];
            common
                .activateController(promises, controllerId)
                .then(function() {
                    log('Activated Book Editor');
                });
        }

        function saveNewBook() {
            
        }

        function deleteBook() {
            
        }

        function getBook() {
            
        }

        function getAllBooks() {
            
        }
    }

})();