angular.module('ionicApp', ['ionic'])

/*======================

Controllers

========================*/

.controller('appCtrl', function($scope, $ionicSideMenuDelegate) {
  setTimeout(function(){
    $ionicSideMenuDelegate.toggleLeft();
  },600)
  var e = 'slide_effect,scale_effect,fade_effect,slide_up,wave,drop_in';
  $scope.slide = function(se) {
    $('.item').removeClass().addClass('item')
    $('.item').addClass(se);
    $('button').removeClass('active')
    $('.b_' + se).addClass('active');
    $ionicSideMenuDelegate.toggleLeft();
    if($ionicSideMenuDelegate.isOpen() == true){
      setTimeout(function(){
        $ionicSideMenuDelegate.toggleLeft();
      },700)
    }
  };
});

$('button').click(function(){
  $(this).addClass('active')
});