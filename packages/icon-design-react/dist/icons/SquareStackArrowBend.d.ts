import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackArrowBendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackArrowBend: ForwardRefExoticComponent<SquareStackArrowBendProps & RefAttributes<SVGSVGElement>>;

export default SquareStackArrowBend;
export { SquareStackArrowBend };
