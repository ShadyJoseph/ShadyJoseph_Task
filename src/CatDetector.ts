class CatDetector {
    private requiredFrames: number;
    private currentState: 0 | 1;
    private consecutiveCount: number;
    private lastFrameValue: 0 | 1 | null;

    constructor(requiredFrames: number) {
        if (requiredFrames <= 0) {
            throw new Error("requiredFrames must be a positive integer");
        }
        this.requiredFrames = requiredFrames;
        this.currentState = 0; // Initial state: no cat present (0)
        this.consecutiveCount = 0;
        this.lastFrameValue = null; // Track the last frame value
    }

    shouldChangeState(frameValue: 0 | 1): 0 | 1 {
        // If the frame value is the same as the last frame value, increment the counter
        if (frameValue === this.lastFrameValue) {
            this.consecutiveCount++;
        } else {
            // Reset the counter if the frame value changes
            this.consecutiveCount = 1;
            this.lastFrameValue = frameValue;
        }

        // Check if the consecutive count meets the threshold
        if (this.consecutiveCount >= this.requiredFrames) {
            // Change the state if the current frame value is different from the current state
            if (frameValue !== this.currentState) {
                this.currentState = frameValue;
                this.consecutiveCount = 0; // Reset the counter after state change
                return 1; // State changed
            }
        }

        return 0; // State not changed
    }
}

export default CatDetector;