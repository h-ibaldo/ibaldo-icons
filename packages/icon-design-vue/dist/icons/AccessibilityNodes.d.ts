import type { DefineComponent } from 'vue';

export interface AccessibilityNodesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityNodes: DefineComponent<AccessibilityNodesProps>;

export default AccessibilityNodes;
export { AccessibilityNodes };
