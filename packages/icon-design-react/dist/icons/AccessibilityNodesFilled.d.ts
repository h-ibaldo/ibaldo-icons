import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityNodesFilledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityNodesFilled: ForwardRefExoticComponent<AccessibilityNodesFilledProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityNodesFilled;
export { AccessibilityNodesFilled };
