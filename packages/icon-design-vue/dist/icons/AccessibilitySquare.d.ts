import type { DefineComponent } from 'vue';

export interface AccessibilitySquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilitySquare: DefineComponent<AccessibilitySquareProps>;

export default AccessibilitySquare;
export { AccessibilitySquare };
