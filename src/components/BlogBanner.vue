<template>
  <div class="blog-banner">
    <div class="blog-content">
      <h1>GSSS</h1>
      <!-- <p>Mensagem do dia: fodase.</p> -->
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Eater&family=Kalnia+Glaze:wght@100..700&family=Libre+Barcode+128&display=swap");
.blog-banner h1 {
  font-family: "Kalnia Glaze", sans-serif;
  /* font-family: "Eater", cursive; */
  font-size: 10rem;
  color: white;
  text-shadow: 10px 10px 4px #000;
  z-index: 2;
}
.blog-banner p {
  font-family: "Libre Barcode 128", cursive;
  font-size: 3rem;
  color: white;
  z-index: 2;
}

/* Estilo do banner */
.blog-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    /* Fundo gradiente */
      linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.6) 25%,
        transparent 25%,
        transparent 75%,
        rgba(0, 0, 0, 0.6) 75%
      ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.6) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.6) 75%
    );
  background-size: 80px 80px; /* Quadrados maiores para suavizar o visual */
  background-position: 0 0, 40px 40px;
  color: #b0e1eb;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8); /* Adiciona uma borda escura */
}

/* Estilo do conteúdo */
.blog-content {
  margin-top: 4rem;
  padding: 5rem;
  max-width: 1280px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
