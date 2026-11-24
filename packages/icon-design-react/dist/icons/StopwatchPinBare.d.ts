import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPinBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPinBare: ForwardRefExoticComponent<StopwatchPinBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPinBare;
export { StopwatchPinBare };
