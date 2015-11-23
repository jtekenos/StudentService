(function () {
    var app = angular.module("studentViewer");

    var StudentController = function ($scope, $location, StudentService) {

        var _student = {
            StudentId : "",
            FirstName : "",
            LastName : "",
            Program : ""
        };

        //Get all Students
        var getAllOk = function (data) {
            $scope.students = data;
        }

        var getAllError = function (reason) {
            $scope.error = "Unable to retrieve all students";
        };

        $scope.search = function () {
            StudentService.getAllStudents()
                .then(getAllOk, getAllError);
        };

        //Find one Student (by student id)

    };

    app.controller("StudentController", StudentController);

}());