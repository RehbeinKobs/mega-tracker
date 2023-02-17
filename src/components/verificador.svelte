<script>
    import ConcursoService from "../services/concurso";

    let premiado = true;
    let value = "";
    let concursos = {
        faixa1: [],
        faixa2: [],
        faixa3: [],
    };

    function aleatorioButtonClick() {
        const numbers = [];
        while (numbers.length < 6) {
            let randomNumber = Math.floor(Math.random() * 60) + 1;
            if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
        }
        value = numbers.sort((a, b) => a - b).join(",");
    }

    async function verificarButtonClick() {
        concursos = await ConcursoService.getContestsByNumbers(
            value.split(",").map((num) => Number(num))
        );
        if (Object.keys(concursos).every((faixa) => concursos[faixa].length === 0)) {
            premiado = false;
        } else {
            premiado = true
        }
    }
</script>

<h1 id="verificador-title">VERIFICADOR DE RESULTADOS</h1>
<hr class="verificador-separator" />
<div id="verificador-main">
    <div id="verificador-left-section">
        <div>
            <span id="verificador-input-container"
                >NUMEROS <input
                    type="text"
                    id="verificador-input"
                    bind:value
                /></span
            >
            <div id="verificador-buttons-container">
                <button
                    class="verificador-buttons"
                    on:click={aleatorioButtonClick}>ALEATORIO</button
                >
                <button
                    class="verificador-buttons"
                    on:click={verificarButtonClick}>VERIFICAR</button
                >
            </div>
        </div>
    </div>
    <div id="verificador-right-section">
        <p>
            Verifique se seus números já foram sorteados em algum concurso da Mega-Sena.
        </p>
        <p>
            Para realizar a busca, insira uma sequência de números
            inteiros, entre 1 e 60, separados por vírgula, ou clique na opção
            "Aleatório". Em seguida, clique em "Verificar" para receber os
            resultados.
        </p>
    </div>
</div>
<div id="verificador-results-container">
    {#if !premiado}
        <hr class="verificador-separator" />
        <div class="verificador-results">
            <h2 class="verificador-results-titles">Esta sequência nunca foi premiada</h2>
        </div>
    {/if}
    {#each [1, 2, 3] as num}
        {#if concursos[`faixa${num}`].length}
            <hr class="verificador-separator" />
            <div class="verificador-results">
                <h2 class="verificador-results-titles">
                    Faixa {num} ({7 - num} acertos) - {concursos[`faixa${num}`]
                        .length}
                </h2>
                {#each concursos[`faixa${num}`] as conc}
                    <li>{conc.concursoToString(`faixa${num}`)}</li>
                {/each}
            </div>
        {/if}
    {/each}
</div>

<style>
    #verificador-title {
        margin: 1rem;
        text-align: center;
        font-size: 2em;
    }
    .verificador-separator {
        margin: auto;
        width: 70%;
        color: #99e6ac;
    }
    #verificador-main {
        margin: 1rem;
        display: flex;
        justify-content: center;
    }
    #verificador-results-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .verificador-results {
        margin: 0 0 1rem 0;
    }
    .verificador-results-titles {
        margin: 1rem 0;
    }
    #verificador-left-section {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: end;
        margin: 0 0.5rem 0 15%;
    }
    #verificador-input-container {
        font-size: 1.5em;
    }
    #verificador-input {
        font-size: 1em;
        width: 20rem;
        border: 0.1rem solid #99e6ac;
        border-radius: 0.5rem;
        padding: 0.1rem 0.5rem;
        background-color: #0F1114;
        color: #99e6ac;
    }
    #verificador-buttons-container {
        display: flex;
        padding: 0.25rem;
    }
    .verificador-buttons {
        font-size: 1.5rem;
        flex: 1;
        margin: 0.25rem;
        border: 0.1rem solid #99e6ac;
        border-radius: 0.5rem;
        background-color: #0F1114;
        color: #99e6ac;
    }
    #verificador-right-section {
        flex: 1;
        margin: 0 15% 0 0.5rem;
    }
</style>
