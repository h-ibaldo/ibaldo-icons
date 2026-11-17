import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDottedBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDottedBare: ForwardRefExoticComponent<StopwatchDottedBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDottedBare;
export { StopwatchDottedBare };
