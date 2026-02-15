import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Check: ForwardRefExoticComponent<Cloud3CheckProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Check;
export { Cloud3Check };
