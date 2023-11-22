export default function Home() {
    return (
        <div className="bg-secondary text-white h-screen flex flex-col items-center justify-center gap-8">
            <img src="img/courrone.svg"></img>
            <div className="flex flex-col text-center">
                <h1 className="text-3xl my-4 font-semibold">Votez et Découvrez!</h1>
                <p className="text-base mb-6 text-light mx-2">
                    StreamRanked, votre plateforme ultime des streamers Twitch.
                </p>
            </div>
            <button className=" text-3xl bg-gradient-to-r from-blue to-violet  text-white font-bold py-2 px-10 rounded hover:bg-purple-700">
                Je vote
            </button>
        </div>
    );
}