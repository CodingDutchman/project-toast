import { useEffect } from "react";

export function useEscapeKeyHandler(callback) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
}
