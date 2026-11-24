import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTurnLeftSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTurnLeftSmall: ForwardRefExoticComponent<ClockTurnLeftSmallProps & RefAttributes<SVGSVGElement>>;

export default ClockTurnLeftSmall;
export { ClockTurnLeftSmall };
