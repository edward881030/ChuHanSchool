'use strict';

angular.module('headNav', []);

angular.
module('headNav').
component('headNav', {
    templateUrl: 'static/header-nav.html',
    controller: ['$anchorScroll', '$location', '$scope',
        function HeaderNavController($anchorScroll, $location, $scope) {
        $scope.infos = [
            {
                "id": "sy",
                "name": "首页"
            }, {
                "id": "ssfc",
                "name": "师生风采"
            }, {
                "id": "kczf",
                "name": "课程资费"
            }, {
                "id": "rxlc",
                "name": "入学流程"
            }, {
                "id": "xzdt",
                "name": "校址地图"
            }, {
                "id": "gywm",
                "name": "关于我们"
            }
        ];
        $scope.gotoAnchor = function (anchor) {
            var newHash = anchor;
            if ($location.hash() !== newHash) {
                $location.hash(anchor);
            } else {
                $anchorScroll();
            }
        };
    }]
});