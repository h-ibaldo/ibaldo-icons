import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchXBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchXBare: ForwardRefExoticComponent<StopwatchXBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchXBare;
export { StopwatchXBare };
