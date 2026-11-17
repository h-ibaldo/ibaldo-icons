import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareOpenSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareOpenSquare: ForwardRefExoticComponent<CheckSquareOpenSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckSquareOpenSquare;
export { CheckSquareOpenSquare };
