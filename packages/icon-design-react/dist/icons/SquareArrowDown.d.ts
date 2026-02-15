import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowDown: ForwardRefExoticComponent<SquareArrowDownProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowDown;
export { SquareArrowDown };
