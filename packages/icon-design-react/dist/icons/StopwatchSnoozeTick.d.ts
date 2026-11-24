import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchSnoozeTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchSnoozeTick: ForwardRefExoticComponent<StopwatchSnoozeTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchSnoozeTick;
export { StopwatchSnoozeTick };
