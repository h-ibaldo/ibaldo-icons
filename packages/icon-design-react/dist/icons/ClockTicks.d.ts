import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTicksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTicks: ForwardRefExoticComponent<ClockTicksProps & RefAttributes<SVGSVGElement>>;

export default ClockTicks;
export { ClockTicks };
