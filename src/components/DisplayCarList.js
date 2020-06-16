import React from 'react';
import DisplayCar from './DisplayCar';
import {cars} from './ListOfCars';

class DisplayCarList extends React.Component {
    render() {
        const carList = cars.map((car,i) => {
            return <DisplayCar name = {cars[i].name} price ={cars[i].price} imag ={cars[i].img} />
        })
        return (
            <div>
                {carList}
            </div>
        );
    }
};
export default DisplayCarList;