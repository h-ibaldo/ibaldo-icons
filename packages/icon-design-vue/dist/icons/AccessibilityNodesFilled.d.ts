import type { DefineComponent } from 'vue';

export interface AccessibilityNodesFilledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityNodesFilled: DefineComponent<AccessibilityNodesFilledProps>;

export default AccessibilityNodesFilled;
export { AccessibilityNodesFilled };
