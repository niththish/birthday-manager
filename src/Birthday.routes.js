angular.module('birthdayManager')
.config(['$urlRouterProvider','$stateProvider',config])

function config($urlRouterProvider,$stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        template:'<main-Component></main-Component>'
    })
    .state('monthlist',{
        url:'/monthlist',
        template:'<monthlist-Component></monthlist-Component>'
    })
    .state('monthwise',{
        url:'/monthlist/:id',
        template:'<monthwise-Component></monthwise-Component>'
    })
   
    
}
