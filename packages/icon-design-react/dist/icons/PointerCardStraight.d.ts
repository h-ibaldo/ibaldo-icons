import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerCardStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerCardStraight: ForwardRefExoticComponent<PointerCardStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerCardStraight;
export { PointerCardStraight };
