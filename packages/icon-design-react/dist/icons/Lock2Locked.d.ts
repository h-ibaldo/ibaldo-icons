import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock2LockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock2Locked: ForwardRefExoticComponent<Lock2LockedProps & RefAttributes<SVGSVGElement>>;

export default Lock2Locked;
export { Lock2Locked };
