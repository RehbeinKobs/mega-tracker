<script>
    export let buttonsClick;
</script>

<div id="header">
    <div id="header-left-section">
        <h1 id="header-title">MEGA TRACKER</h1>
    </div>
    <div id="header-right-section">
        <button class="header-buttons" name="verificador" on:click={buttonsClick}>VERIFICAR RESULTADOS</button>
        <button class="header-buttons" name="pesquisador" on:click={buttonsClick} disabled>PESQUISAR CONCURSOS</button>
        <button class="header-buttons" name="teste-sua-sorte" on:click={buttonsClick} disabled>TESTE SUA SORTE</button>
    </div>
</div>

<style>
    #header-title {
        font-size: 3em;
    }
    #header {
        background-color: #1e2229;
        display: flex;
        align-items: stretch;
        padding: 0 .5rem;
    }
    #header-left-section {
        flex: 1;
    }
    #header-right-section {
        padding: .5rem 0;
        flex: 1;
        display: flex;
        justify-content: end;
    }
    .header-buttons {
        font-size: 1.3em;
        border: .1rem solid #99e6ac;
        border-radius: .5rem;
        padding: 0 .6rem;
        margin-left: .5rem;
        background-color: #1e2229;
        color: #99e6ac;
    }
</style>