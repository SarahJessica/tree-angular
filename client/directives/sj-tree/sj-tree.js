'use strict';

angular.module('sjTreeModule', [])
.directive('sjTree', function(){
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '/directives/sj-tree/sj-tree.html';
  o.scope = {
    height: '=',
    health: '=',
    id: '='
  };
  o.link = function($scope, element, attrs){};
  o.controller = function($rootScope, $window, $scope, $state, Tree){
    $scope.state = $window._.find($rootScope.lives, function(life){
      return life.min <= $scope.height && ($scope.height <= life.max);
    });

    $scope.grow = function(){
      Tree.grow($scope.id).then(function(response){
        console.info(response);
      });
    };

    function getState(){
      $scope.getState
    }
  };

  return o;
});
