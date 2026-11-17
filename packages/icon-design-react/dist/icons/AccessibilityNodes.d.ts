import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityNodesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityNodes: ForwardRefExoticComponent<AccessibilityNodesProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityNodes;
export { AccessibilityNodes };
