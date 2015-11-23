
(function () {
    var StudentService = function ($http) {
        var base = 'http://w06a.jesstek.me/api/Student/';
 
        //show all
        var _getAllStudents = function () {
            return $http.get(base)
            .then(function (response) {
                return response.data;
            });
        };

        //find
        var _getStudent = function (id) {
            return $http.get(base + id)
            .then(function (response) {
                return response.data;
            });
        };

        //add
        var _addStudent = function (data) {
            return $http.post(base, data)
                .then(function (response) {
                    return response.data;
                });
        };

        //reference
        return {
            getStudent: _getStudent,
            getAllStudents: _getAllStudents,
            addStudent: _addStudent
        };
    };

    var module = angular.module("studentViewer");
    module.factory("StudentService", StudentService);

}());
