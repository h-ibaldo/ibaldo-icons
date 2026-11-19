import type { DefineComponent } from 'vue';

export interface AccessibilityCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityCircle: DefineComponent<AccessibilityCircleProps>;

export default AccessibilityCircle;
export { AccessibilityCircle };
