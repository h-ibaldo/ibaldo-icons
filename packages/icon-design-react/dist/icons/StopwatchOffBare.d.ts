import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchOffBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchOffBare: ForwardRefExoticComponent<StopwatchOffBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchOffBare;
export { StopwatchOffBare };
