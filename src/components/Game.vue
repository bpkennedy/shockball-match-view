<template>
  <div class="game" :style="{
    backgroundImage: `url('${this.configuration.homeTeam.fieldImageUrl}')`,
    backgroundSize: 'cover'
  }">
    <div class="floor">
      <grid/>
      <div class="players">
        <player-token v-for="player of homeTeamDetails.players"
                      :key="player.id"
                      :player="player"
                      :side="HOME_SIDE"
        />
        <player-token v-for="player of awayTeamDetails.players"
                      :key="player.id"
                      :player="player"
                      :side="AWAY_SIDE"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { HOME_SIDE, AWAY_SIDE } from '../constants'
  import Grid from "./Grid";
  import PlayerToken from './PlayerToken'

  export default {
    name: 'Game',
    components: {Grid,PlayerToken},
    data() {
      return {
        HOME_SIDE,
        AWAY_SIDE
      }
    },
    computed: {
      ...mapState(['configuration', 'homeTeamDetails', 'awayTeamDetails']),
    },
  }
</script>

<style lang="scss" scoped>
  .game {
    width: 100%;
    height: 100%;
  }

  .floor {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .players {
    position: absolute;
    bottom: 0;
    right: 0;
    min-width: var(--square-width);
    max-width: var(--square-width);
    min-height: var(--square-height);
    max-height: var(--square-height);
  }
</style>
