import * as fs from "fs";
import * as path from "path";
import CatDetector from "./CatDetector";

// Adjust path correctly
const filePath = path.join(__dirname, "../test_cases/input.txt");

try {
    const fileContent = fs.readFileSync(filePath, "utf-8").trim();
    const lines = fileContent.split("\n").map(line => line.trim());

    if (lines.length % 3 !== 0) throw new Error("Invalid input format in input.txt");

    let index = 0;
    let testCaseNumber = 1;

    while (index < lines.length) {
        const requiredFrames = parseInt(lines[index++], 10);
        const frames = lines[index++].split("").map(Number) as (0 | 1)[];
        const expected = lines[index++].split("").map(Number) as (0 | 1)[];

        if (isNaN(requiredFrames) || requiredFrames <= 0) {
            console.error(`❌ Test Case ${testCaseNumber}: Invalid requiredFrames value`);
            continue;
        }

        const detector = new CatDetector(requiredFrames);
        const results: (0 | 1)[] = [];

        frames.forEach(frame => {
            results.push(detector.shouldChangeState(frame));
        });

        const testPassed = JSON.stringify(results) === JSON.stringify(expected);
        console.log(`Test Case ${testCaseNumber}: ${testPassed ? "✅ Passed" : "❌ Failed"}`);
        
        if (!testPassed) {
            console.log(`Expected: ${expected.join("")}`);
            console.log(`Received: ${results.join("")}`);
        }

        testCaseNumber++;
    }
}  catch (error) {
    if (error instanceof Error) {
        console.error(`Error reading test cases: ${error.message}`);
    } else {
        console.error(`An unexpected error occurred: ${error}`);
    }
}

