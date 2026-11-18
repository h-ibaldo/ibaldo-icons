import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchBoltDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchBoltDetached: ForwardRefExoticComponent<StopwatchBoltDetachedProps & RefAttributes<SVGSVGElement>>;

export default StopwatchBoltDetached;
export { StopwatchBoltDetached };
