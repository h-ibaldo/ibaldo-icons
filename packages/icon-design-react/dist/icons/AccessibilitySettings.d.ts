import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilitySettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilitySettings: ForwardRefExoticComponent<AccessibilitySettingsProps & RefAttributes<SVGSVGElement>>;

export default AccessibilitySettings;
export { AccessibilitySettings };
