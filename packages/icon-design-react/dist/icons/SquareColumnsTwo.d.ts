import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareColumnsTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareColumnsTwo: ForwardRefExoticComponent<SquareColumnsTwoProps & RefAttributes<SVGSVGElement>>;

export default SquareColumnsTwo;
export { SquareColumnsTwo };
