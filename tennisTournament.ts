interface Tournament {
    match_member: string,
    rank: number,
    num_of_matches: string,
    player_Id: string
}
interface Match {
    round: number,
    player1: string,
    player2: string
}

let Match: Tournament[] = [
    {
        match_member: "RAFAEL",
        rank: 1,
        num_of_matches: "450",
        player_Id: "plO67"
    },

    {
        match_member: "SAINA",
        rank: 2,
        num_of_matches: "89",
        player_Id: "plO68"
    },

    {
        match_member: "ROD",
        rank: 3,
        num_of_matches: "78",
        player_Id: "plO69"
    },

    {
        match_member: "VIJAY",
        rank: 4,
        num_of_matches: "45",
        player_Id: "plO70"
    },

    {
        match_member: "SERENA",
        rank: 5,
        num_of_matches: "434",
        player_Id: "plO71"
    },

    {
        match_member: "BILLIE",
        rank: 6,
        num_of_matches: "55",
        player_Id: "plO72"
    },

    {
        match_member: "MAHESH",
        rank: 7,
        num_of_matches: "50",
        player_Id: "plO73"
    },

    {
        match_member: "SINDHU",
        rank: 8,
        num_of_matches: "40",
        player_Id: "plO74"
    },
]
//--------------------
let matchOrder: Match[] = []
for (let i = 0; i < Match.length / 2; i++) {
    let ob: Match = { round: 0, player1: "", player2: "" }
    ob["round"] = 1
    ob["player1"] = Match[i].match_member,
        ob["player2"] = Match[Match.length - 1 - i].match_member
    matchOrder.push(ob)
}
let poolA: Match[] = []
let poolB = []
for (let i = 0; i < matchOrder.length; i++) {
    if (i % 2 == 0) {
        poolA.push(matchOrder[i])
    }

    else {
        poolB.push(matchOrder[i])
    }
}
for (let i of poolB.reverse()) {
    poolA.push(i)
}
console.log(poolA)
let count = 2
function winner() {
    let poolAWinners = []
    for (let i = 0; i < poolA.length; i = i + 2) {
        let l = []
        let a = comparison(poolA[i].player1, poolA[i].player2)
        let b = comparison(poolA[i + 1].player1, poolA[i + 1].player2)
        let ob: Match = { round: 0, player1: "", player2: "" }
        ob["round"] = count
        ob["player1"] = a
        ob["player2"] = b
        poolAWinners.push(ob)
    }
    console.log(poolAWinners)
    poolA = poolAWinners
    if (poolA.length != 1) {
        count++
        winner()
    }
    else {
        console.log(`The Final Winner is ${randomWinner(poolA[0].player1, poolA[0].player2)}`)
    }
}
winner()
function findRank(playerName: string): any {
    for (let d of Match) {
        if (d.match_member == playerName) {
            let a = d.rank
            return a
        }
    }
}
function comparison(player1: string, player2: string) {
    let player1Rank: any = findRank(player1)
    let player2Rank: any = findRank(player2)
    if (player1Rank < player2Rank) {
        return player1
    }
    else {
        return player2
    }
}
function randomWinner(player1: string, player2: string) {
    let l = []
    l.push(player1)
    l.push(player2)
    return l[Math.floor(Math.random() * 2)]
}
