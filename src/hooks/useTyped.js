import { useEffect } from "react";
import Typed from "typed.js";

export function useTyped(ref) {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const typed = new Typed(ref.current, {
      strings: ["Aspiring front-end developer"],
      showCursor: false,
      typeSpeed: 60,
      startDelay: 600,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [ref]);
}
