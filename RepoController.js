(function() {
  var app = angular.module("githubViewer")

  var RepoController = function($scope, github, $routeParams) {
    var onRepo = function(response) {
      $scope.repo = response
    }

    var onError = function(error) {
      console.log("Something unfortunate happened and we could not return the required repository")
    }

    var username = $routeParams.username
    var repo = $routeParams.repo
    github.getRepo(username, repo).then(onRepo, onError)
  }

  app.controller("RepoController", RepoController)
})();
