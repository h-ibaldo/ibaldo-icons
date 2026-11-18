import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchBare: ForwardRefExoticComponent<StopwatchBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchBare;
export { StopwatchBare };
