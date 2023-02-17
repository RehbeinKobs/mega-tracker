<script>
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Verificador from "./components/verificador.svelte";
  import Pesquisador from "./components/pesquisador.svelte";
  import TesteSuaSorte from "./components/teste-sua-sorte.svelte";

  let page = "";

  function headerButtonsClick(event) {
    page = event.target.name;
  }
</script>

<Header buttonsClick={headerButtonsClick} />
{#if page === "pesquisador"}
  <Pesquisador />
{:else if page === "teste-sua-sorte"}
  <TesteSuaSorte />
{:else}
  <Verificador />
{/if}
<Footer />
