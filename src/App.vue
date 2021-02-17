<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <hr>
      <a href="http://dist.test">Ir al dominio principal</a> | 
      <a href="http://dibal.dist.test">Ir al subdominio</a>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis quas architecto nemo ad aperiam fugit necessitatibus odit iusto, vero qui cupiditate iure sint, quidem commodi porro nam, assumenda adipisci?</p>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
