import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3LockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Lock: ForwardRefExoticComponent<Cloud3LockProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Lock;
export { Cloud3Lock };
