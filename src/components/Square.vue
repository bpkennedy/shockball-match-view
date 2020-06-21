<template>
    <div class="square"
         :class="definition.class"
         :style="{ backgroundImage: `${squareTexture}${squareColor}` }"
    >
        <div v-if="realPos === TOP_LOGO_REAL_LOCATION" class="homeLogo">
            <img :src="this.configuration.homeTeam.logoUrl" />
        </div>
        <div v-if="realPos === BOTTOM_LOGO_REAL_LOCATION" class="awayLogo">
            <img :src="this.configuration.awayTeam.logoUrl" />
        </div>
        <div v-if="realPos === TOP_POINT_LOCATION" class="homePoints point-counter">
            0
        </div>
        <div v-if="realPos === BOTTOM_POINT_LOCATION" class="awayPoints point-counter">
            1
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    const TOP_LOGO_REAL_LOCATION = 'r2-7'
    const TOP_POINT_LOCATION = 'r8-7'
    const BOTTOM_LOGO_REAL_LOCATION = 'r3-1'
    const BOTTOM_POINT_LOCATION = 'r9-1'

    export default {
        name: "Square",
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
                BOTTOM_LOGO_REAL_LOCATION,
                TOP_POINT_LOCATION,
                BOTTOM_POINT_LOCATION,
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
        width: 100%;
        min-width: 50px;
        height: 100%;
        min-height: 50px;
        flex: 1;
        background-size: cover;
        background-blend-mode: multiply;
        display: flex;
        align-items: center;
        justify-items: center;
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

    .homeLogo, .awayLogo {
        flex: 1;
        img {
            height: 100%;
            box-sizing: border-box;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
        }
    }
    .awayLogo {
        transform: rotate(180deg);
    }

    .homePoints, .awayPoints {
        flex: 1;
    }
    .awayPoints {
        transform: rotate(180deg);
    }
</style>