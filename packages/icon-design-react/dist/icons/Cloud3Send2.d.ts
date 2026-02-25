import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Send2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Send2: ForwardRefExoticComponent<Cloud3Send2Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Send2;
export { Cloud3Send2 };
