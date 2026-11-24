import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPlus: ForwardRefExoticComponent<StopwatchPlusProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPlus;
export { StopwatchPlus };
