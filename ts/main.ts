interface Form {
    name: string;
    surname: string;
    email: string;
    birthdate: Date;
    sdUnit: string;
    area: string;
}

class Employee implements Form {
    name: string;
    surname: string;
    email: string;
    birthdate: Date;
    sdUnit: string;
    area: string;

    constructor(name: string, surname: string, email: string, birthdate: Date, sdUnit: string, area: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthdate = birthdate;
        this.sdUnit = sdUnit;
        this.area = area;
    }

    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
    getSurname() {
        return this.surname;
    }
    setEmail(email: string) {
        this.email = email;
    }
    getBirthdate() {
        return this.birthdate;
    }
    setBirthdate(birthdate: Date) {
        this.birthdate = birthdate;
    }
    getSdUnit(){
        return this.sdUnit
    }
    setSdUnit(sdUnit: string) {
        this.sdUnit = sdUnit;
    }
    getArea() {
        return this.area
    }
    setArea(area: string){
        this.area = area;
    }
}

class Salesman extends Employee {

    constructor(name: string, surname: string, email: string, 
        birthdate: Date, sdUnit: string, area: string){
            super(name, surname, email, birthdate, sdUnit, area);
        }
}

let salesman = new Salesman(`Rafa`, `Campos`, `hola@gmail.com`, new Date(`1997-01-30`), `ventas`, `Málaga`);
