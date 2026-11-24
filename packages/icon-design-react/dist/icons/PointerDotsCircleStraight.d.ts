import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerDotsCircleStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerDotsCircleStraight: ForwardRefExoticComponent<PointerDotsCircleStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerDotsCircleStraight;
export { PointerDotsCircleStraight };
