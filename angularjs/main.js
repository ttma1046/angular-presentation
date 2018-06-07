angular.module('app-module', [])
    .directive('appRoot', function() {
        return {
            restrict: 'E',
            scope: {},
            template: '<h1>Hello! AngularJs Custom Element!</h1>'
        }
    });
