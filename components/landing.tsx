import React, {FC, ReactElement} from 'react';
import Link from 'next/link';
interface props {
    val?: number;
}
interface ctprops {
    text? : string;
}
const CheckmarkText:FC<ctprops> = ({ text = "lorem" }) => (
        <div className="items-center justify-center flex-initial w-min whitespace-nowrap">
            <div className="flex mt-2">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current mx-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-xl">{text}</span>
            </div>
        </div>
)

const Landing:FC<props> = (props) => {
    return (
        <div className="w-screen flex justify-center items-center z-0 h-[75%]">
            <div className="h-full flex-col items-center mt-12">
                <h1 className="underline text-5xl font-bold text-center my-4">IMSA Car Rental</h1>
                <h2 className="font-semibold text-3xl text-center">Rent a car today and expand your horizons.</h2>
                <div className="mt-12 items-center mx-auto w-min">
                <CheckmarkText text="Fast, Effective, and Inexpensive"/>
                <CheckmarkText text="Ran by IMSA students for other IMSA students"/>
                <CheckmarkText text="Large selection of vehicles"/>
                <CheckmarkText text="Customer support and full refunds"/>
                <CheckmarkText text="No hassle sign up and rental"/>
                </div>
                <div className="flex justify-center items-center mt-14">
                    
                    <Link href="/form" passHref>
                        <button id="go-btn" className="btn btn-primary mx-2">Try it yourself</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Landing;