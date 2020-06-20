<template>
    <div class="square"
         :class="definition.class"
         :style="{ backgroundImage: `${squareTexture}, ${squareColor}` }"
    >
    </div>
</template>

<script>
    export default {
        name: "Square",
        props: {
            definition: {
                type: Object,
                required: true,
            }
        },
        computed: {
            squareTexture() {
                return `url(${require(`@/assets/${this.definition.texture}.png`)})`
            },
            squareColor() {
                if (this.definition.color) {
                    return `url(${require(`@/assets/${this.definition.color}.svg`)})`
                }
                return ''

            }
        }
    }
</script>

<style lang="scss" scoped>
    .square {
        width: 100%;
        height: 100%;
        flex: 1;
        background-size: cover;
        background-blend-mode: multiply;
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
</style>