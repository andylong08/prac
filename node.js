const fs = require('fs');

const input = fs.readFileSync('lights.dat', 'utf-8').trim().split('\n');

const n = parseInt(input[0]);
let lineIndex = 1;

let output = [];

for (let i = 0; i < n; i++) {

    let [lights, m] = input[lineIndex].split(' ');
    m = parseInt(m);
    lineIndex++;
    
    let lightsArray = lights.split('').map(Number);
    
    for (let j = 0; j < m; j++) {
        const action = input[lineIndex].split(' ');
        lineIndex++;
        
        if (action[0] === 'FLIP') {
            if (action[1] === 'ALL') {

                lightsArray = lightsArray.map(light => (light === 1 ? 0 : 1));
            } else {

                const a = parseInt(action[1]);
                const b = parseInt(action[2]);
                for (let k = a; k < b; k++) {
                    lightsArray[k] = lightsArray[k] === 1 ? 0 : 1;
                }
            }
        } else if (action[0] === 'ON') {
            if (action[1] === 'ALL') {

                lightsArray = lightsArray.map(() => 1);
            } else {

                const a = parseInt(action[1]);
                const b = parseInt(action[2]);
                for (let k = a; k < b; k++) {
                    lightsArray[k] = 1;
                }
            }
        } else if (action[0] === 'OFF') {
            if (action[1] === 'ALL') {

                lightsArray = lightsArray.map(() => 0);
            } else {

                const a = parseInt(action[1]);
                const b = parseInt(action[2]);
                for (let k = a; k < b; k++) {
                    lightsArray[k] = 0;
                }
            }
        }
    }
    
    output.push(lightsArray.join(''));
}

console.log(output.join('\n'));