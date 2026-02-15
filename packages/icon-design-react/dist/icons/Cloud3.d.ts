import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3: ForwardRefExoticComponent<Cloud3Props & RefAttributes<SVGSVGElement>>;

export default Cloud3;
export { Cloud3 };
