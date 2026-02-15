import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowDownLeft: ForwardRefExoticComponent<SquareArrowDownLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowDownLeft;
export { SquareArrowDownLeft };
