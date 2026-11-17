import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchAlert: ForwardRefExoticComponent<StopwatchAlertProps & RefAttributes<SVGSVGElement>>;

export default StopwatchAlert;
export { StopwatchAlert };
