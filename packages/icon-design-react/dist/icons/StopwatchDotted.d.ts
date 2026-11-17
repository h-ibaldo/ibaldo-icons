import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDotted: ForwardRefExoticComponent<StopwatchDottedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDotted;
export { StopwatchDotted };
