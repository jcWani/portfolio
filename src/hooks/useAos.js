import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS() {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Refresh AOS whenever the page is rendered
    AOS.refresh();
  }, []);

  return {
    // You can expose AOS methods or properties here if needed
    AOS,
  };
}
