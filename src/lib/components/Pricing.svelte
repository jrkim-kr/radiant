<section id="support" class="support">
	<div class="support-content">
		<div class="support-text">
			<h2>Open Source</h2>
			<p>
				Radiant is free and open source under the MIT license.
				Use these shaders however you like — personal projects, commercial products, client work.
			</p>
			<p class="secondary">
				If they bring you joy or save you time, consider leaving a tip.
			</p>
		</div>
		<div class="support-actions">
			<a href="https://github.com/pbakaus/radiant" class="btn btn-solid" target="_blank" rel="noopener noreferrer">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
				</svg>
				View on GitHub
			</a>
			<a href="https://buy.stripe.com/aFa3cwfsEe3G25R6i48Ra03" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">
				Leave a tip &rarr;
			</a>
		</div>
	</div>
</section>

<style>
	.support {
		padding: 4rem 3rem;
		scroll-margin-top: var(--nav-height, 56px);
		border-top: 1px solid rgba(200, 149, 108, 0.1);
	}
	.support-content {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
	}
	.support-text h2 {
		font-size: 1.5rem;
		font-weight: 300;
		letter-spacing: 0.05em;
		color: #c8956c;
	}
	.support-text p {
		margin-top: 0.75rem;
		font-size: 0.9rem;
		color: rgba(232, 224, 216, 0.6);
		line-height: 1.6;
		max-width: 420px;
	}
	.support-text .secondary {
		color: rgba(232, 224, 216, 0.4);
		font-size: 0.85rem;
	}
	.support-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		flex-shrink: 0;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.7rem 1.5rem;
		font-size: 0.85rem;
		font-weight: 500;
		border-radius: 6px;
		letter-spacing: 0.02em;
		transition: background 0.2s, border-color 0.2s;
		cursor: pointer;
		text-decoration: none;
		white-space: nowrap;
	}
	.btn-solid {
		background: #c8956c;
		color: #0a0a0a;
		border: 1px solid #c8956c;
	}
	.btn-solid:hover {
		background: #d4a57c;
		border-color: #d4a57c;
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

	@media (max-width: 640px) {
		.support {
			padding: 3rem 1.5rem;
		}
		.support-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 2rem;
		}
		.support-actions {
			width: 100%;
		}
		.btn {
			width: 100%;
		}
	}
</style>
