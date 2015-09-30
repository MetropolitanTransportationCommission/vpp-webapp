'use strict';

angular.module('vppApp')
    .controller("NavLargeCtrl", [
    	'$scope', 
    	function ($scope) {
	    	
	    	$scope.isActive = true;
	    	
	    	//Show nav
			$scope.showInnerLinks = function(event){
				event.target.classList.add('show-inner');
				//$(event.target).addClass('show-inner');
				console.log('show');
			}
			
			//Hide nav
			$scope.hideInnerLinks = function(event){
				event.target.classList.remove('show-inner');
				//$(".nav-list").removeClass('show-inner');
				console.log('hide');
			}
			
			$scope.active = function(e){
				
				//Get attr of anchor clicked
				$scope.name = $(e.target).attr("name");
				
				if($scope.name === "research"){
					$('.research-nav').removeClass("hidden");
					$('.data-nav').addClass("hidden");
				} else if($scope.name === "data"){
					$('.data-nav').removeClass("hidden");
					$('.research-nav').addClass("hidden");
				} else{
					$('.research-nav').addClass("hidden");
					$('.data-nav').addClass("hidden");
					console.log("false");
				}
				console.log($scope.name);
				//Add and remove active states
				$('.navbar-nav > li > a').removeClass('active');
				$(e.target).addClass("active");
			};
			
			$scope.inner = function(event){
				$scope.overview = false;
				
				//Get attr
				$scope.getLocation = $(event.target).attr("location");
				$scope.getElement = document.getElementById($scope.location);
				$scope.makeId = '"#' + $scope.getLocation +'"';
				
				console.log('before');
				
				//Hide divs
				//$('.divFade').hide();RegionalPricingPolicies
				if ( $scope.getLocation === "EmployeePrograms" ){
					$('.divFade').hide();
					//Fadein section
					$("#EmployeePrograms").fadeIn();
				} else if ( $scope.getLocation === "RegionalPricingPolicies" ){
					
					$('.divFade').hide();
					//Fadein section
					$("#RegionalPricingPolicies").fadeIn();
				} else if ( $scope.getLocation === "Resources" ){
					
					$('.divFade').hide();
					//Fadein section
					$("#Resources").fadeIn();
				} else if ( $scope.getLocation === "EnactingPricingPolicies" ) {
					
					$('.divFade').hide();
					//Fadein section
					$("#EnactingPricingPolicies").fadeIn();
				} else if ( $scope.getLocation === "PolicyQuestions" ){
					
					$('.divFade').hide();
					//Fadein section
					$("#PolicyQuestions").fadeIn();
				} else if ( $scope.getLocation === "SupplyDemand" ){
					
					$('.divFade').hide();
					//Fadein section
					$("#SupplyDemand").fadeIn();
				} else if ( $scope.getLocation === "ParkingReqmntsUnbundling" ){			
					
					$('.divFade').hide();
					//Fadein section
					$("#ParkingReqmntsUnbundling").fadeIn();
				} else if( $scope.getLocation === "policy-overview" ){
					$('.divFade').hide();
					//Fadein section
					$("#EnactingPricingPolicies").fadeIn();
				} else if ( $scope.getLocation === "policy-urban" ){
					$('.divFade').hide();
					//Fadein section
					$("#policy-urban").fadeIn();
				} else if ( $scope.getLocation === "policy-travel" ){
					$('.divFade').hide();
					$("#policy-travel").fadeIn();
				} else if ( $scope.getLocation === "policy-key" ){
					$('.divFade').hide();
					$("#policy-key").fadeIn();
				} else if ( $scope.getLocation === "supply-overview" ){
					$('.divFade').hide();
					$("#supply-overview").fadeIn();
				} else if ( $scope.getLocation === "supply-parking" ){
					$('.divFade').hide();
					$("#supply-parking").fadeIn();
				} else if ( $scope.getLocation === "TravelModelOneAnalysis" ){
					$('.divFade').hide();
					$("#TravelModelOneAnalysis").fadeIn();
				}
				console.log($scope.getLocation);
				
			}
    	}
    ]	
);