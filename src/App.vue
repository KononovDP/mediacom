<template>
  <div id="app" class="wrapper">
    <header class="header">Task Manager</header>
    <v-app>
      <v-main class="main"> 
        <router-view/>
      </v-main>
    </v-app>
    <footer class="footer">Footer</footer>
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
    position: relative
    display: flex
    flex-direction: column
    height: 100%
    padding: 50px 0
    overflow: auto
  .header,
  .footer
    position: fixed
    left: 0
    width: 100% 
    padding: 15px 0
    background-color: #fff
    text-align: center
    z-index: 100
  .header
    top: 0
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.3)
  .main
    flex: 1 1 100%
    overflow: auto
  .footer
    bottom: 0
    box-shadow: 0 -1px 3px 0 rgba(0,0,0,.3)
</style>
