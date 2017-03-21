'use strict';

angular.module('CMSApp', ['ui.router','ngResource'])

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        //controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.map', {
                url:'map',
                views: {
                    'content@': {
                        templateUrl : 'views/map.html',
                        controller  : 'MapController'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            })

            // route for the report page
            .state('app.report', {
                url: 'report',
                views: {
                    'content@': {
                        templateUrl : 'views/report.html',
                        controller  : 'ReportController'
                    }
                }
            })

            .state('app.socmedia', {
                url: 'media',
                views: {
                    'content@': {
                        templateUrl : 'views/media.html',
                        controller  : 'MediaController'
                    }
                }
            })
    
        $urlRouterProvider.otherwise('/');
    })

;