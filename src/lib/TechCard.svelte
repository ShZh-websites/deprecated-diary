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
      <a href={website} target="_blank">{techName}</a>
    </h2>
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

    .logo-container {
      width: 200px;
      height: 200px;
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

        a {
          cursor: alias;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            bottom: 0.1em;
            left: 0;
            right: 0;
            border-bottom: 2px solid currentColor;
            transform-origin: right center;
            transform: scaleX(0);
            transition: transform ease-in-out 0.2s;
          }

          &:hover::after {
            transform-origin: left center;
            transform: scaleX(1);
          }
        }
      }

      p {
        margin-top: 0;
      }
    }
  }
</style>