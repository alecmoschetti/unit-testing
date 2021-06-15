<script>
    import { caesar } from '../../scripts/tests.js'; 
    let caesarMessage = 'I love programming! kinda...';
	let caesarKey = 13;
	$: caesarCiphered = caesar(caesarMessage, caesarKey);
</script>

<h3>Caesar Cipher Encyrption</h3>
<div id="caesar">
    <div>
        <label for="key">Key to shift encryption: </label>
        <input type="number" name="key" bind:value={caesarKey}>
    </div>
    <div>
        <label for="messageToEncrypt">String to encrypt: </label>
        <input type="text" name="messageToEncrypt" bind:value={caesarMessage}>
    </div>
    <p>Outputs: {caesarCiphered}</p>
</div>

<style>
    #caesar {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 20rem;
    }
</style>