import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityPentagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityPentagon: ForwardRefExoticComponent<AccessibilityPentagonProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityPentagon;
export { AccessibilityPentagon };
