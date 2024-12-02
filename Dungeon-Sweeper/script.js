let exp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const expText = document.querySelector('#expText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats =  document.querySelector('#monsterStats');
const monsterName =  document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');
const weapons = [
    {
        name: "stick", power: 5
    },
    {
        name: "dagger", power: 30
    },
    {
        name: "sword", power: 50
    },
    {
        name: "claw hammer", power: 100
    }
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight Enemy"],
        "button functions": [goStore, goCave, fightEnemy],
        text: "You entered the town" 
    },
    {
        name: "store",
        "button text": ["Buy health potion(10 gold)", "Buy Weapon (30 gold)", "Go to Town Sqare"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You entered the store." 
    },
    {
        name: "cave",
        "button text": ["Fight enemy1", "Fight enemy2", "return"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You entered the cave. Monsters!." 
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster." 
    },
];

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightEnemy;



function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1])
}

function goCave() {
    update(locations[2])
}


function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health"
    }
}

function buyWeapon() {
    // if the player has the best weapon
    if (currentWeaponIndex < weapons.length - 1) {
        //if player is short on money
        if (gold >= 30) {
            gold -= 30;
            health += 10;
            currentWeaponIndex++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeaponIndex].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory[newWeapon];
        } else {
            text.innerText = "You do not have enough gold to buy a weapon."
        }
    } else {
        text.innerText = "You already have the most powerful weapon!"
        button2.innerText = "Sell old weapons for 15g";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    //players should be unable to sell their only weapon
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon;
        currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "Don't sell your only weapon"
    }
}

const monsters = [
    {name: "slime", level: 2, health: 15},
    {name: "fanged beast", level: 8, health: 60},
    {name: "dragon", level: 20, health: 300}
];

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = 'block';
}


function fightSlime() { 119
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightEnemy() {
    fighting = 2;
    goFight();
}



function attack() {

}
function dodge() {

}