angular.module('myApp')
    .controller('gridController', gridController);
    function gridController($scope,apiDataService) {
        $scope.gridOptions = {
            data: 'myData',
            columnDefs: [{ field: "Answer", width: 350, pinned: true },
                        { field: "Confidence", width: 120},
                        { field: "Rank", width: 120 }],
        };

        apiDataService.apiDataList().then(function(response){
            $scope.myData = response;
        });
    };