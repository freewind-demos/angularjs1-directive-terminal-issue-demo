const app = angular.module('app', []);
app.directive('helloTo', ['$window', function ($window) {
    return {
        restrict: 'A',
        controller: function ($scope, $element, $attrs) {
            console.dir($element);
            console.dir($attrs);
            $scope.userName = $attrs.helloTo;
            $scope.sayHello = function () {
                $window.alert('Hello, ' + $scope.userName);
            };
        }
    }
}]);