import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityGearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityGear: ForwardRefExoticComponent<AccessibilityGearProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityGear;
export { AccessibilityGear };
