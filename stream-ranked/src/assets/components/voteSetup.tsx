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

    return (
        <div>
        {step == "welcome" ? <Welcome /> : null}
        {step == "country" ? <Country /> : null}
        {step == "country" ? <Game /> : null}
        </div>
    );
}