import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkDoubleVerifiedSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkDoubleVerifiedSquare: ForwardRefExoticComponent<CheckMarkDoubleVerifiedSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkDoubleVerifiedSquare;
export { CheckMarkDoubleVerifiedSquare };
