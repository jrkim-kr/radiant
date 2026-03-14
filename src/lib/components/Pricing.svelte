<section id="pricing" class="pricing">
	<div class="pricing-header">
		<h2>Pricing</h2>
		<p>One-time purchase. No subscriptions. Free updates forever.</p>
	</div>
	<div class="grid">
		{#each tiers as tier}
			<div class="card">
				<h3>{tier.name}</h3>
				<div class="price">
					{#if tier.price === 'Contact'}
						<span class="amount">Contact us</span>
					{:else if tier.price === 'Free'}
						<span class="amount">Free</span>
					{:else}
						<span class="amount">{tier.price}</span>
					{/if}
				</div>
				<p class="audience">{tier.audience}</p>
				<ul>
					{#each tier.features as feature}
						<li>{feature}</li>
					{/each}
				</ul>
				<a href={tier.cta.href} class="btn btn-ghost">
					{tier.cta.label}
				</a>
			</div>
		{/each}
	</div>
</section>

<script lang="ts">
	const tiers = [
		{
			name: 'Personal',
			price: 'Free',
			audience: 'Non-commercial use',

			features: [
				'All 60+ shaders',
				'Full source code',
				'Personal & educational use',
				'Community support'
			],
			cta: { label: 'Download Free', href: '/radiant-shaders.zip' }
		},
		{
			name: 'Indie',
			price: '$149',
			audience: 'Solo devs, < $1M revenue',

			features: [
				'Commercial use license',
				'Unlimited client projects',
				'All current & future shaders',
				'Priority email support'
			],
			cta: {
				label: 'Buy Indie License',
				href: 'mailto:paul@paulbakaus.com?subject=Radiant%20Indie%20License&body=Hi%20Paul%2C%0A%0AI%27d%20like%20to%20purchase%20an%20Indie%20license%20for%20Radiant.%0A%0AThanks!'
			}
		},
		{
			name: 'Team',
			price: '$399',
			audience: 'Up to 5 developers, < $5M revenue',

			features: [
				'5 developer seats',
				'Commercial use license',
				'All current & future shaders',
				'Priority support'
			],
			cta: {
				label: 'Buy Team License',
				href: 'mailto:paul@paulbakaus.com?subject=Radiant%20Team%20License&body=Hi%20Paul%2C%0A%0AI%27d%20like%20to%20purchase%20a%20Team%20license%20for%20Radiant.%0A%0ATeam%20size%3A%20%0ACompany%3A%20%0A%0AThanks!'
			}
		},
		{
			name: 'Enterprise',
			price: 'Contact',
			audience: '10+ devs, SaaS, > $5M revenue',

			features: [
				'Unlimited developer seats',
				'SaaS & OEM rights',
				'All current & future shaders',
				'Dedicated support'
			],
			cta: {
				label: 'Contact Sales',
				href: 'mailto:paul@paulbakaus.com?subject=Radiant%20Enterprise%20Inquiry&body=Hi%20Paul%2C%0A%0AWe%27re%20interested%20in%20an%20Enterprise%20license%20for%20Radiant.%0A%0ACompany%3A%20%0ATeam%20size%3A%20%0AUse%20case%3A%20%0A%0AThanks!'
			}
		}
	];
</script>

<style>
	.pricing {
		padding: 4rem 3rem;
		scroll-margin-top: var(--nav-height, 56px);
	}
	.pricing-header {
		text-align: center;
		margin-bottom: 3rem;
	}
	.pricing-header h2 {
		font-size: 1.5rem;
		font-weight: 300;
		letter-spacing: 0.05em;
		color: #c8956c;
	}
	.pricing-header p {
		margin-top: 0.5rem;
		font-size: 0.85rem;
		color: rgba(232, 224, 216, 0.5);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
		max-width: 1100px;
		margin: 0 auto;
	}
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1.75rem 1.5rem;
		border: 1px solid rgba(200, 149, 108, 0.12);
		border-radius: 8px;
		background: rgba(10, 10, 10, 0.5);
	}
	h3 {
		font-size: 1rem;
		font-weight: 500;
		color: #e8e0d8;
	}
	.price {
		margin-top: 0.75rem;
	}
	.amount {
		font-size: 1.75rem;
		font-weight: 300;
		color: #c8956c;
	}
	.audience {
		margin-top: 0.35rem;
		font-size: 0.75rem;
		color: rgba(232, 224, 216, 0.4);
	}
	ul {
		list-style: none;
		margin-top: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}
	li {
		font-size: 0.8rem;
		color: rgba(232, 224, 216, 0.6);
		padding-left: 1.1rem;
		position: relative;
	}
	li::before {
		content: '\2713';
		position: absolute;
		left: 0;
		color: #c8956c;
		font-size: 0.7rem;
	}
	.btn {
		display: block;
		text-align: center;
		margin-top: 1.5rem;
		padding: 0.6rem 1rem;
		font-size: 0.8rem;
		font-weight: 500;
		border-radius: 6px;
		letter-spacing: 0.02em;
		transition: background 0.2s, border-color 0.2s;
	}
	.btn-ghost {
		background: transparent;
		border: 1px solid rgba(200, 149, 108, 0.25);
		color: rgba(232, 224, 216, 0.6);
	}
	.btn-ghost:hover {
		border-color: rgba(200, 149, 108, 0.5);
		color: #e8e0d8;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.pricing {
			padding: 3rem 1.5rem;
		}
	}
</style>
