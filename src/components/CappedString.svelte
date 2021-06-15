<script>
    import { capFirstString } from '../../scripts/tests.js';
    let capitalize = '';
    $: firstLetter = capFirstString(capitalize);
</script>

<div id="capString">
    <div>
        <label for="cappingFirstLetter">Take a string and return that string with the first character capitalized: </label>
        <input type="text" name="cappingFirstLetter" bind:value={capitalize}>
    </div>
    <p>Outputs: {firstLetter}</p>
</div>

<style>
    #capString {
        display: flex;
        flex-flow: column nowrap;
        height: 12rem;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    #capString > div {
        display: flex;
        flex-flow: row wrap;
    }
</style>