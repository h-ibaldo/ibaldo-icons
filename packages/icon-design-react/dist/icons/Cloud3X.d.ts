import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3X: ForwardRefExoticComponent<Cloud3XProps & RefAttributes<SVGSVGElement>>;

export default Cloud3X;
export { Cloud3X };
