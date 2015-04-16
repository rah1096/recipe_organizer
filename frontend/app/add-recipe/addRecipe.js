'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/add-recipe', {
        templateUrl: 'add-recipe/add-recipe.html',
        controller: 'AddRecipeCtrl'
      });
    }])

    .controller('AddRecipeCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        $scope.addRecipe = function () {
            Restangular.all('add-recipe').customPOST($scope.recipe).then(function (recipe) {
                alert("Recipe was successfully created! Your new recipe's ID is" + recipe.id);
                $scope.recipe = {};
            }, function () {
                alert("There was a problem adding your recipe. This was the error: " + error.statusText);
            });
        };
    }]);