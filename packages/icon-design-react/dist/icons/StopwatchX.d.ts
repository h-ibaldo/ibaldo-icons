import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchX: ForwardRefExoticComponent<StopwatchXProps & RefAttributes<SVGSVGElement>>;

export default StopwatchX;
export { StopwatchX };
