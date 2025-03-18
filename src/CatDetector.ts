class CatDetector {
  private requiredFrames: number;
  private currentState: number;
  private count: number;

  constructor(requiredFrames: number) {
    if (requiredFrames <= 0) {
      throw new Error("Required frames must be a positive integer.");
    }
    this.requiredFrames = requiredFrames;
    this.currentState = 0; // Initial state: no cat present
    this.count = 0;
  }

  shouldChangeState(frame: number): number {
    if (frame !== 0 && frame !== 1) {
      throw new Error("Invalid frame input. Only 0 (no cat) or 1 (cat present) allowed.");
    }

    if (frame !== this.currentState) {
      // Frame is different than current state, so add to our streak.
      this.count++;
      if (this.count >= this.requiredFrames) {
        // Enough consecutive (or near-consecutive, with outliers subtracting one)
        // frames have been observed so change state.
        this.currentState = frame;
        this.count = 0;
        return 1;
      }
    } else {
      // Frame matches the current state.
      // Instead of resetting count entirely, decrement it by one if we had any progress.
      if (this.count > 0) {
        this.count--;
      }
    }
    return 0;
  }
}

export default CatDetector;
