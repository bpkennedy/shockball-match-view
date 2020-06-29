<template>
  <div class="master-view" :style="dynamicCssVariables">
    <div v-if="mode === LOADING_MODE" class="overlay intro-font">
      Loading Match . . .
    </div>
    <div v-if="mode === INTRO_MODE" class="overlay intro-font">
      <div class="homeTeam">
        <div class="logo"><img :src="teams.home_team.team_logo"/></div>
        <div class="name">{{teams.home_team.name}}</div>
      </div>
      <div class="versus">versus</div>
      <div class="awayTeam">
        <div class="logo"><img :src="teams.away_team.team_logo"/></div>
        <div class="name">{{teams.away_team.name}}</div>
      </div>
    </div>
    <game/>
  </div>
</template>

<script>
import gsap from 'gsap'
import Game from '@/components/Game.vue'
import {mapState} from 'vuex'
import {LOADING_MODE, INTRO_MODE, PLAY_MODE} from '../constants'
import {SET_GAME_MODE_ACTION} from "../store";

export default {
  name: 'MasterView',
  components: {
    Game
  },
  data() {
    return {
      LOADING_MODE,
      INTRO_MODE,
      PLAY_MODE,
    }
  },
  methods: {
    finishedIntro() {
      this.$store.dispatch(SET_GAME_MODE_ACTION, PLAY_MODE)
    }
  },
  computed: {
    ...mapState(['teams', 'mode']),
    dynamicCssVariables() {
      return {
        '--square-width': '50px',
        '--square-height': '50px',
        '--home-main-color': this.teams.home_team.main_color,
        '--home-dark-color': this.teams.home_team.dark_color,
        '--home-light-color': this.teams.home_team.light_color,
        '--home-accent-color': this.teams.home_team.accent_color,
        '--away-main-color': this.teams.away_team.main_color,
        '--away-dark-color': this.teams.away_team.dark_color,
        '--away-light-color': this.teams.away_team.light_color,
        '--away-accent-color': this.teams.away_team.accent_color,
      }
    }
  },
  watch: {
    mode: function (newVal, oldVal) {
      if (newVal === INTRO_MODE) {
        setTimeout(() => {
          const introTimeline = gsap.timeline({repeat: 0, repeatDelay: 0, onComplete: this.finishedIntro})
          introTimeline.to(".homeTeam", {x: 500, duration: 3, ease: 'elastic'})
          introTimeline.to(".awayTeam", {x: -500, duration: 3, ease: 'elastic'},'-=3');
          introTimeline.to(".versus", {opacity: 1, duration: 3},'-=3');
          introTimeline.to(".overlay", {opacity: 0, duration: 1});
          introTimeline.play()
        }, 500)
      }
    }
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch(SET_GAME_MODE_ACTION, INTRO_MODE)
    }, 1000)
  }
}
</script>

<style lang="scss">
  .master-view {
    width: calc(var(--square-width) * 12);
    height: calc(var(--square-height) * 9);
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 4;
  }
  .homeTeam, .awayTeam {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-right: 8rem;
    img {
      height: 8rem;
      width: 8rem;
    }
  }
  .homeTeam {
    margin-left: -1000px;
  }
  .awayTeam {
    margin-left: auto;
    margin-right: -400px;
  }
  .logo {
    height: 8rem;
    width: 8rem;
    margin-right: 1rem;
  }
  .versus {
    opacity: 0;
  }
</style>