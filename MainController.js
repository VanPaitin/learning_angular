
var app = angular.module("githubViewer")
var MainController = function($scope, $interval, $location) {

  var countDownInterval = null
  $scope.search = function() {
    if (countDownInterval) {
      $interval.cancel(countDownInterval)
    }
    $location.path(`/user/${$scope.username}`)
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
  $scope.countdown = 5
  startCount()
}
app.controller("MainController", MainController)


