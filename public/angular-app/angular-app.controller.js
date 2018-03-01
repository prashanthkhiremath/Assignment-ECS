angular.module('myApp')
    .controller('gridController', gridController);
    function gridController($scope,apiDataService) {
    
        $scope.gridOptions = {
            data: 'myData',
            enablePinning: true,
            columnDefs: [{ field: "answer", width: 350, pinned: true },
                        { field: "confidence", width: 120 },
                        { field: "rank", width: 120 }]
        };

        apiDataService.apiDataList().then(function(response){
            $scope.myData = response;
            console.log($scope.myData);
        });
    };