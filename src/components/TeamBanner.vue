<template>
    <div :class="{'top-banner': isHomeTeam, 'bottom-banner': !isHomeTeam}">
        <img v-if="isValidBanner" :src="teamConfig.benchBannerUrl" @error="errorLoadingBanner"/>
        <div v-if="!isValidBanner" class="team-font name-fallback">{{teamConfig.name}}</div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { HOME_SIDE } from '../constants'

    export default {
        name: 'TeamBanner',
        props: {
            teamConfig: {
                type: Object,
                required: true,
            },
            side: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                isValidBanner: true,
            }
        },
        methods: {
            errorLoadingBanner() {
                Vue.set(this, 'isValidBanner', false)
            }
        },
        computed: {
            isHomeTeam() {
                return this.side === HOME_SIDE
            }
        }
    }
</script>

<style lang="scss">
    .top-banner, .bottom-banner {
        width: 50px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        img {
            max-width: calc(100% * 5);
            max-height: 50px;
        }
    }
    .top-banner {
        min-width: calc(100% * 5);
    }
    .bottom-banner {
        transform: rotate(180deg);
    }

    .name-fallback {
        flex: 1;
    }
</style>
