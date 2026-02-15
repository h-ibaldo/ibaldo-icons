import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockHourglassProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockHourglass: ForwardRefExoticComponent<ClockHourglassProps & RefAttributes<SVGSVGElement>>;

export default ClockHourglass;
export { ClockHourglass };
