import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchAlertDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchAlertDetached: ForwardRefExoticComponent<StopwatchAlertDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchAlertDetached;
export { StopwatchAlertDetached };
