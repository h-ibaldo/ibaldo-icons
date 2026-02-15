import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AccessibilityPersonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AccessibilityPerson: ForwardRefExoticComponent<AccessibilityPersonProps & RefAttributes<SVGSVGElement>>;

export default AccessibilityPerson;
export { AccessibilityPerson };
