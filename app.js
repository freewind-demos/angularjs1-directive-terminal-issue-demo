const app = angular.module('app', [])
app.controller('MyController', function ($scope) {
    $scope.hello = 'Hello, AngularJS'
})

app.directive('hello1', function () {
    return {
        restrict: 'A',
        priority: 1,
        controller: function ($scope) {
            $scope.hello += ' (hello111) '
        }
    }
})
app.directive('hello2', function () {
    return {
        restrict: 'A',
        priority: 2,
        controller: function ($scope) {
            $scope.hello += ' (hello222) '
        }
    }
})