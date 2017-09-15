(function () {

  var app = angular.module('helloworld', []);

  alert("Module  Created");

  /*
  app.controller('StoryController', ['$http', function($http){
    //var store = this;
    //store.stories = [];
    $http.get('story.json').success(function(data){
        alert(data);
        $scope.stories = data;
    });
  }]);
  */

  // dependency injection : $scope, $hhtp and many more 

  app.controller('StoryController', function ($scope, $http) {

   var store = this;

    $http({
      method: 'GET',
      url: 'story.json'
    }).then(function (response) {
       var jsonStr= response.data;
       //console.log(jsonStr.records[0]);
       store.stories = jsonStr.records;
    }, function (error) {
        //console.log(error);
    });
  });


})();
