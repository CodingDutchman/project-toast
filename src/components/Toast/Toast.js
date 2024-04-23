import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const STYLES_BY_VARIANT = {
  notice: styles.notice,
  warning: styles.warning,
  success: styles.success,
  error: styles.error,
};

function Toast({ variant = "notice", onClose, children }) {
  return (
    <div className={`${styles.toast} ${STYLES_BY_VARIANT[variant]}`}>
      <div className={styles.iconContainer}>
        {React.createElement(ICONS_BY_VARIANT[variant], { size: 24 })}
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        onClick={onClose}
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
