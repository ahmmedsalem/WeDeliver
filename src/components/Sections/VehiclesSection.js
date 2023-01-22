import React, { useContext, useEffect } from 'react';
import VehiclesContext from '../../context/vehicles/VehiclesContext';
import { Link } from "react-router-dom";


const VehiclesSection = () => {
    const { filteredCars, fetchVehicles } = useContext(VehiclesContext);

    useEffect(() => {
        fetchVehicles();
    })

    
    return (
        <>
            {filteredCars.map((vehicle) => (
                <Link className="shadow-xl hover:shadow-md flex flex-col justify-between rounded-md my-4 p-8 pt-0 h-80 w-full transition ease-linear duration-200" key={vehicle.id} to={`/singlevehicle/${vehicle.id}`}>
                    <div className="card-heading">
                        <p className="text-bold font-bold text-gray-800 text-left rtl:lg:text-right">
                            {vehicle.vehicle.manufacturer_model.manufacturer.manufacturer_name_en} {vehicle.vehicle.manufacturer_model.manufacturer_model_name_ar}
                        </p>
                        <p className="text-left rtl:lg:text-right text-gray-600">{vehicle.vehicle.production_year}</p>
                    </div>
                    <div className="card-body flex justify-center">
                        <img
                            src={vehicle.vehicle.main_image.url}
                            className="icon-card__icon max-h-[150px] self-center my-8"
                            alt="carimage"
                        />
                    </div>
                    <div className="card-info flex justify-between">
                        <div className="flex flex-col justify-center">
                            <img
                                src={require(`../../assets/images/transmission.png`)}
                                className="icon-card__icon self-center w-4"
                                alt="icon"
                            />
                            <p className="text-gray-600 font-medium">{vehicle.vehicle.transmission_obj.Value}</p>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center">
                                <img
                                    src={require(`../../assets/images/engine.png`)}
                                    className="icon-card__icon self-center w-4"
                                    alt="icon"
                                />
                                <p className="text-gray-600 font-medium">{vehicle.vehicle.engine_size_obj.Value}</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center">
                                <img
                                    src={require(`../../assets/images/type.png`)}
                                    className="icon-card__icon self-center w-4"
                                    alt="icon"
                                />
                                <p className="text-gray-600 font-medium">{vehicle.vehicle_body_form.transport_type_name_en}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default VehiclesSection;