<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper teal">
        <a class="brand-logo" style="margin-left: 25px">
          <span id='strong'>Image</span>
          <span id="lite">detection</span>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down" style="margin-right: 20px">
          <li><router-link to="/label"><span id="menu">Label</span></router-link></li>
          <li><router-link to="/landmark"><span id="menu">Landmark</span></router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #strong {
    font-weight: 800
  }
  #lite {
    font-weight: 350
  }
  #menu {
    font-weight: 600
  }
</style>
