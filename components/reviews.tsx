import Image from 'next/image';
import React, {FC, ReactElement} from 'react';
import img1 from "../public/mercedeseqs.png";
import img2 from "../public/mazdamiata.png";
import img3 from "../public/subaruwrx.png";
import img4 from "../public/toyotasupra.png";
import img5 from "../public/teslamodel3.webp";
const ReviewsScroll:FC = () => {
    interface cardProps {
        name: string;
        text: string;
        src: string;
    }
    const Card:FC<cardProps> = (props) => {
        return (
            <div className="card w-96 glass">
                <div className="h-[216px]">
                <img src={props.src} className=""/>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.text}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="border-t-2 border-gray-800 outline-2 blobg h-[65%] landing-bg">
            <div className="items-center justify-center h-full">
            <h1 className="text-4xl underline font-bold text-center">See what our customers are saying</h1>
            <div className="carousel carousel-center p-4 space-x-8 outline-2 rounded-boxs ">
                <div className="carousel-item">
                    <Card src={img1.src} name={"Jane Doe"} text={"I ordered a Mercedes EQS and love it. It makes going back and forth from home much easier!"} />
                </div>
                <div className="carousel-item">
                    <Card src={img2.src} name={"John Doe"} text={"My parents used to have to drive 3 hours all the way from southern illinois. Now I just take my miata!"} />
                </div>
                <div className="carousel-item">
                    <Card src={img3.src} name={"Bob Smith"} text={"My friends and I constantly take trips in my subaru WRX. This has been a game changer for us!"} />
                </div>
                <div className="carousel-item">
                    <Card src={img4.src} name={"Jacob Richards"} text={"IMSA rentals even offers luxury options like the new Toyota Supra. My supra makes driving more fun than a chore!"} />
                </div>
                <div className="carousel-item">
                    <Card src={img5.src} name={"Mark Lemmings"} text={"My Tesla Model 3 is great for the enviornment while still being modern and sleek. I couldn't be happier with it."} />
                </div>
            </div>
            </div>
        </div>
        
    )
}
export default ReviewsScroll;