(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getFeaturedBooks: getFeaturedBooks,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(122); }

        function getFeaturedBooks() {
            var featuredBooks = [
                { title: 'War and Peace', author: 'Tolstoy', price: '7.58', description: 'blah, blah, blah' },
                { title: 'The Hours', author: 'Cunningham', price: '13.47', description: 'blah, blah, blah' },
                { title: 'The Trial', author: 'Kafka', price: '23.66', description: 'blah, blah, blah' },
                { title: 'Neuromancer', author: 'Gibson', price: '12.78', description: 'blah, blah, blah' },
                { title: 'Snow Crash', author: 'Stephenson', price: '3.78', description: 'blah, blah, blah' },
                { title: 'Goedel, Escher, Bach', author: 'Hofstand', price: '47.77', description: 'blah, blah, blah' },
                { title: 'Origin of the Species', author: 'Denniston', price: '11.45', description: 'blah, blah, blah' }
            ];
            return $q.when(featuredBooks);
        }
    }
})();