import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityPersonPentagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityPersonPentagon: ForwardRefExoticComponent<AccessibilityPersonPentagonProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityPersonPentagon;
export { AccessibilityPersonPentagon };
