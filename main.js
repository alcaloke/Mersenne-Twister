const form = document.querySelector('form');

form.addEventListener('submit', assignSeed);

let n = 0;

function assignSeed(e){
    e.preventDefault();

    let minRange = parseInt(document.getElementById('min').value);
    let maxRange = parseInt(document.getElementById('max').value);
    let seed = document.getElementById('seedInput').value;
    
    let chance = new Chance(seed);
    let output = chance.integer({
        min: minRange,
        max: maxRange
    });
    
    document.getElementById('output').innerHTML = '<p class="text-success">' + output + '</p>';
    
    n++;
    console.log('random number ' + n + ' generated');
}
