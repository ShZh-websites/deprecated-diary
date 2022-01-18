<script>
  export let imageUrl;
  export let website;
  export let techName;
  export let description;
</script>

<figure>
  <div class="logo-container">
    <img src={imageUrl} alt={techName} />
  </div>
  <figcaption>
    <h2>
      <a href={website} target="_blank" class="underline">{techName}</a>
    </h2>
    <p>{description}</p>
  </figcaption>
</figure>

<style lang="scss">
  $normal_length: 200px;

  figure {
    text-align: center;
    width: $normal_length;
    margin: 0 20px;
    padding-bottom: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow-in-panel);

    .logo-container {
      width: $normal_length;
      height: $normal_length;
      overflow: hidden;
      border-bottom: 2px solid rgb(229, 231, 235);

      img {
        width: 100%;
        height: 100%;
        transition: transform 0.7s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
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

  @media (max-width: 700px) {
    $grown_length: 230px;

    figure {
      width: $grown_length;

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    }

    .logo-container {
      width: $grown_length !important;
      height: $grown_length !important;
    }
  }
</style>
