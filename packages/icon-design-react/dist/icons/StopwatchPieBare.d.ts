import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPieBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPieBare: ForwardRefExoticComponent<StopwatchPieBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPieBare;
export { StopwatchPieBare };
