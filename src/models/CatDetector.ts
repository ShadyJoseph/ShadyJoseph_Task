class CatDetector {
  private readonly requiredFrames: number;
  private currentState: number = 0; // No cat present initially
  private count: number = 0;

  constructor(requiredFrames: number) {
    if (!Number.isInteger(requiredFrames) || requiredFrames <= 0) {
      throw new Error("Required frames must be a positive integer.");
    }
    this.requiredFrames = requiredFrames;
  }

  /**
   * Determines if the state should change based on consecutive frame results.
   * @param frame - 0 (no cat) or 1 (cat present)
   * @returns 1 if state changes, otherwise 0
   */
  shouldChangeState(frame: number): number {
    if (frame !== 0 && frame !== 1) {
      throw new Error("Invalid frame input. Only 0 (no cat) or 1 (cat present) allowed.");
    }

    if (frame === this.currentState) {
      this.count = Math.max(0, this.count - 1);
      return 0;
    }

    this.count++;
    if (this.count >= this.requiredFrames) {
      this.currentState = frame;
      this.count = 0; // Reset counter after successful transition
      return 1;
    }

    return 0;
  }
}

export default CatDetector;
