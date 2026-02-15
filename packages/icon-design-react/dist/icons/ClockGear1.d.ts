import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockGear1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockGear1: ForwardRefExoticComponent<ClockGear1Props & RefAttributes<SVGSVGElement>>;

export default ClockGear1;
export { ClockGear1 };
