import gsap from "gsap";
import { ref, nextTick } from "vue";

export default function useCustomCursor() {
  const TIME_TO_RENDER_PAGE = 500;
  const mouseX = ref<number>(0);
  const mouseY = ref<number>(0);

  const cursorInit = async (cursor: Element): Promise<void> => {
    await nextTick().then((): void => {
      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: (): void => {
          gsap.set(cursor, {
            css: {
              left: mouseX.value,
              top: mouseY.value,
            },
          });
        },
      });

      window.addEventListener("mousemove", (event): void => {
        mouseX.value = event.clientX;
        mouseY.value = event.clientY;
      });
      setTimeout((): void => {
        const cursorScale: NodeListOf<Element> =
          document.querySelectorAll(".cursor-scale");
        cursorScale.forEach((link: Element) => {
          link.addEventListener("mousemove", (): void => {
            if (cursor) {
              cursor.classList.add("grow");
              if (link.classList.contains("small")) {
                cursor.classList.remove("grow");
                cursor.classList.add("grow-small");
              }
            }
          });

          link.addEventListener("mouseleave", (): void => {
            if (cursor) {
              cursor.classList.remove("grow");
              cursor.classList.remove("grow-small");
            }
          });
        });
      }, TIME_TO_RENDER_PAGE);
    });
  };
  return {
    cursorInit,
  };
}
