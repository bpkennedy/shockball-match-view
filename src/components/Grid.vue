<template>
    <div class="grid">
        <div v-for="(y, yIndex) of 9" class="row">
            <square v-for="(x, xIndex) of 12"
                    :key="`y${yIndex}x${xIndex}`"
                    :definition="squareDefinition(xIndex, yIndex)"
                    :class="gridClasses(xIndex, yIndex)"/>
        </div>
    </div>
</template>

<script>
    import Square from "./Square";
    export default {
        name: "Grid",
        components: {Square},
        data() {
            return {
                squareDefinitions: {
                    0: {
                        class: 'floor',
                        texture: 'floor_basic',
                    },
                    1: {
                        class: 'bench',
                        texture: 'bench_texture',
                        color: 'bench_colors',
                    },
                    2: {
                        class: 'topCorridor',
                        texture: 'bench_corridor_texture',
                        color: 'bench_corridor_colors',
                    },
                    3: {
                        class: 'bottomCorridor',
                        texture: 'bench_corridor_texture',
                        color: 'bench_corridor_colors',
                    },
                    4: {
                        class: 'topLeftFieldCorner',
                        texture: 'field_angle_texture',
                        color: 'field_angle_colors',
                    },
                    5: {
                        class: 'topRightFieldCorner',
                        texture: 'field_angle_texture',
                        color: 'field_angle_colors',
                    },
                    6: {
                        class: 'bottomLeftFieldCorner',
                        texture: 'field_angle_texture',
                        color: 'field_angle_colors',
                    },
                    7: {
                        class: 'bottomRightFieldCorner',
                        texture: 'field_angle_texture',
                        color: 'field_angle_colors',
                    },
                    8: {
                        class: 'topFieldSide',
                        texture: 'field_border_texture',
                        color: 'field_border_colors',
                    },
                    9: {
                        class: 'leftFieldSide',
                        texture: 'field_border_texture',
                        color: 'field_border_colors',
                    },
                    10: {
                        class: 'rightFieldSide',
                        texture: 'field_border_texture',
                        color: 'field_border_colors',
                    },
                    11: {
                        class: 'bottomFieldSide',
                        texture: 'field_border_texture',
                        color: 'field_border_colors',
                    },
                    12: {
                        class: 'fieldCenter',
                        texture: 'field_center_texture',
                        color: 'field_center_colors',
                    },
                },
                gridSquares: [
                    [0,0,1,1,1,1,1,1,1,0,0,0],
                    [0,0,2,2,2,2,2,2,2,0,0,0],
                    [0,4,8,8,8,8,8,8,8,8,5,0],
                    [0,9,12,12,12,12,12,12,12,12,10,0],
                    [0,9,12,12,12,12,12,12,12,12,10,0],
                    [0,9,12,12,12,12,12,12,12,12,10,0],
                    [0,6,11,11,11,11,11,11,11,11,7,0],
                    [0,0,0,3,3,3,3,3,3,3,0,0],
                    [0,0,0,1,1,1,1,1,1,1,0,0]
                ],
            }
        },
        methods: {
            gridClasses(xIndex, yIndex) {
                const enginePosition = `e${xIndex - 1},${Math.abs(yIndex - 9) - 3}`
                const realPosition = `r${xIndex},${Math.abs(yIndex - 8)}`
                return `${enginePosition} ${realPosition}`
            },
            squareDefinition(xIndex, yIndex) {
                const reversedArray = this.gridSquares.slice().reverse()
                return this.squareDefinitions[reversedArray[Math.abs(yIndex - 8)][xIndex]]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        flex-direction: column;
    }
    .row {
        width: 100%;
        flex: 1;
        display: flex;
        align-items: initial;
        justify-items: initial;
    }
</style>