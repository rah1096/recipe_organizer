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
          image: 'http://lorempixel.com/400/200/'
        },
        {
          image: 'http://lorempixel.com/400/200/food'
        },
        {
          image: 'http://lorempixel.com/400/200/sports'
        },
        {
          image: 'http://lorempixel.com/400/200/people'
        }
        ];

    }]);
