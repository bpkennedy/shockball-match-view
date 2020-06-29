export const teams = {
    "home_team" : {
        "id": 1,
        "place" : "Stensen",
        "name" : "Sandcrawlers",
        "nick" : "The Crawlers",
        "main_color" : "#FFC20E",
        "accent_color" : "#0080C6",
        "dark_color" : "#002A5E",
        "light_color" : "#fff8dc",
        "team_logo" : "https://i.pinimg.com/originals/e1/68/be/e168be01dd5117a08500c8deb30261e2.png",
        "team_banner" : "https://www.badWebsite.com/someBadImage.png",
        "field_background": "https://wallup.net/wp-content/uploads/2016/01/91038-nebula-space-748x468.jpg",
        "roster" : [43, 45, 69, 70],
    },
    "away_team" : {
        "id": 2,
        "place" : "Dxun",
        "name" : "Basilisks",
        "nick" : "The Snakes",
        "main_color" : "#006778",
        "accent_color" : "#9F792C",
        "dark_color" : "#000000",
        "light_color" : "#fdfcf3",
        "team_logo" : "https://i.pinimg.com/originals/51/af/ed/51afedb0d252e3429b9564dc673699e7.png",
        "team_banner" : "https://www.alliancesoccerclub.com/wp-content/uploads/sites/746/2019/12/Travel-combined-1-scaled.png",
        "field_background": "some_url",
        "roster" : [34, 71, 72, 73],
    }
}

export const players = {
    34 : {
        "name" : "Tholme",
        "surname" : "So",
        "avatar" : "http://custom.swcombine.com/static/1/1305198-100-100.jpg?1524199193",
        "number" : 1,
        "fatigue" : 0,
        "aggressiveness" : 80,
        "is_captain" : true,
        "badge" : null
    },
    43 : {
        "name" : "Shyanna",
        "surname" : "Jovanovic",
        "avatar" : "https://custom.swcombine.com/static/1/1467589-100-100.jpg?1591576125",
        "number" : 12,
        "fatigue" : 0,
        "aggressiveness" : 50,
        "is_captain" : false,
        "badge" : null
    },
    45 : {
        "name" : "",
        "surname" : "Baugrems",
        "avatar" : "http://custom.swcombine.com/static/1/1468488-100-100.jpg?1567325301",
        "number" : 11,
        "fatigue" : 0,
        "aggressiveness" : 50,
        "is_captain" : false,
        "badge" : null
    },
    69 : {
        "name" : "Jax",
        "surname" : "Starblade",
        "avatar" : "https://custom.swcombine.com/static/1/1320391-100-100.jpg?1577367133",
        "number" : 10,
        "fatigue" : 0,
        "aggressiveness" : 99,
        "is_captain" : false,
        "badge" : null
    },
    70: {
        "name": "Denton",
        "surname": "Dabbs",
        "number": 13,
        "avatar": 'https://custom.swcombine.com/static/1/1259883-100-100.jpg?1589209377',
        "fatigue": 54,
        "aggressiveness": 80,
        "is_captain" : false,
        "badge" : null
    },
    71: {
        "name": "Lilith",
        "surname": "Delcroix",
        "number": 2,
        "avatar": 'https://custom.swcombine.com/static/1/1387573-100-100.jpg?1592864285',
        "fatigue": 54,
        "aggressiveness": 80,
        "is_captain" : false,
        "badge" : null
    },
    72: {
        "name": "Fang",
        "surname": "D'Wurm",
        "number": 3,
        "avatar": 'http://custom.swcombine.com/static/1/1469038-100-100.jpg?1572917361',
        "fatigue": 54,
        "aggressiveness": 80,
        "is_captain" : false,
        "badge" : null
    },
    73: {
        "name": "Thrall",
        "surname": "Lothbrok",
        "number": 4,
        "avatar": 'https://custom.swcombine.com/static/1/1465033-100-100.jpg?1578692004',
        "fatigue": 54,
        "aggressiveness": 80,
        "is_captain" : false,
        "badge" : null
    }
}

export const matchData = [
    {
        action: 0,
        code: 1203,
        Positions: [
            { num: 10, x: 2, y: 2, fatigue: 12, modifier: 0 },
            { num: 11, x: 5, y: 3, fatigue: 12, modifier: 0 },
            { num: 12, x: 5, y: 1, fatigue: 12, modifier: 0 },
            { num: 13, x: 8, y: 2, fatigue: 12, modifier: 0 },

            { num: 1, x: 7, y: 2, fatigue: 12, modifier: 0 },
            { num: 2, x: 4, y: 3, fatigue: 12, modifier: 0 },
            { num: 3, x: 4, y: 1, fatigue: 12, modifier: 0 },
            { num: 4, x: 1, y: 2, fatigue: 10, modifier: 3},
        ],
    },
    {
        action: 1,
        code: 4073,
        Positions: [
            { num: 10, x: 0, y: 1, fatigue: 12, modifier: 0 },
            { num: 3, x: 3, y: 3, fatigue: 10, modifier: 3}, // modifier 3 is stunned for example
        ],
    },
]