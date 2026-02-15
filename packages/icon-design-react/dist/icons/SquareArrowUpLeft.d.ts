import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowUpLeft: ForwardRefExoticComponent<SquareArrowUpLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowUpLeft;
export { SquareArrowUpLeft };
