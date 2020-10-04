<script>
  import typewriter from "../Transitions/index.js";

  import { fade, fly } from "svelte/transition";
  import { data } from "../Data/index.js";
  export let id;

  let dataCurrent = $data.filter((e) => e.id == id)[0];
  console.log(dataCurrent);
</script>

<style>
</style>

<main>
  <div class="w-screen h-screen portada">
    <div class="container px-2 py-4 mx-auto text-white font-monse">
      <section class="">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="flex flex-col justify-center">
            <h1 class="text-6xl font-extrabold ">{dataCurrent.shortname}</h1>
            <p class="text-2xl font-bold"><b>{dataCurrent.career}</b></p>
            <p class="text-2xl ">{dataCurrent.description}</p>

            <button
              class="flex justify-between p-4 my-2 text-2xl font-bold tracking-wider transition-all duration-700 ease-in-out delay-75 bg-black border-none rounded-lg active:bg-black hover:bg-gray-900">
              <p>Ver Biografia</p>
              <span> {'->'} </span>
            </button>
          </div>
          <div class="">
            <img
              src="../{dataCurrent.url}"
              alt={dataCurrent.name}
              class="block w-full m-auto rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  </div>
</main>
