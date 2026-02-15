import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3X2: ForwardRefExoticComponent<Cloud3X2Props & RefAttributes<SVGSVGElement>>;

export default Cloud3X2;
export { Cloud3X2 };
