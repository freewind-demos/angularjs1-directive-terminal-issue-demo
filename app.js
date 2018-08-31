const app = angular.module('app', [])

app.controller('MyController', function ($scope) {
    $scope.hello = 'Hello, AngularJS'
})

app.directive('myTerminal', function () {
    return {
        terminal: true,
        link: function () {
            console.log('--- myTerminal')
        }
    }
})
