import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityCircleSettingsLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityCircleSettingsLarge: ForwardRefExoticComponent<AccessibilityCircleSettingsLargeProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityCircleSettingsLarge;
export { AccessibilityCircleSettingsLarge };
