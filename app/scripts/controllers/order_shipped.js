'use strict';

/**
 * @ngdoc function
 * @name ecommercesellerApp.controller:OrderShippedCtrl
 * @description
 * # OrderShippedCtrl
 * Controller of the ecommercesellerApp
 */
angular.module('ecommercesellerApp')
  .controller('OrderShippedCtrl',['$scope','$http','url','sellers','$window','$location', function($scope,$http,url,sellers,$window,$location) {
    var authorization = $window.localStorage['Authorization'];

    $scope.view_single_product = function(id){
      $location.path('/view_single_product/'+id);
    }
    if(!authorization){
        $location.path('signin');
    }

      var main_url = url+sellers+"tracking/getStatus?status=Shipped";
      var req = {
         method: 'GET',
         url:main_url,
         headers: {
             'Authorization':authorization
         },
       }
       $http(req).then(function(data){
         if(data.data.status=="success"){
           
            $scope.orders = data.data.response.orders;
          }

       });
  }]);
