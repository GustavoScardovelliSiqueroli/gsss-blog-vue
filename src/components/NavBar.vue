<template>
  <header>
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-item">
          <router-link to="/">Inicio</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about">Postagens</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/services">Tópicos</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/contact">Sobre</router-link>
        </div>
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
  background-color: #b0e1eb;
  position: fixed; /* Navbar fixa no topo */
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
}

/* Container Centralizado */
.nav-container {
  width: 100%;
  max-width: 1200px; /* Limita a largura da navbar */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem; /* Espaçamento interno */
  height: 100%;
}

/* Links de Navegação */

.nav-item a {
  text-decoration: none;
  font-weight: bold;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
  color: #333 !important;
}

.nav-item {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  color: #333 !important;
}

.nav-item:hover {
  background-color: #c338c4;
  color: white !important;
}
.nav-item:hover a {
  color: white !important;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
}
</style>
