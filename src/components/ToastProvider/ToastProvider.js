import { createContext, useState } from "react";
import { useEscapeKeyHandler } from "../../lib";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.key === "Escape") {
  //       setToasts([]);
  //     }
  //   }
  //
  //   window.addEventListener("keydown", handleKeyDown);
  //
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  useEscapeKeyHandler(() => {
    setToasts([]);
  });

  function createToast(message, variant) {
    if (!message) {
      return;
    }

    const id = Date.now();

    setToasts([
      ...toasts,
      {
        id,
        variant,
        message,
        something: "something",
      },
    ]);
  }

  const removeToast = (idParam) => {
    const result = toasts.filter((toast) => toast.id !== idParam);
    console.log(toasts, idParam, result);
    setToasts(result);
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
