import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTurnRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTurnRight: ForwardRefExoticComponent<ClockTurnRightProps & RefAttributes<SVGSVGElement>>;

export default ClockTurnRight;
export { ClockTurnRight };
