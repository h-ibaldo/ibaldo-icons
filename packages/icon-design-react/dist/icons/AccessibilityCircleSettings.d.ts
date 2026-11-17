import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityCircleSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityCircleSettings: ForwardRefExoticComponent<AccessibilityCircleSettingsProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityCircleSettings;
export { AccessibilityCircleSettings };
