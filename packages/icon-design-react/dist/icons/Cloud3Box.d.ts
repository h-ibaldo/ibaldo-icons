import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3BoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Box: ForwardRefExoticComponent<Cloud3BoxProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Box;
export { Cloud3Box };
