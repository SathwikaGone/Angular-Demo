let myapp= angular.module("Myapp",[]);
let mycontroller = function($scope){
    $scope.message="Hello Sathwi!";

}
myapp.controller("MyController",mycontroller);

let JSONController =function($scope){
    let Student={
        FirstName: "Sathwika",
        LastName:"Gone",
        Email:"S533623@nwmissouri.edu"
    }
    $scope.Student=Student;

}

myapp.controller("Student",JSONController);