import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityCircle: ForwardRefExoticComponent<AccessibilityCircleProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityCircle;
export { AccessibilityCircle };
