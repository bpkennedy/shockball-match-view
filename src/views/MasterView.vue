<template>
  <div class="master-view">
    <div v-if="mode === LOADING_MODE" class="overlay intro-font">
      Loading Match . . .
    </div>
    <div v-if="mode === INTRO_MODE" class="overlay intro-font">
      <div class="homeTeam">
        <div class="logo"><img :src="configuration.homeTeam.logoUrl"/></div>
        <div class="name">{{configuration.homeTeam.name}}</div>
      </div>
      <div class="versus">versus</div>
      <div class="awayTeam">
        <div class="logo"><img :src="configuration.awayTeam.logoUrl"/></div>
        <div class="name">{{configuration.awayTeam.name}}</div>
      </div>
    </div>
    <game :style="dynamicCssVariables"/>
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
    ...mapState(['configuration', 'mode']),
    dynamicCssVariables() {
      return {
        '--square-width': '50px',
        '--square-height': '50px',
        '--home-main-color': this.configuration.homeTeam.colors.main,
        '--home-dark-color': this.configuration.homeTeam.colors.dark,
        '--home-light-color': this.configuration.homeTeam.colors.light,
        '--home-accent-color': this.configuration.homeTeam.colors.accent,
        '--away-main-color': this.configuration.awayTeam.colors.main,
        '--away-dark-color': this.configuration.awayTeam.colors.dark,
        '--away-light-color': this.configuration.awayTeam.colors.light,
        '--away-accent-color': this.configuration.awayTeam.colors.accent,
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
        }, 1000)
      }
    }
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch(SET_GAME_MODE_ACTION, INTRO_MODE)
    }, 3000)
  }
}
</script>

<style lang="scss">
  .master-view {
    width: 600px;
    height: 450px;
    margin: 0 auto;
    margin-top: 25px;
    position: relative;
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
    z-index: 2;
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