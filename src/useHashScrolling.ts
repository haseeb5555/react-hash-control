import { useEffect } from "react";

// Hook to enable smooth scrolling to hash anchors within the page
export function useHashScrolling(): void {
    useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
  
      window.addEventListener("hashchange", handleHashChange);
  
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, []);
  }
  