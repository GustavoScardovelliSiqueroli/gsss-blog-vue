<template>
  <div class="blog-banner"></div>
</template>
<style>
.blog-banner {
  position: fixed; /* Para começar no topo e ser independente do conteúdo */
  top: 0;
  left: 0;
  width: 100vw;
  height: 20rem;
  background: rgb(224, 250, 255);
  background: linear-gradient(
    0deg,
    rgba(224, 250, 255, 1) 0%,
    rgba(224, 250, 255, 1) 35%,
    rgba(178, 242, 255, 1) 100%
  );
  z-index: 1; /* Garantir que a navbar fique acima, se necessário */
}
</style>
