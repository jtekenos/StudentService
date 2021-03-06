﻿(function () {
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
            .when("/find", {
                templateUrl: "views/find.html",
                controller: "StudentController"
            })
            .when("/add", {
                templateUrl: "views/add.html",
                controller: "StudentController"
            })
            .when("/delete", {
                templateUrl: "views/delete.html",
                controller: "StudentController"
            })
            .when("/edit", {
                templateUrl: "views/edit.html",
                controller: "StudentController"
            })

            .otherwise({ redirectTo: "/main" });
    });

}());