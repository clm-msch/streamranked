export default function Home() {
  return (
    <div class="bg-black text-white h-screen flex flex-col items-center justify-center">
      <svg
        width="97"
        height="73"
        viewBox="0 0 97 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5 5L68 36.5L92.375 15.5L82.625 68H14.375L4.625 15.5L29 36.5L48.5 5Z"
          stroke="url(#paint0_linear_1_346)"
          stroke-width="9"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_346"
            x1="-0.859375"
            y1="5"
            x2="63.3856"
            y2="90.9749"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#000AFF" />
            <stop offset="1" stop-color="#A81AFF" />
          </linearGradient>
        </defs>
      </svg>
      <div class="flex flex-col">
        <h1 class="text-3xl my-4 font-semibold">Votez et Découvrez!</h1>
        <p class="text-base mb-6 text-light">
          StreamRanked, votre plateforme ultime des streamers Twitch.
        </p>
      </div>
      <button class="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
        Je vote
      </button>
    </div>
  );
}
