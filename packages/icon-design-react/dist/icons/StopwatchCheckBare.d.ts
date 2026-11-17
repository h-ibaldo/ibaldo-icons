import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchCheckBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchCheckBare: ForwardRefExoticComponent<StopwatchCheckBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchCheckBare;
export { StopwatchCheckBare };
