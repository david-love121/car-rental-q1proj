import {FC} from 'react';
import Image from 'next/image';
import supraimg from "../public/SupraDriving.jpg";
import { TransitionGroup } from 'react-transition-group';
interface props {
    labelText: string;
    inputText: string;
    password?: boolean;
}
interface formProps {
    mode: number;
    changeMode: (newNumber: number) => void;
}
const CustomInput:FC<props> = (props) => {
    //Based on input provided by tailwindcss docs
    return(
        <div className="mb-4 mx-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                {props.labelText}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={props.password != undefined ? "password" : "text"} placeholder={props.inputText} />
        </div>
    )
}
const FormBox:FC<formProps> = (formProps) => {
    
    return (
        <div className="w-[85%] h-[85%] bg-white rounded-2xl shadow-2xl flex mx-auto my-auto justify-center text-black">
                <div className="flex-initial flex flex-col w-[50%] justify-center items-center border-r-2">
                    <h1 className="text-3xl">1. Let's create an account.</h1>
                    <h2 className="text-xl text-gray-500">After this you can select a car.</h2>
                </div>
                <div className="flex-col flex w-[50%] justify-center items-center">
                    <div className="flex mx-2">
                        <CustomInput labelText="Name" inputText="First and Last Name..." />
                        <CustomInput labelText="Username" inputText="Your Username..." />
                    </div>
                    <div className="flex justify-center">
                        <CustomInput labelText="Password" inputText="Your password..." password={true} />
                    </div>
                    <div className="w-full justify-center items-center flex">
                        <button className="my-auto btn btn-primary btn-outline" onClick={() => {formProps.changeMode(1)}}>Next</button>
                    </div>
                </div>
        </div>
    );
    
}
export default FormBox;