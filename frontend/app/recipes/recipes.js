'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('recipes').getList().then(function (recipes) {
            $scope.recipes = recipes;
        });

        $scope.myInterval = 3000;
        $scope.slides = [
        {
          image: 'images/1.jpg'
        },
        {
          image: 'images/2.jpg'
        },
        {
          image: 'images/3.jpg'
        },
        {
          image: 'images/4.jpg'
        }
        ];

    }]);
