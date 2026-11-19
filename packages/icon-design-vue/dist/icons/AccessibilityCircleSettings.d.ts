import type { DefineComponent } from 'vue';

export interface AccessibilityCircleSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilityCircleSettings: DefineComponent<AccessibilityCircleSettingsProps>;

export default AccessibilityCircleSettings;
export { AccessibilityCircleSettings };
