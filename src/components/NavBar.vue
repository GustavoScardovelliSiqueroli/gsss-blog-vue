<template>
  <header>
    <nav class="navbar">
      <div class="nav-left"></div>
      <div class="nav-container">
        <router-link to="/">
          <div class="nav-item">Inicio</div>
        </router-link>
        <router-link to="/about">
          <div class="nav-item">Postagens</div>
        </router-link>
        <router-link to="/services">
          <div class="nav-item">Tópicos</div>
        </router-link>
        <router-link to="/contact">
          <div class="nav-item">Sobre</div>
        </router-link>
      </div>
      <div class="nav-right">
        <router-link to="/login">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        </router-link>
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
.nav-left,
.nav-right {
  width: 20vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-right i {
  font-size: 2rem;
  margin-right: 4rem;
  cursor: pointer;
  border-radius: 100%;
  transition: 0.3s ease;
  color: #333;
}
.nav-right i:hover {
  color: #c338c4;
  /* outline: 4px solid #c338c4; */
  transform: scale(1.4);
  background-color: white;
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

.nav-container a {
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  color: #333 !important;
  width: 100%;
  height: 100%;
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
