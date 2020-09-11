angular.module('birthdayManager')
.service('homepageService',homepageService)
.controller('homepageController',['$scope','$http','homepageService',homepageController])
.component('mainComponent',{
    templateUrl:'mainpage.html',
    controller:'homepageController'
})

function homepageController($scope,$http,homepageService){
    $http.get('data/birthdays.json').success(function(data){
        $scope.birthdayList=data;
        $scope.today=new Date();

        $scope.todayList=homepageService.getTodayList($scope.birthdayList);
        $scope.weekList=homepageService.getWeekList($scope.birthdayList);
        $scope.monthList=homepageService.getMonthList($scope.birthdayList);

        /*$scope.monthList.filter((data)=>{
            data.date=new Data(data.date)
        })*/

        
    })
}

function homepageService(){

    var service=this;


    /*-------------TODAY LIST SERVICE-----------------*/
    service.getTodayList=function(value){
        var dataList=[];
        value.filter( (data)=>{
            var date=new Date(data.date);

            if( (date.getDate()===new Date().getDate()) && (date.getMonth()===new Date().getMonth()) ){
                data.date=new Date(data.date);
                dataList.push(data);
            }

        } )
        return dataList;
    }


    
    /*-------------WEEK LIST SERVICE-----------------*/
    service.getWeekList=function(value){
        var dataList=[];
        value.filter( (data)=>{
            var date=new Date(data.date);

            if( (date.getMonth()===new Date().getMonth())  && 
            (date.getDate() <new Date().getDate()+7) && 
            (date.getDate() >new Date().getDate()) ){
                data.date=new Date(data.date);
                dataList.push(data);
            }

        } )
        return dataList;
    }



     /*--------------------THIS MONTH LIST-----------------------*/
     service.getMonthList=function(value){
        var dataList=[];
        value.filter( (data)=>{
            var date=new Date(data.date);
            if( (date.getDate() >new Date().getDate()) && (date.getMonth() ===new Date().getMonth()) ){
                data.date=new Date(data.date);
                dataList.push(data);
            }
        } )
        return dataList;
    }

}