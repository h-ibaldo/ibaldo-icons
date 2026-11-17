import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchCheck: ForwardRefExoticComponent<StopwatchCheckProps & RefAttributes<SVGSVGElement>>;

export default StopwatchCheck;
export { StopwatchCheck };
