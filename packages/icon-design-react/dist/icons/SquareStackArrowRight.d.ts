import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackArrowRight: ForwardRefExoticComponent<SquareStackArrowRightProps & RefAttributes<SVGSVGElement>>;

export default SquareStackArrowRight;
export { SquareStackArrowRight };
