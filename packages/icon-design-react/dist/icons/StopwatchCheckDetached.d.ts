import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchCheckDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchCheckDetached: ForwardRefExoticComponent<StopwatchCheckDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchCheckDetached;
export { StopwatchCheckDetached };
