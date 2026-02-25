import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockGear22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockGear22: ForwardRefExoticComponent<ClockGear22Props & RefAttributes<SVGSVGElement>>;

export default ClockGear22;
export { ClockGear22 };
