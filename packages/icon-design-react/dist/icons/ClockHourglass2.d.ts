import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockHourglass2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockHourglass2: ForwardRefExoticComponent<ClockHourglass2Props & RefAttributes<SVGSVGElement>>;

export default ClockHourglass2;
export { ClockHourglass2 };
