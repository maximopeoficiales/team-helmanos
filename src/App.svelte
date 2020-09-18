<script>
  
</script>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
  /* podemos junstar clases para crear componentes */
.btn {
    @apply px-4 py-2 rounded font-monse;
}

.btn-blue {
    @apply text-white bg-blue-500;
}

.btn-blue:hover {
    @apply bg-blue-700;
}

a:hover {
    text-decoration: none;
}
a {
    text-decoration: none;
}
a:visited{
    color: white;
}
</style>

<main class="text-center font-monse">
  <h1 class="text-6xl text-red-800">Hello </h1>
  <p class="p-2">
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <p class="text-sm text-gray-600">TailwindCSS Integration</p>
</main>
