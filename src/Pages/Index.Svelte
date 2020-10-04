<script>
  import Footer from "../Components/Footer.svelte";
  import { data } from "../Data/index.js";
  import Card from "./../Components/Card.svelte";
</script>

<div class="container px-2 py-4 mx-auto text-white font-monse">
  <header class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
    <div class="p-4">
      <h1 class="text-4xl font-bold">Helmanos Crew</h1>
    </div>
    <div class="p-4">
      <h1 class="text-2xl font-semibold">Un grupo peculiar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        aliquam, fuga placeat soluta voluptatem, debitis commodi magnam, dicta
        alias
      </p>
    </div>
  </header>
  <main class="grid grid-cols-2 gap-2 p-2">
    {#each $data as d, i}
      {#if (i + 1) % 2 !== 0}
        <Card userData={d} />
      {:else}
        <Card userData={d} par={true} />
      {/if}
    {/each}
  </main>
  <Footer />
</div>
