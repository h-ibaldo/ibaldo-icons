import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Bulb2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Bulb2: ForwardRefExoticComponent<Cloud3Bulb2Props & RefAttributes<SVGSVGElement>>;

export default Cloud3Bulb2;
export { Cloud3Bulb2 };
