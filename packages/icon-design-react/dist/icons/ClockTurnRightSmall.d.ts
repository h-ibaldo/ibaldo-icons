import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTurnRightSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTurnRightSmall: ForwardRefExoticComponent<ClockTurnRightSmallProps & RefAttributes<SVGSVGElement>>;

export default ClockTurnRightSmall;
export { ClockTurnRightSmall };
