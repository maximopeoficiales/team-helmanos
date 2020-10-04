<script>
  import { fly, fade } from "svelte/transition";
  import { link } from "svelte-routing";
  export let userData = [];
  export let par = false;
</script>

<style>
  .img-filter {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    transition: all 0.9s ease-out;
  }
  .img-filter:hover {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    -o-filter: grayscale(0%);
  }
  .text-small-custom {
    font-size: 0.5rem;
  }
  @media (min-width: 576px) {
    .text-small-custom {
      font-size: 1rem;
    }
  }
</style>

<article
  class="p-4  {par ? 'mt-20' : ''}"
  in:fly={{ x: 200, duration: 2000 }}
  out:fade>
  <div class="flex flex-col items-center justify-center">
    <a href="brother/{userData.id}" use:link>
      <picture class="flex">
        <img
          src={userData.url}
          alt={userData.shortname}
          class="rounded-lg img-filter" />
        <p
          style="writing-mode: vertical-lr;"
          class="font-semibold uppercase text-small-custom">
          {userData.career}
        </p>
      </picture>
    </a>

    <h4 class="p-2 text-sm font-semibold md:text-4xl">{userData.shortname}</h4>
  </div>
</article>
