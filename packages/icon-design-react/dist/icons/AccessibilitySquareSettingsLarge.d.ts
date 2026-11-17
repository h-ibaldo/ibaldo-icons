import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilitySquareSettingsLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilitySquareSettingsLarge: ForwardRefExoticComponent<AccessibilitySquareSettingsLargeProps & RefAttributes<SVGSVGElement>>;

export default AccessibilitySquareSettingsLarge;
export { AccessibilitySquareSettingsLarge };
