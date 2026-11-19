import type { DefineComponent } from 'vue';

export interface AccessibilitySettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilitySettings: DefineComponent<AccessibilitySettingsProps>;

export default AccessibilitySettings;
export { AccessibilitySettings };
