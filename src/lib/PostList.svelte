<script>
	export let year;
	export let items;
</script>

<div>
	<h1 class="year">{year}</h1>
	<ul>
		{#each items as item}
			<li>
				<div class="date">{item.date}</div>
				<a href={item.link}>
					<div class="content">{item.title}</div>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.year {
		font-size: 2em;
		font-weight: 300;
		font-family: var(--font-en);
	}

	div {
		max-width: 43rem;
		margin: 0 auto;
	}
	ul {
		margin-left: 1rem;
		line-height: 2;

		.date {
			font-weight: 430;
			font-family: var(--font-en);
			display: inline-block;
			width: 4rem;
		}
		.content {
			font-family: var(--font-serif);
			display: inline-block;
		}
	}
</style>
