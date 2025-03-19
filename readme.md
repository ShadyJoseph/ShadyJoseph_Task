ShadyJoseph_Task
📁 Folder Structure
ShadyJoseph_Task/
catDetector.ts (inside src/models/) - Implements the cat detection logic.
runTests.ts (inside src/tests/) - Runs all test cases.
testCases.txt (inside src/tests/) - Contains input test cases.
fileReader.ts (inside src/utils/) - Reads input files for test cases.
package.json (root) - Defines project dependencies and scripts.
tsconfig.json (root) - Configures TypeScript settings.
README.md (root) - Contains project documentation



🚀 How to Run Tests
1️⃣ Install Dependencies
Ensure you have Node.js and TypeScript installed. Then, install the required dependencies:
npm install

2️⃣ Run the Tests
To execute the test cases, run:
ts-node src/tests/runTests.ts

This will read test cases from testCases.txt and compare expected vs. actual output.


📝 Problem Summary
This project implements a cat detection system, analyzing input sequences to identify specific patterns related to cat presence. The algorithm processes data and outputs binary transformations based on predefined conditions.

Key Features
✅ Detects cat-related patterns in input data
✅ Runs automated test cases to validate correctness
✅ Uses TypeScript for better type safety and maintainability
