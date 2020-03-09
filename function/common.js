const createArrayStart = () => {
    const hePika = 16
    const wiPika = 9
    let obj = {}
    let arr = []
    for (let i = 0; i < hePika + 2; i++) {
        let mediateArr = []
        for (let j = 0; j < wiPika + 2; j++) {
            let hero
            function createRandomHero() {
                hero = parseInt(Math.random() * 36 + 1)
                if (obj[hero]) {
                    if (obj[hero] === 4) { createRandomHero() }
                    else {
                        obj[hero]++
                    }
                } else { obj[hero] = 1 }
            }
            if (i === 0 || j === 0 || i === hePika + 1 || j === wiPika + 1) {
                hero = 0
            } else { createRandomHero() }

            mediateArr.push(hero)
        }
        arr.push(mediateArr)
    }
    return arr
}

export default createArrayStart