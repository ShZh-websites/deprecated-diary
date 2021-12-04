<script>
	export let myWebsites = [
		{
			link: 'https://shzh.me',
			title: '我的个人主页',
			summary: '包括了我个人简介，社交网站链接等。帮助其他人更好地认识我。'
		}
	];
</script>

<div class="container">
	<div class="fl">
		<h1>友情链接</h1>
		<p>暂无，你可以联系我以交换链接</p>
	</div>
	<div class="other">
		<h1>其他链接</h1>
		<ul>
			{#each myWebsites as myWebsite}
				<li>
					<div class="website-link">
						<a href={myWebsite.link}>{myWebsite.title}</a>
					</div>
					<div class="website-summary">
						{myWebsite.summary}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.container {
		max-width: 50rem;
		margin: 0 auto;
		text-align: center;
		font-family: 'Source Serif Pro', 'Noto Serif SC', serif;

		h1 {
			font-weight: 100;
			font-size: 3rem;
			font-family: 'Source Sans Pro', 'Noto Sans SC', sans-serif;
		}

		.fl p {
			margin-top: 5rem;
			margin-bottom: 8rem;
			color: #666666;
		}

		.other {
			margin-bottom: 10rem;

			ul {
				text-align: start;

				li {
					margin-left: 5rem;
					.website-link {
						display: inline;
						font-weight: 600;
						&:after {
							content: '：';
						}
					}
					.website-summary {
						display: inline;
					}
				}
			}
		}
	}

  @media (max-width: 640px) {
    ul {
      padding-left: 0;
      margin-left: 0;

      li {
        margin-left: 3rem;
        margin-right: 3rem;
      }
    }
  }
</style>
