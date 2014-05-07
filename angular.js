var app = angular.module('app', []);
app.controller('lighbox', ['$scope', function($scope){
	$scope.groups = {
					    1:{
					      thumb: 'http://www.altiusdirectory.com/Travel/images/McKinley%20Mountain%20Image.jpg',
					      image: 'http://www.altiusdirectory.com/Travel/images/McKinley%20Mountain%20Image.jpg'
					    },
					    2:{
					      thumb: 'https://lh4.ggpht.com/zQIXMNP87brRkMSRRiALQkgF-JRQeBW5vMgqwUt3xMwKw3yeZeZyH1GU6lzXNbDBuRM=w300',
					      image: 'https://lh4.ggpht.com/zQIXMNP87brRkMSRRiALQkgF-JRQeBW5vMgqwUt3xMwKw3yeZeZyH1GU6lzXNbDBuRM=w300'
					    },
					    3:{
					      thumb: 'http://ecx.images-amazon.com/images/I/81UUXP-xN4L._SL500_AA300_.png',
					      image: 'http://ecx.images-amazon.com/images/I/81UUXP-xN4L._SL500_AA300_.png'
					    }
			  };

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
      controller:function($scope){
	  },
      link:function(scope, element, attrs){
      	scope.showLight = false;
      	scope.showpopup = function(imagenew){
      		console.log("here");
      		console.log(imagenew);
      		scope.showlight = 'show';
      		scope.pop = imagenew;
      	}
      	scope.removelightbox = function(){
      		scope.showlight = 'FALSE';
      	}
      	scope.nextpopup  = function(nextimage){
  			scope.showlight = 'show';
  			console.log(nextimage);
  			scope.pop = nextimage;
  		}
	  },
      templateUrl:"lightbox.html"

  };
});