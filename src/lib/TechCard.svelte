<script>
  export let imageUrl;
  export let techName;
  export let description;
</script>

<figure>
  <img src={imageUrl} alt={techName} />
  <hr />
  <figcaption>
    <h2>{techName}</h2>
    <p>{description}</p>
  </figcaption>
</figure>

<style lang="scss">
  figure {
    text-align: center;
    width: 200px;
    margin: 0 20px;
    padding-bottom: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    img {
      width: 200px;
      height: 175px;
    }

    hr {
      height: 0;
      border-top-width: 1px;
      border-style: solid;
      border-color: rgb(229, 231, 235);
    }

    figcaption {
      padding: 0 1rem;

      h2 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin-top: 0;
      }
    }
  }
</style>