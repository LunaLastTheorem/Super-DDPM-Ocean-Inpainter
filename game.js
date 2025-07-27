class Researcher extends Character {
    async takeTurn(boss) {
        if (!this.isAlive) return;

        const choice = await getPlayerChoice(this)

        switch (choice) {
            case "attack":
                this.attack(boss)
                break
            case "heal":
                this.hp += 10
                break
            default:
                console.log("defending")
        }
    }
}

function getPlayerChoice(researcher) {
    return new Promise((resolve) => {
        const prompt = document.getElementById("prompt")
        prompt.textContent = `${researcher.name}, is now your turn`

        const attackButton = document.getElementById("Apply_denoise_function")
        const healButton = document.getElementById("Do_inpaint");

        attackButton.disabled = false
        healButton.disabled = false

        const onAttack = () => {
            cleanUp()
            resolve("attack")
        }

        const onHeal = () => {
            cleanUp()
            resolve("heal")
        }

        function cleanUp() {
            attackButton.removeEventListener("click", onAttack)
            healButton.removeEventListener("click", onHeal)
            attackButton.disabled = true;
            healButton.disabled = true;
        }

        attackButton.addEventListener("click", onAttack)
        healButton.addEventListener("click", onHeal)
    })
}

class Boss extends Character {
    async takeTurn(players) {
        const prompt = document.getElementById("prompt")
        prompt.textContent = `${this.name}, is now your turn`
        if (!this.isAlive) return;
        const aliveResearchers = players.filter(p => p.isAlive);
        if (aliveResearchers.length === 0) return;
        const target = aliveResearchers[Math.floor(Math.random() * aliveResearchers.length)]
        this.attack(target)
    }
}

function call_seth() {
    Call_seth()
    for (let i = 0; i < 10; i++) {
        Add_chair()
    }
}

const researchers = [
    new Researcher("DrMrCaley", 100, 100),
    new Researcher("DrCaley", 100, 100),
    new Researcher("Caley", 100, 100),
    new Researcher("MrCaley", 100, 100)
]
const boss = new Boss("The Ocean", 100, 999999);

for (const res of researchers) {
    const place = document.getElementById("researchers")
    const portrait = document.createElement("div")
    portrait.classList.add("portrait")
    let resName = document.createElement("h4")
    resName.textContent = res.name
    portrait.appendChild(res.hpBar)
    portrait.appendChild(resName)
    place.appendChild(portrait)
}

const boss_area = document.getElementById("boss-fight-box")
boss.hpBar.id = "boss_bar"
boss_area.insertBefore(boss.hpBar, boss_area.firstChild)

async function battle() {
    let turn_count = 0

    while (researchers.some(p => p.isAlive) && boss.isAlive) {
        console.log(turn_count)
        for (const res of researchers) {
            await res.takeTurn(boss)
        }
        boss.takeTurn(researchers)
        turn_count++
    }

    if (boss.isAlive) {
        window.alert("aint no way you actually lost bruh 💀")
    }
    else {
        window.alert("but can you do it with divergence-free noise?")
    }
}

battle()