<template>
  <div id="app">
    <v-app>
      <header class="header">Task Manager</header>
      <v-main class="main"> 
        <router-view/>
      </v-main>
      <footer class="footer">Footer</footer>
    </v-app>
  </div>
</template>

<style lang="sass">
  * 
    margin: 0
    padding: 0
  html, body
    height: 100%
    overflow: hidden
  .wrapper
    display: flex
    flex-direction: column
    height: 100%
  .header
    position: relative
    flex: 0 0 auto
    padding: 15px 0
    text-align: center
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.3)
  .main
    flex: 1 1 100%
    overflow: auto
  .footer
    position: relative
    flex: 0 0 auto
    padding: 15px 0
    text-align: center
    box-shadow: 0 -1px 3px 0 rgba(0,0,0,.3)
</style>
