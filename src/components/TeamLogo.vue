<template>
    <div :class="{'home-logo': isHomeTeam, 'away-logo': !isHomeTeam}">
        <img :src="logoUrl" />
    </div>
</template>
<script>
    import { HOME_SIDE } from '../constants'

    export default {
        name: 'TeamLogo',
        props: {
            logoUrl: {
                type: String,
                required: true,
            },
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
    .home-logo, .away-logo {
        flex: 1;
        display: flex;
        img {
            flex: 1;
            height: 100%;
            box-sizing: border-box;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
        }
    }
    .away-logo {
        transform: rotate(180deg);
    }
</style>
