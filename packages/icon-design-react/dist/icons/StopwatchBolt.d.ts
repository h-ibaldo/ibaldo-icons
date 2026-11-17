import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchBolt: ForwardRefExoticComponent<StopwatchBoltProps & RefAttributes<SVGSVGElement>>;

export default StopwatchBolt;
export { StopwatchBolt };
