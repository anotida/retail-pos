(function () {
    'use strict';

    angular.module('myApp.role.form', [])
        .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/role', {
            templateUrl: 'prof_mngmt/role/roleView.html',
            controller: 'RoleController',
            controllerAs:"RC"
        });
    }])

        .controller('RoleController', RoleController);

    RoleController.$inject = [];

    function RoleController() {
        var vm = this;

        var date = new Date();
        vm.contactForm = {date: date};
        vm.update = update;

        function update(contact) {
            vm.contactForm = angular.copy(contact);
        }
    }
})();
