import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchOffDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchOffDetached: ForwardRefExoticComponent<StopwatchOffDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchOffDetached;
export { StopwatchOffDetached };
