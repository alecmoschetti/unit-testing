<script>
    import { calculator } from '../../scripts/tests.js';
    $: addition = calculator.add(calculator.addA, calculator.addB);
	$: subtraction = calculator.subtract(calculator.subtractA, calculator.subtractB);
	$: division = calculator.divide(calculator.divideA, calculator.divideB);
	$: multiplication = calculator.multiply(calculator.multiplyA, calculator.multiplyB);
</script>

<h3>Very basic calculator</h3>
<div id="calculations">
    <div>
        <input type="number" bind:value={calculator.addA}>
        <input type="number" bind:value={calculator.addB}>
        <p>{calculator.addA} + {calculator.addB} = {addition}</p>
    </div>
    <div>
        <input type="number" bind:value={calculator.subtractA}>
        <input type="number" bind:value={calculator.subtractB}>
        <p>{calculator.subtractA} - {calculator.subtractB} = {subtraction}</p>
    </div>
    <div>
        <input type="number" bind:value={calculator.divideA}>
        <input type="number" bind:value={calculator.divideB}>
        <p>{calculator.divideA} / {calculator.divideB} = {division}</p>
    </div>
    <div>
        <input type="number" bind:value={calculator.multiplyA}>
        <input type="number" bind:value={calculator.multiplyB}>
        <p>{calculator.multiplyA} * {calculator.multiplyB} = {multiplication}</p>
    </div>
</div>

<style>
    #calculations {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
        gap: 1rem;
		padding: 1rem;
	}
</style>