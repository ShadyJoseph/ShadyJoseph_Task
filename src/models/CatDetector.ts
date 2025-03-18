class CatDetector {
  private requiredFrames: number;
  private currentState: number;
  private count: number;

  constructor(requiredFrames: number) {
    if (!Number.isInteger(requiredFrames) || requiredFrames <= 0) {
      throw new Error("Required frames must be a positive integer.");
    }
    this.requiredFrames = requiredFrames;
    this.currentState = 0; // Initial state: no cat present
    this.count = 0;
  }

  /**
   * Processes a frame result (0 or 1) and determines if the state should change.
   * @param frame - The result from processing the frame (0 or 1)
   * @returns 1 if the state changed, 0 otherwise.
   */
  shouldChangeState(frame: number): number {
    if (frame !== 0 && frame !== 1) {
      throw new Error("Invalid frame input. Only 0 (no cat) or 1 (cat present) allowed.");
    }

    if (frame === this.currentState) {
      this.count = Math.max(0, this.count - 1); // Reduce streak counter if a mismatch was in progress
    } else {
      if (++this.count >= this.requiredFrames) {
        this.currentState = frame; // Change state
        this.count = 0; // Reset counter
        return 1;
      }
    }
    
    return 0;
  }
}

export default CatDetector;
