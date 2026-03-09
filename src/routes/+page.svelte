<script lang="ts">
	import { shaders } from '$lib/shaders';
	import ShaderCard from '$lib/components/ShaderCard.svelte';
</script>

<svelte:head>
	<title>Shaders — Canvas Animations</title>
</svelte:head>

<header>
	<h1>Shaders</h1>
	<p>A collection of canvas-based generative animations. Click to explore, configure, and download.</p>
</header>

<div class="grid">
	{#each shaders as shader (shader.id)}
		<ShaderCard {shader} />
	{/each}
</div>

<style>
	header {
		padding: 2rem 3rem;
		border-bottom: 1px solid rgba(200, 149, 108, 0.15);
	}
	header h1 {
		font-size: 1.5rem;
		font-weight: 300;
		letter-spacing: 0.05em;
		color: #c8956c;
	}
	header p {
		margin-top: 0.5rem;
		font-size: 0.85rem;
		color: rgba(232, 224, 216, 0.5);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
		gap: 1.5rem;
		padding: 2rem 3rem;
	}
</style>
