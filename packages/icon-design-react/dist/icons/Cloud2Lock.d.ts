import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2LockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Lock: ForwardRefExoticComponent<Cloud2LockProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Lock;
export { Cloud2Lock };
