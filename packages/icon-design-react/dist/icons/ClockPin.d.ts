import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPin: ForwardRefExoticComponent<ClockPinProps & RefAttributes<SVGSVGElement>>;

export default ClockPin;
export { ClockPin };
