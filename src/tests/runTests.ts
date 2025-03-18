import CatDetector from '../models/CatDetector';
import { readTestFile } from '../utils/fileReader';

/**
 * Runs test cases from a specified file.
 * @param filename - Path to the test file
 */
function runTests(filename: string): void {
  const data = readTestFile(filename);

  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 >= data.length) break;

    const requiredFrames = parseInt(data[i], 10);
    const frameSequence = Array.from(data[i + 1], Number);
    const expectedOutput = Array.from(data[i + 2], Number);

    const detector = new CatDetector(requiredFrames);
    const actualOutput = frameSequence.map(frame => detector.shouldChangeState(frame));

    const passed = actualOutput.join('') === expectedOutput.join('');
    console.log(`\nTest Case ${Math.floor(i / 3) + 1}: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`Expected: ${expectedOutput.join('')}`);
    console.log(`Actual  : ${actualOutput.join('')}`);
    console.log('-------------------------------------');
  }
}

// Run tests from testCases.txt
runTests('src/tests/testCases.txt');
