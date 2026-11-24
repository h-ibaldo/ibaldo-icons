import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerCheckCircleStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerCheckCircleStraight: ForwardRefExoticComponent<PointerCheckCircleStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerCheckCircleStraight;
export { PointerCheckCircleStraight };
