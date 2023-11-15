export default function Home() {
  return (
    <div class="bg-black text-white h-screen flex flex-col items-center justify-center">
    <div class="text-4xl font-bold mb-4">StreamRanked</div>
    <div class="bg-purple-700 p-2 rounded">
      <svg class="h-8 w-8 text-white" /* Insert SVG path here */></svg>
    </div>
    <div class="text-xl my-4">Votez et Découvrez!</div>
    <div class="text-base mb-6">StreamRanked, votre plateforme ultime des streamers Twitch.</div>
    <button class="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
      Je vote
    </button>
    <div class="absolute top-4 right-4">
      <button class="text-purple-300 hover:text-white">connexion avec Twitch</button>
    </div>
  </div>
  )
}
