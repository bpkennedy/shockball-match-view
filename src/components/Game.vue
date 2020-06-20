<template>
  <div class="game" :style="{
    backgroundImage: `url('${this.configuration.homeTeam.fieldImageUrl}')`,
    backgroundSize: 'cover'
  }">
    <div class="floor">
      <grid/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Grid from "./Grid";

  export default {
    name: 'Game',
    components: {Grid},
    computed: {
      ...mapState(['configuration']),
    },
  }
</script>

<style lang="scss" scoped>
  .game {
    width: 100%;
    height: 100%;
  }

  .floor {
    width: 100%;
    height: 100%;
  }
</style>
