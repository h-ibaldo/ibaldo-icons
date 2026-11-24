import type { DefineComponent } from 'vue';

export interface AccessibilityPentagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityPentagon: DefineComponent<AccessibilityPentagonProps>;

export default AccessibilityPentagon;
export { AccessibilityPentagon };
