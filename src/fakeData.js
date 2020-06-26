export const configuration = {
    homeTeam: {
        name: 'Tusken Raiders',
        stadiumName: 'Mos Espa Stadium',
        colors: {
            main: '#777777',
            dark: '#444444',
            light: '#222222',
            accent: '#111111',
        },
        logoUrl: 'https://i.pinimg.com/originals/e1/68/be/e168be01dd5117a08500c8deb30261e2.png',
        benchBannerUrl: 'https://www.badWebsite.com/someBadImage.png',
        fieldImageUrl: 'https://wallup.net/wp-content/uploads/2016/01/91038-nebula-space-748x468.jpg',
    },
    awayTeam: {
        name: 'Republic Rebels',
        colors: {
            main: '#F26626',
            dark: '#646476',
            light: '#292929',
            accent: '#000000',
        },
        benchBannerUrl: 'https://www.alliancesoccerclub.com/wp-content/uploads/sites/746/2019/12/Travel-combined-1-scaled.png',
        logoUrl: 'https://i.pinimg.com/originals/51/af/ed/51afedb0d252e3429b9564dc673699e7.png',
    }
}

export const homeTeamDetails = {
    players: [
        {
            id: 1,
            num: 10,
            name: 'Jax Starblade',
            image: 'https://custom.swcombine.com/static/1/1320391-100-100.jpg?1577367133',
            fatigue: 14,
            aggression: 40,
            modifier: 0,
        }
    ]
}

export const awayTeamDetails = {
    players: [
        {
            id: 2,
            num: 3,
            name: 'Tholme So',
            image: 'http://custom.swcombine.com/static/1/1305198-100-100.jpg?1524199193',
            fatigue: 50,
            aggression: 80,
            modifier: 0,
        }
    ]
}

export const matchData = [
    {
        action: 1,
        code: 4073,
        Positions: [
            { num: 10, x: 0, y: 1, fatigue: 12, modifier: 0 },
            { num: 3, x: 3, y: 3, fatigue: 10, modifier: 3}, // modifier 3 is stunned for example
        ],
    },

]