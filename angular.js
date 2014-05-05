var app = angular.module('app', []);
app.controller('lighbox', ['$scope', function($scope){
	$scope.groups = [
			    {
			      thumb: 'http://mcgovern.mit.edu/news/wp-content/uploads/2013/08/image7LR.jpg',
			      image: 'http://mcgovern.mit.edu/news/wp-content/uploads/2013/08/image7LR.jpg'
			    },
			    {
			      thumb: 'http://icdn4.digitaltrends.com/image/microsoft_xp_bliss_desktop_image-650x0.jpg',
			      image: 'http://icdn4.digitaltrends.com/image/microsoft_xp_bliss_desktop_image-650x0.jpg'
			    },
			    {
			      thumb: 'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg',
			      image: 'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'
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
      	scope.removelightbox = function(){
      		scope.showlight = 'FALSE';
      	}
	  },
      template:"<div ><li ng-repeat=\"group in groups\" ><span ng-click=\"showpopup(group.thumb)\"><img width=\"100px\" height=\"100px\" src='{{group.thumb}}' ng-click=\"showpopup('{{group.thumb}}')\" /></span></li><div class=\"black_overlay\" ng-click=\"removelightbox()\" ng-show=showlight=='show'><div class=\"lighbox\"><img src='{{pop}}'></div></div></div>"

  };
});