import * as fs from 'fs';
import CatDetector from './CatDetector';

function runTests(filename: string): void {
    const data = fs.readFileSync(filename, 'utf8').split('\n');
    
    for (let i = 0; i < data.length; i += 3) {
        if (i + 2 >= data.length) break;
        
        const requiredFrames = parseInt(data[i].trim(), 10);
        const frameSequence = data[i + 1].trim().split('').map(Number);
        const expectedOutput = data[i + 2].trim().split('').map(Number);
        
        const detector = new CatDetector(requiredFrames);
        let actualOutput: number[] = [];
        
        for (const frame of frameSequence) {
            actualOutput.push(detector.shouldChangeState(frame));
        }
        
        console.log(`Test Case ${i / 3 + 1}:`, 
            actualOutput.join('') === expectedOutput.join('') ? 'PASSED' : 'FAILED');
        console.log(`Expected: ${expectedOutput.join('')}`);
        console.log(`Actual  : ${actualOutput.join('')}`);
        console.log('-------------------------------------');
    }
}

runTests('src/test_cases/input.txt');
