import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPinMap2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPinMap2: ForwardRefExoticComponent<ClockPinMap2Props & RefAttributes<SVGSVGElement>>;

export default ClockPinMap2;
export { ClockPinMap2 };
