(function() {
  var app = angular.module("app", [])
  function MainController($scope, $http, $interval, $log, $anchorScroll, $location) {
    var onRepos = function(response) {
      $scope.repos = response.data
      $location.hash("user-details")
      $anchorScroll()
    }
    var onUserComplete = function(response) {
      $scope.user = response.data
      $http.get($scope.user.repos_url)
           .then(onRepos, onError)
    }
    var onError = function(reason) {
      $scope.error = "Could not fetch the data"
    }
    var jsUcfirst = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var countDownInterval = null
    $scope.search = function() {
      $log.info(`Searching for ${$scope.username}`)
      $http.get(`https://api.github.com/users/${$scope.username}`)
           .then(onUserComplete, onError)
      if (countDownInterval) {
        $interval.cancel(countDownInterval)
      }
    }

    var decrementCount = function() {
      $scope.countdown -= 1
      if ($scope.countdown < 1) {
        $scope.search()
      }
    }

    var startCount = function() {
      countDownInterval = $interval(decrementCount, 1000, $scope.countdown)
    }

    $scope.username = "angular"
    $scope.message = `Hello ${jsUcfirst($scope.username)}`
    $scope.repoSortOrder = "-stargazers_count"
    $scope.countdown = 5
    startCount()
  }
  app.controller("MainController", MainController)
})()
