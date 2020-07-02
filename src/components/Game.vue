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
      async goToRealPosition(player, realPosX, realPosY, duration = .5) {
        const gsapX = realPosX * 50
        const gsapY = realPosY * 50 * -1
        await gsap.to(`.${this.playerClass(player)}`, {x: gsapX, y: gsapY, duration, ease: 'Power1.easeInOut'})
      },
      async enterToHomeCorridor(player) {
        await this.goToRealPosition(player, 0, 1)
        await this.goToRealPosition(player, 0, 2)
        await this.goToRealPosition(player, 0, 3)
        await this.goToRealPosition(player, 0, 4)
        await this.goToRealPosition(player, 0, 5)
        await this.goToRealPosition(player, 0, 6)
        await this.goToRealPosition(player, 0, 7)

        await this.goToRealPosition(player, 1, 7)
        await this.goToRealPosition(player, 2, 7)
        await this.goToRealPosition(player, 3, 7)
        await this.goToRealPosition(player, 4, 7)
        await this.goToRealPosition(player, 5, 7)
        const initialPosition = this.matchData[0].Positions.find(p => p.num === player.number)
        if (initialPosition) {
          await this.goToBoardPosition(player, initialPosition.x, initialPosition.y, 1)
        }
      },
      async enterToAwayCorridor(player) {
        await this.goToRealPosition(player, 1, 1)
        await this.goToRealPosition(player, 2, 1)

        await this.goToRealPosition(player, 2, 1)
        await this.goToRealPosition(player, 3, 1)
        await this.goToRealPosition(player, 4, 1)
        await this.goToRealPosition(player, 5, 1)
        await this.goToRealPosition(player, 6, 1)
        const initialPosition = this.matchData[0].Positions.find(p => p.num === player.number)
        if (initialPosition) {
          await this.goToBoardPosition(player, initialPosition.x, initialPosition.y, 1)
        }
      },
      async enterPlayers() {
        for (const [index, player] of this.homePlayers.entries()) {
          ((idx) => {
            setTimeout(() => this.enterToHomeCorridor(player), idx * 800)
          })(index)
        }
        for (const [index, player] of this.awayPlayers.entries()) {
          ((idx) => {
            setTimeout(() => this.enterToAwayCorridor(player), idx * 800)
          })(index)
        }
      }
    },
    computed: {
      ...mapState(['teams', 'players', 'matchData', 'mode']),
      homePlayers() {
        const test = this.$store.getters[PLAYERS_GETTER](HOME_SIDE)
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
