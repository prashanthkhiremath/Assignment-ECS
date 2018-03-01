angular.module('myApp').service('apiDataService', apiDataService);

function apiDataService($http) {
  return {
    apiDataList: apiDataList
  };

  function apiDataList() {
    return $http.get("https://ecs-assignment-heroku.herokuapp.com/api/data").then(complete).catch(failed);
  }

  function complete(response) {
    return response.data;
  }

  function failed(error) {
    console.log(error.data);
  }

}
