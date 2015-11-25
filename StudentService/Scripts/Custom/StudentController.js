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
        };

        var getAllError = function (reason) {
            $scope.error = "Unable to retrieve all students.";
        };

        $scope.search = function () {
            StudentService.getAllStudents()
                .then(getAllOk, getAllError);
        };

        //Find one Student (by student id)

        var findOk = function (data) {
            $scope.student = data;
        };

        var findError = function () {
            $scope.error = "Unable to find requested student."
        };

        $scope.find = function (id) {
            StudentService.getStudent(id)
                .then(findOk, findError);
        };

        //Add Student

        var addOk = function (data) {
            $scope.newStudent = data;

            _student.StudentId = "";
            _student.FirstName = "";
            _student.LastName = "";
            _student.Program = "";
        };

        var addError = function (reason) {
            $scope.error = "Could not add this student.";
        }

        $scope.addStudent = function () {
            var data = {
                StudentId: $scope.student.StudentId,
                FirstName: $scope.student.FirstName,
                LastName: $scope.student.LastName,
                Program: $scope.student.Program
            }
            StudentService.addStudent(data)
                .then(addOk, addError);
        };

        //Delete Student
        $scope.del_show = "none";
        var deleteOk = function (data) {
            $scope.students = data;
            $scope.confirm = data.StudentId;
            $scope.del_show = "true";
            $("#delete_dialog").dialog();
        };

        var deleteError = function (data) {
            $scope.error = "Unable to delete specified student.";
        };

        $scope.deleteStudent = function (id) {
            StudentService.deleteStudent(id)
                .then(deleteOk, deleteError);
        };

        //Edit Student
        var updateOk = function (data) {
            $scope.student = undefined;
            $("#dialog_update").dialog();
        };
        var updateError = function (reason) {
            $scope.error = "Could not edit specified student.";
        }
        $scope.updateStudent = function () {
            var data = {
                StudentId: $scope.student.StudentId,
                FirstName: $scope.student.FirstName,
                LastName: $scope.student.LastName,
                Program: $scope.student.Program
            }

            StudentService.updateStudent(data)
                .then(updateOk, updateError);
        };

    };

    app.controller("StudentController", StudentController);

}());