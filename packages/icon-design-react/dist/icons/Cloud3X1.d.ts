import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3X1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3X1: ForwardRefExoticComponent<Cloud3X1Props & RefAttributes<SVGSVGElement>>;

export default Cloud3X1;
export { Cloud3X1 };
