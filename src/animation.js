import gsap from 'gsap'
import { store } from './store'

function playerClass(player) {
    return `p${player.number}`
}

export async function goToBoardPosition(player, enginePosX, enginePosY, duration) {
    const realPosX = enginePosX + 1
    const realPosY = enginePosY + 2
    await goToRealPosition(player, realPosX, realPosY, duration)
}

export async function goToRealPosition(player, realPosX, realPosY, duration = .5) {
    const gsapX = realPosX * 50
    const gsapY = realPosY * 50 * -1
    await gsap.to(`.${playerClass(player)}`, {x: gsapX, y: gsapY, duration, ease: 'Power1.easeInOut'})
}

export async function enterToHomeCorridor(player) {
    await goToRealPosition(player, 0, 1)
    await goToRealPosition(player, 0, 2)
    await goToRealPosition(player, 0, 3)
    await goToRealPosition(player, 0, 4)
    await goToRealPosition(player, 0, 5)
    await goToRealPosition(player, 0, 6)
    await goToRealPosition(player, 0, 7)

    await goToRealPosition(player, 1, 7)
    await goToRealPosition(player, 2, 7)
    await goToRealPosition(player, 3, 7)
    await goToRealPosition(player, 4, 7)
    await goToRealPosition(player, 5, 7)
    const initialPosition = store.state.matchData[0].Positions.find(p => p.num === player.number)
    if (initialPosition) {
        await goToBoardPosition(player, initialPosition.x, initialPosition.y, 1)
    }
}

export async function enterToAwayCorridor(player) {
    await goToRealPosition(player, 1, 1)
    await goToRealPosition(player, 2, 1)

    await goToRealPosition(player, 2, 1)
    await goToRealPosition(player, 3, 1)
    await goToRealPosition(player, 4, 1)
    await goToRealPosition(player, 5, 1)
    await goToRealPosition(player, 6, 1)
    const initialPosition = store.state.matchData[0].Positions.find(p => p.num === player.number)
    if (initialPosition) {
        await goToBoardPosition(player, initialPosition.x, initialPosition.y, 1)
    }
}