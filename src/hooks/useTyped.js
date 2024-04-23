import { useEffect } from "react";
import Typed from "typed.js";

export function useTyped(ref) {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const typed = new Typed(ref.current, {
      strings: ["Aspiring Something something?"],
      showCursor: false,
      typeSpeed: 70,
      startDelay: 20,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [ref]);
}
