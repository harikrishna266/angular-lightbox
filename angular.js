var app = angular.module('app', []);
app.controller('lighbox', ['$scope', function($scope){
	$scope.groups = [
			    {
			      thumb: 'http://images.gizmag.com/gallery_tn/ge_healthcare_imaging_competition_2012-1.jpg',
			      image: 'http://images.gizmag.com/gallery_tn/ge_healthcare_imaging_competition_2012-1.jpg'
			    },
			    {
			      thumb: 'http://a1.mzstatic.com/us/r30/Purple2/v4/86/f9/b2/86f9b269-1757-bd4c-d0ce-f38dcd8ff785/mzl.zldmcswx.100x100-75.jpg',
			      image: 'http://a1.mzstatic.com/us/r30/Purple2/v4/86/f9/b2/86f9b269-1757-bd4c-d0ce-f38dcd8ff785/mzl.zldmcswx.100x100-75.jpg'
			    }
			  ];

}])


app.directive('modal',function(){
	return{
		scope:{},
		controller:function($scope){
			$scope.one = function(){
				console.log("asd");		
			}
		}
	}

})

app.directive('lightbox', function() {
  return {
      restrict: 'E',
      scope:true,
      require:'modal',
      controller:function($scope){
									
      },
      link:function(scope, element, attrs,modalCtrl){
      	scope.showLight = false;
      	scope.showpopup = function(imagenew){
      			scope.showlight = 'show';
      			scope.pop = imagenew;
      	}

      	
   	  },
      template:"<div ><li ng-repeat=\"group in groups\" ><span ng-click=\"showpopup(group.thumb)\"><img src='{{group.thumb}}' ng-click=\"showpopup('{{group.thumb}}')\" /></span></li><div class=\"lighbox\" ng-show=showlight=='show'>{{showLight}}<img src='{{pop}}'></div></div>"


  };
});