import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityGearSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityGearSharp: ForwardRefExoticComponent<AccessibilityGearSharpProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityGearSharp;
export { AccessibilityGearSharp };
