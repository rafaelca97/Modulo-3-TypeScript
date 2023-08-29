var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, surname, email, birthdate, sdUnit, area) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthdate = birthdate;
        this.sdUnit = sdUnit;
        this.area = area;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getSurname = function () {
        return this.surname;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.getBirthdate = function () {
        return this.birthdate;
    };
    Employee.prototype.setBirthdate = function (birthdate) {
        this.birthdate = birthdate;
    };
    Employee.prototype.getSdUnit = function () {
        return this.sdUnit;
    };
    Employee.prototype.setSdUnit = function (sdUnit) {
        this.sdUnit = sdUnit;
    };
    Employee.prototype.getArea = function () {
        return this.area;
    };
    Employee.prototype.setArea = function (area) {
        this.area = area;
    };
    return Employee;
}());
var Salesman = /** @class */ (function (_super) {
    __extends(Salesman, _super);
    function Salesman(name, surname, email, birthdate, sdUnit, area) {
        return _super.call(this, name, surname, email, birthdate, sdUnit, area) || this;
    }
    return Salesman;
}(Employee));
var salesman = new Salesman("Rafa", "Campos", "hola@gmail.com", new Date("1997-01-30"), "ventas", "M\u00E1laga");
