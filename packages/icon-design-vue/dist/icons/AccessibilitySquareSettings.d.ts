import type { DefineComponent } from 'vue';

export interface AccessibilitySquareSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AccessibilitySquareSettings: DefineComponent<AccessibilitySquareSettingsProps>;

export default AccessibilitySquareSettings;
export { AccessibilitySquareSettings };
