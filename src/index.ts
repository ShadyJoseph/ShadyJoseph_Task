import CatDetector from "./CatDetector";

const detector = new CatDetector(3); // Example: Change state after 3 consecutive frames

const frames = [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0] as (0 | 1)[];

console.log("Frame Processing:");
frames.forEach((frame, index) => {
    const shouldChange = detector.shouldChangeState(frame);
    console.log(`Frame ${index + 1}: ${frame}, Should Change: ${shouldChange}`);
});
