import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockGearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockGear: ForwardRefExoticComponent<ClockGearProps & RefAttributes<SVGSVGElement>>;

export default ClockGear;
export { ClockGear };
