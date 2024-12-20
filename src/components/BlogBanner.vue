<template>
  <div class="blog-banner">
    <div class="blog-content">
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti
        nam ratione sequi voluptate ex aut, debitis delectus, possimus eius
        beatae repellat quas architecto reprehenderit corporis eaque. Quibusdam,
        dolores perferendis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et asperiores
        amet laudantium dicta provident, possimus sunt expedita sed totam non
        eos nobis vel nihil quia sapiente! Perferendis libero beatae dolorum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        voluptas quia blanditiis numquam quis nihil temporibus iste voluptate,
        saepe, aut ratione eius ullam esse voluptatum, excepturi sapiente cumque
        necessitatibus tenetur?
      </p>
    </div>
  </div>
</template>
<style>
.blog-banner {
  position: absolute;
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
  z-index: 1;
  display: flex;
  justify-content: center;
}
.blog-content {
  margin-top: 4rem;
  padding: 5rem;
  /* background-color: red; */
  max-width: 1280px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
