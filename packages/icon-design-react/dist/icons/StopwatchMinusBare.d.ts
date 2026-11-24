import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchMinusBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchMinusBare: ForwardRefExoticComponent<StopwatchMinusBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchMinusBare;
export { StopwatchMinusBare };
