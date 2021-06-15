<script>
    import { reverseString } from '../../scripts/tests.js';
	let reverseInput = '';
    $: reversed = reverseString(reverseInput);
</script>

<div id="reverse">
    <div>
        <label for="reversingInput">Take a string and return it reversed: </label>
        <input type="text" name="reversingInput" bind:value={reverseInput}>
    </div>
    <p>Outputs: {reversed}</p>
</div>

<style>
    #reverse {
        display: flex;
        flex-flow: column nowrap;
        height: 12rem;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    #reverse > div {
        display: flex;
        flex-flow: row wrap;
    }
</style>