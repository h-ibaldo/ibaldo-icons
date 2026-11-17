import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchNeedleArcRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchNeedleArcRight: ForwardRefExoticComponent<StopwatchNeedleArcRightProps & RefAttributes<SVGSVGElement>>;

export default StopwatchNeedleArcRight;
export { StopwatchNeedleArcRight };
