angular.module('myApp').service('apiDataService', apiDataService);

function apiDataService($http) {
  return {
    apiDataList: apiDataList
  };

  function apiDataList() {
    return $http.get("https://murmuring-island-61109.herokuapp.com/api/data").then(complete).catch(failed);
  }

  function complete(response) {
    return response.data;
  }

  function failed(error) {
    console.log(error.data);
  }

}
