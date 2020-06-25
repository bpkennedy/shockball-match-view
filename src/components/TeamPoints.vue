<template>
    <div :class="{'home-points': isHomeTeam, 'away-points': !isHomeTeam}" class="point-counter" >0</div>
</template>

<script>
    import { HOME_SIDE } from '../constants'

    export default {
        name: "TeamPoints",
        props: {
            side: {
                type: String,
                required: true,
            }
        },
        computed: {
            isHomeTeam() {
                return this.side === HOME_SIDE
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-points, .away-points {
        flex: 1;
    }
    .away-points {
        transform: rotate(180deg);
    }
</style>