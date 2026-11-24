import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDots: ForwardRefExoticComponent<StopwatchDotsProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDots;
export { StopwatchDots };
