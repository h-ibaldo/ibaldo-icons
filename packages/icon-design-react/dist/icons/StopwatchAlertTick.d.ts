import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchAlertTickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchAlertTick: ForwardRefExoticComponent<StopwatchAlertTickProps & RefAttributes<SVGSVGElement>>;

export default StopwatchAlertTick;
export { StopwatchAlertTick };
