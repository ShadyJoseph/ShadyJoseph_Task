ShadyJoseph_Task
📁 Folder Structure
ShadyJoseph_Task/
│── src/
│   ├── models/                # Core models
│   │   ├── catDetector.ts      # Cat detection logic
│   ├── tests/                 # Test cases and test runner
│   │   ├── runTests.ts        # Script to run all test cases
│   │   ├── testCases.txt      # Input test cases (if applicable)
│   ├── utils/                 # Utility functions
│   │   ├── fileReader.ts      # Reads input files for test cases
│              
│── package.json               # Project dependencies and scripts
│── tsconfig.json              # TypeScript configuration file
│── README.md                  # Project documentation



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