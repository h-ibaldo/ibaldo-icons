import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3X22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3X22: ForwardRefExoticComponent<Cloud3X22Props & RefAttributes<SVGSVGElement>>;

export default Cloud3X22;
export { Cloud3X22 };
