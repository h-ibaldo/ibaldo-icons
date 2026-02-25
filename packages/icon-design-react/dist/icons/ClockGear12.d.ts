import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockGear12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockGear12: ForwardRefExoticComponent<ClockGear12Props & RefAttributes<SVGSVGElement>>;

export default ClockGear12;
export { ClockGear12 };
