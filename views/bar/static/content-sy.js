'use strict';

angular.module('contentSy', ['ui.bootstrap']);

angular.
module('contentSy').
component('contentSy', {
    templateUrl: 'static/content-sy.html',
    controller: function ContentCarouselController($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function($seq) {
            slides.push({
                image: 'static/images/'+ $seq +'.jpeg',
                id: currIndex++
            });
        };


        for (var i = 0; i < 3; i++) {
            $scope.addSlide(i + 1);
        }
    }

});