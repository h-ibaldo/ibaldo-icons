import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock1LockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock1Locked: ForwardRefExoticComponent<Lock1LockedProps & RefAttributes<SVGSVGElement>>;

export default Lock1Locked;
export { Lock1Locked };
