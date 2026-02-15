import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityPersonSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityPersonSquare: ForwardRefExoticComponent<AccessibilityPersonSquareProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityPersonSquare;
export { AccessibilityPersonSquare };
