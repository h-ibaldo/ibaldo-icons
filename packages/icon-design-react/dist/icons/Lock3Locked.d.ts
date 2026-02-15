import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock3LockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock3Locked: ForwardRefExoticComponent<Lock3LockedProps & RefAttributes<SVGSVGElement>>;

export default Lock3Locked;
export { Lock3Locked };
