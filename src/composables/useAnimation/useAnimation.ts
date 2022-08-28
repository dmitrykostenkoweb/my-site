import gsap from "gsap";
import { ref, type Ref } from "vue";

const completeAnimations = ref<string[]>([]);

export default function useAnimation(): {
  animation: (trigger: string, translate: number) => void;
  completeAnimations: Ref<string[]>;
} {
  const animation = (trigger: string, translate = 0): void => {
    const triggerClass = `.${trigger}`;
    gsap.to(`.${trigger}`, {
      x: `${translate}vw`,
      rotation: 0,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: triggerClass,
        start: "center center+=0",
        end: "center ",
        toggleActions: "play pause resume ",
        // toggleActions:
        //   event: onEnter onLeave onEnterBack onLeaveBack
        //   default: play none none none
        markers: true,
        id: trigger,
      },
      onComplete: (): void => {
        completeAnimations.value.push(trigger);
      },
    });
  };

  return {
    animation,
    completeAnimations,
  };
}
