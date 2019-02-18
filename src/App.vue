<template>
  <div id="app">
    <transition name="fade"
        mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background: url('~@/assets/bg.jpg')
  background-position: center
  min-height: 100vh
  overflow: hidden
  position: relative
  &:after
    content: ""
    width: 100%
    height: 100%
    position: absolute
    top: 0
    lefT: 0
    background: rgba(#000, .5)
    z-index: 0

body
  padding: 0
  margin: 0
.view
  position: relative
  z-index: 1

.fade-enter-active, .fade-leave-active
  transition-duration: 0.3s
  transition-property: opacity
  transition-timing-function: ease

.fade-enter, .fade-leave-active
  opacity: 0
</style>
