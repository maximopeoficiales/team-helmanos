<script>
  import Index from "./Pages/Index.svelte";
  import { Router, Route } from "svelte-routing";
  import Brother from "./Pages/Brother.svelte";
</script>

<style global>
  @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"); /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
  /* podemos junstar clases para crear componentes */
</style>

<Router>
  <Route path="/" component={Index} />
  <Route path="/brother/:id" component={Brother} let:params />
</Router>
