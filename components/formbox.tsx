import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mercedesImg from "../public/mercedeseqs.png";
import miataImg from "../public/mazdamiata.png";
import wrxImg from "../public/subaruwrx.png";
import supraImg from "../public/toyotasupra.png";
import teslaImg from "../public/teslamodel3.webp";
import hondaImg from "../public/hondaOdyssey.webp";
import leafImg from "../public/NissanLeaf.webp";
import altimaImg from "../public/NissanAltima.png";
import miniImg from "../public/MiniCooper.webp";
interface props {
    labelText: string;
    inputText: string;
    password?: boolean;
}
interface formProps {
    mode: number;
    changeMode: (newNumber: number) => void;
    formValues: Map<string, string>;
    setFormValues: (Map: any) => void;
}
interface carProps {
    src: string;
    carName: string;
    carText: string;
    des: string[];
    changeSelected: (name: string) => void;
    selected: string;
}

const CarCard:FC<carProps> = (carProps) => {
    const bgcol = () => {
        if (carProps.selected != carProps.carName) {
            return "bg-primary";
        } else {
            return "bg-success";
        }
    }
    return (
        <div onClick={() => carProps.changeSelected(carProps.carName)} className={"flex-initial card md:w-48 lg:w-64 mx-auto shadow-xl hover:scale-125 hover:z-10 transition-all duration-300 " + bgcol()}>
            <div className="lg:h-[200px] md:h-[150px]">
                <img src={carProps.src} alt="Image of a car" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-lg">{carProps.carName}
                    <div className="badge badge-secondary">AVAILABLE</div>
                </h2>
                <p>{carProps.carText}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{carProps.des[0]}</div> 
                    <div className="badge badge-outline">{carProps.des[1]}</div>
                </div>
            </div>
        </div>
    )
}
const FormBox:FC<formProps> = (formProps) => {
    const [selectedCar, setSelectedCar] = useState("None");
    const botBtn = () => {
        if (selectedCar != "None") {
            return (
                <div className="flex w-full items-center justify-center m-4">
                    <button onClick={() => formProps.changeMode(2)} className="btn btn-primary">Checkout</button>
                </div>
            )
        }
    }
    const CustomInput:FC<props> = (props) => {
        //Based on input provided by tailwindcss docs
        return (
            <div className="mb-4 mx-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    {props.labelText}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={props.password != undefined ? "password" : "text"} placeholder={props.inputText} />
            </div>
        )
    }
    const premiumCars = ["Subaru WRX", "Mazda Miata", "Toyota Supra", "Mercedes EQS", "Tesla Model 3"];
    if (formProps.mode == 0) {
    return (
        <div className="w-[85%] h-[85%] bg-white rounded-2xl shadow-2xl flex mx-auto my-auto justify-center text-black">
                <div className="flex-initial flex flex-col w-[50%] justify-center items-center border-r-2">
                    <h1 className="text-3xl">1. Let&apos;s create an account.</h1>
                    <h2 className="text-xl text-gray-500">After this you can select a car.</h2>
                </div>
                <div className="flex-col flex w-[50%] justify-center items-center">
                    <div className="flex mx-2">
                        <CustomInput labelText="Name" inputText="First and Last Name..." />
                        <CustomInput labelText="Username" inputText="Your Username"/>
                    </div>
                    <div className="flex justify-center">
                        <CustomInput labelText="Password" inputText="Your password..." password={true} />
                    </div>
                    <div className="w-full justify-center items-center flex">
                        <button className="my-auto btn btn-primary btn-outline" onClick={() => {formProps.changeMode(1);}}>Next</button>
                    </div>
                </div>
        </div>
    );
    } else if (formProps.mode == 1) {
        return (
            <div className="w-[85%] min-h-[85%] bg-white rounded-2xl shadow-2xl flex flex-col mx-auto my-auto text-black">
                <div className="flex flex-grow flex-col h-[10%] items-center justify-center border-b-2">
                    <h1 className="text-3xl ">2. Pick out a car!</h1>
                </div>
                <div className="h-[90%] justify-center items-center grid grid-cols-4 auto-rows-auto gap-2">
                    <CarCard carName="Subaru WRX" carText="A 4 wheel drive 300 hp beast for you and 3 other people." src={wrxImg.src} des={["Functional", "Spatious"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Mazda Miata" carText="A quick and light sporty vehicle, but limited on space." src={miataImg.src} des={["Sporty", "Small"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Mercedes EQS" carText="A classic car with the modern features of an electric vehicle." src={mercedesImg.src} des={["Electric", "Business"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Toyota Supra" carText="The evolution of the timeless Supra." src={supraImg.src} des={["Fast", "High end"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Tesla Model 3" carText="The economical yet powerful Tesla." src={teslaImg.src} des={["Electric", "Modern"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Honda Odyssey" carText="A classic van for those who need a bit more space." src={hondaImg.src} des={["Spatious", "Economical"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Nissan Leaf" carText="A modern electric vehicle with a spatious interior." src={leafImg.src} des={["Electric", "Economical"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Nissan Altima" carText="A classic 4 seater car with a refined interior." src={altimaImg.src} des={["4 Seats", "Economical"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                    <CarCard carName="Mini Cooper" carText="A new and unique small car for those looking to cut back." src={miniImg.src} des={["Fun", "Small"]} changeSelected={setSelectedCar} selected={selectedCar}/>
                </div>
                {botBtn()}
            </div>
        )
    } else {
        var isPremium = premiumCars.includes(selectedCar);

        return (
            <div className="w-[65%] h-[85%] bg-white rounded-2xl shadow-2xl flex flex-col items-center mx-auto my-auto text-black">
                <div className="border-b-2 w-full flex flex-col items-center">
                    <h1 className="text-2xl mt-4 mx-auto">Order Recieved!</h1>
                    <h2 className="text-xl mb-4 text-gray-300">We will get your order to you within 3 business days.</h2>
                </div>
                <div className="w-full flex flex-col h-full">
                    <h1 className="text-2xl m-4">Your order:</h1>
                    <div className="w-full flex border-2 justify-between">
                        <div className="flex flex-col m-4">
                        <span className="">{selectedCar} x1</span>
                        <span className="text-gray-300">{isPremium ? "Premium Vehicle" : "Regular Vehicle"}</span> 
                        </div>
                        <span className="m-4">{isPremium ? "$50" : "$30"}</span>
                    </div>
                    <Link href='/'>
                        <div className="btn btn-primary mt-auto my-10 mx-4">
                            Home
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
    
}
export default FormBox;