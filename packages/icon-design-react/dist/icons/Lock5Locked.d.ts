import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5LockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5Locked: ForwardRefExoticComponent<Lock5LockedProps & RefAttributes<SVGSVGElement>>;

export default Lock5Locked;
export { Lock5Locked };
