<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <h1>Login</h1>
      </div>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Senha" />
      <button>Entrar</button>
      <button>Registrar</button>
    </div>
  </div>
</template>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: red; */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
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
  background-size: 80px 80px;
  background-position: 0 0, 40px 40px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
}
.login-box {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  min-width: 500px;
  width: 50vw;
  z-index: 2;
  background-color: white;
}
.login-header {
  display: flex;
  justify-content: center;
}
</style>
