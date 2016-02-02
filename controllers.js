(function(){
    var app = angular.module('app',[]);

    app.controller('controller', function($scope){

	$scope.data = [
	    {
	    month:'January',
	    sales: 36
	    },    
	    {
	    month:'February',
	    sales: 54
	    },
	    {
	    month:'March',
	    sales: 62
	    },
	    {
	    month:'April',
	    sales:82
	    },
    	    {
	    month:'May',
	    sales:96
	    },
    	    {
	    month:'June',
	    sales:104
	    },
    	    {
	    month:'July',
	    sales:122
	    },
    	    {
	    month:'August',
	    sales:152
	    },
    	    {
	    month:'September',
	    sales:176
	    },
    	    {
	    month:'October',
	    sales:180
	    },
    	    {
	    month:'November',
	    sales:252
	    },
    	    {
	    month:'December',
	    sales:342
	    }];

	$scope.max = Math.max.apply(Math, $scope.data.map(function(o){
	    return o.sales;
	}))
    }); // end controller

})();

	    
