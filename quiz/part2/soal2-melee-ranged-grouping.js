function meleeRangedGrouping (str) {
    if (!str.length) {
        return [];
    }

    const heroes = str.split(",");

    const group = [[],[]];
    for (const hero of heroes) {
        const [name, type] = hero.split("-");

        if (type.toLowerCase() === "ranged") {
            group[0].push(name);
        }

        if (type.toLowerCase() === "melee") {
            group[1].push(name);
        }
    }

    return group;
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping(''));
// []
