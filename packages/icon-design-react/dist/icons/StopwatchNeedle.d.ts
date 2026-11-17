import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchNeedleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchNeedle: ForwardRefExoticComponent<StopwatchNeedleProps & RefAttributes<SVGSVGElement>>;

export default StopwatchNeedle;
export { StopwatchNeedle };
