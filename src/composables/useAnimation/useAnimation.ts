import { reactive } from "vue";
import gsap from "gsap";
import type {
  AnimationState,
  UseAnimation,
} from "@/composables/useAnimation/useAnimation.model";

const state: AnimationState = reactive({
  completeAnimations: [],
});

export default function useAnimation(): UseAnimation {
  const get = <T extends keyof AnimationState>(keyOfState: T) =>
    state[keyOfState];
  const set = <T extends keyof AnimationState>(
    keyOfState: T,
    value: AnimationState[T]
  ) => {
    state[keyOfState] = value;
  };

  const animation = (
    trigger: string,
    translate = 0,
    startTrigger = 50
  ): void => {
    const triggerClass = `.${trigger}`;
    gsap.to(`.${trigger}`, {
      x: `${translate}vw`,
      rotation: 0,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: triggerClass,
        start: `center center-=${startTrigger}`,
        end: "center ",
        toggleActions: "play pause resume ",
        // toggleActions:
        //   event: onEnter onLeave onEnterBack onLeaveBack
        //   default: play none none none
        markers: true,
        id: trigger,
      },
      onComplete: (): void => {
        state.completeAnimations.push(trigger);
      },
    });
  };

  return {
    get,
    set,
    animation,
  };
}
