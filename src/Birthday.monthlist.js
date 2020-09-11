angular.module('birthdayManager')
.service('monthlistService',monthlistService)
.controller('monthlistController',['$scope','$http','monthlistService',monthlistController])
.component('monthlistComponent',{
    templateUrl:'monthlist.html',
    controller:'monthlistController'
})

function monthlistController($scope,$http,monthlistService){

    $http.get('data/birthdays.json').success(function(data){

        $scope.data=data;

        $scope.januaryList=monthlistService.januaryList($scope.data);
        $scope.feburaryList=monthlistService.feburaryList($scope.data);
        $scope.marchList=monthlistService.marchList($scope.data);
        $scope.aprilList=monthlistService.aprilList($scope.data);
        $scope.mayList=monthlistService.mayList($scope.data);
        $scope.juneList=monthlistService.juneList($scope.data);
        $scope.julyList=monthlistService.julyList($scope.data);
        $scope.augustList=monthlistService.augustList($scope.data);
        $scope.septemberList=monthlistService.septemberList($scope.data);
        $scope.octoberList=monthlistService.octoberList($scope.data);
        $scope.novemberList=monthlistService.novemberList($scope.data);
        $scope.decemberList=monthlistService.decemberList($scope.data);


        
 
    })
}

function monthlistService(){


    var service=this;

    /*--------------------JANUARY LIST-----------------------*/
    service.januaryList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===00){
                dataList.push(data);
            }
        })
        return dataList;
    }
    
    /*--------------------FEBURARY LIST-----------------------*/
    service.feburaryList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===01){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------MARCH LIST-----------------------*/
    service.marchList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===02){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------APRIL LIST-----------------------*/
    service.aprilList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===03){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------MAY LIST-----------------------*/
    service.mayList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===04){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------JUNE LIST-----------------------*/
    service.juneList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===05){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------JULY LIST-----------------------*/
    service.julyList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===06){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------AUGUST LIST-----------------------*/
    service.augustList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===07){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------SEPTEMBER LIST-----------------------*/
    service.septemberList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===08){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------OCTOBER LIST-----------------------*/
    service.octoberList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===09){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------NOVEMBER LIST-----------------------*/
    service.novemberList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===10){
                dataList.push(data);
            }
        })
        return dataList;
    }

    /*--------------------DECEMBER LIST-----------------------*/
    service.decemberList=function(data){
        var dataList=[];
        data.filter( (data)=>{
            var date=new Date(data.date);
            if( date.getMonth()===11){
                dataList.push(data);
            }
        })
        return dataList;
    }




}