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
  import gsap from 'gsap'
  import {mapState} from 'vuex'
  import {HOME_SIDE, AWAY_SIDE, PLAY_MODE} from '../constants'
  import Grid from "./Grid"
  import PlayerToken from './PlayerToken'
  import { PLAYERS_GETTER } from "../store"

  export default {
    name: 'Game',
    components: {Grid,PlayerToken},
    methods: {
      playerClass(player) {
        return `p${player.number}`
      },
      async goToBoardPosition(player, enginePosX, enginePosY, duration) {
        const realPosX = enginePosX + 1
        const realPosY = enginePosY + 2
        await this.goToRealPosition(player, realPosX, realPosY, duration)
      },
      async goToRealPosition(player, realPosX, realPosY, duration = 1) {
        const gsapX = realPosX * 50
        const gsapY = realPosY * 50 * -1
        await gsap.to(`.${this.playerClass(player)}`, {x: gsapX, y: gsapY, duration})
      },
      async enterToHomeCorridor(player) {
        await this.goToRealPosition(player, 1, 7)
        await this.goToRealPosition(player, 5, 7)
        const initialPosition = this.matchData[0].Positions.find(p => p.num === player.number)
        if (initialPosition) {
          await this.goToBoardPosition(player, initialPosition.x, initialPosition.y)
        }
      },
      async enterToAwayCorridor(player) {
        await this.goToRealPosition(player, 2, 1)
        await this.goToRealPosition(player, 6, 1)
        const initialPosition = this.matchData[0].Positions.find(p => p.num === player.number)
        if (initialPosition) {
          await this.goToBoardPosition(player, initialPosition.x, initialPosition.y)
        }
      },
      async enterPlayers() {
        for (const player of this.homePlayers) {
          await this.enterToHomeCorridor(player)
        }
        for (const player of this.awayPlayers) {
          await this.enterToAwayCorridor(player)
        }
      }
    },
    computed: {
      ...mapState(['teams', 'players', 'matchData', 'mode']),
      homePlayers() {
        const test = this.$store.getters[PLAYERS_GETTER](HOME_SIDE)
        console.log(test)
        return test
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
