const app = angular.module('app', [])

app.controller('MyController', function ($scope) {
    $scope.hello = 'Hello, AngularJS'
})

app.directive('myTerminal', function () {
    return {
        restrict: 'A',
        terminal: true,
        link: function () {
            console.log('--- myTerminal')
        }
    }
})
