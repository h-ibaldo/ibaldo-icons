import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDetached: ForwardRefExoticComponent<StopwatchDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDetached;
export { StopwatchDetached };
