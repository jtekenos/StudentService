
(function () {
    var StudentService = function ($http) {
        var base = 'http://w06a.jesstek.me/api/student/';

        var _getStudent = function (studentId) {
            return $http.get(base + studentId)
            .then(function (response) {
                return reponse.data;
            });
        };

        var _getAllStudents = function () {
            return $http.get(base)
            .then(function (response) {
                return response.data;
            });
        };

        return {
            getStudent: _getStudent,
            getAllStudents: _getAllStudents
        };
    };

    var module = angular.module("studentViewer");
    module.factory("StudentService", StudentService);

}());
