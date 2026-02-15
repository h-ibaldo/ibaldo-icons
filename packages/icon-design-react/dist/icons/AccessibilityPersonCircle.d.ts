import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityPersonCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityPersonCircle: ForwardRefExoticComponent<AccessibilityPersonCircleProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityPersonCircle;
export { AccessibilityPersonCircle };
