import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTurnLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTurnLeft: ForwardRefExoticComponent<ClockTurnLeftProps & RefAttributes<SVGSVGElement>>;

export default ClockTurnLeft;
export { ClockTurnLeft };
