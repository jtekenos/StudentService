(function () {
    var app = angular.module("studentViewer", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "views/main.html",
                controller: "StudentController"
            })
            .when("/showAll", {
                templateUrl: "views/showAll.html",
                controller: "StudentController"
            })
            .otherwise({ redirectTo: "/main" });
    });

}());