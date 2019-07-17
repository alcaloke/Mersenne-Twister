const form = document.querySelector('form');

form.addEventListener('submit', assignSeed);

function assignSeed(e){
    e.preventDefault();

    let minRand = document.getElementById('min');
    let maxRand = document.getElementById('max');
    let seedInput = document.getElementById('seedInput');

    let minNum = parseInt(minRand.value);
    let maxNum = parseInt(maxRand.value);
    let seed = seedInput.value;
    
    let chance = new Chance(seed);
    let output = chance.integer({
        min: minNum,
        max: maxNum
    })
    
    let print = document.getElementById('output')
    print.innerHTML = '<p class="display4 text-success">' + output + '</p>';
}
