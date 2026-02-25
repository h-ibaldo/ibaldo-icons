import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowUp2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowUp2: ForwardRefExoticComponent<SquareArrowUp2Props & RefAttributes<SVGSVGElement>>;

export default SquareArrowUp2;
export { SquareArrowUp2 };
