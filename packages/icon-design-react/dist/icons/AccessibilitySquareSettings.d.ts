import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilitySquareSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilitySquareSettings: ForwardRefExoticComponent<AccessibilitySquareSettingsProps & RefAttributes<SVGSVGElement>>;

export default AccessibilitySquareSettings;
export { AccessibilitySquareSettings };
