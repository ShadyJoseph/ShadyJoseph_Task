import CatDetector from '../models/CatDetector';
import { readTestFile } from '../utils/fileReader';

function runTests(filename: string): void {
  try {
    // Read test cases from the given file
    const data = readTestFile(filename);
    let passed = 0, failed = 0;

    // Process test cases in groups of three lines
    for (let i = 0; i + 2 < data.length; i += 3) {
      const testCaseNumber = i / 3 + 1;

      // Parse test case data
      const requiredFrames = parseInt(data[i], 10); // Number of frames required to detect a cat
      const frameSequence = data[i + 1].split('').map(Number); // Sequence of frames as an array of numbers
      const expectedOutput = data[i + 2].split('').map(Number); // Expected output sequence

      // Initialize CatDetector with required frames
      const detector = new CatDetector(requiredFrames);

      // Generate actual output by processing each frame
      const actualOutput = frameSequence.map(frame => detector.shouldChangeState(frame));

      // Compare actual output with expected output
      const testPassed = JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);

      // Log test results
      console.log(`\nTest Case ${testCaseNumber}: ${testPassed ? '✅ PASSED' : '❌ FAILED'}`);
      console.log(`Expected: [${expectedOutput.join(', ')}]`);
      console.log(`Actual  : [${actualOutput.join(', ')}]`);

      // Update test counters
      testPassed ? passed++ : failed++;
    }

    // Print final test summary
    console.log(`\n✅ Total Passed: ${passed} | ❌ Total Failed: ${failed}`);
  } catch (error) {
    console.error(`❌ Error reading file: ${filename}\n`, error);
  }
}

// Run tests from testCases.txt
runTests('src/tests/testCases.txt');
