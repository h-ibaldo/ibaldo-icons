import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchXDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchXDetached: ForwardRefExoticComponent<StopwatchXDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchXDetached;
export { StopwatchXDetached };
