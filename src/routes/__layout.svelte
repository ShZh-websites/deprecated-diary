<script>
    import Nav from "$lib/Nav.svelte";
    import Copyright from "$lib/Copyright.svelte";
</script>

<header>
    <Nav/>
</header>
<main>
    <slot></slot>
</main>
<footer>
    <Copyright/>
</footer>
