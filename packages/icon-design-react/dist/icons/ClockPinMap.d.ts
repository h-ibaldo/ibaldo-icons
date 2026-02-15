import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPinMapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPinMap: ForwardRefExoticComponent<ClockPinMapProps & RefAttributes<SVGSVGElement>>;

export default ClockPinMap;
export { ClockPinMap };
