import type { DefineComponent } from 'vue';

export interface AccessibilityGearProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityGear: DefineComponent<AccessibilityGearProps>;

export default AccessibilityGear;
export { AccessibilityGear };
