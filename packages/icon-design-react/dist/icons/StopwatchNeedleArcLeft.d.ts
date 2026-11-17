import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchNeedleArcLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchNeedleArcLeft: ForwardRefExoticComponent<StopwatchNeedleArcLeftProps & RefAttributes<SVGSVGElement>>;

export default StopwatchNeedleArcLeft;
export { StopwatchNeedleArcLeft };
