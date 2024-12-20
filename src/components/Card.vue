<template>
  <div class="card">
    <div class="card-header">
      <div class="card-icon">
        <i class="fa fa-address-book" aria-hidden="true"></i>
      </div>
    </div>
    <b>TESTE ADASDASDSD ADASDASDSD ASDASDASDASDASD ADASDAAS</b>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
      voluptate dolorem quidem tempore, quis maxime recusandae dolorum corrupti
      tempora debitis doloribus asperiores perspiciatis quia aliquam explicabo
      et ea culpa assumenda!
    </p>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style>
.card {
  background-color: #00000014;
  width: 28%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 50%; */
  /* background-color: blue; */
  width: 100%;
  margin-bottom: 1rem;
  aspect-ratio: 2;
  background: rgb(224, 250, 255);
  background: linear-gradient(
    0deg,
    rgba(224, 250, 255, 1) 0%,
    rgba(224, 250, 255, 1) 35%,
    rgba(178, 242, 255, 1) 100%
  );
}
.card:hover {
  outline: 4px solid #b0e1eb;
}
.card-icon {
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-icon i {
  font-size: 7vw;
}
</style>
