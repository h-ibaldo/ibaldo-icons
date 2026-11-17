import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchBoltBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchBoltBare: ForwardRefExoticComponent<StopwatchBoltBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchBoltBare;
export { StopwatchBoltBare };
