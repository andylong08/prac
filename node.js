const fs = require('fs');

const data = fs.readFileSync('lights.dat', 'utf8');
const lines = data.trim().split('\n');

const n = parseInt(lines[0]);
let lineIndex = 1;
const results = [];

for (let i = 0; i < n; i++) {
    const [initialState, m] = lines[lineIndex].trim().split(/ +/, 2);
    const numActions = parseInt(m);
    lineIndex++;
    
    let lights = initialState.split('');
    
    for (let j = 0; j < numActions; j++) {
        const action = lines[lineIndex].trim();
        const parts = action.split(' ');
        const command = parts[0];
        
        if (command === 'FLIP') {
            if (parts[1] === 'ALL') {
                lights = lights.map(light => light === '1' ? '0' : '1');
            } else {
                const a = parseInt(parts[1]);
                const b = parseInt(parts[2]);
                for (let k = a; k < b; k++) {
                    lights[k] = lights[k] === '1' ? '0' : '1';
                }
            }
        } else if (command === 'ON') {
            if (parts[1] === 'ALL') {
                lights = lights.map(() => '1');
            } else {
                const a = parseInt(parts[1]);
                const b = parseInt(parts[2]);
                for (let k = a; k < b; k++) {
                    lights[k] = '1';
                }
            }
        } else if (command === 'OFF') {
            if (parts[1] === 'ALL') {
                lights = lights.map(() => '0');
            } else {
                const a = parseInt(parts[1]);
                const b = parseInt(parts[2]);
                for (let k = a; k < b; k++) {
                    lights[k] = '0';
                }
            }
        }
        lineIndex++;
    }
    
    results.push(lights.join(''));
}

results.forEach(result => console.log(result));