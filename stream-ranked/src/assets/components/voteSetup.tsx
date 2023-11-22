import Welcome from './welcome'
import Country from './country'
import Game from './game'
import {useState} from 'react';

type Slide = "welcome" | "country" | "game";
export default function Setup() {


    const [step, setstep] = useState<Slide>("welcome");

    // const handleClick = () => {
    //     setIsShown(true);
    // }

    const handleNext = (e) => {
        console.log(e);
        if (step == "welcome"){
            setstep("country") 
        }
    }


    return (
        <div>
        {step == "welcome" ? <Welcome onGoNextStep={handleNext} /> : null}
        {step == "country" ? <Country /> : null}
        {step == "game" ? <Game /> : null}
        </div>
    );
}