import type { DefineComponent } from 'vue';

export interface AccessibilityGearWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityGearWavy: DefineComponent<AccessibilityGearWavyProps>;

export default AccessibilityGearWavy;
export { AccessibilityGearWavy };
