class CatDetector {
    private requiredFrames: number;
    private currentState: number;
    private consecutiveCount: number;

    constructor(requiredFrames: number) {
        if (requiredFrames <= 0) throw new Error("requiredFrames must be a positive integer");
        this.requiredFrames = requiredFrames;
        this.currentState = 0; // Initial state is no cat present (0)
        this.consecutiveCount = 0;
    }

    shouldChangeState(frameValue: 0 | 1): 0 | 1 {
        if (frameValue === this.currentState) {
            this.consecutiveCount = 0; // Reset counter if same as current state
            return 0;
        }
        
        this.consecutiveCount++;
        
        if (this.consecutiveCount >= this.requiredFrames) {
            this.currentState = frameValue; // Change state
            this.consecutiveCount = 0; // Reset counter after state change
            return 1;
        }
        
        return 0;
    }
}

export default CatDetector;
