import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilitySquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilitySquare: ForwardRefExoticComponent<AccessibilitySquareProps & RefAttributes<SVGSVGElement>>;

export default AccessibilitySquare;
export { AccessibilitySquare };
