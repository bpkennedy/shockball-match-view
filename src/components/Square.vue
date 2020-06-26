<template>
    <div class="square"
         :class="definition.class"
         :style="{ backgroundImage: `${squareTexture}${squareColor}` }"
    >

        <team-logo v-if="realPos === TOP_LOGO_REAL_LOCATION"
                   :logo-url="configuration.homeTeam.logoUrl"
                   :side="HOME_SIDE"/>
        <team-logo v-if="realPos === BOTTOM_LOGO_REAL_LOCATION"
                   :logo-url="configuration.awayTeam.logoUrl"
                   :side="AWAY_SIDE"/>

        <team-banner v-if="realPos === TOP_BANNER_LOCATION"
                     :team-config="this.configuration.homeTeam"
                     :side="HOME_SIDE"/>
        <team-banner v-if="realPos === BOTTOM_BANNER_LOCATION"
                     :team-config="this.configuration.awayTeam"
                     :side="AWAY_SIDE"/>

        <team-points v-if="realPos === TOP_POINT_LOCATION" :side="HOME_SIDE"/>
        <team-points v-if="realPos === BOTTOM_POINT_LOCATION" :side="AWAY_SIDE"/>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import TeamBanner from "./TeamBanner"
    import TeamLogo from "./TeamLogo"
    import TeamPoints from "./TeamPoints"
    import {
        TOP_BANNER_LOCATION,
        TOP_LOGO_REAL_LOCATION,
        TOP_POINT_LOCATION,
        BOTTOM_BANNER_LOCATION,
        BOTTOM_LOGO_REAL_LOCATION,
        BOTTOM_POINT_LOCATION,
        HOME_SIDE,
        AWAY_SIDE,
    } from '../constants'

    export default {
        name: "Square",
        components: {TeamBanner, TeamLogo, TeamPoints},
        props: {
            definition: {
                type: Object,
                required: true,
            },
            enginePos: {
                type: String,
                required: true,
            },
            realPos: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                TOP_LOGO_REAL_LOCATION,
                TOP_BANNER_LOCATION,
                TOP_POINT_LOCATION,
                BOTTOM_LOGO_REAL_LOCATION,
                BOTTOM_BANNER_LOCATION,
                BOTTOM_POINT_LOCATION,
                HOME_SIDE,
                AWAY_SIDE,
            }
        },
        computed: {
            ...mapState(['configuration']),
            squareTexture() {
                return `url(${require(`@/assets/${this.definition.texture}.png`)})`
            },
            squareColor() {
                if (this.definition.color) {
                    const imageUrlPath = require(`@/assets/${this.definition.color}.svg`)
                    return `, url(${imageUrlPath})`
                }
                return ''

            }
        }
    }
</script>

<style lang="scss" scoped>
    .square {
        min-width: var(--square-width);
        max-width: var(--square-width);
        min-height: var(--square-height);
        max-height: var(--square-height);
        flex: 1;
        background-size: cover;
        background-blend-mode: multiply;
        display: flex;
        align-items: center;
        justify-items: center;
        position: relative;
        z-index: 0;
    }

    .floor {

    }
    .bench {

    }
    .topCorridor {
    }
    .bottomCorridor {
        transform: rotate(180deg);
    }
    .topLeftFieldCorner {
        transform: rotate(-90deg);
    }
    .topRightFieldCorner {

    }
    .bottomLeftFieldCorner {
        transform: rotate(180deg);
    }
    .bottomRightFieldCorner {
        transform: rotate(90deg);
    }
    .topFieldSide {
        transform: rotate(-90deg);
    }
    .rightFieldSide {

    }
    .bottomFieldSide {
        transform: rotate(90deg);
    }
    .leftFieldSide {
        transform: rotate(180deg);
    }
    .fieldCenter {

    }

    .topCorridor.r3-7, .bottomCorridor.r4-1 {
        /*For stacking of team banners - because banner transform makes stacking order lose z-index*/
        z-index: 1;
    }
</style>