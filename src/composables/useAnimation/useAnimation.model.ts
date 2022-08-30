export interface AnimationState {
  completeAnimations: string[];
}

export interface UseAnimation {
  get: <T extends keyof AnimationState>(keyOfState: T) => AnimationState[T];
  set: <T extends keyof AnimationState>(
    keyOfState: T,
    value: AnimationState[T]
  ) => void;
  animation: (
    trigger: string,
    translate?: number,
    startTrigger?: number
  ) => void;
}
