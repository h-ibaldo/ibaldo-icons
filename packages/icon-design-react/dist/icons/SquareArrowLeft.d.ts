import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareArrowLeft: ForwardRefExoticComponent<SquareArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default SquareArrowLeft;
export { SquareArrowLeft };
