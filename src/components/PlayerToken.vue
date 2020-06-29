<template>
    <div class="player-token square-size" :class="`p${player.number}`">
        <img :src="player.avatar" :class="{'home-player': player.side === HOME_SIDE, 'away-player': player.side === AWAY_SIDE}"/>
        <loading-progress
                :progress="aggressiveness"
                :indeterminate="false"
                :counter-clockwise="false"
                :hide-background="true"
                shape="semicircle"
                size="40"
                class="square-size aggression"
        />
        <loading-progress
                :progress="fatigue"
                :indeterminate="false"
                :counter-clockwise="true"
                :hide-background="true"
                shape="semicircle"
                size="40"
                class="square-size fatigue"
                :class="fatigueClasses"
        />
        <div class="player-number" :class="numberClasses">{{player.number}}</div>
        <div class="modifier"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {AWAY_SIDE, HOME_SIDE} from "../constants";

    export default {
        name: "PlayerToken",
        props: {
            player: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                fatigue: null,
                aggressiveness: null,
                HOME_SIDE,
                AWAY_SIDE,
            }
        },
        computed: {
            fatigueClasses() {
                return {
                    'low': this.fatigue < .33,
                    'medium': this.fatigue > .33 && this.fatigue < .66,
                    'high': this.fatigue > .66,
                }
            },
            numberClasses() {
                return {
                    'home-background': this.player.side === HOME_SIDE,
                    'away-background': this.player.side === AWAY_SIDE,
                }
            }
        },
        created() {
            Vue.set(this, 'fatigue', this.player.fatigue / 100)
            Vue.set(this, 'aggressiveness', this.player.aggressiveness / 100)
        }
    }
</script>

<style lang="scss" scoped>
    .player-token {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }
    .square-size {
        min-width: var(--square-width);
        max-width: var(--square-width);
        min-height: var(--square-height);
        max-height: var(--square-height);
    }
    .player-number {
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 50%;
        color: black;
        font-size: .25rem;
        font-family: $bold-font-family;
        text-shadow: $tiny-text-shadow;
        width: calc(var(--square-width) / 4);
        height: calc(var(--square-height) / 4);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: calc(var(--square-height) / 4);
    }
    .home-background {
        background-color: var(--home-main-color);
    }
    .away-background {
        background-color: var(--away-main-color);
    }
    .home-player {
        border: 2px solid var(--home-main-color);
    }
    .away-player {
        border: 2px solid var(--away-main-color);
    }
    img {
        width: calc(var(--square-width) - .75rem);
        height: calc(var(--square-height) - .75rem);
        border-radius: 50%;
    }
    .aggression, .fatigue {
        position: absolute;
        top: 0;
        left: 0;
        max-width: calc(var(--square-width))!important;
        max-height: calc(var(--square-height))!important;
        min-width: calc(var(--square-width))!important;
        min-height: calc(var(--square-height))!important;
    }
    .vue-progress-path /deep/ {
        svg {
            max-width: calc(var(--square-width));
            max-height: calc(var(--square-height));
            min-width: calc(var(--square-width));
            min-height: calc(var(--square-height));
            transform: scale(2) rotate(-90deg);
            path {
                stroke-width: 3;
            }
        }
        .progress {
            stroke: $aggression-color;
        }
    }
    .vue-progress-path {
        &.fatigue /deep/ {
            svg {
                transform: scale(2) rotate(90deg);
            }
        }
        &.fatigue.low /deep/ {
            .progress {
                stroke: lawngreen;
            }
        }
        &.fatigue.medium /deep/ {
            .progress {
                stroke: $fatigue-color;
            }
        }
        &.fatigue.high /deep/ {
            .progress {
                stroke: $aggression-color;
            }
        }
    }
</style>