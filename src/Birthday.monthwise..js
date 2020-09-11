angular.module('birthdayManager')
.service('monthwiseService',monthwiseService)
.controller('monthwiseController',['$scope','$http','$stateParams','monthwiseService',monthwiseController])
.component('monthwiseComponent',{
    templateUrl:'monthwise.html',
    controller:'monthwiseController'
})

function monthwiseController($scope,$http,$stateParams,monthwiseService){
    $scope.id=$stateParams.id;

   
    $http.get('data/birthdays.json').success(function(data){
        $scope.data=data;
        
        $scope.monthDetails=monthwiseService.getDetails($scope.id,$scope.data);
        $scope.month=new Date($scope.monthDetails[0].date);

       
        
    })
   
}

function monthwiseService(){
    var service=this;

    service.getDetails=function(id,data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()==parseInt(id)){
                data.date=new Date(data.date);
                dataList.push(data);
            }
        })
        return dataList;
    }

}