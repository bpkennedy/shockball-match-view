<template>
    <div class="square"
         :class="definition.class"
         :style="{ backgroundImage: `${squareTexture}${squareColor}` }"
    >

        <team-logo v-if="realPos === TOP_LOGO_REAL_LOCATION"
                   :logo-url="teams.home_team.team_logo"
                   :side="HOME_SIDE"/>
        <team-logo v-if="realPos === BOTTOM_LOGO_REAL_LOCATION"
                   :logo-url="teams.away_team.team_logo"
                   :side="AWAY_SIDE"/>

        <team-banner v-if="realPos === TOP_BANNER_LOCATION"
                     :team-config="teams.home_team"
                     :side="HOME_SIDE"/>
        <team-banner v-if="realPos === BOTTOM_BANNER_LOCATION"
                     :team-config="teams.away_team"
                     :side="AWAY_SIDE"/>

        <team-points v-if="realPos === TOP_POINT_LOCATION" :side="HOME_SIDE"/>
        <team-points v-if="realPos === BOTTOM_POINT_LOCATION" :side="AWAY_SIDE"/>

        <div v-if="realPos === SECTOR_BOTTOM_LEFT_LEFT" class="divider divider-right"></div>
        <div v-if="realPos === SECTOR_BOTTOM_LEFT_RIGHT" class="divider divider-left"></div>
        <div v-if="realPos === SECTOR_BOTTOM_RIGHT_LEFT" class="divider divider-right"></div>
        <div v-if="realPos === SECTOR_BOTTOM_RIGHT_RIGHT" class="divider divider-left"></div>
        <div v-if="realPos === SECTOR_TOP_LEFT_LEFT" class="divider divider-right"></div>
        <div v-if="realPos === SECTOR_TOP_LEFT_RIGHT" class="divider divider-left"></div>
        <div v-if="realPos === SECTOR_TOP_RIGHT_LEFT" class="divider divider-right"></div>
        <div v-if="realPos === SECTOR_TOP_RIGHT_RIGHT" class="divider divider-left"></div>
        <div v-if="realPos === SECTOR_T_LEFT_LEFT" class="divider divider-right"></div>
        <div v-if="realPos === SECTOR_T_LEFT_RIGHT" class="divider divider-t-left"></div>
        <div v-if="realPos === SECTOR_T_RIGHT_LEFT" class="divider divider-t-right"></div>
        <div v-if="realPos === SECTOR_T_RIGHT_RIGHT" class="divider divider-left"></div>
        <div v-if="realPos === SECTOR_CENTER_LEFT" class="divider divider-center"></div>
        <div v-if="realPos === SECTOR_CENTER_RIGHT" class="divider divider-center"></div>
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
        SECTOR_BOTTOM_LEFT_LEFT,
        SECTOR_BOTTOM_LEFT_RIGHT,
        SECTOR_BOTTOM_RIGHT_LEFT,
        SECTOR_BOTTOM_RIGHT_RIGHT,
        SECTOR_TOP_LEFT_LEFT,
        SECTOR_TOP_LEFT_RIGHT,
        SECTOR_TOP_RIGHT_LEFT,
        SECTOR_TOP_RIGHT_RIGHT,
        SECTOR_T_LEFT_LEFT,
        SECTOR_T_LEFT_RIGHT,
        SECTOR_T_RIGHT_LEFT,
        SECTOR_T_RIGHT_RIGHT,
        SECTOR_CENTER_LEFT,
        SECTOR_CENTER_RIGHT,
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
                SECTOR_BOTTOM_LEFT_LEFT,
                SECTOR_BOTTOM_LEFT_RIGHT,
                SECTOR_BOTTOM_RIGHT_LEFT,
                SECTOR_BOTTOM_RIGHT_RIGHT,
                SECTOR_TOP_LEFT_LEFT,
                SECTOR_TOP_LEFT_RIGHT,
                SECTOR_TOP_RIGHT_LEFT,
                SECTOR_TOP_RIGHT_RIGHT,
                SECTOR_T_LEFT_LEFT,
                SECTOR_T_LEFT_RIGHT,
                SECTOR_T_RIGHT_LEFT,
                SECTOR_T_RIGHT_RIGHT,
                SECTOR_CENTER_LEFT,
                SECTOR_CENTER_RIGHT,
            }
        },
        computed: {
            ...mapState(['teams']),
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
    .divider {
        background-size: cover;
        background-blend-mode: multiply;
        min-width: var(--square-width);
        max-width: var(--square-width);
        min-height: var(--square-height);
        max-height: var(--square-height);
        z-index: 1;
    }
    .divider-right {
        background-image: url('~@/assets/field_center_divider_texture.png'), url('~@/assets/field_center_divider_colors.svg');
        transform: rotate(90deg);
    }
    .divider-left {
        background-image: url('~@/assets/field_center_divider_texture.png'), url('~@/assets/field_center_divider_colors.svg');
        transform: rotate(-90deg);
    }
    .divider-t-left {
        background-image: url('~@/assets/field_center_divider_T_texture.png'), url('~@/assets/field_center_divider_T_colors.svg');
        transform: rotate(-90deg);
    }
    .divider-t-right {
        background-image: url('~@/assets/field_center_divider_T_texture.png'), url('~@/assets/field_center_divider_T_colors.svg');
        transform: rotate(90deg);
    }
    .divider-center {
        background-image: url('~@/assets/field_center_divider_center_texture.png'), url('~@/assets/field_center_divider_center_colors.svg');
        transform: rotate(90deg);
    }

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