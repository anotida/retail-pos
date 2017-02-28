/**
 * Created by yemurayi on 2/28/17.
 */
(function () {
    'use strict';

    angular.module('myApp.profile.form', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/profile', {
                templateUrl: 'prof_mngmt/profile/profileView.html',
                controller: 'ProfileController',
                controllerAs:"PC"
            });
        }])

        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [];

    function ProfileController() {
        var vm = this;

        var date = new Date();
        vm.profileForm = {date: date};
        vm.update = update;

        function update(contact) {
            vm.profileForm = angular.copy(contact);
        }
    }
})();
