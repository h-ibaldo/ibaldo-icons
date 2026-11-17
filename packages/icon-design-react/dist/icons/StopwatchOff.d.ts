import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchOff: ForwardRefExoticComponent<StopwatchOffProps & RefAttributes<SVGSVGElement>>;

export default StopwatchOff;
export { StopwatchOff };
