class Vehicle {
    constructor(name, company, ID) {
        this.name = name;
        this.company = company;
        this.ID = ID;
    }
}

class Car extends Vehicle {
    constructor(name, company, ID, carType) {
        super(name, company, ID);
        this.carType = carType;
    }
}

class Plane extends Vehicle {
    constructor(name, company, ID, planeType) {
        super(name, company, ID);
        this.planeType = planeType;
    }
}

class Employee {
    constructor(name, dateOfBirth, ID) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.ID = ID;
    }
}

class Driver extends Employee {
    constructor(name, dateOfBirth, ID, licenseID) {
        super(name, dateOfBirth, ID);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, dateOfBirth, ID, licenseID) {
        super(name, dateOfBirth, ID);
        this.licenseID = licenseID;
    }
}

class Reservation {
    constructor(reservationDate, employeeID, vehicleID, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeID = employeeID;
        this.vehicleID = vehicleID;
        this.reservationID = reservationID;
    }
}


const reservations = [];

let vehicles = [
    new Car('Camry', 'Toyota', "C163", 'Gasoline'),
    new Car('Mustang', 'Ford', "C853", 'Gasoline'),
    new Car('Model 3', 'Tesla', "C842", 'Electric'),
    new Plane('Boeing 747', 'Boeing', "P478", 'Commercial'),
    new Plane('CaChinook Helicoptermry', 'Boeing', "P267", 'Military')
];

let employees = [
    new Driver("Ali Khaled", "1989-04-10", "E1", "D111"),
    new Pilot("Fatima Mohamed", "1992-11-05", "E2", "P987"),
    new Driver("Aya Youssef", "1988-03-30", "E3", "D789"),
    new Driver("Mohamed Ahmed", "1995-07-12", "E4", "D1234"),
    new Pilot("Noura Abdullah", "1990-02-18", "E5", "P5678"),
];

function createReservation(employeeId, vehicleId) {
    let employee = false;
    let vehicle = false;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].ID === employeeId) {
            employee = employees[i];
            break;
        }
    }
    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].ID === vehicleId) {
            vehicle = vehicles[i];
            break;
        }
    }
    if (!employee) {
        console.log("Employee Not Found")
        return;
    }
    if (!vehicle) {
        console.log("Vehicle Not Found")
        return;
    }

    if (employee instanceof Pilot && vehicle instanceof Car) {
        console.log("Incompatible: A pilot cannot reserve a car.");
    }
    else if (employee instanceof Driver && vehicle instanceof Plane) {
        console.log("Incompatible: A Driver cannot reserve a Plane.");
    }
    else {
        const reservation = new Reservation(new Date(), employee.ID, vehicle.ID, reservations.length + 1);
        reservations.push(reservation);
        console.log("Reservation completed successfully");
    }
}

createReservation("E1", "C163");
createReservation("E5", "C853");
createReservation("E2", "P478");
createReservation("E3", "P478");
createReservation("E17", "C163");

console.log("All Reservations:");
reservations.map(function(current) {
    console.log(`Reservation ID: ${current.reservationID}, Employee ID: ${current.employeeID}, Vehicle ID: ${current.vehicleID}, Date: ${current.reservationDate}`);
});

