import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowRight: ForwardRefExoticComponent<SquareArrowRightProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowRight;
export { SquareArrowRight };
