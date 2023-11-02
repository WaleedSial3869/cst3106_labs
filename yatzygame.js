function update(turn) {
    oneToSixe(turn, 1);
    oneToSixe(turn, 2);
    oneToSixe(turn, 3);
    oneToSixe(turn, 4);
    oneToSixe(turn, 5);
    oneToSixe(turn, 6);
    onepair(turn);
    twopairs(turn);
    threeSame(turn);
    fourSame(turn);
    fullHouse(turn);
    smallStraight(turn);
    largeStraight(turn);
    chance(turn);
    yatzy(turn);
}

function calcCounts(turn) {
    let counts = [];
    for (let i = 1; i < 7; i++) {
        counts[i] = 0;
    }
    for (let i = 0; i < turn.length; i++) {
        counts[turn[i]]++;
    }
    return counts;
}

function oneToSixe(turn, number) {
    let total = 0;
    for (let i = 0; i < turn.length; i++) {
        if (turn[i] === number) {
            total += turn[i];
        }
    }
    holdPoints(number, total);
}
function fourSame(turn) {
    let total = 0;
    let counts = calcCounts(turn);
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 3) {
            total = i * 4;
        }
    }
    holdPoints(12, total);
}
function onepair(turn) {
    let total = 0;
    let counts = calcCounts(turn);
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 1) {
            if (total < i * 2) {
                total = i * 2;
            }
        }
    }
    holdPoints(9, total);
}
function twopairs(turn) {
    counts = calcCounts(turn);
    let total = 0;
    let highPair = 0;
    let nextPair = 0;
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 1) {
            if (i * 2 > highPair) {
                nextPair = highPair;
                highPair = i * 2;
            }
        }
    }
    if (nextPair != 0 && highPair != 0) {
        total = nextPair + highPair;
    }
    holdPoints(10, total);
}

function threeSame(turn) {
    let total = 0;
    let counts = calcCounts(turn);
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 2) {
            total = i * 3;
        }
    }
    holdPoints(11, total);
}
function fullHouse(turn) {
    let counts = [];
    counts = calcCounts(turn);
    let pair = 0;
    let threeOfKind = 0;
    let total = 0;
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] == 2) {
            pair = i * 2;
        } else if (counts[i] == 3) {
            threeOfKind = i * 3;
        }
    }
    if (pair != 0 && threeOfKind != 0) {
        total = pair + threeOfKind;
    }
    holdPoints(13, total);
}
function chance(turn) {
    let total = 0;
    for (let i = 0; i < turn.length; i++) {
        total += turn[i];
    }
    holdPoints(16, total);
}
function largeStraight(turn) {
    let total = 0;
    let counts = calcCounts(turn);
    if (
        counts[2] == 1 &&
        counts[3] == 1 &&
        counts[4] == 1 &&
        counts[5] == 1 &&
        counts[6] == 1
    ) {
        total = 20;
    }
    holdPoints(15, total);
}

function yatzy(turn) {
    let total = 50;
    let number = turn[0];
    for (let i = 1; i < turn.length; i++) {
        if (terninger[i] !== number) {
            total = 0;
        }
    }
    holdPoints(17, total);
}

function smallStraight(turn) {
    let total = 0;
    let counts = calcCounts(turn);
    if (
        counts[1] == 1 &&
        counts[2] == 1 &&
        counts[3] == 1 &&
        counts[4] == 1 &&
        counts[5] == 1
    ) {
        total = 15;
    }
    holdPoints(14, total);
}
