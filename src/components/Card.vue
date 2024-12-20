<template>
  <div class="card">
    <div class="card-header">
      <div class="card-icon">
        <i class="fa fa-address-book" aria-hidden="true"></i>
      </div>
    </div>
    <b>{{ title }}</b>
    <p>{{ preview }}</p>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: "",
    },
    previewMsg: {
      type: String,
      default: "",
    },
  },
  computed: {
    preview() {
      if (this.previewMsg.length > 100) {
        return this.previewMsg.substring(0, 100) + "...";
      }
      return this.previewMsg;
    },
  },
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
