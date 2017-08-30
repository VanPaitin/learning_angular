(function() {
  var app = angular.module("githubViewer", ["ngRoute"])
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .when("/repos/:username/:repo", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo: "/main"})
  }])
})()
