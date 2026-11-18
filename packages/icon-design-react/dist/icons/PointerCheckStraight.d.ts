import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerCheckStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerCheckStraight: ForwardRefExoticComponent<PointerCheckStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerCheckStraight;
export { PointerCheckStraight };
