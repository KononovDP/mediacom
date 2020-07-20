<template>
  <div id="app" class="wrapper">
    <header class="header">Task Manager</header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">Footer</footer>
  </div>
</template>

<style lang="sass">
  * 
    margin: 0
    padding: 0
  html, body
    height: 100%
  .wrapper
    display: flex
    flex-direction: column
    height: 100%
  .header
    flex: 0 0 auto
    padding: 15px 0
    text-align: center
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.3)
  .main
    flex: 1 1 100%
    overflow: auto
  .footer
    flex: 0 0 auto
    padding: 15px 0
    text-align: center
    box-shadow: 0 -3px 5px 0 rgba(0,0,0,.3)
</style>
