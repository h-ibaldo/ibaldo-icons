import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchAlertBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchAlertBare: ForwardRefExoticComponent<StopwatchAlertBareProps & RefAttributes<SVGSVGElement>>;

export default StopwatchAlertBare;
export { StopwatchAlertBare };
