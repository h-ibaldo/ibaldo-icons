import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchSnoozeBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchSnoozeBare: ForwardRefExoticComponent<StopwatchSnoozeBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchSnoozeBare;
export { StopwatchSnoozeBare };
