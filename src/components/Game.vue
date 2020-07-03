<template>
  <div class="game" :style="{
    backgroundImage: `url('${teams.home_team.field_background}')`,
    backgroundSize: 'cover'
  }">
    <div id="testy" class="floor">
      <grid/>
      <div class="home-players">
        <player-token v-for="player of homePlayers"
                      :key="player.id"
                      :player="player"
        />
      </div>
      <div class="away-players">
        <player-token v-for="player of awayPlayers"
                      :key="player.id"
                      :player="player"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { enterToAwayCorridor, enterToHomeCorridor } from "../animation";
  import {HOME_SIDE, AWAY_SIDE, PLAY_MODE} from '../constants'
  import Grid from "./Grid"
  import PlayerToken from './PlayerToken'
  import { PLAYERS_GETTER } from "../store"

  export default {
    name: 'Game',
    components: {Grid,PlayerToken},
    methods: {
      staggerEnter(sidePlayers, callback) {
        for (const [index, player] of sidePlayers.entries()) {
          ((idx) => {
            setTimeout(() => callback(player), idx * 800)
          })(index)
        }
      },
      async enterPlayers() {
        this.staggerEnter(this.homePlayers, enterToHomeCorridor)
        this.staggerEnter(this.awayPlayers, enterToAwayCorridor)
      },
    },
    computed: {
      ...mapState(['teams', 'players', 'matchData', 'mode']),
      homePlayers() {
        return this.$store.getters[PLAYERS_GETTER](HOME_SIDE)
      },
      awayPlayers() {
        return this.$store.getters[PLAYERS_GETTER](AWAY_SIDE)
      }
    },
    watch: {
      mode: function(newMode, oldMode) {
        if (newMode === PLAY_MODE) {
          this.enterPlayers()
        }
      }
    }
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

  .home-players, .away-players {
    position: absolute;
    bottom: 0;
    left: 0;
    min-width: var(--square-width);
    max-width: var(--square-width);
    min-height: var(--square-height);
    max-height: var(--square-height);
  }
</style>
