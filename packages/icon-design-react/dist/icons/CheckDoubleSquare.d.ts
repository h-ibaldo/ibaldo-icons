import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckDoubleSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckDoubleSquare: ForwardRefExoticComponent<CheckDoubleSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckDoubleSquare;
export { CheckDoubleSquare };
