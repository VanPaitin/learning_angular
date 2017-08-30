(function() {
  var app = angular.module("githubViewer")

  function UserController($scope, github, $routeParams) {

    var onRepos = function(response) {
      $scope.repos = response
    }
    var onUserComplete = function(response) {
      $scope.user = response
      github.getRepos($scope.user)
           .then(onRepos, onError)
    }
    var onError = function(reason) {
      $scope.error = "Could not fetch the data"
    }

    $scope.username = $routeParams.username
    $scope.repoSortOrder = "-stargazers_count"
    github.getUser($scope.username).then(onUserComplete, onError)
  }
  app.controller("UserController", UserController)
})()
