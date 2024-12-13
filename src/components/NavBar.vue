<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<style>
/* Estilos Globais */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

/* Navbar */
.navbar {
  width: 100%;
  height: 4rem;
  background-color: #00000014;
  position: fixed; /* Navbar fixa no topo */
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff31;
}

/* Container Centralizado */
.container {
  width: 100%;
  max-width: 1200px; /* Limita a largura da navbar */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem; /* Espaçamento interno */
}

/* Links de Navegação */
.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #007bff; /* Azul no hover */
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }

  .navbar a {
    margin: 0.5rem 0;
  }
}
</style>
