import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerClockStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerClockStraight: ForwardRefExoticComponent<PointerClockStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerClockStraight;
export { PointerClockStraight };
