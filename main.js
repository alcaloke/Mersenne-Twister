const form = document.querySelector('form');

form.addEventListener('submit', assignSeed);

function assignSeed(e){
    e.preventDefault();

    let minRange = document.getElementById('min');
    let maxRange = document.getElementById('max');
    let seedInput = document.getElementById('seedInput');

    let minNum = parseInt(minRange.value);
    let maxNum = parseInt(maxRange.value);
    let seed = seedInput.value;
    
    let chance = new Chance(seed);
    let output = chance.integer({
        min: minNum,
        max: maxNum
    })
    
    let print = document.getElementById('output')
    print.innerHTML = '<p class="text-success">' + output + '</p>';
}
