<template>
  <div class="master-view">
    <game />
  </div>
</template>

<script>
import Game from '@/components/Game.vue'

export default {
  name: 'MasterView',
  components: {
    Game
  }
}
</script>

<style lang="scss">
  .master-view {
    width: 600px;
    height: 450px;
    margin: 0 auto;
    margin-top: 25px;
  }
</style>