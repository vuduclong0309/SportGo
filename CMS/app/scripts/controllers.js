'use strict';

angular.module('CMSApp')
        .controller('IndexController', ['$scope', '$stateParams', 'reportFactory', function($scope, $stateParams, reportFactory) {
            
            
            $scope.isCrisis = 1;

            
             
            //reportFactory.getCrisisState().query(
            //    function(response) {
            //        $scope.isCrisis = response;
            //    },
            //    function(response) {
            //        $scope.message = "Error: "+response.status + " " + response.statusText;
            //    });

            
        }])

        .controller('HeaderController', ['$scope', '$stateParams', function($scope, corporateFactory) {
            $scope.showList = false;
            $scope.list = {};
            $scope.message="Loading ...";

            corporateFactory.getLeaders().query(
                function(response){
                    $scope.list = response;
                    $scope.showList = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );

        }])        

        .controller('MapController', ['$scope', '$stateParams', 'uiGmapGoogleMapApi', function($scope, $stateParams, uiGmapGoogleMapApi) {
            $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        }])

        .controller('ReportController', ['$scope', 'reportFactory', function($scope, reportFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.showMenu = false;
            $scope.message = "Loading ...";
            reportFactory.getDishes().query(
            function(response) {
                $scope.reportList = response;
                $scope.showMenu = true;
            },
            function(response) {
                $scope.message = "Error: "+response.status + " " + response.statusText;
            });
            
            

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.report = {itype:"", firstName:"", lastName:"", agree:false, location:"", verified = false,};            
        }])

        .controller('UserReportController', ['$scope', 'userreportFactory', function($scope, userreportFactory) {
            
            $scope.sendReport = function() {
                
                console.log($scope.report);
        
                    userreportFactory.submitReport().save($scope.report);
                    $scope.invalidChannelSelection = false;
                    $scope.report = {itype:"", firstName:"", lastName:"", agree:false, location:"", verified = false};
                    $scope.report.itype="";
                    $scope.reportForm.$setPristine();
                    console.log($scope.report);
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            $scope.showDish = false;
            $scope.message="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
            
            
            
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope,menuFactory) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            $scope.ratings = [1,2,3,4,5];
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            };
        }])

        // implement the IndexController and About Controller here


;
