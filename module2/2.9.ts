{
    // * conditional types

    type a1 = null;
    type a2 = undefined;

    type x = a1 extends null ? true : false;  //! here x is conditional type because it depends on a1's type

    type y = a1 extends null ? true : a2 extends undefined ? undefined : any;


    type Seikh = {
        bike: string;
        car: string;
        ship: string;
        plane:string;
    }

    // car / bike / ship ase kina check korbe

    //^ type CheckVehicle<T> =  T extends 'bike' | 'car' | 'ship' ? true : false;

    type CheckVehicle<T> = T extends keyof Seikh ? true : false;

    type HasCar = CheckVehicle<'car'>;
    type HasBike = CheckVehicle<'bike'>;
    type HasShip = CheckVehicle<'ship'>;
    type HasTractor = CheckVehicle<'tractor'>;


    // ~type CheckVehicle2<T> = T extends keyof Seikh ? true : false;



















    // 
}