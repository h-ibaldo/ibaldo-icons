import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock: ForwardRefExoticComponent<LockProps & RefAttributes<SVGSVGElement>>;

export default Lock;
export { Lock };
