import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowUpRight: ForwardRefExoticComponent<SquareArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowUpRight;
export { SquareArrowUpRight };
