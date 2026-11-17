import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkDoubleSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkDoubleSquare: ForwardRefExoticComponent<CheckMarkDoubleSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkDoubleSquare;
export { CheckMarkDoubleSquare };
