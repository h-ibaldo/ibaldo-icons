import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock4LockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock4Locked: ForwardRefExoticComponent<Lock4LockedProps & RefAttributes<SVGSVGElement>>;

export default Lock4Locked;
export { Lock4Locked };
