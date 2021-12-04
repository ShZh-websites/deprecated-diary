<script>
	export let message;
</script>

<div class="container">
	<h1>{message.message}</h1>
	<p class="reply">{message.reply}</p>
	<p class="date">{message.date}</p>
</div>

<style lang="scss">
	.container {
		margin: 0 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

		border: black 1px solid;
		border-radius: 1.25rem;

		h1 {
			font-weight: 100;
			font-size: 2rem;
			font-family: 'Source Sans Pro', 'Noto Sans SC', sans-serif;
		}

		p {
			font-family: 'Source Serif Pro', 'Noto Serif SC', serif;
			&.reply {
				margin: 0 auto;
			}

			&.date {
				color: #999999;
				margin-left: 3rem;
				align-self: flex-start;
			}
		}
	}
</style>
