export default function Home() {
    return (
        <div class="bg-secondary text-white h-screen flex flex-col items-center justify-center gap-8">
            <img src="img/courrone.svg"></img>
            <div class="flex flex-col text-center">
                <h1 class="text-3xl my-4 font-semibold">Votez et Découvrez!</h1>
                <p class="text-base mb-6 text-light mx-2">
                    StreamRanked, votre plateforme ultime des streamers Twitch.
                </p>
            </div>
            <button class=" text-3xl bg-gradient-to-r from-blue to-violet  text-white font-bold py-2 px-10 rounded hover:bg-purple-700">
                Je vote
            </button>
        </div>
    );
}